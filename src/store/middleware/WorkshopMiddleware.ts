import { isAnyOf, Middleware } from '@reduxjs/toolkit';
import {
  createLocalWorkshopItem,
  createWorkshopFeature,
  deleteLocalWorkshopItem,
  renameLocalWorkshopItem,
  updateLastUpdatedISOString,
  updateWorkshopEditorData,
  WorkshopState,
} from '../workshopSlice';
import {
  deleteWorkshopData,
  putWorkshopData,
} from '@/Utility/Indexed/Workshop/WorkshopDB';
import {
  bulkDeleteWorkshopItems,
  deleteWorkshopItem,
} from '@/lib/actions/db/workshop/delete.actions';

const isWhitelistedAction = isAnyOf(
  createLocalWorkshopItem,
  renameLocalWorkshopItem,
  deleteLocalWorkshopItem,
  createWorkshopFeature,
  updateWorkshopEditorData
);

const workshopMiddleware: Middleware<{}, { workshop: WorkshopState }> =
  (store) => (next) => (action: unknown) => {
    const result = next(action);

    if (isWhitelistedAction(action)) {
      switch (action.type) {
        case createLocalWorkshopItem.type:
        case renameLocalWorkshopItem.type:
        case createWorkshopFeature.type: {
          // Immediate save for these actions
          const updatedItem =
            store.getState().workshop.workshopItems[action.payload.id];

          store.dispatch(
            updateLastUpdatedISOString({
              id: action.payload.id,
              lastEditISOString: new Date().toISOString(),
            })
          );

          if (updatedItem) {
            console.log('Saving updated item to local storage', updatedItem);

            putWorkshopData(action.payload.id, updatedItem)
              .then(() => {
                console.log(
                  'Saved updated item to local storage:',
                  updatedItem
                );
              })
              .catch((error) => {
                console.error(
                  'Error saving updated item to local storage:',
                  error
                );
              });
          }
          break;
        }
        case deleteLocalWorkshopItem.type: {
          console.log('Deleting item from local storage', action.payload);
          // find any features that are children of the item being deleted
          const featuresToDelete = Object.values(
            store.getState().workshop.workshopItems
          ).filter((item) => item.parentId === action.payload);

          const deleteItems = async () => {
            let errorOccurred = false;
            try {
              await bulkDeleteWorkshopItems(
                featuresToDelete.map((item) => item.id)
              );
              await deleteWorkshopItem(action.payload);
              console.log('Deleted item from cloud:', action.payload);
            } catch (error) {
              console.error(
                'Error deleting item from cloud, canceling operation:',
                error
              );
              errorOccurred = true;
            }

            if (errorOccurred) {
              return;
            }

            try {
              await deleteWorkshopData(action.payload);
              console.log('Deleted item from local storage:', action.payload);
            } catch (error) {
              console.error(
                'Error deleting item from local storage, canceling operation:',
                action.payload,
                error
              );
              errorOccurred = true;
            }

            if (errorOccurred) {
              return;
            }

            for (const feature of featuresToDelete) {
              store.dispatch(deleteLocalWorkshopItem(feature.id));
            }
          };

          deleteItems();
          break;
        }
        case updateWorkshopEditorData.type: {
          const updatedItem =
            store.getState().workshop.workshopItems[action.payload.id];

          if (updatedItem) {
            console.log('Saving updated item to local storage', updatedItem);

            putWorkshopData(action.payload.id, updatedItem)
              .then(() => {
                console.log(
                  'Saved updated item to local storage:',
                  updatedItem
                );
              })
              .catch((error) => {
                console.error(
                  'Error saving updated item to local storage:',
                  error
                );
              });
          }
          break;
        }
      }
    }
    //returning the next function allows the saving to occur after the action has been dispatched
    return result;
  };

export default workshopMiddleware;

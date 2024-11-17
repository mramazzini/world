import { isAnyOf, Middleware } from '@reduxjs/toolkit';
import { setRawCharacter, SheetState } from '../sheetSlice';

const isWhitelistedAction = isAnyOf(setRawCharacter);

const workshopMiddleware: Middleware<{}, { workshop: SheetState }> =
  (store) => (next) => (action: unknown) => {
    const result = next(action);

    if (isWhitelistedAction(action)) {
      switch (action.type) {
        case setRawCharacter.type: {
          // Immediate save for these actions
          const updatedItem = store.getState().workshop.rawCharacter;

          console.log('Saving updated item to local storage', updatedItem);

          // putWorkshopData(action.payload.id, updatedItem)
          //   .then(() => {
          //     console.log(
          //       'Saved updated item to local storage:',
          //       updatedItem
          //     );
          //   })
          //   .catch((error) => {
          //     console.error(
          //       'Error saving updated item to local storage:',
          //       updatedItem,
          //       error
          //     );
          //   });
          break;
        }
      }
    }
    //returning the next function allows the saving to occur after the action has been dispatched
    return result;
  };

export default workshopMiddleware;

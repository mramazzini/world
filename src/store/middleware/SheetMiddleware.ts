import { isAnyOf, Middleware } from '@reduxjs/toolkit';
import { setCharacterState, SheetState } from '../sheetSlice';
import { putCharacterData } from '@/Utility/Indexed/Sheet/SheetDB';

const isWhitelistedAction = isAnyOf(setCharacterState);

const sheetMiddleware: Middleware<{}, { sheet: SheetState }> =
  (store) => (next) => (action: unknown) => {
    const result = next(action);

    if (isWhitelistedAction(action)) {
      switch (action.type) {
        case setCharacterState.type: {
          // Immediate save for these actions
          const updatedItem = store.getState().sheet.state;

          if (!updatedItem) {
            console.error('No updated item to save:', updatedItem);
            break;
          }

          console.log('Saving updated item to local storage', updatedItem);

          putCharacterData(action.payload.id, updatedItem)
            .then(() => {
              console.log('Saved updated item to local storage:', updatedItem);
            })
            .catch((error) => {
              console.error(
                'Error saving updated item to local storage:',
                updatedItem,
                error
              );
            });
          break;
        }
      }
    }
    //returning the next function allows the saving to occur after the action has been dispatched
    return result;
  };

export default sheetMiddleware;

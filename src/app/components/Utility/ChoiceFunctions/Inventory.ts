export const itemInInventory = ({
  state,
  itemID,
}: {
  state: PrismaJson.CharacterState;
  itemID: number;
}) => {
  return state.inventory.find((item) => item.item === itemID);
};

export const addToInventory = ({
  state,
  itemID,
  quantity,
}: {
  state: PrismaJson.CharacterState;
  itemID: number;
  quantity: number;
}) => {
  if (itemInInventory({ state, itemID })) {
    return {
      ...state,
      inventory: state.inventory.map((item) => {
        if (item.item === itemID) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      }),
    } as PrismaJson.CharacterState;
  }
  return {
    ...state,
    inventory: [
      ...state.inventory,
      {
        item: itemID,
        quantity,
      },
    ],
  } as PrismaJson.CharacterState;
};

export const bulkAddToInventory = (
  state: PrismaJson.CharacterState,
  items: PrismaJson.QuantityItem[][]
) => {
  let newState = state;
  items.forEach((itemList) => {
    itemList.forEach((item) => {
      newState = addToInventory({
        state: newState,
        itemID: item.item,
        quantity: item.quantity,
      });
    });
  });
  return newState;
};

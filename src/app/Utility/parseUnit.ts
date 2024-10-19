export const parseUnit = (value: PrismaJson.QuantityUnit) => {
  return value.quantity + " " + value.unit;
};

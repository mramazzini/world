import { ArmorType } from '@prisma/client';

const ArmorTypeToText = (armorType: ArmorType): string => {
  switch (armorType) {
    case ArmorType.LIGHT:
      return 'Light';
    case ArmorType.MEDIUM:
      return 'Medium';
    case ArmorType.HEAVY:
      return 'Heavy';
    case ArmorType.SHIELDS:
      return 'Shield';
    default:
      return '';
  }
};

export default ArmorTypeToText;

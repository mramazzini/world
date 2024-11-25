import { SpellFocus } from '@prisma/client';

export const SpellFocusToText = (props: SpellFocus): string => {
  return props.replaceAll('_', ' ').toCapitalCase();
};

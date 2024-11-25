import { ToolGroup } from '@prisma/client';

export const ToolGroupToText = (toolGroup: ToolGroup): string => {
  switch (toolGroup) {
    case ToolGroup.ARTISANS_TOOLS:
      return "Artisan's Tools";
    case ToolGroup.GAMING_SETS:
      return 'Gaming Sets';
    case ToolGroup.INSTRUMENTS:
      return 'Musical Instruments';
    case ToolGroup.VEHICLES:
      return 'Vehicles';
  }
};

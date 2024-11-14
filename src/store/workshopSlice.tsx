import { WorkshopItemEditorData } from '@/lib/types/workshop';
import { WorkshopProtocol } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WorkshopState {
  sideNavOpen: boolean;
  selectedTab?: string;
  workshopItems: {
    [key: string]: PrismaJson.WorkshopItemData;
  };
  itemsToDelete: string[];

  contextMenuVisible: boolean;
  contextMenuPosition: { x: number; y: number };
  contextMenuTab: string;
}

const initialState: WorkshopState = {
  sideNavOpen: true,
  workshopItems: {},
  itemsToDelete: [],
  contextMenuVisible: false,
  contextMenuPosition: { x: 0, y: 0 },
  contextMenuTab: '',
};

const workshopSlice = createSlice({
  name: 'workshop',
  initialState,
  reducers: {
    toggleSideNav(state) {
      state.sideNavOpen = !state.sideNavOpen;
    },
    selectTab(state, action: PayloadAction<string>) {
      state.selectedTab = action.payload;
    },
    setWorkshopItems(
      state,
      action: PayloadAction<{
        items: PrismaJson.WorkshopItemData[];
      }>
    ) {
      state.workshopItems = action.payload.items.reduce(
        (acc, item) => {
          acc[item.id] = item;
          return acc;
        },
        {} as { [key: string]: PrismaJson.WorkshopItemData }
      );
    },
    createLocalWorkshopItem(
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        protocol: WorkshopProtocol;
        lastEditISOString: string;
      }>
    ) {
      const { id, name, protocol } = action.payload;
      state.workshopItems[id] = {
        id,
        name,
        protocol,
        lastEditISOString: action.payload.lastEditISOString,
      };
      state.selectedTab = id;
    },
    renameLocalWorkshopItem(
      state,
      action: PayloadAction<{
        id: string;
        name: string;
      }>
    ) {
      const { id, name } = action.payload;
      state.workshopItems[id].name = name;
    },
    deleteLocalWorkshopItem(state, action: PayloadAction<string>) {
      console.log('Deleting item', state.workshopItems[action.payload]);
      delete state.workshopItems[action.payload];
      state.itemsToDelete.push(action.payload);
    },
    setWorkshopEditorData(
      state,
      action: PayloadAction<{
        id: string;
        data: WorkshopItemEditorData;
      }>
    ) {
      const { id, data } = action.payload;
      state.workshopItems[id].data = data;
    },
    openContextMenu(
      state,
      action: PayloadAction<{ x: number; y: number; tab: string }>
    ) {
      state.contextMenuVisible = true;
      state.contextMenuPosition = action.payload;
      state.contextMenuTab = action.payload.tab;
    },
    closeContextMenu(state) {
      state.contextMenuVisible = false;
    },
    createWorkshopFeature(
      state,
      action: PayloadAction<{
        id: string;
        parentId: string;
        lastEditISOString: string;
      }>
    ) {
      const { id, parentId, lastEditISOString } = action.payload;
      state.workshopItems[id] = {
        id,
        name: 'New Feature',
        protocol: WorkshopProtocol.FEATURE,
        parentId,
        lastEditISOString,
      };
    },
    updateWorkshopEditorData(
      state,
      action: PayloadAction<{
        id: string;
        data: WorkshopItemEditorData;
      }>
    ) {
      const { id, data } = action.payload;
      state.workshopItems[id].data = data;
    },
    updateLastUpdatedISOString(
      state,
      action: PayloadAction<{
        id: string;
        lastEditISOString: string;
      }>
    ) {
      state.workshopItems[action.payload.id].lastEditISOString =
        action.payload.lastEditISOString;
    },
    updateLastSyncedISOString(
      state,
      action: PayloadAction<{
        id: string;
        lastSyncedISOString: string;
      }>
    ) {
      state.workshopItems[action.payload.id].lastSyncedISOString =
        action.payload.lastSyncedISOString;
    },
  },
});

export const {
  toggleSideNav,
  selectTab,
  setWorkshopItems,
  createLocalWorkshopItem,
  renameLocalWorkshopItem,
  setWorkshopEditorData,
  deleteLocalWorkshopItem,
  openContextMenu,
  closeContextMenu,
  createWorkshopFeature,
  updateWorkshopEditorData,
  updateLastUpdatedISOString,
  updateLastSyncedISOString,
} = workshopSlice.actions;

export default workshopSlice.reducer;

import { useCallback } from 'react';
import useCharacterState from './useCharacter/useCharacterState';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCharacterState } from '@/store/sheetSlice';
import { RefreshEvent } from '@prisma/client';

const useResourceMutator = () => {
  const state = useCharacterState();
  const dispatch = useAppDispatch();
  const resources = useAppSelector((state) => state.sheet.resources);
  const getResource = useCallback(
    (resourceId: string) => {
      return resources.find((r) => r.resource.id === resourceId);
    },
    [resources]
  );

  const decreaseResourceAmount = (resourceId: string) => {
    if (!state) return;
    const resource = getResource(resourceId);
    if (!resource) return;

    if (resource.current === 0) return;

    dispatch(
      setCharacterState({
        ...state,
        resourcesUsed: {
          ...state.resourcesUsed,
          [resourceId]: (state.resourcesUsed[resourceId] || 0) + 1,
        },
      })
    );
  };

  const increaseResourceAmount = (resourceId: string) => {
    if (!state) return;
    const resource = getResource(resourceId);
    if (!resource) return;

    if (resource.current === resource.max) return;

    dispatch(
      setCharacterState({
        ...state,
        resourcesUsed: {
          ...state.resourcesUsed,
          [resourceId]: (state.resourcesUsed[resourceId] || 0) - 1,
        },
      })
    );
  };

  const shortRestRefresh = useCallback(() => {
    if (!state) return;
    resources.forEach((r) => {
      if (r.refreshOn === RefreshEvent.SHORT_REST) {
        dispatch(
          setCharacterState({
            ...state,
            resourcesUsed: Object.fromEntries(
              resources.map((r) => [r.resource.id, 0] as [string, number])
            ),
          })
        );
      }
    });
  }, [state, resources, dispatch]);

  const longRestRefresh = useCallback(() => {
    if (!state) return;
    resources.forEach((r) => {
      if (
        r.refreshOn === RefreshEvent.LONG_REST ||
        r.refreshOn === RefreshEvent.SHORT_REST
      ) {
        dispatch(
          setCharacterState({
            ...state,
            resourcesUsed: Object.fromEntries(
              resources.map((r) => [r.resource.id, 0] as [string, number])
            ),
          })
        );
      }
    });
  }, [state, resources, dispatch]);

  return {
    decreaseResourceAmount,
    increaseResourceAmount,
    shortRestRefresh,
    longRestRefresh,
  };
};

export default useResourceMutator;

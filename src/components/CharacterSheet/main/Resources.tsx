'use client';
import useCharacterState from '@/hooks/useCharacter/useCharacterState';
import useResourceMutator from '@/hooks/useResourceMutator';
import RefreshEventToText from '@/lib/utils/toText/RefreshActionToText';
import { useAppSelector } from '@/store/hooks';
import Tooltip from '@/Utility/Tooltip';
import Image from 'next/image';

const Resources = () => {
  const state = useCharacterState();
  const { decreaseResourceAmount, increaseResourceAmount } =
    useResourceMutator();
  const resources = useAppSelector((state) => state.sheet.resources);
  if (!state) return null;
  return (
    <>
      <div className="flex flex-col  overflow-scroll max-h-64 h-full">
        <div className="flex flex-col h-full w-full items-center">
          {resources.length == 0 && (
            <div className="flex flex-col w-full h-full justify-center items-center bg-base-300 rounded-xl">
              <p className="text-center p-4 font-bold">No Resources Found...</p>
              <Image
                src={'/empty.svg'}
                alt="Empty"
                width={75}
                height={75}
                className="opacity-50"
              />
              <p className="text-center p-4 text-md">
                Certain features will require resources to use.
              </p>
            </div>
          )}
          {resources.map((resourceData, index) => (
            <div
              key={index}
              className="col-span-4 flex flex-row items-center join m-1 w-full justify-center"
            >
              <Tooltip
                title={resourceData.resource.name}
                element={
                  <span className="join-item badge font-bold badge-lg badge-info text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                    i
                  </span>
                }
                additionalContent={
                  <div className="divider divider-primary mb-0">
                    Refreshes on:
                    <span className="text-primary font-bold">
                      {RefreshEventToText(resourceData.refreshOn)}
                    </span>
                  </div>
                }
              >
                {resourceData.resource.description}
              </Tooltip>
              <p className="join-item badge font-bold badge-lg w-full text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-40 bg-base-300">
                {resourceData.resource.name.length == 0 ? 'Resource' : ''}
                {resourceData.resource.name.length <= 17
                  ? resourceData.resource.name
                  : resourceData.resource.name.slice(0, 14) + '...'}
                : {resourceData.current}/{resourceData.max}
              </p>
              <button
                className="join-item btn btn-error btn-xs"
                onClick={(e) => {
                  e.preventDefault();
                  decreaseResourceAmount(resourceData.resource.id);
                }}
              >
                -
              </button>

              <button
                className="join-item btn btn-success btn-xs"
                onClick={(e) => {
                  e.preventDefault();
                  increaseResourceAmount(resourceData.resource.id);
                }}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resources;

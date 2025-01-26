import useSpeed from '@/hooks/useSpeed';
import { useAppSelector } from '@/store/hooks';

const CharacterStats = () => {
  const { getSpeed, SpeedType } = useSpeed();
  const { passivePerception, armorClass } = useAppSelector(
    (state) => state.sheet
  );
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-row items-center justify-between">
        <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
          Armor Class{' '}
        </h2>
        <div className="flex flex-row items-center join">
          <p className="badge badge-secondary join-item font-bold w-14">
            {armorClass} AC
          </p>
        </div>
      </div>
      <div className="divider m-0"></div>
      {/* passive perception */}
      <div className="flex flex-row items-center justify-between">
        <h2 className="pb-0 px-4 text-sm flex flex-row items-center">PP</h2>
        <div className="flex flex-row items-center join">
          <p className="badge badge-secondary font-bold  w-14">
            DC {passivePerception}
          </p>
        </div>
      </div>
      <div className="divider m-0"></div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="pb-0 px-4 text-sm flex flex-row items-center">Speed </h2>
        <div className="flex flex-row items-center join">
          <p className="badge badge-secondary font-bold w-14">
            {getSpeed(SpeedType.WALK)} ft
          </p>
        </div>
      </div>
      <div className="divider m-0"></div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
          Running
        </h2>
        <div className="flex flex-row items-center join">
          <p className="badge badge-secondary font-bold  w-14">
            {getSpeed(SpeedType.RUN)} ft
          </p>
        </div>
      </div>
      <div className="divider m-0" />
      <div className="flex flex-row items-center justify-between">
        <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
          Swimming
        </h2>
        <div className="flex flex-row items-center join">
          <p className="badge badge-secondary  font-bold  w-14">
            {getSpeed(SpeedType.SWIM)} ft
          </p>
        </div>
      </div>
      <div className="divider m-0"></div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="pb-0 px-4 text-sm flex flex-row items-center ">
          <span>Climbing </span>
        </h2>
        <div className="flex flex-row items-center join">
          <p className="badge badge-secondary font-bold  w-14">
            {getSpeed(SpeedType.CLIMB)} ft
          </p>
        </div>
      </div>
      <div className="divider m-0"></div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="pb-0 px-4 text-sm flex flex-row items-center">Flying</h2>
        <div className="flex flex-row items-center join">
          <p className="badge badge-secondary font-bold w-14">
            {getSpeed(SpeedType.FLY)} ft
          </p>
        </div>
      </div>
      <div className="divider m-0"></div>
    </div>
  );
};

export default CharacterStats;

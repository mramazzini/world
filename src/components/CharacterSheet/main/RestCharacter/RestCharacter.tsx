import ShortRest from './ShortRest';
import LongRest from './LongRest';

const RestCharacter = () => {
  return (
    <>
      <div className="flex w-full gap-4 items-center justify-center">
        <LongRest />
        <ShortRest />
      </div>
    </>
  );
};

export default RestCharacter;

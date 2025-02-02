'use client';
import Image from 'next/image';
// import useCharacterState from '@/hooks/useCharacter/useCharacterState';

const Spells = () => {
  // const state = useCharacterState();

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-row bg-base-300 rounded-xl p-4 h-full items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <p className="font-bold m-2">No Spells Found..</p>
          <Image
            src="/images/fireball.svg"
            alt="Empty"
            width={80}
            height={80}
            className="opacity-40 m-2"
          />
          <p className="m-2">
            Prepare spells to use them in combat. Prepared spells will be shown
            here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spells;

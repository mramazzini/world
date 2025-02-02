import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import ModalButton from '@/components/UI/Modal/ModalButton';
import useModal from '@/hooks/useModal';
import useResourceMutator from '@/hooks/useResourceMutator';
import { useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ShortRest = () => {
  const { id: shortRestId } = useModal();
  const { shortRestRefresh } = useResourceMutator();
  const [refreshStep, setRefreshStep] = useState<null | 'resource' | 'hp'>(
    null
  );
  const { hitDie, usedHitDie } = useAppSelector((state) => state.sheet);

  const handleShortRest = () => {
    setRefreshStep('resource');
  };

  useEffect(() => {
    //This is needed, because redux state is not updated in the same render cycle
    //So we need to wait for the state to be updated before we can reset the hp
    if (refreshStep === null) return;
    if (refreshStep === 'resource') {
      shortRestRefresh();
      setRefreshStep('hp');
    } else if (refreshStep === 'hp') {
      //resetHp();
      setRefreshStep(null);
    }
  }, [refreshStep, shortRestRefresh]);

  return (
    <>
      <ModalButton
        className="btn btn-base-300 border-primary grow"
        modalid={shortRestId}
        modaltype={'open'}
      >
        <Image src={'/campfire.svg'} width={20} height={20} alt="SR" />
      </ModalButton>
      <Modal id={shortRestId}>
        <ModalBox title="Rest">
          <h2 className="divider">Short Rest</h2>
          <p className="text-center">
            A Short Rest refreshes certain resources, and allows you to use some
            of your hit die to heal. They take 1 hour.
          </p>
          <div className="divider">Hit Die</div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(hitDie).map(([die, count]) => (
              <div key={die} className="flex flex-row items-center gap-2">
                {/* <Image src={'/d20.svg'} width={20} height={20} alt="d20" /> */}
                <span>d{die}</span>
                <span>
                  {count - (usedHitDie[Number(die)] || 0)}/{count}
                </span>
              </div>
            ))}
          </div>
          <div className="divider mt-8">
            <ModalButton
              className="btn btn-primary di"
              onClick={handleShortRest}
              modalid={shortRestId}
              modaltype="close"
            >
              Use Hit Die and Rest
            </ModalButton>
          </div>
        </ModalBox>
      </Modal>
    </>
  );
};

export default ShortRest;

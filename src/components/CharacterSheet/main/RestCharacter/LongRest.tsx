import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import ModalButton from '@/components/UI/Modal/ModalButton';
import useModal from '@/hooks/useModal';
import useSpellcaster from '@/hooks/CharacterControllers/useSpellcaster';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useResourceMutator from '@/hooks/useResourceMutator';
import useHitpointsMutator from '@/hooks/useHitpointsMutator';
import useSpellMutator from '@/hooks/useSpellMutator';

const LongRest = () => {
  const { id: longRestId } = useModal();
  const { longRestRefresh } = useResourceMutator();
  const { resetHp } = useHitpointsMutator();
  const { refreshSpells } = useSpellMutator();
  const [refreshStep, setRefreshStep] = useState<
    null | 'resource' | 'hp' | 'spells'
  >(null);

  const handleLongRest = () => {
    setRefreshStep('resource');
  };

  useEffect(() => {
    //This is needed, because redux state is not updated in the same render cycle
    //So we need to wait for the state to be updated before we can reset the hp
    if (refreshStep === null) return;
    if (refreshStep === 'resource') {
      longRestRefresh();
      setRefreshStep('hp');
    } else if (refreshStep === 'hp') {
      resetHp();
      setRefreshStep('spells');
    } else if (refreshStep === 'spells') {
      refreshSpells('long');
      setRefreshStep(null);
    }
  }, [refreshStep, longRestRefresh, resetHp, refreshSpells]);

  return (
    <>
      <ModalButton
        className="btn btn-base-300 border-primary grow"
        modalid={longRestId}
        modaltype={'open'}
      >
        <Image src={'/zzz.svg'} width={20} height={20} alt="SR" />
      </ModalButton>
      <Modal id={longRestId}>
        <ModalBox title="Rest">
          <h2 className="divider">Long Rest</h2>
          <p className="text-center">
            A Long Rest refreshes all resources, hit die, spell slots, and
            restores you to full hit points. They take 8 hours.
          </p>

          <div className="divider mt-8">
            <ModalButton
              className="btn btn-primary di"
              onClick={(e) => {
                e.preventDefault();
                handleLongRest();
              }}
              modalid={longRestId}
              modaltype="close"
            >
              Rest
            </ModalButton>
          </div>
        </ModalBox>
      </Modal>
    </>
  );
};

export default LongRest;

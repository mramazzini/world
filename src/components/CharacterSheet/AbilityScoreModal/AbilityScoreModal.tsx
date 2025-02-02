import FormField from '@/components/UI/Formik/FormField';
import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import useCharacterState from '@/hooks/useCharacter/useCharacterState';
import useModal from '@/hooks/useModal';
import AbilityToText from '@/lib/utils/toText/AbilityToText';
import { useAppDispatch } from '@/store/hooks';
import { setCharacterState } from '@/store/sheetSlice';
import { Ability } from '@prisma/client';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';

import * as Yup from 'yup';
//Modal to set ability scores
const AbilityScoreModal = () => {
  const { id, openModal, closeModal } = useModal();
  const state = useCharacterState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!state) return;
    if (!state.abilitiesInitialized) {
      openModal();
    }
  }, [state, dispatch, openModal]);

  const abilityDescriptions = {
    STR: 'Strength measures physical power.',
    DEX: 'Dexterity measures agility and reflexes.',
    CON: 'Constitution measures health and stamina.',
    INT: 'Intelligence measures mental acuity.',
    WIS: 'Wisdom measures perception and insight.',
    CHA: 'Charisma measures force of personality.',
  };

  const validationSchema = Yup.object().shape({
    STR: Yup.number()
      .required('Strength must be a number')
      .min(1, 'Must be at least 1'),
    DEX: Yup.number()
      .required('Dexterity must be a number')
      .min(1, 'Must be at least 1'),
    CON: Yup.number()
      .required('Constitution must be a number')
      .min(1, 'Must be at least 1'),
    INT: Yup.number()
      .required('Intelligence must be a number')
      .min(1, 'Must be at least 1'),
    WIS: Yup.number()
      .required('Wisdom must be a number')
      .min(1, 'Must be at least 1'),
    CHA: Yup.number()
      .required('Charisma must be a number')
      .min(1, 'Must be at least 1'),
  });

  //capture esc event
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (!state) return;
        dispatch(
          setCharacterState({
            ...state,
            abilitiesInitialized: true,
          })
        );
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal, dispatch, state]);

  return (
    <>
      <Modal id={id}>
        <ModalBox className="max-w-[64rem]">
          <h2 className="text-2xl divider">Set your Ability Scores</h2>
          <p className="text-center">
            Set your ability scores. These will be used to calculate your
            ability modifiers.{' '}
          </p>
          <p className="font-extrabold text-accent text-center">
            This does not include any feature that affects your ability scores
            in any way. (e.g. racial bonuses)
          </p>
          <div className="divider"></div>
          <Formik
            initialValues={{
              STR: state?.baseSTR || 10,
              DEX: state?.baseDEX || 10,
              CON: state?.baseCON || 10,
              INT: state?.baseINT || 10,
              WIS: state?.baseWIS || 10,
              CHA: state?.baseCHA || 10,
            }}
            onSubmit={(values) => {
              if (!state) return;
              closeModal();
              dispatch(
                setCharacterState({
                  ...state,
                  baseCHA: values.CHA,
                  baseCON: values.CON,
                  baseDEX: values.DEX,
                  baseINT: values.INT,
                  baseSTR: values.STR,
                  baseWIS: values.WIS,
                  abilitiesInitialized: true,
                })
              );
            }}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="grid xl:grid-cols-2 gap-4 ">
                {Object.values(Ability).map((ability) => {
                  return (
                    <div
                      key={ability}
                      className="form-control bg-base-300 p-4 rounded-xl h-full flex flex-col justify-between"
                    >
                      <label
                        htmlFor={ability}
                        className="mb-1 flex flex-col items-center"
                      >
                        <span className="font-bold divider">
                          {AbilityToText(ability)}
                        </span>{' '}
                        <span className="text-sm text-center w-full">
                          {abilityDescriptions[ability as Ability]}
                        </span>
                      </label>
                      <div className="divider m-0"></div>
                      <FormField
                        name={ability}
                        label={AbilityToText(ability)}
                        as="input"
                        formProps={{
                          type: 'number',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="divider"></div>
              <p className="text-center font-bold italic">
                This can be changed later in the Stats tab.
              </p>
              <div className="flex justify-end gap-4">
                <button className="btn btn-primary" type="submit">
                  Save
                </button>
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!state) return;
                    dispatch(
                      setCharacterState({
                        ...state,
                        abilitiesInitialized: true,
                      })
                    );
                    closeModal();
                  }}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </ModalBox>
      </Modal>
    </>
  );
};

export default AbilityScoreModal;

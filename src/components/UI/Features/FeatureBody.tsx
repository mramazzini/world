import useCharacterState from '@/hooks/useCharacter/useCharacterState';
import useLog from '@/hooks/useLog';
import { FeatureInfo, FeatureInGroupInfo } from '@/lib/types/modelInfo';
import { useAppSelector } from '@/store/hooks';
import { usePathname } from 'next/navigation';
import ModalButton from '../Modal/ModalButton';
import { v4 } from 'uuid';
import P from '@/Utility/FormatAndSanitize';
import { Fragment } from 'react';
import JsonTable from '@/Utility/JsonTable';
import Modal from '../Modal/Modal';
import FeatureList from './FeatureList';
import ModalBox from '../Modal/ModalBox';
import useModal from '@/hooks/useModal';
import FeatureSelectorModal from './FeatureSelectorModal';

interface Props {
  feature: FeatureInfo | FeatureInGroupInfo;
  locked?: boolean;
}

const FeatureBody = ({ feature, locked = true }: Props) => {
  const { id } = useModal();
  const pathname = usePathname();
  const { diceLogPush } = useLog();
  const state = useCharacterState();
  const activeEffects = useAppSelector((state) => state.sheet.activeEffects);

  const isInCharacterSheet = pathname.includes('dashboard');
  return (
    <>
      {isInCharacterSheet &&
        activeEffects.some((active) => feature.id === active.id) &&
        feature.Effects.some(
          (effect) => effect.rollFormulas && effect.rollFormulas.length > 0
        ) && (
          <div className="divider m-0">
            <h4>Rolls</h4>
          </div>
        )}

      {isInCharacterSheet &&
        [...feature.Effects]
          .sort((a, b) => {
            return a.level - b.level;
          })
          .map(
            (effect) =>
              activeEffects.some((active) => effect.id === active.id) && (
                <div key={v4()}>
                  {effect.rollFormulas && effect.rollFormulas.length > 0 && (
                    <ul className="list-disc">
                      {effect.rollFormulas.map((roll) => (
                        <li key={v4()} className="ml-4">
                          <ModalButton
                            modalid={id}
                            modaltype="open"
                            className="btn btn-xs btn-primary"
                            onClick={() => {
                              diceLogPush(
                                roll,
                                `${feature.name} - ${effect.level}`
                              );
                            }}
                          >
                            {roll}
                          </ModalButton>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
          )}
      <div className="divider m-0"></div>
      <p>
        <P>{feature.description}</P>
      </p>
      <div className="divider m-0"></div>

      {feature.options && feature.options.length > 0 && (
        <>
          <ul className="list-disc ">
            {feature.options.map((option) => (
              <Fragment key={v4()}>
                <li className="ml-4">
                  <P>{option}</P>
                </li>
                <div className="divider m-0"></div>
              </Fragment>
            ))}
          </ul>
        </>
      )}
      {feature.extendedTable && feature.extendedTable.length > 0 && (
        <>
          <div className="bg-base-100">
            <JsonTable json={feature.extendedTable} />
          </div>
          <div className="divider m-0"></div>
        </>
      )}
      {feature.postTableData && (
        <>
          <div className="bg-base-100">{feature.postTableData}</div>
          <div className="divider m-0"></div>
        </>
      )}
      {feature.Effects &&
        feature.Effects.map((effect) => {
          if ('EffectGrantsGroup' in effect) {
            if (isInCharacterSheet) {
              return (
                <Fragment key={effect.id}>
                  {effect.EffectGrantsGroup.map((group) => (
                    <FeatureSelectorModal
                      key={effect.id}
                      effect={group}
                      locked={locked}
                    />
                  ))}
                </Fragment>
              );
            } else {
              return (
                <Fragment key={effect.id}>
                  {effect.EffectGrantsGroup.map((group) =>
                    group.FeaturesToChooseFrom.length === 0 ? (
                      <div
                        key={group.groupId}
                        className="bg-base-300 p-4 rounded-xl"
                      >
                        <FeatureList
                          features={group.FeatureGroup.FeaturesInGroup}
                        />
                      </div>
                    ) : (
                      <div
                        key={group.groupId}
                        className="bg-base-300 p-4 rounded-xl"
                      >
                        <FeatureList features={group.FeaturesToChooseFrom} />
                      </div>
                    )
                  )}
                </Fragment>
              );
            }
          }
        })}
      <Modal id={id}>
        <ModalBox className="flex flex-col">
          <h3>Roll Result</h3>
          <div className="divider m-0"></div>

          {state && state.characterLog && state.characterLog.length > 0 && (
            <span>{state.characterLog[state.characterLog.length - 1].log}</span>
          )}
          <div className="divider m-0"></div>
          <ModalButton
            modaltype="close"
            modalid={id}
            className="btn btn-error btn-sm w-min"
          >
            Close
          </ModalButton>
        </ModalBox>
      </Modal>
    </>
  );
};

export default FeatureBody;

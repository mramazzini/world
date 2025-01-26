import useChoicesSelector from '@/hooks/useChoicesSelector';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setActiveChoiceId } from '@/store/sheetSlice';
import { useEffect } from 'react';

const ChoiceSelector = () => {
  const { pendingChoices } = useChoicesSelector();
  const activeChoiceId = useAppSelector((state) => state.sheet.activeChoiceId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pendingChoices.length === 0) {
      dispatch(setActiveChoiceId(null));
    } else {
      dispatch(setActiveChoiceId(pendingChoices[0].id));
    }
  }, [pendingChoices, dispatch]);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="divider mb-0">Pending Choices</h3>
      <p className="text text-center text-primary">Select a choice below.</p>
      <ul className="bg-base-100 menu rounded-xl">
        {pendingChoices.map((choice) => (
          <li key={choice.id}>
            <button
              className={choice.id === activeChoiceId ? 'active' : ''}
              onClick={() => dispatch(setActiveChoiceId(choice.id))}
            >
              {choice.description}
            </button>
          </li>
        ))}
      </ul>
      {pendingChoices.length > 0 && (
        <p className="text-center">{pendingChoices.length} pending choices.</p>
      )}
      {pendingChoices.length === 0 && (
        <p className="text-center">No pending choices.</p>
      )}
    </div>
  );
};

export default ChoiceSelector;

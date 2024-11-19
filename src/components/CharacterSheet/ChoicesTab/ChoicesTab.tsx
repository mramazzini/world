import useCharacterChoices from '@/hooks/useCharacterChoices';
import ChoiceSelector from './ChoiceSelector';
import ChoiceDisplay from './ChoiceDisplay';

const ChoicesTab = () => {
  const { pendingChoices, completedChoices } = useCharacterChoices();
  console.log(pendingChoices, completedChoices);
  return (
    <div className="grid grid-cols-12 gap-4 bg-base-200 p-4 rounded-xl min-h-48">
      <section className="col-span-3 bg-base-300 p-4 rounded-xl">
        <ChoiceSelector />
      </section>
      <section className="col-span-9 bg-base-300 p-4 rounded-xl">
        <ChoiceDisplay />
      </section>
    </div>
  );
};

export default ChoicesTab;

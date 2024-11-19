import ConfirmButton from '@/components/UI/ConfirmButton';
import LoadingButton from '@/components/UI/Formik/LoadingButton';
import useChoiceResolver from '@/hooks/useChoiceResolver';
import { ChoiceOutput } from '@/lib/types/protocols';

const ChoiceResolverButton = ({
  disabled,
  selected,
  choiceId,
}: {
  disabled: boolean;
  selected: ChoiceOutput;
  choiceId: string;
}) => {
  const { resolve, loading } = useChoiceResolver(choiceId);

  return (
    <div className="divider mt-8">
      {loading ? (
        <LoadingButton isLoading>Submit</LoadingButton>
      ) : (
        <ConfirmButton
          disabled={disabled}
          className="btn btn-primary btn-sm"
          onClick={() => resolve(selected)}
        >
          Submit
        </ConfirmButton>
      )}
    </div>
  );
};

export default ChoiceResolverButton;

import ConfirmButton from '@/components/UI/ConfirmButton';
import LoadingButton from '@/components/UI/Formik/LoadingButton';
import useChoiceResolver from '@/hooks/useChoiceResolver';
import { ChoiceOutput } from '@/lib/types/protocols';
import { useCallback } from 'react';

const ChoiceResolverButton = ({
  disabled,
  selected,
  choiceId,
  beforeSubmit,
}: {
  disabled: boolean;
  selected: ChoiceOutput;
  choiceId: string;

  // Submission fails if beforeSubmit returns false
  beforeSubmit?: () => boolean | Promise<boolean>;
}) => {
  const { resolve, loading } = useChoiceResolver(choiceId);

  const handleSubmit = useCallback(async () => {
    if (disabled) return;
    if (beforeSubmit && !(await beforeSubmit())) return;
    await resolve(selected);
  }, [disabled, beforeSubmit, resolve, selected]);

  return (
    <div className="divider mt-8">
      {loading ? (
        <LoadingButton isLoading>Submit</LoadingButton>
      ) : (
        <ConfirmButton
          disabled={disabled}
          className="btn btn-primary btn-sm"
          onClick={handleSubmit}
        >
          Submit
        </ConfirmButton>
      )}
    </div>
  );
};

export default ChoiceResolverButton;

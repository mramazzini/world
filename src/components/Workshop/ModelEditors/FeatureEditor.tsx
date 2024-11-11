import FormField from '@/components/UI/Formik/FormField';
import FormFieldArray from '@/components/UI/Formik/FormFieldArray';
import Loading from '@/components/UI/Loading';
import useWorkshopEditor from '@/hooks/useWorkshopEditor';
import { FeatureEditorData } from '@/lib/types/workshop';
import numberArray from '@/lib/utils/numberArray';
import P from '@/Utility/FormatAndSanitize';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const FeatureEditor = () => {
  const { data, updateData } = useWorkshopEditor<FeatureEditorData>({
    description: '# New Feature',
    extendedTable: [],
    postTableData: '',
    levels: [],
    rolls: [],
  });

  const validationSchema = Yup.object().shape({
    description: Yup.string().required('Required'),
    levels: Yup.array().of(Yup.number().required('Required')),
  });

  if (!data) return <Loading />;

  return (
    <div>
      <h1>Feature Editor</h1>
      <Formik
        initialValues={data}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
        validateOnBlur
      >
        <Form>
          {' '}
          <FormFieldArray<number>
            name="levels"
            label="Levels - Select the levels this feature gains new abilities - Can be empty"
            as="select"
            formProps={{
              placeholder: 'Levels',
            }}
            sortFn={(a, b) => a - b}
            values={data.levels}
            updateData={(levels) => updateData({ ...data, levels })}
          >
            <option value="" disabled>
              Select Level
            </option>
            {numberArray(1, 20).map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </FormFieldArray>{' '}
          <div className="divider"></div>
          <FormField
            name="description"
            label="Description - Describe the feature"
            as="textarea"
            formProps={{
              className: 'h-48',
              value: data.description,
              placeholder: 'Description',
              size: 'xl',
            }}
            onChange={(e) => {
              e.preventDefault();
              updateData({ ...data, description: e.target.value });
            }}
          />{' '}
        </Form>
      </Formik>
      <div className="bg-base-300 p-4 rounded-lg mt-4">
        <P>{data.description}</P>
      </div>
    </div>
  );
};

export default FeatureEditor;

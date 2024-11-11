'use client';

import FormField from '@/components/UI/Formik/FormField';
import Loading from '@/components/UI/Loading';
import useWorkshopEditor from '@/hooks/useWorkshopEditor';
import { FeatEditorData } from '@/lib/types/workshop';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const FeatEditor = () => {
  const { data, updateData } = useWorkshopEditor<FeatEditorData>({
    flavorText: '',
    description: '',
    prereqDescription: '',
  });

  const featSchema = Yup.object().shape({
    flavorText: Yup.string()
      .required('Required')
      .max(150, 'Max 150 characters'),
    description: Yup.string().required('Required'),
  });

  if (!data) return <Loading />;

  return (
    <div>
      <Formik
        initialValues={data}
        validationSchema={featSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <FormField
            as="textarea"
            name="flavorText"
            label="Flavor Text - Briefly describe the feat - Max 150 characters"
            onChange={(e) =>
              updateData({
                ...data,
                flavorText: e.target.value,
              })
            }
            formProps={{
              value: data.flavorText,

              placeholder:
                'Ex. You have a knack for learning new things, picking up new skills and abilities quickly.',
            }}
          />
          <FormField
            as="textarea"
            name="description"
            label="Description - Describe any preliminary information about the feat before the mechanics are explained in the features section."
            onChange={(e) =>
              updateData({
                ...data,
                description: e.target.value,
              })
            }
            formProps={{
              value: data.description,
              placeholder:
                'Ex. Years of study have given you a wealth of knowledge. You gain the following benefits:',
            }}
          />
          <FormField
            as="textarea"
            name="prereqDescription"
            label="Prerequisite Description - Describe any prerequisites for the feat."
            onChange={(e) =>
              updateData({
                ...data,
                prereqDescription: e.target.value,
              })
            }
            formProps={{
              value: data.prereqDescription,
              placeholder:
                'Ex. Elf, level 4, Dexterity 13 or higher, Intelligence 13 or higher',
            }}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default FeatEditor;

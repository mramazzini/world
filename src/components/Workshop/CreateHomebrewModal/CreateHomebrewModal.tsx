'use client';
import FormField from '@/components/UI/Formik/FormField';
import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import ModalButton from '@/components/UI/Modal/ModalButton';
import { WorkshopProtocol } from '@prisma/client';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useAppDispatch } from '@/store/hooks';
import { createLocalWorkshopItem } from '@/store/workshopSlice';
import { v4 } from 'uuid';

const CreateHomebrewModal = ({ modalId }: { modalId: string }) => {
  const dispatch = useAppDispatch();
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    type: Yup.string(),
  });

  return (
    <>
      <ModalButton modalid={modalId} modaltype="open" className="btn btn-ghost">
        Create
      </ModalButton>
      <Modal id={modalId}>
        <ModalBox className=" h-auto text-base-content">
          <h2>Create Homebrew</h2>
          <div className="divider"></div>
          <Formik
            initialValues={{ name: '', type: '' }}
            onSubmit={(values) => {
              dispatch(
                createLocalWorkshopItem({
                  name: values.name,
                  protocol: values.type as WorkshopProtocol,
                  id: v4(),
                  lastEditISOString: new Date().toISOString(),
                })
              );
              console.log(values);
            }}
            validationSchema={formSchema}
          >
            <Form>
              <FormField
                as="input"
                name="name"
                label="Name"
                formProps={{
                  placeholder: 'Name your homebrew',
                  type: 'text',
                }}
              />
              <FormField
                as="select"
                name="type"
                label="Type"
                formProps={{
                  placeholder: 'Type of homebrew',
                  type: 'text',
                }}
              >
                {Object.values(WorkshopProtocol).map((protocol) => (
                  <option key={protocol} value={protocol}>
                    {protocol.toCapitalCase()}
                  </option>
                ))}
              </FormField>
              <div className="divider"></div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </Form>
          </Formik>
        </ModalBox>
      </Modal>
    </>
  );
};

export default CreateHomebrewModal;

import {
  Ability,
  CasterType,
  Class,
  CustomField,
  Feature,
} from "@prisma/client";
import Module from "../Module";
import ClassTableEditor from "../ClassTableEditor";
// import ClassTable from "../../ClassInfo/ClassTable";
interface Props {
  customFields: CustomField[];
  updateCustomFields: (value: CustomField[]) => void;
  active: boolean;
  classObj: Class;
  casterType: CasterType | null;
  features: Feature[];
}

const CustomFieldsEditor = ({
  customFields,
  updateCustomFields,
  active,
  casterType,
  classObj,
  features,
}: Props) => {
  return (
    <Module
      name="Class Table"
      description="Add custom columns to the class table. These will be displayed on the class page. You can come back and edit these later."
      active={active}
    >
      {/* Custom Fields */}
      <ClassTableEditor
        customFields={customFields}
        updateCustomFields={updateCustomFields}
        classObj={classObj}
        casterType={casterType}
        features={features}
      />
    </Module>
  );
};

export default CustomFieldsEditor;

// Component to create a feature for a class
// User can add or remove features
// User can also change the values of the features
//

import { Feature, Prisma } from "@prisma/client";
import TextEditor from "../UI/TextEditor";
import Input from "../UI/Input";
import List from "../UI/List";
interface Props {
  features: Prisma.FeatureCreateInput[];
  setFeatures: (data: Prisma.FeatureCreateInput[]) => void;
}

const CreateFeatureForm = ({ features, setFeatures }: Props) => {
  const add = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault;
    setFeatures([...features, { name: "", levels: [1], description: "" }]);
  };
  const remove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setFeatures(features.filter((_, i) => i !== index));
  };
  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    key: string
  ) => {
    e.preventDefault();
    const newFeatures = [...features];
    setFeatures(newFeatures);
  };
  return (
    <div>
      <div className="divider"></div>
      <h2 className="p-4 ">Features</h2>
      <p className="p-4">
        Add features that the class gains at certain levels. For example, a
        fighter might gain the ability to attack twice at level 5.
      </p>
      {features.map((feature, index) => (
        <div key={index}>
          <div className="divider"></div>
          <Input<string>
            data={feature.name}
            name="Feature Name"
            setData={(name) => {
              const newFeatures = [...features];
              newFeatures[index].name = name;
              setFeatures(newFeatures);
            }}
          />
          <List<number>
            data={feature.levels as number[]}
            name="Level"
            setData={(lvl) => {
              const newFeatures = [...features];
              newFeatures[index].levels = lvl;
              setFeatures(newFeatures);
            }}
            isNumeric
            options={[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ]}
          />
          <TextEditor
            data={feature.description}
            title="Feature Description"
            description="If you have multiple levels for this class feature, make sure to describe what changes at each level."
            setData={(data) => {
              const newFeatures = [...features];
              newFeatures[index].description = data;
              setFeatures(newFeatures);
            }}
          />

          <button
            className="btn btn-error mx-4"
            onClick={(e) => remove(e, index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button className="btn btn-primary mx-4" onClick={add}>
        Add
      </button>
    </div>
  );
};

export default CreateFeatureForm;

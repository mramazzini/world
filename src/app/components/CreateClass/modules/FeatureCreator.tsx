import { Class, Feature } from "@prisma/client";
import Module from "../Module";
import React from "react";
import Info from "../../UI/Info";
import FeatureDisplay from "../modals/FeatureDisplay";
import FeatureTableEditor from "../FeatureTableEditor";
import MultiOptions from "../../UI/MultiOptions";
import MultiInput from "../../UI/MultiInput";
interface Props {
  features: Feature[];
  setFeatures: (value: Feature[]) => void;
  classObj: Class;
  active: boolean;
}

const FeatureCreator = ({ features, setFeatures, classObj, active }: Props) => {
  const [extendedTables, setExtendedTables] = React.useState<boolean[]>(
    features.map((feature) => feature.extendedTable !== null)
  );
  const [options, setOptions] = React.useState<boolean[]>(
    features.map((feature) => feature.options !== null)
  );

  return (
    <Module
      name="Features"
      description="Add features to your class. Ability Score Improvements are already implemented."
      active={active}
    >
      <>
        {features.map((feature, index) => {
          const { modal: featureModal, openModal: openFeatureModal } =
            FeatureDisplay({
              feature,
              modalID: `feature-${index}`,
            });

          return (
            <React.Fragment key={index}>
              {/* Feature modal */}
              <button className="btn mb-4" onClick={openFeatureModal}>
                Preview Feature -&gt;
              </button>
              {featureModal}

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Feature name */}
                <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
                  <div className="label">
                    <span className="label-text">Feature Name</span>
                  </div>
                  <input
                    type="text"
                    value={feature.name}
                    onChange={(e) => {
                      const newFeatures = [...features];
                      newFeatures[index].name = e.target.value;
                      setFeatures(newFeatures);
                    }}
                    placeholder="Ex: Fighting Style, Divine Smite"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <div className="divider mt-2 mb-0"></div>

                  <div className="label">
                    <span className="label-text">
                      Do you need tables for this feature?{" "}
                      <Info tooltip="Tables allow you to display information in an organized manner. Toggling this will open the table editor below." />
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={extendedTables[index] || false}
                    onChange={(e) => {
                      const newExtendedTables = [...extendedTables];
                      newExtendedTables[index] = e.target.checked;
                      setExtendedTables(newExtendedTables);
                    }}
                    className="toggle"
                  />
                  <div className="label">
                    <span className="label-text">
                      Do you need a list of some sort for this feature?{" "}
                      <Info tooltip="Toggling this will allow you to list options for this feature. A list should be used for a simple sequence of information, otherwise, use a table." />
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={options[index] || false}
                    onChange={(e) => {
                      const newOptions = [...options];
                      newOptions[index] = e.target.checked;
                      setOptions(newOptions);
                    }}
                    className="toggle"
                  />
                </label>
                <MultiOptions<number>
                  isNumeric
                  data={feature.levels}
                  tooltip="Ex: Fighters gain Multi Attack at level 5, and an extra attack at level 11 and 20."
                  setData={(value) => {
                    const newFeatures = [...features];
                    newFeatures[index].levels = value;
                    setFeatures(newFeatures);
                  }}
                  name="Feature Levels"
                  description="The levels at which this feature is gained, as well as the levels at which it improves."
                  options={Array.from({ length: 20 }, (_, i) => i + 1)}
                />

                {/* Feature description */}
                <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
                  <div className="label">
                    <span className="label-text">
                      Feature Description{" "}
                      <Info tooltip="This is where you can put any information about how this class prepares and casts spells." />
                      <Info
                        tooltip="Surround text in a single star (*) to make it italic when it renders in the class preview. Ex: *hello*"
                        alert
                        format={false}
                      />
                      <Info
                        tooltip="Surround text in a double star (**) to make it bold when it renders in the class preview. Ex: **hello**"
                        alert
                        format={false}
                      />
                    </span>
                  </div>
                  <textarea
                    value={feature.description}
                    onChange={(e) => {
                      const newFeatures = [...features];
                      newFeatures[index].description = e.target.value;
                      setFeatures(newFeatures);
                    }}
                    placeholder="Ex: You can use your reaction to make a melee weapon attack against a creature that moves more than 5 feet while within your reach."
                    className="textarea textarea-bordered w-full h-64"
                  />
                </label>
                {/* options */}
                {options[index] && (
                  <MultiInput
                    data={feature.options as string[]}
                    updateData={(value) => {
                      const newFeatures = [...features];
                      newFeatures[index].options = value as string[];
                      setFeatures(newFeatures);
                    }}
                    label="List Information"
                    tooltip="List information for this feature. This should be used for a simple sequence of information. "
                    placeholder="List information here..."
                  />
                )}
              </div>
              {extendedTables[index] && (
                <FeatureTableEditor
                  feature={feature}
                  setFeature={(value) => {
                    const newFeatures = [...features];
                    newFeatures[index] = value;
                    setFeatures(newFeatures);
                  }}
                />
              )}
              <div className="divider mb-4"></div>
            </React.Fragment>
          );
        })}
        <button
          className="btn btn-primary"
          onClick={() => {
            setFeatures([
              ...features,
              {
                name: "",
                description: "",
                levels: [1],
              } as Feature,
            ]);
          }}
        >
          Add Feature
        </button>
      </>
    </Module>
  );
};

export default FeatureCreator;

import { Feature } from "@prisma/client";
import Levels from "../UI/Levels";
import JsonTable from "../Utility/JsonTable";
import P from "../Utility/FormatAndSanitize";

const FeatureDisplay = ({
  feature,
  modalID,
}: {
  feature: Feature;
  modalID: string | number;
}) => {
  if (typeof modalID === "number") {
    modalID = `modal-${modalID}`;
  }
  return {
    openModal: () => {
      const modal = document.getElementById(modalID) as HTMLDialogElement;
      modal.showModal();
    },

    modal: (
      <dialog id={modalID} className="modal">
        <div className="modal-box">
          <h3 className="flex flex-row justify-between">
            {feature.name || "Feature Name here"}{" "}
            <Levels levels={feature.levels} />
          </h3>

          <>
            <P>{feature.description}</P>
            {feature.options && feature.options.length > 0 && (
              <ul className="list-disc px-4">
                <br />
                {feature.options.map((option, index) => (
                  <div key={index}>
                    <li>
                      <P>{option}</P>
                    </li>
                    <br />
                  </div>
                ))}
              </ul>
            )}
          </>

          {feature.extendedTable && <JsonTable json={feature.extendedTable} />}
          <div className="divider"></div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    ),
  };
};

export default FeatureDisplay;

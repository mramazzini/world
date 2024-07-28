//Hoverable Info icon that deisplay a tooltip that display the string from props

import P from "../Utility/FormatAndSanitize";
import termDictionary from "../Utility/TermDictionary";
import Tooltip from "../Utility/Tooltip";

interface Props {
  tooltip: string;
  alert?: boolean;
  format?: boolean;
}

const Info: React.FC<Props> = ({ tooltip, alert = false, format = true }) => {
  return (
    <div className="info-icon inline group">
      <Tooltip
        format={format}
        element={
          !alert ? (
            <svg className="inline" viewBox="0 0 24 24" width="24" height="24">
              <circle cx="12" cy="12" r="10" fill="#2196f3" />
              <rect x="11" y="10" width="2" height="7" fill="#ffffff" />
              <rect x="11" y="7" width="2" height="2" fill="#ffffff" />
            </svg>
          ) : (
            <svg
              className="inline"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fill="red" />
              <rect x="11" y="6" width="2" height="8" fill="white" />
              <rect x="11" y="16" width="2" height="2" fill="white" />
            </svg>
          )
        }
      >
        {termDictionary.find(
          (term) => term.term.toLowerCase() === tooltip.toLowerCase()
        )?.definition || tooltip}
      </Tooltip>
    </div>
  );
};

export default Info;

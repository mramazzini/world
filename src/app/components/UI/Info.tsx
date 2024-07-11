//Hoverable Info icon that deisplay a tooltip that display the string from props

import P from "../Utility/FormatAndSanitize";
import termDictionary from "../Utility/TermDictionary";
import Tooltip from "../Utility/Tooltip";

interface Props {
  tooltip: string;
}

const Info: React.FC<Props> = ({ tooltip }) => {
  return (
    <div className="info-icon inline group">
      <Tooltip
        element={
          <svg className="inline" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="10" fill="#2196f3" />
            <rect x="11" y="10" width="2" height="7" fill="#ffffff" />
            <rect x="11" y="7" width="2" height="2" fill="#ffffff" />
          </svg>
        }
        children={
          termDictionary.find(
            (term) => term.term.toLowerCase() === tooltip.toLowerCase()
          )?.definition || ""
        }
      />
    </div>
  );
};

export default Info;

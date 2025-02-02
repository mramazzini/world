import { useState } from 'react';
import ToolTipFormula from './TooltipFormula';
interface FormulaRollerProps {
  onRoll: (formula: string) => void;
}

const MAX_LENGTH = 50;

const FormulaRoller = ({ onRoll }: FormulaRollerProps) => {
  const [formula, setFormula] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > MAX_LENGTH) {
      return setFormula(value.slice(0, MAX_LENGTH));
    }

    setFormula(value);
  };

  return (
    <form
      className="flex flex-row join m-2 mt-4 mb-0 relative"
      onSubmit={(e) => {
        e.preventDefault();
        if (!formula) return;
        onRoll(formula);
      }}
    >
      <div className="input input-primary join-item w-full">
        <input
          value={formula}
          type="text"
          onChange={handleChange}
          placeholder="Roll - Ex: 1d20 + 2d8 -3"
          className="w-full h-full text-transparent caret-base-content relative z-[0]"
        />
        <span
          className="absolute top-0 left-1 w-full h-full p-3 text-base-content selection:text-transparent selection:bg-transparent z-[1] pointer-events-none"
          onClick={(e) => {
            e.preventDefault();
            if (window.getSelection()?.toString()) {
              e.stopPropagation();
            }
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            //if not a selection or hover event, stop propagation
            if (window.getSelection()?.toString()) {
              e.stopPropagation();
            }
            //focus on input
            if (e.key === 'Enter') {
              e.preventDefault();
              e.stopPropagation();
              e.currentTarget.focus();
            }
          }}
        >
          <ToolTipFormula formula={formula} />
        </span>
      </div>
      <button type="submit" className="btn btn-primary join-item">
        Roll
      </button>
    </form>
  );
};

export default FormulaRoller;

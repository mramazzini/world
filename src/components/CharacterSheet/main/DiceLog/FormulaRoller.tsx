import { useEffect, useState } from 'react';

interface FormulaRollerProps {
  onRoll: (formula: string) => void;
}

const MAX_LENGTH = 50;

const FormulaRoller = ({ onRoll }: FormulaRollerProps) => {
  const [formula, setFormula] = useState('');

  useEffect(() => {}, [formula]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > MAX_LENGTH) {
      return setFormula(value.slice(0, MAX_LENGTH));
    }

    setFormula(value);
  };

  return (
    <form
      className="flex flex-row join m-2 mt-4 mb-0"
      onSubmit={(e) => {
        e.preventDefault();
        if (!formula) return;
        onRoll(formula);
      }}
    >
      <input
        value={formula}
        type="text"
        onChange={handleChange}
        placeholder="Roll - Ex: 1d20 + 2d8 -3"
        className="input input-primary join-item w-full"
      />
      <button type="submit" className="btn btn-primary join-item">
        Roll
      </button>
    </form>
  );
};

export default FormulaRoller;

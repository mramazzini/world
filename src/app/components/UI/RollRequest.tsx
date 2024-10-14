import { WeaponAttack } from "@/lib/utils/types/types";

const RollRequest = ({ name, formula }: { name: string; formula: string }) => {
  const rollFromFormula = (formula: string) => {
    console.log(formula);
    const data = formula
      .replaceAll(" - ", " + -")
      .split("+")
      .map((d) => d.trim())
      .map((d) => {
        if (d.includes("d")) {
          const [num, sides] = d.split("d").map((d) => parseInt(d));
          let total = 0;
          for (let i = 0; i < num; i++) {
            total += Math.floor(Math.random() * sides) + 1;
          }
          return total;
        } else {
          return parseInt(d);
        }
      });

    return data.reduce((a, b) => a + b);
  };
  return (
    <div className="flex flex-row join items-center">
      <p className="bg-neutral text-neutral-content join-item h-auto p-1 px-2">
        {name}: <span className="badge">{formula}</span>
      </p>
      <button
        className="btn btn-accent btn-sm join-item"
        onClick={(e) => {
          e.preventDefault();
          console.log(rollFromFormula(formula));
        }}
      >
        Roll
      </button>
    </div>
  );
};

export default RollRequest;

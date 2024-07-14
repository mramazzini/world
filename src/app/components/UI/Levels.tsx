interface Props {
  levels: number[];
}

const Levels = ({ levels }: Props) => {
  const getColorStyle = (level: number) => {
    const colors = [
      "rgb(18, 18, 18)",
      "rgb(23, 23, 28)",
      "rgb(28, 28, 38)",
      "rgb(33, 33, 48)",
      "rgb(38, 38, 58)",
      "rgb(43, 43, 68)",
      "rgb(48, 48, 78)",
      "rgb(53, 53, 88)",
      "rgb(58, 58, 98)",
      "rgb(63, 63, 108)",
      "rgb(68, 68, 118)",
      "rgb(73, 73, 128)",
      "rgb(78, 78, 138)",
      "rgb(83, 83, 148)",
      "rgb(88, 88, 158)",
      "rgb(93, 93, 168)",
      "rgb(98, 98, 178)",
      "rgb(103, 103, 188)",
      "rgb(108, 108, 198)",
      "rgb(113, 113, 208)",
    ];
    return { backgroundColor: colors[level - 1] };
  };

  const getTextColorClass = (level: number) => {
    return level < 13 ? "text-black" : "text-white";
  };

  for (const level of levels) {
    if (level < 1 || level > 20) {
      throw new Error("Invalid level");
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {levels.map((level) => (
        <div className="tooltip" data-tip={`Level ${level}`}>
          <div
            key={level}
            className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${getTextColorClass(
              20 - level
            )} font-bold`}
            style={getColorStyle(level)}
          >
            {level}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Levels;

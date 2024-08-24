import AbilityToText from "@/lib/utils/AbilityToText";

interface Props {
  asi: PrismaJson.ASI;
}

const ASIParser = ({ asi }: Props) => {
  const { fixedIncreases, choices, universalIncrease } = asi;
  return (
    <>
      {/* {fixedIncreases &&
        fixedIncreases.map((increase, i) => (
          <p key={i}>
            Your {AbilityToText(increase.ability)} score increases by{" "}
            {increase.value}.
          </p>
        ))}
      {choices &&
        choices.map((choice, i) => (
          <>
            <p key={i}>
              {fixedIncreases && "Additionally,"} Pick{" "}
              {choice.numberOfIncreases} from the following: <br />
            </p>
            <ul className="list-disc pl-4">
              {choice.abilities.map((ability, j) => (
                <li key={j}>
                  Your {AbilityToText(ability)} score increases by{" "}
                  {choice.value}
                </li>
              ))}
            </ul>
          </>
        ))}
      {universalIncrease && <p>All abilities +{universalIncrease}</p>} */}
    </>
  );
};

export default ASIParser;

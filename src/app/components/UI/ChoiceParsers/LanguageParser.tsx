interface Props {
  languages: PrismaJson.LanguageChoice;
}

const LanguageParser = ({ languages }: Props) => {
  const { defaultLanguages, choices } = languages;
  return (
    <>
      <p>You can speak, read, and write {defaultLanguages.join(", ")}.</p>
      {choices && (
        <p>
          You can choose {choices.numberOfLanguages} from the following:{" "}
          {choices.languages.join(", ")}.
        </p>
      )}
    </>
  );
};

export default LanguageParser;

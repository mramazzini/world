import { alignmentToText } from "@/app/components/Utility/alignmentToText";
import { CharacterInfo } from "@/lib/utils/types/types";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  character: CharacterInfo;
  calcLevel: number;
}

const CharacterIntro = ({ character, calcLevel }: Props) => {
  return (
    <>
      <Image
        src={character.imageURL || "/images/hero.jpg"}
        width={200}
        height={200}
        className="rounded-lg w-[100px] h-[100px] object-cover object-center mr-4"
        alt="Fighter"
      />
      <div className="flex flex-col justify-">
        <h2>
          {character.name}
          <div className="divider m-0 divider-primary"></div>
        </h2>

        <p className="italic">
          Level {calcLevel},{" "}
          {character.SubSpecies ? (
            <a
              href={`/subspecies/${character.SubSpecies?.name.replaceAll(
                " ",
                "-"
              )}`}
              className="hover:link"
            >
              {character.SubSpecies?.name}
            </a>
          ) : (
            <a
              href={`/species/${character.Species?.name.replaceAll(" ", "-")}`}
              className="hover:link"
            >
              {character.Species?.name}
            </a>
          )}
          ,{" "}
          {character.Classes?.map((c) => (
            <Fragment key={c.name}>
              <a
                href={`/class/${c.name.replaceAll(" ", "-")}`}
                className="hover:link"
              >
                {c.name.toCapitalCase()}
              </a>
            </Fragment>
          ))}
          ,{" "}
          <a
            href={`/background/${character.Background?.name.replaceAll(
              " ",
              "-"
            )}`}
            className="hover:link"
          >
            {character.Background?.name}
          </a>{" "}
        </p>
        <p className="italic font-bold">
          {alignmentToText(character.alignment)}
        </p>
      </div>
    </>
  );
};

export default CharacterIntro;

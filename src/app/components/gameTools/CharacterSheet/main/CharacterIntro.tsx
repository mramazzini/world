import { alignmentToText } from "@/app/components/Utility/alignmentToText";
import { CharacterInfo } from "@/lib/utils/types/types";
import Image from "next/image";
import { Fragment } from "react";
import ImageUploadModal from "./ImageUploadModal";

interface Props {
  character: CharacterInfo;
  calcLevel: number;
  setImage: (image: string) => void;
}

const CharacterIntro = ({ character, calcLevel, setImage }: Props) => {
  const id = "image-upload-modal";
  return (
    <>
      <ImageUploadModal modalId={id} setImage={setImage} />
      {character.imageURL ? (
        <Image
          src={character.imageURL}
          width={200}
          height={200}
          className="rounded-lg w-[100px] h-[100px] object-cover object-center mr-4 btn btn-ghost p-0"
          alt="Character Image Not Found"
          onClick={() => {
            const modal = document.getElementById(id) as HTMLDialogElement;
            if (modal) modal.showModal();
          }}
        />
      ) : (
        <Image
          src="/images/camera.svg"
          width={200}
          height={200}
          className="w-[100px] h-[100px] btn-ghost object-cover object-center mr-4  btn p-0 opacity-70 border-gray-500"
          onClick={() => {
            const modal = document.getElementById(id) as HTMLDialogElement;
            if (modal) modal.showModal();
          }}
          alt="Fighter"
        />
      )}
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

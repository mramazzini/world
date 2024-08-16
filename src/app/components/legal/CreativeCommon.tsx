import Link from "next/link";

const CreativeCommons = () => {
  return (
    <div>
      <h4>Creative Commons</h4>
      <p>
        This work includes material taken from the System Reference Document 5.1
        (“SRD 5.1”) by Wizards of the Coast LLC and available at{" "}
        <Link
          className="hover:link text-blue-500"
          target="_blank"
          href={"https://dnd.wizards.com/resources/systems-reference-document"}
        >
          https://dnd.wizards.com/resources/systems-reference-document
        </Link>
        . The SRD 5.1 is licensed under the Creative Commons Attribution 4.0
        International License available at{" "}
        <Link
          target="_blank"
          className="hover:link text-blue-500"
          href={"https://creativecommons.org/licenses/by/4.0/legalcode"}
        >
          https://creativecommons.org/licenses/by/4.0/legalcode
        </Link>
        .
      </p>
    </div>
  );
};

export default CreativeCommons;

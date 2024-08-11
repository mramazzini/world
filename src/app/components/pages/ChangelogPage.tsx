import Link from "next/link";
import { version } from "os";

interface ChangelogItem {
  version: string;
  date: string;
  changes: string[];
}

const changelog = [
  {
    version: "0.1.0 - 0.1.6",
    date: "2021-07-11",
    changes: [
      "Basic layout",
      "Class Creator",
      "Class Information in Database",
      "Class Display Page",
      "Class Table",
      "Spellcasting Information in Class Display",
      "Nested Tooltips",
    ],
  },
  {
    version: "0.2.1",
    date: "2021-07-12",
    changes: ["Class PDFs Page"],
  },
  {
    version: "0.2.2 - 0.2.5",
    date: "2021-07-14",
    changes: [
      "Class bug fixes",
      "Features now display levels",
      "Bard Subclasses",
      "Class Select page",
    ],
  },
  {
    version: "0.2.6 - 0.2.7",
    date: "2021-07-15",
    changes: ["Tooltip bug fixes", "Fighter Subclasses"],
  },
  {
    version: "0.2.8 - 0.2.11",
    date: "2021-07-16",
    changes: [
      "Wizard Subclasses",
      "Cleric Subclasses",
      "Sitemap.xml added",
      "Metadata added",
    ],
  },
  {
    version: "0.2.12",
    date: "2021-07-17",
    changes: ["Links bug fixes"],
  },
  {
    version: "0.2.13 - 0.2.16",
    date: "2021-07-18",
    changes: [
      "Customizable Tables to display data in a more organized manner",
      "Prisma DB bug fixes",
      "Weapon added",
      "Weapon Properties added",
    ],
  },
  {
    version: "0.2.17 - 0.2.20",
    date: "2021-07-19",
    changes: [
      "Responsive design for different devices",
      "Table bug fixes and tweaks",
      "Database seed script fix",
      "Flavortext added to Class/Subclasses",
    ],
  },
  {
    version: "0.2.21",
    date: "2021-07-20",
    changes: ["Monk and Paladin Subclasses"],
  },
  {
    version: "0.2.22",
    date: "2021-07-28",
    changes: ["Reworked Create Class page"],
  },
  {
    version: "0.2.23",
    date: "2021-07-29",
    changes: ["Error modal for Login/Register Page"],
  },
  {
    version: "0.2.24",
    date: "2021-07-30",
    changes: ["Reworked Cantrips and Spell Slots"],
  },
  {
    version: "0.2.25 - 0.2.26",
    date: "2021-08-02",
    changes: ["Added Homepage", "Tweaked Homepage layout"],
  },
  {
    version: "0.2.27 - 0.2.30",
    date: "2021-08-03",
    changes: ["Added Favicon", "Advanced Metadata", "Class PDF bug fix"],
  },
  {
    version: "0.3.0",
    date: "2021-08-03",
    changes: ["Subclasses completed"],
  },
  {
    version: "0.3.1 - 0.3.2",
    date: "2021-08-04",
    changes: ["Added Searchbar Component", "Date formatting bug fix"],
  },
  {
    version: "0.3.3 - 0.3.4",
    date: "2021-08-05",
    changes: ["Reworked some routes", "Vercel Speed Insights"],
  },
  {
    version: "0.3.5 - 0.3.7",
    date: "2021-08-06",
    changes: ["Spell Search Page", "Spell Display Page", "Vercel Analytics"],
  },
  {
    version: "0.4.0",
    date: "2021-08-08",
    changes: ["Spells mostly uploaded - a few are missing or incomplete"],
  },
  {
    version: "0.4.1 - 0.4.2",
    date: "2021-08-09",
    changes: [
      "Fixed Homepage bug",
      "Searchbar now can filter by multiple fields",
    ],
  },
  {
    version: "0.4.3 - 0.4.7",
    date: "2021-08-10",
    changes: [
      "Added Changelog Page",
      "Added Contact Form",
      "Created Discord",
      "Added Discord Link",
    ],
  },
  {
    version: "0.4.8",
    date: "2021-08-11",
    changes: ["Fixed Searchbar not rendering correctly on mobile devices"],
  },
];

const ChangelogPage = () => {
  return (
    <main className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:w-4/5">
          <h1>Changelog</h1>
          <p className="text-lg">
            View previous and upcoming updates for Max&apos;s DnD Wiki
          </p>
        </div>

        <div className="flex justify-center items-start md:items-end my-2 flex-col ">
          <Link
            className={"btn btn-ghost border border-gray-500 mb-2 w-full"}
            href={`/upcoming`}
          >
            View Upcoming Changes -&gt;
          </Link>
        </div>
      </div>
      <ul>
        {changelog.reverse().map((item: ChangelogItem) => (
          <li key={item.version}>
            <div className="divider"></div>
            <div className="flex justify-between">
              <h2>{item.version}</h2>
              <h2>{item.date}</h2>
            </div>

            <ul className="list-disc p-4">
              {item.changes.map((change) => (
                <li key={change}>{change}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ChangelogPage;

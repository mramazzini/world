import puppeteer, { Page } from "puppeteer";
import fs, { link } from "fs";
import { Background, Prisma, Skill } from "@prisma/client";
import { officialSources, skills } from "@/lib/globalVars";
import "@/lib/string.extensions";
const backgrounds: Prisma.BackgroundCreateManyInput[] = [];
const errors: { link: string; error: Error }[] = [];
const getBackground = async (page: Page, link: string) => {
  let name = await page.$$eval(
    "main div div .main-content-wrap .main-content .page-title span",
    (aElements) => {
      return aElements.map((a) =>
        a.innerHTML.split(": ").length > 1
          ? a.innerHTML.split(": ")[1]
          : a.innerHTML
      );
    }
  );
  if (!name) {
    throw new Error("No name found");
  }
  console.log(name[0]);
  let description = await page.$$eval(
    "#page-content p strong em",
    (elements) => {
      return elements.map((el) => el.innerHTML);
    }
  );

  let pageContent = await page.$$eval("#page-content p", (elements) => {
    return elements.map((el) => el.textContent || "");
  });

  let sourceIndex = pageContent.findIndex((el) => el.includes("Source:")) || -1;
  if (!sourceIndex || sourceIndex === -1) {
    throw new Error("No source found");
  }

  let source = pageContent[sourceIndex].split("Source: ")[1];

  if (!officialSources.includes(source)) {
    console.log("Source not official", source);
    throw new Error("Source not official");
  }

  let extraDataIndex =
    pageContent.findIndex((el) => el.includes("Skill Proficiencies:")) || -1;
  let extraData = pageContent[extraDataIndex].split("\n");
  console.log(extraData);

  const skillProficiencies = extraData[0].split(": ")[1].split(", ");
  const lowerCaseSkills = skills.map((skill) => skill.toLowerCase());
  const finalSkills: Skill[] = [];
  for (const skill of skillProficiencies) {
    if (lowerCaseSkills.includes(skill.toLowerCase())) {
      finalSkills.push(skills[lowerCaseSkills.indexOf(skill.toLowerCase())]);
    } else {
      throw new Error("Skill not found");
    }
  }

  const toolProficiencies = extraData[1].split(": ")[1].split(", ");
  const languages = extraData[2].split(": ")[1].split(", ");

  const valWeightRegex = /value:(\d+)(?!\b0\b)\w*\sweight:(\d+)(?!\b0\b)\w*/;
  const equipment = extraData[3]
    .split(": ")[1]
    .split(", ")
    .map((item) => item.toCapitalCase().replace(valWeightRegex, "").trim());
  const skillChoiceCount = 0;
  const languageChoiceCount = 0;

  console.log(extraData);

  // // const obj = {
  // //   name: name[0],
  // //   description: description.join("\n\n"),
  // //   source,
  // //   features: [],
  // //   skillProficiencies: finalSkills,
  // //   toolProficiencies,
  // //   skillChoiceCount,
  // //   languageChoiceCount,
  // //   languages,
  // //   equipment,
  // // } as Prisma.BackgroundCreateManyInput;

  // backgrounds.push(obj);
};

(async () => {
  // Launch Puppeteer browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the target webpage
  await page.goto("http://dnd5e.wikidot.com"); // Replace with the URL of your target page

  let links = await page.$$eval(
    ".feature > .row > .col-md-7 > .feature > .row .col-sm-4 > p > a",
    (aElements) => {
      return aElements.map((a) => a.href);
    }
  );

  const cutoff = links.findIndex((link) =>
    link.includes("black-fist-double-agent")
  );
  if (cutoff === -1) {
    throw new Error("Cutoff not found");
  }
  links = links.slice(0, cutoff);

  links = links.filter(
    (link) => link.includes("background") && !link.includes(`-ua"`)
  );

  // go to each link and get the background
  const errors = [];
  for (let i = 0; i < 1; i++) {
    console.log("Getting background", `${i + 1}/${links.length}`);
    try {
      await page.goto(links[i]);
      await getBackground(page, links[i]);
    } catch (error) {
      console.log("Background error", links[i]);

      errors.push({ link: links[i], error });
    }
  }

  // Close the browser
  await browser.close();

  fs.writeFile("./backgrounds.json", JSON.stringify(backgrounds), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
  fs.writeFile("./errors.json", JSON.stringify(errors), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
})();

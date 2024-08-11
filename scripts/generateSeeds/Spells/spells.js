const puppeteer = require("puppeteer");
//create json file
const fs = require("fs");
const spells = [];
const spellListToSpell = [];
let idCount = 0;
//name, description, level, school, castingTime, range, verbal, somatic, material, duration, source, aoe, damageType, upcastInfo

const classMap = {
  Artificer: "Artificer",
  Bard: "Bard",
  Cleric: "Cleric",
  Druid: "Druid",
  Paladin: "Paladin",
  Ranger: "Ranger",
  Sorcerer: "Sorcerer",
  Warlock: "Warlock",
  Wizard: "Wizard",
};

const classIds = {
  bard: 1,
  cleric: 2,
  druid: 3,
  paladin: 4,
  ranger: 5,
  sorcerer: 6,
  warlock: 7,
  wizard: 8,
  artificer: 9,
};

const levelMap = {
  cantrip: 0,
  "1st": 1,
  "2nd": 2,
  "3rd": 3,
  "4th": 4,
  "5th": 5,
  "6th": 6,
  "7th": 7,
  "8th": 8,
  "9th": 9,
};

const schoolMap = {
  Abjuration: "ABJURATION",
  Conjuration: "CONJURATION",
  Divination: "DIVINATION",
  Enchantment: "ENCHANTMENT",
  Evocation: "EVOCATION",
  Illusion: "ILLUSION",
  Necromancy: "NECROMANCY",
  Transmutation: "TRANSMUTATION",
};

const handleStrong = (data) => {
  //castingTime, range, components, duration,
  if (data.includes("Casting Time")) {
    const castingTime = data.split(">")[3].split("<")[0].trim();
    return { castingTime };
  }
  if (data.includes("Range")) {
    const range = data.split(">")[2].split("<")[0].trim();
    return { range };
  }
  if (data.includes("Components")) {
    const components = data.split(">")[2].split("<")[0].trim();
    let verbal = false;
    let somatic = false;
    let material = false;
    let materialCost = "";
    if (components.includes("V")) {
      verbal = true;
    }
    if (components.includes("S")) {
      somatic = true;
    }
    if (components.includes("M")) {
      material = true;
      materialCost = data.split("M")[1].split("<")[0].trim();
    }
    return { verbal, somatic, material, materialCost };
  }
  if (data.includes("Duration")) {
    const duration = data.split(">")[2].split("<")[0].trim();
    return { duration };
  }
};

const handleEm = (data) => {
  //either spell lists or spellLevel + school
  if (!data.includes("Spell Lists")) {
    let level = 0;
    for (const l in levelMap) {
      if (data.toLowerCase().includes(l.toLowerCase())) {
        level = levelMap[l];
        break;
      }
    }
    let school = "";
    for (const s in schoolMap) {
      if (data.toLowerCase().includes(s.toLowerCase())) {
        school = schoolMap[s];
        break;
      }
    }
    return { level, school };
  }

  return { level: null, school: null, upcastInfo: null };
};

const getSpell = async (page, link) => {
  await page.goto(link, { timeout: 0 });
  const name = await page.$eval(".page-title > span", (el) => el.textContent);
  // const description = await page.$eval(".page-content", (el) => el.textContent);
  console.log("Getting spell", name);

  //dont include homebrew or UA
  if (name.includes("HB") || name.includes("UA")) {
    console.log("Skipping", name);
    return;
  }

  let data = await page.$$eval("#page-content ", (pElements) => {
    return pElements.map((p, index) => {
      return p.outerHTML;
    });
  });

  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].split("\n");
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === "") {
        data[i].splice(j, 1);
        j--;
      }
    }
  }

  //loop through
  //3 types of data
  //p
  //strong
  //em
  // everything else gets discarded
  let description = "";
  let level = 0;
  let school = "";
  let castingTime = "";
  let range = "";
  let verbal = false;
  let somatic = false;
  let material = false;
  let materialCost = "";
  let duration = "";
  let source = "";
  let spellLists = [];
  let postTableData = "";
  let upcastInfo = "";

  //regexes
  //p
  const pRegex = /<p>(.*?)<\/p>/;
  //strong
  const strongRegex = /<strong>(.*?)<\/strong>/;
  //em
  const emRegex = /<em>(.*?)<\/em>/;
  //dov (any string with just div, dont need closing tag or anything)
  const divRegex = /<div/g;

  const liRegex = /<li>(.*?)<\/li>/;
  const tableRegex = /<table>(.*?)<\/table>/;
  const aRegex = /<a(.*?)>(.*?)<\/a>/gm;

  let sourceFound = false;
  let skip = false;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (aRegex.test(data[i][j])) {
        for (const c in classMap) {
          if (
            data[i][j].toLowerCase().includes(c.toLowerCase()) &&
            !spellLists.includes(classMap[c])
          ) {
            spellLists.push(classMap[c]);
          }
        }
      }

      if (data[i][j].includes("At Higher Levels.")) {
        upcastInfo = data[i][j].split(">")[5].split("<")[0].trim();
      }
      if (liRegex.test(data[i][j] || tableRegex.test(data[i][j]))) {
        skip = true;
      } else if (divRegex.test(data[i][j])) {
      } else if (emRegex.test(data[i][j])) {
        const em = handleEm(data[i][j].match(emRegex)[1]);
        level = em.level ? em.level : level;
        school = em.school ? em.school : school;
        upcastInfo = em.upcastInfo ? em.upcastInfo : upcastInfo;
      } else if (strongRegex.test(data[i][j])) {
        const strong = handleStrong(data[i][j]);
        castingTime = strong.castingTime ? strong.castingTime : castingTime;
        range = strong.range ? strong.range : range;
        verbal = strong.verbal ? strong.verbal : verbal;
        somatic = strong.somatic ? strong.somatic : somatic;
        material = strong.material ? strong.material : material;
        materialCost = strong.materialCost ? strong.materialCost : materialCost;
        duration = strong.duration ? strong.duration : duration;
      } else if (pRegex.test(data[i][j])) {
        //remove any non p tags but keep the text
        data[i][j] = data[i][j].replace(/<.*?>/g, "");
        //upcast info
        if (!sourceFound) {
          source = data[i][j].split("Source: ")[1];
          sourceFound = true;
        } else if (skip) {
          postTableData += data[i][j] + "\n\n";
        } else {
          description += data[i][j] + "\n\n";
        }
      }
    }
  }

  const options = await page.$$eval("#page-content > ul > li", (li) => {
    return li.map((li) => li.innerText);
  });

  const extendedTable = await page.$$eval("tbody", (tableElements) => {
    return tableElements.map((table) => {
      const tableBody = {};

      const headers = table.querySelectorAll("tr")[0].innerText.split("\t");
      tableBody.headers = headers;
      tableBody.data = [];

      const rows = table.querySelectorAll("tr");
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].innerText.split("\t");

        const rowData = {};
        for (let j = 0; j < headers.length; j++) {
          rowData[headers[j]] = row[j];
        }
        tableBody.data.push(rowData);
      }
      return { "": tableBody };
    });
  });

  const spell = {
    id: idCount,
    name,
    description,
    level,
    school,
    castingTime,
    range,
    verbal,
    somatic,
    material,
    materialCost,
    duration,
    source,
    postTableData,
    extendedTable,
    options,
    upcastInfo,
  };
  spells.push(spell);

  // const spellListToSpellObj = {
  //   spellId: idCount,
  //   spellLists: spellLists.map(
  //     (spellList) => classIds[spellList.toLowerCase()]
  //   ),
  // };

  for (const spellList of spellLists) {
    const spellListToSpellObj = {
      spellId: idCount,
      spellListId: classIds[spellList.toLowerCase()],
    };
    spellListToSpell.push(spellListToSpellObj);
  }
  idCount++;
};

(async () => {
  // Launch Puppeteer browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the target webpage
  await page.goto("http://dnd5e.wikidot.com/spells"); // Replace with the URL of your target page

  const links = await page.$$eval("tbody > tr > td > a", (thElements) => {
    return thElements.map((th) => th.href);
  });

  // const temp = "http://dnd5e.wikidot.com/spell:mold-earth";
  // go to each link and get the spell

  const errors = [];
  for (let i = 530; i < links.length; i++) {
    console.log("Getting spell", `${i + 1}/${links.length}`);
    try {
      await getSpell(page, links[i]);
    } catch (error) {
      console.log("Spell error", links[i]);
      errors.push({ link: links[i], error });
    }

    // await getSpell(page, temp);
  }

  // Close the browser
  await browser.close();
  console.log(spells);
  fs.writeFile("spells.json", JSON.stringify(spells), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
  fs.writeFile("errors.json", JSON.stringify(errors), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
  fs.writeFile(
    "spellListToSpell.json",
    JSON.stringify(spellListToSpell),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File has been created");
    }
  );
})();

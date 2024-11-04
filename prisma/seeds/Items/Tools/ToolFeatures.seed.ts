import { Prisma } from '@prisma/client';
import { toolIds, ToolSeed } from './Tool.seed';
import generateId from '../../_helpers/generateId';

let count = 1;

const ToolFeaturesSeed: Prisma.FeatureCreateManyInput[] = [
  {
    name: 'Alchemical Crafting',
    description:
      "You can use this tool proficiency to create alchemical items. A character can spend money to collect raw materials, which weigh 1 pound for every 50 gp spent. The DM can allow a character to make a check using the indicated skill with advantage. As part of a long rest, you can use alchemist's supplies to make one dose of acid, alchemist's fire, antitoxin, oil, perfume, or soap. Subtract half the value of the created item from the total gp worth of raw materials you are carrying.",
    toolId: toolIds.alchemistSupplies,
  },
  {
    name: 'Brewing',
    description:
      'Your knowledge of brewing enables you to purify water that would otherwise be undrinkable. As part of a long rest, you can purify up to 6 gallons of water, or 1 gallon as part of a short rest.',
    toolId: toolIds.brewerSupplies,
  },
  {
    name: 'Decipher Treasure Map',
    description:
      "This tool proficiency grants you expertise in examining maps. You can make an Intelligence check to determine a map's age, whether a map includes any hidden messages, or similar facts.",
    toolId: toolIds.calligrapherSupplies,
  },
  {
    name: 'Fortify',
    description:
      'With 1 minute of work and raw materials, you can make a door or window harder to force open. Increase the DC needed to open it by 5.',
    toolId: toolIds.carpenterTools,
  },
  {
    name: 'Temporary Shelter',
    description:
      'As part of a long rest, you can construct a lean-to or a similar shelter to keep your group dry and in the shade for the duration of the rest. Because it was fashioned quickly from whatever wood was available, the shelter collapses 1d3 days after being assembled.',
    toolId: toolIds.carpenterTools,
  },
  {
    name: 'Craft a Map',
    description:
      'While traveling, you can draw a map as you go in addition to engaging in other activity.',
    toolId: toolIds.cartographerTools,
  },
  {
    name: 'Maintain Shoes',
    description:
      "As part of a long rest, you can repair your companions' shoes. For the next 24 hours, up to six creatures of your choice who wear shoes you worked on can travel up to 10 hours a day without making saving throws to avoid exhaustion.",
    toolId: toolIds.cobblerTools,
  },
  {
    name: 'Craft Hidden Compartment',
    description:
      'With 8 hours of work, you can add a hidden compartment to a pair of shoes. The compartment can hold an object up to 3 inches long and 1 inch wide and deep. You make an Intelligence check using your tool proficiency to determine the Intelligence (Investigation) check DC needed to find the compartment.',
    toolId: toolIds.cobblerTools,
  },
  {
    name: 'Prepare a Meal',
    description:
      "As part of a short rest, you can prepare a tasty meal that helps your companions regain their strength. You and up to five creatures of your choice regain 1 extra hit point per Hit Die spent during a short rest, provided you have access to your cook's utensils and sufficient food.",
    toolId: toolIds.cookUtensils,
  },
  {
    name: 'Create a Disguise',
    description:
      'As part of a long rest, you can create a disguise. It takes you 1 minute to don such a disguise once you have created it. You can carry only one such disguise on you at a time without drawing undue attention, unless you have a Bag of Holding or a similar method to keep them hidden. Each disguise weighs 1 pound.\n\nAt other times, it takes 10 minutes to craft a disguise that involves moderate changes to your appearance, and 30 minutes for one that requires more extensive changes.',
    toolId: toolIds.disguiseKit,
  },
  {
    name: 'Quick Fake',
    description:
      "As part of a short rest, you can produce a forged document no more than one page in length. As part of a long rest, you can produce a document that is up to four pages long. Your Intelligence check using a forgery kit determines the DC for someone else's Intelligence (Investigation) check to spot the fake.",
    toolId: toolIds.forgeryKit,
  },
  {
    name: 'Other Tools',
    description:
      "Knowledge of other tools makes your forgeries that much more believable. For example, you could combine proficiency with a forgery kit and proficiency with cartographer's tools to make a fake map.",
    toolId: toolIds.forgeryKit,
  },
  {
    name: 'Identify Weakness',
    description:
      'With 1 minute of study, you can identify the weak points in a glass object. Any damage dealt to the object by striking a weak spot is doubled.',
    toolId: toolIds.glassblowerTools,
  },
  {
    name: 'Identify Plants',
    description:
      'You can identify most plants with a quick inspection of their appearance and smell.',
    toolId: toolIds.herbalismKit,
  },
  {
    name: 'Identify Gem',
    description: 'You can identify gems and determine their value at a glance.',
    toolId: toolIds.jewelerTools,
  },
  {
    name: 'Vehicle Handling',
    description:
      "When piloting a vehicle, you can apply your proficiency bonus to the vehicle's AC and saving throws.",
    toolId: toolIds.landVehicles,
  },
  {
    name: 'Identify Hides',
    description:
      'When looking at a hide or a leather item, you can determine the source of the leather and any special techniques used to treat it. For example, you can spot the difference between leather crafted using dwarven methods and leather crafted using halfling methods.',
    toolId: toolIds.leatherworkerTools,
  },
  {
    name: 'Demolition',
    description:
      'Your knowledge of masonry allows you to spot weak points in brick walls. You deal double damage to such structures with your weapon attacks.',
    toolId: toolIds.masonTools,
  },
  {
    name: 'Compose a Tune',
    description:
      'As part of a long rest, you can compose a new tune and write down the notes. You can perform the tune at any time, and it can be used to inspire others.',
    toolId: toolIds.musicalInstrument,
  },
  {
    name: 'Sighting',
    description:
      'By taking careful measurements, you can determine your position on a nautical chart and the time of day.',
    toolId: toolIds.navigatorsTools,
  },
  {
    name: 'Painting and Drawing',
    description:
      'As part of a short or long rest, you can produce a simple work of art. Although your work might lack precision, you can capture an image or a scene, or make a quick copy of a piece of art you saw.',
    toolId: toolIds.paintersSupplies,
  },
  {
    name: 'Handle Poison',
    description:
      'Your proficiency allows you to handle and apply a poison without risk of exposing yourself to its effects.',
    toolId: toolIds.poisonersKit,
  },
  {
    name: 'Reconstruction',
    description:
      "By examining pottery shards, you can determine an object's original, intact form and its likely purpose.",
    toolId: toolIds.pottersTools,
  },
  {
    name: 'Repair',
    description:
      'With access to your tools and an open flame hot enough to make metal pliable, you can restore 10 hit points to a damaged metal object for each hour of work.',
    toolId: toolIds.smithTools,
  },
  {
    name: 'Set a Trap',
    description:
      "Just as you can disable traps, you can also set them. As part of a short rest, you can create a trap using items you have on hand. The total of your check becomes the DC for someone else's attempt to discover or disable the trap. The trap deals damage appropriate to the materials used in crafting it (such as poison or a weapon) or damage equal to half the total of your check, whichever the DM deems appropriate.",
    toolId: toolIds.thievesTools,
  },
  {
    name: 'Repair',
    description:
      'As part of a long rest, you can repair a single object. The object can be no larger than 3 feet in any dimension, and the object must be within reach throughout the process. The object returns to its original, undamaged state.',
    toolId: toolIds.tinkersTools,
  },
  {
    name: 'Repair',
    description:
      'As part of a short rest, you can repair a single damaged cloth object.',
    toolId: toolIds.weaversTools,
  },
  {
    name: 'Craft Clothing',
    description:
      'Assuming you have access to sufficient cloth and thread, you can create an outfit for a creature as part of a long rest.',
    toolId: toolIds.weaversTools,
  },
  {
    name: 'Repair',
    description:
      'As part of a short rest, you can repair a single damaged wooden object.',
    toolId: toolIds.woodcarversTools,
  },
  {
    name: 'Craft Arrows',
    description:
      'As part of a short rest, you can craft up to five arrows. As part of a long rest, you can craft up to twenty. You must have enough wood on hand to produce them.',
    toolId: toolIds.woodcarversTools,
  },
  {
    name: 'Vehicle Handling',
    description:
      "When piloting a vehicle, you can apply your proficiency bonus to the vehicle's AC and saving throws.",
    toolId: toolIds.waterVehicle,
  },
].map((feature, index, arr) => {
  const featureParent = ToolSeed.find((tool) => tool.id === feature.toolId);
  if (!featureParent)
    throw new Error(
      'No parent with id ' + feature.toolId + ' for feature ' + feature.name
    );
  const id = generateId('tool', feature.name, featureParent.name, count);
  count++;
  const nextToolFeature = arr[index + 1];
  if (!nextToolFeature) return { ...feature, id };
  if (nextToolFeature.toolId !== feature.toolId) {
    count = 1;
  }
  return { ...feature, id };
});

export default ToolFeaturesSeed;

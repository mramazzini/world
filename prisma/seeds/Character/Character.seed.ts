import { Alignment } from '@prisma/client';
import { classIds } from '../Classes/ClassIds';
import { backgroundIds } from '../Backgrounds/BackgroundIds';
import { speciesIds } from '../Species/Species.seed';
import { CreateCharacterParams } from '@/lib/actions/db/character/create.actions';

const CharacterSeed: CreateCharacterParams[] = [
  //Aegis
  {
    name: 'Aegis',
    speciesId: speciesIds.warforged,
    classId: classIds.artificer,
    alignment: Alignment.CHAOTIC_GOOD,
    backgroundId: backgroundIds.runeCarver,
    userId: '1',
  },
  //gibbons
  {
    name: 'Gibbons',
    speciesId: speciesIds.waterGenasiMMOM,
    classId: classIds.monk,
    alignment: Alignment.NEUTRAL_GOOD,
    backgroundId: backgroundIds.sailor,
    userId: '1',
  },
  //vishvaas
  {
    name: 'Vishvaas',
    speciesId: speciesIds.dragonborn,
    classId: classIds.paladin,
    alignment: Alignment.LAWFUL_GOOD,
    backgroundId: backgroundIds.knightOfTheOrder,
    userId: '1',
  },
  //constantine
  {
    name: 'Constantine Wayfinder',
    speciesId: speciesIds.elf,
    classId: classIds.paladin,
    alignment: Alignment.LAWFUL_GOOD,
    backgroundId: backgroundIds.cityWatch,
    userId: '1',
  },
  //talon drakesong
  {
    name: 'Talon Drakesong',
    speciesId: speciesIds.human,
    classId: classIds.ranger,
    alignment: Alignment.CHAOTIC_GOOD,
    backgroundId: backgroundIds.sailor,
    userId: '1',
  },
  //orion lysander
  {
    name: 'Orion Lysander',
    speciesId: speciesIds.aasimarVGM,
    classId: classIds.cleric,
    alignment: Alignment.CHAOTIC_GOOD,
    backgroundId: backgroundIds.soldier,
    userId: '1',
  },
  //balto
  {
    name: 'Balto',
    speciesId: speciesIds.airGenasiEEPC,
    classId: classIds.bard,
    alignment: Alignment.CHAOTIC_GOOD,
    backgroundId: backgroundIds.rivalIntern,
    userId: '1',
  },
  //odea
  {
    name: 'Odea',
    speciesId: speciesIds.harengonMMOM,
    classId: classIds.monk,
    alignment: Alignment.LAWFUL_GOOD,
    backgroundId: backgroundIds.hermit,
    userId: '1',
  },
  //alaric
  {
    name: 'Alaric Ashford',
    speciesId: speciesIds.airGenasiMMOM,
    classId: classIds.barbarian,
    alignment: Alignment.CHAOTIC_GOOD,
    backgroundId: backgroundIds.investigatorSCAG,
    userId: '1',
  },
  //ranis
  {
    name: 'Ranis Drakan',
    speciesId: speciesIds.elf,
    classId: classIds.artificer,
    alignment: Alignment.NEUTRAL_GOOD,
    backgroundId: backgroundIds.runeCarver,
    userId: '1',
  },
  // Jay Walker
  {
    name: 'Jay Walker',
    speciesId: speciesIds.harengonMMOM,
    classId: classIds.ranger,
    alignment: Alignment.CHAOTIC_GOOD,
    backgroundId: backgroundIds.gambler,
    userId: '1',
  },
];

export default CharacterSeed;

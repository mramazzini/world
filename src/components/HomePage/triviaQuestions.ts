const triviaQuestions: {
  question: string;
  wronganswers: string[];
  correctanswer: string;
}[] = [
  {
    question: 'Which spell does not require a verbal component in its casting?',
    wronganswers: ['Fireball', 'Teleport', 'Dispel Magic'],
    correctanswer: 'Meld Into Stone',
  },
  {
    question:
      'In D&D 5e, which feat allows you to cast Find Familiar as a ritual, even if you are not a spellcaster?',
    wronganswers: ['Magic Initiate', 'Skilled', 'War Caster'],
    correctanswer: 'Ritual Caster',
  },
  {
    question: 'Which spell grants the ability to fly at the highest speed?',
    wronganswers: ['Fly', 'Levitate', 'Gaseous Form'],
    correctanswer: 'Wind Walk',
  },
  {
    question:
      "Which material component is consumed by the spell Heroes' Feast?",
    wronganswers: [
      'A platinum ring',
      'A sprinkle of holy water',
      'A diamond worth at least 300 gp',
    ],
    correctanswer: 'A gem-encrusted bowl worth at least 1,000 gp',
  },
  {
    question: 'What is the base speed of an unencumbered Tabaxi?',
    wronganswers: ['25 feet', '60 feet', '35 feet'],
    correctanswer: '30 feet',
  },
  {
    question: 'Which school of magic does the Antimagic Field spell belong to?',
    wronganswers: ['Evocation', 'Conjuration', 'Transmutation'],
    correctanswer: 'Abjuration',
  },
  {
    question: 'Which of these creatures is not an aberration?',
    wronganswers: ['Mind Flayer', 'Beholder', 'Aboleth'],
    correctanswer: 'Lich',
  },
];

export default triviaQuestions;

// function that logs a message with a color

import chalk from 'chalk';

export const cerr = (...messages: unknown[]) => {
  console.error(chalk.red(...messages));
};

export const csuccess = (...messages: unknown[]) => {
  console.log(chalk.green(...messages));
};

export const cinfo = (...messages: unknown[]) => {
  console.log(chalk.blue(...messages));
};

export const cwarn = (...messages: unknown[]) => {
  console.warn(chalk.yellow(...messages));
};

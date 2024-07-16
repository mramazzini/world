// function that logs a message with a color

import chalk from "chalk";

export const cerr = (...messages: any[]) => {
  console.error(chalk.red(...messages));
};

export const csuccess = (...messages: any[]) => {
  console.log(chalk.green(...messages));
};

export const cinfo = (...messages: any[]) => {
  console.log(chalk.blue(...messages));
};

export const cwarn = (...messages: any[]) => {
  console.warn(chalk.yellow(...messages));
};

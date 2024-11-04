//Capitalizes the first letter of a string and decapitalizes the rest
// import "@/lib/string.extensions"; // add this to the top of your file

function toCapitalCase(str: string): string {
  if (str.length === 0) return str as string;
  if (str.length === 1) return str.toUpperCase();
  const strArr = str.split(' ');
  return strArr
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function camelToCapitalCase(str: string): string {
  return str
    .split(/(?=[A-Z])/)
    .map((word) => toCapitalCase(word))
    .join(' ');
}

declare global {
  interface String {
    toCapitalCase(): string;
    camelToCapitalCase(): string;
  }
}

String.prototype.toCapitalCase = function () {
  return toCapitalCase(this as string);
};

String.prototype.camelToCapitalCase = function () {
  return camelToCapitalCase(this as string);
};

export {};

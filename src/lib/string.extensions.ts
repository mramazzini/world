//Capitalizes the first letter of a string and decapitalizes the rest
// import "@/lib/string.extensions"; // add this to the top of your file
function toCapitalCase(str: String): string {
  if (str.length === 0) return str as string;
  if (str.length === 1) return str.toUpperCase();
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function camelToCapitalCase(str: String): string {
  return str
    .split(/(?=[A-Z])/)
    .map((word) => toCapitalCase(word))
    .join(" ");
}

declare global {
  interface String {
    toCapitalCase(): string;
    camelToCapitalCase(): string;
  }
}

String.prototype.toCapitalCase = function () {
  return toCapitalCase(this);
};

String.prototype.camelToCapitalCase = function () {
  return camelToCapitalCase(this);
};

export {};

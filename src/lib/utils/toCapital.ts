//Capitalizes the first letter of a string and decapitalizes the rest
function toCapitalCase(str: String): string {
  if (str.length === 0) return str as string;
  if (str.length === 1) return str.toUpperCase();
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default toCapitalCase;

export function serialize(obj: Record<string, any>, prefix?: string): string {
  const queryString = Object.keys(obj)
    .map((key) => {
      const value = obj[key];
      // If prefix exists, construct the key with the prefix (e.g., "address[city]")
      const prefixedKey = prefix ? `${prefix}[${key}]` : key;

      if (typeof value === "object" && value !== null) {
        // Recursively serialize nested objects with the prefixed key
        return serialize(value, prefixedKey);
      } else {
        // Encode the key and value
        return `${encodeURIComponent(prefixedKey)}=${encodeURIComponent(
          String(value)
        )}`;
      }
    })
    .join("&");

  return queryString;
}
export function deserialize(queryString: string): Record<string, any> {
  const result: Record<string, any> = {};

  // Split the query string into key-value pairs
  queryString
    .slice(1)
    .split("&")
    .forEach((part) => {
      const [key, value] = part.split("=").map(decodeURIComponent);

      // Handle cases where key includes brackets (e.g., address[city])
      const keys = key.split(/[\[\]]+/).filter(Boolean);

      let current: any = result;
      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          current[key] = value;
        } else {
          if (!current[key]) {
            current[key] = {};
          }
          current = current[key];
        }
      });
    });

  return result;
}

export function memoize<T extends (...args: any[]) => any>(
  fn: (this: void, ...args: Parameters<T>) => ReturnType<T>
): T {
  const cache = new Map<string, ReturnType<T>>();

  return function (this: void, ...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Cache hit", args);
      return cache.get(key)!;
    }

    console.log("Cache miss", args);
    const result = fn.apply(this, args);

    // Check if the result is a Promise-like object by verifying it has a 'then' method
    if (
      result &&
      typeof result === "object" &&
      typeof (result as Promise<any>).then === "function"
    ) {
      return (result as Promise<any>).then((resolvedResult) => {
        cache.set(key, resolvedResult);
        return resolvedResult;
      }) as ReturnType<T>;
    } else {
      cache.set(key, result);
      return result;
    }
  } as T;
}

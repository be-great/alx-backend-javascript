// weakmap => can store the key in format of object {}

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // check if the endpoint already in the weakmap
  // if not init the count
  if (!weakMap.has(endpoint)) weakMap.set(endpoint, 0);
  // else get the count
  const count = weakMap.get(endpoint);
  // then set
  weakMap.set(endpoint, count + 1);
  // if the count reach 5 we throw an error
  if (count + 1 >= 5) throw new Error('Endpoint load is high');
}

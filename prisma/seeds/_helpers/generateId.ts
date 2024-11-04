const generateId = (
  model: string,
  featureName: string,
  parentName: string,
  count: number
) => {
  return `${model}-${featureName}-${parentName}-${count}`;
};

export default generateId;

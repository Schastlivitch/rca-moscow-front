export default (classNames: (string | boolean | undefined)[] = []): string => {
  return classNames
    .reduce((accArray, className) => {
      if (className) {
        return [...accArray, className];
      }
      return [...accArray];
    }, [] as (string | boolean)[])
    .join(' ');
};

export const calculateMaxPercentage = (
  totalpoints: number,
  maxPercentageDivider: number,
  maxPercentageCap: number
): number => {
  if (totalpoints < 0) return 10;

  const maxPercentage = Math.min(
    (totalpoints / maxPercentageDivider) * 100,
    maxPercentageCap
  );
  return maxPercentage;
};

export const calculateMinPercentage = (
  totalpoints: number,
  minPercentageDivider: number,
  minPercentageCap: number
): number => {
  if (totalpoints < 0) return 0;

  const minPercentage = Math.min(
    (totalpoints / minPercentageDivider) * 100,
    minPercentageCap
  );
  return minPercentage;
};

export const calculateAveragePercentage = (
  maxPercentage: number,
  minPercentage: number
): number => {
  const averagePercentage = (maxPercentage + minPercentage) / 2;
  return averagePercentage;
};

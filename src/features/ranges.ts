export const gpaRanges: {
  range: number[];
  points: number;
}[] = [
  { range: [4.0], points: 100 },
  { range: [3.95, 4.0], points: 98 },
  { range: [3.9, 3.95], points: 96 },
  { range: [3.85, 3.9], points: 93 },
  { range: [3.8, 3.85], points: 90 },
  { range: [3.75, 3.8], points: 86 },
  { range: [3.7, 3.75], points: 82 },
  { range: [3.65, 3.7], points: 77 },
  { range: [3.6, 3.65], points: 72 },
  { range: [3.55, 3.6], points: 66 },
  { range: [3.5, 3.55], points: 60 },
  { range: [3.45, 3.5], points: 54 },
  { range: [3.4, 3.45], points: 48 },
  { range: [3.35, 3.4], points: 42 },
  { range: [3.3, 3.35], points: 36 },
  { range: [3.25, 3.3], points: 30 },
  { range: [3.2, 3.25], points: 24 },
  { range: [3.15, 3.2], points: 18 },
  { range: [3.1, 3.15], points: 12 },
  { range: [3.05, 3.1], points: 6 },
  { range: [3.0, 3.05], points: 0 },
  { range: [0.0, 2.9], points: -50 },
];

export const satRanges: {
  range: number[];
  points: number;
}[] = [
  { range: [1550, 1600], points: 10 },
  { range: [1500, 1549], points: 5 },
  { range: [1450, 1499], points: 2 },
  { range: [1400, 1449], points: 0 },
  { range: [1350, 1399], points: -4 },
  { range: [1300, 1349], points: -8 },
  { range: [1250, 1299], points: -14 },
  { range: [1200, 1249], points: -20 },
  { range: [1150, 1199], points: -27 },
  { range: [1100, 1149], points: -35 },
  { range: [0, 1099], points: -50 },
];

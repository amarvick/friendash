export const getDistance = (coordinates1, coordinates2) => {
  const dx = Math.abs(coordinates1[0] - coordinates2[0]);
  const dy = Math.abs(coordinates1[1] - coordinates2[1]);
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)).toFixed(2);
}
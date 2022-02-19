export const monthDayYear = (date) => {
  if (!date) return "No Date";
  return new Date(date).toLocaleDateString("en-US");
};

export const timeConverter = (date: string) => {
  const timePart = date.split("T")[1].split(".")[0];
  const [hours, minutes] = timePart.split(":");
  const time = `${hours}:${minutes}`;

  return time;
};

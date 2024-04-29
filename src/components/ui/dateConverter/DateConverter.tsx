export const dateConverter = (date: string) => {
  const datePart = date.split("T")[0];
  const [year, month, day] = datePart.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

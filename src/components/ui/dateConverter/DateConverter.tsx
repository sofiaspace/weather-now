export const dateConverter = (date: string) => {
  const datePart = date.split("T")[0];
  const [year, month, day] = datePart.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

export const dayConverter = (fullDate: string) => {
  const date = new Date(fullDate);

  const dayNumber = date.getDay();

  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  const dayName = weekday[dayNumber];

  return dayName;
};

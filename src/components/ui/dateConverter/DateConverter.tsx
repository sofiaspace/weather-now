export const dateConverter = (date: string) => {
  const datePart = date.split("T")[0];
  const [year, month, day] = datePart.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

// const date = dailyForecast.Date.split("T")[0];
// const date = new Date(dailyForecast.Date);
// const formattedDate = date.getDate();

// console.log(formattedDate);

export const dateToNumber = (inputDate: Date): number =>
  +inputDate.toISOString().split("T")[0].replaceAll("-", "");

export const numberToDate = (inputNumber: number): string => {
  const year = inputNumber.toString().slice(0, 4);
  const month = inputNumber.toString().slice(4, 6);
  const day = inputNumber.toString().slice(6, 8);
  return year + "-" + month + "-" + day;
};

const todaysDate = new Date();
let previousDate = new Date();
previousDate.setMonth(todaysDate.getMonth() - 24);

export const defaultDate = {
  startDate: dateToNumber(previousDate),
  endDate: dateToNumber(todaysDate),
};

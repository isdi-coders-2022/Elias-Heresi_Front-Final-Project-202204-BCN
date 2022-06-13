export const dateToNumber = (inputDate: Date): number =>
  +inputDate.toISOString().split("T")[0].replaceAll("-", "");

export const numberToDate = (inputNumber: number): string => {
  const year = inputNumber.toString().slice(0, 4);
  const month = inputNumber.toString().slice(4, 6);
  const day = inputNumber.toString().slice(6, 8);
  return year + "-" + month + "-" + day;
};

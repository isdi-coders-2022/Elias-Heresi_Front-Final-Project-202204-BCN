export const dateToNumber = (inputDate: Date): number =>
  +inputDate.toISOString().split("T")[0].replaceAll("-", "");

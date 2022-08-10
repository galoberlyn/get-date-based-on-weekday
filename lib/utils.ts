import { ADD_DAY } from "./constants"

export const calculateDaysToAdd = (initialDay: number, weekNumber: number) => {
  switch(weekNumber) {
    case 1:
      return initialDay
    case 2:
      return initialDay + ADD_DAY;
    case 3:
      return initialDay + (ADD_DAY * 2);
    case 4:
      return initialDay + (ADD_DAY * 3);
    default:
      return initialDay
  }
}

import { calculateDaysToAdd } from "./utils";

/**
 * 
 * @param date the date to base your preference
 * @param weekNumber the week number of what weekday you want to get
 * @returns Date
 */
export const getMondayOfMonth = (date: Date, weekNumber: number) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let dayOfFirstMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  let daysToAdd: number = 0;

  switch (days[dayOfFirstMonth.getDay()]) {
    case 'Sunday':
      daysToAdd = calculateDaysToAdd(1, weekNumber)
      break;
    case 'Monday':
      daysToAdd = calculateDaysToAdd(0, weekNumber)
      break;
    case 'Tuesday':
      daysToAdd = calculateDaysToAdd(6, weekNumber)
      break;
    case 'Wednesday':
      daysToAdd = calculateDaysToAdd(5, weekNumber)
      break;
    case 'Thursday':
      daysToAdd = calculateDaysToAdd(4, weekNumber)
      break;
    case 'Friday':
      daysToAdd = calculateDaysToAdd(3, weekNumber)
      break;
    case 'Saturday':
      daysToAdd = calculateDaysToAdd(2, weekNumber)
      break;
    default:
      daysToAdd = 0;
  }

  dayOfFirstMonth.setDate(dayOfFirstMonth.getDate() + daysToAdd);

  return dayOfFirstMonth;

};

import { getFridayOfMonth } from "../index";

// param 1 date of what you want to base on
// param 2 the week number from 1 to 4
console.log(getFridayOfMonth(new Date('2022-08-10'), 2).toDateString())
// output Fri Aug 12 2022

console.log(getFridayOfMonth(new Date('2022-06-10'), 1).toDateString());
// Friday June 03 2022
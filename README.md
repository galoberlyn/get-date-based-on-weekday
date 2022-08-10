
# get-date-based-on-weekday

An easy to use package that gets the date of the weekday and week number provided.
Does not use moment or any date libraries




## Installing

To install this library

```bash
  npm install get-date-based-on-weekday
```

```bash
  yarn install get-date-based-on-weekday
```

## API Reference


| Function | Return Type     | Description                |
| :-------- | :------- | :------------------------- |
| `getSundayOfMonth(:date, :weekNumber)` | `Date Object` | Returns the date of the Sunday |
| `getMondayOfMonth(:date, :weekNumber)` | `Date Object` | Returns the date of the Monday |
| `getTuesdayOfMonth(:date, :weekNumber)` | `Date Object` | Returns the date of the Tuesday |
| `getWednesdayOfMonth(:date, :weekNumber)` | `Date Object` | Returns the date of the Wednesday |
| `getFridayOfMonth(:date, :weekNumber)` | `Date Object` | Returns the date of the Friday |
| `getSaturdayOfMonth(:date, :weekNumber)` | `Date Object` | Returns the date of the Saturday |

#### Available parameters


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `date`      | `Date Object` | The Date object you want to base on. example: `new Date()` |
| `weekNumber` | `number` | The preferred week number from 1 to 4 |



## Usage/Examples

TypeScript 

```javascript
import { getFridayOfMonth } from "get-date-based-on-weekday/dist";

// param 1 date of what you want to base on
// param 2 the week number from 1 to 4


console.log(getFridayOfMonth(new Date('2022-08-10'), 2).toDateString())
// output Fri Aug 12 2022

console.log(getFridayOfMonth(new Date('2022-06-10'), 1).toDateString());
// Friday June 03 2022
```

Commonjs

```javascript
const DateWeekGetter = require('get-date-based-on-weekday/dist');

console.log(DateWeekGetter.getFridayOfMonth(new Date(), 2));
// output date

```


## Author

- [@galoberlyn](https://www.github.com/galoberlyn)


## License

[MIT](https://choosealicense.com/licenses/mit/)


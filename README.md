
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


## Usage/Examples

```javascript
import { getFridayOfMonth } from "get-date-based-on-weekday";

// param 1 date of what you want to base on
// param 2 the week number from 1 to 4


console.log(getFridayOfMonth(new Date('2022-08-10'), 2).toDateString())
// output Fri Aug 12 2022

console.log(getFridayOfMonth(new Date('2022-06-10'), 1).toDateString());
// Friday June 03 2022
```


## Author

- [@galoberlyn](https://www.github.com/galoberlyn)


## License

[MIT](https://choosealicense.com/licenses/mit/)


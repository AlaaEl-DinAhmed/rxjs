const { from } = require("rxjs");
const { map, filter, take } = require("rxjs/operators");

const values = [1, 2, 3, 4, 5];
const newArr = [];

const sub = from(values).pipe(
  map((val) => val * 2),
  filter((val) => val >= 4)
);
sub.subscribe(console.log);

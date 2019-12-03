function isEnough(value) {
  return value >= 10;
}

const filter = [12, 5, 8, 130, 44].filter(isEnough);

console.log(filter);

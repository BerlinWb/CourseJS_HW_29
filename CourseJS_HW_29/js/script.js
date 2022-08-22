"use strict";
const randomNumber = () => {
  const arr = [];
  for (let i = 1; i <= 50; i++) {
      arr.push(i)
  };
  function get() {
  return arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
};
return get;
};
const res = randomNumber();
console.log(res());

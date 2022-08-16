"use strict";
const randomNumber = () => {
  const arr = [];
  for (let i = 1; i <= 50; i++) {
      arr.push(i)
  };
  return () => arr.splice(Math.floor(Math.random() * arr.length),
   1)[0];
};

const res = randomNumber();

for (let i = 0; i < 50; i++) {
  console.log(res());
};
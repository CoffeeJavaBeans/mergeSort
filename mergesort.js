function split(wholeArray) {
  let halflen = Math.floor(wholeArray.length / 2);
  //console.log(halflen);
  let firstHalf = [];
  let secondHalf = [];
  for (let i = 0; i < halflen; i++) {
    firstHalf.push(wholeArray[i]);
  }
  for (let i = halflen; i < wholeArray.length; i++) {
    secondHalf.push(wholeArray[i]);
  }
  return [firstHalf, secondHalf];
}

let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(split(arrr));

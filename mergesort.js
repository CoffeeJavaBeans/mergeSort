function split(wholeArray) {
  let halflen = Math.floor(wholeArray.length / 2);
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

function merge(arr1, arr2) {
  let sorted = [];
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] <= arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  return sorted;
}

//let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(split(arrr));

// let arr1 = [1, 4, 6];
// let arr2 = [2, 3, 7, 8];
// console.log(merge(arr1, arr2));

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let [arr1, arr2] = split(array);
  return merge(mergeSort(arr1), mergeSort(arr2));
}
let arrrrr = [9, 7, 3, 5, 6, 7, 8, 1];

console.log(mergeSort(arrrrr));

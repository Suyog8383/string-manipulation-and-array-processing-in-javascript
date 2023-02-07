//Remove duplicate items from an array Set method

function removeDuplicates(arr) {
  let data = [...new Set(arr)];
  return data;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));

//Remove duplicate items from an array filter method

function removeDuplicates2(arr) {
  let data = arr.filter((item, index) => arr.indexOf(item) === index);
  return data;
}
console.log(removeDuplicates2([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));

// Determine whether or not the array is empty.

const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;

console.log("@SN ", isNotEmpty([1, 2, 3]));

//Combining two arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
function combine(arr1, arr2) {
  let data = [...arr1, ...arr2];
  return data;
}
console.log("@SN ", combine(arr1, arr2));

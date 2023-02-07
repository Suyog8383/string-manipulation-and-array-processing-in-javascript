//Initial capitalization of a string

let str = "hello world";
function capitalWorld(str) {
  let data = str.charAt(0).toUpperCase() + str.slice(1);
  return data;
}
console.log("@SN ", capitalWorld(str)); //Hello world

// Flip the string

let str2 = "suyog";
function flipString(str2) {
  let data = str2.split("").reverse().join("");
  return data;
}
console.log("@SN ", flipString(str2));

//Random String
function randomString() {
  let data = Math.random().toString(36).slice(3);
  return data;
}
console.log("@SN ", randomString());

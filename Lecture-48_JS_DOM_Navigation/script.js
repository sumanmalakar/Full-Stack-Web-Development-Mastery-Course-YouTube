let con = document.querySelector('#container');

// console.log("container = ",con)

// access children

// console.log("All childs :- ")
// console.log(con.children)
// console.log("first child = ",con.firstElementChild.textContent)

// console.log("Last child = ",con.lastElementChild.textContent)

// // con.firstElementChild.textContent = "Suman"
// con.lastElementChild.textContent = "RAM"

// parents
const item = con.children[1];

// console.log("Parent of item ", item.parentElement.id)

// sibling
const prevSibling = item.previousElementSibling

const nextSibling = item.nextElementSibling;

console.log("Previous sibling = ",prevSibling.textContent)
console.log("Next sibling = ",nextSibling.textContent)
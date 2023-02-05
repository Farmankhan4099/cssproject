// ans-2

// let english = Number(prompt("what is your english marks"));
// let science = Number(prompt("what is your science marks"));
// let Math = Number(prompt("what is your science marks"));
// let Hindi = Number(prompt("what is your hindi marks"));

// let total = english + science + Math + Hindi;
// alert((total / 400) * 100);
// let to = (total / 400) * 100;
// console.log(to);

// ans-10

let farman = 80;
let rashid = 62;
let salauddin = 59;
let nasir = 70;

if (farman > rashid && farman > salauddin && farman > nasir) {
  console.log("farman is intelligent");
} else if (rashid > farman && rashid > salauddin && rashid > nasir) {
  console.log("rashid is intelligent");
} else if (salauddin > farman && salauddin > rashid && salauddin > nasir) {
  console.log("salauddin is intelligent");
} else {
  console.log("nasir is intelligent");
}

// ans-4

// let name = "farman" + 20;
// console.log(name);

// let yourName = "farman" + true;
// console.log(yourName);

// let coachingName = 30 + "Wecode";
// console.log(coachingName);

let name = "farman" + (20 + true);
let coachingName = "weCode" + 30;
console.log(name + coachingName);

// ans-5

// let firstQuestion = prompt("Do you drink coffee or tea?");
// if (firstQuestion === "tea") {
//   alert("coffee");
// } else if (firstQuestion === "coffee") {
//   alert("tea");
// }

// ans-8
// let age = prompt("what is your age");
// if (age > 18) {
//   let openAcc = confirm("Do you want to open account?");
//   if (openAcc) {
//     prompt("what is your name?");
//     prompt("What is your aaadhar number?");
//     prompt("What is your address?");
//     prompt("What is your mobile number?");
//     alert("thanks");
//   } else {
//     console.log("sorry");
//   }
// } else {
//   alert("Sorry, please visit again.");
// }

// ans-7

let temprature = 16;

if (temprature < 10) {
  console.log("very cold");
} else if (temprature < 30 && temprature >= 10) {
  console.log("cold");
} else if (temprature > 30 && temprature < 40) {
  console.log("hot");
} else {
  console.log("very hot");
}

// ans-1

let a = 30;
let b = 30;
let totalMark = 100;
let c = totalMark - (a + b);
console.log(c);

// ans-3

let century = 1894;
let year = century / 100;
console.log(Math.floor(year));

// ans-9

// let user = prompt("What do you want to do");
// if (user === "+") {
//   let users = Number(prompt("enter your first answar"));
//   let users1 = Number(prompt("enter your first answar"));
//   alert(users + users1);
// } else if (user === "-") {
//   let user2 = Number(prompt("enter your first number"));
//   let user3 = Number(prompt("enter your second numbar"));
//   alert(user2 - user3);
// }

// ans-6

let x = 88;
if (x % 2 == 0 && x % 4 == 0 && (x < 100 || x === 84)) {
  console.log("even");
} else {
  console.log("odd");
}

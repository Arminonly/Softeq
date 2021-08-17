//! Test 2
let number = 99,  i,  e;
for (i = 1; i < number + 1; i++) {
  e = document.createElement("li");
  i % 3 == 0
    ? (e.innerHTML = " Open")
    : i % 7 == 0
    ? (e.innerHTML = " Source")
    : i % 3 == 0 && i % 7 == 0
    ? (e.innerHTML = " OpenSource")
    : (e.innerHTML = i);
  document.getElementById("output").appendChild(e);
}

//! Test 3
let elements = document.querySelector(".container").children;
for (let elem of elements) {
  alert(elem.tagName);
  alert(elem.innerHTML);
}

//! Test 4
function getOnlyIntegerSum() {
  let numbers = [];
  while (true) {
    let value = prompt("only integer is allowed", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(parseInt(+value));
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert(getOnlyIntegerSum());

//! Test 5
async function getResponse() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let content = await response.json();
  content = content.splice(0, 10);
  console.log(content);
  let list = document.querySelector(".posts");
  let key;
  for (key in content) {
    if (key == 4) {
      list.innerHTML += `
	  <li>
	   	<h2>userId is: ${content[key].userId}</h2>
		<h2>id is: ${content[key].id}</h2>
		<h3>title is: ${content[key].title}</h3>
		<h4>body is: ${content[key].body}</h4>
	  </li>
	  `;
      console.log(content[key]);
   }
  }
}
getResponse();

//! Test 6
let regexp1 = "Softeq and #rules";
let regexp2 = "#rules and Softeq";
alert(regexp1.match(/\bSofteq\b.*\brules\b|.*\brules\b.*\bSofteq\b/));
alert(regexp2.match(/\bSofteq\b.*\brules\b|.*\brules\b.*\bSofteq\b/));

//! Test 7
function bigLetters(start, stop) {
  let result = [];
  for (
    let element = start.charCodeAt(0), end = stop.charCodeAt(0);
    element <= end;
    ++element
  ) {
    result.push(String.fromCharCode(element));
  }
  return result;
}
alert(bigLetters("A", "Z").join());

//! Test 8*
let name = "";
let number = Math.floor(Math.random() * 1000000);
let guesses = 0;
let maxGuesses = 50;

console.log(number);

const output = document.querySelector("#output");
const prompt = document.querySelector("#prompt");
const input = document.querySelector("#prompt input");

prompt.addEventListener("submit", handleSubmit);
printMessage("Please, enter your name");

input.focus();
function handleSubmit(event) {
  event.preventDefault();
  verify(input.value);
  input.value = "";
  if (guesses == maxGuesses) {
    prompt.remove();
    printMessage(`GAME OVER`);
    printMessage("you have exceeded the number of these attempts");
  }
}

function printMessage(message) {
  let li = document.createElement("li");
  li.textContent = message;
  output.appendChild(li);
}

function clearOutput() {
  for (let i = 0; i < output.children.length; i++) {
    output.removeChild(output.children[i]);
  }
}

function verify(input) {
  if (!input) return;
  if (!name) {
    name = input;
    clearOutput();
    printMessage(`${
      name[0].toUpperCase() + name.slice(1).toLowerCase()
    }, find a secret integer between 1 and 1000000 in less than 50
    guesses.`);
    return;
  }
  printMessage(input);
  let guess = Number.parseInt(input);
  if (Number.isNaN(guess)) return;

  guesses += 1;
  if (guess > number) {
    printMessage("1 - the solution is bigger than the guessing parameter.");
  } else if (guess < number) {
    printMessage("-1 - the solution is smaller than the guessing parameter.");
  } else {
    printMessage(`0 - YOU WON, the number is ${guess}`);
    if (guesses == 1) {
      printMessage(`you made ${guesses} attempt`);
    } else {
      printMessage(`you made ${guesses} attempts`);
    }

    printMessage(`GAME OVER`);

    prompt.remove();
  }
}

var input = document.querySelector("input");
const ul = document.createElement("ul");
const appendedUL = document.getElementById("show-tasks").appendChild(ul);

function getValue() {}
document.querySelector("input").addEventListener("keypress", function (event) {
  if (event.key === "Enter" && input.value) {
    const li = document.createElement("li");
    const appendedLi = appendedUL.appendChild(li);
    appendedLi.innerHTML = input.value;
    input.value = "";
  } else if (event.key === "Enter" && !input.value) {
    alert("enter some text");
  }
});

function addTask() {
  if (input.value) {
    const li = document.createElement("li");
    const appendedLi = appendedUL.appendChild(li);
    appendedLi.innerHTML = input.value;
    input.value = "";
  } else {
    alert("enter some text");
  }
}

function clearTask() {
    const check = appendedUL.innerHTML = "";
    console.log(check)
  



  // for (var i = 0; i <= appendedUL.children.length - 1; i++) {
  //   const check = appendedUL.children[i].remove();
  //   console.log(check);
  // }
}

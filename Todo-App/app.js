let todo = [];
let req = prompt("Enter your request");
console.log(req);
while (true) {
  if (req == "quit") {
    console.log("Quitting app");
    break;
  } else if (req == "add") {
    let task = prompt("Enter the task to add");
    todo.push(task);
    console.log("Task Added");
  } else if (req == "list") {
    console.log("---------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("---------");
  } else if (req == "delete") {
    let idx = prompt("Enter the task index");
    todo.splice(idx, 1);
    console.log("Task deleted");
  }
  req = prompt("Enter your request");
}

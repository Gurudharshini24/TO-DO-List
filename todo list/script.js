function addTask() {
    var  input = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var task = input.value;

    if (task === "") {
        alert("Please enter a task");
    }
else{
    var li = document.createElement("li");
    li.innerText = task;

    taskList.append(li);
}
    input.value = "";
}
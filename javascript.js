let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];

let todoCount = todoList.length

function deletingTodoElement(todoId) {
    let deleteTodoElement = document.getElementById(todoId)
    todoItemsContainer.removeChild(deleteTodoElement)
}

function onTodoStatusChange(checkBoxId, labelId) {
    let checkBoxElement = document.getElementById(checkBoxId)
    let labelElement = document.getElementById(labelId)
    labelElement.classList.toggle("checked")
    /*we can use the below functionality in order to give the strike off 
    text when clikced or checked on checkBox
    if (checkBoxElement.checked===true){
        labelElement.classList.add("checked")
    }
    else{
        labelElement.classList.remove("checked")
    }
    */

}

function createAndAppendTodo(todo) {
    let checkBoxId = "checkbox" + todo.uniqueNo
    let labelId = "label" + todo.uniqueNo
    let todoId = "todo" + todo.uniqueNo
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkBoxId
    inputElement.classList.add("checkbox-input");

    inputElement.onclick = function() {
        onTodoStatusChange(checkBoxId, labelId)
    }
    
    todoElement.appendChild(inputElement);


    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkBoxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {
        deletingTodoElement(todoId)
    }

    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

let addTodoButton = document.getElementById("addTodoButton")
let todoUserInput = document.getElementById("todoUserInput")

function onAddTodo() {
    let todoUserInputValue = todoUserInput.value
    if (todoUserInputValue === "") {
        alert("Enter a Valid Text")
        return
    }
    todoCount = todoCount + 1
    let newTodo = {
        text: todoUserInputValue,
        uniqueNo: todoCount
    }
    createAndAppendTodo(newTodo)
    todoUserInput.value = ""

}

addTodoButton.onclick = function() {
    onAddTodo()
}
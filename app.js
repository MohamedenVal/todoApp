// Decleration
let addButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input")

// event listeners

addButton.addEventListener("click", addTodo);
// .addEventListener("click", addTodo);


// function declaration

function addTodo(event){
    // Prevent from submitting
    event.preventDefault();

    
    // creating The parent DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //create li element, checked button and trash button

    const newTodo = document.createElement("li");
    const checkedButton = document.createElement("button");
    const trashButton = document.createElement("button");

    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    checkedButton.classList.add("checked-button");
    checkedButton.innerHTML = '<i class="fas fa-check"></i>';
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");

    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(checkedButton);
    todoDiv.appendChild(trashButton);
    

    // append to the list

    todoList.appendChild(todoDiv);
    todoInput.value = ''
    // creating the idintifier for individual todo items
    
    checkedButton.addEventListener('click', checkTodo);
    trashButton.addEventListener('click', deleteTodo)
}

function checkTodo(event) {
    event.preventDefault();
    let item = event.target.parentElement;
    item.classList.toggle("checked");
}

function deleteTodo(event){
    event.preventDefault();
    let item = event.target.parentElement;
    item.classList.toggle("fall");
    item.addEventListener('transitionend', function(){
        item.remove();
    })
}
// ``
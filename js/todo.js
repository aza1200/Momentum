const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    //click 은 button 에서 일어났고 button 은 li 에 포함되어있다.
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    // list 안에 span 과 button 추가 한 이후에 ToDoList 에 자식 추가

    toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello(item){
    console.log(item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //parsedToDos.forEach(sayHello);
    //sayHello("a");

    parsedToDos.forEach((item)=> console.log("Hello "+ item));

}
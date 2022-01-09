const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];
const TODOS_KEY = "todos";

// 저장된 todo 리스트를 문자형태로 TODOS_KEY에 저장하는 것
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
// 저장된 TODO를 지우는 것 
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((event) => event.id !== parseInt(li.id));
    saveToDos();
}

// 저장된 todo리스트를 화면에 그리는 것 
function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.id = "x_btn";
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// todo 입력
function ToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",ToDoSubmit);

// 저장된 TODOSKEY를 가져오는것 
const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null)
{
    // 배열 형태로 저장하는것 
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

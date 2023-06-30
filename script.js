/*const input = document.getElementById("tarea");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}*/

/*------------------------------------*/

/*let idCounter = 0;
const input = document.querySelector('input[type="text"]');

tarea.addEventListener('submit', (event)=>{
    event.preventDefault();
    addTask();
});

let addTask = ()=>{
    idCounter++
    let newValue = input.value;

    list.innerHTML += `
    <div class="taskContainer" id="${idCounter}">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="./Images/eliminar.png" class="deleteBtn">
    </div>`

    input.value = '';
    updateStats();
}

list.addEventListener('click',(event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
    }else if(event.srcElement.nodeName == 'IMG'){
        borrar(event.srcElement.parentNode.id);
    }
})

let updateStats = () =>{
    let element = list.querySelectorAll('div');
    let check = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} completadas: ${check.length}</p>` 
}

let borrar = (id) =>{
    let taskDelete = document.getElementById(id);
    list.removeChild(taskDelete);
    updateStats();
}*/

/*-------------------------------------------*/
/*var homework = new function(){
  this.el = document.getElementById('tasks');

  this.tasks = [];
  
  this.FetchAll = function(){
    var data = '';
    if(this.tasks.length > 0){
      for(i = 0; i < this.tasks.length; i++){
        data += '<tr>';
        data += '<td>' +(i+1)+'. ' +this.tasks[i] + '</td>'
        data += '<td><button onclick= "homework.Edit('+ i + ')" class="btn btn-warning">Edit</button></td>';
        data += '<td><button onclick= "homework.Delete('+ i + ')" class="btn btn-danger">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.tasks.length);
    return this.el.innerHTML = data;
  };
  
  this.Add = function(){
    el = document.getElementById('addHomework')
    var task = el.value;
    if(task){
      this.tasks.push(task.trim());
      el.value = '';
      this.FetchAll();
    }
  };

  this.Edit = function(item){
    var el = document.getElementById('edit-task');
    el.value = this.tasks[item];
    document.getElementById('edit').style.display='block';
    self.this;

    document.getElementById('save-edit').onsubmit = function(){
      var task = el.value;
      if(task){
        self.tasks.splice(item, 1, task.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };

  this.Delete = function(item){

  };

  this.Count = function(data){

  };

}
homework.FetchAll();
function CloseInput(){
  document.getElementsById('edit').style.display = 'none';
};*/

/*------------------------------------ */
let select = null;

function onFormSubmit(e){
  event.preventDefault();
  let toDo = newData();
  if(select === null){
    add(toDo);
  }else{
    updateData(toDo)
  }
  reset();
}

function newData(){
  let toDo = {};
  toDo["activity"] = document.getElementById('activity').value;
  toDo["priority"] = document.getElementById('priority').value;
  return toDo;
}

function add(data){
  let table = document.getElementById("toDoList").getElementsByTagName('tbody')[0];
  let row = table.insertRow(table.length);
  let cell1 = row.insertCell(0);
  cell1.innerHTML = data.activity;
  let cell2 = row.insertCell(1);
  cell2.innerHTML = data.priority;
  let cell3 = row.insertCell(2);
  cell3.innerHTML = `<button onClick='edit(this)'>Editar</button><button onClick='deleteData(this)'>Eliminar</button>`;

}

function edit(td){
  select = td.parentElement.parentElement;
  document.getElementById('activity').value = select.cells[0].innerHTML;
  document.getElementById('priority').value = select.cells[1].innerHTML;
}

function updateData(toDo){
  select.cells[0].innerHTML = toDo.activity;
  select.cells[1].innerHTML = toDo.priority;
}

function deleteData(td){
  if(confirm('¿Quieres eliminar el registro?')){
    row =  td.parentElement.parentElement;
    document.getElementById('toDoList').deleteRow(row.rowIndex);
  }
  reset();
}

function reset(){
  document.getElementById('activity').value = '';
  document.getElementById('priority').value = '';
}

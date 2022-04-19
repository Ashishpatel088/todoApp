

let todoList = [];
// localstrorage to store data


let todostore = localStorage.getItem("todo");
if(todostore === null) {
    todoList = [];
} else {
    todoList = JSON.parse(todostore);

}

window.addEventListener("load",() => {
    todoList.map((item) => {
        createTodoItem(item);
    })
})
//function to call add value to array and textbox value

 function copyText(event) {
     event.preventDefault()
     let textdata = document.getElementById("todoTitle").value;
     /* if(isedit === true) {
         alert("edited task")
     } else {
         alert("add task");
     } */
     todoList.push(textdata);
     
     localStorage.setItem("todo",JSON.stringify(todoList));
     createTodoItem(textdata);
     console.log(textdata);
     
     
     document.getElementById("todoTitle").value = "";
  } 
 

function createTodoItem(value) {

    let todostore = localStorage.getItem("todo");
    console.log(todoList,value,"arrayindex");
    let todolistarr = document.getElementById("outputdiv");
    const node = document.createElement("li");
    const bgtdiv = document.createElement("div");
    const editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit";
    const deletbtn = document.createElement("button");
    deletbtn.innerHTML = "Delete";
    deletbtn.id = "delebtn";
    
    
    const todoTitle = document.createElement("span");
	let textdata = document.createTextNode(value);
    todoTitle.appendChild(textdata);
    node.append(todoTitle);
    node.append(bgtdiv);
    bgtdiv.append(editbtn);
    bgtdiv.append(deletbtn);
    
    deletbtn.addEventListener("click", function() {
        deleteTodo(value);
        node.parentNode.removeChild(node);
    });

    editbtn.addEventListener("click",function() {
       let newedit =  document.getElementById("todoTitle");
       newedit.value = value;
        //updateElement(value)
    });
    todolistarr.appendChild(node);

    node.classList.add("mylistyle");
    
} 
function deleteTodo(value) {
    
        const findind = todoList.findIndex((ind) => {
            ({ind, value}, ind === value);

            return ind === value;
        });
       console.log(findind,'mydelete');

        let deletele = todoList.splice(findind, 1);
        console.log(deletele,'mtnew delete');
        console.log(todoList);
   }
   function editTodo(value) {
      
   }


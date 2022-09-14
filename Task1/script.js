
var input = document.querySelector('.todo_input');
var MainTodoContainer = document.getElementById('todolist')
var addingButton = document.querySelector('.add-item');
var deleteAllBtn = document.querySelector('.deleteBtn');
var completedButton = document.querySelector('.completed');
var removeButton = document.querySelector('.trash');

addingButton.addEventListener('click', function(e){
   
    e.preventDefault();
    
    
    if(input.value.trim()){
        
        var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');
       
        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');
     
        var liTag = document.createElement('li');
        liTag.innerText = input.value;
        liTag.classList.add('todo-item');
       
        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');
       
        var completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
      
        var editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="far fa-edit"></i>';
        editBtn.classList.add('editBtn');
        editBtn.onclick = function(){
            editWorking(liTag);
        }
     
        var trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    
        
        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(trashButton);
    
       
        MainTodoContainer.appendChild(ulTag);

       
        input.value = '';
        
        todoList.addEventListener('click', function(e){
            var items = e.target;
            if(items.classList[0] === 'completed'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('line_through')
            }
            else if(items.classList[0] === 'trash'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('fall');
                todo2.addEventListener('transitionend', function(){
                    var todo3 = todo2.parentElement;
                    todo3.remove();
                });
            }
        });
    }else if(input.value === ''){
        alert('please fill the input field')
    }
});


function editWorking(e){
    var editValue = prompt('edit the select item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}
function deleteAllElements(){
    var gettingUlTag = document.querySelectorAll('.todo-list-container');
    for(var i = 0; i < gettingUlTag.length; i++){
        gettingUlTag[i].remove();
    }
    input.value = '';
}
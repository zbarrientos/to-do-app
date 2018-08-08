function onReady() {
 var toDos = [];
 const addToDoForm = document.getElementById('addToDoForm');
 let id = 0;

 function createNewToDo() {
   const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

   toDos.push({
         title: newToDoText.value,
         complete: false,
         id: ++id
       });

       newToDoText.value = '';

       renderTheUI();
  } /* end of createNewToDo function */

/* compare the todo.id with the id of each item in the list, and just remove item clicked */
  function deleteToDo(id) {
      return toDos.filter(toDo => toDo.id !== id);
    }


function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);


      /*create a delete button, append it to newLi, and register an event listener for it */
      /* create */
      let button = document.createElement('button');
      button.innerText = 'Delete';

      /* append to newLi */
        newLi.appendChild(button);

      /* register event listener for delete button */
      button.addEventListener('click', event => {
       toDos = deleteToDo(toDo.id);
       renderTheUI();
        });

         });
} /* end of renderTheUI function */

  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
});

renderTheUI();
} /* end of onReady function */

window.onload = function() {
  onReady();
}; /* end of window.onload function */

function onReady() {

let id = 0;


const toDos = [];
const addToDoForm = document.getElementById('addToDoForm');

function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id.value
    });

    ++id;
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        /*create delete button and attach to li */
        let button = document.createElement('button');
        button.innerText = 'Delete';

    /* add the new event listener for the delete button */
              button.addEventListener('click', event => {
                event.preventDefault();
                toDos = toDos.filter(function(item){
                return item.id !== toDos.id;
                })
              renderTheUI();
            });

        newLi.textContent = toDo.title;

/* attach elements to the li */
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(button);
      });

}

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

rendertheUI();
}

window.onload = function() {
onReady();
 };

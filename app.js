function onReady() {
      const addToDoForm = document.getElementById('addToDoForm');
     const newToDoText = document.getElementById('newToDoText');
     const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit', () => {
  event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    /*attach delete button to the li */
    let button = document.createElement('button');
    button.innerText = 'Delete';
    newLi.appendChild(button);

/* add the new event listener for the delete button */
          button.addEventListener('click', () => {
		      event.preventDefault();

          //delete the li from the ul
		       toDoList.removeChild(newLi);
         });


});
}

window.onload = function() {
onReady();
};

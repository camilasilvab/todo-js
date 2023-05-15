// Obtener referencias a los elementos de la interfaz de usuario
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('todoList');
const addTaskButton = document.getElementById('add-task-button');


const emojiLibrary = {
  correr: '🏃‍♂️', 
  caminar: '🚶‍♂️', 
  ejercicio: '🏋️',
  escribir: '✍️',
  desayunar: '🥞',
  leer: '📖',
  pasear: '🐕‍🦺',
  jugar: '🎮',
};

// Función para determinar el emoticón asociado a una tarea
function getEmojiForTask(taskText) {
  const keywords = Object.keys(emojiLibrary);

  for (let i = 0; i < keywords.length; i++) {
    const keyword = keywords[i];
    if (taskText.includes(keyword)) {
      return emojiLibrary[keyword];
    }
  }

  return '🐈‍⬛'; // Emoticono genérico para otras tareas
}

function addTodoCard(taskText, emoji) {
  const todoList = document.getElementById('todoList');

  const todoCardContainer = document.createElement('li');
  todoCardContainer.classList.add('todoCards-Container');

  const todoCard = document.createElement('div');
  todoCard.classList.add('todo-card');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.id = 'done';
  checkbox.classList.add('check-card', 'done');

  checkbox.addEventListener('click', (event) => {
    const todoCard = event.target.closest('.todo-card');
    if (todoCard) {
      todoCard.classList.toggle('completed');
    }
  });

  todoCard.appendChild(checkbox);

  const textsCard = document.createElement('div');
  textsCard.classList.add('texts-card');

  const emojiText = document.createElement('p');
  emojiText.classList.add('text-icon');
  emojiText.textContent = emoji;

  const taskTextElement = document.createElement('p');
  taskTextElement.classList.add('text-p');
  taskTextElement.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete_buttom');

  const deleteButtonImg = document.createElement('img');
  deleteButtonImg.setAttribute('src', '/src/img/dejar-de-seguir.png');
  deleteButtonImg.setAttribute('alt', '');

  deleteButton.appendChild(deleteButtonImg);

  textsCard.appendChild(emojiText);
  textsCard.appendChild(taskTextElement);

  todoCard.appendChild(checkbox);
  todoCard.appendChild(textsCard);
  todoCard.appendChild(deleteButton);

  const box = document.createElement('div');
  box.classList.add('box', 'box1');

  todoCardContainer.appendChild(todoCard);
  todoCardContainer.appendChild(box);

  todoList.appendChild(todoCardContainer);
}

// Función para agregar el evento de eliminación a los botones de eliminación
function setupDeleteButtons() {
  const deleteButtons = document.querySelectorAll('.delete_buttom');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const cardContainer = event.target.closest('.todoCards-Container');
      if (cardContainer) {
        cardContainer.remove();
      }
    });
  });
}

// Manejador de evento para agregar una tarea
addTaskButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
  const taskText = taskInput.value;
  if (taskText.trim() !== '') { // Verificar si el texto de la tarea no está vacío
    const emoji = getEmojiForTask(taskText);
    addTodoCard(taskText, emoji);
    taskInput.value = '';
    setupDeleteButtons(); // Agregar el evento de eliminación al botón de eliminar de la nueva tarjeta
  }

  checkbox.addEventListener('click', (event) => {
    const todoCard = event.target.closest('.todo-card');
    if (todoCard) {
      todoCard.classList.toggle('completed');
    }
  });
});

function setupCheckbox() {
  const checkboxes = document.querySelectorAll('.done');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (event) => {
      const todoCard = event.target.closest('.todo-card');
      if (todoCard) {
        todoCard.classList.toggle('completed');
      }
    });
  });
}

// Agregar el evento de cambio de color al checkbox
setupCheckbox();


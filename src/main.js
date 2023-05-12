const task = document.getElementById('task') 
const addTaskButtom = document.getElementById('addButton') 
const todoList = document.getElementById('todoList')
const doneTask = document.getElementById('done')

/* const emojiLibrary = {
  correr: '🏃‍♂️', 
  caminar: '🚶‍♂️', 
  ejercicio: '🏋️',
  escribir: '✍️',
  desayunar: '🥞',
  leer: '📖',
  pasear: '🐕‍🦺',
  jugar: '🎮',
}; */

// Escuchar el evento clic del boton para agregar la tarea

addTaskButtom.addEventListener ("click", addTask );


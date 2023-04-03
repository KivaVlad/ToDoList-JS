const todoList = document.querySelector('.todo_list');
const todoForm = document.querySelector('.todo_form');
const todoInput = document.querySelector('.todo_input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();

    // Получаем название задачи из input
    const taskText = todoInput.value;

    // Если не ввели значение, то новый li не будет создан
    if(todoInput.value === '') {
        return false;
    }

    // Создаем тег li
    const newTask = document.createElement('li');
    newTask.innerText = taskText;

    // Создаем кнопку удалить
    const buttonDel = document.createElement('button');
    buttonDel.setAttribute('role', 'button');
    buttonDel.innerText = 'х';
    buttonDel.style['float'] = 'right';
    buttonDel.style['background'] = 'transparent';
    buttonDel.style['border'] = 'none';
    buttonDel.style['color'] = '#b43938';
    buttonDel.style['font-size'] = '22px';
    newTask.append(buttonDel);

    buttonDel.addEventListener('click', deleteTask);


    // Добавляем элемент на страницу
    todoList.append(newTask);

    // Очищаем поле ввода
    todoInput.value = '';

    // Фокус на поле ввода
    todoInput.focus();
}

function deleteTask() {
    this.closest('li').remove();
}
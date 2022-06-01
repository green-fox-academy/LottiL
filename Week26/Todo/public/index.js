document.addEventListener('DOMContentLoaded', async () => {
    await getTodos();

    const addButton = document.querySelector('.add_btn');
    addButton.addEventListener('click', async () => {
        await addTodo();
    });

    const delete_btns = document.querySelectorAll(".delete_btn");
    delete_btns.forEach(btn => {
        btn.addEventListener('click', async () => {
            await deleteTodo(btn.getAttribute("value"));
        });
    })

    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(check => {
        check.addEventListener('change', async () => {
            await checkTodo(check.getAttribute("value"));
        });
    })
});

async function getTodos() {

    const response = await fetch(`/api/todos`, {
        method: 'GET',
    });

    if (!response.ok) {
        console.error(response.response.json());
        return;
    }
    const data = await response.json();

    const table = document.querySelector("#todos_table");
    table.textContent = "";

    data.forEach(todoItem => {
        const checked = todoItem.completed ? "checked" : "";
        table.innerHTML += `
        <tr>
            <td>${todoItem.text}</td>
            <td><button value = ${todoItem.id} id = "button${todoItem.id}" class="delete_btn"> <img src="/bin.png" width="40" height="40"></button></td>
            <td><input value = ${todoItem.id} id = "check${todoItem.id}" class="checkbox" type="checkbox" ${checked}></td>
        </tr>`
    });
}

async function addTodo() {
    const text = document.querySelector('.todo_input').value;
    const response = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        console.error(response.response.json());
        return;
    }
    document.querySelector('.todo_input').value = "";
    await getTodos();
};

async function deleteTodo(id) {
    const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        console.error(response.response.json());
        return;
    }
    await getTodos();
};

async function checkTodo(id) {
    const completed = document.querySelector(`#check${id}`).checked;
    const response = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ completed }),
        //ha lesz text, azt is vissza kell küldeni
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        console.error(response.response.json());
        return;
    }
    await getTodos();
}

//data set-en tárolni id helyett
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#attr-checked
//https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
//https://github.com/green-fox-academy/teaching-materials/tree/master/project/todo-fullstack
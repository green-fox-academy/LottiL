UPDATE todos SET is_done = true WHERE id = 3;

SELECT user_name, todo, todo_type FROM users
JOIN todos ON users.id = todos.user_id
JOIN todo_types ON todo_types.id = todos.todo_type_id
WHERE is_done = false;
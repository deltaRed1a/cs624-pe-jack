#Input

The application provides a structured user interface to manage a list of tasks or todos. At the core is the Input component, which allows users to type in their tasks. The state maintains inputValue to keep track of the current text entered in the input field. Alongside, the TabBar component lets users filter tasks by their completion status: 'All', 'Active', or 'Complete'.

#Process

Several operations are possible with the tasks:

    Add a Task: On pressing the Button, the submitTodo function checks if the input is not just whitespace. If valid, it creates a new todo object with a unique todoIndex, title from inputValue, and an initial status of 'incomplete'.
    Toggle Completion: The toggleComplete function updates the completion status of a specific task.
    Delete a Task: With deleteTodo, tasks can be removed from the list.
    Set Task Type Filter: The setType function updates the type in the state which is used to filter tasks displayed in TodoList.

#Output

The main component App renders the overall UI. The Heading provides a title, while Input and Button facilitate task input. TodoList dynamically displays tasks based on the chosen type, with each task presented via the Todo component. The TabBar at the bottom allows for task type selection. The application's design and layout are defined by the styles in StyleSheet, ensuring an aesthetically pleasing and user-friendly interface.

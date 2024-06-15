A simple and intuitive To-Do List application built with React.
![image](https://github.com/AbhishekSaurav45/week2/assets/135051103/3226a7aa-b134-483a-ab24-96af37f56922)


## Features

- Add, remove, and toggle task completion ![image](https://github.com/AbhishekSaurav45/week2/assets/135051103/51b507ee-384e-4501-b2b7-4db4b99eb6fd)

- Mark tasks as critical  ![image](https://github.com/AbhishekSaurav45/week2/assets/135051103/bddbc043-d814-4ee7-a975-ce89e2329155)

- Filter tasks (All, Completed, Pending, Critical) ![image](https://github.com/AbhishekSaurav45/week2/assets/135051103/29265300-2183-4492-a5db-e5df9d7aa86f)

- Sort tasks alphabetically (Ascending, Descending)  ![image](https://github.com/AbhishekSaurav45/week2/assets/135051103/b34de7de-426a-4fdd-8dd1-abaa663b1bd9)

- Persist tasks in local storage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AbhishekSaurav45/week2.git
   cd react-todo-list
### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Usage

- Enter a task name in the input field and optionally mark it as completed or critical.
- Click "Add Task" to add the task to the list.
- Use the "Remove" button to delete a task.
- Use the "Mark as Complete" button to toggle task completion.
- Use the "Mark as Critical" button to toggle task critical status.
- Use the filter buttons to display tasks based on their status.
- Use the sort buttons to sort tasks alphabetically.

## Testing

### Functionality Testing

1. **Add a Task**:
   - Enter a task name in the input field.
   - (Optional) Mark the task as completed by checking the "Completed" checkbox.
   - (Optional) Mark the task as critical by checking the "Critical" checkbox.
   - Click the "Add Task" button.
   - Verify the task appears in the list with the appropriate status and critical marking.

2. **Remove a Task**:
   - Click the "Remove" button next to any task in the list.
   - Verify that the task is removed from the list.

3. **Toggle Task Completion**:
   - For a pending task, click the "Mark as Complete" button.
   - Verify that the task's text is struck through, indicating completion.
   - Click the "Mark as Pending" button to revert it back to pending status.
   - Verify the task's text is no longer struck through.

4. **Toggle Task Critical Status**:
   - For a pending task, click the "Mark as Critical" button.
   - Verify that the task's background color changes, indicating critical status.
   - Click the "Unmark as Critical" button to revert it back to normal status.
   - Verify that the task's background color changes back.

5. **Filter Tasks**:
   - Click on the "All" button to view all tasks.
   - Click on the "Completed" button to view only completed tasks.
   - Click on the "Pending" button to view only pending tasks (excluding critical tasks).
   - Click on the "Critical" button to view only critical tasks.
   - Verify that the tasks are correctly filtered based on the selected criteria.

6. **Sort Tasks**:
   - Click on the "Sort Asc" button to sort tasks alphabetically in ascending order.
   - Verify that the tasks are sorted from A to Z.
   - Click on the "Sort Desc" button to sort tasks alphabetically in descending order.
   - Verify that the tasks are sorted from Z to A.

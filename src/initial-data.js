export const initialData = {
  tasks: {
    "task-1": { id: 'task-1', content: 'first', class: 'green-square' },
    "task-2": { id: 'task-2', content: 'second', class: 'dark-blue-rectangle' },
    "task-3": { id: 'task-3', content: 'third', class: 'red-triangle' },
    "task-4": { id: 'task-4', content: 'fourth', class: 'yellow-oval' },
    "task-5": { id: 'task-5', content: 'fifth', class: 'blue-circle' },
  },
  columns: {
    'column-0': {
      id: 'column-0',
      title: 'start',
      class: 'source-container',
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
    },
    'column-1': {
      id: 'column-1',
      title: 'first',
      class: 'green-square-container',
      taskIds: [],
    },
    'column-2': {
      id: 'column-2',
      title: 'second',
      class: 'dark-blue-rectangle-container',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'third',
      class: 'red-triangle-container',
      taskIds: [],
    },
    'column-4': {
      id: 'column-4',
      title: 'fourth',
      class: 'yellow-oval-container',
      taskIds: [],
    },
    'column-5': {
      id: 'column-5',
      title: 'fifth',
      class: 'blue-circle-container',
      taskIds: [],
    },
  },
  columnOrder: ['column-5', 'column-1', 'column-2', 'column-3', 'column-4', 'column-0']
};
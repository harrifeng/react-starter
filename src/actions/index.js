let _id = 1;

export function uniqueId() {
  return _id++;
}

export function createTask({title, description}) {
  return {
    type:'CREATE_TASK',
    payload: {
      id: uniqueId(),
      title,
      description,
      status: 'Unstarted',
    },
  };
}

import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasks/actions";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const text = form.elements["text"].value;

    dispatch(addTask(text));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <button type="submit">Add task</button>
    </form>
  );
};

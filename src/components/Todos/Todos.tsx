import classes from "./Todos.module.css";
import Todo from "../../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <li key={item.id}> {item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;

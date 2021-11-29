import { useState } from "react";
import Todo from "./models/todo";
import "./App.css";
import Todos from "./components/Todos/Todos";
import Header from "./components/Header/Header";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="App">
      <Header />
      <Todos items={todos} />
    </div>
  );
}

export default App;

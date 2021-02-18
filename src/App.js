import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h2>TodoForm</h2>
      <TodoForm/>
      <hr/>
      <h2>TodoList</h2>
      <TodoList/>
    </div>
  );
}

export default App;

function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])
const addTodo = text => {
  const newTodos = [...todos, {text: text, isCompleted: false}]
  setTodos(newTodos)
}

const removeToDo = e=> {
  const index = Number(e.target.id)
  let temp = [...todos]
  temp.splice(index, 1)
  setTodos(temp)
}
  return(
    <div className='mainContainer'>
    <h1>ToDo</h1>
      {todos.map((todo, i) => <div className='todo' key={i} id={i} onClick={removeToDo}>{todo.text}
      <div className='check'></div>
      </div>)}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

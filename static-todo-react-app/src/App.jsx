import './App.css'
import './components/ToDoList'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
      <h1>ToDo List assignment</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <ToDoList />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import './App.css'
import './components/ToDoList'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
      <div className="card">
        <Header />
      </div>
      <div>
        <ToDoList />
      </div>
    </>
  )
}

export default App

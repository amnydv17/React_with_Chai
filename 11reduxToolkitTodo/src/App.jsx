import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1
      className='text-2xl  text-bold bg-white p-2 rounded m-4'>Learn about Redux toolkit
      </h1>
      <AddTodo />
      <br/>
      <Todos />
    </>
  )
}

export default App


import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <h1 className='text-red-500'>Gerencidor de  Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  )
}
export default App

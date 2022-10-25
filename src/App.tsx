import { AddTask } from "./components/AddTask"
import { BackgroundImage } from "./components/backgroundImage"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Task } from "./components/task"

const tasks = [
  {
    task: "task 1",
    completed: false
  },
  {
    task: "task 2",
    completed: false
  },
  {
    task: "task 3",
    completed: false
  },
  {
    task: "task 4",
    completed: false
  },
  {
    task: "task 5",
    completed: false
  },
]

function App() {
  return (
    <div className="App">
      {/* <BackgroundImage /> */}


      <main>
        <Header />
        <AddTask />

        <section>
          {tasks.map(task => (
            <Task {...task} />
          ))}
        
          <Footer />
        </section>

      </main>
    </div>
  )
}

export default App

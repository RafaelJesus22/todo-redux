import { AddTask } from "./components/AddTask"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Tasks } from "./components/tasks"

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
      <main>
        <Header />
        <AddTask />

        <section>
          <Tasks />
        
          <Footer />
        </section>

      </main>
    </div>
  )
}

export default App

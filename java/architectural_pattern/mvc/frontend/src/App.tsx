import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Todos from "./app/pages/todo"
import EditTodo from "./app/pages/todo/edit"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Todos />} path="/" />
      <Route element={<EditTodo />} path="/edit/:id" />
    </Routes>
    </BrowserRouter>
  )
}

export default App

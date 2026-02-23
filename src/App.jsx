import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
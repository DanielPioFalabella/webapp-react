import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import FilmDetail from "./pages/FilmDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/movie/:id" element={<FilmDetail />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
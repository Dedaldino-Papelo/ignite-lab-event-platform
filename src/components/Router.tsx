import { BrowserRouter, Routes, Route } from "react-router-dom"
import Event from "../Pages/Event"
import Subscribe from "./Subscribe"

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Subscribe/>} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default Router

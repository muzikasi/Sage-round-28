import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About.";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import CoursesDetail from "./pages/CoursesDetail";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
export default function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="courses" element={<Courses />} />
                <Route path="courses/:name" element={<CoursesDetail/>} />
            </Route>
                <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
}
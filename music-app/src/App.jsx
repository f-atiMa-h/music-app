import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import MainLayout from "./Layouts/MainLayout";
import Albums from "./pages/Albums";
import Song from "./pages/Song";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/artist' element={<Artist />}/>
      <Route path='/albums' element={<Albums />}/>
      <Route path='/songs' element={<Song />}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Employees from './components/Employees/Employees';

function App() {
  const routes = createBrowserRouter([
      {
        path: "/",
        element: <Contact></Contact>,
      },
      {
        path: "/employees",
        element: <Employees></Employees>
      }
  ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

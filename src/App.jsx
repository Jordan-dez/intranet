import Login from './views/Login/Login'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import { useSelector } from "react-redux"

import Collaborators from './views/Collaborators/Collaborators';
import RandomCollaborator from './views/RandomCollaborator/RandomCollaborator';
import AddEditCollaborator from './views/AddCollaborator/AddCollaborator';
import EditCollaborator from './views/EditCollaborator/EditCollaborator';
import { setAccesTokenStorage } from './services/userService/localStorage';
import AddCollaborator from './views/AddCollaborator/AddCollaborator';

const ProtectedRoute = ({ children }) => {
  const userToken = useSelector(state => state.auth.user?.token);
  if (!userToken) {
    // console.log(token);
    return <Navigate to="/" replace={true} />;
  }
  return children ? children : <Outlet />;
}

const ProtectedRouteAdmin = ({ children }) => {
  const isAdmin = useSelector(state => state.auth.user?.user.isAdmin);
  console.log("isAdmin: ", isAdmin);
  if (!isAdmin) {
    return <Navigate to="/direbonjour" replace={true} />;
  }
  return children ? children : <Outlet />;
};



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/collaborateurs" element={<Collaborators />} />
          <Route path="/direbonjour" element={<RandomCollaborator />} />
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/modifiercollaborateur/:id" element={<EditCollaborator />} />
          <Route path="/ajoutercollaborateur" element={<AddCollaborator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

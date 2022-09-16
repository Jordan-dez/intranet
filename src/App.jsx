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
import NotFoundPage from './views/NotFoundPage/NotFoundPage';
import EditProfil from './views/EditProfil/EditProfil';


const ProtectedRoute = ({ children }) => {
  const userToken = useSelector(state => state.auth.user?.token);
  if (!userToken) {
    return <Navigate to="/" replace={true} />;
  }
  return children ? children : <Outlet />;
}

const ProtectedRouteAdmin = ({ children }) => {
  const isAdmin = useSelector(state => state.auth.user?.user.isAdmin);
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
          <Route path="/modifierprofil/:id" element={<EditProfil />} />
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/modifiercollaborateur/:id" element={<EditCollaborator />} />
          <Route path="/ajoutercollaborateur" element={<AddCollaborator />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

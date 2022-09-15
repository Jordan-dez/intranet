import Login from './views/Login/Login'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import {useSelector} from "react-redux"

import Collaborators from './views/Collaborators/Collaborators';
import RandomCollaborator from './views/RandomCollaborator/RandomCollaborator';
import AddEditCollaborator from './views/AddEditCollaborator/AddEditCollaborator';

const ProtectedRoute = ({children}) => {
  const userToken = useSelector(state => state.auth.user?.token);
  console.log(userToken);
  if (!userToken) {
    return <Navigate to="/" replace={true} />;
  }
  return children ? children : <Outlet />;
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route element={<ProtectedRoute />}>
          <Route path="/collaborateurs" element={<Collaborators/>}  />
          <Route path="/direbonjour" element={<RandomCollaborator/>} />
          <Route path="/ajoutercollaborateur" element={<AddEditCollaborator/>} />
          <Route path="/modifiercollaborateur/:id" element={<AddEditCollaborator/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

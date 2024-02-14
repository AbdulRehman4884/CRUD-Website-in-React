import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './Components/User';
import CreateUser from './Components/CreateUser';
import UpdateUser from './Components/UpdateUser';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User></User>}></Route>
          <Route path="/create" element={<CreateUser></CreateUser>}></Route>
          <Route path="/edit/:id" element={<UpdateUser></UpdateUser>}></Route>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;

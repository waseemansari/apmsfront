
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/auth/Login";
import CreateDiary from "./pages/diary/CreateDiary";
import DiaryList from "./pages/diary/DiaryList";
import ManagerList from "./pages/usermanagement/ManagerList";
import Profile from "./pages/auth/Profile";
import { Routes, Route ,Navigate} from "react-router-dom";
import PasswordUpdate from "./pages/auth/PasswordUpdate";
function App() {
  return (
    <div className="App">
        
          { 
          <Routes>
            <Route>
              <Route path="/" element={<Navigate to="/login" replace/>} />
              <Route path="dashboard" element={<Home />} />
              <Route path="add-diary" element={<CreateDiary />} />
              <Route path="/login" element={<Login />} />
              <Route path="/diary-list" element={<DiaryList />} />
              <Route path="/manager-list" element={<ManagerList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/password-update" element={<PasswordUpdate />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes> 
          }
    </div>
  );
}

export default App;


import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/auth/Login";
import BookingList from "./pages/booking/List";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
function App() {
  return (
    <div className="App">
        
          <Routes>
            <Route>
              <Route path="/" element={<Navigate to="/login" replace/>} />
              <Route path="dashboard" element={<Home />} />
              
              <Route path="booking-list" element={<BookingList />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        
     
    </div>
  );
}

export default App;


import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Login from "../pages/auth/Login";
import BookingList from "../pages/booking/List";
export default function routes() {
  <Routes>
    <Route>
      <Route path="/" element={<Navigate to="/login" replace/>} />
      <Route path="dashboard" element={<Home />} />
      <Route path="booking-list" element={<BookingList />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoPage />} />
    </Route>
</Routes>
}

          

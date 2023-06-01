import Navbar from './Navbar';
import { Link ,useNavigate} from "react-router-dom";
import { useLogoutMutation } from "../Services/api";
import PATHS from "../routes/paths";
import {toast } from 'react-toastify';

export default function Header() {
    
    const navigator = useNavigate();
    const [logout] = useLogoutMutation();
    const logoutUser = (values) => {
        // localStorage.removeItem('token-info');
        // setIsLoggedin(false);
        logout({ data: values })
        .unwrap()
        .then((payload) => {
            
          if (payload.status) {
            navigator(PATHS.signout);
            toast.success(payload.message)
          } else {
           
            console.log(payload.message);
          }
        })
        .catch((error) => {
          console.log(error);
        
        });
      
    };
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <span className="d-none d-lg-block">CRM</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>
                
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                       

                        <li className="nav-item dropdown pe-3">

                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" /> */}
                                <span className="d-none d-md-block dropdown-toggle ps-2">nikki</span>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>nikki</h6>
                                    <span>admin</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link to="/profile" className="dropdown-item d-flex align-items-center">
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link to="/password-update" className="dropdown-item d-flex align-items-center">
                                        <i className="bi bi-person"></i>
                                        <span>Update Password</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link  onClickCapture={logoutUser} className="dropdown-item d-flex align-items-center">
                                    <i className="bi bi-box-arrow-right"></i>
                                            <span>Sign Out</span>
                                    </Link>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </nav>
            </header>
            <Navbar />
        </>
        );
    }
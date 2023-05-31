
import { Link, NavLink } from "react-router-dom";
import PATHS from "../routes/paths";
export default function Navbar() {
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link collapsed">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-journal-text"></i><span>Master diary</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/diary-list">
                                    <i className="bi bi-circle"></i><span>diary List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-diary">
                                    <i className="bi bi-circle"></i><span>Add diary</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                   
                    

                </ul>

            </aside>
        </>
    );
}

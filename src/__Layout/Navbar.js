
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
                            <i className="bi bi-journal-text"></i><span>Booking</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/booking-list">
                                    <i className="bi bi-circle"></i><span>Booking Price</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to={PATHS.branches}
                            className="nav-link d-flex align-items-center"
                            data-toggle="tab"
                        ><i className="bi bi-grid"></i>
                            <span>Branches</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <Link to="/voucher-settings" className="nav-link collapsed">
                            <i className="bi bi-grid"></i>
                            <span>Voucher Settings</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/vehicle-categories" className="nav-link collapsed">
                            <i className="bi bi-grid"></i>
                            <span>Vehicle category</span>
                        </Link>
                    </li>

                </ul>

            </aside>
        </>
    );
}

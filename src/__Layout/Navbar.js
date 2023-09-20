
import { Link} from "react-router-dom";
export default function Navbar() {
    const admin_id = sessionStorage.getItem("admin_id");
   
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
                        <Link className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-journal-text"></i><span>Master Diary</span><i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/diary-list">
                                    <i className="bi bi-circle"></i><span>Diary List</span>
                                </Link>
                            </li>
                            {admin_id =='1' ? 
                           
                            <li>
                                <Link to="/add-diary">
                                    <i className="bi bi-circle"></i><span>Add Diary</span>
                                </Link>
                            </li>
                            :""
                            }
                        </ul>
                    </li>
                   
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#manager-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-journal-text"></i><span>User Management</span><i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="manager-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/manager-list">
                                    <i className="bi bi-circle"></i><span>Trainers List</span>
                                </Link>
                            </li>
                
                        </ul>
                    </li>
                </ul>

            </aside>
        </>
    );
}

import Header from '../__Layout/Header';
import notFound from "../assets/img/not-found.svg"; 
import { Outlet, Link } from "react-router-dom";
export default function NoPage() {
    return (
        <div className="NoPage">
            
            <Header />
            <main>
                <div className="container">
                    <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>404</h1>
                        <h2>The page you are looking for doesn't exist.</h2>
                        <Link className="btn" to="/">Back to home</Link>
                        <img src={notFound} className="img-fluid py-5" alt="Page Not Found" />
                        <div className="credits">
                        
                   
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
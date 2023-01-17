import Header from '../__Layout/Header';
import { useSelector, useDispatch } from "react-redux";

export default function Home() {

  const dispatch = useDispatch();

    return (
        <div className="Home">
            
            <Header />
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Sample Page</h5>

                                    <table className="table">
                                        <thead>
                                            <tr>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
           
        </div>
    );
}
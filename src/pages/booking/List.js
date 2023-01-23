import Header from '../../__Layout/Header';

export default function List() {


    return (
        <div className="Home">
            
            <Header />
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Booking Price setting </h5>
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <form action="{{url('')}}" method="POST">
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Position</th>
                                                <th scope="col">Age</th>
                                                <th scope="col">Start Date</th>
                                                </form>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Brandon Jacob</td>
                                                <td>Designer</td>
                                                <td>28</td>
                                                <td>2016-05-25</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Bridie Kessler</td>
                                                <td>Developer</td>
                                                <td>35</td>
                                                <td>2014-12-05</td>
                                            </tr>
                                            
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
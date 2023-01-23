import Header from '../__Layout/Header';
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState, useCallback, Fragment } from 'react';
import {  useGetBranchesQuery } from "../Services/api";
export default function Home() {
    const [pageUrl, setPageUrl] = useState("");
    const [search, setSearchQuery] = useState("");
    const {
        data: branches,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        error: getError,
        
      } = useGetBranchesQuery({ pageUrl, params: { search } });
      
  const dispatch = useDispatch();
  let branchesContent
    return (
        <div className="Home">
            
            <Header />
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Branches</h5>
                                    <table className="table">
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Duration Start</th>
                                                <th>Duration End</th>
                                                <th>Capacity</th>
                                                <th>City</th>
                                                <th>Currency</th>
                                                <th>Tax</th>
                                                <th>Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            
                                            {
                                               
                                                branchesContent = branches?.data?.data?.map((item) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <th scope="row">{item.id}</th>
                                                        <td>{item.branch_name}</td>
                                                        <td>{item.duration_start}</td>
                                                        <td>{item.duration_end}</td>
                                                        <td>{item.capacity}</td>
                                                        <td>{item.city}</td>
                                                        <td>{item.currency}</td>
                                                        <td>{item.tax}</td>
                                                        <td>{item.status ?'active': 'inactive'}</td>
                                                    </tr>                                            
                                                    )
                                                })
                                            } 
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
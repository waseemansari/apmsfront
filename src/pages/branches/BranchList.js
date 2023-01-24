import Header from '../../__Layout/Header';
import Moment from 'moment';
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState, useCallback, Fragment } from 'react';
import {  useGetBranchesQuery } from "../../Services/api";
export default function BranchList() {
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
        <div className="BranchList">
            
            <Header />
            
            <main id="main" className="main">
                
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Branches</h5>
                    <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                        <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-home" type="button" role="tab" aria-controls="home" aria-selected="true">Branch List</button>
                        </li>
                        <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Create Branch</button>
                        </li>
                        
                    </ul>
                    <div className="tab-content pt-2" id="borderedTabJustifiedContent">
                        <div className="tab-pane fade show active" id="bordered-justified-home" role="tabpanel" aria-labelledby="home-tab">
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
                                                                    <td>{Moment(item.duration_start).format('MM-DD-YYYY')}</td>
                                                                    <td>{Moment(item.duration_endt).format('MM-DD-YYYY')}</td>
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
                            </section>                </div>
                        <div className="tab-pane fade" id="bordered-justified-profile" role="tabpanel" aria-labelledby="profile-tab">
                                cccccccc
                        </div>
                    
                    </div>
                </div>
            </div>
            </main>
           
        </div>
    );
}
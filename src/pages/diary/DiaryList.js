import Header from '../../__Layout/Header';
import Moment from 'moment';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState, useCallback, Fragment } from 'react';
import {  useGetdiarylistQuery } from "../../Services/api";
export default function DiaryList() {
    const [pageUrl, setPageUrl] = useState("");
    const [search, setSearchQuery] = useState("");
    
    const {
        data: diaryList,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        error: getError,
        
      } = useGetdiarylistQuery({ pageUrl, params: { search } });
     
        const w = diaryList?.chart;
      
       const events= w; ////
    const dispatch = useDispatch();
    return (
        <div className="vehicleCategories">
            
            <Header />
            
            <main id="main" className="main">
                
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Master diary</h5>
                    <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                       <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-home" type="button" role="tab" aria-controls="home" aria-selected="true">Master diary calendar</button>
                        </li>
                        <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Master diary List</button>
                        </li>
                    </ul>
                    <div className="tab-content pt-2" id="borderedTabJustifiedContent">
                        <div className="tab-pane fade show active" id="bordered-justified-home" role="tabpanel" aria-labelledby="home-tab">
                       
                         
                        
                        <FullCalendar
                            plugins={[ dayGridPlugin ]}
                            initialView="dayGridMonth"
 
                            events={events}
                                   
                            
                            
                            />  
                                
                        </div>
                      
                        <div className="tab-pane fade" id="bordered-justified-profile" role="tabpanel" aria-labelledby="profile-tab">
                        <section className="section">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Master diary</h5>
                                                <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th className='text-capitalize'>Date</th>
                                                            <th className='text-capitalize'>Manager Name</th>
                                                            <th className='text-capitalize'>Detail</th>
                                                            <th className='text-capitalize'>action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                    
                                                        diaryList?.data?.map((item) => {
                                                            return (
                                                                <tr key={item.id}>
                                                                    <th scope="row">{item.id}</th>
                                                                    <td>{item.date}</td>
                                                                    <td>{item.manager}</td>
                                                                    <td>{item.detail}</td>
                                                                    <td>
                                                                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">

                                                                        <div className="btn-group" role="group">
                                                                            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            Action
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                                         
                                                                            <a className="dropdown-item" href="#">
                                                                                <div className="icon">
                                                                                <i className="bi bi-trash"></i>

                                                                                </div>
                                                                            </a>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                    </td>
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
                        </div>
                    </div>
                </div>
            </div>
            </main>
           
        </div>
    );
}

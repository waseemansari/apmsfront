import Header from '../../__Layout/Header';
import Moment from 'moment';
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState, useCallback, Fragment } from 'react';
import {  useGetPromoQuery } from "../../Services/api";
export default function VoucherSettingsList() {
    const [pageUrl, setPageUrl] = useState("");
    const [search, setSearchQuery] = useState("");
    const {
        data: PromoSettings,
        isLoading: isGetLoading,
        isSuccess: isGetSuccess,
        isError: isGetError,
        error: getError,
        
      } = useGetPromoQuery({ pageUrl, params: { search } });
      
  const dispatch = useDispatch();
  let branchesContent
    return (
        <div className="VoucherSettingsList.js">
            
            <Header />
            
            <main id="main" className="main">
                
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Voucher Settings</h5>
                    <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                        <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-home" type="button" role="tab" aria-controls="home" aria-selected="true">Voucher Settings List</button>
                        </li>
                        <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Create Voucher Settings</button>
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
                                                            <th className='text-capitalize'>promo type</th>
                                                            <th className='text-capitalize'>effect type</th>
                                                            <th className='text-capitalize'>price</th>
                                                            <th className='text-capitalize'>status</th>
                                                            <th className='text-capitalize'>action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                        
                                                            branchesContent = PromoSettings?.data?.data?.map((item) => {
                                                            return (
                                                                <tr key={item.id}>
                                                                    <th scope="row">{item.id}</th>
                                                                    <td>{item.promo_type}</td>
                                                                    <td>{item.effect_type}</td>
                                                                    <td>{item.price}</td>
                                                                    <td>{item.status}</td>

                                                                    <td>
                                                                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">

                                                                        <div className="btn-group" role="group">
                                                                            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            Action
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                                            
                                                                            <a className="dropdown-item" href="#">
                                                                                <div className="icon">
                                                                                    <i className="bi bi-eye"></i>
                                                                                </div>
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                <div className="icon">
                                                                                <i className="bi bi-brush"></i>
                                                                                </div>
                                                                            </a>
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
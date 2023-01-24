import Header from '../__Layout/Header';
import Moment from 'moment';
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
                                   dsfgds                         

                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
            </main>
           
        </div>
    );
}
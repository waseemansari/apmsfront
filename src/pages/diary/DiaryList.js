import Header from '../../__Layout/Header';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { toast } from 'react-toastify';
import Loader from '../../utils/Loader';
import React , {useState} from "react";
import UpdateDiary from "./UpdateDiary.js";
import WarningAlert from '../../utils/WarningAlert';
import Background from "../../assets/img/background.jpg";
import {  useGetdiarylistQuery,useDeletediaryMutation } from "../../Services/api";
export default function DiaryList() {
    // const [pageUrl, setPageUrl] = useState("");
    // const [search, setSearchQuery] = useState("");
    const pageUrl = "";
    const search = "";
    const {
        data: diaryList,
        isLoading: isGetLoading,
        // isSuccess: isGetSuccess,
        // isError: isGetError,
        // error: getError,
        
      } = useGetdiarylistQuery({ pageUrl, params: { search } });
     const w = diaryList?.chart;
       const events= w; ///
      const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.event.title)
      }
      ////////
      const notify = () => '';
      const [deletediary] = useDeletediaryMutation();
      const handleDelete = async (index,e) => {
        const values={id:index}
       var confirm = await WarningAlert();
        if(confirm===true){
             deletediary({ data: values })
             .unwrap()
             .then((payload) => {
                 if (payload.status) {
                     toast.success(payload.message)
                 } else {
                     toast.error(payload.message)
                 }
             })
             .catch((error) => {
                 toast.error(error.data.message)
             });
             notify();
        }   
    }
    const [diaryId,setDiaryId] = useState("");
    const admin_id = sessionStorage.getItem("admin_id");

    if(isGetLoading) return  <Loader></Loader>
    return (
        <div className="vehicleCategories">
            <Header />
            <main id="main" className="main">   
            <div className="card"
                style={{
                  backgroundImage: `url(${Background})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100%'
                }}
                >
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
                            plugins={[ dayGridPlugin,interactionPlugin ]}
                            initialView="dayGridMonth"
                            events={events}
                            eventClick={handleDateClick}
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
                                                            <th className='text-capitalize'>Trainers Name</th>
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
                                                                    {admin_id ==1 ? 
                        
                                                                    <td>
                                                                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">

                                                                        <div className="btn-group" role="group">
                                                                            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            Action
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                                                <button className="dropdown-item"  data-bs-toggle="modal" onClick={()=>setDiaryId(item.id)} data-id={item.id} data-bs-target="#fullscreenModal" >
                                                                                    <div className="icon text-info">
                                                                                    <i className="bi bi-pencil-square"></i>
                                                                                        Update
                                                                                    </div>
                                                                                </button>
                        
                                                                                <button className="dropdown-item"
                                                                                onClick={e => handleDelete(item.id,e)}>
                                                                                    <div className="icon text-danger">
                                                                                    <i className="bi bi-trash"></i>
                                                                                        Delete
                                                                                    </div>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                    </td>
                                                                 :
                                                                  <td>-</td>
                                                                 }
                                                                </tr>                                            
                                                                )
                                                            })
                                                        } 
                                                        </tbody>
                                                    </table>   
                                                                       
                                                    <UpdateDiary id={diaryId}></UpdateDiary>
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

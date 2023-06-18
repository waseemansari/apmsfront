import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAdddiaryMutation } from "../../Services/api";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../__Layout/Header";

import {  useGetManagerListQuery } from "../../Services/api";

export default function Creatediary() {
  const { 
    data: ManagerList        
  } = useGetManagerListQuery();
  const validationSchema = Yup.object().shape({
    date: Yup.string().required("Date fields is required"),
    user_id: Yup.string().required("Trainers fields is required"),
    detail: Yup.string().required("Detail fields is required"),
  });
  let defaultValues = { date: ""};

  const notify = () => '';
  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
    defaultValues,
  });
  const [adddiary] = useAdddiaryMutation();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (values,e) => {
    adddiary({ data: values })
      .unwrap()
      .then((payload) => {
        if (payload.status) {
          e.target.reset()
          toast.success(payload.message)
          //navigator(PATHS.diaryList);
         
        } else {
           toast.error(payload.message)

        }
      })
      .catch((error) => {

         toast.error(error.data.message)
      });
      
      notify();
  };
  return (
    <>
    <Header></Header>
    <main id="main" className="main">
      <section className="section">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add diary</h5>
              <form onSubmit={handleSubmit(onSubmit)} >
                <div className="row mb-3">
                  <label htmlFor="inputText" className="col-sm-2 col-form-label">Date</label>
                  <div className="col-sm-10">
                    <input type="date" {...register("date")} className="form-control" />
                    <span className="text-danger">{errors.date?.message}</span>

                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Select Manager</label>
                  <div className="col-sm-10">
                    <select  {...register("user_id")} className="form-control" >
                    {
                                                    
                      ManagerList?.data?.map((item) => {
                          return (
                            <option key={item.admin_id} value={item.admin_id}>{item.name}</option>                                           
                              )
                          })
                      }
                         </select>
                  </div>
                </div>               
                <div className="row mb-3">
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Detail</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" {...register("detail")} style={{height: "100px"}}></textarea>
                    <span className="text-danger">{errors.detail?.message}</span>

                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label"></label>
                  <div className="col-sm-10">
                     <button type="submit" className="btn btn-warning w-100" >Add diary</button>

                  </div>
                </div>

              </form>

            </div>
          </div>
      </section>
    </main>
    </>
  );
}
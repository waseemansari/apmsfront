import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import React , {useEffect} from "react";  /////
import { yupResolver } from "@hookform/resolvers/yup";
import {  useGetManagerListQuery,useUpdateDiaryMutation,useSingleDiaryQuery } from "../../Services/api";
export default function UpdateManagerPage(props) {
    
    const notify = () => '';
     const validationSchema = Yup.object().shape({
        date: Yup.string().required("Date fields is required"),
        user_id: Yup.string().required("Trainers fields is required"),
        detail: Yup.string().required("Detail fields is required"),
      });
      const { 
        data: ManagerList        
      } = useGetManagerListQuery();
      const [UpdateDiary] = useUpdateDiaryMutation();
      const {
        data: SingleDiary
      } =  useSingleDiaryQuery({  params:props['id']});
     
      const singleDiaryData= SingleDiary?.data[0];
      var  defaultValues={
        date:singleDiaryData?.date,
        detail:singleDiaryData?.detail,
        user_id:singleDiaryData?.user_id,
      };
    const methods = useForm({
      mode: "onTouched",
      resolver: yupResolver(validationSchema),
      defaultValues: defaultValues, 
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = methods;
       // eslint-disable-next-line react-hooks/exhaustive-deps 
      useEffect(() => {
        reset(defaultValues)
      },[singleDiaryData])
      
    const updateManagerList = (values,e) => {
        UpdateDiary({ data: values,param:props['id'] })
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
    };
    return (
        
        <div className="modal fade" id="fullscreenModal">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Dairy</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <section className="section">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Update Dairy</h5>
                            <form onSubmit={handleSubmit(updateManagerList)} >
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
                                    <button type="submit" className="btn btn-warning w-100" >Update Dairy</button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
          </div>
        </div>
      </div>
    );
}
import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useUpdateProfileMutation} from "../../Services/api";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../__Layout/Header";

export default function Profile() {
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name fields is required"),
  });

  let defaultValues = { name: ""};
  const notify = () => '';
  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
    defaultValues,
  });
  
  const [UpdateProfile] = useUpdateProfileMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  
  const onSubmitProfile = (values) => {
    UpdateProfile({ data: values })
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
      let one =1;
      if (one== 1) {
        notify();
      }
  };
  return (
    <>
    <Header></Header>
    <main id="main" className="main">
      <section className="section">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Update Profile</h5>
              <form onSubmit={handleSubmit(onSubmitProfile)}>
                <div className="row mb-3">
                  <label htmlFor="inputText" className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                    <input type="name" {...register("name")} className="form-control" />
                    <span className="text-danger">{errors.name?.message}</span>

                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputText" className="col-sm-2 col-form-label">Phone Number</label>
                  <div className="col-sm-10">
                    <input type="number" {...register("phone_number")} className="form-control" />
                    <span className="text-danger">{errors.phone_number?.message}</span>

                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputText" className="col-sm-2 col-form-label">Destination</label>
                  <div className="col-sm-10">
                    <input type="text" {...register("designation")} className="form-control" />
                    <span className="text-danger">{errors.destination?.message}</span>

                  </div>
                </div>           
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label"></label>
                  <div className="col-sm-10">
                     <button type="submit" className="btn btn-warning w-100" >Update Profile</button>

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
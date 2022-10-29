import { Input } from "antd";
import React, { useState, useEffect } from "react";
import Style from "../Edit_Area/Edit_area.module.css";
import { message } from "antd";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import Service from "../../../Services";

const Add_areas = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [SingleUser, setSingleUser] = useState();
  const [update, setUpdate] = useState({ area_name: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      area_name: "",
      // email:"",
      // Phone:"",
      // FavPlayer:""
    },
  });
  const FetchSingleData = () => {
    Service.get(`area/${id}`).then((Singlearea) => {
      setSingleUser(Singlearea.records);
    });
  };
  useEffect(() => {
    FetchSingleData();
  }, []);
  return (
    <>
      <div className={Style.Main}>
        <div data-aos="fade-bottom" className={Style.Form}>
          {/* <span icon={<CloseOutlined style={{ color: "#3e79f7" }} />}
></span> */}
          <div className={Style.close}>
            <CloseOutlined onClick={(e) => navigate("/dashoard/All_Areas")} />
          </div>
          <h1>Edit Area</h1>
          <form
            onSubmit={handleSubmit((data) =>
              Service.put(`update/area/${id}`, {
                area_name: update.area_name,
              }).then((res) => {
                message.success({ content: "area updated!", duration: 2 });

                navigate("/dashoard/All_Areas");
              })
            )}
          >
            <div className={Style.textField}>
              <input
                type="text"
                onChange={(e) => setUpdate({ area_name: e.target.value })}
                //   value={SingleUser?.area_name}
                //   defaultValue={SingleUser.area_name}
                name="area_name"
                //    {...register("area_name",{required:'this is required'})}
                defaultValue={SingleUser?.area_name}
                placeholder="area_name"
              />
              <p>{errors.area_name?.message}</p>
            </div>

            <input value={"Update"} type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Add_areas;

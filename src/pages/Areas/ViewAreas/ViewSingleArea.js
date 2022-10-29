import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import Style from "../ViewAreas/ViewSingleArea.module.css";
import Service from "../../../Services";
const View = () => {
  const [SingleUser, setSingleUser] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("user", id);

  const FetchSingleData = () => {
    Service.get(`area/${id}`).then((Singlearea) => {
      console.log("Singlearea", Singlearea);
      setSingleUser(Singlearea.records.area_name);
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
          <h1>View Area</h1>
          <form>
            <div className={Style.textField}>
              <input value={SingleUser} />
            </div>

            {/* <input value={"Create"} type="submit"/> */}
          </form>
        </div>
      </div>
    </>
  );
};
export default View;

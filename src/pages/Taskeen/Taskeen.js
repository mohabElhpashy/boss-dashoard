import React, { useState, useEffect } from "react";
import Service from "../../Services";
import { Button, Card, Select, message } from "antd";
import { useNavigate } from "react-router-dom";

import Style from "../Taskeen/Taskeen.module.css";
const { Option } = Select;

const Taskeen = () => {
  const navigate = useNavigate();

  const [currentList, setCurrentList] = useState([]);
  const [currentList_eng, setCurrentList_eng] = useState([]);

  const [postObject, setPostObject] = useState({
    name: "",
    engineer_id: "",
  });

  const Add = (area_id) => {
    let assigns = [{ engineer_id: postObject.engineer_id, area_id: area_id }];
    Service.post("assign/engineer", { assigns: assigns }).then((res) => {
      message.success({ content: "Done!", duration: 2 });
      setPostObject({});
      // navigate('/dashoard/Taskken')
      window.location.assign("/dashoard/Taskken");
    });
  };

  const Fetchdata = () => {
    Service.get("areas").then((res) => setCurrentList(res.records));
  };
  const Fetchdata_eng = () => {
    Service.get("engineers").then((res) =>
      setCurrentList_eng(res.records.data)
    );
  };
  useEffect(() => {
    Fetchdata();
    Fetchdata_eng();
  }, []);
  return (
    <>
      <h1>housing</h1>
      <div className={Style.mainDiv}>
        {currentList.map((area, index) => (
          <div className={Style.Inner_div} key={index}>
            <Card
              className={Style.Card}
              key={index}
              title={`${area.area_name}`}
            >
              <div className={Style.DivEg}>
                {area.assign_areas.map((ele, index) => (
                  <span className={Style.engeeer}>{ele.engineer.name}</span>
                ))}
              </div>

              <Select
                showSearch
                placeholder="Select a Eng "
                style={{ width: "100%" }}
                optionFilterProp="children"
                onChange={(e) =>
                  setPostObject({ ...postObject, engineer_id: e })
                }
                //   value={postObject.engineer_id}
              >
                {currentList_eng?.map((element, index) => (
                  <Option key={index} value={element.id}>
                    {element?.name}
                  </Option>
                ))}
              </Select>
            </Card>
            <Button type="primary" onClick={() => Add(area.id)}>
              Add
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Taskeen;

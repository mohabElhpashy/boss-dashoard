import {
    Button,
    Popconfirm,
    Table,
    message
   
  } from "antd";
  import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
    QuestionCircleOutlined,
    BellOutlined,
  } from "@ant-design/icons";
  import 'antd/dist/antd.css';
import service from "../../Services";

    export default function CustomeTable({
        pageTitle,coloumRender,
        addEndPoint,
        endPoint,
        noAddOption,
        setRerender,
        noViewAction,
        Viewsingle,
        Editsingle,
        noAction,noDeleteAction,dataRender,noEditAction}){
          const handelDelete = async (serviceName, url_endPoint) => {
            const key = "test";
            let ReRender=false
            message.loading({ content: "Loading...", key, duration: 15 });
               try {
                await service.delete(`${serviceName}${url_endPoint}`);
                // refetch();
                setRerender(!ReRender)
                message.success({ content: "User Deleted!", key, duration: 2 });
              } catch (error) {
                 message.error({ content: "Error Occured!", key, duration: 2 });
              }
           };  
        const columns = [
            noAction
              ? {}
              : {
                  title: `${"Actions"}`,
                  key: "action",
                  align: "center",
                  width: 220,
                  render: (text, record) => {
                    // console.log("RECORD",record)
                    return (
                      <div style={{ display: "flex", justifyContent: "space-around" }}>
                        {/* <Link
                      to={{
                        pathname: `/app/apps/${editEndPoint}?name=view`,
                        
                        state: { record: { ...record, view: true } },
                      }}
                    > */}
                          {/* Single product start*/}
        
                        <a
                          href={`/dashoard/${Viewsingle}/${record.id}`}
                        >
                          {noViewAction ? null : (
                            <Button
                              type="default"
                            //   disabled={selectedItems.length > 1}
                              style={{
                                borderColor: "gray",
                                backgroundColor: "transparent",
                              }}
                              icon={<EyeOutlined />}
                            ></Button>
                          )}
                        </a>
                             {/* Single product End*/}
        
                        {noEditAction ? null : (
                          <a
                           href={`/dashoard/${Editsingle}/${record.id}`}
                            
                          >
                            <Button
                            //   disabled={selectedItems.length > 1}
                              type="primary"
                              style={{
                                borderColor: "#3e79f7",
                                backgroundColor: "transparent",
                              }}
                              icon={<EditOutlined style={{ color: "#3e79f7" }} />}
                            ></Button>
                         </a>
                        )}
        
                       
        
                        {noDeleteAction ? null : (
                          <Popconfirm
                            title="Are you sure？"
                            onConfirm={() => handelDelete(endPoint, record.id)}
                            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                          >
                            <Button
                              danger
                              type="primary"
                              style={{
                                borderColor: "tomato",
                                backgroundColor: "transparent",
                              }}
                              icon={<DeleteOutlined style={{ color: "tomato" }} />}
                            ></Button>
                          </Popconfirm>
                        )}
                      </div>
                    );
                  },
                },
          ];
    return(
        <Table
          tableLayout="auto"
          pagination={{pageSize: 7}}
          rowKey={(item) => item.id?.toString()}
       
           columns={[...coloumRender, ...columns]}
          dataSource={dataRender}
          title={() => {
            return (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2 style={{textDecoration:"underline"}}>{pageTitle}</h2>
                
                <div  
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                   
                  {noAddOption ? null : (
                    <a
                      href={addEndPoint}
                    >
                      <Button
                        style={{ minWidth: 130, marginTop: 10 }}
                        type="primary"
                      >
                        {"Add Record" }
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            );
          }}
        ></Table>
    )
  }
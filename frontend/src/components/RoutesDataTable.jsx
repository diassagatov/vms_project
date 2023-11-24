import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DataTable.css";
import { Modal, Button } from "react-bootstrap";
const RoutesDataTable = (props) => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  useEffect(() => {
    const fetchData = async () => {
      if (props.token) {
        try {
          const response = await fetch(props.link, {
            headers: {
              Authorization: `Bearer ${props.token}`,
              "Content-Type": "application/json",
            },
          });
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
          console.error("Error fetching data:", error);
          console.error("Error status:", response.status);
          console.error("Error response:", await response.text());
        }
      }
    };
    fetchData();
  }, [props.activeKey]);

  return (
    <div className="elementContainer">
      <h1>{props.title}</h1>
      {data && (
        <div className="innerContainer">
          <Table hover className="custom-colored-table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data
                .filter((record) => record["STATUS"] === "Completed")
                .map((record, recordIndex) => (
                  <tr key={recordIndex}>
                    {Object.entries(record).map(([key, value], index) => (
                      <td key={index}>
                        {key !== "replaced_part_image" &&
                        key !== "before_image" &&
                        key !== "after_image" &&
                        key !== "image" ? (
                          value
                        ) : (
                          <div>
                            <img
                              src={value}
                              alt={""}
                              style={{
                                cursor: "pointer",
                                height: "150px",
                                width: "150px",
                              }}
                              onClick={handleShow}
                            />

                            <Modal
                              style={{ marginLeft: "50px" }}
                              show={showModal}
                              onHide={handleClose}
                            >
                              <Modal.Body>
                                <img
                                  src={value}
                                  alt=""
                                  style={{
                                    width: "50%",
                                    display: "block",
                                    margin: "auto",
                                  }}
                                />
                              </Modal.Body>
                            </Modal>
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default RoutesDataTable;

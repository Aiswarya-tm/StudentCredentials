import React from "react";
import "../Dashboard/style.css";
import { useLocation } from "react-router-dom";
import IndividualStudent from "./IndividualStudent";

export default function StudentList() {
  const location = useLocation();
  const studentDetails = [
    {
      name: "Karthik Kumar",
      id: "KTE16CS007",
      subject: "Mechanical",
    },
    {
      name: "Aaryan Kumar",
      id: "KTE16CS007",
      subject: "Mechanical",
    },
    {
      name: "Abhirami Kumar",
      id: "KTE16CS007",
      subject: "Computer",
    },
    {
      name: "Mithra Kumar",
      id: "KTE16CS007",
      subject: "Computer",
    },
    {
      name: "Sooraj Kumar",
      id: "KTE16CS007",
      subject: "Computer",
    },
    {
      name: "Sateesh Kumar",
      id: "KTE16CS007",
      subject: "Computer",
    },
    {
      name: "Naina Kumar",
      id: "KTE16CS007",
      subject: "Computer",
    },
    {
      name: "Madhu Kumar",
      id: "KTE16CS007",
      subject: "Mechanical",
    },
    {
      name: "Karthika Kumar",
      id: "KTE16CS007",
      subject: "Electrical",
    },
    {
      name: "Avinash Kumar",
      id: "KTE16CS007",
      subject: "Civil",
    },
    {
      name: "Babu Kumar",
      id: "KTE16CS007",
      subject: "Electronics",
    },
    {
      name: "Aravind Kumar",
      id: "KTE16CS007",
      subject: "Electronics",
    },
    {
      name: "Anuja Kumar",
      id: "KTE16CS007",
      subject: "Civil",
    },
    {
      name: "Diya Kumar",
      id: "KTE16CS007",
      subject: "Electrical",
    },
  ];

  return (
    <div className="full-body">
      <div className="content-body">
        <h1 className="heading-main">Student List</h1>
        <div className="student-list-table">
          <table>
            <tr>
              <th style={{ textAlign: "left" }} className="heading-no">
                S.No
              </th>
              <th style={{ textAlign: "left" }} className="heading-name">
                Name
              </th>
              <th style={{ textAlign: "left" }} className="heading-id">
                Register Number
              </th>
              <th style={{ textAlign: "left" }} className="heading-doc">
                Document
              </th>
              <th style={{ textAlign: "left" }} className="heading-save">
                confirm
              </th>
            </tr>
            {studentDetails.map((student, index) => {
              return (
                <>
                  {location.pathname.includes(student.subject) ? (
                    <IndividualStudent
                      name={student.name}
                      id={student.id}
                      index={index}
                    />
                  ) : (
                    ""
                  )}
                  {/* <hr /> */}
                </>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

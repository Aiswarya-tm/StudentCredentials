import React from "react";
import "./style.css";
import {useHistory} from "react-router-dom";
import Graduation from "../../utils/graduation.svg";

export default function Dashboard() {
    const history = useHistory();
  const departments = [
    {
      name: "Civil Engineering",
    },
    { name: "Computer Engineering" },
    { name: "Mechanical Engineering" },
    { name: "Electronics Engineering" },
    { name: "Electrical and Eclectronics Engineering" },
  ];

 

  return (
    <React.Fragment>
    <div className="full-body">
    <div className="content-body">
      <h1 className="heading-main">Dashboard</h1>
      <p className="descriptions">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis mi,
        accumsan eget vestibulum sed, hendrerit et odio. In non lacus eget enim
        convallis facilisis. Aliquam massa elit, semper quis posuere at, commodo
        nec justo. Vestibulum non ipsum eu lacus elementum vestibulum id ut
        mauris. Praesent interdum quam sed tincidunt imperdiet. Curabitur luctus
        gravida venenatis. Pellentesque eu sem nec libero rutrum lacinia nec at
        nisi. Sed blandit turpis eu risus luctus maximus. In id orci a ipsum
        condimentum ultricies.
      </p>
      <p className="sub-heading">Departments</p>
      <div className="department-container">
          <div style={{display:"flex",flexDirection: "column"}}>
      {departments.map((element) => {
        return (
          <div className="button-departments" onClick={()=>{
            history.push(`studentList/${element.name}`)}
              }>
            <p className="button-content-departments">{element.name}</p>
          </div>
        );
      })}
      </div>
      <img style={{height:"180px",width:"700px"}} src={Graduation} />
      </div>
      </div>
      
      </div>
    </React.Fragment>
  );
}

import React, { useEffect } from "react";
import "../Dashboard/style.css";
import male from "../../utils/male.svg"
import female from "../../utils/female.svg"
import printJS from 'print-js';
import dummy from "../../utils/dummy.pdf"

export default function StudentDashboard() {

const individualStudent = { 
    name:"Saunthos K Muneer",
    gender:"male",
    university:"KTU",
    registerNumber:"KTE16CS043",
    certificate:"example.txt",
    hash:"0xb52dea84421ff3ae9002feefc24c1d3d73e7e3b8b1d611ee8c8c86e8750166c1"
}

const handleClick=()=>{
    printJS('dummy.pdf')
}





  return (
    <div className="full-body">
      <div className="content-body">
        <h1 className="heading-main">Student Portal</h1>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
            <div style={{ width:"200px"}}>
                {individualStudent.gender == "female"?
                <img className="avatar-image" src={female}></img>:<img className="avatar-image"  src={male}></img>}
            </div>
            <div style={{display:"flex",flexDirection: "column",borderRadius: "8px",boxShadow:"4px 4px 30px rgba(27, 62, 105, 0.1)",padding:"30px"}}>
                <div style={{fontSize:"20px"}} className="sub-heading">Details</div>
                <div style={{display:"flex"}}>
                    <div style={{fontSize:"14px",color:"#585a56",width:"130px",fontWeight:"bold",marginTop:"7px"}}>Name</div><div style={{fontSize:"14px",color:"#585a56",width:"300px",marginTop:"7px"}}>{individualStudent.name}</div>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{fontSize:"14px",color:"#585a56",width:"130px",fontWeight:"bold",marginTop:"7px"}}>University</div><div style={{fontSize:"14px",color:"#585a56",width:"300px",marginTop:"7px"}}>{individualStudent.university}</div>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{fontSize:"14px",color:"#585a56",width:"130px",fontWeight:"bold",marginTop:"7px"}}>Register.No</div><div style={{fontSize:"14px",color:"#585a56",width:"300px",marginTop:"7px"}}>{individualStudent.registerNumber}</div>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{fontSize:"14px",color:"#585a56",width:"130px",fontWeight:"bold",marginTop:"7px"}}>Hash</div><div style={{fontSize:"14px",color:"#585a56",minWidth:"300px",marginTop:"7px"}}>{individualStudent.hash}</div>
                </div>
                <p style={{width:"230px",marginTop:"15px",height:"45px"}} className="upload-button" onclick={handleClick}>Download Certificate</p>
                

            </div>
        </div>
      </div>
    </div>
  );
}

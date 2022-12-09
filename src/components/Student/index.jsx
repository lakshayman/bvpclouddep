import "./index.css";
import Student from "./student";
import studentData from "../../data/student.data";
import { useEffect } from "react";

export default () => {

  useEffect(()=>{
    console.log(studentData);
  }, [])

  return (
    <div className="Student" id="student">
      <div className="Student__heading">STUDENT REVIEWS</div>
      {studentData.map((student, i) => {return (<Student name={student.name} desc={student.desc} image={student.image} rev={!(i%2==0)}/>);})}
    </div>
  );
};

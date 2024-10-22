import { BsGripVertical } from 'react-icons/bs';
import GreenCheckmark from '../Modules/GreenCheckmark';
import { BsListTask } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BsPlus } from 'react-icons/bs';
import {BsSearch} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import * as db from "../../Database/";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);
    return (
      <div>
      <div >
      <span>
      <BsSearch className="position-absolute d-inline"/>
      </span>
      <input className="d-inline form-control me-sm w-25" type="text" placeholder=" Search..." aria-label="Search"/>
      <button className="d-inline float-end btn ms-2 btn-secondary">+ Group</button>
      <button className="d-inline float-end btn btn-danger">+ Assignment</button>
      </div>
      <br/>
      <br/>
      <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div style={{clear: "both"}} className="wd-title p-3 ps-2 bg-secondary"> 
      <BsGripVertical className="me-2 fs-3" />
      ASSIGNMENTS
      <BsThreeDotsVertical style={{float: "right"}}/>
      <BsPlus style={{float: "right"}}/>
      <div className="me-2 bg-white rounded-pill" style={{float: "right", width: "125px", height: "30px"}}>40% of Total</div>
      </div>
      <ul className="wd-lessons list-group rounded-0">
        <div style={{clear: "both"}} className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical style={{float: "left"}} className="me-2 fs-3" />
        <BsListTask/>
          <Link to={`./${assignments.at(0)?._id || "A1"}/Editor`}><h5 className="m-1 d-inline" style={{right: "right"}}>{assignments.at(0)?.title || "A1"}</h5></Link>
          <div style={{float: "right"}}>
          <GreenCheckmark/>
          <BsThreeDotsVertical/>
          </div>
          <br></br>
          <small className="text-danger ms-4"> Multiple Modules </small>
          <small> |</small>
          <small className="ms-1"> <strong>Not available until</strong> May 6 at 12:00am |</small>
          <br/>
          <small className="ms-4"> <strong>Due</strong> May 13 at 11:59pm | 100 pts</small>
          </div>
          <ul className="wd-lessons list-group rounded-0">
        <div style={{clear: "both"}} className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical style={{float: "left"}} className="me-2 fs-3" />
        <BsListTask/>
        <Link to={`./${assignments.at(1)?._id || "A2"}/Editor`}><h5 className="m-1 d-inline" style={{right: "right"}}>{assignments.at(1)?.title  || "A2"}</h5></Link>
          <div style={{float: "right"}}>
          <GreenCheckmark/>
          <BsThreeDotsVertical/>
          </div>
          <br></br>
          <small className="text-danger ms-4"> Multiple Modules </small>
          <small> |</small>
          <small className="ms-1"> <strong>Not available until</strong> May 13 at 12:00am |</small>
          <br/>
          <small className="ms-4"> <strong>Due</strong> May 20 at 11:59pm | 100 pts</small>
          </div>
          <ul className="wd-lessons list-group rounded-0">
        <div style={{clear: "both"}} className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical style={{float: "left"}} className="me-2 fs-3" />
        <BsListTask/>
        <Link to={`./${assignments.at(2)?._id || "A3"}/Editor`}><h5 className="m-1 d-inline" style={{right: "right"}}>{assignments.at(2)?.title || "A3"}</h5></Link>
          <div style={{float: "right"}}>
          <GreenCheckmark/>
          <BsThreeDotsVertical/>
          </div>
          <br></br>
          <small className="text-danger ms-4"> Multiple Modules </small>
          <small> |</small>
          <small className="ms-1"> <strong>Not available until</strong> May 20 at 12:00am |</small>
          <br/>
          <small className="ms-4"> <strong>Due</strong> May 27 at 11:59pm | 100 pts</small>
          </div>
      </ul>
      </ul>
      </ul>
    </li>
  </ul>
      </div>

  
    );}

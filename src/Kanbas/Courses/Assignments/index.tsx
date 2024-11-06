import { BsGripVertical, BsListTask, BsThreeDotsVertical, BsPlus, BsSearch } from 'react-icons/bs';
import GreenCheckmark from '../Modules/GreenCheckmark';
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector( (state: any) => state.assignmentReducer.assignments);

  
  return (
    <div>
      <div>
        <span>
          <BsSearch className="position-absolute d-inline" />
        </span>
        <input className="d-inline form-control me-sm w-25" type="text" placeholder="Search..." aria-label="Search" />
        <button className="d-inline float-end btn ms-2 btn-secondary">+ Group</button>
        <Link to={`./${cid}/Assignments/Editor`}>
          <button className="d-inline float-end btn btn-danger">+ Assignment</button>
        </Link>
      </div>

      <br />
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div style={{ clear: "both" }} className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <BsThreeDotsVertical style={{ float: "right" }} />
            <BsPlus style={{ float: "right" }} />
            <div className="me-2 bg-white rounded-pill" style={{ float: "right", width: "125px", height: "30px" }}>
              40% of Total
            </div>
          </div>

          {assignments.map((assignment: any) => (
            <div key={assignment._id} className="wd-lesson list-group-item p-3 ps-1" style={{ clear: "both" }}>
              <BsGripVertical style={{ float: "left" }} className="me-2 fs-3" />
              <BsListTask />
              <Link to={`./${assignment._id}/Editor`}>
                <h5 className="m-1 d-inline">{assignment.title || "A1"}</h5>
              </Link>
              <div style={{ float: "right" }}>
                <GreenCheckmark />
                <BsThreeDotsVertical />
              </div>
              <br />
              <small className="text-danger ms-4">Multiple Modules</small>
              <small> |</small>
              <small className="ms-1">
                <strong>Not available until</strong> May 6 at 12:00am |
              </small>
              <br />
              <small className="ms-4">
                <strong>Due</strong> May 13 at 11:59pm | {assignment.points || 100} pts
              </small>
            </div>
          ))}
          
        </li>
      </ul>
    </div>
  );
}

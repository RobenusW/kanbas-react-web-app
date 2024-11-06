import {useParams, Link } from "react-router-dom"
import { assignments } from "../../Database";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment }
  from "./reducer";

export default function AssignmentEditor () {
        
  const [assignmentName, setAssignmentName] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState(new Date('2022-12-22'));
  const [fromDate, setFromDate] = useState(new Date('2022-12-22'));
  const [untilDate, setUntilDate] = useState(new Date('2022-12-22'));
  const dispatch = useDispatch();
        
  const { aid } = useParams();
  const { cid } = useParams();

  const assignment = assignments.find((assignment) => assignment._id === aid);


    return (
      
      <div id="wd-assignments-editor">
        
      <p className="breadcrumb-item active" aria-current="page">{cid}</p>
        <label htmlFor="wd-name">Assignment Name</label>
        <input className="form-control" id="wd-name" value={assignment?.title} onChange={(e) => setAssignmentName(e.target.value)}/><br /><br />
        <textarea className="form-control" id="wd-description"  onChange={(e) => setDescription(e.target.value)}>
        </textarea>
        <br />
        <table>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input className=".col-xl me-1 form-control" type="number" id="wd-points" value={assignment?.points || 100} onChange={(e) => setPoints(parseInt(e.target.value))}/>
          </td>
        </tr>
        <br/>
        <tr>
            <td align = "right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select className="form-control" id="wd-group">
                    <option value="Assignments">ASSIGNMENTS</option>
                </select>
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select className="form-control" id="wd-display-grade-as">
                    <option value="Percentage">Percentage</option>
                </select>
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select className="form-control" id="wd-submission-type">
                <option value="Online">Online</option>
                </select>
            </td>
        </tr>
        <br></br>
        <tr>
            <td align="right" valign="top">
            </td>
            <td>
                <input type="checkbox" id="wd-text-entry" value="ONLINE"/>
                <label htmlFor="wd-text-entry">Text Entry</label>
            </td>
        </tr>
        <tr>
            <td></td>
            <td valign="top">
                <input type="checkbox" id="wd-website-url" value="ONLINE"/>
                <label htmlFor="wd-website-url">Website URL</label>
            </td>
        </tr>
        <tr>
            <td></td>
            <td valign="top">
                <input type="checkbox" id="wd-media-recordings" value="ONLINE"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label>
            </td>
        </tr>
        <tr>
            <td></td>
            <td valign="top">
                <input type="checkbox" id="wd-student-annotation" value="ONLINE"/>
                <label htmlFor="wd-student-annotation">Student Annotations</label>
            </td>
        </tr>
        <tr>
            <td></td>
            <td valign="top">
                <input type="checkbox" id="wd-file-upload" value="ONLINE"/>
                <label htmlFor="wd-file-upload">File Upload</label>
            </td>
        </tr>
        <br></br>
        <tr>
            <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
        </tr>
        <tr>
            <td></td>
          <td>
            <input className="form-control" type="text" id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <br/>
        <tr>
            <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-due-date">Due Date</label>
          </td>
        </tr>
        <tr>
            <td></td>
          <td>
            <input className="form-control" type="date" id="wd-due-date" defaultValue={`${assignment?.["due-date"]}`} onChange={(e) => setDueDate(new Date(e.target.value))}/>
          </td>
        </tr>
        <br/>
        <tr>
            <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-until">Available until</label>
          </td>
        </tr>
        <tr>
            <td></td>
          <td>
            <input className="form-control" type="date" id="wd-available-from" defaultValue={`${assignment?.["available-until"]}`} onChange={(e) => setFromDate(new Date(e.target.value))}/>
          </td>
          <td>
            <input  className="form-control" type="date" id="wd-available-until" defaultValue={`${assignment?.["due-date"]}`} onChange={(e) => setUntilDate(new Date(e.target.value))}/>
          </td>
        </tr>
        <br/>
        </table>
        <hr/>
        <table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button className="btn btn-secondary">
              Cancel
              </button>
            </Link>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button className="btn btn-danger" onClick={() => dispatch(addAssignment({ title: assignmentName, course: cid, description: description, points: points, dueDate: dueDate, availableFrom: fromDate, availableUntil: untilDate }))
}>Save</button>
            </Link>
            </td>
            </tr>
        </table>
    </div>
);}

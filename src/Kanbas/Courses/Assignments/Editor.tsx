import {useParams, Link } from "react-router-dom"
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const { cid } = useParams();

  const assignment = assignments.find((assignment) => assignment._id === aid);

  const description = `${assignment || aid}` + "\n \nThe assignment is available online \n \nSubmit a link to the landing page of your Web application running on Netlify. \n \nThe landing page should include the following: \n \n•Your full name and section \n•Links to each of the lab assignments\n•Link to the Kanbas application\n•Links to all relevant source code repositories\n \nThe Kanbas application should include a link to navigate back to the landing page."

    return (
      
      <div id="wd-assignments-editor">
        
      <p className="breadcrumb-item active" aria-current="page">{cid}</p>
        <label htmlFor="wd-name">Assignment Name</label>
        <input className="form-control" id="wd-name" value={assignment?.title} /><br /><br />
        <textarea className="form-control" id="wd-description">
          {description}
        </textarea>
        <br />
        <table>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input className=".col-xl me-1 form-control" type="number" id="wd-points" value={assignment?.points || 100} />
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
            <input className="form-control" type="date" id="wd-due-date" value={`${assignment?.["due-date"]}`} />
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
            <input className="form-control" type="date" id="wd-available-from" value={`${assignment?.["available-until"]}`} />
          </td>
          <td>
            <input  className="form-control" type="date" id="wd-available-until" value={`${assignment?.["due-date"]}`} />
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
            <button className="btn btn-danger">Save</button>
            </Link>
            </td>
            </tr>
        </table>
    </div>
);}

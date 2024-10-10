export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
      <p className="breadcrumb-item active" aria-current="page">CS1234</p>
        <label htmlFor="wd-name">Assignment Name</label>
        <input className="form-control" id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea className="form-control" id="wd-description">
          The assignment is available online Submit a link to the landing page of you Web application running on Netlify. 
          The Landing page should include the following: Your full name and section Links to each of the lab assignments
          Link to the Kanbas application Links to all relevant source code repositories
          The Kanbas application should include a link to navigate back to the landing page.

          <ul>
            <li>Your full name</li>
            <li>links to each assignment</li>
            <li>links to canvas</li>
            <li>links to all relevant source code</li>
          </ul>

          The kanbas application should include a link to navigate back to landing page
        </textarea>
        <br />
        <table>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input className=".col-xl me-1 form-control" type="number" id="wd-points" value={100} />
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
            <input className="form-control" type="date" id="wd-due-date" value="2024-05-13" />
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
            <input className="form-control" type="date" id="wd-available-from" value="2024-05-13" />
          </td>
          <td>
            <input  className="form-control" type="date" id="wd-available-until" value="2024-05-20" />
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
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-danger">Save</button>
            </td>
            </tr>
        </table>
    </div>
);}

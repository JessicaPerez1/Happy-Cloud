import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function EditButton() {
  return (
    <div>
      <Link to="/editpage">
        <Button variant="contained" color="primary" onClick={edit}>
          Edit
        </Button>
      </Link>
    </div>
  );
}

export default EditButton;

// import React from "react";
// import { Redirect } from "react-router-dom";

// class Edit extends React.Component {
//   render() {
//     return (
//       <form>
//         <input placeholder="daily post edit" type="postEdit" />
//         <button onClick={this.onSubmit}>Save</button>
//       </form>
//     );
//   }
// }

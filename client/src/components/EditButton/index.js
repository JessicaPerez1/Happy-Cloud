import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function editButton() {
  function edit(e) {}

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

export default editButton;

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

// export default Login;
//include an edit button

//add it to where ever we need it
import React from "react";

export const EditButton = () => {
  return <div></div>;
};

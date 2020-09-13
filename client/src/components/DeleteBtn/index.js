import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function DeleteBtn() {


  return (

        <Button variant="contained" color="primary">
          Delete
        </Button>

  );
}

export default DeleteBtn;

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



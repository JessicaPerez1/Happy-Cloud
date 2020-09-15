import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #49B0EB 30%, #EAEAF8 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(105, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
})

function EditButton() {
  return (
    <div>
      <Link to="/editpage">
        <MyButton variant="contained" color="primary" onClick={edit}>
          Edit
        </MyButton>
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

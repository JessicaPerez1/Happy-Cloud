// button to click to generate word cloud
import React from "react";
import { Link, useHistory } from "react-router-dom";
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

function generateCloud() {
  const history = useHistory();

  const handleCloudPage = () => {
    history.push("/cloud");
  };
  return (
    <div>
      <MyButton variant="contained" color="primary" onClick={handleCloudPage}>
        <Link to="/cloud"> Generate your Cloud Page </Link>
      </MyButton>
    </div>
  );
}

export default generateCloud;

// button to click to generate word cloud
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function generateCloud() {
  const history = useHistory();

  const handleCloudPage = () => {
    history.push("/cloud");
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleCloudPage}>
        <Link to="/cloud"> Generate your Cloud Page </Link>
      </Button>

    </div>
  );
}

export default generateCloud;

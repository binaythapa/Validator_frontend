import React, { useState, useEffect } from "react";
import {
  Grid,
  GridContent,
  GridOffset,
} from "../../components/tailwind/tailwind_variable";

const Submission = () => {
  return (
    <React.Fragment>
      <Grid>
        <GridOffset />
        <GridContent>
          <div className="bg-orange-500">Submission Page</div>
          <div className="container mx-auto p-4">Pepco vs Poundland</div>
        </GridContent>
        <GridOffset />
      </Grid>
    </React.Fragment>
  );
};

export default Submission;

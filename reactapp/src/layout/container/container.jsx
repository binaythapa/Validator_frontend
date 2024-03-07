import {
  Grid,
  GridContent,
  GridOffset,
} from "../../components/tailwind/tailwind_variable";

const Container = ({ children }) => {
  return (
    <Grid grid12>
      <GridOffset one />
      <GridContent ten>{children}</GridContent>
      <GridOffset one />
    </Grid>
  );
};

export default Container;

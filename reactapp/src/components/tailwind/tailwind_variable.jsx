import tw, { styled } from "twin.macro";

export const Grid = styled.div(({ grid12 }) => [
  tw`md:grid md:grid-cols-6 lg:grid-cols-10 md:gap-6`,
  grid12 && tw`md:grid-cols-10 lg:grid-cols-12 md:gap-6`,
]);

export const GridOffset = styled.div(({ one, three }) => [
  tw`md:col-span-1 lg:col-span-2`,
  one && tw`md:col-span-1`,
  three && tw`md:col-span-2 lg:col-span-3`,
]);

export const GridContent = styled.div(({ grid12, ten }) => [
  tw`md:col-span-4 lg:col-span-6`,
  grid12 && tw`md:col-span-6 lg:col-span-8`,
  ten && tw`md:col-span-10`,
]);

{
  /* <React.Fragment>
<Grid>
  <GridOffset />
  <GridContent>
    <div className="bg-orange-500">lion</div>
  </GridContent>
  <GridOffset />
</Grid>
</React.Fragment> */
}

// I have a form,but it is made out of many small form components,
// eg: <form>
// <smallFormOne/>
// <smallFormTwo/>
// <smallFormThree/>
// </form>,
// those smallForm components are imported from a separate page, what can I do so that it will create a single form using this technique

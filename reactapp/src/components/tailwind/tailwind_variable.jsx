import tw, { styled } from "twin.macro";

export const Grid = styled.div(({ grid12 }) => [
  tw`md:grid md:grid-cols-6 lg:grid-cols-10 md:gap-6`,
  grid12 && tw`md:grid-cols-12 lg:grid-cols-12 md:gap-6`,
]);

export const GridOffset = styled.div(({ one, three }) => [
  tw`md:col-span-1 lg:col-span-2`,
  one && tw`md:col-span-1 col-span-2`,
  three && tw`md:col-span-2 lg:col-span-3`,
]);

export const GridContent = styled.div(({ grid12, ten }) => [
  tw`md:col-span-4 lg:col-span-6`,
  grid12 && tw`md:col-span-6 lg:col-span-8`,
  ten && tw`md:col-span-10`,
]);

export const DoubleCard = styled.div(({ color }) => [
  tw`my-4 h-[342px] w-[260px] rounded-xl border-2 border-gray-50 bg-[#ECEEFF]`,
  color === "red" &&
    tw`my-4 h-[342px] w-[260px] rounded-xl border-2 border-gray-50 bg-[#F9ECFF]`,
  color === "yellow" &&
    tw`my-4 h-[342px] w-[260px] rounded-xl border-2 border-gray-50 bg-[#FFFBEC]`,
  color === "green" &&
    tw`my-4 h-[342px] w-[260px] rounded-xl border-2 border-gray-50 bg-[#ECFFF6]`,
]);

export const CardStr = styled.div(() => [
  tw`rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-full h-full px-6 py-7`,
]);

export const Button = styled.div(() => [
  tw`px-6 py-3 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white font-medium cursor-pointer`,
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

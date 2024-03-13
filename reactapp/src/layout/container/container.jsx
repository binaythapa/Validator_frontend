import {
  Grid,
  GridContent,
  GridOffset,
} from "../../components/tailwind/tailwind_variable";

const Container = ({ children, classInfo }) => {
  const classInf = (c) => {
    return `grid grid-cols-12 gap-4 ${c}`;
  };
  return (
    <div className={classInf(classInfo)}>
      <div className="col-span-1" />
      <div className="col-span-10">{children}</div>
      <div className="col-span-1" />
    </div>
  );
  // return <>{children}</>;
};

export default Container;

import {
  CardStr,
  DoubleCard,
} from "../../../../components/tailwind/tailwind_variable";
import UploadComp from "../../../../components/upload/uploadComp";

const UploadCard = ({ color, isMain }) => {
  //   console.log(isMain);
  return (
    <div className="md:col-span-6 sm:col-span-12 lg:col-span-4 xl:col-span-3 flex justify-center">
      <DoubleCard color={color}>
        <CardStr>
          <UploadComp isMain={isMain} />
        </CardStr>
      </DoubleCard>
    </div>
  );
};

export default UploadCard;

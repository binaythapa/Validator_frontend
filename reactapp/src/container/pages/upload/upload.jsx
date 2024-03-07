import { Link } from "react-router-dom";

const Upload = () => {
  return (
    <div>
      <div className="text-4xl font-bold mt-6 text-center">Upload</div>
      <Link
        to="/logic/compform"
        className="inline-block px-8 py-4 bg-blue-500 text-white rounded-[24px]"
      >
        Upload
      </Link>
    </div>
  );
};

export default Upload;

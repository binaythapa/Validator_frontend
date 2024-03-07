import React, { useState } from "react";

const UploadComp = ({ isMain, handleTotalCard, index, handleFiletoState }) => {
  const [isHover, setIsHover] = useState(index);

  const handleFileChange = (e, ind) => {
    let fileContent = e.target.files[0];
    console.log(fileContent, "the index is", ind);
    handleFiletoState({ index: ind, file: fileContent });
  };

  let plusSVG = (
    <div
      onClick={handleTotalCard}
      className=" h-[180px] w-100 bg-gray-100 flex justify-center align-center rounded-xl cursor-pointer hover:bg-green-50 hover:border-2 transform hover:scale-[1.02] active:scale-[0.96] ease-in-out duration-200"
    >
      <svg
        className="w-24 h-24 text-gray-400 mt-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        ></path>
      </svg>
    </div>
  );

  let normalClassName = "border-gray-300";
  let hoverClassName = "border-blue-400 scale-[1.03] shadow-md";

  const dropZone = () => (
    <div
      className={`h-[180px] pt-2 text-center bg-gray-50 rounded-lg border-dashed border-2 transition ease-in-out ${
        isHover ? hoverClassName : normalClassName
      }`}
      id="dropzone"
    >
      {" "}
      <label
        for="fileInput"
        className="cursor-pointer flex flex-col items-center space-y-2 mt-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="46"
          fill="none"
          viewBox="0 0 46 46"
        >
          <path
            fill="#929cad"
            d="M9.583 38.333h26.834c.543 0 .998.184 1.366.552.368.368.552.823.55 1.365 0 .543-.184.999-.552 1.367a1.848 1.848 0 01-1.364.55H9.583c-.543 0-.998-.184-1.364-.552a1.864 1.864 0 01-.552-1.365c0-.543.184-.998.552-1.365.368-.366.823-.55 1.364-.552zm9.584-3.833c-.543 0-.998-.184-1.365-.552a1.863 1.863 0 01-.552-1.365v-11.5h-3.738c-.798 0-1.373-.359-1.725-1.077-.35-.718-.287-1.397.192-2.037l9.488-12.171a1.84 1.84 0 01.695-.575A1.95 1.95 0 0123 5.03c.288 0 .567.064.84.192.272.128.503.32.693.575l9.488 12.17c.479.64.543 1.319.191 2.038-.35.72-.926 1.079-1.725 1.077H28.75v11.5c0 .543-.184.999-.552 1.367a1.847 1.847 0 01-1.365.55h-7.666z"
          ></path>
        </svg>
        <span className="text-gray-500 text-md">
          Drag and drop your files here
        </span>
      </label>
      {/* <input
        type="file"
        id="fileInput"
        onChange={(e) => handleFileChange(e, indx)}
        className="scale-[0.6] opacity-0"
      /> */}
    </div>
  );

  return (
    <>
      <h1 className="text-center text-lg sm:text-lg font-semibold mb-4 text-gray-800">
        {isMain === true ? "Click to Add" : "Drop Your File"}
      </h1>

      <div className="relative">
        {isMain === true ? plusSVG : dropZone(index)}
        {isMain === false && (
          <input
            type="file"
            id="filer"
            name="filer"
            onChange={(e) => handleFileChange(e, index)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="scale-y-[6] scale-x-[0.8] absolute top-[65px] left-[-30px] w-[260px] opacity-0 cursor-pointer upload-actual"
          />
        )}
      </div>
      <div className="mt-6 text-center"></div>
    </>
  );
};

export default UploadComp;

{
  /* <div className={`upload-actual ${isHovered ? 'upload-hover-change' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}> */
}

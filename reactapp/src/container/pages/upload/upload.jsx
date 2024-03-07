import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardStr,
  DoubleCard,
  Grid,
} from "../../../components/tailwind/tailwind_variable";
import Container from "../../../layout/container/container";
import UploadCard from "./uploadCards/uploadCard";

const Upload = () => {
  const [cardArr, setCardArr] = useState([
    { color: "red", addComp: false },
    { color: "red", addComp: false },
    { color: "red", addComp: false },
    { color: "green", addComp: true },
  ]);
  return (
    <div className="bg-[#F4F5FA]">
      <Container>
        <div className="text-3xl font-bold mb-6 mt-2">Upload File</div>
        <label className="mb-4 text-[1.12rem] font-medium">
          Client Name:
          <input
            type="text"
            name="client_name"
            className="shadow-sm rounded-md w-[400px] ml-3 px-3 py-2 border border-gray-300 border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Client Name"
            required
          />
        </label>
        <Grid grid12>
          {/*################## //place this card in another component  */}
          {cardArr.map((c, i) => (
            <UploadCard key={i} color={c.color} isMain={c.addComp} />
          ))}
        </Grid>
      </Container>
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

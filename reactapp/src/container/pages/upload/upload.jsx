import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "../../../components/tailwind/tailwind_variable";
import Container from "../../../layout/container/container";
import UploadCard from "./uploadCards/uploadCard";

const Upload = () => {
  const [cardArr, setCardArr] = useState([
    { color: "red", addComp: false, file: null },
    { color: "blue", addComp: false, file: null },
    { color: "yellow", addComp: false, file: null },
    { color: "green", addComp: true, file: null },
  ]);

  useEffect(() => {
    console.log(cardArr);
  }, [cardArr]);

  const handleTotalCard = () => {
    setCardArr((prevState) => {
      let componentToAdd = { color: "red", addComp: false, file: null };
      let indexToChange = prevState.length - 1;
      return [
        ...prevState.slice(0, indexToChange),
        componentToAdd,
        ...prevState.slice(indexToChange, indexToChange + 1, 1),
      ];
    });
  };

  const handleFiletoState = ({ index, file }) => {
    console.log(index);
    setCardArr((prevState) => {
      let cardArray = [...prevState];
      cardArray[index].file = file;
      return cardArray;
    });
  };

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
          {cardArr.map((c, i) => (
            <UploadCard
              key={i}
              color={c.color}
              isMain={c.addComp}
              index={i}
              handleFiletoState={c.addComp === false && handleFiletoState} //this file upload function is only for upload component
              handleTotalCard={c.addComp === true && handleTotalCard}
            />
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

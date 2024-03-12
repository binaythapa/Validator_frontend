import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "../../../components/tailwind/tailwind_variable";
import Container from "../../../layout/container/container";
import UploadCard from "./uploadCards/uploadCard";
import { uploadFiles } from "../../../utils/api/api/fileAPI";
import * as XLSX from "xlsx";
import { extractHeader } from "../../../components/functions/parseFunctions";

const Upload = () => {
  const navigate = useNavigate();

  const [cardArr, setCardArr] = useState([
    { color: "red", addComp: false, file: null, headers: [] },
    // { color: "blue", addComp: false, file: null , headers:[]},
    // { color: "yellow", addComp: false, file: null, headers:[] },
    { color: "green", addComp: true, file: null },
  ]);

  const [clientInfo, setClientInfo] = useState({
    clientName: "",
    clientAlias: "",
  });

  const handleClientInfo = (e, key) => {
    e.preventDefault();
    setClientInfo((prevState) => {
      return { ...prevState, [key]: e.target.value };
    });
  };

  useEffect(() => {
    console.log(cardArr);
  }, [cardArr]);

  const handleTotalCard = () => {
    const componToAdd = (index) => {
      let cols = ["red", "blue", "yellow"];
      return {
        color: cols[index % 3],
        addComp: false,
        file: null,
        headers: [],
      };
    };
    setCardArr((prevState) => {
      // let componentToAdd = { color: "red", addComp: false, file: null, , headers:[] };
      let indexToChange = prevState.length - 1;
      return [
        ...prevState.slice(0, indexToChange),
        // componentToAdd,
        componToAdd(indexToChange),
        ...prevState.slice(indexToChange, indexToChange + 1, 1),
      ];
    });
  };

  const handleFiletoState = ({ index, file }) => {
    console.log(index);
    //use the file given here by dragNdrop Upload component to extract headers and insert it to cardArray state
    extractHeader({ excelFile: file })
      .then((resp) => {
        console.log(resp);
        setCardArr((prevState) => {
          let cardArray = [...prevState];
          cardArray[index].file = file;
          return cardArray;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    // card (file upload) array
    let newArr = [...cardArr];
    let filterFileFromCardArr = newArr.filter(
      (c) => c.file !== null && c.file !== undefined
    );
    let sendArr = [];
    //client array
    let clientData = { ...clientInfo };
    let client_name = clientData.clientName;
    let client_alias = clientData.clientAlias;

    if (
      client_name !== "" &&
      client_alias !== "" &&
      filterFileFromCardArr.length > 0
    ) {
      //card array

      filterFileFromCardArr.forEach((content) => {
        let file = content.file;
        let title = content.file.name;

        sendArr.push({
          client_name,
          client_alias,
          title,
          file,
        });
      });
      console.log(filterFileFromCardArr);
      console.log(sendArr);

      //################# API ##############
      // try {
      //   let resp = await uploadFiles({ formData: sendArr });
      //   if (resp.status === 200) {
      //     navigate("/logic/compform");
      //   }
      //   console.log(resp);
      // } catch (error) {
      //   console.log(error);
      // }
    } else {
      alert("Please Fill all the form");
    }
  };

  return (
    <div className="bg-[#F4F5FA] pt-4 min-h-screen">
      <form>
        <Container>
          <div className="text-3xl font-bold mb-6 mt-2">Upload File</div>
          <Grid grid12>
            <label className="mb-4 p-1 text-[1.12rem] font-medium lg:col-span-6 md:col-span-12">
              Client Name:
              <input
                type="text"
                name="clientName"
                value={clientInfo.clientName}
                onChange={(e) => handleClientInfo(e, "clientName")}
                className="shadow-sm rounded-md w-[400px] ml-3 px-3 py-2 border border-gray-300 border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Client Name"
                required
              />
            </label>
            <label className="mb-4 text-[1.12rem] font-medium lg:col-span-6 md:col-span-12">
              Client Alias:
              <input
                type="text"
                name="clientAlias"
                value={clientInfo.clientAlias}
                onChange={(e) => handleClientInfo(e, "clientAlias")}
                className="shadow-sm rounded-md w-[400px] ml-3 px-3 py-2 border border-gray-300 border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Client Alias"
                required
              />
            </label>
          </Grid>
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
        <button
          type="submit"
          onClick={(e) => handleFileSubmit(e)}
          className="m-auto my-6 hover:bg-indigo-700 transition ease-in w-[200px] py-4 text-2xl font-bold flex justify-center bg-indigo-600 text-white rounded-[10px] mt-[40px]"
        >
          Submit
        </button>
      </form>
      {/* <Link
        to="/logic/compform"
        className="inline-block px-8 py-4 bg-blue-500 text-white rounded-[24px]"
      >
        Upload
      </Link> */}
    </div>
  );
};

export default Upload;

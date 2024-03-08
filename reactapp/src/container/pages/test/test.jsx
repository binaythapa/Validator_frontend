import React, { useState, useEffect } from "react";
import { getFiles, uploadFiles } from "../../../utils/api/api/fileAPI";

const Test = () => {
  const [formData, setFormData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await getFiles({ clientName: null });
        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleFileChange = async (e) => {
    let fileContent = e.target.files[0];
    console.log(fileContent);
    let title = fileContent.name;
    let forD = {
      client_name: "Client second",
      client_alias: "alias",
      title,
      file: fileContent,
    };

    setFormData(forD);
    //place this in form
    // try {
    //   let resp = uploadFiles({ formData: forD });

    //   if (resp.status === 200) {
    //     console.log("SUCCESS");
    //     return resp;
    //   }
    //   // console.log(resp);
    // } catch (error) {
    //   console.log(error);
    //   throw error;
    // }
  };

  return (
    <>
      <div className="text-5xl font-bold text-center mt-[120px]">TEST</div>
      <input
        type="file"
        name="files"
        id="filing"
        onChange={(e) => handleFileChange(e)}
      />
    </>
  );
};

export default Test;

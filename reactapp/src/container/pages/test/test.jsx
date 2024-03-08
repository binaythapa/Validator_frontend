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
    let forD = [
      {
        client_name: "Client second",
        client_alias: "alias",
        title,
        file: fileContent,
      },
      {
        client_name: "second",
        client_alias: "second alias",
        title: "second title",
        file: fileContent,
      },
    ];

    setFormData(forD);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      let resp = await uploadFiles({ formData: formData });
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-5xl font-bold text-center mt-[120px]">TEST</div>
      <form encType="multipart/form-data">
        <input
          type="file"
          name="files"
          id="filing"
          onChange={(e) => handleFileChange(e)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-orange-200 py-3 px-7 rounded-lg"
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default Test;

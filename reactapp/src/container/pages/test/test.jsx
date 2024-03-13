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
      <form class="max-w-sm mx-auto">
        <label for="underline_select" class="sr-only">
          Underline select
        </label>
        <select
          id="small"
          class="form-select appearance-none pr-8 pl-2 bg-no-repeat block outline outline-neutral-700 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </form>
    </>
  );
};

export default Test;

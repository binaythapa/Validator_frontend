import { axiosInstance } from "../axiosInstance";

export const getFiles = async ({ clientName }) => {
  const queryParamas = {
    client_name: clientName,
  };

  try {
    let resp = await axiosInstance.get("api/file_upload/", {
      params: queryParamas,
    });

    if (resp.status === 200) {
      console.log("SUCCESS");
      return resp;
    }
    // console.log(resp);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const uploadFiles = async ({ formData }) => {
  //DESTRUCTURE ARRAY INTO FORM TYPE
  //   console.log(formData);
  //   const formDataArray = formData.map((item) => {
  //     const formData = new FormData();

  //     formData.append("client_name", item.client_name);
  //     formData.append("client_alias", item.client_alias);
  //     formData.append("title", item.title);
  //     formData.append("file", item.file);

  //     console.log([...formData.entries()]);

  //     return formData;
  //   });

  //   console.log(formDataArray);

  //API HIT
  try {
    // console.log(formDataArray);
    let resp = await axiosInstance.post("api/file_upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(resp);
    if (resp.status === 201) {
      console.log(resp);
      return resp;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

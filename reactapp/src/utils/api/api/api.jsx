// import { api_list } from "../../../container/pages/comparison/comparison Table/comparison_json";
import { axiosInstance } from "../axiosInstance";

export const getAPIlist = async ({ clientName }) => {
  // console.log(api_list);
  // return api_list;

  const queryParamas = {
    name: clientName,
  };

  try {
    // http://127.0.0.1:8000/api/client/?name=OBS%20Observality
    let resp = await axiosInstance.get("api/client/", { params: queryParamas });
    if (resp.status === 200) {
      console.log(resp);
      return resp.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postAPIList = async (headers) => {
  try {
    let resp = await axiosInstance.post("api/form/", headers);

    if (resp.status === 200) {
      //data:{message: 'Successfully Processed Data'}
      return resp.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

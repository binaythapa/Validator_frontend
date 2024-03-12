import React, { useState, useEffect } from "react";
import { Grid } from "../../../components/tailwind/tailwind_variable";
import ComparisonTable from "./comparison Table/comparison_table";
import { client_name, header_format } from "./comparison Table/comparison_json";
// import { getAPIlist } from "../../../api/api";
import {
  returnKeyWithMaxComp,
  returnKeyWithMinComp,
} from "../../../components/functions/functions";
import { getAPIlist, postAPIList } from "../../../utils/api/api/api";
import Container from "../../../layout/container/container";
import { useLocation } from "react-router-dom";

const Comparison = () => {
  const [clientName, setClientName] = useState("");
  const [listFromAPI, setlistFromAPI] = useState([]);
  const [minimumKey, setMinimumKey] = useState("");
  const [maximumKey, setMaximumKey] = useState("");
  const [checkboxes, setCheckboxes] = useState([]);
  const [datatype, setDataType] = useState([]);

  const location = useLocation();

  // update this
  const [isMapped, setIsMapped] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleMap = (mapValue) => {
    mapValue ? setIsMapped(mapValue) : setIsMapped(true);
  };

  useEffect(() => {
    //mapping
    console.log(location);
    if (location?.state?.edit === true) {
      setIsMapped(true);
      setIsEdit(true);
    }

    //LATER use it as api  (async await)
    let clientName = "OBS Observality";
    const fetchData = async () => {
      console.log("fetchdata");
      try {
        let response = await getAPIlist({ clientName: clientName });
        if (response) {
          console.log(response);
          setlistFromAPI(response.api_list);
          setClientName(response.client_name);

          let minKey = returnKeyWithMinComp(response.api_list);
          let maxKey = returnKeyWithMaxComp(response.api_list);
          setMinimumKey(minKey);
          setMaximumKey(maxKey);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    //test
  }, []);

  // handle dragged Data
  const handleDraggedData = (updatedList) => {
    // setlistFromAPI({ ...listFromAPI }, updatedList);
    setlistFromAPI(updatedList);
  };

  //handle on Change form
  const handleFormChange = ({
    listName,
    updatedValue,
    index,
    changingKeyName,
  }) => {
    setlistFromAPI((prevState) => {
      if (!prevState || !prevState[listName]) {
        return prevState;
      }

      return {
        ...prevState,
        [listName]: [
          ...prevState[listName].slice(0, index),
          { ...prevState[listName][index], [changingKeyName]: updatedValue },
          ...prevState[listName].slice(index + 1),
        ],
      };
    });
  };

  //handling Checkbox (JOIN KEY)
  const handleCheckBox = (e, index) => {
    let arr = [...checkboxes];
    let eventType = e.target.checked;

    console.log(eventType);

    if (eventType === true) {
      arr.push(index);
    } else {
      arr = arr.filter((c) => c !== index);
    }

    setCheckboxes(arr);
  };

  useEffect(() => {
    console.log(datatype);
  }, [datatype]);

  //handle Select
  const handleSelect = (e, index) => {
    e.preventDefault();

    setDataType((prevDataType) => {
      let updatedDataType = [...prevDataType];

      let previousIndex = false;
      let repeatedIndex = null;

      //using foreach to determine whether there is already a object which has same index, if yes replace else add
      updatedDataType.forEach((obj, i) => {
        if (obj.ind === index) {
          previousIndex = true;
          repeatedIndex = i;
          return;
        }
      });

      if (previousIndex === true && updatedDataType.length > repeatedIndex) {
        updatedDataType[repeatedIndex].value = e.target.value;
      } else {
        updatedDataType.push({
          ind: index,
          value: e.target.value,
        });
      }

      return updatedDataType;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(listFromAPI, checkboxes);

    let apiList = { ...listFromAPI };

    // from checkbox array, those index selected will be updated in apiList's is_primary_key as true
    checkboxes.map((ind) =>
      //make all is_primary_key as false
      Object.keys(apiList).map(
        (key) => (apiList[key][ind].is_primary_key = true)
      )
    );

    let dataTypeArr = [...datatype];
    let sortedDataTypeArr = dataTypeArr.sort((a, b) => a.ind - b.ind);
    // console.log(sortedDataTypeArr);

    const updatedApiList = Object.keys(apiList).reduce((result, key) => {
      result[key] = apiList[key].map((obj, index) => ({
        ...obj,
        datatype: sortedDataTypeArr[index]?.value || "",
      }));
      return result;
    }, {});

    let query =
      "Select t1.one as ship_no, t2.two as id from ALS_OBS t1 inner join OBS t2 on one.";

    //we will make query for this next day
    console.log(
      "the update API LIST IS",
      clientName,
      updatedApiList,
      "clientName ALIAS",
      clientName,
      "query is",
      query
    );

    let headers = {
      client_name: client_name,
      client_name_alias: client_name,
      api_list: updatedApiList,
      query: query,
    };

    postAPIList(headers)
      .then((resp) => {
        console.log(resp);
        if (resp) {
          console.log("SUCCESS IN POSTING DATA");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container className="bg-[#F4F5FA] min-h-screen pt-3">
      {" "}
      {/* Inner Comparisons  */}
      {/* ################# Client Map From To ################ */}
      <form onSubmit={handleSubmit}>
        <div className="text-xl font-medium mt-4 pb-2 border-b-2 border-gray-100">
          Client Name:
          {/* {clientName} */}
          <select
            id="from"
            className="w-[380px] bg-transparent form-select appearance-none pr-[40px] pl-2 bg-no-repeat border ml-[20px] border-2 border-gray-200 text-gray-900 text-[1.2rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none  px-5 py-3 mt-[14px] mb-[6px] outline-neutral-700"
          >
            <option value="" disabled selected>
              Select Client
            </option>
            <option value="String">ABS Observability</option>
            <option value="long">System Observabiltiy</option>
          </select>
        </div>

        <div className="grid grid-cols-12 mt-4 gap-6">
          <div className="col-span-5 ">
            {/* <h2 className="text-2xl font-medium">Map From</h2> */}
            <div className="text-[1.2rem] font-medium inline-block">
              Map From
            </div>
            <select
              id="from"
              className="w-[80%] block focus:outline-none  form-select appearance-none pr-8 pl-2 bg-no-repeat bg-gray-50 border ml-[19%] border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-5 py-4 mt-[14px] mb-[6px] outline-neutral-700"
            >
              <option value="" disabled selected>
                From
              </option>
              <option value="String">Pepco</option>
              <option value="long">Pound Land</option>
            </select>
          </div>
          {/* <div className="col-span-1"></div> */}
          <div className="col-span-5">
            <div className="text-[1.2rem] font-medium inline-block">Map To</div>
            <select
              id="to"
              className="w-[80%] ml-[19%] focus:outline-none form-select appearance-none pr-8 pl-2 bg-no-repeat bg-gray-50 border  border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  px-5 py-4 mt-[14px] mb-[20px] outline-neutral-700"
            >
              <option value="" disabled selected>
                to
              </option>
              <option value="String">Pepco</option>
              <option value="long">Pound Land</option>
            </select>
          </div>
          <div className="col-span-2">
            <div
              onClick={() => handleMap(true)}
              className="mt-[44px] px-6 py-3 h-[52px] rounded-md bg-indigo-500 hover:bg-indigo-400 text-center w-[180px] text-white font-medium cursor-pointer"
            >
              Map Columns
            </div>
          </div>
        </div>

        {/* ################# Comparison Table ################ */}
        {/* #####################   */}
        {isMapped === true ? (
          <div>
            <Grid grid12>
              <div className="col-span-1 my-3">
                <div className="font-medium mt-[58px] ml-3">Join Key</div>
                {minimumKey &&
                  listFromAPI[minimumKey].map((c, index) => (
                    <div
                      key={c.header_name}
                      className="h-20 mt-5 w-20 border-2 border-slate-200 bg-gray-50 rounded-md flex justify-center items-center hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name={"is_primary_key"}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  scale-125"
                        onChange={(e) => handleCheckBox(e, index)}
                      />
                    </div>
                  ))}
              </div>

              {listFromAPI &&
                Object.keys(listFromAPI).map((key, i) => (
                  <ComparisonTable
                    key={key + i}
                    header_format={header_format}
                    fullList={listFromAPI}
                    listKey={key}
                    onDragData={handleDraggedData}
                    handleFormChange={handleFormChange}
                  />
                ))}

              <div className="col-span-3 my-6">
                <div className="text-lg font-medium text-center mt-11">
                  DataType
                </div>
                {maximumKey &&
                  listFromAPI[maximumKey]?.map((c, index) => (
                    <div key={index}>
                      <select
                        id="datatype"
                        className="bg-gray-50 border border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-4 mt-[34px] mb-[46px] outline-neutral-700"
                        onChange={(e) => handleSelect(e, index)}
                      >
                        <option value="" disabled selected>
                          Select an option
                        </option>
                        <option value="String">String</option>
                        <option value="long">Long</option>
                        <option value="float">Float</option>
                      </select>
                    </div>
                  ))}
              </div>
            </Grid>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-16 py-4 mb-16 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </form>
    </Container>
  );
};

export default Comparison;

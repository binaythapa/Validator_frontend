import React, { useState, useEffect } from "react";
import {
  Grid,
  GridContent,
  GridOffset,
} from "../../../components/tailwind/tailwind_variable";
import ComparisonTable from "./comparison Table/comparison_table";
import { header_format } from "./comparison Table/comparison_json";
import { getAPIlist } from "../../../api/api";
import { returnKeyWithMinComp } from "../../../components/functions/functions";

const Comparison = () => {
  const [listFromAPI, setlistFromAPI] = useState([]);
  const [minimumKey, setMinimumKey] = useState("");
  const [checkboxes, setCheckboxes] = useState([]);

  useEffect(() => {
    //LATER use it as api  (async await)
    let newAPIlist = getAPIlist();
    setlistFromAPI(newAPIlist);
    let minKey = returnKeyWithMinComp(newAPIlist);
    setMinimumKey(minKey);

    //test
  }, []);

  useEffect(() => {
    console.log(checkboxes);
  }, [checkboxes]);

  useEffect(() => {
    console.log(listFromAPI);
  }, [listFromAPI]);

  const handleDraggedData = (updatedList) => {
    // setlistFromAPI({ ...listFromAPI }, updatedList);
    setlistFromAPI(updatedList);
  };

  const handleFormChange = ({
    listName,
    updatedValue,
    index,
    changingKeyName,
    // type,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(listFromAPI, checkboxes);

    let apiList = { ...listFromAPI };

    checkboxes.map((ind) =>
      //make all is_primary_key as false
      Object.keys(apiList).map(
        (key) => (apiList[key][ind].is_primary_key = true)
      )
    );

    //we will make query for this next day
    console.log("the update API LIST IS", apiList);
  };

  return (
    <Grid grid12>
      <GridOffset one />
      <GridContent ten>
        {" "}
        {/* Inner Comparisons  */}
        <form onSubmit={handleSubmit}>
          <Grid grid12>
            <div className="col-span-1 my-6">
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
          </Grid>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-16 py-4 mb-16 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </GridContent>

      <GridOffset one />
    </Grid>
  );
};

export default Comparison;

import React, { useRef } from "react";
import DragAndDrop from "../../../../assets/icons/dragAndDrop";

const ComparisonTable = ({
  header_format,
  fullList,
  listKey,
  onDragData,
  handleFormChange,
}) => {
  const currentlyDraggedComponent = useRef(0);
  const toBeReplacedComponent = useRef(0);

  const handleSort = () => {
    let updatetFullList = { ...fullList };
    let tmp = updatetFullList[listKey][currentlyDraggedComponent.current];
    updatetFullList[listKey][currentlyDraggedComponent.current] =
      updatetFullList[listKey][toBeReplacedComponent.current];
    updatetFullList[listKey][toBeReplacedComponent.current] = tmp;

    //from previous
    onDragData(updatetFullList);
  };

  const onFormChange = (e, index) => {
    e.preventDefault();
    let changingKeyName = e.target.name;
    let updatedValue = e.target.value;
    // console.log(changingKeyName, updatedValue);
    handleFormChange({
      listName: listKey,
      updatedValue,
      changingKeyName,
      index,
    });
  };

  return (
    <div className="md:col-span-4 my-3">
      <div className="my-2 mb-4 text-center font-bold text-[1.4rem]">
        {listKey}
      </div>
      <div className="container">
        {header_format}
        {/* use the loop here  */}
        {fullList[listKey]?.map((c, index) => (
          <div
            className="grid grid-cols-12 gap-2 drag-box bg-[#D5DDF8] shadow-md cursor-move mt-5 px-4 py-5 h-18 rounded-[18px] border-l-[24px] border-[#B0BCE8] hover:bg-blue-100 hover:border-blue-300"
            key={c.header_name + index}
            draggable
            onDragStart={() => (currentlyDraggedComponent.current = index)}
            onDragEnter={() => (toBeReplacedComponent.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="drag-icon">
              <DragAndDrop />
            </div>

            <div className="col-span-5 flex items-center font-medium text-lg">
              {c.header_name}
            </div>
            <div className="col-span-6">
              <input
                type="text"
                value={c.modified_name}
                name="modified_name"
                class="block w-full rounded-md border-1 py-2 pl-4 pr-4 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="Modify Column Name"
                onChange={(e) => onFormChange(e, index)}
              />
            </div>
            {/* <div className="col-span-2 flex justify-center items-center">
              <input
                type="checkbox"
                name={"is_primary_key"}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={c.is_primary_key}
                onChange={(e) => onFormChange(e, index, "checkbox")}
              />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;

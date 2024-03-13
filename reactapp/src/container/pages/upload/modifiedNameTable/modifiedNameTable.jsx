// const ModifiedNameTable = ({headers,handleCarrArr, index}) => {
//     return (  );
// }

// export default ModifiedNameTable;

const ModifiedNameTable = ({
  fileName,
  handleModifiedName,
  handleFileNameChange,
  headers,
  index,
}) => {
  //   console.log(headers);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10 mb-5">
      <div className="max-w-lg">
        {/* <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-5">
          Headers for sheet no {index + 1}
        </h3> */}
        {/* -------- filename ---------- */}
        <label className="mb-5 mt-5 p-1 text-[1.06rem] font-medium lg:col-span-6 md:col-span-12">
          File Name:
          <input
            type="text"
            value={fileName}
            onChange={(e) => handleFileNameChange({ event: e, index: index })}
            className="shadow-sm rounded-md w-[380px] ml-3 px-3 py-2 border border-gray-300 border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Client Alias"
            required
          />
        </label>
      </div>
      <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr className="divide-x odd:bg-gray-50 even:bg-white">
              <th className="py-3 px-6">Header Name</th>
              <th className="py-3 px-6">Modified Header Name</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {headers &&
              Object.keys(headers).map((key, idx) => (
                <tr key={idx} className="divide-x odd:bg-gray-50 even:bg-white">
                  <td className="px-6 font-medium pt-6 pb-4 whitespace-nowrap flex items-center gap-x-6">
                    <span>{idx + 1}</span>
                    {key}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="text"
                      value={headers[key]}
                      onChange={(e) =>
                        handleModifiedName({ event: e, index: index, key: key })
                      }
                      className="shadow-sm rounded-md w-[380px] ml-3 px-3 py-2 border border-gray-300 border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Client Alias"
                      required
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModifiedNameTable;

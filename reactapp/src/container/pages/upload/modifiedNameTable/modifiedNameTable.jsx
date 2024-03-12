// const ModifiedNameTable = ({headers,handleCarrArr, index}) => {
//     return (  );
// }

// export default ModifiedNameTable;

const ModifiedNameTable = ({ headers }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Table Headers for ____index______ sheet
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr className="divide-x">
              <th className="py-3 px-6">Header Name</th>
              <th className="py-3 px-6">Modified Header Name</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {headers &&
              Object.keys(headers).map((key, idx) => (
                <tr key={idx} className="divide-x">
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                    <span>{idx + 1}</span>
                    {key}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {headers[key]}
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

import { useNavigate } from "react-router-dom";
import Container from "../../../layout/container/container";

const Info = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/logic/compform", { state: { edit: true } });
  };

  const actionBtn = (
    <a
      href="#"
      onClick={handleEdit}
      className="font-medium text-blue-600  hover:underline"
    >
      Edit
    </a>
  );

  const tempDynamicData = [
    {
      client_name: "ABS Observability",
      client_alias: "one",
      from_map: "System 1",
      to_map: "System 2",
      action: actionBtn,
    },
    {
      client_name: "System Observability",
      client_alias: "two",
      from_map: "Pep",
      to_map: "Pound",
      action: actionBtn,
    },
    {
      client_name: "New Observability",
      client_alias: "Obs",
      from_map: "System 1",
      to_map: "System 2",
      action: actionBtn,
    },
    {
      client_name: "Name Observability",
      client_alias: "four",
      from_map: "Sys",
      to_map: "Pol",
      action: actionBtn,
    },
  ];

  const handleAdd = () => {
    navigate("/logic/compform");
  };
  return (
    <>
      <Container classInfo="bg-[#FFFEF9] min-h-[700px]">
        <div className="text-[1.24rem] mt-4 mb-6 font-medium">
          Client Observability Information
        </div>
        <div className="flex">
          <div
            onClick={handleAdd}
            className="ml-auto cursor-pointer mb-3 rounded-lg py-2 text-indigo-500 w-[100px] text-center font-medium text-xl transition ease-out hover:bg-indigo-500 hover:text-white border border-2 border-indigo-500 "
          >
            + Add
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto w-[1020px] ">
          <table classNameName="text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="px-12 py-3 ">
                  Client Name
                </th>
                <th scope="col" className="px-12 py-3">
                  Client Alias
                </th>
                <th scope="col" className="px-12 py-3">
                  From_Map
                </th>
                <th scope="col" className="px-12 py-3">
                  To_Map
                </th>
                <th scope="col" className="px-12 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tempDynamicData.map((c, i) => (
                <tr
                  className="odd:bg-white even:bg-gray-50 border-b text-md text-left"
                  key={i}
                >
                  <td scope="row" className="px-12 py-4 whitespace-nowrap ">
                    {c.client_name}
                  </td>
                  <td className="px-12 py-4 w-[300px] text-center">
                    {c.client_alias}
                  </td>
                  <td className="px-12 py-4">{c.from_map}</td>
                  <td className="px-12 py-4">{c.to_map}</td>
                  <td className="px-12 py-4">{c.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default Info;

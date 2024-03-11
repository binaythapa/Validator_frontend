import { useNavigate } from "react-router-dom";
import Container from "../../../layout/container/container";

const Info = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/logic/compform");
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
    navigate("/logic/upload");
  };
  return (
    <>
      <Container className="bg-[#F4F5FA] h-screen pt-3">
        <div className="text-[1.24rem] mt-4 mb-6 font-medium">
          Client Observability Information
        </div>
        <div className="flex">
          <div
            onClick={handleAdd}
            className="cursor-pointer text-blue-500 mb-3 rounded-lg px-1 py-3 w-[100px] text-center font-medium text-xl ml-[90%] transition ease-out hover:bg-indigo-500 hover:text-white border border-2 border-indigo-500 "
          >
            + Add
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto w-[1100px]">
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
                  className="odd:bg-white even:bg-gray-50 border-b text-lg text-left"
                  key={i}
                >
                  <th
                    scope="row"
                    className="px-12 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {c.client_name}
                  </th>
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

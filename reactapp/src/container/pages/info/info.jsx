import Container from "../../../layout/container/container";

const Info = () => {
  const tempDynamicData = [
    {
      client_name: "ABS Observability",
      client_alias: "one",
      from_map: "System 1",
      to_map: "System 2",
      action: (
        <a href="#" className="font-medium text-blue-600  hover:underline">
          Edit
        </a>
      ),
    },
    {
      client_name: "System Observability",
      client_alias: "two",
      from_map: "Sys 1",
      to_map: "Sys 2",
      action: (
        <a href="#" className="font-medium text-blue-600  hover:underline">
          Edit
        </a>
      ),
    },
    {
      client_name: "New Observability",
      client_alias: "three",
      from_map: "System 1",
      to_map: "System 2",
      action: (
        <a href="#" className="font-medium text-blue-600  hover:underline">
          Edit
        </a>
      ),
    },
    {
      client_name: "Name Observability",
      client_alias: "four",
      from_map: "Sys 1",
      to_map: "Sys 2",
      action: (
        <a href="#" className="font-medium text-blue-600  hover:underline">
          Edit
        </a>
      ),
    },
  ];
  return (
    <>
      <Container className="bg-[#F4F5FA] h-screen pt-3">
        <div className="text-3xl mt-3 font-bold">
          Client Observability Information
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto w-[1000px]">
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
                  <td className="px-12 py-4">{c.client_alias}</td>
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

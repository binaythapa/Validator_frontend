export const client_name = "ABS Observability";

export const api_list = {
  Pepco: [
    {
      header_name: "Col1",
      modified_name: "",
      is_primary_key: false,
    },
    {
      header_name: "Col2",
      modified_name: "",
      is_primary_key: false,
    },
    {
      header_name: "Col3",
      modified_name: "",
      is_primary_key: false,
    },
    {
      header_name: "Col4",
      modified_name: "",
      is_primary_key: false,
    },
    {
      header_name: "Col5",
      modified_name: "",
      is_primary_key: true,
    },
    {
      header_name: "Col6",
      modified_name: "",
      is_primary_key: false,
    },
  ],

  Pound_Land: [
    {
      header_name: "Column1",
      modified_name: "",
      is_primary_key: false,
    },
    {
      header_name: "Column2",
      modified_name: "",
      is_primary_key: false,
    },
    {
      header_name: "Column3",
      modified_name: "",
      is_primary_key: false,
    },
    {
      header_name: "Column4",
      modified_name: "",
      is_primary_key: false,
    },
    {
      header_name: "Column5",
      modified_name: "",
      is_primary_key: false,
    },
  ],
};

export const header_format = (
  <div className="grid grid-cols-10 gap-2 font-medium">
    <div className="col-span-4 pl-8">Header</div>
    <div className="col-span-6 pl-5">Modification (Input)</div>
    {/* <div className="col-span-2 text-center">Primary Key</div> */}
  </div>
);

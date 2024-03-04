export const api_list = {
  pepco_list: [
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

  pound_land: [
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
    // {
    //   header_name: "Column6",
    //   modified_name: "",
    //   is_primary_key: false,
    // },
    // {
    //   header_name: "Column7",
    //   modified_name: "",
    //   is_primary_key: false,
    // },
  ],
};

export const header_format = (
  <div className="grid grid-cols-10 gap-2 font-medium">
    <div className="col-span-4 pl-2">Header</div>
    <div className="col-span-6 pl-2">Modification (Input)</div>
    {/* <div className="col-span-2 text-center">Primary Key</div> */}
  </div>
);

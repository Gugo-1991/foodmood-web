import React, { useState, useEffect } from "react";
import api from "../../api/foodmoodApi";
import TableComponent from "../../getInformation/tableComponent";

function AllItems() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/items");
        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },

    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Id...",
      accessor: "_id",
    },

    {
      Header: "Created Data",
      accessor: "createdDate",
    },
  ];

  return (
    <div className="App">
      <h1>All Itemsccc</h1>
      <TableComponent columns={columns} data={data} />
    </div>
  );
}

export default AllItems;

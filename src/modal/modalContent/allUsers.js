import React, { useState, useEffect } from "react";
import api from "../../api/foodmoodApi";
import TableComponent from "../../getInformation/tableComponent";

function AllUsers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/Users");
        setData(response.data);
        console.log(response.data);
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
      Header: "Second Name",
      accessor: "secondName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Role",
      accessor: "role",
    },
    {
      Header: "Created Data",
      accessor: "createdDate",
    },
  ];

  return (
    <div className="App">
      <h1>All Users</h1>
      <TableComponent columns={columns} data={data} />
    </div>
  );
}

export default AllUsers;

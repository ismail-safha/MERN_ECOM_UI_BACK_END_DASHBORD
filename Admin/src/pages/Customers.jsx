import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getaUsers } from "../features/customers/customerSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
];

const Customers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getaUsers());
  }, []);

  const customersState = useSelector((state) => state.customer.customers);

  const data1 = [];
  for (let i = 0; i < customersState.length; i++) {
    if (customersState[i].role !== "admin") {
      data1.push({
        key: i,
        name: customersState[i].firstname + " " + customersState[1].lastname,
        email: customersState[i].email,
        mobile: customersState[i].mobile,
      });
    }
  }

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div className="">
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;

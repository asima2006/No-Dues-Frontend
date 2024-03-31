import React, { useEffect, useState } from 'react'
import Header from '../components/Nav'
import StickyHeadTable from '../components/Table'
import FilterDash from './Filters/FilterDash';

const rows = [
  {
    "id": "f9f1a6d0-7b46-4cf9-b97c-de31ffd22d9e",
    "amount": 100,
    "due_date": "2024-03-15T00:00:00Z",
    "roll_number": "2201cb33",
    "status": "success",
    "reason": "Tuition fee",
    "created_at": "2024-03-26T08:08:41.731894Z"
  }
];

const columns = [
  {
    id: "reason",
    label: "Department",
    minWidth: 100,
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
  },
  {
    id: "due_date",
    label: "Due Date",
    minWidth: 100,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
  },
];

const StudDues = () => {
  const [param, setParam] = useState([]);
  useEffect(() => {
    console.log(param);
    // add api to fetch specific students dues
  }, [param])
  return (
    <div>
      <Header label="DUES RECORD" />
      <FilterDash setParam={setParam} />
      <StickyHeadTable rows={rows} columns={columns} isDep={false} />
    </div>
  )
}

export default StudDues

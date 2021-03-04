import { useEffect } from "react";
import BootstrapTable from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {
setTableData,fetchTableData, setStatus
} from './tableSlice';
import Dropdown from 'react-bootstrap/Dropdown'

function Table() {

  const tableData = useSelector(state => state.tableData.value);
  const statusFilter = useSelector(state => state.tableData.status)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTableData())
  }, []);

  console.log(tableData);
  const statuses = [] 
  tableData && tableData.forEach((item, index) => {
      if(!statuses.includes(item.status)){
          statuses.push(item.status)
      }
  })
  const renderTableData = statusFilter !== "All" ? tableData.filter((item) => {
        return item.status === statusFilter
    }) : tableData 
  return (
    <div className="App">
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
        Status
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Dropdown.Item onClick={()=> {
                 dispatch(setStatus("All"))
             }}>{"All"}</Dropdown.Item>
        {statuses.map((item) => {
            return(
             <Dropdown.Item onClick={()=> {
                 dispatch(setStatus(item))
             }}>{item}</Dropdown.Item>
            )
        })}
    </Dropdown.Menu>
    </Dropdown>
      <BootstrapTable striped bordered hover>
  <thead>
    <tr>
      <th>Project Id</th>
      <th>Project Code</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {renderTableData &&
      renderTableData.map((item,index) => {
        return (
          <tr>
            <td>{item.project_id}</td>
            <td>{item.project_code}</td>
            <td>{item.status}</td>
          </tr>
        )
      })
    }
  </tbody>
</BootstrapTable>
    </div>
  );
}

export default Table;

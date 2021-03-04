import './App.css';
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://timeapi.kaaylabs.com/api/v1/project_view/")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Project Id</th>
      <th>Project Code</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {data.data &&
      data.data.map((item,index) => {
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
</Table>
    </div>
  );
}

export default App;

/*import Table from "react-bootstrap/Table";

function ResponsiveTable(props) {
  const lista = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
  
  
  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          <th>\</th>
          {lista.map((titulos, index) => (
            <th key={index}> {props.key} </th>
          ))}
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </Table>
  );
}

export default ResponsiveTable;*/

// Filename - /MyPractice/GeekTable.jsx

import React from 'react';
import Table from "react-bootstrap/Table";
//aqui llegan el listado de titulos y el json ya casteado
function ResponsiveTable({data, lista}){
	
	return(
		<div>
			<Table responsive bordered hover>
				<thead>
					<tr>
            {lista.map((l, index) => (
              <th key={index}> {l} </th>
            ))}
					</tr>
				</thead>
				<tbody>
          
					{data}
				</tbody>
			</Table>
		</div>
	)
}

export default ResponsiveTable;


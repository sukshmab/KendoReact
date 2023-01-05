import React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import kendoka from './kendoka.svg';
import './App.scss';
import { Calendar } from "@progress/kendo-react-dateinputs";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import products from "./products.json";
import categories from "./categories.json";


function App() {
  const handleClick = React.useCallback(() => {
    window.open('https://www.telerik.com/kendo-react-ui/components/', '_blank');
  }, []);

  return (
  <div className="App">
    <h1>Hello KendoReact!</h1>
    <Calendar />
   
  
  <div className='Grid'>
    <Grid data={products}>
  <GridColumn field="ProductName" />
  <GridColumn field="UnitPrice" />
  <GridColumn field="UnitsInStock" />
  <GridColumn field="Discontinued" />
</Grid>
  </div>
  <div className='droup-down'>
  <p>
  <DropDownList
    data={categories}
    dataItemKey="CategoryID"
    textField="CategoryName"
    
  />
</p>
  </div>
  

  </div>
);
  }

export default App;

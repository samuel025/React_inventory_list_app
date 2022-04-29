 import './App.css';
 import AddItem from './Additem';
 import {useState} from "react";
 import SearchBar from './SearchBar';
 import ItemDisplay from './DataDisplay';
 import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [filters, setFilters] = useState({})
  const [data, setData] = useState({items: []})

  const updateFilters = (searchParams) => {
    setFilters(searchParams)
  }
  const addItemtoData = (item) => {
        let items = data["items"]
        item.id = items.length
        items.push(item)
        setData({items:items})
        console.log(data)
  }
  const filterData = (data) => {
    const filteredData = [];
    if (!filters.name){
      return data
    }
    for (const item of data){
       if (filters.name !== "" && item.name !== filters.name){
          continue
        }
        if (filters.price !== 0 && item.price > filters.price){
          continue
        }
        if (filters.type !== "" && item.type !== filters.type){
          continue
        }
        if (filters.brand !== "" && item.brand !== filters.brand){
          continue
        }
        filteredData.push(item)
    }
    return filteredData; 
  }

  return (
    <div className="container">
      <div className='row mt-3'>
        <AddItem addItem = {addItemtoData}/> 
      </div>
      <div className='row mt-3'>
        <ItemDisplay item = {filterData(data["items"])}/>
      </div>
      <div className='row mt-3'>
        <SearchBar updateSearchParams = {updateFilters} /> 
      </div>
    </div>
  );
}



export default App;

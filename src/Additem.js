import {useState} from "react"

function AddItem(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const AddItemButtonPressed = () => {
        props.addItem({name:name, price:price, type:type, brand:brand})
        setBrand("")
        setName("")
        setPrice(0)
        setType("")
    }

    return(
        <div className="continer">
            <div className="row">
            <h2>Add an item</h2>
            </div>
            <div className="row">
                    <label htmlFor="name-field">Name:</label>
                    <input className="form-control" id="name-field" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <label htmlFor="price-field">Price:</label>
                    <input className="form-control" id="price-field" type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                    <label htmlFor="type-field">Type:</label>
                    <input className="form-control" id="type-field" type="text" value={type} onChange={(e) => setType(e.target.value)}></input>
                    <label htmlFor="brand-field">Brand:</label>
                    <input className="form-control" id="brand-field" type="text" value={brand} onChange={(e) => setBrand(e.target.value)}></input>
            </div>
            <div className="row mt-2">
                <button type="button" className="btn btn-primary" onClick={AddItemButtonPressed}>Add Item  </button>
            </div>
        </div>
    );
}
 
export default AddItem
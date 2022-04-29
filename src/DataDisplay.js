function ItemDisplay(props) {
    return (
        <div className="container">
            <div className="row"><h2>Items</h2></div>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>
                            <th scope="col">Brand</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.item.map((item) => {
                        return (
                            <tr>
                                <th scope="row">{item.id}</th>
                                <th>{item.name}</th>
                                <th>{item.price}</th>
                                <th>{item.type}</th>
                                <th>{item.brand}</th>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}
export default ItemDisplay 
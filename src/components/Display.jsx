function Display(props) {
  const loaded = () => {
    return (
        <div className="desc">
            <div className="cat">
            <h1>Name: {props.currentName.data.name}</h1>
            <h1>Category: {props.currentName.data.category}</h1>
            </div>
            <div className="find">
            <h1>Description:</h1>
            <p>{props.currentName.data.description}</p>
            </div>
            <div className="looks">
                <img src={props.currentName.data.image} alt={props.currentName.data.name}/>
            </div>
        </div>
    )
  }
  const loading = () =>{
        return <h1>No Items to Display</h1>
    };
    return props.currentName ? loaded() : loading();
}

export default Display
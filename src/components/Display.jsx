function Display(props) {
  const loaded = () => {
    return (
        <div className="desc">
            <h1>Name: {props.currentName.data.name}</h1>
            <h1>Category: {props.currentName.data.category}</h1>
            <h1>Description:</h1>
            <p>{props.currentName.data.description}</p>
            <h1>Drops: {props.currentName.data.drops[0]}</h1>
            <div className="handsome">
                <h1>Display:</h1>
                <img src={props.currentName.data.image}/>
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
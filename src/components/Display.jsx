function Display(props) {
  const loaded = () => {
    return (
        <div className="desc">
            <h1>Name:</h1>
            <h1>Category:</h1>
            <h1>Description</h1>
            <h1>Drops:</h1>
            <div className="handsome">
                <h1>Display:</h1>
                <img src="" alt="" />
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
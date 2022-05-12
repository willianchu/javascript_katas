  const [stateData, setStateData] = useState([])
  const [filterCondition_One, setFilterCondition_One] = useState("")
  const [filterCondition_Two, setFilterCondition_Two] = useState("")
  
  const filteredStateData = () => {
    if (stateData.length) { // if stateData is not empty
      let clone = [...stateData]; // clone the stateData
      if (filterCondition_One.length) { // if filterCondition_One is not empty
        clone = filterByCondition_One(clone, filterCondition_One); // filter the clone
      }
      if (filterCondition_Two.length) { // if filterCondition_Two is not empty
        clone = filterByCondition_Two(clone, filterCondition_Two); // filter the clone
      }
      return clone.map((el) => {
        return (
          <Card key={el.id} data={el} someFunction={someFunction} />
        );
      });
    }
  };

  const optimizedFilterStaTeData = () => {
    // do if stateData is not empty
    if (stateData.length) {
      // clone the stateData
      

return({filteredStateData()})
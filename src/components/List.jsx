const List = ({ list, selectedListItems, setSelectedListItems }) => {
  const handleItemSelectionChange = (event) => {
    const { checked, value } = event.target;
    const set = new Set(selectedListItems);
    if (checked) set.add(value);
    else set.delete(value);
    setSelectedListItems(Array.from(set));
  };

  return (
    <div className="list-container">
      {list.map((item) => (
        <div key={item}>
          <input
            type="checkbox"
            value={item}
            onChange={handleItemSelectionChange}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
};
export default List;

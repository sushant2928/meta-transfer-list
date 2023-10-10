import "./styles.css";
import List from "./components/List";
import useListItems from "./hooks/useListItems";

export default function App() {
  const {
    listOne,
    selectedListOneItems,
    setSelectedListOneItems,
    listTwo,
    selectedListTwoItems,
    setSelectedListTwoItems,
    handleOneToTwoClicked,
    handleTwoToOneClicked
  } = useListItems(["A", "B", "C", "D", "E"], []);

  return (
    <div className="app">
      <List
        list={listOne}
        selectedListItems={selectedListOneItems}
        setSelectedListItems={setSelectedListOneItems}
      />
      <div className="button-container">
        <button onClick={handleOneToTwoClicked}>{">>"}</button>
        <button onClick={handleTwoToOneClicked}>{"<<"}</button>
      </div>
      <List
        list={listTwo}
        selectedListItems={selectedListTwoItems}
        setSelectedListItems={setSelectedListTwoItems}
      />
    </div>
  );
}

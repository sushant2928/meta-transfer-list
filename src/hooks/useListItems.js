import { useState } from "react";

const useListItems = (listOneItems, listTwoItems) => {
  const [listOne, setListOne] = useState(listOneItems);
  const [listTwo, setListTwo] = useState(listTwoItems);
  const [selectedListOneItems, setSelectedListOneItems] = useState([]);
  const [selectedListTwoItems, setSelectedListTwoItems] = useState([]);

  const handleOneToTwoClicked = () => {
    if (selectedListOneItems?.length) {
      setListOne((prev) =>
        prev.filter(
          (value) =>
            selectedListOneItems.findIndex((item) => item === value) === -1
        )
      );

      setListTwo((prev) => [...prev, ...selectedListOneItems]);
      setSelectedListOneItems([]);
    }
  };
  const handleTwoToOneClicked = () => {
    if (selectedListTwoItems?.length) {
      setListTwo((prev) =>
        prev.filter(
          (value) =>
            selectedListTwoItems.findIndex((item) => item === value) === -1
        )
      );
      setListOne((prev) => [...prev, selectedListTwoItems]);
      setSelectedListTwoItems([]);
    }
  };

  return {
    listOne,
    selectedListOneItems,
    setSelectedListOneItems,
    listTwo,
    selectedListTwoItems,
    setSelectedListTwoItems,
    handleOneToTwoClicked,
    handleTwoToOneClicked
  };
};

export default useListItems;

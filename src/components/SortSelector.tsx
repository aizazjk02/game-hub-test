import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";



/**
 * SortSelector component allows users to choose a sorting criteria for a list.
 * It utilizes Chakra UI's Menu and MenuItem components for a visually appealing dropdown.
 */
const SortSelector = () => {

  const selectedSortOrder = useGameQueryStore(store => store.gameQuery.sortOrder)
  const setSelectedSortOrder = useGameQueryStore(store => store.setSortOrder)

  // Array of available sort order options
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added (Descending)" }, // Clarify descending order
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date (Descending)" }, // Clarify descending order
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating (Descending)" },
  ];


  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>

        Order By: {selectedSortOrder}
      </MenuButton>
      <MenuList>

        {sortOrders.map((order) => (
          <MenuItem key={order.value} value={order.value} onClick={() => {

            setSelectedSortOrder(order.value);
          }}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

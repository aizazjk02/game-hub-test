import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

// Interface to define props expected by the component
interface Props {
  // Callback function to handle sort order selection
  onSelectSortOrder: (order: string) => void;
}

/**
 * SortSelector component allows users to choose a sorting criteria for a list.
 * It utilizes Chakra UI's Menu and MenuItem components for a visually appealing dropdown.
 */
const SortSelector = ({ onSelectSortOrder }: Props) => {
  // State variable to store currently selected sort order
  const [selectedSortOrder, setSelectedSortOrder] = useState("Relevance");

  // Array of available sort order options
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added (Descending)" }, // Clarify descending order
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date (Descending)" }, // Clarify descending order
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating (Descending)" },
  ];

  // Renders the SortSelector component
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* Display currently selected sort order */}
        Order By: {selectedSortOrder}
      </MenuButton>
      <MenuList>
        {/* Map through sort orders to create MenuItems */}
        {sortOrders.map((order) => (
          <MenuItem key={order.value} value={order.value} onClick={() => {
            // Update selected state and trigger callback with chosen order value
            setSelectedSortOrder(order.label);
            onSelectSortOrder(order.value);
          }}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

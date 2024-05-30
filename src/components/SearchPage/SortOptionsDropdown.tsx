import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};

const sort_options = [
  {
    label: "Best Match",
    value: "lastupdated",
  },
  {
    label: "Delivery Price",
    value: "deliveryprice",
  },
  {
    label: "Estimated delivery time",
    value: "estimateddeliverytime",
  },
];

function SortOptionsDropdown({ onChange, sortOption }: Props) {
  const selectedSortLabel =
    sort_options.find(
      (option: { label: string; value: string }) => option.value === sortOption
    )?.label || sort_options[0].label;
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <Button variant={"outline"}>Sort By: {selectedSortLabel}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {sort_options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              className="cursor-pointer focus:bg-orange-50"
              onClick={() => onChange(option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SortOptionsDropdown;

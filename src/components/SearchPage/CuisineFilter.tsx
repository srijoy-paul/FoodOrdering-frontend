import { cuisineList } from "@/lib/restaurant-cuisines-list-utils";
import { ChangeEvent } from "react";
import { Label } from "../ui/label";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

function CuisineFilter({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClick,
}: Props) {
  const handleCuisinesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = e?.target.value;
    const isChecked = e.target.checked;
    const newCuisinesList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisinesList);
  };

  const handleCuisinesReset = () => {
    onChange([]);
  };
  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter By Cuisine</div>
        <div
          onClick={handleCuisinesReset}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-saffron"
        >
          Reset Filters
        </div>
      </div>
      <div className="flex flex-wrap gap-1 px-1">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 7)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine);
            return (
              <div
                className={`flex border border-saffron  rounded-full py-2 px-3 cursor-pointer ${
                  isSelected
                    ? "border-bgreen bg-gradient-to-r from-white via-white to-emerald-50 "
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  id={`cuisine_${cuisine}`}
                  className="hidden"
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisinesChange}
                />
                <Label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 cursor-pointer items-center ${
                    isSelected ? "gap-1" : ""
                  }`}
                >
                  <span className="">
                    {isSelected && (
                      <Check
                        size={15}
                        strokeWidth={3}
                        className={`${isSelected ? "text-bgreen" : ""}`}
                      />
                    )}
                  </span>
                  <span>{cuisine}</span>
                </Label>
              </div>
            );
          })}
      </div>
      <Button
        onClick={onExpandedClick}
        variant="link"
        className="mt-2 flex-1 w-full "
      >
        {isExpanded ? (
          <span className="flex gap-1  items-end">
            View Less <MdExpandLess />
          </span>
        ) : (
          <span className="flex gap-1  items-end ">
            View More <MdExpandMore />
          </span>
        )}
      </Button>
    </>
  );
}

export default CuisineFilter;

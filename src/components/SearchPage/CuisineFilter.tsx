import React from "react";

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
  return (
    <>
      <div className="">
        <div className="">Filter By Cuisine</div>
        <div>Reset Filters</div>
      </div>
    </>
  );
}

export default CuisineFilter;

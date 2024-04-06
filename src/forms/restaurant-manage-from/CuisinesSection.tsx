import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cuisineList } from "@/lib/restaurant-cuisines-list-utils";
import React from "react";
import { useFormContext } from "react-hook-form";
import CuisineCheckBox from "./CuisineCheckBox";

function CuisinesSection() {
  const { control } = useFormContext();
  return (
    <div className="my-3">
      <div>
        <FormDescription>
          Select the cuisines that your restaurant servers
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-2">
              {cuisineList.map((cuisineItem) => (
                <CuisineCheckBox cuisine={cuisineItem} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default CuisinesSection;

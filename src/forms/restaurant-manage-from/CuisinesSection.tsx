import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cuisineList } from "@/lib/restaurant-cuisines-list-utils";
import { useFormContext } from "react-hook-form";
import CuisineCheckBox from "./CuisineCheckBox";

function CuisinesSection() {
  const { control } = useFormContext();
  return (
    <div className="my-3 space-y-2 bg-gray-50 p-2 text-saffron">
      <div>
        <h2 className="text-2xl font-bold">Cuisines</h2>
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
              {cuisineList.map((cuisineItem, index) => (
                <CuisineCheckBox
                  key={index}
                  cuisine={cuisineItem}
                  field={field}
                />
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

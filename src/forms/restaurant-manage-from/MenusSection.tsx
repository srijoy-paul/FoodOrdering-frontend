import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuitemInput from "./MenuitemInput";

export default function MenusSection() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuitems",
  });
  return (
    <div className="my-3 space-y-2 bg-gray-50 p-2 text-saffron">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>
        <FormDescription>
          Create your menu and give each item a name and a price
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="menuitems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <MenuitemInput
                index={index}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button
        className="bg-saffron hover:bg-bgreen"
        type="button"
        onClick={() => append({ name: "", price: 0 })}
      >
        Add Menu Item
      </Button>
    </div>
  );
}

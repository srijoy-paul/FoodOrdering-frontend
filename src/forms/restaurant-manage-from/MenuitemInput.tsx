import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  index: number;
  removeMenuItem: () => void;
};
function MenuitemInput({ index, removeMenuItem }: Props) {
  const { control } = useFormContext();
  return (
    <div className="flex flex-row item-end gap-2">
      <FormField
        control={control}
        name={`menuitems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex flex-center gap-1">
              Name <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Manghso Bhaat"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuitems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex flex-center gap-1">
              Price (₹) <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Manghso Bhaat"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        className="bg-saffron max-h-fit"
        type="button"
        onClick={removeMenuItem}
      >
        Remove
      </Button>
    </div>
  );
}

export default MenuitemInput;

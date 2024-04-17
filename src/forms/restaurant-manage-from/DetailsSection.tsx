import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

function DetailsSection() {
  const { control } = useFormContext();
  return (
    <div className="my-3 space-y-2 bg-gray-50 p-2 text-saffron">
      <div>
        <h2 className="text-2xl font-bold">Details</h2>
        <FormDescription>
          Enter details about your restaurant and services offered
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="restaurantname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Restaurant Name</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Mangsho Hut" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-4">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex flex-row gap-3">
        <FormField
          control={control}
          name="deliveryprice"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Delivery Price (₹)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="estimateddeliverytime"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Estimated Delivery Time</FormLabel>
              <FormControl>
                <Input {...field} type="time" step="1" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

export default DetailsSection;

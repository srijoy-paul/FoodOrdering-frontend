import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

function ImageSection() {
  const { control } = useFormContext();
  return (
    <div className="space-y-2 my-3 bg-gray-50 text-saffron">
      <div>
        <h2 className="text-2xl font-bold">Image Upload</h2>
        <FormDescription>
          Add an image that will be displayed on your restaurant listing in the
          search results. Show off your delicious dishes with our cover image
          upload section. Let your culinary creations shine and entice customers
          with mouthwatering visuals. Upload your best photos to showcase the
          essence of your restaurant and tantalize taste buds. Get started now
          and make a memorable first impression! . Adding an image will
          overwrite the existing one
        </FormDescription>
      </div>
      <div className="flex flex-col gap-8 w-[50%]">
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-white"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={(event) =>
                    field.onChange(
                      event.target.files ? event.target.files[0] : null
                    )
                  }
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

export default ImageSection;

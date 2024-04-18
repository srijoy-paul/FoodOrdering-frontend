import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

function ImageSection() {
  const { control, watch } = useFormContext();
  const existingImageUrl = watch("imageurl");
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
      <div className="flex flex-col gap-8 md:w-[50%]">
        {existingImageUrl && (
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src={existingImageUrl}
              // alt="Photo by Drew Beamer"
              className="rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        )}
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
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

export default ImageSection;

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

import DetailsSection from "./DetailsSection";
import CuisinesSection from "./CuisinesSection";
import MenusSection from "./MenusSection";
import Layout from "@/layouts/Layout";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/custom_ui/LoadingButton";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  restaurantname: z.string({
    required_error: "restaurant name is required",
  }),
  city: z.string({
    required_error: "city name is required",
  }),
  country: z.string({
    required_error: "country name is required",
  }),
  deliveryprice: z.coerce.number({
    required_error: "delivery price is required",
    invalid_type_error: "must be a valid number",
  }),
  estimateddeliverytime: z.string({
    required_error: "delivery time is required",
    invalid_type_error: "must be a valid time and date",
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "Please select at least one item",
  }),
  menuitems: z.array(
    z.object({
      name: z.string().min(1, "name is required"),
      price: z.coerce.number().min(1, "price is required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "image is required" }),
});

type restaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

function ManageRestaurantForm({ onSave, isLoading }: Props) {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuitems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: restaurantFormData) => {
    const formData = new FormData();
    formData.append("restaurantname", formDataJson.restaurantname);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("deliveryprice", formDataJson.deliveryprice.toString());
    formData.append(
      "estimateddeliverytime",
      formDataJson.estimateddeliverytime.toString()
    );
    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    formDataJson.menuitems.forEach((menuItem, index) => {
      formData.append(`menuitems[${index}][name]`, menuItem.name);
      formData.append(`menuitems[${index}][price]`, menuItem.price.toString());
      formData.append(`imageFile`, formDataJson.imageFile);
      onSave(formData);
    });
  };

  return (
    <Layout isAbsolute={false}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="container">
          <DetailsSection />
          <Separator />
          <CuisinesSection />
          <Separator />
          <MenusSection />
          <Separator />
          <ImageSection />
          <div className="my-3 space-y-2 flex place-content-center ">
            {isLoading ? (
              <LoadingButton />
            ) : (
              <Button className="bg-saffron p-6 hover:bg-bgreen" type="submit">
                Submit
              </Button>
            )}
          </div>
        </form>
      </Form>
    </Layout>
  );
}

export default ManageRestaurantForm;

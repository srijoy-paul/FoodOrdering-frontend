import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

import DetailsSection from "./DetailsSection";
import CuisinesSection from "./CuisinesSection";
import MenusSection from "./MenusSection";

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
  estimateddeliverytime: z.coerce.string({
    required_error: "delivery price is required",
    invalid_type_error: "must be a valid string",
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
  idLoading: boolean;
};

function ManageRestaurantForm({ onSave, isLoading }: Props) {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuitems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: restaurantFormData) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="container">
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenusSection />
      </form>
    </Form>
  );
}

export default ManageRestaurantForm;

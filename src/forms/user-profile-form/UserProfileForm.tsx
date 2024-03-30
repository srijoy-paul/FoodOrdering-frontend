import { useEffect } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Fish } from "lucide-react";
import { GiChiliPepper } from "react-icons/gi";
import { GiCoolSpices } from "react-icons/gi";
import { FaTreeCity } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/custom_ui/LoadingButton";
import { Zoom } from "react-awesome-reveal";
import { User } from "@/types";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  addressline1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

function UserProfileForm({ currentUser, onSave, isLoading }: Props) {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <Form {...form}>
      <Zoom>
        <form
          onSubmit={form.handleSubmit(onSave)}
          className=" text-saffron space-y-4 bg-gray-100 p-5 "
        >
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold">User Profile</h2>
              <FormDescription className="">
                View and Change your profile information
              </FormDescription>
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex">
                    Email*
                    <GiChiliPepper className="h-[15px] w-[15px]" />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} disabled placeholder="dummy@gmol.tom" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex">
                    Name*
                    <Fish className="h-[15px]" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white border-0"
                      placeholder="Priyonjoy Saiunghl"
                      {...field}
                      style={{ border: "none", outline: "none" }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" flex flex-col md:flex-row gap-5">
              <FormField
                control={form.control}
                name="addressline1"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="flex">
                      Address Line 1*
                      <GiCoolSpices className="h-[17px] w-[17px]" />
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white"
                        placeholder="16/A, 1st Cross, Shivaji Rd, Shivaji Nagar, 560051"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="flex">
                      City*
                      <FaTreeCity className="h-[15px] w-[15px]" />
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Bengaluru" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="flex">
                      Country*
                      <AiOutlineGlobal className="h-[15px] w-[15px" />
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="China" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button type="submit" className="bg-saffron hover:bg-bgreen">
              Submit
            </Button>
          )}
        </form>
      </Zoom>
    </Form>
  );
}

// UserProfileForm.propTypes = {
//   onSave:(userProfileData:UserFormData)=> void;
//   isLoading:boolean;
// };

export default UserProfileForm;

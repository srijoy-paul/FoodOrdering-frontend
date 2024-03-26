// import React from "react";
// import PropTypes from "prop-types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  addressline1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

function UserProfileForm({ onSave, isLoading }: Props) {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
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
                <FormLabel>Email*</FormLabel>
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
                <FormLabel>Name*</FormLabel>
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
                  <FormLabel>Address Line 1*</FormLabel>
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
                  <FormLabel>City*</FormLabel>
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
                  <FormLabel>Country*</FormLabel>
                  <FormControl>
                    <Input placeholder="China" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        {isLoading ? (
          <span></span>
        ) : (
          <Button type="submit" className="bg-saffron hover:bg-bgreen">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
}

// UserProfileForm.propTypes = {
//   onSave:(userProfileData:UserFormData)=> void;
//   isLoading:boolean;
// };

export default UserProfileForm;

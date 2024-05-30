import { Dispatch, SetStateAction, useEffect } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateReviews } from "@/Api/ReviewsApi";
import LoadingButton from "@/components/custom_ui/LoadingButton";
import WriteReviewBtn from "@/components/RestaurantDetailspage/WriteReviewBtn";

const formSchema = z.object({
  rating: z.string(),
  comment: z.string().optional(),
});

// type SetReviewsFunction<T> = (reviews: T[]) => void;
export type Review = { rating: string; comment: string | undefined };
type Props = {
  restaurantid: number;
  setAllReviews: Dispatch<SetStateAction<Review[]>>;
};

export type reviewFormData = z.infer<typeof formSchema>;

export function CreateReviewForm({ restaurantid, setAllReviews }: Props) {
  const form = useForm<reviewFormData>({
    resolver: zodResolver(formSchema),
  });

  const { createReview, isLoading } = useCreateReviews(restaurantid);

  const handleAddReview = async (formdata) => {
    console.log(formdata);
    const response = await createReview(formdata);
    console.log(response);
    // setAllReviews((prev) => [...prev, response]);
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(handleAddReview)}>
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex">Rating</FormLabel>
              <FormControl>
                <Input {...field} type="number" placeholder="Rate 1 - 5 ⭐" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex">Write your review</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Type..." />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          {/* {!isLoading ? (
            <Button className="bg-saffron hover:bg" type="submit">
              Add Review
            </Button>
          ) : (
            <LoadingButton />
          )} */}
          <WriteReviewBtn />
        </div>
      </form>
    </Form>
  );
}

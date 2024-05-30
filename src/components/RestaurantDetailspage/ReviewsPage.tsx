import { useGetReviews } from "@/Api/ReviewsApi";
import { timeSince } from "@/lib/Calculate_Time_Since";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import InfiniteScroll from "react-infinite-scroll-component";
import SortOptionsDropdown from "./ReviewsSortOptions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateReviewForm } from "@/forms/create-review-from/CreateReviewForm";
import { Button } from "../ui/button";

type Props = {
  restaurantid: number;
};
export type FetchDataState = {
  page: number;
  sortoption: string;
};
function ReviewsPage({ restaurantid }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [allReviews, setAllReviews] = useState<any>([]);

  const [fetchDataState, setFetchDataState] = useState({
    page: 1,
    sortoption: "new",
  });

  const { reviews, isLoading } = useGetReviews(fetchDataState, restaurantid);

  //useEffect for sortoption
  useEffect(() => {
    setAllReviews([]);
    setFetchDataState((prevState) => ({
      ...prevState,
      page: 1,
    }));
  }, [fetchDataState.sortoption]);

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      setAllReviews((prev) => [...prev, ...reviews]);
    }
  }, [reviews]);

  const fetchNext = () => {
    if (!isLoading) {
      setFetchDataState((prev) => ({
        ...prev,
        page: prev.page + 1,
      }));
    }
  };

  const setSortOption = (sortoption: string) => {
    setFetchDataState((prevState) => ({
      ...prevState,
      sortoption,
    }));
  };

  if (isLoading && fetchDataState.page === 1) return <span>Loading...</span>;
  console.log(reviews);

  return (
    <>
      <div className="flex justify-between px-2 items-center">
        <Dialog>
          <DialogTrigger asChild>
            {/* className="gap-2 flex items-center text-white bg-saffron hover:bg-bgreen p-3 rounded-md" */}
            <Button className="gap-2 flex items-center text-white bg-saffron hover:bg-bgreen rounded-md">
              Write Review <MdOutlineRateReview />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a Review</DialogTitle>
              <DialogDescription>Add a Detailed Review</DialogDescription>
            </DialogHeader>
            <div>
              <CreateReviewForm
                restaurantid={restaurantid}
                setAllReviews={setAllReviews}
              />
            </div>
          </DialogContent>
        </Dialog>
        <SortOptionsDropdown
          onChange={(value) => setSortOption(value)}
          sortOption={fetchDataState.sortoption}
        />
      </div>
      <div
        id="scrollableDiv"
        className=" overflow-y-scroll h-[640px] scroll-container"
      >
        <InfiniteScroll
          dataLength={allReviews.length}
          next={fetchNext}
          hasMore={reviews && reviews.length > 0}
          loader={"Loading Reviews..."}
          endMessage={
            <p className="gap-2 py-8 flex justify-center items-center">
              You have reached at the End! <MdOutlineRateReview />
            </p>
          }
          scrollableTarget="scrollableDiv"
        >
          {allReviews.map((review) => (
            <div
              key={review.review_id}
              id="review-card"
              className="border-b-2 border-orange-100 px-2 py-3 flex flex-col gap-3"
            >
              <div id="userinfo" className="gap-3 flex items-center">
                <div>
                  <CgProfile size={30} className="cursor-pointer" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">
                    {review?.username}
                  </span>
                  <span className="text-xs text-gray-400">0 reviews</span>
                </div>
              </div>
              <div id="review" className="flex flex-col space-y-3">
                <div className="flex gap-3">
                  <span
                    className={`${
                      review.rating > 2
                        ? review.rating >= 5
                          ? "bg-green-700"
                          : "bg-green-500"
                        : "bg-saffron"
                    } px-2 rounded-md flex items-center text-white gap-1`}
                  >
                    {review.rating}
                    <FaStar size={12} />
                  </span>
                  <span className="text-gray-400">
                    {timeSince(review.created_at)}
                  </span>
                </div>
                <div id="comment" className="text-sm">
                  {review.comment}
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default ReviewsPage;

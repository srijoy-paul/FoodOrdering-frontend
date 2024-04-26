import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchquery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeholder: string;
  onReset?: () => void;
  searchquery: string;
};

function SearchBar({ onSubmit, placeholder, onReset, searchquery }: Props) {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchquery,
    },
  });

  useEffect(() => {
    form.reset({ searchquery });
  }, [form, searchquery]);

  const handleReset = () => {
    form.reset({
      searchquery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        className={`md:w-[70%] p-2 flex items-center self-center gap-3 justify-between flex-row border-2 rounded-full ${
          form.formState.errors.searchquery && "border-red-400"
        }`}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Search
          strokeWidth={2.5}
          size={25}
          className={`ml-1 text-saffron hidden md:block ${
            form.formState.errors.searchquery && "text-red-600"
          }`}
        />
        <FormField
          control={form.control}
          name="searchquery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-xl focus-visible:ring-0"
                  placeholder={placeholder}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full"
        >
          Reset
        </Button>

        <Button
          type="submit"
          className="rounded-full bg-saffron hover:bg-bgreen"
        >
          Search
        </Button>
      </form>
    </Form>
  );
}

export default SearchBar;

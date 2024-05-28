import { useEffect } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  rating: z.number().refine((val) => val !== undefined, {
    message: "Please provide a rating.",
  }),
  comment: z.string().optional(),
});

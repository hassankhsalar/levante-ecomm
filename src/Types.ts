import {z} from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};


export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[]

export const shippingFormSchema = z.object({
  name:z.string().min(1,"name is required"),
  email:z.email().min(1,"email is required"),
  phone:z.string().min(11,"phone number must be 11 digits ").max(11,"phone number must be 11 digits ").regex(/^\d+$/, "phone number must contain only numbers"),
  address:z.string().min(1, "Address is required"),
  city:z.string().min(1, "city is required"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>
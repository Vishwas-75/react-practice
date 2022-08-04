import { ColDef, ColGroupDef } from "ag-grid-community";

export interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export const productColumns: (ColDef | ColGroupDef)[] = [
  { field: "title", headerName: "Title", sortable: true },
  { field: "price", headerName: "Price", sortable: true },
  { field: "discountPercentage", headerName: "Discount Percentage" },
  { field: "rating", headerName: "Rating" },
  { field: "category", headerName: "Category", filter: "agTextColumnFilter" },
];

export const category = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "homeDecoration",
];

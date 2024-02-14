import { CategoryResponse } from "@store/category/category.models";

export interface CategoryState {
  loading: boolean,
  category: CategoryResponse | null,
  categories: CategoryResponse[],
  id: number | null,
  error: string | null
}

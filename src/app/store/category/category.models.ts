import { Category } from "@models/category.response";

export { Category as CategoryResponse } from "@models/category.response";

export type CategoryRequest = Omit<Category, 'id' | 'created_at' | 'updated_at'>;

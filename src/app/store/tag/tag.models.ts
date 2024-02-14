import { Tag } from "@models/tag.response";

export { Tag as TagResponse } from "@models/tag.response";

export type TagRequest = Omit<Tag, 'id' | 'created_at' | 'updated_at'>;

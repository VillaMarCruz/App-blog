import { TagResponse } from '@store/tag/tag.models';

export interface TagState {
  loading: boolean;
  tag: TagResponse | null;
  tags: TagResponse[];
  id: number | null;
  error: string | null;
}

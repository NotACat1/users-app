import { User } from '@type/user';

export interface UserState {
  users: User[];
  isLoading: boolean;
  error: string | null;
  nameFilter: string;
  ageFilter: string;
  page: number;
  limit: number;
}

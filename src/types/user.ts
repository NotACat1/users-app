export interface User {
  id: number;
  name: string;
  age: number;
}

export interface UserQueryParams {
  name: string;
  age: string;
  limit: number;
  offset: number;
}

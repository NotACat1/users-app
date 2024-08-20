import React, { FC } from 'react';
import { User } from "@type/user";

interface UserListItemProps {
  user: User;
}

const UserListItem: FC<UserListItemProps> = ({ user }) => (
  <li>
    {user.name}, {user.age}
  </li>
);

export default UserListItem;

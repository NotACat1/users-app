import React, { FC } from 'react';

interface UserFilterProps {
  nameFilter: string;
  ageFilter: string;
  onNameChange: (name: string) => void;
  onAgeChange: (age: string) => void;
}

const UserFilter: FC<UserFilterProps> = ({
  nameFilter,
  ageFilter,
  onNameChange,
  onAgeChange,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={e => onNameChange(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by age"
        value={ageFilter}
        onChange={e => onAgeChange(e.target.value)}
      />
    </div>
  );
};

export default UserFilter;

import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '@store/user/userThunk';
import { RootState, AppDispatch } from '@store/index';
import {
  setNameFilter,
  setAgeFilter,
  setPage,
  setLimit,
} from '@store/user/userSlice';
import UserListItem from '@components/UserList/UserListItem';
import UserFilter from '@components/UserList/UserFilter';
import Pagination from '@components/UserList/Pagination';
import Loading from '@components/common/Loading';
import ErrorMessage from '@components/common/ErrorMessage';

const UserList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, isLoading, error, nameFilter, ageFilter, page, limit } =
    useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(
      fetchUsers({
        name: nameFilter,
        age: ageFilter,
        limit,
        offset: (page - 1) * limit,
      }),
    );
  }, [nameFilter, ageFilter, page, limit, dispatch]);

  return (
    <div>
      <UserFilter
        nameFilter={nameFilter}
        ageFilter={ageFilter}
        onNameChange={(name) => dispatch(setNameFilter(name))}
        onAgeChange={(age) => dispatch(setAgeFilter(age))}
      />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <ul>
          {users.map(user => (
            <UserListItem key={user.id} user={user} />
          ))}
        </ul>
      )}
      {!isLoading && !error && (
        <Pagination
          page={page}
          onPageChange={(newPage) => dispatch(setPage(newPage))}
          hasNext={users.length === limit}
          onLimitChange={(limit) => dispatch(setLimit(limit))}
        />
      )}
    </div>
  );
};

export default UserList;

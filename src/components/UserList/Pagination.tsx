import React, { FC } from 'react';

interface PaginationProps {
  page: number;
  onPageChange: (page: number) => void;
  hasNext: boolean;
  onLimitChange: (limit: number) => void;
}

const Pagination: FC<PaginationProps> = ({ page, onPageChange, hasNext, onLimitChange }) => {
  return (
    <div>
      <label htmlFor="limit-select">Items per page:</label>
      <select
        id="limit-select"
        onChange={e => onLimitChange(Number(e.target.value))}
      >
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
      </select>
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>page: {page}</span>
      <button onClick={() => onPageChange(page + 1)} disabled={!hasNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

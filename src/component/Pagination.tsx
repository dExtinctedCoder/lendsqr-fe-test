import { usePagination, DOTS } from './usePagination';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import '../styles/_pagination.scss';
import { PaginationProps } from '../types/utilities.type';

const Pagination = ({onPageChange, totalCount, siblingCount=1, currentPage, pageSize}: PaginationProps) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
  

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : null;
  return (
    <ul
      className='pagination-container'
    >
      <li
        className={`pagination-item ${currentPage === 1 && 'disabled'}`}
        onClick={onPrevious}
      >
        <div className="arrow left">
        <IoIosArrowBack fontSize={16} color='#213F7D' />
        </div>
      </li>
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li key={index} className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={`pagination-item ${pageNumber === currentPage && 'selected'}`}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`pagination-item ${currentPage === lastPage && 'disabled'}`}
        onClick={onNext}
      >
        <div className="arrow right">
          <IoIosArrowForward fontSize={16} color='#213F7D' />
        </div>
      </li>
    </ul>
  );
};

export default Pagination;

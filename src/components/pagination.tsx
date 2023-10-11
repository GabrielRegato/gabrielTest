"use client"; // This is a client component
import ResponsivePagination from 'react-responsive-pagination';

const Pagination = (props) => {
  const {
    currentPage = 0,
    setCurrentPage = () => {},
    paginationData = {},
  } = props;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ResponsivePagination
      total={paginationData?.pages || 0}
      current={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export default Pagination;
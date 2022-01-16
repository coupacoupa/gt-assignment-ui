import { TablePagination } from '@mui/material';

interface IProps {
  page: number;
  rowsPerPage: number;
  count: number;
  handleChangePage: any;
  handleChangeRowsPerPage: any;
}

const AccordionPagination = (props: IProps) => {
  const { count, handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } = props;

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default AccordionPagination;

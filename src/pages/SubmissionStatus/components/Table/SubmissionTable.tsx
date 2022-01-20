import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Collapse, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ISubmissionResponse, ISubmissionStatus } from 'common/types/submission';
import dateUtil from 'common/utils/dateUtil';
import { truncate } from 'common/utils/stringUtil';
import * as React from 'react';

interface IProps {
  submissionStatus: ISubmissionResponse;
}

interface IRowProps {
  row: ISubmissionStatus;
}

function Row(row: IRowProps) {
  const {
    row: { agencyName, createdDate, feedback, feedbackStatus, submissionNo },
  } = row;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {submissionNo}
        </TableCell>
        <TableCell align="right">{truncate(feedbackStatus, 10)}</TableCell>
        <TableCell align="right">{truncate(agencyName, 10)}</TableCell>
        <TableCell align="right">{dateUtil.getFormattedDateFromISO(createdDate)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Feedback
              </Typography>
              <TextField multiline rows={8} value={feedback} fullWidth />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function SubmissionTable(props: IProps) {
  const { submissionStatus: { submissions = [] } = {} } = props || {};

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Agency Name</TableCell>
            <TableCell align="right">Submitted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submissions.map((row) => (
            <Row key={row.submissionNo} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

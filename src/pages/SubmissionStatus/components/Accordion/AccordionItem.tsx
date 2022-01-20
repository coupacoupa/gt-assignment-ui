import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';
import { ISubmissionStatus } from 'common/types/submission';
import dateUtil from 'common/utils/dateUtil';

interface IProps {
  expanded: string | false;
  submission: ISubmissionStatus;
  handleChange: Function;
}

const AccordionItem = (props: IProps) => {
  const {
    expanded,
    submission: { submissionNo, createdDate, feedbackStatus, feedback, agencyName },
    handleChange,
  } = props;
  const key = submissionNo.toString();

  return (
    <Accordion elevation={2} key={key} expanded={expanded === key} onChange={handleChange(key)}>
      <AccordionSummary aria-controls={key + 'bh-content'} id={key + 'bh-header'}>
        <Typography sx={{ width: '15%', flexShrink: 0 }}>{submissionNo}</Typography>
        <Typography sx={{ width: '20%', flexShrink: 0 }}>{feedbackStatus}</Typography>
        <Typography sx={{ width: '20%', flexShrink: 0 }}>{agencyName}</Typography>
        <Typography sx={{ width: '25%', flexShrink: 0 }}>{dateUtil.getFormattedDateFromISO(createdDate)}</Typography>
        <Button sx={{ width: '20%' }}>More</Button>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Feedback</Typography>
        <Typography>{feedback}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;

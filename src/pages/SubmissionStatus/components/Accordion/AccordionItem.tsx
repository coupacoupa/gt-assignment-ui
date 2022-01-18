import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';
import { ISubmissionStatus } from 'common/types/submission';
import dayjs from 'dayjs';

interface IProps {
  expanded: string | false;
  submission: ISubmissionStatus;
  handleChange: Function;
}

const AccordionItem = (props: IProps) => {
  const {
    expanded,
    submission: { submissionNo, createdDate, feedbackStatus, feedback },
    handleChange,
  } = props;
  const key = submissionNo.toString();

  return (
    <Accordion elevation={2} key={key} expanded={expanded === key} onChange={handleChange(key)}>
      <AccordionSummary aria-controls={key + 'bh-content'} id={key + 'bh-header'}>
        <Typography sx={{ width: '20%', flexShrink: 0 }}>{submissionNo}</Typography>
        <Typography sx={{ width: '30%', flexShrink: 0, color: 'text.secondary' }}>{feedbackStatus}</Typography>
        <Typography sx={{ width: '30%', color: 'text.secondary' }}>
          {dayjs(createdDate).format('DD MMM YYYY H:mm A')}
        </Typography>
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

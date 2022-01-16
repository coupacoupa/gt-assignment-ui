import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { ISubmissionResponse, ISubmissionStatus } from '../../../../types/submission';
import dayjs from 'dayjs';
import AccordionPagination from '../AccordionPagination/AccordionPagination';

interface IProps {
  submissionStatus: ISubmissionResponse;
}

export default function ControlledAccordions(props: IProps) {
  const { submissionStatus: { submissions = [] } = {} } = props || {};

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={false}>
        <AccordionSummary>
          <Typography sx={{ width: '20%', flexShrink: 0 }}>ID</Typography>
          <Typography sx={{ width: '30%', flexShrink: 0 }}>Status</Typography>
          <Typography sx={{}}>Submitted</Typography>
        </AccordionSummary>
      </Accordion>

      {submissions.map((obj) => {
        const { submissionNo, createdDate, feedbackStatus, feedback } = obj;
        const key = submissionNo.toString();

        return (
          <Accordion key={key} expanded={expanded === key} onChange={handleChange(key)}>
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
      })}
    </div>
  );
}

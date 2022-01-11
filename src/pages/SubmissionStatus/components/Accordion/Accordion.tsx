import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { ISubmissionStatus } from '../../../../common/types/submission';

interface IProps {
  submissionStatus: ISubmissionStatus[];
}

export default function ControlledAccordions(props: IProps) {
  const { submissionStatus } = props;

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={false}>
        <AccordionSummary>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Submission Number</Typography>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Status</Typography>
          <Typography sx={{}}>Submission Date</Typography>
        </AccordionSummary>
      </Accordion>

      {submissionStatus.map((obj) => {
        const { submissionNo, createdDate, feedbackStatus, feedback } = obj;
        const key = submissionNo.toString();

        return (
          <Accordion expanded={expanded === key} onChange={handleChange(key)}>
            <AccordionSummary aria-controls={key + 'bh-content'} id={key + 'bh-header'}>
              <Typography sx={{ width: '33%', flexShrink: 0 }}>{submissionNo}</Typography>
              <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>{feedbackStatus}</Typography>
              <Typography sx={{ width: '33%', color: 'text.secondary' }}>{createdDate}</Typography>
              <Button>Info</Button>
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

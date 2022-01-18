import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { ISubmissionResponse } from 'common/types/submission';
import dayjs from 'dayjs';
import * as React from 'react';
import { useState } from 'react';
import AccordionItem from './AccordionItem';

interface IProps {
  submissionStatus: ISubmissionResponse;
}

export default function ControlledAccordions(props: IProps) {
  const { submissionStatus: { submissions = [] } = {} } = props || {};

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion elevation={3} expanded={false}>
        <AccordionSummary>
          <Typography sx={{ width: '20%', flexShrink: 0 }}>ID</Typography>
          <Typography sx={{ width: '30%', flexShrink: 0 }}>Status</Typography>
          <Typography sx={{}}>Submitted</Typography>
        </AccordionSummary>
      </Accordion>

      {submissions.map((obj) => {
        return <AccordionItem expanded={expanded} handleChange={handleChange} submission={obj} />;
      })}
    </div>
  );
}

import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { ISubmissionResponse } from 'common/types/submission';
import dayjs from 'dayjs';
import * as React from 'react';
import { useState } from 'react';
import AccordionHeader from './AccordionHeader';
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
      <AccordionHeader />

      {submissions.map((obj) => {
        return <AccordionItem expanded={expanded} handleChange={handleChange} submission={obj} />;
      })}
    </div>
  );
}

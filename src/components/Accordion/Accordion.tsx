import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={false}>
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Submission Number</Typography>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Status</Typography>
          <Typography sx={{}}>Submission Date</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>SUB000001</Typography>
          <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>Accepted</Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>10 Aug 2022</Typography>
          <Button>Info</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Feedback</Typography>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit.
            Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed
            mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>SUB000002</Typography>
          <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>Accepted</Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>10 Aug 2022</Typography>
          <Button>Info</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Feedback</Typography>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit.
            Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed
            mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>SUB000003</Typography>
          <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>Accepted</Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>10 Aug 2022</Typography>
          <Button>Info</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Feedback</Typography>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit.
            Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed
            mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

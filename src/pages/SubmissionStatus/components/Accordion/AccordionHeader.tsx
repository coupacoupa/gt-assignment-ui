import { Accordion, AccordionSummary, Typography } from '@mui/material';

const AccordionHeader = () => {
  return (
    <Accordion elevation={3} expanded={false}>
      <AccordionSummary>
        <Typography sx={{ width: '15%', flexShrink: 0 }}>ID</Typography>
        <Typography sx={{ width: '20%', flexShrink: 0 }}>Status</Typography>
        <Typography sx={{ width: '20%', flexShrink: 0 }}>Agency Name</Typography>
        <Typography sx={{ width: '25%', flexShrink: 0 }}>Submitted</Typography>
      </AccordionSummary>
    </Accordion>
  );
};

export default AccordionHeader;

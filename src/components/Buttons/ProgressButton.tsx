import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import * as React from 'react';

interface IProps {
  isLoading: boolean;
  onClick: (arg0: any) => void;
  label: string;
}

const LoadingButton = (props: IProps) => {
  const { isLoading, onClick, label } = props;

  return (
    <Box sx={{ position: 'relative' }}>
      <Button variant="contained" disabled={isLoading} onClick={onClick} fullWidth>
        {label}
      </Button>
      {isLoading && (
        <CircularProgress
          size={24}
          sx={{
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      )}
    </Box>
  );
};

export default LoadingButton;

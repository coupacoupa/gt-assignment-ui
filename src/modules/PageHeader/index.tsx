import { Card, Paper, Typography } from '@mui/material';
import './style.scss';

interface IProps {
  title: string;
  subTitle: string;
}

const PaperHeader = (props: IProps) => {
  const { title, subTitle } = props;
  return (
    <Paper elevation={0} square className={'root'}>
      <div className={'pageHeader'}>
        <div className={'pageTitle'}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
        <div className={'pageChildren'}></div>
      </div>
    </Paper>
  );
};

export default PaperHeader;

import { Typography } from '@mui/material';
import './style.scss';

interface IProps {
  title: string;
  subTitle: string;
}

const PaperHeader = (props: IProps) => {
  const { title, subTitle } = props;

  return (
    <div className={'pageHeader'}>
      <Typography variant="h4" component="div">
        {title}
      </Typography>
      <Typography variant="subtitle2" component="div">
        {subTitle}
      </Typography>
    </div>
  );
};

export default PaperHeader;

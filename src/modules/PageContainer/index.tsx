import { Breakpoint, Container, Paper } from '@mui/material';

interface IProps {
  children: JSX.Element;
  maxWidth: Breakpoint | false;
}

const paperStyle = { padding: 20, margin: '10px auto' };

const PageContainer = (props: IProps) => {
  const { children, maxWidth } = props;

  return (
    <Container maxWidth={maxWidth}>
      <Paper elevation={1} style={paperStyle}>
        {children}
      </Paper>
    </Container>
  );
};

export default PageContainer;

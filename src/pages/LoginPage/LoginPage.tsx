import { Breakpoint, Container, Paper } from '@mui/material';
import PageContainer from 'modules/PageContainer';
import PaperHeader from 'modules/PageHeader';
import LoginForm from './components/Form';

const LoginPage = () => {
  return (
    <PageContainer maxWidth={'xs'}>
      <>
        <PaperHeader title={'Login'} subTitle={'Login to view your submissions'} />
        <LoginForm />
      </>
    </PageContainer>
  );
};

export default LoginPage;

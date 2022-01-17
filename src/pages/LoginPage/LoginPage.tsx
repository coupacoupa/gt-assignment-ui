import PaperHeader from 'modules/PageHeader';
import LoginForm from './components/Form';

const LoginPage = () => {
  return (
    <div>
      <PaperHeader title={'Login'} subTitle={'Login to view your submissions'} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;

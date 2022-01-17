import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import LoadingButton from 'common/components/Buttons/ProgressButton';
import { FormInputText } from 'common/components/ReactHookFormInputs';
import { useUser } from 'common/contexts/userContext';
import { IUser } from 'common/types/user';
import { loginFormSchema } from 'common/utils/formValidationUtil';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useUser();

  const { control, handleSubmit } = useForm<IUser>({ resolver: yupResolver(loginFormSchema) });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (data: IUser) => {
    setIsLoading(true);
    setCurrentUser(data);
    navigate('/status');
  };

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { my: 1 },
      }}
    >
      <FormInputText name="email" control={control} label="Email" />
      <FormInputText name="contactNumber" control={control} label="Contact Number" />

      <LoadingButton onClick={handleSubmit(onSubmit)} isLoading={isLoading} label="Login" />
    </Box>
  );
};

export default LoginForm;

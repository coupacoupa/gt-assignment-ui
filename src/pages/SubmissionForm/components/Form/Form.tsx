import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { eventNames } from 'process';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCreateNewSubmission } from '../../../../hooks/submission';
import { ISubmissionForm } from '../../../../types/submission';
import { FormInputText, FormInputMultiText } from '../../../../components/ReactHookFormInputs';
import LoadingButton from '../../../../components/Buttons/ProgressButton';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { submissionFormSchema } from '../../../../utils/formValidationUtil';

const Form = () => {
  const paperStyle = { padding: 20, margin: '20px auto' };
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<ISubmissionForm>({ resolver: yupResolver(submissionFormSchema) });

  const { isLoading, isSuccess, isError, data, error, mutate } = useCreateNewSubmission();

  const onSubmit = (data: ISubmissionForm) => {
    console.log(data);
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) navigate('/submitted');
  }, [isSuccess]);

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { my: 1 },
      }}
    >
      <Paper elevation={10} style={paperStyle}>
        <FormInputText name="name" control={control} label="Name" />
        <FormInputText name="email" control={control} label="Email" />
        <FormInputText name="contactNumber" control={control} label="Contact Number" />
        <FormInputText name="agencyName" control={control} label="Agency Name" />

        <FormInputMultiText name="feedback" control={control} label="Feedback" />

        <LoadingButton onClick={handleSubmit(onSubmit)} isLoading={isLoading} label="Submit" />
      </Paper>
    </Box>
  );
};

export default Form;

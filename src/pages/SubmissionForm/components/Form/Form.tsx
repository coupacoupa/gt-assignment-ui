import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { eventNames } from 'process';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCreateNewSubmission } from '../../../../hooks/submission';
import { ISubmissionForm } from '../../../../types/submission';
import { FormInputText, FormInputMultiText } from '../../../../components/ReactHookFormInputs';

const Form = () => {
  const paperStyle = { padding: 20, margin: '20px auto' };
  const btnStyle = { margin: '8px 0' };

  const { control, handleSubmit } = useForm<ISubmissionForm>();

  const { isLoading, isError, data, error, mutate } = useCreateNewSubmission();

  const onSubmit = (data: ISubmissionForm) => {
    console.log(data);
    mutate(data);
  };

  return (
    <Box
      component="form"
      onSubmit={() => handleSubmit(onSubmit)}
      sx={{
        '& .MuiTextField-root': { my: 1 },
      }}
    >
      <Paper elevation={10} style={paperStyle}>
        <FormInputText name="name" control={control} required={true} label="Name" />
        <FormInputText name="email" control={control} required={true} label="Email" />
        <FormInputText name="contactNumber" control={control} required={true} label="Contact Number" />
        <FormInputText name="agencyName" control={control} required={true} label="Agency Name" />

        <FormInputMultiText name="feedback" control={control} required={true} label="Feedback" />

        <Button variant="contained" style={btnStyle} onClick={handleSubmit(onSubmit)} fullWidth>
          Submit
        </Button>
      </Paper>
    </Box>
  );
};

export default Form;

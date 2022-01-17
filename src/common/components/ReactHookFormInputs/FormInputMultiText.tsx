import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

interface IProps {
  name: string;
  control: any;
  label?: string;
  setValue?: any;
}

const FormInputMultiText = (props: IProps) => {
  const { control, name, label } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          multiline
          rows={8}
          fullWidth
          error={!!error}
          helperText={error?.message || null}
        />
      )}
    />
  );
};

export default FormInputMultiText;

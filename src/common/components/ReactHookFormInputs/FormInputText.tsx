import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

interface IProps {
  name: string;
  control: any;
  label?: string;
  setValue?: any;
}

const FormInputText = (props: IProps) => {
  const { control, name, label } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} label={label} fullWidth error={!!error} helperText={error?.message || null} />
      )}
      defaultValue=""
    />
  );
};

export default FormInputText;

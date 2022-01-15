import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

interface IProps {
  name: string;
  control: any;
  label?: string;
  setValue?: any;
  required: boolean;
}

const FormInputMultiText = (props: IProps) => {
  const { control, name, label } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => <TextField {...field} label={label} multiline rows={8} fullWidth />}
    />
  );
};

export default FormInputMultiText;

import './styles.css';
import { Spin } from '../Spin';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input" >
      <input type='text' {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}
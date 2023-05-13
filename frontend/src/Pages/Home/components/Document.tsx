import { InputProps } from '../../../helpers/validationForm'
import { FormInput } from '../styles'

export default function DocumentInput({ register }: InputProps) {
  return (
    <label>
      CPF:
      <FormInput
        type="text"
        placeholder="CPF"
        {...register('document')}
        required
      />
    </label>
  )
}

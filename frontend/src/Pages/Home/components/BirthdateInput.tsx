import { InputProps } from '../../../helpers/validationForm'
import { FormInput } from '../styles'

export default function BirthdateInput({ register }: InputProps) {
  return (
    <label>
      Data de nascimento:
      <FormInput
        type="date"
        placeholder="Data de nascimento"
        {...register('birthdate')}
        required
        title="Você deve ter mais de 18 anos"
      />
    </label>
  )
}

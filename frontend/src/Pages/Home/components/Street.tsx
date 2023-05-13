import { InputProps } from '../../../helpers/validationForm'
import { FormInput } from '../styles'

export default function StreetInput({ register }: InputProps) {
  return (
    <label>
      Endereço:
      <FormInput
        type="text"
        placeholder="Endereço"
        {...register('street')}
        required
      />
    </label>
  )
}

import { InputProps } from '../../../helpers/validationForm'
import { FormInput } from '../styles'

export default function CityInput({ register }: InputProps) {
  return (
    <label>
      Cidade:
      <FormInput
        type="text"
        placeholder="Cidade"
        {...register('city')}
        required
      />
    </label>
  )
}

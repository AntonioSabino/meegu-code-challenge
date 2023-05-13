import { InputProps } from '../../../helpers/validationForm'
import { FormInput } from '../styles'

export default function NeighborhoodInput({ register }: InputProps) {
  return (
    <label>
      Bairro:
      <FormInput
        type="text"
        placeholder="Bairro"
        {...register('neighborhood')}
        required
      />
    </label>
  )
}

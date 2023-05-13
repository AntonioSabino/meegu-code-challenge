import { InputProps } from '../../../helpers/validationForm'
import { FormInput } from '../styles'

export default function NameInput({ register }: InputProps) {
  return (
    <label>
      Nome completo:
      <FormInput
        type="text"
        placeholder="Nome completo"
        {...register('name')}
        required
      />
    </label>
  )
}

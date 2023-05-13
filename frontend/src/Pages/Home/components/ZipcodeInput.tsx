import { InputProps } from '../../../helpers/validationForm'
import { FormInput } from '../styles'

export default function ZipcodeInput({ register }: InputProps) {
  return (
    <label>
      CEP:
      <FormInput
        type="text"
        placeholder="CEP"
        {...register('zipcode')}
        required
        title="Digite um CEP válido com 8 números"
      />
    </label>
  )
}

import { InputProps } from '../../../helpers/validationForm'

export default function TermsCheckbox({ register }: InputProps) {
  return (
    <label>
      <span>Aceitar termos e condições:</span>
      <input
        type="checkbox"
        {...register('acceptedTermsAndConditions')}
        required
      />
    </label>
  )
}

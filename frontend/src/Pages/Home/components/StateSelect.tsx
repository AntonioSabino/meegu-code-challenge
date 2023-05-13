import { states } from '../../../data/states'
import { InputProps } from '../../../helpers/validationForm'
import { Select } from '../styles'

export default function StateSelect({ register }: InputProps) {
  return (
    <label>
      Estado:
      <Select id="state" {...register('state')} required>
        <option value="">UF</option>
        {states.map((state) => (
          <option key={state.uf} value={state.uf}>
            {state.uf}
          </option>
        ))}
      </Select>
    </label>
  )
}

import * as zod from 'zod'
import { states } from '../../data/states'
import {
  ButtonSubmit,
  CepInputContainer,
  CityStateContainer,
  Form,
  FormInput,
  FormTitle,
  HomeContainer,
  Select,
} from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = zod.object({
  nome: zod.string().min(2).max(100),
  birthDate: zod.string().refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value)),
  zipCode: zod.string().length(8),
  address: zod.string().min(3).max(100),
  neighborhood: zod.string().min(3).max(100),
  city: zod.string().min(3).max(100),
  state: zod.string().length(2),
})

type FormInputs = zod.infer<typeof formSchema>

export default function Home() {
  const { register, handleSubmit, reset } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      birthDate: '',
      zipCode: '',
      address: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const handleCreateUser = (data: FormInputs) => {
    console.log(data)
    reset()
  }

  return (
    <HomeContainer>
      <Form onSubmit={handleSubmit(handleCreateUser)}>
        <FormTitle>Cadastre-se</FormTitle>
        <label>
          Nome completo:
          <FormInput
            type="text"
            placeholder="Nome completo"
            {...register('nome')}
            required
          />
        </label>
        <label>
          Data de nascimento:
          <FormInput
            type="date"
            placeholder="Data de nascimento"
            {...register('birthDate')}
            required
          />
        </label>
        <CepInputContainer>
          <label>
            CEP:
            <FormInput
              type="text"
              placeholder="CEP"
              {...register('zipCode')}
              required
            />
          </label>
          <button>Pesquisar</button>
        </CepInputContainer>
        <label>
          Endereço:
          <FormInput
            type="text"
            placeholder="Endereço"
            {...register('address')}
            required
          />
        </label>
        <label>
          Bairro:
          <FormInput
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
            required
          />
        </label>
        <CityStateContainer>
          <label>
            Cidade:
            <FormInput
              type="text"
              placeholder="Cidade"
              {...register('city')}
              required
            />
          </label>
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
        </CityStateContainer>
        <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
      </Form>
    </HomeContainer>
  )
}

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
import { api } from '../../lib/axios'

const formSchema = zod.object({
  name: zod.string().min(2).max(100),
  birthdate: zod.string().refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value)),
  document: zod.string().length(11),
  acceptedTermsAndConditions: zod.boolean(),
  zipcode: zod.string().length(8),
  street: zod.string().min(3).max(100),
  neighborhood: zod.string().min(3).max(100),
  city: zod.string().min(3).max(100),
  state: zod.string().length(2),
})

type FormInputs = zod.infer<typeof formSchema>

export default function Home() {
  const { register, handleSubmit, reset } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      birthdate: '',
      document: '98745632145',
      acceptedTermsAndConditions: true,
      zipcode: '',
      street: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const handleCreateUser = async (data: FormInputs) => {
    const user = {
      ...data,
      birthdate: new Date(data.birthdate).toISOString(),
    }

    api
      .post('/users', user)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

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
            {...register('name')}
            required
          />
        </label>
        <label>
          Data de nascimento:
          <FormInput
            type="date"
            placeholder="Data de nascimento"
            {...register('birthdate')}
            required
          />
        </label>
        <CepInputContainer>
          <label>
            CEP:
            <FormInput
              type="text"
              placeholder="CEP"
              {...register('zipcode')}
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
            {...register('street')}
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

import { states } from '../../data/states'
import {
  BirthdateDocumentContainer,
  ButtonSubmit,
  CepInputContainer,
  CityStateContainer,
  Form,
  FormInput,
  FormTitle,
  HomeContainer,
  Select,
  TermsContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import { FormInputs, formSchema } from '../../helpers/validationForm'

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      birthdate: '',
      document: '',
      acceptedTermsAndConditions: false,
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
        <BirthdateDocumentContainer>
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
          <label>
            CPF:
            <FormInput
              type="text"
              placeholder="CPF"
              {...register('document')}
              required
            />
          </label>
        </BirthdateDocumentContainer>
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
        <TermsContainer>
          <label>
            <span>Aceitar termos e condições:</span>
            <input
              type="checkbox"
              {...register('acceptedTermsAndConditions')}
              required
            />
          </label>
        </TermsContainer>
        <ButtonSubmit type="submit" disabled={!isValid}>
          Cadastrar
        </ButtonSubmit>
      </Form>
    </HomeContainer>
  )
}

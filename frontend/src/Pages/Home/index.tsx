import {
  BirthdateDocumentContainer,
  ButtonSubmit,
  CepInputContainer,
  CityStateContainer,
  Form,
  FormTitle,
  HomeContainer,
  TermsContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUser, searchAddress } from '../../lib/axios'
import { FormInputs, formSchema } from '../../helpers/validationForm'
import NameInput from './components/NameInput'
import BirthdateInput from './components/BirthdateInput'
import DocumentInput from './components/Document'
import ZipcodeInput from './components/ZipcodeInput'
import StreetInput from './components/Street'
import NeighborhoodInput from './components/NeighborhoodInput'
import CityInput from './components/CityInput'
import StateSelect from './components/StateSelect'
import TermsCheckbox from './components/TermsCheckbox'

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
    getValues,
    setValue,
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

    await createUser(user)

    reset()
  }

  const handleSearchAddress = async (zipcode: string) => {
    const response = await searchAddress(zipcode)
    setValue('street', response.logradouro)
    setValue('neighborhood', response.bairro)
    setValue('city', response.localidade)
    setValue('state', response.uf)
  }

  return (
    <HomeContainer>
      <Form onSubmit={handleSubmit(handleCreateUser)}>
        <FormTitle>Cadastre-se</FormTitle>
        <NameInput register={register} />
        <BirthdateDocumentContainer>
          <BirthdateInput register={register} />
          <DocumentInput register={register} />
        </BirthdateDocumentContainer>
        <CepInputContainer>
          <ZipcodeInput register={register} />
          <button
            type="button"
            onClick={() => handleSearchAddress(getValues().zipcode)}
          >
            Pesquisar
          </button>
        </CepInputContainer>
        <StreetInput register={register} />
        <NeighborhoodInput register={register} />
        <CityStateContainer>
          <CityInput register={register} />
          <StateSelect register={register} />
        </CityStateContainer>
        <TermsContainer>
          <TermsCheckbox register={register} />
        </TermsContainer>
        <ButtonSubmit type="submit" disabled={!isValid}>
          Cadastrar
        </ButtonSubmit>
      </Form>
    </HomeContainer>
  )
}

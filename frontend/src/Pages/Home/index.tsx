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

export default function Home() {
  return (
    <HomeContainer>
      <Form>
        <FormTitle>Cadastre-se</FormTitle>
        <label>
          Nome completo:
          <FormInput type="text" placeholder="Nome completo" />
        </label>
        <label>
          Data de nascimento:
          <FormInput type="date" placeholder="Data de nascimento" />
        </label>
        <CepInputContainer>
          <label>
            CEP:
            <FormInput type="text" placeholder="CEP" />
          </label>
          <button>Pesquisar</button>
        </CepInputContainer>
        <label>
          Endereço:
          <FormInput type="text" placeholder="Endereço" />
        </label>
        <label>
          Bairro:
          <FormInput type="text" placeholder="Bairro" />
        </label>
        <CityStateContainer>
          <label>
            Cidade:
            <FormInput type="text" placeholder="Cidade" />
          </label>
          <label>
            Estado:
            <Select name="state" id="state">
              <option value="state">UF</option>
              {states.map((state) => (
                <option key={state.uf} value={state.name}>
                  {state.uf}
                </option>
              ))}
            </Select>
          </label>
        </CityStateContainer>
        <ButtonSubmit type="submit" disabled>
          Cadastrar
        </ButtonSubmit>
      </Form>
    </HomeContainer>
  )
}

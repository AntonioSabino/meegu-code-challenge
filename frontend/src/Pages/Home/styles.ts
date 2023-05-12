import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme.colors['gray-500']};
  border-radius: 1rem;
  padding: 2rem 1rem;

  width: 27rem;

  label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 100%;

    font-weight: 500;
  }
`

export const FormTitle = styled.h1`
  font-weight: 500;
`

export const CepInputContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;

  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors['pink-500']};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    padding: 1rem;
  }
`

export const CityStateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.25fr;
  gap: 1rem;
  width: 100%;
`

export const FormInput = styled.input`
  max-width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-300']};
    font-weight: 700;
  }
`
export const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: 500;
`

export const ButtonSubmit = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors['pink-500']};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors['pink-700']};
    cursor: not-allowed;
  }

  &:enabled:hover {
    background-color: ${({ theme }) => theme.colors['pink-300']};
  }
`

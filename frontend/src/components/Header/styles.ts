import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
  width: 100%;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    background-color: ${({ theme }) => theme.colors['pink-500']};
    border: none;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors['gray-100']};
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors['pink-700']};
    }
  }
`

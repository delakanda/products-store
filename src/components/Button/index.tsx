import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.olive};
  background-color: ${({ theme }) => theme.colors.olive};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.padding.md};
  min-width: 180px;
`
export default Button

import styled from 'styled-components'

type ButtonProps = {
  width?: string
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.olive};
  background-color: ${({ theme }) => theme.colors.olive};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.padding.md};
  min-width: 180px;
  width: ${(props) => props.width || 'auto'};
`
export default Button

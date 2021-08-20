import styled from 'styled-components'

export const StyledCart = styled.div`
  padding: ${({ theme }) => theme.padding.md};
  max-width: 800px;
  min-width: 500px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
`

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.padding.md};
  margin-top: ${({ theme }) => theme.margin.md};
`

export const StyledCartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledCartItemImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding: 0px ${({ theme }) => theme.padding.md};
  text-align: center;

  & img {
    overflow: hidden;
    height: 80px;
    width: auto;
    -o-object-fit: contain;
    object-fit: contain;
  }
`
export const StyledCloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  left: ${({ theme }) => theme.padding.md};
  top: ${({ theme }) => theme.padding.md};
`

export const StyledSubTotalSection = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  min-width: 100%;
  min-height: 150px;
  margin-left: -${({ theme }) => theme.padding.md};
  padding: ${({ theme }) => theme.padding.md};
  box-shadow: ${({ theme }) => theme.boxShadows.extremeBottom};
`

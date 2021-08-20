import React from 'react'
import styled from 'styled-components'
import FlexBox from '../FlexBox'
import Link from '../NavLink'
import Image from '../Image'
import LogoAsset from '@assets/logo.png'
import CartIcon from '../CartIcon'
import { useSelector } from 'react-redux'
import { RootState } from '@app/reduxtoolkit/store'
import { getCartQuantity } from '@app/utls/Cart'

const StyledHeader = styled.div`
  padding: ${({ theme }) => `${theme.margin.sm} ${theme.margin.lg}`};
  box-shadow: ${({ theme }) => theme.boxShadows.minimal};
  display: flex;
`

const extraLinkProps = {
  paddingCombo: '0.25rem 1rem',
  marginCombo: '0 1rem 0 0'
}

function Header () {
  const { items } = useSelector((state: RootState) => state.cartSlice)

  return (
    <StyledHeader>
      <Image imgSrc={LogoAsset} />
      <FlexBox
        alignSelf='center'
        marginCombo='0 0 0 4rem'
      >
        <Link to='#' linkText='Shop' {...extraLinkProps} />
        <Link to='#' linkText='About' {...extraLinkProps} />
        <Link to='#' linkText='Support' {...extraLinkProps} />
        <Link to='#' linkText='Blog' {...extraLinkProps} />
      </FlexBox>

      <FlexBox
        alignSelf='center'
        pushItem='right'
      >
        <Link to='#' linkText='Account' lineHeight='25px' paddingCombo='0px 1rem'></Link>
        <CartIcon cartTotalQuantity={getCartQuantity(items)} />
      </FlexBox>
    </StyledHeader>
  )
}

export default Header

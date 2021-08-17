import React from 'react'
import styled from 'styled-components'

type ImageProps = {
  imgSrc: string
  inline?: boolean
  width?: string
}

const StyledImage = styled.div<ImageProps>`
  display: ${(props) => props.inline ? 'inline-block' : 'block'};
  width: ${(props) => props.width || '150px'};

  & img { max-width: 100%; height: 100% }
`

function Image ({ ...props }: ImageProps) {
  return (
    <StyledImage {...props}>
      <img src={ props.imgSrc } />
    </StyledImage>
  )
}

export default Image

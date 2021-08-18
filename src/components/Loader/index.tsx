import React from 'react'
import FlexBox from '@app/components/FlexBox'
import Image from '@app/components/Image'
import LoaderAsset from '@assets/loader.svg'

function Loader () {
  return (
    <FlexBox
      marginCombo='20px auto'
      justifyContent='center'
    >
      <Image imgSrc={LoaderAsset} />
    </FlexBox>
  )
}

export default Loader

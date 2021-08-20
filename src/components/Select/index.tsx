import { SelectOption } from '@app/types/Select'
import React from 'react'
import styled from 'styled-components'

type SelectProps = {
  options: SelectOption[]
  selected: SelectOption
  onChange?: (e: React.FormEvent<HTMLSelectElement>) => void
}

const StyledSelect = styled.select`
  margin: ${({ theme }) => theme.margin.md} 0;
  padding: ${({ theme }) => theme.padding.sm} ${({ theme }) => theme.padding.md};
`

function Select ({ options, selected, onChange }: SelectProps) {
  return (
    <StyledSelect onChange={onChange} value={selected.value}>
      {options.map((opt, key) => {
        return <option key={key} value={opt.value}>{opt.label}</option>
      })}
    </StyledSelect>
  )
}

export default Select

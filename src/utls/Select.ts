import { SelectOption } from '@app/types/Select'

export const convertToSelectOption = (value: string): SelectOption => {
  return { label: value, value: value }
}

export const convertFlatToSelectOptions = (values: string[]): SelectOption[] => {
  return values.map(val => convertToSelectOption(val))
}

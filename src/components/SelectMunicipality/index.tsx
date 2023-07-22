import React from 'react'
import { forwardRef, SelectHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import { SelectWrapper, SelectStyleContainer, SelectStyled } from './styles'

type SearchableSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    error?: string
    options: string[]
}

// eslint-disable-next-line react/display-name
export const SelectMunicipality = forwardRef<
    HTMLSelectElement,
    SearchableSelectProps
>(({ error, options, className, ...props }, ref) => {
    return (
        <SelectWrapper className={className}>
            <SelectStyleContainer hasError={!!error}>
                <SelectStyled ref={ref} {...props}>
                    <option value="" disabled selected>
                        {className == 'province'
                            ? 'Tỉnh/Thành phố'
                            : className == 'district'
                            ? options
                                ? 'Quận/Huyện'
                                : 'Chọn tỉnh trước'
                            : options
                            ? 'Xã/Phường/Thị trấn'
                            : 'Chọn huyện trước'}
                    </option>
                    {(options ? options : []).map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </SelectStyled>
            </SelectStyleContainer>
            {error && <RegularText size="s">{error}</RegularText>}
        </SelectWrapper>
    )
})

const useFormatCurrency = () => {
    const format = (number: number | string) => {
        if (!number) {
            number = 0
        }
        // return number.toLocaleString('en-US', { style: 'currency', currency: 'VND', currencyDisplay: 'code' })
        return `${number} VNĐ`
    }
    return format
}

export default useFormatCurrency

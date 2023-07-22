import React, { useState } from 'react'
import { SearchContainer, Input, Button, Select } from './styles'
// import { TitleText } from '../Typography'
import { ProductType } from '../../@types/products'

interface Props {
    products: ProductType[]
    onSearch: (results: ProductType[]) => void
}

const SearchBar = ({ products, onSearch }: Props) => {
    const [searchText, setSearchText] = useState('')
    const [searchTag, setSearchTag] = useState('')
    const [searchType, setSearchType] = useState('name')
    const [disableSearch, setDisableSearch] = useState(true)
    // const [noResults, setNoResults] = useState(false)

    const handleSearchTextChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchText(event.target.value)
        checkSearchDisabled()
    }

    const handleSearchTagChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchTag(event.target.value)
        checkSearchDisabled()
    }

    const handleSearchTypeChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSearchType(event.target.value)
        checkSearchDisabled()
    }

    const checkSearchDisabled = () => {
        if (searchType === 'name') {
            setDisableSearch(searchText === '')
        } else {
            setDisableSearch(searchTag === '')
        }
    }

    const handleSearchClick = () => {
        const filteredProducts =
            searchType === 'name'
                ? products.filter((product) =>
                      product.name
                          .toLowerCase()
                          .includes(searchText.toLowerCase())
                  )
                : products.filter((product) =>
                      product.tags.some((tag) =>
                          tag.toLowerCase().includes(searchText.toLowerCase())
                      )
                  )
        onSearch(filteredProducts)
    }

    return (
        <SearchContainer>
            {searchType === 'name' ? (
                <Input
                    type="text"
                    value={searchText}
                    onChange={handleSearchTextChange}
                    placeholder="Name"
                />
            ) : (
                <Input
                    type="text"
                    value={searchTag}
                    onChange={handleSearchTagChange}
                    placeholder="Tag"
                />
            )}
            <Select value={searchType} onChange={handleSearchTypeChange}>
                <option value="name">Name</option>
                <option value="tag">Tag</option>
            </Select>
            <Button onClick={handleSearchClick} disabled={disableSearch}>
                Search
            </Button>
        </SearchContainer>
    )
}

export default SearchBar

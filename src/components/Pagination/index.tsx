import React from 'react'
import { PaginationContainer, PaginationButton } from './styles'

type PaginationProps = {
    currentPage: number
    totalPages: number
    onPageChange: (pageNumber: number) => void
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <PaginationContainer>
            {pages.map((page) => (
                <PaginationButton
                    key={page}
                    isActive={page === currentPage}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </PaginationButton>
            ))}
        </PaginationContainer>
    )
}

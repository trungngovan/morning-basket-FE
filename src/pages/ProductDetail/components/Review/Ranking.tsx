import React, { useMemo } from 'react'
import { PiStarFill, PiStarHalfFill } from 'react-icons/pi'

type Props = {
    rank: number
    size?: number
}

const Ranking = ({ rank, size = 32 }: Props) => {
    const stars = useMemo(() => {
        const stars = []
        for (let i = 0; i < Math.floor(rank); i++) {
            stars.push(1)
        }
        if (rank > stars.length) stars.push(rank - stars.length)
        while (stars.length < 5) {
            stars.push(0)
        }
        return stars
    }, [rank])

    return (
        <div className="flex items-center gap-1">
            {stars.map((star, index) =>
                star === 1 || star === 0 ? (
                    <PiStarFill key={index} size={size} color="#FFD43B" />
                ) : (
                    <PiStarHalfFill key={index} size={size} color="#FFD43B" />
                )
            )}
        </div>
    )
}

export default Ranking

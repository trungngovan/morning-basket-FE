import { Star, StarHalf } from "phosphor-react";
import React, { useMemo } from "react";

type Props = {
  rank: number;
  size?: number;
};

const Ranking = ({ rank, size = 32 }: Props) => {
  const stars = useMemo(() => {
    const stars = [];
    for (let i = 0; i < Math.floor(rank); i++) {
      stars.push(1);
    }
    if (rank > stars.length) stars.push(rank - stars.length);
    while (stars.length < 5) {
      stars.push(0);
    }
    return stars;
  }, [rank]);

  return (
    <div className="flex items-center gap-1">
      {stars.map((star, index) =>
        star === 1 || star === 0 ? (
          <Star
            key={index}
            size={size}
            weight={star ? "fill" : "bold"}
            color="#FFD43B"
          />
        ) : (
          <StarHalf size={size} weight="fill" color="#FFD43B" />
        )
      )}
    </div>
  );
};

export default Ranking;

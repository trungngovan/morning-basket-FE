import Filter from './Filter'
import Ranking from './Ranking'
import UserReview from './UserReview'

const COMMENT = {
    user: {
        name: 'Nguyễn Văn A',
        imgUrl: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
    },
    content: 'Sản phẩm chất lượng 100 điểm',
    rank: 4,
    createdAt: new Date(),
    mediaUrls: [],
}

const Review = () => {
    return (
        <div className="mt-10 bg-white shadow p-10 rounded-2xl">
            <div className="bg-yellow-100 text-yellow-500 text-xl font-bold capitalize p-4 rounded-2xl">
                Đánh giá sản phẩm
            </div>
            <div className="flex items-center mt-6 rounded-2xl bg-gray-50 p-4 gap-6">
                <div>
                    <div className="text-xl font-bold text-center">
                        <span className="text-3xl text-yellow-400 mr-3">
                            4.7
                        </span>
                        trên 5
                    </div>
                    <Ranking rank={4.7} />
                </div>
                <Filter />
            </div>
            <div className="flex flex-col gap-6 mt-6">
                {[1, 2, 3].map((index) => (
                    <UserReview key={index} comment={COMMENT} />
                ))}
            </div>
        </div>
    )
}

export default Review

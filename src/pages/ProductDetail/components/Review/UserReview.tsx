import React from 'react'
import { Comment } from '../../../../@types/comment'
import Ranking from './Ranking'

type Props = {
    comment: Comment
}

const UserReview = ({ comment }: Props) => {
    const { user, content, createdAt, rank, mediaUrls } = comment
    return (
        <div className="flex items-start gap-4">
            <div className="w-14 h-14">
                <img alt="avatar" src={user.imgUrl} className="w-full h-full" />
            </div>
            <div>
                <div className="font-bold text-xl mb-1">{user.name}</div>
                <Ranking rank={rank} size={20} />
                <div className="my-1">{content}</div>
                <div className="text-gray-500 text-sm font-bold">
                    {createdAt.toLocaleDateString()}
                </div>
            </div>
        </div>
    )
}

export default UserReview

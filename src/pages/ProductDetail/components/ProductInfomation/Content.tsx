import { ReactNode } from 'react'
import { classNames } from '../../../../utils/classNames'

type Props = {
    label: string
    content: ReactNode
    className?: string
}

const Content = ({ label, content, className }: Props) => {
    return (
        <div className={classNames('flex items-center gap-5', className)}>
            <div className="text-lg font-bold">{label}:</div>
            <div className="font-medium">{content}</div>
        </div>
    )
}

export default Content

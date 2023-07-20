import React from 'react'
import { useState } from 'react'
import { classNames } from '../../../../utils/classNames'

type Props = {
    onChange?: (selected: string) => void
}

const Filter = ({ onChange }: Props) => {
    const [selected, setSelected] = useState('all')

    return (
        <div className="flex flex-wrap gap-3 text-center">
            {['all', '5', '4', '3', '2', '1'].map((item) => (
                <div
                    key={item}
                    onClick={() => setSelected(item)}
                    className={classNames(
                        'border-2 rounded-lg p-3 min-w-[80px] bg-white hover:border-yellow-400',
                        {
                            'border-yellow-400 font-bold text-yellow-500':
                                item === selected,
                        }
                    )}
                >
                    {item === 'all' ? 'Tất cả' : `${item} sao`}
                </div>
            ))}
        </div>
    )
}

export default Filter

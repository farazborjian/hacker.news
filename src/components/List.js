import React from 'react'
import TableRow from './TableRow'

const List = ({news}) => {
    return (
        <div>
            {news?.map((item, index) => <TableRow index={index} item={item.data} key={index} />)}
        </div>
    )
}

export default List

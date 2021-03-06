import React, { useState } from 'react';
import usersCss from './Paginator.module.css';


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    
    let pagesCount = Math.ceil (totalItemsCount / pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={usersCss.paginator}>
        {portionNumber > 1 &&
        <button onClick={ () => { setPortionNumber(portionNumber - 1)}}>PREV</button>}

            {pages.map(p => {
                return <span className={currentPage === p && usersCss.selectedPage}
                onClick={(e) => {onPageChanged(p);}}>{p}</span>
            })}
        </div>
}
export default Paginator;
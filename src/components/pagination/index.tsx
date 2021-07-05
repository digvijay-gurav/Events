import React from 'react'
import "./styles.css";
import { pagination } from "../../types/interfaces";

const index: React.FC<{pagination: number, currentPage: number, setCurrentPage: Function, fetchEventsData: Function}> = ({pagination, currentPage, setCurrentPage, fetchEventsData}) => {

        let totalPageCount: Array<number> = [];
        for(let i =0; i < Math.ceil(pagination/10); i++) {
            totalPageCount.push(i);
        }

        function fetchNextPage(offset: number, pageSelected: number) {
            setCurrentPage(pageSelected);
            const searchParams = {
                "limit": 10,
                "offset": offset
            }
            fetchEventsData(searchParams)
        }

        function createPagination() {
            let paginationRow = totalPageCount.map((pageNumber, index) => {
                return (
                    <div onClick={()=>fetchNextPage(index*10, pageNumber+1)} className={currentPage === pageNumber+1 ? "selectedPage paginationCell" : "paginationCell"} key={index}>
                        <span>{pageNumber+1}</span>
                    </div>
                )
            })
            return paginationRow;
        }
    return (
        <div className="paginationWrapper">
            {createPagination()}
        </div>
    )
}
export default index
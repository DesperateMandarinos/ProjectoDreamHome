import { Button } from "@mui/joy";
import React from "react";

const styles = {
    paginationContainer: {
        maxWidth: '100%',
        overflowX: 'auto',
        },
        paginationList: {
        display: 'flex',
        listStyle: 'none',
        padding: 0,
        },
        pageItem: {
        marginRight: '10px',
        },
    };
const Pages = ({ housesPerPage, totalHouses, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i  <= Math.ceil(totalHouses / housesPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <div style={styles.paginationContainer}>
            <ul style={styles.paginationList}>
                {pageNumbers.map((number) => (
                <li key={number}style={styles.pageItem}  className="page-item">
                    <Button onClick={()=>paginate(number)} className="page-link">
                    {number}
                    </Button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Pages
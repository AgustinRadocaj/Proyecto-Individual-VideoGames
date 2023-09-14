import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {getByName} from "../../Redux/actions";
import styles from "./SearchBar.module.css"

const SearchBar = () => {
    const [search, setSearch] = useState("")
    const Dispatch = useDispatch()

    const searchHandle = (event) =>{
      setSearch(event.target.value)
      searchChange(event.target.value)
    }
    const searchChange = (value) => {
      Dispatch(getByName(value))
    }
    return (
        <div>
            <input
                className={styles.Search}
                type="text"
                placeholder="Busca por nombre"
                onChange={searchHandle}
                value={search}
            />
        </div>
    );
};

export default SearchBar;







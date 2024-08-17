'use client';

import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import magnifyingGlass from '../../public/image/Magnifying_glass2.svg';
import { fetchSearchData } from '@/utils/fetchSearchApi'


import { useQuery } from '@tanstack/react-query';
import {useRecoilState, useSetRecoilState} from "recoil";
import {foodListDataState} from "@/atoms/atoms";


const SearchBar = () => {

    const { data, error } = useQuery({
        queryKey: ['search'],queryFn: fetchSearchData
    });
    const setFoodData = useSetRecoilState(foodListDataState);
    setFoodData(data?.results);


    const [input, setInput] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInput(e.target.value)
    }


    const clickSearchBtn = () =>{
        setFoodData(data?.results)
    }


    //const { data, error, isLoading } = useQuery(['data'], fetchData);
  return(
    <Wrapper>
        <input type="text"
               placeholder="What do you want to eat?"
               className="search-input"
               value={input}
               onChange={handleInputChange}
        />
     <Image src={magnifyingGlass} alt={"magnifyingGlass"} width={40} height={40} style={{display: "flex", marginRight:'10px',cursor:'pointer'}} onClick={clickSearchBtn}/>
    </Wrapper>
)
}


const Wrapper = styled.div`
    width:60%;
    height:55px;
    background:white;
    display:flex;
    justify-content: space-between;
    align-items:center;
    
    .search-input {
        width:50%;
        height:100%;
        background:white;
        color:black;
        border:none;
        margin-left:10px;
        font-size:16px;

       :focus {
           
            outline: none; /* 기본 outline 제거 */
       
        }
    }
`


export default SearchBar;
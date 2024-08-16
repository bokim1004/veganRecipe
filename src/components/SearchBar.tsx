'use client';

import {useState} from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import magnifyingGlass from '../../public/image/Magnifying_glass2.svg';
import { fetchSearchData } from '@/utils/fetchSearchApi'


import { useQuery ,QueryKey} from '@tanstack/react-query';
import {useEffect} from "react";

const SearchBar = () => {
    const queryKey: QueryKey = ["search"];
    const { data, error,refetch } = useQuery({
        queryKey: ['search'],queryFn: fetchSearchData,  enabled: false, // API 호출 함수
    });

    const [jsonData, setJsonData] = useState<string | null>(null);

    const handleClick = () => {

        if (data) {

            // 데이터가 있을 때 JSON 문자열로 변환
            const jsonString = JSON.stringify(data, null, 2);
            setJsonData(jsonString);
        } else {
            setJsonData(null);
        }
    };
    console.log("data",data);

    //const { data, error, isLoading } = useQuery(['data'], fetchData);
  return(
    <Wrapper>
        <input type="text"
               placeholder="What do you want to eat?"
               className="search-input"/>
     <Image src={magnifyingGlass} alt={"magnifyingGlass"} width={40} height={40} style={{display: "flex", marginRight:'10px',cursor:'pointer'}} onClick={() => refetch()}/>
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
        width:40%;
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
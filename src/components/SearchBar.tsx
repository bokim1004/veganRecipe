import styled from "@emotion/styled";
import Image from "next/image";
import magnifyingGlass from '../../public/image/Magnifying_glass2.svg'

const SearchBar = () => {
return(
    <Wrapper>
        <input type="text"
               placeholder="What do you want to eat?"
               className="search-input"/>
     <Image src={magnifyingGlass} alt={"magnifyingGlass"} width={40} height={40} style={{display: "flex", marginRight:'10px',cursor:'pointer'}}/>
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
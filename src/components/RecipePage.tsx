import styled from "@emotion/styled";
import {recipeDataState} from "@/atoms/atoms";
import {useRecoilValue} from "recoil";


export default function RecipePage() {
    const recipeData = useRecoilValue(recipeDataState)

    return(
        <Wrapper></Wrapper>
    )
}

const Wrapper = styled.div``
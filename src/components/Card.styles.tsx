import styled from "styled-components";

import Gender from './Gender';

type Props = {
    color: string;
};

// background: ${(props) => props.characterId > 5 ? 'orange' : 'black'};

export const StyledGender = styled(Gender)<Props>`

background: ${(props) => props.color};
border-radius: 7px;
padding: 4px;


`;



export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
width: 500px;
height: 420px;
padding-bottom: 20px;
background: lightpink;
border-radius: 1rem;
box-sizing: border-box;


img {
    border-radius: 1rem;
border: 1px solid lightcoral;
width: 350px;
height: auto;
object-fit: cover;
box-sizing: border-box;
}


`;
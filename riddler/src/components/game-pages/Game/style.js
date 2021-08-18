import styled from 'styled-components'


export const GameContainer = styled.div`
background-color: black;
overflow-x: hidden;
color:white;
align-items: center;
height:100vh;
width:100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
`;

export const RiddlerLogo = styled.img`
height:10%;
margin-bottom: 5%;
pointer-events:none;
@media screen and (max-width: 700px) {
    width:90%;
  }
`

export const ButtonContainer = styled.div`
height:12%;
display:flex;
flex-direction: row;
justify-content: center;
img{
    padding:0 20px;
    cursor: pointer;
}
@media screen and (max-width: 700px) {
    img{
    height: 80%;    
    }
  }
`
import Layout from "../../game-navbar/Layout";

const Rules = () =>{
    return(
        <Layout backgroundColor={getComputedStyle(document.documentElement).getPropertyValue('--guide-bg')}/>
    )
}
export default Rules;
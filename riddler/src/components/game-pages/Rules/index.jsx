import Layout from "../../game-navbar/Layout";

const Guide = () =>{
    return(
        <Layout backgroundColor={getComputedStyle(document.documentElement).getPropertyValue('--guide-bg')}/>
    )
}
export default Guide;
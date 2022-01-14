import css from "styled-jsx/css";
import { fonts, colors, brackpoints } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";

const backgoudColor = addOpacityToColor(colors.primary, 0.4);

export const gobalStyle = css.global`
  body {
    background-image: radial-gradient(${backgoudColor} 1px, transparent 1px),
      radial-gradient(${backgoudColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    font-family: ${fonts.base};
    margin: 0em;
  }
`;
export default css` 
    div{
        display: grid;
        height: 100vh;
        place-items: center;
    }

    textarea,input{
      font-family: ${fonts.base};
    }

    main {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,.1);
        height: 100%;
        width: 100vw;
        overflow-y : auto;
        
    } 
    @media (min-width: ${brackpoints.mobile}){

        main{
            height: 90vh;
            max-width:  ${brackpoints.mobile};
            width:100%;
            
        }
    }
        
    }
`;

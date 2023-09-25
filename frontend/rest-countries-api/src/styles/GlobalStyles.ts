import {createGlobalStyle} from 'styled-components'

interface GlobalProps {
    mode?: boolean
}

export const GlobalStyles = createGlobalStyle<GlobalProps>`


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        transition: all ease 0.3s;
        background-color: ${({mode}) => mode ? 'hsl(207, 26%, 17%)' : ''};
    }
`
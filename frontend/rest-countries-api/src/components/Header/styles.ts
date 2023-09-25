import styled from 'styled-components'

interface Props {
    mode?: boolean
}

export const Container = styled.div<Props>`
    width: 100%;
    padding-inline: 8rem;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    background-color: ${({ mode }) => mode ? 'hsl(209, 23%, 22%)' : ''};
    color: ${({ mode }) => mode ? 'hsl(0, 0%, 100%)' : ''};

    @media(max-width: 1030px) {
        padding-inline: 5rem;
    }

    @media(max-width: 675px) {
        padding-inline: 3rem;
    }

    @media(max-width: 375px) {
        padding-inline: 1rem;
    }
`

export const LightMode = styled.div`
    display: ${({ mode }) => mode ? 'none' : 'block'};
    

    .iconSun {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
    }
`

export const DarkMode = styled.div`
    display: ${({ mode }) => mode ? 'block' : 'none'};
    
    .iconMoon {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
    }
`
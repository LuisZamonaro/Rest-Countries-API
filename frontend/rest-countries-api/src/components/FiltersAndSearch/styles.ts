import styled from 'styled-components'

interface Props {
    mode?: boolean
}

export const Container = styled.div<Props>`
    width: 100%;
    padding-inline: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    input {
        background-color: ${({mode}) => mode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
    }

    @media(max-width: 1030px) {
        padding-inline: 5rem;
    }

    @media(max-width: 675px) {
        padding-inline: 3rem;
    }

    @media(max-width: 530px) {
        padding-inline: 3rem;
        flex-direction: column;
        align-items: baseline;
        gap: 30px;
    }

    @media(max-width: 375px) {
        padding-inline: 2rem;
    }

`

export const RightFilter = styled.div<Props>`
     select {
        width: 170px;
        height: 30px;
        padding-left: .5rem;
        border: none;
        outline: none;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        padding-bottom: 5px;
        background-color: ${({mode}) => mode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
        color: ${({mode}) => mode ? 'white' : ''};
    }
    
    @media(max-width: 530px) {
       
        select {
            height: 55px;
            
        }
    }

`

export const LeftFilter = styled.div`
    width: 320px;
    height: 40px;
    padding-left: 15px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;

    input {
        border: none;
        outline: none;
    }

    #iconSearch {
        width: 25px;
        margin-right: 10px;
    }

    @media(max-width: 1030px) {
        width: 250px;
    }

    @media(max-width: 675px) {
        padding-left: 5px;
        width: 200px;

        #iconSearch {
            width: 20px;
            margin-right: 5px;
        }

        @media(max-width: 530px) {
            width: 300px;
        }

        @media(max-width: 375px) {
            width: 200px;
        }
    }
`
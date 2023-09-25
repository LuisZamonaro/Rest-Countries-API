import styled from 'styled-components'

interface Props {
    mode?: boolean
}

export const GeralContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
    
`

export const Container = styled.div<Props>`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 50px; 
    

    @media(max-width: 1380px) {
        grid-template-columns: repeat(3, 1fr); 
    }

    @media(max-width: 1030px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media(max-width: 675px) {
        grid-template-columns: repeat(1, 1fr); 
    }
`

export const ContainerFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

`

export const RightFilter = styled.div`
     select {
        width: 150px;
        height: 30px;
        padding-left: .5rem;
        border: none;
        outline: none;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        padding-bottom: 5px;
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
`
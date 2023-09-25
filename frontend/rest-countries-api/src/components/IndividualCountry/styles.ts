import styled from 'styled-components'

export const Container = styled.div`


`

export const InfoCountry = styled.div`
    width: 298px;
    height: 160px;
    display: flex;
    gap: 5px;
    flex-direction: column;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    margin-top: -10px;
    padding-left: 25px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: ${({mode}) => mode ? 'hsl(209, 23%, 22%)' : ''};
    color: ${({mode}) => mode ? 'white' : ''};
    

    .name {
        margin-top: 30px;
        margin-bottom: 20px;
        font-weight: 600;
    }

    @media(max-width: 280px) {
        width: 248px;
        height: 130px;

        .name {
            margin-top: 15px;
            margin-bottom: 10px;
        }
    }
`

export const CountryCard = styled.div`
    cursor: pointer;

    #countryFlag {
        width: 300px;
        height: 180px;
        border-radius: 8px;
        background-size: cover;
    }

    @media(max-width: 280px) {

        #countryFlag{
            width: 250px;
            height: 120px;
        }
    }
`
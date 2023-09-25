import styled from 'styled-components'


export const Container = styled.div`
   padding-inline-start: 8rem;
   color: ${({mode}) => mode ? 'hsl(0, 0%, 100%)' : ''};

   @media(max-width: 720px) {
        padding-inline-start: 4rem;
   }

   @media(max-width: 570px) {
        padding-inline-start: 2rem;
   }

   @media(max-width: 405px) {
        padding-inline-start: 1rem;
   }
`

export const Back = styled.div`
    margin-top: 150px;
    margin-bottom: 100px;

    @media(max-width: 1110px) {
        margin-top: 50px;
        margin-bottom: 60px;
    }


    .back {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        border-radius: 3px;
        width: 100px;
        height: 35px;
        cursor: pointer;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
        color: ${({mode}) => mode ? 'hsl(235, 24%, 19%)' : ''};
        border: 1px solid ${({mode}) => mode ? 'hsl(0, 0%, 52%)' : 'hsl(200, 15%, 8%)'};
    }

    #iconBack {
        width: 20px;
    }

`

export const CountryContentLeft = styled.div`
    display: flex;
    gap: 80px;
    
    h2 {
        margin-bottom: 25px;
        margin-top: 20px;
    }

    p {
        margin-bottom: 8px;
        font-weight: bold;
    }

    #countryFlag {
        width: 450px;
        height: 350px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    }

    .languages {
        display: flex;
        gap: 7px;
    }

    .topLevel {
        margin-top: 60px;
    }

    .ulMargin {
        margin-bottom: 8px;
    }

    .currencies {
        span {
            font-weight: bold;
        }
    }
    
    .info {
        font-weight: normal;
        color: ${({mode}) => mode ? 'hsl(235, 24%, 19%)' : ''};
    }

    @media(max-width: 1110px) {
        display: block;

        #countryFlag {
            width: 350px;
            height: 250px;
        }
    }

    @media(max-width: 405px) {

        #countryFlag {
            width: 250px;
            height: 150px;
            background-size: cover;
        }
    }
`

export const BorderCountries = styled.div`
     .borderCountries {
        display: flex;
        gap: 5px;
        margin-left: 530px;
        margin-top: -70px;
    }

    .individualBorderCountries {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        width: 90px;
        border: 1px solid hsl(0, 0%, 52%);
        background-color: ${({mode}) => mode ? 'hsl(235, 24%, 19%)' : ''};
        border: 1px solid ${({mode}) => mode ? 'hsl(0, 0%, 52%)' : 'hsl(200, 15%, 8%)'};
    }

    .info {
        font-weight: normal;
        margin-left: 530px;
        margin-top: -70px;
    }

    @media(max-width: 1110px) {

        .borderCountries {
            margin-left: 0px;
            margin-top: 0px;
        }
    }

    @media(max-width: 570px) {


        .borderCountries {
           flex-direction: column;
        }

        .mapCountryBorders {
            display: flex;
            gap: 5px;
        }
   }
`
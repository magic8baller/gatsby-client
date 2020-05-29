import styled from 'styled-components'

export const InstaSection = styled.section`
  margin-top: 60px;

  h2 {
    margin-bottom: 0;
  }
`

export const InstaFeed = styled.ul`
    list-style-type: none;
    margin: 30px 0 90px;
    display: grid;
    justify-content: center;
    gap: 5px;
    @media screen and (min-width: 630px) {
      grid-template-columns: repeat(2, 200px);
      grid-template-rows: auto;
    }
    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 200px);
      grid-template-rows: repeat(2, 200px);
    }
    
    li:nth-child(4) {
      display: none;
      @media screen and (min-width: 630px) {
        display: block;
      }
    }

    li:nth-child(5) {
      display: none;
      @media screen and (min-width: 1024px) {
        display: block;
      }
    }

    li:nth-child(6) {
      display: none;
      @media screen and (min-width: 1024px) {
        display: block;
      }
    }

    li {
      position: relative;
      height: 200px;
      width: 200px;
      margin: 0;

      .overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: 0.5s ease-out;
        background-color: slategray;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        .icon {
          height: 25px;
          color: #fff;
          margin: 0;
        }
        .text {
          color: #fff;
          font-size: 25px;
          padding: 0 10px;
        }
      }
      
          &:hover .overlay {
            opacity: 0.8  ;
          }
    }
  
`
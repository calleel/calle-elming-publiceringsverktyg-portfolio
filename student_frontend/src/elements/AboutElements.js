import styled from "styled-components"

export const AboutPageWrapper = styled.section`
  padding: 7rem 0;
  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
`
export const AboutCenter = styled.div`
  margin: 0 auto;
  max-width: 1170px;

  img {
    margin-bottom: 2rem;
    height: 25rem;
  }

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;
    width: 95vw;

    img {
      grid-column: 1 / span 5;
      margin-bottom: 0;
    }
  }
`
export const AboutArticle = styled.article`
  ${"" /* line-height: 2;

    p {
        margin-bottom: 1.25rem;
        color: var(--clr-grey-3);
    } */}

  .section-title {
    margin-bottom: 2rem;
    text-align: left;
  }
  .underline {
    margin-left: 0;
    margin-right: 0;
  }
  p {
    line-height: 2;
  }

  @media screen and (min-width: 992px) {
    grid-column: 6 / -1;
  }
`

export const AboutStack = styled.div`
  span {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`
export const CVBtn = styled.div`
  a {
      margin: 0.8rem 0;
    text-transform: uppercase;
    background: var(--clr-lightblue-2);
    color: var(--clr-primary-9);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
  }
`

import styled from "styled-components"

// styled-components for hero elements

export const HeroWrapper = styled.header`

  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  position: relative;

.hero-center {
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
}

.hero .underline {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
.hero-content-container {
  background: rgba(3, 36, 49, 0.9);
  padding: 2rem; 
  border-radius: 25px;
}

.hero-img {
  display: none;
}
.hero-info h1 {
  color: var(--clr-light-2);
}
.hero-info h4 {
  color: var(--clr-light-2);
}
.hero-info p {
  color: var(--clr-light-1);
}
.hero-icons {
  justify-items: flex-start;
}
.hero .btn {
  margin-top: 1.25rem;
}

@media screen and (min-width: 992px) {
  .hero::before {
    content: "";
    position: absolute;
    top: 0;
    /* left: 65%; */
    right: 0;
    bottom: 0;
    background: var(--clr-white);
  }
  .hero-center {
    grid-template-columns: repeat(12, 1fr);
  }
  .hero-content-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 500px;
    grid-column: 1 / span 12;
    justify-content: space-around;
    padding: 0 3rem;;
    margin: 0;
    align-items: center;
    border-radius: 25px;
    background: rgba(3, 36, 49, 0.9);
  }
  .hero h4 {
    font-size: 0.85rem;
    color: var(--clr-light-2);
  }
  .hero h1 {
    color: var(--clr-light-2);
  }
  .hero p {
    color: var(--clr-light-1);
  }
  .hero-info {
    grid-row: 1/1;
    grid-column: 1 / span 6;
    width: 600px;
    margin-left: 2rem;
  }

  .image-container{
    border-radius: 50%;
    border: 10px solid var(--clr-lightblue-2);
    z-index: 10;
    grid-column: 8/12;
    grid-row: 1/1;
    overflow: hidden;
    background: var(--clr-light-2);
    margin-right: 2rem;
  }
  .hero-img {
    display: block;
    width: 22rem;
  }
}
@media screen and (min-width: 1170px) {
  .hero h4 {
    font-size: 1rem;
  }

  .hero-info {
    grid-column: 1 / span 8;
  }

  .hero h4 {
    line-height: 1;
  }
}
`
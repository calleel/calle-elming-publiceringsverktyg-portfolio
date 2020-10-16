import styled from "styled-components"

// styled-components for nav elements

export const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-blue-3);

  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-lightblue-1);
    cursor: pointer;
    transition: var(--transition);
    margin: 1rem;
  }
  .toggle-btn:hover {
    color: var(--clr-red-2);
  }
  .nav-links {
    display: none;
  }
  .social-links {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-start;
    }
    .nav-links li {
      margin-right: 2rem;
    }
    .nav-links a {
      text-transform: capitalize;
      color: var(--clr-lightblue-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
    }
    .nav-links a:hover {
      color: var(--clr-red-2);
      box-shadow: 0px 2px var(--clr-red-2);
    }
    .nav-center {
      display: flex;
      grid-template-columns: auto 1fr;
      align-items: center;
      justify-content: space-between;
    }
     .social-links {
      display: flex;
      margin-top: 0;
      justify-content: flex-end;
    }
    .social-links a {
      padding: 0.2rem;
    }
  }
`

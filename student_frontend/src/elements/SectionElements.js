import styled from "styled-components"

// styled-components for all section elements

export const Sections = styled.section`
/*
=============== 
Services
===============
*/

  .service {
    background: var(--clr-lightblue-2);
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: var(--clr-white);
  }
  .service p {
    color: var(--clr-lightblue-1);
  }
  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .service .underline {
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .service p {
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .service:hover {
    background: var(--clr-lightblue-1);
    color: var(--clr-blue-1);
  }
  .service:hover p {
    color: var(--clr-blue-1);
  }
  .service:hover .underline {
    background: var(--clr-blue-2);
  }
  @media screen and (min-width: 676px) {
    .services-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .services-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

/*
=============== 
Jobs
===============
*/
  section .jobs {
    background-color: white;
  }
  .jobs {
    background: var(--clr-lightblue-2);
    color: var(--clr-blue-2);
  }
  .jobs p {
    color: var(--clr-lightblue-1);
  }
  .jobs a {
    background: var(--clr-blue-2);
  }
  .jobs-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 4rem;
  }
  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    color: var(--clr-lightblue-1);
  }
  .job-btn:hover {
    color: var(--clr-white);
    box-shadow: 0 2px var(--clr-white);
  }
  .active-btn {
    color: var(--clr-white);
    box-shadow: 0 2px var(--clr-white);
  }
  .jobs .underline {
    background-color: var(--clr-lightblue-1);
  }
  .job-info h3 {
    font-weight: 400;
  }
  .job-info h4 {
    text-transform: uppercase;
    color: var(--clr-grey-5);
    background: var(--clr-grey-9);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }
  .job-date {
    letter-spacing: var(--spacing);
  }
  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  .job-desc p {
    margin-bottom: 0;
    color: var(--clr-white);
  }
  .job-icon {
    color: var(--clr-primary-5);
  }
  @media screen and (min-width: 992px) {
    .job-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .job-info h3,
    h4,
    p {
      margin: 0 auto;
      padding: 1rem;
    }
    .job-desc {
      margin: 0 auto;
    }
    .btn-container {
    flex-direction: row;
  }
  }

/*
=============== 
Projects
===============
*/
  .projects {
    background: var(--clr-grey-10);
  }
  .project {
    display: grid;
    margin-bottom: 4rem;
  }
  .project-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 19rem;
    z-index: 1;
  }
  .project-img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
    opacity: 0.85;
    transition: var(--transition);
  }
  .project:hover .project-img::after {
    opacity: 0;
  }
  .project-info {
    background: var(--clr-white);
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .project-number {
    display: inline-block;
    font-size: 1.25rem;
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
  }
  .project-info h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  .project-desc {
    word-spacing: 15px;
    color: var(--clr-grey-3);
  }
  .project-stack {
    margin-bottom: 1rem;
  }
  .project-stack span,
  .about-stack span {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
  .about-stack span {
    margin-top: 0.5rem;
  }
  .project-icon {
    color: var(--clr-primary-5);
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: var(--transition);
  }
  .project-icon:hover {
    color: var(--clr-primary-1);
  }
  @media screen and (min-width: 576px) {
    .project-img {
      height: 19rem;
    }
  }
  @media screen and (min-width: 768px) {
    .project-img {
      height: 22rem;
    }
  }
  @media screen and (min-width: 992px) {
    .project {
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    }
    .project-img {
      grid-column: 1 / span 8;
      grid-row: 1 / 1;
      height: 30rem;
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    }
    .project-info {
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);

      z-index: 1;
      grid-column: 5 /12;
      grid-row: 1 / 1;
    }
    .project:nth-of-type(even) .project-img {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
    .project:nth-of-type(even) .project-info {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }
  }

/*
=============== 
Blog
===============
*/
  .blog-section {
    background: var(--clr-lightblue-2);
  }
  .blog-section .center-btn {
    background: var(--clr-blue-2);
  }
  .blog-section .underline {
    background-color: var(--clr-lightblue-1);
  }
  .blog {
    display: block;
    margin-bottom: 2rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
  }
  .blog:hover {
    box-shadow: var(--dark-shadow);
    transform: scale(1.02);
  }
  .blog article {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .blog-card {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  .blog-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 15rem;
  }
  .blog-card {
    padding: 1.5rem 1rem;
  }
  .blog-card h4 {
    color: var(--clr-grey-1);
  }

  .blog-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .blog-footer p {
    margin-bottom: 0;
    font-weight: bold;
    color: var(--clr-grey-5);
  }
  .blog-footer p:first-of-type {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
  @media screen and (min-width: 576px) {
    .blogs-center {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
      column-gap: 2rem;
    }
    .blog-img {
      height: 17.5rem;
    }
  }
  @media screen and (min-width: 850px) {
    .blog-img {
      height: 13.75rem;
    }
  }
`

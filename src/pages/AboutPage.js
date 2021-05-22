import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about-bcg.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about"/>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="retro tech store- by Madalena Veloso " />
        <article>
          <div className="title">
            <h2>our Story</h2>
            <div className="underline"></div>
          </div>
          <h4>Here for Your Essential Communication and Information Technology Needs</h4>
          <p>Over 22 million IT professionals, small businesses, local governments, students, engineers, programmers, makers, tech enthusiasts, gamers, computer product and electronic device customers have relied on TECH  for their communication and information technology support needs since 1979.</p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  h4 {
    padding-top: 1.5rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage

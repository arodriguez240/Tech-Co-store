import React from 'react';
import styled from 'styled-components';
import { services } from '../utils/constants';



const Services = () => {
  return (
    <Wrapper >
      <div className="section-center">
        <article className="header">
          <h3>Technology <br/>
          for all your needs
          </h3>
          <p>At TECH, we are dedicated to providing you with the entire information technology solution needed. As business and schools shift to remote work from home and virtual learning, we are here to supply your essential needs of computers, networking, webcams, and all work from home products. TECH is here to supply your telemedicine needs so you can consult with your doctor from your home. As the country is seeing a historic shift to remote digital access, we are here to support you as you effectively work, learn, and receive telemedicine from home.</p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const {id, icon, title,text} = service;
            return (
              <article key={id} className="service">
                <span className="icon">
                  {icon}
                </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services

import React from 'react';
import styled from 'styled-components';

const Card = ({ name, attr, price, value, valuetwo, valuet}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="header">
          <span className="title">{name}</span>
          <span className="line-sep"></span>
          <span className="price">{price }</span>
        </div>
        <p className="desc">{attr}</p>
        <ul className="lists">
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{valuet}</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{valuetwo}</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{value}</span>
          </li>
        </ul>
        <button type="button" className="action">Ver más</button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    margin-left: 2rem;
    margin-right: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    margin-bottom: 2rem;
    max-width: 350px;
    min-width: auto;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    background-color: rgba(17, 24, 39, 1);
    padding: 1.5rem;
  }

  .header {
    display: flex;
    flex-direction: column;
  }
  .line-sep {
  height: .5px;
  width: 80%;
  display: flex;
  background-color: #f2f2f2;
  margin : 4px 0;
  }
  
  .price {
    font-size: 1.15rem;
    line-height: 1;
    font-weight: 700;
    color: #fff
  }

  .desc {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    line-height: 1.625;
    color: rgba(156, 163, 175, 1);
  }

  .lists {
    margin-bottom: 1.5rem;
    flex: 1 1 0%;
    color: rgba(156, 163, 175, 1);
  }

  .lists .list {
    margin-bottom: 0.5rem;
    display: flex;
    margin-left: 0.5rem
  }

  .lists .list svg {
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;
    margin-right: 0.5rem;
    color: rgba(167, 139, 250, 1);
  }
 
  `;

export default Card;



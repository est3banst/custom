import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLanguage } from '../../config/LanguageContext';

const Card = ({ name, attr, price, value, valuex, valuey, valuez, valuetwo, valuet ,link}) => {
  const {lang} = useLanguage();
  return (
    <StyledWrapper>
      <div className='card-wrap'>
      <div className="card max-w-sm">
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
            <span>{valuex}</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{valuey}</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{valuez}</span>
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
        <Link to={link}> <button className="action">{lang === 'en' ? 'See more' : 'Ver más'}
        <svg xmlns="http://www.w3.org/2000/svg" className='animate-icons' width={20} height={20} viewBox="0 0 20 20">
	<g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
		<g opacity={0.2}>
			<path d="M6.848 9.794A1.5 1.5 0 0 1 7.04 7.68l4-3.333a1.5 1.5 0 0 1 1.92 2.304l-4 3.334a1.5 1.5 0 0 1-2.112-.192"></path>
			<path d="M17.152 9.794a1.5 1.5 0 0 1-2.112.192l-4-3.334a1.5 1.5 0 1 1 1.92-2.304l4 3.333a1.5 1.5 0 0 1 .192 2.113"></path>
			<path d="M12 6a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-3 0v-8A1.5 1.5 0 0 1 12 6"></path>
		</g>
		<path d="M5.616 8.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064"></path>
		<path d="M14.384 8.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704"></path>
		<path d="M10 5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-1 0V5.5A.5.5 0 0 1 10 5"></path>
	</g>
</svg>
</button>
        </Link>
      </div>
      </div>
      
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

.card-wrap {
    position: relative;
    display: inline-block;
    padding: 4px;
    overflow: hidden;
    border-radius: 0.25rem;
    background: transparent;
}

.card-wrap::before {
    content: "";
    position: absolute;
    inset: 0; 
    background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 0%,
    #a78bfa 50%,
    #8670c8 65%, 
    rgba(255, 255, 255, 0.2) 100%
  );
    /* background: conic-gradient(from 0deg, #8e1cff, #c340ff, #8e1cff); */
    border-radius: 0.25rem;
    z-index: -1;
    animation: rotateBorder 12s linear forwards infinite;
}

.card-wrap::after {
    content: "";
    position: absolute;
    inset: 4px; 
    background: #171717; 
    border-radius: 0.25rem;
    z-index: -1;
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
    font-size: .99rem;
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



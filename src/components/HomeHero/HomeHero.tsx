import { FC } from 'react';
import { HomeHeroWrapper } from './HomeHero.styled';
import styled from 'styled-components';
import herobg from '../../assets/hero.jpg';

const Wrapper = styled.div`
   background: url(${herobg}) no-repeat center center;
   background-attachment: scroll;
   position: relative;
   background-size: cover;
`;

const Overlay = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(255, 255, 255, 0.50);
   z-index: 1;
`;

const Inner = styled.div`   
   position: relative;
   z-index: 2;
`;

const Title = styled.h1`
   font-family: CarterOne, serif;
`;

interface HomeHeroProps { }

const HomeHero: FC<HomeHeroProps> = () => (
   <HomeHeroWrapper data-testid="HomeHero">

      <Wrapper className="container-fluid">
         <Overlay className="overlay"></Overlay>
         <Inner className="container py-5 inner" >
            <Title className="text-muted">Welcome to my site!</Title>
            <p>
               My repo of experiments
            </p>
         </Inner>
      </Wrapper>

   </HomeHeroWrapper>
);

export default HomeHero;

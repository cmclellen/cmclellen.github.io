import React, { FC } from 'react';
import { HomeHeroWrapper } from './HomeHero.styled';

interface HomeHeroProps { }

const HomeHero: FC<HomeHeroProps> = () => (
   <HomeHeroWrapper data-testid="HomeHero">

      <div className="container py-5 shadow-4 rounded-3" >
         <h2>Welcome to my site!</h2>
         <p>
            This is a repo of a few of my experimental projects.
         </p>
      </div>

   </HomeHeroWrapper>
);

export default HomeHero;

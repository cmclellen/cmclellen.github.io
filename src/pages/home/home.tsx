import { FC } from 'react';
import { HomeWrapper } from './home.styled';
import HomeHero from '../../components/HomeHero/HomeHero';
import Experiments from '../../components/Experiments/Experiments';

interface HomeProps { }

const Home: FC<HomeProps> = () => (
   <HomeWrapper>
      <HomeHero />
      <Experiments />
   </HomeWrapper>
);

export default Home;

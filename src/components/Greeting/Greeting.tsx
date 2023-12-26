import React, { FC } from 'react';
import { GreetingWrapper } from './Greeting.styled';

interface GreetingProps {}

const Greeting: FC<GreetingProps> = (props: {message?: string}) => {

   const { message= 'World' } = props

   return (
      <GreetingWrapper data-testid="Greeting">
         <div>Hello, {message}!</div>
      </GreetingWrapper>
      );
   }

export default Greeting;

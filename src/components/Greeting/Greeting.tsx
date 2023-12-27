import  { FC } from 'react';
import { GreetingWrapper } from './Greeting.styled';

interface GreetingProps {
   message?: string;
}

const Greeting: FC<GreetingProps> = (props: GreetingProps) => {

   const { message= 'World' } = props

   return (
      <GreetingWrapper data-testid="Greeting">
         <div>Hello, {message}!</div>
      </GreetingWrapper>
      );
   }

export default Greeting;

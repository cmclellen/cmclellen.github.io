import { FC } from 'react';
import { HeaderWrapper } from './Header.styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Brand = styled.a`
   font-family: RubikDoodleShadow, serif;
`;

interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
   <HeaderWrapper data-testid="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container">
            <Brand className="navbar-brand fs-1" href="/">Craig McLellen</Brand>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                  </li>
                  
                  {/* <li class="nav-item">
               <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#">Articles</a>
            </li>
            <li class="nav-item">
               <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
               </ul>
            </div>
         </div>
      </nav>
   </HeaderWrapper>
);

export default Header;

import React, { FC } from 'react';
import { HeaderWrapper } from './Header.styled';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
   <HeaderWrapper data-testid="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container">
            <a className="navbar-brand" href="#">Craig McLellen</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">Home</a>
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

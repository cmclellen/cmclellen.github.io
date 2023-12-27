import { FC } from 'react';
import { FooterWrapper } from './Footer.styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Inner = styled.div`
   background-color: black;
`;

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
 <FooterWrapper data-testid="Footer">
    <Inner className="text-center py-3 text-white">&copy; 2023 <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <span className="fst-italic">cmclellen<FontAwesomeIcon icon={faAt}></FontAwesomeIcon>gmail.com</span></Inner>
 </FooterWrapper>
);

export default Footer;

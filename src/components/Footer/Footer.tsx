import { FC } from 'react';
import { FooterWrapper } from './Footer.styled';
import styled from 'styled-components';

const Inner = styled.div`
   background-color: black;
`;

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
 <FooterWrapper data-testid="Footer">
    <Inner className="fw-bold text-center py-3 text-white">&copy; 2023 Craig McLellen</Inner>
 </FooterWrapper>
);

export default Footer;

import { memo } from 'react';
import { FooterContainer } from './styles';

const Footer = () => <FooterContainer>{new Date().getFullYear()} © All rights reserved by Eventcket </FooterContainer>;

export default memo(Footer);

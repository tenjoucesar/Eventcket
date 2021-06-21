import styled from 'styled-components';
import ComputerMobIcon from 'images/icons/computer-icon.png';
import ComputerTabIcon from 'images/icons/computer-tablet-icon.png';
import EmailMobIcon from 'images/icons/email-icon.png';
import EmailTabIcon from 'images/icons/email-tablet-icon.png';
import WineMobIcon from 'images/icons/wine-icon.png';
import WineTabIcon from 'images/icons/wine-tablet-icon.png';
import RocketMobIcon from 'images/icons/rocket-icon.png';
import RocketTabIcon from 'images/icons/rocket-tablet-icon.png';

export const BenefitTextContainer = styled.div`
  h3 {
    margin-top: 0;
  }

  @media ${({ theme }) => theme.minTablet} {
    margin-top: 48px;
    max-width: 492px;
  }
`;

export const Container = styled.div`
  padding: 48px 28px 80px;
  background: linear-gradient(180deg, #FFFFFF 0%, #F4F4F4 23.82%, #F1F1F1 100%);

  h2 {
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.minTablet} {
    padding: 115px 60px 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${({ theme }) => theme.minLargeDesktop} {
    padding: 37px 60px 31px;
  }
`;

export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 121px;

  @media ${({ theme }) => theme.minTablet} {
    flex-direction: row;
    margin-top: 59px;

    ${BenefitTextContainer} {
      margin-left: 50px;
    }
  }

  @media ${({ theme }) => theme.minLargeDesktop} {
    max-width: 991px;
  }
`;

export const InvertedBenefitContainer = styled(BenefitContainer)`
  @media ${({ theme }) => theme.minTablet} {
    flex-direction: row-reverse;
    justify-content: flex-end;
    text-align: right;


    ${BenefitTextContainer} {
      margin-right: 50px;
      margin-left: 0px;
    }
  }


`;

export const SubTitle = styled.p`
  font-family: Avenir Next;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 3px;
  text-transform: capitalize;
  color: #000000;
  margin: 0;
`;

export const BenefitParagraph = styled.p`
  font-family: Avenir Next;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin-top: 40px;
`;

export const BenefitImg = styled.img`
  align-self: center;
  margin-bottom: 100px;

  @media ${({ theme }) => theme.minTablet} {
    margin-bottom: 0;
  }
`;

export const WineImg = styled(BenefitImg)`
  content: url(${WineMobIcon});

  @media ${({ theme }) => theme.minTablet} {
    content: url(${WineTabIcon});
  }
`;

export const EmailImg = styled(BenefitImg)`
  content: url(${EmailMobIcon});

  @media ${({ theme }) => theme.minTablet} {
    content: url(${EmailTabIcon});
  }
`;

export const ComputerImg = styled(BenefitImg)`
  content: url(${ComputerMobIcon});


  @media ${({ theme }) => theme.minTablet} {
    content: url(${ComputerTabIcon});
  }
`;

export const RocketImg = styled(BenefitImg)`
  content: url(${RocketMobIcon});

  @media ${({ theme }) => theme.minTablet} {
    content: url(${RocketTabIcon});
  }
`;

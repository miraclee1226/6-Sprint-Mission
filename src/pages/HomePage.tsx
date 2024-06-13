import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import bannerTopImage from "../assets/Img_home_top.png";
import bannerBottomImage from "../assets/Img_home_bottom.png";
import imgHome01 from "../assets/Img_home_01.png";
import imgHome02 from "../assets/Img_home_02.png";
import imgHome03 from "../assets/Img_home_03.png";
import facebookIcon from "../assets/ic_facebook.svg";
import instagramIcon from "../assets/ic_instagram.svg";
import twitterIcon from "../assets/ic_twitter.svg";
import youtubeIcon from "../assets/ic_youtube.svg";
import styled from "styled-components";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>메인 페이지</title>
      </Helmet>
      <StyledBanner>
        <BannerContainer>
          <BannerContent>
            <BannerTitle>
              일상의 모든 물건을 <br />
              거래해 보세요
            </BannerTitle>
            <BannerButton>
              <Link to={'/items'}>
                구경하러 가기
              </Link>
            </BannerButton>
          </BannerContent>
          <BannerImg src={bannerTopImage} alt="배너 이미지" />
        </BannerContainer>
      </StyledBanner>

      <StyledSection>
        <InfoContent>
          <InfoImage src={imgHome01} alt="첫 번째 이미지" />
          <InfoDescription>
            <InfoBadge>Hot item</InfoBadge>
            <InfoTitle>
              인기 상품을 <br />
              확인해 보세요
            </InfoTitle>
            <InfoText>
              가장 HOT한 중고거래 물품을 <br />
              판다 마켓에서 확인해 보세요
            </InfoText>
          </InfoDescription>
        </InfoContent>
        <InfoContent reverse>
          <InfoImage src={imgHome02} alt="두 번째 이미지" />
          <InfoDescription textEnd>
            <InfoBadge>Search</InfoBadge>
            <InfoTitle>
              구매를 원하는 <br />
              상품을 검색하세요
            </InfoTitle>
            <InfoText>
              구매하고 싶은 물품은 검색해서 <br />
              쉽게 찾아보세요
            </InfoText>
          </InfoDescription>
        </InfoContent>
        <InfoContent>
          <InfoImage src={imgHome03} alt="세 번째 이미지" />
          <InfoDescription>
            <InfoBadge>Register</InfoBadge>
            <InfoTitle>
              판매를 원하는 <br />
              상품을 등록하세요
            </InfoTitle>
            <InfoText>
              어떤 물건이든 판매하고 싶은 상품을 <br />
              쉽게 등록하세요
            </InfoText>
          </InfoDescription>
        </InfoContent>
      </StyledSection>

      <StyledBanner>
        <BannerContainer>
          <BannerContent>
            <BannerTitle>
              믿을 수 있는 <br />
              판다마켓 중고거래
            </BannerTitle>
          </BannerContent>
          <BannerImg src={bannerBottomImage} alt="배너 이미지" />
        </BannerContainer>
      </StyledBanner>

      <StyledFooter>
        <Copyright>©codeit - 2024</Copyright>
        <FooterLinks>
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </FooterLinks>
        <FooterIcons>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SnsIcon src={facebookIcon} alt="facebook icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SnsIcon src={twitterIcon} alt="twitter icon" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SnsIcon src={youtubeIcon} alt="youtube icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SnsIcon src={instagramIcon} alt="instagram icon" />
          </a>
        </FooterIcons>
      </StyledFooter>
    </div>
  );
}

export default HomePage;

const StyledBanner = styled.section`
  background-color: #CFE5FF;
  overflow: hidden;
`;

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 1200px;
  height: 540px;
  margin: 0 auto;
`;

const BannerContent = styled.div`
  z-index: 1;
`;

const BannerTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 56px;
  margin-bottom: 32px;
`;

const BannerButton = styled.button`
  width: 355px;
  height: 56px;
  border-radius: 40px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  background-color: #3692FF;
  color: white;
  border: none;
`;

const BannerImg = styled.img`
  position: absolute;
  left: 340px;
  bottom: 0;
  width: 996px;
  height: 447px;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 137px 0;
  gap: 274px;
`;

const InfoContent = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  gap: 64px;
  width: 1200px;
  ${({ reverse }) => reverse && "flex-direction: row-reverse;"}
`;

const InfoImage = styled.img`
  width: 588px;
  height: 444px;
  border-radius: 12px;
`;

const InfoDescription = styled.div<{ textEnd?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ textEnd }) => textEnd && "text-align: end;"}
`;

const InfoBadge = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  margin-bottom: 12px;
  color: #3692FF;
`;

const InfoTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  font-weight: 700;
  line-height: 56px;
`;

const InfoText = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.08em;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  height: 160px;
  background-color: #111827;
  padding-top: 32px;
`;

const Copyright = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #9ca3af;
`;

const FooterLinks = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #e5e7eb;
  display: flex;

  a:first-child {
    margin-right: 30px;
  }
`;

const FooterIcons = styled.div`
  display: flex;
  gap: 12px;
`;

const SnsIcon = styled.img`
  display: block;
  width: 20px;
  height: 20px;
`;

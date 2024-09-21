import React from 'react';
import styled from 'styled-components';
import { Code, Layout, Server, Github } from 'lucide-react';

const AaaWebsite = () => {
  return (
    <Container>
      <Header>
        <Logo>aaa</Logo>
        <Nav>
          <NavLink href="#about">代表</NavLink>
          <NavLink href="#services">サービス</NavLink>
          <NavLink href="#skills">スキル</NavLink>
          <NavLink href="#contact">お問い合わせ</NavLink>
        </Nav>
      </Header>
      <Main>
        <HeroSection>
          <h1>aaa</h1>
          <p>ウェブ開発者 & システムアーキテクト</p>
          <Button href="#contact">お問い合わせ</Button>
        </HeroSection>
        <Section id="about">
          <h2>代表</h2>
          <p>私は宇川雄大、ウェブ開発とシステム構築のプロフェッショナルです。革新的なウェブアプリケーションと拡張性の高いシステムを通じて、アイデアを形にすることに情熱を注いでいます。細部へのこだわりと洗練されたコードへの愛着が、私の仕事の特徴です。</p>
        </Section>
        <Section id="services">
          <h2>サービス</h2>
          <ServiceList>
            <ServiceItem>
              <IconWrapper>
                <Layout size={32} />
              </IconWrapper>
              <h3>ウェブサイト開発</h3>
              <p>ニーズに合わせたカスタムレスポンシブウェブサイト</p>
            </ServiceItem>
            <ServiceItem>
              <IconWrapper>
                <Server size={32} />
              </IconWrapper>
              <h3>システム設計</h3>
              <p>拡張性の高いシステムソリューションの設計と実装</p>
            </ServiceItem>
            <ServiceItem>
              <IconWrapper>
                <Code size={32} />
              </IconWrapper>
              <h3>フルスタック開発</h3>
              <p>エンドツーエンドのアプリケーション開発とメンテナンス</p>
            </ServiceItem>
          </ServiceList>
        </Section>
        <Section id="skills">
          <h2>技術スキル</h2>
          <SkillList>
            <SkillItem>
              <IconWrapper>
                <Code size={32} />
              </IconWrapper>
              <h3>C#</h3>
              <p>バックエンド開発 & .NETフレームワーク</p>
            </SkillItem>
            <SkillItem>
              <IconWrapper>
                <Code size={32} />
              </IconWrapper>
              <h3>React</h3>
              <p>フロントエンド開発 & UI/UXデザイン</p>
            </SkillItem>
            <SkillItem>
              <IconWrapper>
                <Code size={32} />
              </IconWrapper>
              <h3>Rust</h3>
              <p>システムプログラミング & パフォーマンス最適化</p>
            </SkillItem>
          </SkillList>
        </Section>
        <Section id="contact">
          <h2>お問い合わせ</h2>
          <ContactInfo>
            <p>メール: yudai_uk@icloud.com</p>
            <p>所在地: 大阪府吹田市</p>
            <p>
              <GitHubLink href="https://github.com/yudai-uk/" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
                GitHub: yudai-uk
              </GitHubLink>
            </p>
          </ContactInfo>
        </Section>
      </Main>
      <Footer>
        <p>© 2024 aaa. All rights reserved.</p>
      </Footer>
    </Container>
  );
}

export default AaaWebsite;

const Container = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #f4f4f4;
  background-color: #121212;
`;

const Header = styled.header`
  background: linear-gradient(to right, #121212, #1f1f1f);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: bold;
  background: linear-gradient(45deg, #FF6B00, #FF8E3C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavLink = styled.a`
  color: #f4f4f4;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: #FF6B00;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8)), url('/api/placeholder/1200/400') center/cover no-repeat;
  color: #f4f4f4;
  text-align: center;
  padding: 100px 20px;
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  p {
    font-size: 24px;
    margin-bottom: 30px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

const Button = styled.a`
  display: inline-block;
  background: linear-gradient(45deg, #FF6B00, #FF8E3C);
  color: #121212;
  padding: 12px 24px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 30px;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(255, 107, 0, 0.3);
  }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
  h2 {
    font-size: 36px;
    margin-bottom: 30px;
    color: #FF6B00;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const ServiceList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const ServiceItem = styled.div`
  background: linear-gradient(135deg, #1f1f1f, #2a2a2a);
  border-radius: 15px;
  padding: 30px;
  margin: 15px;
  width: 300px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
  h3 {
    font-size: 24px;
    margin: 20px 0;
    color: #FF8E3C;
  }
  p {
    font-size: 16px;
    color: #d4d4d4;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const SkillItem = styled.div`
  background: linear-gradient(135deg, #1f1f1f, #2a2a2a);
  border-radius: 15px;
  padding: 30px;
  margin: 15px;
  width: 250px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
  h3 {
    font-size: 24px;
    margin: 20px 0;
    color: #FF8E3C;
  }
  p {
    font-size: 16px;
    color: #d4d4d4;
  }
`;

const IconWrapper = styled.div`
  background: linear-gradient(45deg, #FF6B00, #FF8E3C);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: #121212;
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, #1f1f1f, #2a2a2a);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 0 auto;
  p {
    margin: 15px 0;
  }
`;

const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  color: #FF8E3C;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #FF6B00;
  }
  svg {
    margin-right: 10px;
  }
`;

const Footer = styled.footer`
  background: linear-gradient(to right, #121212, #1f1f1f);
  color: #f4f4f4;
  text-align: center;
  padding: 20px;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;
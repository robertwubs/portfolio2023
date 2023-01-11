import styled from 'styled-components'

import { colors } from 'lib/colors'
import { vars } from 'lib/vars'

import PageTitle from 'components/PageTitle'

import IntroductionHero from 'components/Homepage/IntroductionHero'
import SkillsGrid from 'components/Homepage/SkillsGrid'
import PortfolioMenu from 'components/PortfolioMenu'
import CTASection from 'components/Homepage/CTASection'

export default function Home() {
  return <>
    <PageTitle title="Home" />
    <IntroductionHero />
    <SkillsGrid />

    <PortFolioHeaderWrapper>
      <p>For more information <a href="/files/CV_RobertWubs.pdf" target="_blank" rel="noreferrer">download my CV</a>. (Last updated: 02 Nov 2022)</p>
      <p>Want more insight in my coding style? Click <a href="https://github.com/robertwubs/portfolio2023" target="_blank" rel="noreferrer">here</a> to view the source code of this portfolio.</p>
      <h2>Portfolio</h2>
    </PortFolioHeaderWrapper>
    <PortfolioMenu height="75vh" />
    <CTASection />
  </>
}

const PortFolioHeaderWrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -1px;
  padding: 0 30px;

  p {
    color: ${colors.black};
    font-size: 12px;
  }

  h2 {
    text-align: center;
    width: 100%;
    max-width: ${vars.maxContentWidth};
    background-color: ${colors.black};
    color: ${colors.white};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin: 0;

    padding: 10px 0;
    font-size: 28px;
    font-weight: 900;
    text-transform: uppercase;
    border: 4px solid black;
    border-bottom: 0;
    pointer-events: none;
    margin-top: 20px;
  }
`
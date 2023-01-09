import IntroductionHero from 'components/Homepage/IntroductionHero'
import SkillsGrid from 'components/Homepage/SkillsGrid'
import PageTitle from 'components/PageTitle'
import PortfolioMenu from 'components/PortfolioMenu'
import { colors } from 'lib/colors'
import { vars } from 'lib/vars'
import styled from 'styled-components'

export default function Home() {
  return <>
    <PageTitle title="Home" />
    <IntroductionHero />
    <SkillsGrid />

    <PortFolioHeaderWrapper>
      <h2>Portfolio</h2>
    </PortFolioHeaderWrapper>
    <PortfolioMenu height="75vh" />
  </>
}

const PortFolioHeaderWrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  position: relative;
  top: -1px;

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
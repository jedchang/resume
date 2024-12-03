import { webDevelopData } from './webDevelop'
import { uiDesignData } from './uiDesign'
import { graphicDesignData } from './graphicDesign'

// 合併資料
export const rawPortfolioData = [
  ...webDevelopData,
  ...uiDesignData,
  ...graphicDesignData
]

export const portfolioData = rawPortfolioData
  .slice()
  .sort((a, b) => a.id - b.id)

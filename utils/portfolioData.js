import { webDevelopData } from './webDevelopData'
import { uiDesignData } from './uiDesignData'
import { graphicDesignData } from './graphicDesignData'

// 合併資料
export const rawPortfolioData = [
  ...webDevelopData,
  ...uiDesignData,
  ...graphicDesignData
]

export const portfolioData = rawPortfolioData
  .slice()
  .sort((a, b) => a.id - b.id)

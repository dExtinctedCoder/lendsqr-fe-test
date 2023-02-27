import { PageContentGridProps } from "../types/PageContentGrid.type"
import '../styles/_layout.scss'

const PageContentGrid = ({SideBar, MainComponent}: PageContentGridProps) => {
  return (
    <div className="layout__control">
      {SideBar}
      {MainComponent}
    </div>
  )
}

export default PageContentGrid
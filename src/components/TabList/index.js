import './index.css'

const TabItem = props => {
  const {tabitemDetails, onClickTab} = props
  const {menuCategory, menuCategoryId} = tabitemDetails

  const ClickEventOnTab = () => {
    onClickTab(menuCategoryId)
  }
  return (
    <li className="list-conatiner">
      <button type="button" className="button-style" onClick={ClickEventOnTab}>
        {menuCategory}
      </button>
    </li>
  )
}

export default TabItem

import './index.css'

import {Component} from 'react'

class ProjectItem extends Component {
  state = {quantity: 0}

  onClickIncrease = () => {
    this.setState(
      prev => ({quantity: prev.quantity + 1}),
      () => {
        const {onIncreaseCount} = this.props
        onIncreaseCount()
      },
    )
  }

  onClickDecrease = () => {
    const {quantity} = this.state
    if (quantity > 0) {
      this.setState(
        prev => ({quantity: prev.quantity - 1}),
        () => {
          const {onDecreaseCount} = this.props
          onDecreaseCount()
        },
      )
    } else {
      this.setState({quantity: 0})
    }
  }

  renderDisItems = () => {
    const {dish} = this.props
    const {quantity} = this.state
    const {
      dishName,
      dishImage,
      dishCalories,
      dishAvailability,
      dishCurrency,
      dishDescription,
      dishPrice,
      addonCat,
    } = dish
    return (
      <li className="dish-item-card">
        <div className="circle-content-card">
          <div className={`box  ${dishPrice > 10 ? 'high-rate-props' : ''}`}>
            <p
              className={`circle ${dishPrice > 10 ? 'high-rate-circle' : ''}`}
            />
          </div>
          <div className="content-div">
            <h1 className="name">{dishName}</h1>
            <p className="money">{`${dishCurrency} ${dishPrice}`}</p>
            <p className="description">{dishDescription}</p>
            {dishAvailability ? (
              <div className="qunatity-control-card">
                <button
                  type="button"
                  className="control"
                  onClick={this.onClickDecrease}
                >
                  -
                </button>
                <p className="qunatity">{quantity}</p>
                <button
                  type="button"
                  className="control"
                  onClick={this.onClickIncrease}
                >
                  +
                </button>
              </div>
            ) : (
              <p className="not-availble">Not available</p>
            )}

            {addonCat.length ? (
              <p className="customization-text">Customizations available</p>
            ) : (
              ''
            )}
          </div>
        </div>
        <p className="calories-num calories-num-sm">{`${dishCalories} Calories`}</p>
        <div className="cal-img-card">
          <p className="calories-num calories-num-lg">
            {dishCalories} calories
          </p>
          <img className="dish-img" alt={dishName} src={dishImage} />
        </div>
      </li>
    )
  }

  render() {
    return this.renderDisItems()
  }
}

export default ProjectItem

import {Component} from 'react'
import {IoCartSharp} from 'react-icons/io5'
import Loader from 'react-loader-spinner'
import TabItem from '../TabList'
import ProjectItem from '../ProjectItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Restro extends Component {
  state = {
    isload: true,
    tablist: [],
    projectlist: [],
    activetab: '',
    count: 0,
  }

  componentDidMount() {
    this.getDetailsMenu()
  }

  getDetailsMenu = async () => {
    const options = {
      method: 'GET',
    }
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

    const response = await fetch(url, options)
    const data = await response.json()
    const newdata = data[0].table_menu_list

    const categoryTab = newdata.map(each => ({
      menuCategory: each.menu_category,
      menuCategoryId: each.menu_category_id,
    }))

    const dishDetails = newdata.map(item =>
      item.category_dishes.map(dish => ({
        dishAvailability: dish.dish_Availability,
        dishType: dish.dish_Type,
        dishcalories: dish.dish_calories,
        dishcurrency: dish.dish_currency,
        dishid: dish.dish_id,
        dishImage: dish.dish_image,
        dishName: dish.dish_name,
        dishPrice: dish.dish_price,
        menuCategoryId: item.menu_category_id,
        addonCat: dish.addonCat,
        dishDescription: dish.dish_description,
        quantity: 0,
      })),
    )

    this.setState({
      isload: false,
      tablist: [...categoryTab],
      projectlist: [...dishDetails],
      activetab: categoryTab[0].menuCategoryId,
    })
  }

  getFileterd = () => {
    const {projectlist, activetab} = this.state
    const filterdarray = projectlist.map(each =>
      each.filter(item => activetab === item.menuCategoryId),
    )
    const uniquearray = filterdarray.filter(eachitem => eachitem.length > 0)
    const onlydetails = uniquearray[0] || []
    return onlydetails
  }

  onClickTab = tabid => {
    this.setState({activetab: tabid})
  }

  onIncrement = dishid => {
    this.setState(prev => ({
      projectlist: prev.projectlist.map(each =>
        each.map(eachindex => {
          if (eachindex.dishid === dishid) {
            return {...eachindex, quantity: eachindex.quantity + 1}
          }
          return eachindex
        }),
      ),
      count: prev.count + 1,
    }))
  }

  onDecrement = dishid => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prev => ({
        projectlist: prev.projectlist.map(each =>
          each.map(eachindex => {
            if (eachindex.dishid === dishid) {
              return {...eachindex, quantity: eachindex.quantity - 1}
            }
            return eachindex
          }),
        ),
        count: prev.count - 1,
      }))
    }
  }

  loaderfunction = () => (
    <div className="Loader-style">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderRetro = () => {
    const {tablist, count} = this.state
    const filterddishes = this.getFileterd()

    return (
      <>
        <ul className="tab-Conatiner-ul">
          {tablist.map(each => (
            <TabItem
              key={each.menuCategoryId}
              tabitemDetails={each}
              onClickTab={this.onClickTab}
            />
          ))}
        </ul>
        <ul className="project-details-ul">
          {filterddishes.map(projectitem => (
            <ProjectItem
              key={projectitem.dishid}
              projectdetails={projectitem}
              onIncrement={this.onIncrement}
              onDecrement={this.onDecrement}
              count={count}
            />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isload, count} = this.state
    return (
      <div className="Main-App-container">
        <div className="header">
          <h1 className="heading-heder">UNI Resto Cafe</h1>
          <p className="myorders">My Orders</p>
          <div className="cart-conatiner">
            <IoCartSharp size={30} />
            <p className="cart-p">{count}</p>
          </div>
        </div>
        <hr className="horizontal-line" />
        {isload ? this.loaderfunction() : this.renderRetro()}
      </div>
    )
  }
}

export default Restro

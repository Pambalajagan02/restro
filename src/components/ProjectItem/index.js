import './index.css'

const ProjectItem = props => {
  const {projectdetails, onIncrement, onDecrement} = props

  const onClickIncrement = () => {
    onIncrement(projectdetails.dishid)
  }

  const onClickDecrement = () => {
    onDecrement(projectdetails.dishid)
  }

  const renderbutton = () => {
    if (projectdetails.dishAvailability) {
      return (
        <div className="incrimentcontainer">
          <button
            type="button"
            className="button-increment"
            onClick={onClickDecrement}
          >
            -
          </button>
          <p>{projectdetails.quantity}</p>
          <button
            type="button"
            className="button-increment"
            onClick={onClickIncrement}
          >
            +
          </button>
        </div>
      )
    }
    return <p className="not avialble">Not available</p>
  }

  return (
    <li className="project-list-item">
      <div
        className={
          projectdetails.dishType === 2
            ? `border-veg-container`
            : `border-red-con`
        }
      >
        <p
          className={projectdetails.dishType === 2 ? `para-green` : `para-red`}
        />
      </div>

      <div className="padd">
        <h1 className="dishname">{projectdetails.dishName}</h1>
        <p>
          {projectdetails.dishcurrency} {projectdetails.dishPrice}
        </p>
        <p>{projectdetails.dishDescription}</p>

        {renderbutton()}
        {projectdetails.addonCat.length > 0 && <p>Customizations available</p>}
      </div>
      <p className="calaroies">{projectdetails.dishcalories} calories</p>
      <img
        src={projectdetails.dishImage}
        alt={projectdetails.dishName}
        className="dishimg"
      />
    </li>
  )
}
export default ProjectItem

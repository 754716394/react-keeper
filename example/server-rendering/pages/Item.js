import React from 'react'


class Item extends React.Component{
  render() {
    return(
      <div className="col-md-2">
        <ul className="nav nav-pills nav-stacked">
          <li>
            Item 1
          </li>
          <li>
            Item 2
          </li>
        </ul>
      </div>
    )
  }
}
export default Item
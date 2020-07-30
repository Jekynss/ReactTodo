import React from "react";
import classNames from "classnames";

import '../styles/components/Filters.css'

class Filters extends React.Component {

  handleClick=(e)=>{
    this.setState({activeFilter:e.target.value})
  }
  render() {
    const {filters,setActiveFilter,activeFilter} = this.props;
    return (
      <div className="filters-block">
        {filters.map((filter_value, index) => {
          return (
            <button
              className={classNames("filters-block__filter", {
                activated: activeFilter === filter_value,
              })}
              key={`${filter_value}_${index}`}
              value={filter_value}
              onClick={()=>setActiveFilter(filter_value)}
            >
              {filter_value}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Filters;

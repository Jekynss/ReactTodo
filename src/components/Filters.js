import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import {changeFilter} from "../redux/actions"

import '../styles/components/Filters.css'

function Filters({filters,activeFilter,changeFilter}) {
  
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
            onClick={()=>changeFilter(filter_value)}
          >
            {filter_value}
          </button>
        );
      })}
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return{
  changeFilter: (filter) => {dispatch(changeFilter(filter))}
  }
}

const mapStateToProps=(state, ownProps)=>{
  return{filters:state.todos.filters,activeFilter:state.todos.activeFilter}
}

export default connect(mapStateToProps,mapDispatchToProps)(Filters)
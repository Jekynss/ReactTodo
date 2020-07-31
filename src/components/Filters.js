import React from "react";
import classNames from "classnames";

import '../styles/components/Filters.css'

export default function Filters({filters,setActiveFilter,activeFilter}) {
  
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


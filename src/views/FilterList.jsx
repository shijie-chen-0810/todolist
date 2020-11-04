import React from 'react'
import FilterCon from './styled/FilterCon'
import FilterItem from './styled/FilterItem'
export default function FilterList(props) {
  return (
    <>
      <FilterCon onClick={(e)=>{
        const type = e.target.innerHTML
        props.handleFilter(type)
      }}>
        <FilterItem>all</FilterItem>
        <FilterItem>done</FilterItem>
        <FilterItem>not</FilterItem>
      </FilterCon>
    </>
  )
}

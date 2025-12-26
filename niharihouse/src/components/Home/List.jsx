import React from "react";

const List = (props) => {
  console.log(props, "sadsadsa");
  return (
    <div className="links">
      <ul>
        {props.links.map((item, index) => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;

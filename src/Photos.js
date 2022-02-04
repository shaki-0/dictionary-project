import React from "react";
import "./Photos.css";


export default function Photos(props) {
  if (props.photos) {
    return (
    <div className="Photos">
        <section>
        <div className="row">
        {props.photos.map(function (photo,index) { 
            return (
            <div className="col-4" key={index}>
            <img src={photo.src.portrait} className="img-fluid"
            alt={photo.src.photographer} />
            </div>
            );
        })}
        </div>
    </section>
    </div>
    ); 
  } else {
    return null;
  }
}

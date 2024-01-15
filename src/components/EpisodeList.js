import React from "react";

const EpisodeList = ({ episodes }) => {
  return (
    <div className="container">
      <div className="row">
        {episodes.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ minWidth: "200px" }}>
              <img className="card-img-top" src={item.image} alt="character" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p className="card-text">name: {item.species}</p>
                <p className="card-text">air-date: {item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
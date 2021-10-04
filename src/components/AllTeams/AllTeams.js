import React, { useEffect, useState } from "react";
import "./AllTeams.css";
import { Link } from "react-router-dom";

const AllTeams = () => {
  const [teams, setTeams] = useState("");
  const [allTeams, setAllTeams] = useState([]);
  const handleChange = (e) => {
    const searchText = e.target.value;
    setTeams(searchText);
    console.log(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=zh${teams}`
    )
      .then((res) => res.json())
      .then((data) => setAllTeams(data?.teams));
  }, [teams]);
  return (
    <div className="container all-teams">
      <div className="all-team">
        <h1>Our Club</h1>
        <h3>If You Want you Can Admit here</h3>
      </div>
      <div className="teams">
        <div className="row">
          {allTeams?.map((pd) => (
            <div className="col-md-3">
              <div className="cart">
                <div className="cart-details">
                  <img className="w-50" src={pd.strTeamBadge} alt="" />
                </div>
                <div className="text-area">
                  <h4>{pd.strTeam}</h4>
                  <p>{pd.strAlternate}</p>
                  <p>League: {pd.strLeague}</p>
                  <p>country: {pd.strCountry}</p>
                  {/* <Link to={`/details/${pd.idTeam}`}>
                    <button className="btn btn-success">Admit</button>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTeams;

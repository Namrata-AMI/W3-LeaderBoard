import React from "react";

const TopThree = ({users})=>{
    return(
        <div className="mb-4">
            <h4>Top 3 Rankers </h4>
            {users.map((user,index)=>(
                <div key={user.id} className="alert alert-primary d-flex justify-content-between">
                    <strong>
                    <i className="fa-solid fa-trophy" style={{ color: "#FFD43B", fontSize: "1.5rem" , marginRight:"1rem" }}></i>
                    {user.rank} - {user.name} </strong>
                    <span> {user.points} points</span>
                </div>
            ))}
        </div>
    )
}

export default TopThree;
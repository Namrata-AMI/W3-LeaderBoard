import React from "react";

const RankList = ({users})=>{
    return(
        <ul className="list-group mb-4">
            {users.map(user=>(
                <li key={user.id} className="list-group-item d-flex justify-content-between">
                    <span> {user.rank} - {user.name} </span> 
                    <span> {user.points} points</span>
                </li>
            ))}
        </ul>
    )
}

export default RankList;
import './App.css';

import Pagination from './components/Pagination';
import RankList from './components/RankList';
import TopThree from './components/TopThree';


import { useEffect,  useState } from 'react';

import userData from "./data/user.json";

function App() {

  const [users , setUsers] = useState([]);
  const [page , setPages] = useState(1);

  const pagelimit = 20;

  useEffect(()=>{
    const sorted = [...userData].sort((a,b)=> a.rank - b.rank);
    setUsers(sorted);
  },[]);

  const topThreeUsers = users.slice(0,3);  // top 3 

  const paginationUsers = users.slice(3, (page-1)*pagelimit +  page*pagelimit);


  return (
   <div className="container mt-5">
    <h2 className="mb-4 text-center"> LeaderBoard </h2>
    <TopThree users={topThreeUsers}/>
    <RankList users={paginationUsers}/>
    <Pagination
      currentPage = {page}
      totalPages = {Math.ceil((users.length - 3)/pagelimit)}
      onPageChange = {setPages}
    />
   </div>
  );
}

export default App;

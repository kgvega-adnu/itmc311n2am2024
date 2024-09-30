import { useState , useEffect} from "react";
import { FaSearch } from "react-icons/fa";

import '../components/MainSearchbar.css';

export const MainSearchBar = ({ setResults }) => {
  const [ projects, setProjects ] = useState();
  const [ input, setInput ] = useState();

  // For Development. Hide for deployment
    // useEffect(() => {
    //   const fetchData = async() => {
    //     const response = await fetch('http://localhost:5012/api/projects/gets')
    //     const data = await response.json()
    //     setProjects(data.data)
    //   }
  
    //   fetchData()
    // }, [projects])      
  
    // For Deployment. Hide for development
    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('https://projectarchiveserver.vercel.app/api/projects/gets')
        const data = await response.json()
        setProjects(data.data)
      }
  
      fetchData()
    }, [])  

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="Search-wrapper">
       <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input
            placeholder="Project Name, Keyword, or Proponent"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      {/* Di pa connected tong button when clicked */}
      <button>Search</button>

    </div>
   
  );
};


export default MainSearchBar;


// Searchbar YT Link - frontend siya nag fetch using API
// https://www.youtube.com/watch?v=sWVgMcz8Q44
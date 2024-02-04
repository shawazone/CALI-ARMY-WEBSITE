import React, { useState, useEffect } from 'react';
import AthleteCard from '../../Components/Cards/Athletes-related/AthleteCard';

const AthletePage = () => {
  const [athletes, setAthletes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAthletes = async () => {
      const response = await fetch(`http://localhost:4000/api/athletes?page=${currentPage}`);
      const data = await response.json();

      if (response.ok) {
        setAthletes(data.athletes);
        setTotalPages(data.totalPages);
      } else {
        console.log('Error fetching athletes');
      }
    };

    fetchAthletes();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {athletes.length === 0 ? (
          <p className="text-xl font-bold">fetching athletes.</p>
        ) : (
          athletes.map((athlete) => (
            <AthleteCard key={athlete._id} athlete={athlete} />
          ))
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-black"
        >
          {`< Prev (${currentPage - 1})`}
        </button>
        <span className="text-xl mx-2">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-black"
        >
          {`Next (${currentPage + 1}) >`}
        </button>
      </div>
    
    </div>
  );
};

export default AthletePage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/CompanyList.scss'; // Import the SCSS file

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  useEffect(() => {
    fetchCompanies(currentPage);
  }, [currentPage]);

  const fetchCompanies = async (page) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/V1/companies?page=${page}`);
      setCompanies(response.data.data);
      setTotalPages(response.data.last_page);
    } catch (error) {
      console.error('Error fetching companies', error);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="company-list">
      <h1>Company List</h1>
      <div className="companies">
        {companies.map((company) => (
          <div key={company.company_id} className="company">
            <h3>{company.name}</h3>
            <p>{company.location}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          &laquo; Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default CompanyList;

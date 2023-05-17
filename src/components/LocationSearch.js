import React, { useState } from 'react';

function LocationSearch() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Aquí puedes hacer algo con el texto de búsqueda, como mostrarlo en la consola
    console.log(searchText);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search location"
        style={{
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginRight: '10px',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Buscar
      </button>
    </div>
  );
}

export default LocationSearch;
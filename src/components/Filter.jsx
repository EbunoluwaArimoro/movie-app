const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input 
        type="text" 
        placeholder="Search by title"
        onChange={(e) => onTitleChange(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Minimum rating"
        onChange={(e) => onRatingChange(Number(e.target.value))} 
      />
    </div>
  );
};

export default Filter;

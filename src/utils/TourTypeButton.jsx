import PropTypes from "prop-types";

const TourTypeButton = ({ label, type, selectedType, setSelectedType }) => {
  return (
    <button
      onClick={() => setSelectedType(type)}
      className={`tour-type-button ${selectedType === type ? "selected" : "text-yellow-400"}`}
    >
      {label}
    </button>
  );
};

TourTypeButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  selectedType: PropTypes.number.isRequired,
  setSelectedType: PropTypes.number.isRequired,
};

export  {TourTypeButton};

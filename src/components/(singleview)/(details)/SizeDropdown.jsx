const SizeDropdown = () => {
  return (
    <div>
      <select id="cars" name="cars" className="w-100">
        <option value="volvo">Choose a size</option>
        <option value="saab">Small</option>
        <option value="fiat">Medium</option>
        <option value="audi">Large</option>
      </select>
    </div>
  );
};

export default SizeDropdown;

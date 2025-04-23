const SizeDropdown = () => {
  return (
    <div>
      <select id="cars" name="cars" className="w-100">
        <option value="size">Choose a size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <hr />
    </div>
  );
};

export default SizeDropdown;

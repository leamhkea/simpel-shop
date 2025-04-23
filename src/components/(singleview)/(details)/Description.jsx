import SizeDropdown from "./SizeDropdown";
const Description = () => {
  return (
    <article>
      <div className="flex items-baseline gap-1.5">
        <h2>name</h2>
        <p>brand</p>
      </div>
      <h3>price</h3>
      <SizeDropdown></SizeDropdown>
      <div>
        <h3>Description</h3>
        <hr />
        <p>Lorem ipsum</p>
      </div>
    </article>
  );
};

export default Description;

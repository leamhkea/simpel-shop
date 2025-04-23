import SizeDropdown from "./SizeDropdown";
const Description = () => {
  return (
    <article className="flex flex-col gap-10 w-100">
      <div>
        <div className="flex items-baseline gap-1.5">
          <h2>name</h2>
          <p>brand</p>
        </div>
        <h3>price</h3>
      </div>
      <div>
        <SizeDropdown></SizeDropdown>
      </div>
      <div className="grid gap-2">
        <h3>Description</h3>
        <hr />
        <p>Lorem ipsum</p>
      </div>
    </article>
  );
};

export default Description;

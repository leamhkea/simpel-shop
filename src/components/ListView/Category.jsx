const Category = () => {
  return (
    <div className="grid gap-2 italic ">
      <h2>Categories</h2>
      <ul className="flex gap-8">
        <li className="hover:underline">
          <a href="/">Category 1</a>
        </li>
        <li className="hover:underline">
          <a href="/">Category 2</a>
        </li>
        <li className="hover:underline">
          <a href="/">Category 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Category;

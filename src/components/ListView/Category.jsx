const Category = async () => {
  const data = await fetch("https://dummyjson.com/products/categories");
  const categories = await data.json();

  return (
    <div className="grid gap-2 italic">
      <h2>Categories</h2>
      <ul className="flex gap-15 overflow-x-auto py-8">
        {categories.map((category) => (
          <li key={category.url} className="hover:underline">
            <a className="whitespace-nowrap" href={category.slug}>
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

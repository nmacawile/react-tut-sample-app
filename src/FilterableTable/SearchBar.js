function SearchBar(props) {
  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      >
        Filter
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          onChange={props.filterNames}
          id="search"
          className="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Filter Products"
        />
        <div className="absolute inset-y-0 right-0 flex items-center"></div>
      </div>
      <div>
        <label htmlFor="in-stock">
          <input
            type="checkbox"
            id="in-stock"
            onChange={props.toggleHide}
            checked={props.hideUnavailable}
            className="mr-2"
          />
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default SearchBar;

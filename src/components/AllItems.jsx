import { useEffect, useState } from "react";

const AllItems = () => {
    const [allItemsCards, setAllItemsCards] = useState([]);
    const cardPerPage = 1;
    const [dataCount, setDataCount] = useState(1);
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");
    const [search, setSearch] = useState("");
    const [serchText, setSearchText] = useState("");
    const totalPage = Math.ceil(dataCount / cardPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = [...Array(totalPage).keys()].map((i) => i + 1);
  
    const [loading, setloading] = useState(true);
    console.log("data count", dataCount);
    
  
    useEffect(() => {
      fetch(
        `http://localhost:3000/allitemspagination?page=${currentPage}&size=${cardPerPage}&filter=${filter}&sort=${sort}&search=${search}`
      )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          setAllItemsCards(data);
          setloading(false);
        });
    }, [currentPage, cardPerPage, filter, sort, search]);
  
    useEffect(() => {
      fetch(
        `http://localhost:3000/itemscounts?filter=${filter}&search=${search}`
      )
        .then((res) => res.json())
        .then((data) => {
          setDataCount(data.count);
          setloading(false);
        });
    }, [filter, search]);
  
    const handleSearch = (e) => {
      e.preventDefault();
      setSearch(serchText);
    };
  
    const handleCurrentPage = (val) => {
      setCurrentPage(val);
    };
  
    const handleNextBtn = () => {
      if (currentPage < totalPage) {
        setCurrentPage(currentPage + 1);
      }
    };
    const handlePrevioustBtn = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleReset = () => {
      setFilter("");
      setSort("");
      setSearchText("");
    };
  
    if (loading) {
      return <p>page is loading</p>
    }
    return (
        <div>
            <div>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-5 gap-2">
            <div>
              <select
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
                name="category"
                id="category"
                className="border p-4 rounded-lg"
              >
                <option value="">Food Category</option>
                <option value="Thai">Thai</option>
                <option value="Italian">Italian</option>
                <option value="American">American</option>
                <option value="Dessert">Dessert</option>
                <option value="Bakery">Bakery</option>
                <option value="Indian">Indian</option>
                <option value="Japanese">Japanese</option>
                <option value="Salad">Salad</option>
                <option value="Appetizer">Appetizer</option>
              </select>
            </div>

            <form onSubmit={handleSearch}>
              <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  value={serchText}
                  className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                  type="text"
                  name="search"
                  placeholder="Enter Job Title"
                  aria-label="Enter Job Title"
                />

                <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                  Search
                </button>
              </div>
            </form>
            <div>
              <select
                onChange={(e) => {
                  setSort(e.target.value);
                }}
                value={sort}
                name="category"
                id="category"
                className="border p-4 rounded-md"
              >
                <option value="">Sort By Price</option>
                <option value="high">High to Low</option>
                <option value="low">Low to High</option>
              </select>
            </div>
            <button
              onClick={handleReset}
              className="btn bg-green-300 hover:bg-green-600"
            >
              Reset
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
        </div>

        <div>
            {allItemsCards.length}
        </div>

        <div className="md:mb-36  mb-8">
          <div className="flex justify-center mt-12">
            <button
              onClick={handlePrevioustBtn}
              className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
            >
              <div className="flex items-center -mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-1 rtl:-scale-x-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>

                <span className="mx-1">previous</span>
              </div>
            </button>

            {pages.map((btnNum) => (
              <button
                onClick={() => handleCurrentPage(btnNum)}
                key={btnNum}
                className={`hidden ${
                  currentPage === btnNum ? "bg-blue-500 text-white" : undefined
                } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
              >
                {btnNum}
              </button>
            ))}

            <button
              onClick={handleNextBtn}
              className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
            >
              <div className="flex items-center -mx-1">
                <span className="mx-1">Next</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-1 rtl:-scale-x-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
            
        </div>
    );
};

export default AllItems;
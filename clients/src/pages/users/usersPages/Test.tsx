import React, { useEffect, useState } from "react";

export default function Test() {
  const products = [
    { id: 1, name: "Product 1", price: 150 },
    { id: 2, name: "Product 2", price: 300 },
    { id: 3, name: "Product 3", price: 450 },
    { id: 4, name: "Product 4", price: 600 },
    { id: 5, name: "Product 5", price: 800 },
    { id: 6, name: "Product 6", price: 1000 },
    { id: 7, name: "Product 7", price: 1200 },
    { id: 8, name: "Product 8", price: 1500 },
    // Add more products as needed
  ];

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = [...products];

    // Apply price filter
    if (priceFilter) {
      const [min, max] = priceFilter.split("-").map(Number);
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    // Apply sorting
    if (sortOption) {
      filtered.sort((a, b) => {
        if (sortOption === "highest") return b.price - a.price;
        if (sortOption === "lowest") return a.price - b.price;
        return 0;
      });
    }

    setFilteredProducts(filtered);
  }, [priceFilter, sortOption]);

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  return (
    <div className="mt-52">
      Bills
      <div>
        <div>
          <select
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            defaultValue={5}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>

          <select onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="">Filter by Price</option>
            <option value="100-200">100-200</option>
            <option value="200-400">200-400</option>
            <option value="400-800">400-800</option>
            <option value="800-1500">800-1500</option>
          </select>

          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Sort by</option>
            <option value="highest">Highest Price</option>
            <option value="lowest">Lowest Price</option>
          </select>
        </div>

        <div>
          {paginatedProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>

        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                fontWeight: currentPage === index + 1 ? "bold" : "normal",
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

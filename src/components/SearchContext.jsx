import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchValue, setSearch] = useState('');
  const [pageNo, setPageNo] = useState(1)

  const updateSearch = (newValue) => {
    setSearch(newValue);
  };
  const updatePageNo = (newValue)=>{
    setPageNo(newValue)
  }

  return (
    <SearchContext.Provider value={{ searchValue,pageNo, updateSearch,updatePageNo }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  return {
    searchValue: context.searchValue,
    pageNo: context.pageNo,
    updateSearch: context.updateSearch,
    updatePageNo: context.updatePageNo,
  };
}
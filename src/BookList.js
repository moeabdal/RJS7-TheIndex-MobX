import React, { Component } from "react";
import axios from "axios";
import { observer } from "mobx-react";

// Components
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

// Store
import bookStore from "./stores/bookStore";

function BookList() {
  {
    bookStore.bookColor = this.props.match.params.bookColor;
    if (bookStore.Loading) {
      return <Loading />;
    }
    if (bookStore.bookColor) {
      return (
        <div>
          <h3>Books</h3>
          <SearchBar store={bookStore} />
          <BookTable books={bookStore.filterBooksByColor} />
        </div>
      );
    } else {
      return (
        <div>
          <h3>Books</h3>
          <SearchBar store={bookStore} />
          <BookTable books={bookStore.filteredBooks} />
          console.log(bookStore.filteredBooks)
        </div>
      );
    }
  }
}

export default observer(BookList);

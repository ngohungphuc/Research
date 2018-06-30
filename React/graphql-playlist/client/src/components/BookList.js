import React, {Component} from 'react';
import {getBooksQuery} from '../queries/queries';
import {graphql} from 'react-apollo';

class BookList extends Component {
    displayBooks() {
        var data = this.props.data;
        if (data.loading) {
            return (
                <div>Data is loading</div>
            )
        } else {
            return data
                .books
                .map(book => {
                    return (
                        <li key={book.name}>{book.name}</li>
                    )
                })
        }
    }
    render() {
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
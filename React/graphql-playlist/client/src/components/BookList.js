import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql `
    {
        books {
            name
            id
        }
    }
`;

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
        console.log(this.props);
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
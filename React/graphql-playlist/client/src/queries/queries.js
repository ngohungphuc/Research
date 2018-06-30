import {
    gql
} from 'apollo-boost';

const getBooksQuery = gql `
    {
        books {
            name
            id
        }
    }
`;

const getAuthorsQuery = gql `
    {
        authors {
            name
            id
        }
    }
`;

export {
    getBooksQuery,
    getAuthorsQuery
}
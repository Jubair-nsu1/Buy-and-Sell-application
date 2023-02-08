const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        uid: ID!
        firstName: String!
        lastName: String!
        address: String!
        phone: String!
        email: String!
        password: String!
    }

    type Product {
        pid: ID!
        uid: ID!
        title: String!
        categories	: String!
        price: Int!
        rent: Int!
        description: String!
        datePosted: String!
    }

    type Category {
        productID: ID!
        categoryName: String!
    }

    type BuySell {
        purchase_id: ID!
        buyer_id: ID!
        seller_id: ID!
        product_id: ID!
        buyer_name: String!
        seller_name: String!
        product_title: String!
        product_categories	: String!
        product_price: Int!
        product_rent: Int!
        product_description: String!
    }

    type Query {
        getUsers: [User]!
        getUser(uid: ID!): User
        getProducts: [Product]!
        getMyProduct(userID: ID!): Product
        getBuyerList(userID: ID!) : BuySell
        getSellerList(userID: ID!) : BuySell
        getBorrowedList(userID: ID!) : BuySell
        getLentList(userID: ID!) : BuySell
        getCategory(productID: ID!) : Category
    }

    type Mutation {
        registerUser(firstName: String, lastName: String, address: String, phone: String, email: String, password: String ): User
        loginUser(email: String, password: String):Login
        addProduct(title: String, categories: String, price: Int, rent: Int, description: String): Product
        addCategory(productID: ID! , categoryName: String!): Category
        updateProduct(pid: ID!, title: String, categories: String, price: Int, rent: Int, description: String): Product
        deleteProduct(pid: ID!): Product
    }
`;

module.exports = typeDefs;
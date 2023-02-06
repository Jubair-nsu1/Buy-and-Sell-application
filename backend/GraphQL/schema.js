const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        uid: ID!
        firstName: String
        lastName: String
        address: String
        phone: String
        email: String
        password: String
    }

    type Product {
        pid: ID!
        title: String
        categories	: String
        price: Int
        rent: Int
        description: String
        datePosted: String
    }

    type BuySell {
        purchase_id: ID!
        buyer_id: ID!
        seller_id: ID!
        product_id: ID!
        buyer_name: String
        seller_name: String
        product_title: String
        product_categories	: String
        product_price: Int
        product_rent: Int
        product_description: String
    }

    type Query {
        getUsers: [User]
        getUser(uid: ID!): User
        getProducts: [Product]
        getProduct(pid: ID!): Product
        getBuySellList : [BuySell]
    }

    type Mutation {
        addUser(firstName: String, lastName: String, address: String, phone: String, email: String, password: String ): User
        addProduct(title: String, categories: String, price: Int, rent: Int, description: String): Product
        updateProduct(pid: ID!, title: String, categories: String, price: Int, rent: Int, description: String): Product
        deleteProduct(pid: ID!): Product
    }
`;

module.exports = typeDefs;
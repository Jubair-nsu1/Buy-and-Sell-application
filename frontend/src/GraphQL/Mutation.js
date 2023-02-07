import  gql  from 'graphql-tag';
// import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
    mutation register(
        $firstName: String! 
        $lastName: String! 
        $address: String!
        $phone: String! 
        $email: String! 
        $password: String! 
        $confirmPassword: String!
    ) 
    {
        register(
            registerInput:{
                firstName: $firstName 
                lastName: $lastName 
                address: $address 
                phone: $phone 
                email: $email 
                password: $password
                confirmPassword: $confirmPassword
            }
        ) 
        {
            id
            firstName
            lastName
            address
            phone
            email
            password
            confirmPassword
            token
        }
    }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const CREATE_PRODUCT = gql`
    mutation createProduct($title: String!, $categories: String!, $description: String!, $price: Int!, $rent: Int!, $duration: String!) 
    {
        createProduct(title: $title, categories: $categories, description: $description, price: $price, rent: $rent, duration: $duration) 
        {
            title
            categories
            description
            price
            rent
            duration
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation updateProduct(
        $title: String!
        $categories: String!
        $description: String!
        $price: Int!
        $rent: Int!
        $duration: String!
    ) {
        updateProduct(
            title: $title
            categories: $categories
            description: $description
            price: $price
            rent: $rent
            duration: $duration
        ) {
        message
        }
    }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`;
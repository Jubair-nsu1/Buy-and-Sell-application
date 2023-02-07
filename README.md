# Teebay

- [Overview](#overview)
- [Database Modelling](#database-modelling)
- [Part-1](#part-1)
- [Part-2](#part-2)
- [Part-3](#part-3)

</br></br>

---

## Overview 

> Frontend - React.js and Apollo Client

> Backend - Node.js, GraphQL, Apollo Server and Prisma

> Database - PostgreSQL

</br></br>

---

## Database Modelling 

The database contains of 5 tables. </br>
1. User Table - [user_id (pk), firstName, lastName, address, phone, email, password]
2. Product Table - [product_id (pk), user_id(fk) title, price, rent, rentType, description, createdAt]
3. BuySell Table - [purchase_id (pk), buyer_id (fk), seller_id (fk), product_id (fk)]
4. Rent Table - [rent_id (pk), owner_id (fk), renter_id (fk), product_id (fk)]
5. Category table - [product_id (fk) , cat_name]

</br></br>

---
## Part-1 

The first part contains the Registration and Login feature. I created that by tbe following steps: </br>
1. At first, I set up a GraphQL server with Node.js and Apollo Server, and connected it to the PostgreSQL database using Prisma Client.

2. Then I defined the GraphQL schema for user authentication, including queries for retrieving and mutating user information, and a mutation for creating new users.

3. Then I wrote the resolvers that interact with the PostgreSQL database to execute the authentication-related queries and mutations.

4. After that I created the React application that utilizes Apollo Client to interact with the GraphQL server and handle user authentication.

5. The registration and login functionality was implemented by sending GraphQL mutations to create and authenticate users, and storing user data in local storage.

6. Error handling and form validation for user input.


</br></br>

---

## Part-2 

This part was tricky especially the CreateProduct page which consisted of multi-pages form. Showing all product created by the user was shown using mapping. 

</br></br>

---

## Part-3 

This part is incomplete but could be solved by using 2 tables from database - BuySell and Rent tables. </br>
1. All products created by all users can be showed by fetching data from the Product table.
2. If an user buy or sell a product, the record will be saved in the BuySell table.
3. If an user lent or borrow a product, the record will be saved in the Rent table.
4. All the products bought/sold/borrowed/lent by the user can be showed by fetching data from BuySell table and rent table.

</br></br>

---

## Roadblocks

It was hard initially to connect GraphQl with postgres. At first I tried to connect directly, there were no responses in the Apollo server. Then after some research, I tried out Prisma client which finally solved the problem. Prisma could easily interact with database and responses were seen in Apollo server.

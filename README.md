# Teebay

- [Overview](#overview)
- [Database Modelling](#database-modelling)
- [Part-1](#part-1)
- [Part-2](#part-2)
- [Part-3](#part-3)
- [Roadblocks](#roadblocks)

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

The first part contains the Registration and Login feature. I created that by the following steps: </br>
1. At first, I set up a GraphQL server with Node.js and Apollo Server, and connected it to the PostgreSQL database using Prisma Client.

2. Then I defined the GraphQL schema for user authentication, including queries for retrieving and mutating user information, and a mutation for creating new users.

3. Then I wrote the resolvers that interact with the PostgreSQL database to execute the authentication-related queries and mutations.

4. After that I created the React application that utilizes Apollo Client to interact with the GraphQL server and handle user authentication.

5. The registration and login functionality was implemented by sending GraphQL mutations to create and authenticate users, and storing user data in local storage.


</br></br>

---

## Part-2 

This part was tricky especially the CreateProduct page which consisted of multi-pages form. At first, I created state object to store the current page number and the user's input. Then a function was created to handle the navigation between pages and update the current page number in the state. Switch case statement was used to render the appropriate page based on the current page number stored in the state. Event handlers was used to update the state with the user's input on each page.</br></br>
Rest of part was simple like fetching product data and show in CardView. Mapping was used to create each card for each row and finally loop through the whole table. Last part was updating the product which was done by clicking the card which navigate to another page where user can edit product; and delete the product by clicking the trash icon. Update and delete was done by using the product id. 

</br></br>

---

## Part-3 

This part is INCOMPLETE but could be solved by using 2 tables from database - BuySell and Rent tables. </br>
1. All products created by all users can be showed by fetching data from the Product table.
2. If an user buy or sell a product, the record will be saved in the BuySell table.
3. If an user lent or borrow a product, the record will be saved in the Rent table.
4. All the products bought/sold/borrowed/lent by the user can be showed by fetching data from BuySell table and rent table.

</br></br>

---

## Roadblocks

It was hard initially to connect GraphQl with postgres. At first I tried to connect directly, there were no responses in the Apollo server. Then after some research, I tried out Prisma client which finally solved the problem. Prisma could easily interact with database and responses were seen in Apollo server. </br>
On the other hand, when we use RESTapi, postgres could be directly integated and the querries was done by uisng query() function. Any TypeORM was not required.</br> 

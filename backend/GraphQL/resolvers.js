const { prisma } = require('./../database');


const resolvers = {
    Query: 
    {
        //Fetching an user data when logged in
        getUser: async (_, { userId }) => {
            return prisma.users.findMany({
                where: { userId: {userId} },
            });
        },

        //Fetching only the product data created by the session user(logged in)
        getMyProduct: async (_, { userId }) => {
            return prisma.product.findMany({
                where: { userId: {userId} },
            });
        },

        //Fetching all products data created by other users
        getAllProducts: async () => {
            return prisma.product.findMany();
        },

        //Fetching all the products bought by the user
        getBuyList: async (_, { userId }) => {
            return prisma.buysell.findMany({
                where: { buyerID: {userId} },
            });
        },

        //Fetching all the products sold by the user
        getSoldList: async (_, { userId }) => {
            const sellData = await prisma.buysell.findMany({
                where: { sellerID: {userId} },
            });
            return sellData;
        },

        //Fetching all the products borrowed by the user
        getBorrowedList: async (_, { userId }) => {
            const borrowData = await prisma.rent.findMany({
                where: { borrowedID: {userId} },
            });
            return borrowData;
        },

        //Fetching all the products lent by the user
        getLentList: async (_, { userId }) => {
            const lentData = await prisma.rent.findMany({
                where: { lentID: {userId} },
            });
            return lentData; 
        }
    },
    

    Mutation: 
    {
        //For simplicity, no duplicate email/phone has been checked before creating an user
        registerUser: async (_, { firstName, lastName, address, phone, email, password }) => {
            const newUser = await prisma.user.create({
                data: {
                    firstName: {firstName},
                    lastName: {lastName},
                    address: {address},
                    phone: {phone},
                    email: {email},
                    password: {password},
                },
            })    
            return newUser;
        },

        addProduct: async (_, { userID, title, category, price, rent, description }) => {
            const newProduct = await prisma.product.create({
                data: {
                    userID: {userID}, //Session user id
                    title: {title},
                    price: {price},
                    rent: {rent},
                    description: {description},
                },
            })
            return newProduct;
        },

        addCategory: async (_, { productID, categoryName }) => {
            const newCategory = await prisma.category.create({
                data: {
                    productID: {productID},
                    categoryName: {categoryName},
                },
            })
            return newCategory;
        },

        updateProduct: async (_, { productID, title, category, price, rent, description }) => {
            const updateProduct = await prisma.product.update({
                where: {
                    productID: {productID},
                },
                data: {
                    title: {title},
                    category: {category},
                    price: {price},
                    rent: {rent},
                    description: {description},
                },
            })
            return updateProduct;
        },

        deleteProduct: async (_, {productId}) => {
            const deleteProduct = await prisma.product.delete({
                where: {
                    productId: {productId}
                },
            })
            return deleteProduct;
        },
    },
};

module.exports = resolvers;
const { prisma } = require('./../database');


const resolvers = {
    Query: {
        getUser: async (_, { uid }) => {
            return prisma.users.findMany({
                where: { uid: {uid} },
            });
        },
        getProduct: async (_, { pid }) => {
            return prisma.product.findMany({
                where: { pid: {pid} },
            });
        },
    },
    
    Mutation: {
      addUser: async (_, { firstName, lastName, address, phone, email, password }) => {
        
      },
      addProduct: async (_, { title, category, price, rent, description }) => {
        
      },
      updateProduct: async (_, { pid, title, category, price, rent, description }) => {
      
      },
      deleteProduct: async (_, {pid}) => {
      
      },

    },

};

module.exports = resolvers;
  //console.log(resolvers);
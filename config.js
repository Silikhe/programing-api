
// const env = process.env;

// const config = {
//     db: {
//       host: env.DB_HOST,
//       user: env.DB_USER,
//       password: env.DB_PASSWORD,
//       database: env.DB_NAME,
//     },
//     listPerPage: env.LIST_PER_PAGE,
//   };
  
  
//   module.exports = config;



const env = process.env;

const config = {
    db: {
      host: "localhost",
      user: "root",
      password: "",
      database: "programing",
    },
    listPerPage: 10,
  };
  
  
  module.exports = config;
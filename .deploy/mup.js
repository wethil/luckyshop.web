module.exports = {
  servers: {
    one: {
      host: '37.139.0.53',
      username: 'root',
      // pem:
      password:"Sherlockholmes01",
      
      // or leave blank for authenticate from ssh-agent
    }

  },

  meteor: {
    name: 'lucky2shop',
    path: "/home/yellfi/luckyshop.web",
     dockerImage: 'abernix/meteord:base',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true
    },
    env: {
      ROOT_URL: 'http://37.139.0.53',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 120
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
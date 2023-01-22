const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {

        return {
            reactStrictMode: true,
            swcMinify: true,
            env:{
                mongodb_connect_url: `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}/${process.env.mongodb_database}?retryWrites=true&w=majority`
            }
        };
    }

    return {
        reactStrictMode: true,
        swcMinify: true,
        env:{
            mongodb_connect_url: `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}/${process.env.mongodb_database}?retryWrites=true&w=majority`
        }
    };
}


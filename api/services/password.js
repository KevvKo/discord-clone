const bcrypt = require('bcrypt');

module.exports = {

    /**
     * 
     * @param {string} plainPassword 
     * @returns string
     */
    hashingPassword: async (plainPassword) => {
        const saltRounds = 10;

        bcrypt.hash(plainPassword, saltRounds, function(error, hash) {
            if(error) throw error;
            return hash
        });

    }
}
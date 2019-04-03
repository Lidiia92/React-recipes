const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt');

const createToken = (user, secret, expiresIn) => {
    const {username, email} = user; 
    return jwt.sign({username, email}, secret, {expiresIn})
}

exports.resolvers = {
    Query: {
        getAllRecipes: async (root, args, {Recipe}) => {
            const allRecipes = await Recipe.find();
            return allRecipes;
        },

        getCurrentUser: async (root, args, {currentUser, User}) => {
            if(!currentUser) {
                return null;
            }

            const user = await User.findOne({ username: currentUser.username }).populate({ path: 'favorites', model: 'Recipe'});
            return User;

        }
    },

    Mutation: {
        addRecipe: async (root, {name, category, description, instructions, username}, {Recipe}) => {
            const newRecipe = await new Recipe({
                name,
                category,
                description,
                instructions,
                username
            }).save();

            return newRecipe;
        },

        signupUser: async(root, {username, email, password}, {User}) => {
            const userForCheck = await User.findOne({username: username});
            if(userForCheck) {
                throw new Error('User already exists');
            }

            const newUser = await new User({
                username,
                email,
                password
            }).save();

            return {token: createToken(newUser, process.env.SECRET, '1hr')};
        },

        signinUser: async (root, {username, password}, {User}) => {
            const userForCheck = await User.findOne({username: username});
            if(!userForCheck) {
                throw new Error('User not found');
            }

            const isValidPassword = await bcrypt.compare(password, userForCheck.password);

            if(!isValidPassword) {
                throw new Error('Invalid password');
            }

            return {token: createToken(userForCheck, process.env.SECRET, '1hr')};
        },
    }

};
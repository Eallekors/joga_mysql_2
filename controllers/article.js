const articleObModel = require('../models/article')
const articleModel = new articleObModel();

class articleController {
    constructor(){
        const articles = []
    }

    async getAllArticles(req, res){
        const articles = await articleModel.findAll()
        //res.status(201).json({articles: articles})
        if (req.session.user) {
            const isAuthenticated = !!req.session.user;
            const user = req.session.user ? req.session.user : null; // Check if the session has a user
            const isAdmin = user && user.username === 'admin'; // Check if the user is an admin
    
            // Access the session data
            res.render('index', { user: req.session.user, articles: articles , isAuthenticated , isAdmin} );
        } else {
            // If no session, redirect to login
            res.redirect('/login');
        }
            
        
    }

    async getArticleBySlug(req, res){
        const article = await articleModel.findOne(req.params.slug)
        //res.status(201).json({article: article})
        if (req.session.user) {
            const isAuthenticated = !!req.session.user;
            const user = req.session.user ? req.session.user : null; // Check if the session has a user
            const isAdmin = user && user.username === 'admin'; // Check if the user is an admin
    
            res.render('article', {
                article: article,
                user: req.session.user, 
                isAuthenticated, 
                isAdmin

            });
    }

}
}

module.exports = articleController
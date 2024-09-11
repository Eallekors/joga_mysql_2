const articleObModel = require('../models/article')
const articleModel = new articleObModel();

class articleController {
    constructor(){
        const articles = []
    }

    async getAllArticles(req, res){
        const articles = await articleModel.findAll()
        //res.status(201).json({articles: articles})
            res.render('index', {
                articles: articles
            });
        
    }

    async getArticleBySlug(req, res){
        const article = await articleModel.findOne(req.params.slug)
        res.status(201).json({article: article})
    }


   
}

module.exports = articleController
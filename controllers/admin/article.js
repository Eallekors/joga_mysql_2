const articleDbModel = require('../../models/article')
const articleController = require('../article')
const articleModel = new articleDbModel();

class articleAdminController extends articleController{
 

    async createNewArticle(req, res){
        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        }
        const articleId = await articleModel.create(newArticle)
        res.status(201).json({
            message: `created article whith id ${articleId}`,
            article: {id: articleId, ...newArticle}
        })
    }

    async updateArticle(req,res){
        const updatedData = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        }
        const articleId = req.params.id
        const updatedArticle = await articleModel.update(articleId,updatedData)
        res.status(201).json({
            message: `updated article whith id ${articleId}`,
            article: {id: articleId, ...updatedData}
        })
    }

    async deleteArticle(req,res){
        const articleId = req.params.id
        const deleteArticle = await articleModel.delete(articleId)
        res.status(201).json({
            message: `delete article whith id ${articleId}`,
            
        })
    }
}

module.exports = new articleAdminController()
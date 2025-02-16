## Learn REST API with NodeJS + Express + MongoDB Atlas (Cloud)
Tutorial: https://youtu.be/CAF4NC4OZEE?si=6G6Ybh3SLwsUiM50

Edited: Product.find((err, products) => {...}) is a callback style for Mongoose old version. 
Current version use only promise or async/await. 
So I changed it to user router.get('/', async(req,res,next) => {...})

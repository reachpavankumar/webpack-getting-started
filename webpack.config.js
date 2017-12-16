var path = require('path');

module.exports ={
   context: __dirname,
   entry: './src/index.js',
   output:{
      path:path.join(__dirname, '/public'),
      filename:'bundle.js'
   },
   resolve:{
      extension:['.js']
   },
   module:{
      rules:[
         {
            test:/\.js$/,
            loader:'babel-loader',
            query:
            {
               presets:['es2015','react']
            }
         }
      ]
   }
}


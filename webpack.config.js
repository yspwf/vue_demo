const path = require('path');
const VueloaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry:{
		main:'./src/app.js'
	},
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:{
					loader:'babel-loader',
					options:{
						presets:[
							['babel-preset-env',{
								targets:{
									browsers:['>1%','last 2 versions']
								}
							}]
						]
					}
				},
				exclude:'/node_modules/'
			},{
				test:/\.vue$/,
				loader:'vue-loader'
			},{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	},
	resolve:{
		alias:{
				'vue$':'vue/dist/vue.esm.js'
			}
	},
	plugins:[
		new VueloaderPlugin()
	],
	devServer:{
		historyApiFallback: true
	}
}
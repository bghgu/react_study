let config = {
    entry : './main.js',
    output : {
        path : '/',
        filename : 'index.js'
    },
    devServer : {
        inline : true,
        port : 3000
    },
    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                exclude : /node_module/,
                loader : 'babel',
                query : {
                    presets : ['es2015', 'react']
                }
            }
        ]
    }
};
module.export = config;

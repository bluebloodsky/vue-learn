const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: "/",
        //注意这里的改变，必须是根目录,指定目录无效，因为webpack会在内存中根目录下生成下面文件名。
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader' },
            { test: /\.css$/, loader: 'css-loader' }
        ]
    },
    resolve: {
        extensions: ['.vue', '.js', ".css", 'jsx'] //自动补全识别后缀
    },
    devtool: 'eval-source-map'
}
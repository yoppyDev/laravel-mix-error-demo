const mix = require('laravel-mix');


mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass"),
                        },
                    },
                ]
            }
        ]
    },
    stats: {
        children: true,
    },
});


mix.sass( 'style.scss', 'style.css' );

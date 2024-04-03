const path = require('path')



module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
     pathname: '/images/d1s3pdmc/production/*',
        },
      ],
    },
  };

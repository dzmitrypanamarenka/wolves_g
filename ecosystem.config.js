module.exports = {
    apps: [{
      name: 'wolves_g',
      script: 'npm',
      args: 'start'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-13-59-186-16.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/wolvesgg.pem',
        ref: 'origin/master',
        repo: 'git@github.com:dzmitrypanamarenka/wolves_g.git',
        path: '/home/ubuntu/wolves_g',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
};

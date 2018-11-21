module.exports = {
    apps: [{
      name: 'wolves_g',
      script: './index.js',
      exec_interpreter: '@babel/register'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-223-109-21.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/wolvesg.pem',
        ref: 'origin/master',
        repo: 'git@github.com:dzmitrypanamarenka/wolves_g.git',
        path: '/home/ubuntu/wolves_g',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }
module.exports = {
  apps: [
    {
      name: 'eureka-server',
      script: '/usr/bin/java',
      args: '-jar eureka-server-0.0.1-SNAPSHOT.jar',
      cwd: '/opt/workforce-hub/apps',
      interpreter: 'none',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      restart_delay: 5000,
      out_file: '/var/log/workforce-hub/eureka-out.log',
      error_file: '/var/log/workforce-hub/eureka-error.log'
    },
    {
      name: 'config-server',
      script: '/usr/bin/java',
      args: '-jar config-server-0.0.1-SNAPSHOT.jar',
      cwd: '/opt/workforce-hub/apps',
      interpreter: 'none',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      restart_delay: 5000,
      out_file: '/var/log/workforce-hub/config-out.log',
      error_file: '/var/log/workforce-hub/config-error.log',
      env: {
        CONFIG_SERVER_EUREKA_URL: 'http://localhost:8761/eureka/'
      }
    },
    {
      name: 'api-gateway',
      script: '/opt/workforce-hub/scripts/start-api-gateway.sh',
      cwd: '/opt/workforce-hub/apps',
      interpreter: 'none',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      restart_delay: 5000,
      out_file: '/var/log/workforce-hub/api-gateway-out.log',
      error_file: '/var/log/workforce-hub/api-gateway-error.log',
      env: {
        SPRING_PROFILES_ACTIVE: 'gcp',
        CONFIG_SERVER_URL: 'http://localhost:8888',
        API_GATEWAY_EUREKA_URL: 'http://localhost:8761/eureka/',
        API_GATEWAY_CORS_ALLOWED_ORIGINS: 'http://localhost:5173,http://127.0.0.1:5173'
      }
    }
  ]
};

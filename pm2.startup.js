module.exports = {
    "apps": [
        {
            "name": "nodejs-web-pm2",
            "cwd": "./",   // 当前工作目录
            "script": "bin/www",
            "args": "", // 参数
            "exec_mode": "cluster", // 应用启动模式: fork或者cluster模式
            "instances": 1, // 开启多个实例，仅在cluster模式下有效，用于负债均衡
            "min_uptime": "60s", // 应用运行少于多少时间被认为是异常启动
            "autorestart": true, // 自动重启
            "restart_delay": 3000, // 重启时延迟
            "max_restarts": 10,
            "watch": ["bin"], // 监控的变化的目录
            "watch_delay": 1000, // 监控时延
            "ignore_watch": ["node_modules"],

            "log_date_format": "YYYY-MM-DD HH:mm:ss Z",
            "error_file": "./logs/error.log", // 错误日志
            "out_file": "./logs/out.log",	// 正常运行日志
            "pid_file": "pids/node-geo-api.pid",

            "env": {
                "NODE_ENV": "development",
                "PORT": 3001
            },
            "env_production": {
                "NODE_ENV": "production",
                "PORT": 3002
            }
        }
    ]
}

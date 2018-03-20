const config = {
    debug: {
        level: 'error',
        available: true,
    },
    secret: 'j~9z{WA1bV?4L:6',
    jwtSession: { session: false },
    db: {
        username: "",
        password: "",
        database: "checkin_api",
        host: null,
        port: null,
        dialect: "sqlite",
        storage: './database/db.test.sqlite',
        sync: {
            force: true,
        },
        define: {
            underscored: true,
        },
        seederStorage: "json",
        seederStoragePath: "./database/migration.test.json"
    }
};

module.exports = config;

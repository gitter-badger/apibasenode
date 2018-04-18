define({ "api": [  {    "type": "post",    "url": "/token",    "title": "Get a Token",    "group": "Athorization",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User email</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User password</p>"          }        ]      },      "examples": [        {          "title": "entry",          "content": "{\n  \"email\": \"steve.woz@apple.com\",\n  \"password\": \"123456\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Authenticated user token</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"token.xpto\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Authentication error",          "content": "HTTP/1.1 401 Unauthorized",          "type": "json"        },        {          "title": "Invalid parameters",          "content": "HTTP/1.1 400 Bad Request",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/http/routes/token.js",    "groupTitle": "Athorization",    "name": "PostToken"  },  {    "type": "get",    "url": "/health",    "title": "Fetch current user data",    "group": "Health",    "success": {      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{\n  status: 200,\n  message: 'success on conect services'\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "server error error",          "content": "HTTP/1.1 500 Internal Server error\n{\n  status: 500,\n  message: 'error o connect services'\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/http/routes/health.js",    "groupTitle": "Health",    "name": "GetHealth"  },  {    "type": "get",    "url": "/",    "title": "API Status",    "group": "Home",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>Api status message</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"API on-line\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/http/routes/index.js",    "groupTitle": "Home",    "name": "Get"  },  {    "type": "get",    "url": "/user",    "title": "Fetch current user data",    "group": "User",    "header": {      "examples": [        {          "title": "Header",          "content": "{\"Authorization\": \"bearer token.xpto\"}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"Your name\",\n  \"email\": \"your.email@test.com\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Authentication error",          "content": "HTTP/1.1 401 Unauthorized",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/http/routes/user.js",    "groupTitle": "User",    "name": "GetUser"  }] });

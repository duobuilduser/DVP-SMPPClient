module.exports = {

     "Redis":
    {
        "mode":"SYS_REDIS_MODE",
        "ip": "SYS_REDIS_HOST",
        "port": "SYS_REDIS_PORT",
        "user": "SYS_REDIS_USER",
        "password": "SYS_REDIS_PASSWORD",
        "sentinels":{
            "hosts": "SYS_REDIS_SENTINEL_HOSTS",
            "port":"SYS_REDIS_SENTINEL_PORT",
            "name":"SYS_REDIS_SENTINEL_NAME"
        }

    },

    "Security":
    {

        "ip": "SYS_REDIS_HOST",
        "port": "SYS_REDIS_PORT",
        "user": "SYS_REDIS_USER",
        "password": "SYS_REDIS_PASSWORD",
        "mode":"SYS_REDIS_MODE",
        "sentinels":{
            "hosts": "SYS_REDIS_SENTINEL_HOSTS",
            "port":"SYS_REDIS_SENTINEL_PORT",
            "name":"SYS_REDIS_SENTINEL_NAME"
        }

    },
	
	    "RabbitMQ":
    {
        "ip": "SYS_RABBITMQ_HOST",
        "port": "SYS_RABBITMQ_PORT",
        "user": "SYS_RABBITMQ_USER",
        "password": "SYS_RABBITMQ_PASSWORD",
        "vhost":"SYS_RABBITMQ_VHOST"
    },

	"SMSServer":{
		
		"ip": "SYS_SMSSERVER_HOST",
		"port": "SYS_SMSSERVER_PORT",
		"password": "SYS_SMSSERVER_PASSWORD",
		"user": "SYS_SMSSERVER_USER"

	},

    "SMPPClient":{

        "ip":"SYS_SMPP_HOST",
        "port":"SYS_SMPP_PORT",
        "password":"SYS_SMPP_PASSWORD",
        "user":"SYS_SMPP_USER"

    },


    "Host":
    {
        "smsQueueName": "SMS_QUEUE_NAME",
		"smsNumber": "SMS_NUMBER"
    },

    "Mongo":
    {
        "ip":"SYS_MONGO_HOST",
        "port":"SYS_MONGO_PORT",
        "dbname":"SYS_MONGO_DB",
        "password":"SYS_MONGO_PASSWORD",
        "user":"SYS_MONGO_USER",
        "replicaset" :"SYS_MONGO_REPLICASETNAME"
    },

    "LBServer" : {

        "ip": "LB_FRONTEND",
        "port": "LB_PORT"

    },
    "Services" : {
        "accessToken": "HOST_TOKEN",
        "resourceServiceHost": "SYS_RESOURCESERVICE_HOST",
        "resourceServicePort": "SYS_RESOURCESERVICE_PORT",
        "resourceServiceVersion": "SYS_RESOURCESERVICE_VERSION",
		
        "interactionurl": "SYS_INTERACTIONS_HOST",
        "interactionport": "SYS_INTERACTIONS_PORT",
        "interactionversion": "SYS_INTERACTIONS_VERSION",
		
        "cronurl": "SYS_SCHEDULEWORKER_HOST",
        "cronport": "SYS_SCHEDULEWORKER_PORT",
        "cronversion": "SYS_SCHEDULEWORKER_VERSION",
		
		"ticketServiceHost": "SYS_LITETICKET_HOST",
        "ticketServicePort": "SYS_LITETICKET_PORT",
        "ticketServicePort": "SYS_LITETICKET_VERSION",
		
		"ardsServiceHost": "SYS_ARDSLITESERVICE_HOST",
		"ardsServicePort": "SYS_ARDSLITESERVICE_PORT",
		"ardsServiceVersion": "SYS_ARDSLITESERVICE_VERSION",

        "dynamicconfigurl" : "SYS_DYNAMICCONFIGGENERATOR_HOST",
        "dynamicconfigport" : "SYS_DYNAMICCONFIGGENERATOR_PORT",
        "dynamicconfigversion" : "SYS_DYNAMICCONFIGGENERATOR_VERSION",
	      
	    "ruleserviceurl" : "SYS_RULESERVICE_HOST",
    	     "ruleserviceport" : "SYS_RULESERVICE_PORT",
    	     "ruleserviceversion" : "SYS_RULESERVICE_VERSION",

        "httprogrammingurl" : "SYS_HTTPROGRAMINGAPI_HOST",
        "httprogrammingport" : "SYS_HTTPROGRAMINGAPI_PORT",
        "httprogrammingversion" : "SYS_HTTPROGRAMINGAPI_VERSION"

    }
};

//NODE_CONFIG_DIR

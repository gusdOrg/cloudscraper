module.exports = [
    {
        name: "STRIPE_API",
        pattern: /sk_live_\S*$)/g
    },
    {
        name: "MERCADO_PAGO",
        pattern: /APP_USR\S*$)/g
    },
    {
        name: "AMAZON_AWS",
        pattern: /([^A-Z0-9]|^)(AKIA|A3T|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{12,}',['EXAMPLE']))/g
    },
    {
        name: "FACEBOOK",
        pattern: /\W([0-9a-f]{32})$'))/g
    },
    {
        name: "FCM_SERVER_KEY",
        pattern: /(AAAA[a-zA-Z0-9_-]{7}:[a-zA-Z0-9_-]{140})'))/g
    },
    {
        name: "GITHUB_CLIENT_SECRET",
        pattern: /[\W]{1,2}([a-f0-9]{40})[\W]{1,2}$'))/g
    },
    {
        name: "GOOGLE_FIREBASE_OR_MAPS",
        pattern: /(AIza[0-9A-Za-z\\-_]{35})'))/g
    },
    {
        name: "GOOGLE_OAUTH_ACCESS_TOKEN",
        pattern: /(ya29\\.[0-9A-Za-z\\-_]+)'))/g
    },
    {
        name: "HEROKU",
        pattern: /(?:HEROKU_API_KEY|HEROKU_API_TOKEN|HEROKU_API_SECRET|heroku_api_key|heroku_api_token|heroku_api_secret|heroku_key|HEROKU_TOKEN|HEROKU_AUTH|heroku_auth|herokuAuth|heroku_auth_token)[\W|\s]{1,}([0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12})\W'))/g
    },
    {
        name: "JSON_WEB_TOKEN",
        pattern: /(eyJ[a-zA-Z0-9]{10,}\.eyJ[a-zA-Z0-9]{10,}\.[a-zA-Z0-9_-]{10,})'))/g
    },
    {
        name: "MAILCHIMP",
        pattern: /\W(?:[a-f0-9]{32}(-us[0-9]{1,2}))\W'))/g
    },
    {
        name: "MAILGUN",
        pattern: /(key-[0-9a-f]{32})'))/g
    },
    {
        name: "PAYPAL",
        pattern: /[\W]{1,2}([E][A-Z]{1}[a-zA-Z0-9_-]{78})[\W]{1,2}$'))/g
    },
    {
        name: "PRIVATE_SSH_KEY",
        pattern: /(-----BEGIN PRIVATE KEY-----[a-zA-Z0-9\S]{100,}-----END PRIVATE KEY-----)'))/g
    },
    {
        name: "PRIVATE_RSA_KEY",
        pattern: /(-----BEGIN RSA PRIVATE KEY-----[a-zA-Z0-9\S]{100,}-----END RSA PRIVATE KEY-----)'))/g
    },
    {
        name: "PRIVATE_DSA_KEY",
        pattern: /(-----BEGIN DSA PRIVATE KEY-----[a-zA-Z0-9\S]{100,}-----END DSA PRIVATE KEY-----)'))/g
    },
    {
        name: "PRIVATE_EC_KEY",
        pattern: /(-----BEGIN EC PRIVATE KEY-----[a-zA-Z0-9\S]{100,}-----END EC PRIVATE KEY-----)'))/g
    },
    {
        name: "PRIVATE_PGP_KEY",
        pattern: /(-----BEGIN PGP PRIVATE KEY BLOCK-----[a-zA-Z0-9\S]{100,}-----END PGP PRIVATE KEY BLOCK-----)'))/g
    },
    {
        name: "PRIVATE_OPENSSH_KEY",
        pattern: /(-----BEGIN OPENSSH PRIVATE KEY-----[a-zA-Z0-9\S]{100,}-----END OPENSSH PRIVATE KEY-----)'))/g
    },
    {
        name: "SENDGRID_API_KEY",
        pattern: /(SG\.[a-zA-Z0-9-_]{22}\.[a-zA-Z0-9_-]{43})'))/g
    },
    {
        name: "SLACK_V2",
        pattern: /\W(xox[p|b|o|a]-[0-9]{1,}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})\W'))/g
    },
    {
        name: "SLACK_V1",
        pattern: /\W(xox[p|b|o|a]-[0-9]{1,}-[0-9]{1,}-[a-zA-Z0-9]{24})\W'))/g
    },
    {
        name: "SLACK_WEBHOOK_URL",
        pattern: /(hooks.slack.com\/services\/T[A-Z0-9]{8}\/B[A-Z0-9]{8}\/[a-zA-Z0-9]{1,})',['0000','XXXX']))/g
    },
    {
        name: "SQUARE_APP_SECRET",
        pattern: /sq0[a-z]{3}-[0-9A-Za-z\-_]{43}'))/g
    },
    {
        name: "SQUARE_PERSONAL_ACCESS_TOKEN",
        pattern: /\W(EAAA[a-zA-Z0-9_-]{60})\W'))/g
    },
    {
        name: "STRIPE_LIVE_SECRET_KEY",
        pattern: /(sk_live_[0-9a-zA-Z]{24})'))/g
    },
    {
        name: "STRIPE_LIVE_RESTRICTED_KEY",
        pattern: /(rk_live_[0-9a-zA-Z]{24,34})'))/g
    },
    {
        name: "TWITTER",
        pattern: /[\W]{1,2}([a-zA-Z0-9]{50})[\W]{1,2}$'))/g
    },
    {
        name: "TWILIO_API_KEY",
        pattern: /SK[0-9a-fA-F]{32}'))/g
    },

    {
        name: "GOOGLE_SECRET",
        pattern: /(\'|\"|\=)(?=(.*[0-9].*))(?=(.*[A-Z].*))(?=([0-9A-Za-z-_]{24})(\1|\'|\"|(\s*(\r\n|\r|\n))))(?!.*\1.*\1.*)(?=(.*[a-z].*))(.*)(\1|\'|\"|(\s*(\r\n|\r|\n)))/g,
    },
    {
        name: "GOOGLE_URL",
        pattern: /([0-9]{12}-[a-z0-9]{32}.apps.googleusercontent.com)/g,
    },
    {
        name: "TWILIO_SID",
        pattern: /(AC[a-f0-9]{32}[^a-f0-9])/g,
    },
    {
        name: "TWILIO_AUTH",
        pattern: /\W[a-f0-9]{32}\W/g
    },
    {
        name: "SLACK_TOKEN",
        pattern: /(xox[pborsa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})/g,
    },
    {
        name: "RSA_PRIVATE_KEY",
        pattern: /-----BEGIN RSA PRIVATE KEY-----/g,
    },
    {
        name: "SSH_DSA_PRIVATE_KEY",
        pattern: /-----BEGIN DSA PRIVATE KEY-----/g,
    },
    {
        name: "SSH_EC_PRIVATE_KEY",
        pattern: /-----BEGIN EC PRIVATE KEY-----/g,
    },
    {
        name: "PGP_PRIVATE_KEY_BLOCK",
        pattern: /-----BEGIN PGP PRIVATE KEY BLOCK-----/g,
    },
    {
        name: "AWS_API_KEY",
        pattern: /((?:A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16})/g,
    },
    {
        name: "AMAZON_MWS_AUTH_TOKEN",
        pattern: /amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g,
    },
    {
        name: "AWS_API_KEY",
        pattern: /AKIA[0-9A-Z]{16}/g,
    },
    {
        name: "AWS_APP_SYNC_GRAPH_QL_KEY",
        pattern: /da2-[a-z0-9]{26}/g,
    },
    {
        name: "FACEBOOK_ACCESS_TOKEN",
        pattern: /EAACEdEose0cBA[0-9A-Za-z]+/g,
    },
    {
        name: "FACEBOOK_O_AUTH",
        pattern: /[fF][aA][cC][eE][bB][oO][oO][kK].*['|\"][0-9a-f]{32}['|\"]/g,
    },
    {
        name: "GIT_HUB",
        pattern: /[gG][iI][tT][hH][uU][bB].*['|\"][0-9a-zA-Z]{35,40}['|\"]/g,
    },
    {
        name: "GENERIC_API_KEY",
        pattern: /[aA][pP][iI]_?[kK][eE][yY].*['|\"][0-9a-zA-Z]{32,45}['|\"]/g,
    },
    {
        name: "GENERIC_SECRET",
        pattern: /[sS][eE][cC][rR][eE][tT].*['|\"][0-9a-zA-Z]{32,45}['|\"]/g,
    },
    {
        name: "GOOGLE_API_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/g,
    },
    {
        name: "GOOGLE_CLOUD_PLATFORM_API_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/g,
    },
    {
        name: "GOOGLE_CLOUD_PLATFORM_O_AUTH",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com/g,
    },
    {
        name: "GOOGLE_DRIVE_API_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/g,
    },
    {
        name: "GOOGLE_DRIVE_O_AUTH",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com/g,
    },
    {
        name: "GOOGLE_GCP_SERVICE_ACCOUNT",
        pattern: /\"type\": \"service_account\"/g,
    },
    {
        name: "GOOGLE_GMAIL_API_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/g,
    },
    {
        name: "GOOGLE_GMAIL_O_AUTH",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com/g,
    },
    {
        name: "GOOGLE_O_AUTH_ACCESS_TOKEN",
        pattern: /ya29\\.[0-9A-Za-z\\-_]+/g,
    },
    {
        name: "GOOGLE_YOU_TUBE_API_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/g,
    },
    {
        name: "GOOGLE_YOU_TUBE_O_AUTH",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com/g,
    },
    {
        name: "HEROKU_API_KEY",
        pattern: /[hH][eE][rR][oO][kK][uU].*[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/g,
    },
    {
        name: "MAIL_CHIMP_API_KEY",
        pattern: /[0-9a-f]{32}-us[0-9]{1,2}/g,
    },
    {
        name: "MAILGUN_API_KEY",
        pattern: /key-[0-9a-zA-Z]{32}/g,
    },
    {
        name: "PAY_PAL_BRAINTREE_ACCESS_TOKEN",
        pattern: /access_token\\$production\\$[0-9a-z]{16}\\$[0-9a-f]{32}/g,
    },
    {
        name: "PICATIC_API_KEY",
        pattern: /sk_live_[0-9a-z]{32}/g,
    },
    {
        name: "STRIPE_API_KEY",
        pattern: /sk_live_[0-9a-zA-Z]{24}/g,
    },
    {
        name: "STRIPE_RESTRICTED_API_KEY",
        pattern: /rk_live_[0-9a-zA-Z]{24}/g,
    },
    {
        name: "SQUARE_ACCESS_TOKEN",
        pattern: /sq0atp-[0-9A-Za-z\\-_]{22}/g,
    },
    {
        name: "SQUARE_O_AUTH_SECRET",
        pattern: /sq0csp-[0-9A-Za-z\\-_]{43}/g,
    },
    {
        name: "TELEGRAM_BOT_API_KEY",
        pattern: /[0-9]+:AA[0-9A-Za-z\\-_]{33}/g,
    },
    {
        name: "TWILIO_API_KEY",
        pattern: /SK[0-9a-fA-F]{32}/g,
    },
    {
        name: "TWITTER_ACCESS_TOKEN",
        pattern: /[tT][wW][iI][tT][tT][eE][rR].*[1-9][0-9]+-[0-9a-zA-Z]{40}/g,
    },
    {
        name: "TWITTER_O_AUTH",
        pattern: /[tT][wW][iI][tT][tT][eE][rR].*['|\"][0-9a-zA-Z]{35,44}['|\"]/g,
    },
    {
        name: "SLACK_TOKEN",
        pattern: /(xox[p|b|o|a]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})/g,
    },
    {
        name: "FACEBOOK_OAUTH",
        pattern: /[f|F][a|A][c|C][e|E][b|B][o|O][o|O][k|K].{0,30}['\"\\s][0-9a-f]{32}['\"\\s]/g,
    },
    {
        name: "TWITTER_OAUTH",
        pattern: /[t|T][w|W][i|I][t|T][t|T][e|E][r|R].{0,30}['\"\\s][0-9a-zA-Z]{35,44}['\"\\s]/g,
    },
    {
        name: "HEROKU_API",
        pattern: /[h|H][e|E][r|R][o|O][k|K][u|U].{0,30}[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/g,
    },
    {
        name: "MAILGUN_API",
        pattern: /key-[0-9a-zA-Z]{32}/g,
    },
    {
        name: "MAILCHAMP_API",
        pattern: /[0-9a-f]{32}-us[0-9]{1,2}/g,
    },
    {
        name: "PICATIC_API",
        pattern: /sk_live_[0-9a-z]{32}/g,
    },
    {
        name: "GOOGLE_OAUTH_ID",
        pattern: /[0-9(+-[0-9A-Za-z_]{32}.apps.qooqleusercontent.com/g,
    },
    {
        name: "GOOGLE_API",
        pattern: /AIza[0-9A-Za-z-_]{35}/g,
    },
    {
        name: "GOOGLE_CAPTCHA",
        pattern: /6L[0-9A-Za-z-_]{38}/g,
    },
    {
        name: "GOOGLE_OAUTH",
        pattern: /ya29\\.[0-9A-Za-z\\-_]+/g,
    },
    {
        name: "AMAZON_AWS_ACCESS_KEY_ID",
        pattern: /AKIA[0-9A-Z]{16}/g,
    },
    {
        name: "AMAZON_MWS_AUTH_TOKEN",
        pattern: /amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g,
    },
    {
        name: "AMAZONAWS_URL",
        pattern: /s3\\.amazonaws.com[/]+|[a-zA-Z0-9_-]*\\.s3\\.amazonaws.com/g,
    },
    {
        name: "FACEBOOK_ACCESS_TOKEN",
        pattern: /EAACEdEose0cBA[0-9A-Za-z]+/g,
    },
    {
        name: "AUTHORIZATION_BASIC",
        pattern: /basic [a-zA-Z0-9_\\-:\\.]+/g,
    },
    {
        name: "AUTHORIZATION_BEARE",
        pattern: /bearer [a-zA-Z0-9_\\-\\.]+/g,
    },
    {
        name: "AUTHORIZATION_API",
        pattern: /api[key|\\s*]+[a-zA-Z0-9_\\-]+/g,
    },
    {
        name: "MAILGUN_API_KEY",
        pattern: /key-[0-9a-zA-Z]{32}/g,
    },
    {
        name: "TWILIO_API_KEY",
        pattern: /SK[0-9a-fA-F]{32}/g,
    },
    {
        name: "TWILIO_ACCOUNT_SID",
        pattern: /AC[a-zA-Z0-9_\\-]{32}/g,
    },
    {
        name: "TWILIO_APP_SID",
        pattern: /AP[a-zA-Z0-9_\\-]{32}/g,
    },
    {
        name: "PAYPAL_BRAINTREE_ACCESS_TOKEN",
        pattern: /access_token\\$production\\$[0-9a-z]{16}\\$[0-9a-f]{32}/g,
    },
    {
        name: "SQUARE_OAUTH_SECRET",
        pattern: /sq0csp-[ 0-9A-Za-z\\-_]{43}/g,
    },
    {
        name: "SQUARE_ACCESS_TOKEN",
        pattern: /sqOatp-[0-9A-Za-z\\-_]{22}/g,
    },
    {
        name: "STRIPE_STANDARD_API",
        pattern: /sk_live_[0-9a-zA-Z]{24}/g,
    },
    {
        name: "STRIPE_RESTRICTED_API",
        pattern: /rk_live_[0-9a-zA-Z]{24}/g,
    },
    {
        name: "GITHUB_ACCESS_TOKEN",
        pattern: /[a-zA-Z0-9_-]*:[a-zA-Z0-9_\\-]+@github\\.com*/g,
    },
    {
        name: "RSA_PRIVATE_KEY",
        pattern: /-----BEGIN RSA PRIVATE KEY-----/g,
    },
    {
        name: "SSH_DSA_PRIVATE_KEY",
        pattern: /-----BEGIN DSA PRIVATE KEY-----/g,
    },
    {
        name: "SSH_DC_PRIVATE_KEY",
        pattern: /-----BEGIN EC PRIVATE KEY-----/g,
    },
    {
        name: "PGP_PRIVATE_BLOCK",
        pattern: /-----BEGIN PGP PRIVATE KEY BLOCK----/g,
    },

    {
        name: "ENVIRONMENT_CONFIGURATION_FILE",
        pattern: /(A3T[A-Z0-9]|AKIA|AGPA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/g
    },

    {
        name: "AWS_ACCESS_KEY_ID_VALUE",
        pattern: /((\\\"|'|`)?((?i)aws)?_?((?i)access)_?((?i)key)?_?((?i)id)?(\\\"|'|`)?\\\\s{0,50}(:|=>|=)\\\\s{0,50}(\\\"|'|`)?(A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}(\\\"|'|`)?)/g
    },

    {
        name: "AWS_ACCESS_KEY_ID",
        pattern: /((\\\"|'|`)?((?i)aws)?_?((?i)account)_?((?i)id)?(\\\"|'|`)?\\\\s{0,50}(:|=>|=)\\\\s{0,50}(\\\"|'|`)?[0-9]{4}-?[0-9]{4}-?[0-9]{4}(\\\"|'|`)?)/g
    },

    {
        name: "AWS_ACCOUNT_ID",
        pattern: /((\\\"|'|`)?((?i)aws)?_?((?i)secret)_?((?i)access)?_?((?i)key)?_?((?i)id)?(\\\"|'|`)?\\\\s{0,50}(:|=>|=)\\\\s{0,50}(\\\"|'|`)?[A-Za-z0-9/+=]{40}(\\\"|'|`)?)/g
    },

    {
        name: "AWS_SECRET_ACCESS_KEY",
        pattern: /((\\\"|'|`)?((?i)aws)?_?((?i)session)?_?((?i)token)?(\\\"|'|`)?\\\\s{0,50}(:|=>|=)\\\\s{0,50}(\\\"|'|`)?[A-Za-z0-9/+=]{16,}(\\\"|'|`)?)/g
    },

    {
        name: "AWS_SESSION_TOKEN",
        pattern: /(?i)artifactory.{0,50}(\\\"|'|`)?[a-zA-Z0-9=]{112}(\\\"|'|`)?/g
    },

    {
        name: "ARTIFACTORY",
        pattern: /(?i)codeclima.{0,50}(\\\"|'|`)?[0-9a-f]{64}(\\\"|'|`)?/g
    },

    {
        name: "ODE_CLIMATE",
        pattern: /EAACEdEose0cBA[0-9A-Za-z]+/g
    },

    {
        name: "FACEBOOK_ACCESS_TOKEN",
        pattern: /((\\\"|'|`)?type(\\\"|'|`)?\\\\s{0,50}(:|=>|=)\\\\s{0,50}(\\\"|'|`)?service_account(\\\"|'|`)?,?)/g
    },

    {
        name: "OOGLE_GCM_SERVICE_ACCOUNT",
        pattern: /(?:r|s)k_[live|test]_[0-9a-zA-Z]{24}/g
    },

    {
        name: "TRIPE_API_KEY",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com/g
    },

    {
        name: "GOOGLE_O_AUTH_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/g
    },

    {
        name: "GOOGLE_CLOUD_API_KEY",
        pattern: /ya29\\.[0-9A-Za-z\\-_]+/g
    },

    {
        name: "OOGLE_O_AUTH_ACCESS_TOKEN",
        pattern: /sk_[live|test]_[0-9a-z]{32}/g
    },

    {
        name: "ICATIC_API_KEY",
        pattern: /sq0atp-[0-9A-Za-z\-_]{22}/g
    },

    {
        name: "QUARE_ACCESS_TOKEN",
        pattern: /sq0csp-[0-9A-Za-z\-_]{43}/g
    },

    {
        name: "QUARE_O_AUTH_SECRET",
        pattern: /access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}/g
    },

    {
        name: "AY_PAL_BRAINTREE_ACCESS_TOKEN",
        pattern: /amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g
    },

    {
        name: "MAZON_MWS_AUTH_TOKEN",
        pattern: /SK[0-9a-fA-F]{32}/g
    },

    {
        name: "WILO_API_KEY",
        pattern: /SG\.[0-9A-Za-z\-_]{22}\.[0-9A-Za-z\-_]{43}/g
    },

    {
        name: "END_GRID_API_KEY",
        pattern: /key-[0-9a-zA-Z]{32}/g
    },

    {
        name: "AIL_GUN_API_KEY",
        pattern: /[0-9a-f]{32}-us[0-9]{12}/g
    },

    {
        name: "AIL_CHIMP_API_KEY",
        pattern: /sshpass -p.*['|\\\"]/g
    },



    {
        name: "OUTLOOK_TEAM",
        pattern: /(?i)sauce.{0,50}(\\\"|'|`)?[0-9a-f-]{36}(\\\"|'|`)?/g
    },

    {
        name: "SAUCE_TOKEN",
        pattern: /(xox[pboa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})/g
    },


    {
        name: "SLACK_WEBHOOK",
        pattern: /(?i)sonar.{0,50}(\\\"|'|`)?[0-9a-f]{40}(\\\"|'|`)?/g
    },

    {
        name: "SONAR_QUBE_DOCS_API_KEY",
        pattern: /(?i)hockey.{0,50}(\\\"|'|`)?[0-9a-f]{32}(\\\"|'|`)?/g
    },


    {
        name: "USERNAME_AND_PASSWORD_IN_URI",
        pattern: /oy2[a-z0-9]{43}/g
    },

    {
        name: "U_GET_API_KEY",
        pattern: /hawk\.[0-9A-Za-z\-_]{20}\.[0-9A-Za-z\-_]{20}/g
    },

    {
        name: "CREATED_BY_SFTP_DEPLOYMENT_FOR_ATOM_CONTAINS_SERVER_DETAILS_AND_CREDENTIALS",
        pattern: /-----BEGIN (EC|RSA|DSA|OPENSSH|PGP) PRIVATE KEY/g
    },

    {
        name: "CONTAINS_A_PRIVATE_KEY",
        pattern: /define(.{0,20})?(DB_CHARSET|NONCE_SALT|LOGGED_IN_SALT|AUTH_SALT|NONCE_KEY|DB_HOST|DB_PASSWORD|AUTH_KEY|SECURE_AUTH_KEY|LOGGED_IN_KEY|DB_NAME|DB_USER)(.{0,20})?[''|"].{10,120}[''|"]/g
    },

    {
        name: "WP_CONFIG",
        pattern: /(?i)(aws_access_key_id|aws_secret_access_key)(.{0,20})?=.[0-9a-zA-Z\/+]{20,40}/g
    },

    {
        name: "AWS_CRED_FILE_INFO",
        pattern: /(?i)(facebook|fb)(.{0,20})?(?-i)[''\"][0-9a-f]{32}[''\"]/g
    },

    {
        name: "FACEBOOK_SECRET_KEY",
        pattern: /(?i)(facebook|fb)(.{0,20})?[''\"][0-9]{13,17}[''\"]/g
    },

    {
        name: "FACEBOOK_CLIENT_ID",
        pattern: /(?i)twitter(.{0,20})?[''\"][0-9a-z]{35,44}[''\"]/g
    },

    {
        name: "TWITTER_SECRET_KEY",
        pattern: /(?i)twitter(.{0,20})?[''\"][0-9a-z]{18,25}[''\"]/g
    },

    {
        name: "TWITTER_CLIENT_ID",
        pattern: /(?i)github(.{0,20})?(?-i)[''\"][0-9a-zA-Z]{35,40}[''\"]/g
    },

    {
        name: "GITHUB_KEY",
        pattern: /(?i)heroku(.{0,20})?[''"][0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}[''"]/g
    },

    {
        name: "HEROKU_API_KEY",
        pattern: /(?i)linkedin(.{0,20})?(?-i)[''\"][0-9a-z]{12}[''\"]/g
    },

    {
        name: "LINKEDIN_CLIENT_ID",
        pattern: /(?i)linkedin(.{0,20})?[''\"][0-9a-z]{16}[''\"]/g
    },
    {
        name: "GOOGLE_API",
        pattern: /AIza[0-9A-Za-z-_]{35}/g
    },
    {
        name: "DOCS_FILE_EXETENSION",
        pattern: /^.*\.(xls|xlsx|doc|docx)$/g
    },
    {
        name: "BITCOIN_ADDRESS",
        pattern: /([13][a-km-zA-HJ-NP-Z0-9]{26,33})/g
    },
    {
        name: "SLACK_API_KEY",
        pattern: /xox.-[0-9]{12}-[0-9]{12}-[0-9a-zA-Z]{24}/g
    },
    {
        name: "GOOGLE_CLOUD_PLATFORM_AUTH",
        pattern: /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/g
    },
    {
        name: "GOOGLE_CLOUD_PLATFORM_API",
        pattern: /[A-Za-z0-9_]{21}--[A-Za-z0-9_]{8}/g
    },
    {
        name: "AMAZON_SECRET_KEY",
        pattern: /[0-9a-zA-Z/+]{40}/g
    },
    {
        name: "GMAIL_AUTH_TOKEN",
        pattern: /[0-9(+-[0-9A-Za-z_]{32}.apps.qooqleusercontent.com/g
    },
    {
        name: "GITHUB_AUTH_TOKEN",
        pattern: /[0-9a-fA-F]{40}/g
    },
    {
        name: "INSTAGRAM_TOKEN",
        pattern: /[0-9a-fA-F]{7}.[0-9a-fA-F]{32}/g
    },
    {
        name: "FIREBASE",
        pattern: /AAAA[A-Za-z0-9_-]{7}:[A-Za-z0-9_-]{140}/g
    },
    {
        name: "GOOGLE_CAPTCHA",
        pattern: /6L[0-9A-Za-z-_]{38}|^6[0-9a-zA-Z_-]{39}$/g
    },
    {
        name: "GOOGLE_OAUTH",
        pattern: /ya29\.[0-9A-Za-z\-_]+/g
    },
    {
        name: "AMAZON_AWS_ACCESS_KEY_ID",
        pattern: /A[SK]IA[0-9A-Z]{16}/g
    },
    {
        name: "AMAZON_MWS_AUTH_TOKE",
        pattern: /amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g
    },
    {
        name: "AMAZON_AWS_URL",
        pattern: /s3\.amazonaws.com[/]+|[a-zA-Z0-9_-]*\.s3\.amazonaws.com/g
    },
    {
        name: "FACEBOOK_ACCESS_TOKEN",
        pattern: /EAACEdEose0cBA[0-9A-Za-z]+/g
    },
    {
        name: "AUTHORIZATION_BASIC",
        pattern: /basic\s*[a-zA-Z0-9=:_\+\/-]+/g
    },
    {
        name: "AUTHORIZATION_BEARER",
        pattern: /bearer\s*[a-zA-Z0-9_\-\.=:_\+\/]+/g
    },
    {
        name: "AUTHORIZATION_API",
        pattern: /api[key|\s*]+[a-zA-Z0-9_\-]+/g
    },
    {
        name: "MAILGUN_API_KEY",
        pattern: /key-[0-9a-zA-Z]{32}/g
    },
    {
        name: "TWILIO_API_KEY",
        pattern: /SK[0-9a-fA-F]{32}/g
    },
    {
        name: "TWILIO_ACCOUNT_SID",
        pattern: /AC[a-zA-Z0-9_\-]{32}/g
    },
    {
        name: "TWILIO_APP_SID",
        pattern: /AP[a-zA-Z0-9_\-]{32}/g
    },
    {
        name: "PAYPAL_BRAINTREE_ACCESS_TOKEN",
        pattern: /access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}/g
    },
    {
        name: "SQUARE_OAUTH_SECRET",
        pattern: /sq0csp-[ 0-9A-Za-z\-_]{43}|sq0[a-z]{3}-[0-9A-Za-z\-_]{22,43}/g
    },
    {
        name: "SQUARE_ACCESS_TOKEN",
        pattern: /sqOatp-[0-9A-Za-z\-_]{22}|EAAA[a-zA-Z0-9]{60}/g
    },
    {
        name: "STRIPE_STANDARD_API",
        pattern: /sk_live_[0-9a-zA-Z]{24}/g
    },
    {
        name: "STRIPE_RESTRICTED_API",
        pattern: /rk_live_[0-9a-zA-Z]{24}/g
    },
    {
        name: "GITHUB_ACCESS_TOKEN",
        pattern: /[a-zA-Z0-9_-]*:[a-zA-Z0-9_\-]+@github\.com*/g
    },
    {
        name: "RSA_PRIVATE_KEY",
        pattern: /-----BEGIN RSA PRIVATE KEY-----/g
    },
    {
        name: "SSH_DSA_PRIVATE_KEY",
        pattern: /-----BEGIN DSA PRIVATE KEY-----/g
    },
    {
        name: "SSH_DC_PRIVATE_KEY",
        pattern: /-----BEGIN EC PRIVATE KEY-----/g
    },
    {
        name: "PGP_PRIVATE_BLOCK",
        pattern: /-----BEGIN PGP PRIVATE KEY BLOCK-----/g
    },
    {
        name: "JSON_WEB_TOKEN",
        pattern: /ey[A-Za-z0-9_-]*\.[A-Za-z0-9._-]*|ey[A-Za-z0-9_\/+-]*\.[A-Za-z0-9._\/+-]*/g
    },
    {
        name: "TWITTER_ACCESS_TOKEN",
        pattern: /[1-9][ 0-9]+-[0-9a-zA-Z]{40}/
    },
    {
        name: "TWITTER_USERNAME",
        pattern: /(^|[^@\w])@(\w{1,15})\b/g
    },
    {
        name: "FACEBOOK_O_AUTH_2_0",
        pattern: /[A-Za-z0-9]{125} (counting letters [2])/g
    },
    {
        name: "INSTAGRAM_O_AUTH_2_0",
        pattern: /[0-9a-fA-F]{7}\.[0-9a-fA-F]{32}/g
    },
    {
        name: "INSTAGRAM_USERNAME",
        pattern: /(?:@)([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/g
    },
    {
        name: "INSTAGRAM_HASHTAG",
        pattern: /(?:#)([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/g
    },
    {
        name: "GOOGLE_API_KEY",
        pattern: /AIza[0-9A-Za-z-_]{35}/
    },
    {
        name: "GOOGLE_O_AUTH_2_0_SECRET",
        pattern: /0-9a-zA-Z\-_]{24}/g
    },
    {
        name: "GOOGLE_O_AUTH_2_0_ACCESS_TOKEN",
        pattern: /ya29\.[0-9A-Za-z\-_]+/g
    },
    {
        name: "GIT_HUB_O_AUTH_2_0_ID",
        pattern: /[A-Za-z0-9_]{255}/g
    },
    {
        name: "FOURSQUARE_SECRET_KEY",
        pattern: /R_[0-9a-f]{32}/g
    },

    {
        name: "PICATIC_API_KEY",
        pattern: /sk_live_[0-9a-z]{32}/g
    },
    {
        name: "STRIPE_STANDARD_API_KEY",
        pattern: /sk_live_(0-9a-zA-Z]{24})/g
    },
    {
        name: "STRIPE_RESTRICTED_API_KEY",
        pattern: /sk_live_(0-9a-zA-Z]{24})/g
    },
    {
        name: "SQUARE_ACCESS_TOKEN",
        pattern: /sqOatp-[0-9A-Za-z\-_]{22}/g
    },
    {
        name: "SQUARE_O_AUTH_SECRET",
        pattern: /q0csp-[ 0-9A-Za-z\-_]{43}/g
    },
    {
        name: "PAYPAL_BRAINTREE_ACCESS_TOKEN",
        pattern: /access_token\,production\$[0-9a-z]{161[0-9a,]{32}/g
    },
    {
        name: "AMAZON_MARKETING_SERVICES_AUTH_TOKEN",
        pattern: /amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-10-9a-f1{4}-[0-9a,]{4}-[0-9a-f]{12}/g
    },
    {
        name: "VARIADOS",
        pattern: /amzn.mws]{8}-[0-9a-f]{4}-10-9a-f1{4}-[0-9a,]{4}-[0-9a-f]{12}/g
    },
    {
        name: "VARIADOS",
        pattern: /(A3T[A-Z0-9]|AKIA|AGPA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/g
    },
    {
        name: "VARIADOS",
        pattern: /(A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/g
    },
    {
        name: "VARIADOS",
        pattern: /https:\/\/hooks.slack.com\/services\/T[a-zA-Z0-9_]{8}\/B[a-zA-Z0-9_]{8}\/[a-zA-Z0-9_]{24}/g
    },
    {
        name: "VARIADOS",
        pattern: /virustotal[_-]?apikey(=| =|:| :)/g
    },
    {
        name: "VARIADOS",
        pattern: /TOKEN[\\-|_|A-Z0-9]*(\'|\")?(:|=)(\'|\")?[\\-|_|A-Z0-9]{10}/g
    },
    {
        name: "VARIADOS",
        pattern: /xoxb-[0-9A-Za-z\\-]{50}/g
    },
    {
        name: "VARIADOS",
        pattern: /xoxp-[0-9A-Za-z\\-]{71}/g
    },
    {
        name: "VARIADOS",
        pattern: /token=[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /[0-9a-f]{32}-us[0-9]{1,2}/g
    },
    {
        name: "VARIADOS",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/g
    },
    {
        name: "VARIADOS",
        pattern: /AAAA[a-zA-Z0-9_-]{5,100}:[a-zA-Z0-9_-]{140}/g
    },
    {
        name: "VARIADOS",
        pattern: /(API|api)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{10}/g
    },
    {
        name: "VARIADOS",
        pattern: /(token|TOKEN)(:|=| : | = )("|')[ 0-9A-Za-z\\-]{10}/g
    },
    {
        name: "VARIADOS",
        pattern: /(SECRET|secret)(:|=| : | = )("|')[0-9A-Za-z\\-]{10}/g
    },
    {
        name: "VARIADOS",
        pattern: /(key|KEY)(:|=)[0-9A-Za-z\\-]{10}/g
    },
    {
        name: "VARIADOS",
        pattern: /secret[_-]?0(=| =|:| :)/g
    },
    {
        name: "VARIADOS",
        pattern: /(password|PASSWORD)(:|=| : | = )("|')[0-9A-Za-z\\-]{10}/g
    },
    {
        name: "VARIADOS",
        pattern: /[0-9(+-[0-9A-Za-z_]{32}.apps.qooqleusercontent.com/g
    },
    {
        name: "VARIADOS",
        pattern: /R_[0-9a-f]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /sk_live_[0-9a-z]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /access_token,production$[0-9a-z]{161[0-9a,]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /key-[0-9a-zA-Z]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /xox[baprs]-[0-9]{12}-[0-9]{12}-[0-9a-zA-Z]{24}/g
    },
    {
        name: "VARIADOS",
        pattern: /AKIA[0-9A-Z]{16}/g
    },
    {
        name: "VARIADOS",
        pattern: /basic [a-zA-Z0-9]/g
    },
    {
        name: "VARIADOS",
        pattern: /bearer [a-zA-Z0-9]/g
    },
    {
        name: "VARIADOS",
        pattern: /amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g
    },
    {
        name: "VARIADOS",
        pattern: /EAACEdEose0cBA[0-9A-Za-z]+/g
    },
    {
        name: "VARIADOS",
        pattern: /(?i)(facebook|fb)(.{0,20})?['\"][0-9]{13,17}/g
    },
    {
        name: "VARIADOS",
        pattern: /[f|F][a|A][c|C][e|E][b|B][o|O][o|O][k|K].*['|\"][0-9a-f]{32}['|\"]/g
    },
    {
        name: "VARIADOS",
        pattern: /(GITHUB|github)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{10}/g
    },
    {
        name: "VARIADOS",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/g
    },
    {
        name: "VARIADOS",
        pattern: /(?i)(google|gcp|youtube|drive|yt)(.{0,20})?['\"][AIza[0-9a-z\\-_]{35}]['\"]/g
    },
    {
        name: "VARIADOS",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/g
    },
    {
        name: "VARIADOS",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com/g
    },
    {
        name: "VARIADOS",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/g
    },
    {
        name: "VARIADOS",
        pattern: /ya29\\.[0-9A-Za-z\\-_]+/g
    },
    {
        name: "VARIADOS",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/g
    },
    {
        name: "VARIADOS",
        pattern: /key-[0-9a-zA-Z]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /(?<=mailto:)[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]{10}/g
    },
    {
        name: "VARIADOS",
        pattern: /sk_live_[0-9a-z]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /xox[baprs]-([0-9a-zA-Z]{10,48})/g
    },
    {
        name: "VARIADOS",
        pattern: /(?:r|s)k_live_[0-9a-zA-Z]{24}/g
    },
    {
        name: "VARIADOS",
        pattern: /sqOatp-[0-9A-Za-z\\-_]{22}/g
    },
    {
        name: "VARIADOS",
        pattern: /sq0csp-[ 0-9A-Za-z\\-_]{43}/g
    },
    {
        name: "VARIADOS",
        pattern: /SK[0-9a-fA-F]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /(?i)twitter(.{0,20})?['\"][0-9a-z]{18,25}/g
    },
    {
        name: "VARIADOS",
        pattern: /[t|T][w|W][i|I][t|T][t|T][e|E][r|R].{0,30}['\"\\s][0-9a-zA-Z]{35,44}['\"\\s]/g
    },
    {
        name: "VARIADOS",
        pattern: /(?i)twitter(.{0,20})?['\"][0-9a-z]{35,44}/g
    },
    {
        name: "VARIADOS",
        pattern: /AAAA[A-Za-z0-9_-]{5,100}:[A-Za-z0-9_-]{140}/g
    },
    {
        name: "VARIADOS",
        pattern: /6L[0-9A-Za-z-_]{38}|^6[0-9a-zA-Z_-]{39}$/g
    },
    {
        name: "VARIADOS",
        pattern: /ya29\.[0-9A-Za-z\-_]+/g
    },
    {
        name: "VARIADOS",
        pattern: /amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g
    },
    {
        name: "VARIADOS",
        pattern: /s3\.amazonaws.com[/]+|[a-zA-Z0-9_-]*\.s3\.amazonaws.com/g
    },
    {
        name: "VARIADOS",
        pattern: /[a-zA-Z0-9-\.\_]+\.s3\.amazonaws\.com/g
    },
    {
        name: "VARIADOS",
        pattern: /s3-[a-zA-Z0-9-\.\_\/]/g
    },
    {
        name: "VARIADOS",
        pattern: /basic [a-zA-Z0-9=:_\+\/-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /bearer [a-zA-Z0-9_\-\.=:_\+\/]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /api[key|_key|\s+]+[a-zA-Z0-9_\-]{7,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /key-[0-9a-zA-Z]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /SK[0-9a-fA-F]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /AC[a-zA-Z0-9_\-]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /AP[a-zA-Z0-9_\-]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}/g
    },
    {
        name: "VARIADOS",
        pattern: /sq0csp-[ 0-9A-Za-z\-_]{43}|sq0[a-z]{3}-[0-9A-Za-z\-_]{22,43}/g
    },
    {
        name: "VARIADOS",
        pattern: /sqOatp-[0-9A-Za-z\-_]{22}|EAAA[a-zA-Z0-9]{60}/g
    },
    {
        name: "VARIADOS",
        pattern: /sk_live_[0-9a-zA-Z]{24}/g
    },
    {
        name: "VARIADOS",
        pattern: /rk_live_[0-9a-zA-Z]{24}/g
    },
    {
        name: "VARIADOS",
        pattern: /[a-zA-Z0-9_-]*:[a-zA-Z0-9_\-]+@github\.com*/g
    },
    {
        name: "VARIADOS",
        pattern: /ey[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/g
    },
    {
        name: "VARIADOS",
        pattern: /\"api_token\":\"(xox[a-zA-Z]-[a-zA-Z0-9-]+)\"/g
    },
    {
        name: "VARIADOS",
        pattern: /([-]+BEGIN [^\s]+ PRIVATE KEY[-]+[\s]*[^-]*[-]+END [^\s]+ PRIVATE KEY[-]+)/g
    },
    {
        name: "VARIADOS",
        pattern: /(JEKYLL_GITHUB_TOKEN|JEKYLL_GITHUB_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(SF_USERNAMEsalesforce|SF_USERNAMESALESFORCE)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(access_key|ACCESS_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(access_token|ACCESS_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(amazonaws|AMAZONAWS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(apiSecret|APISECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(api_key|API_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(api_secret|API_SECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(apidocs|APIDOCS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(apikey|APIKEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(app_key|APP_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(app_secret|APP_SECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(appkey|APPKEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(appkeysecret|APPKEYSECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(application_key|APPLICATION_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(appsecret|APPSECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(appspot|APPSPOT)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(auth|AUTH)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(auth_token|AUTH_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(authorizationToken|AUTHORIZATIONTOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(aws_access|AWS_ACCESS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(aws_access_key_id|AWS_ACCESS_KEY_ID)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(aws_key|AWS_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(aws_secret|AWS_SECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]7}/g
    },
    {
        name: "VARIADOS",
        pattern: /(aws_token|AWS_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(bashrcpassword|BASHRCPASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(bucket_password|BUCKET_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(client_secret|CLIENT_SECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(cloudfront|CLOUDFRONT)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(codecov_token|CODECOV_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(config|CONFIG)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(conn.login|CONN.LOGIN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(connectionstring|CONNECTIONSTRING)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(consumer_key|CONSUMER_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(credentials|CREDENTIALS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(database_password|DATABASE_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(db_password|DB_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(db_username|DB_USERNAME)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(dbpasswd|DBPASSWD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(dbpassword|DBPASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(dbuser|DBUSER)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{3}/g
    },
    {
        name: "VARIADOS",
        pattern: /(dot-files|DOT-FILES)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(dotfiles|DOTFILES)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(encryption_key|ENCRYPTION_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(fabricApiSecret|FABRICAPISECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(fb_secret|FB_SECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(firebase|FIREBASE)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(ftp|FTP)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(gh_token|GH_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(github_key|GITHUB_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(github_token|GITHUB_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(gitlab|GITLAB)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(gmail_password|GMAIL_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(gmail_username|GMAIL_USERNAME)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(api.googlemapsAIza|API.GOOGLEMAPSAIZA)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(herokuapp|HEROKUAPP)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(internal|INTERNAL)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(irc_pass|IRC_PASS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(key|KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(keyPassword|KEYPASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(ldap_password|LDAP_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(ldap_username|LDAP_USERNAME)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(login|LOGIN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(mailchimp|MAILCHIMP)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(mailgun|MAILGUN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(master_key|MASTER_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(mydotfiles|MYDOTFILES)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(mysql|MYSQL)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(node_env|NODE_ENV)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(npmrc_auth|NPMRC_AUTH)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(oauth_token|OAUTH_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(pass|PASS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(passwd|PASSWD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(password|PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(passwords|PASSWORDS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(pemprivate|PEMPRIVATE)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(preprod|PREPROD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(private_key|PRIVATE_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(prod|PROD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(pwd|PWD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(pwds|PWDS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(rds.amazonaws.compassword|RDS.AMAZONAWS.COMPASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(redis_password|REDIS_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(root_password|ROOT_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(secret|SECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(secret.password|SECRET.PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(secret_access_key|SECRET_ACCESS_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(secret_key|SECRET_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(secret_token|SECRET_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(secrets|SECRETS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(secure|SECURE)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(security_credentials|SECURITY_CREDENTIALS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(send.keys|SEND.KEYS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(send_keys|SEND_KEYS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(sf_username|SF_USERNAME)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(slack_api|SLACK_API)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(slack_token|SLACK_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(sql_password|SQL_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(ssh|SSH)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(ssh2_auth_password|SSH2_AUTH_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(sshpass|SSHPASS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(staging|STAGING)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(stg|STG)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(storePassword|STOREPASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(stripe|STRIPE)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(swagger|SWAGGER)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "VARIADOS",
        pattern: /(testuser|TESTUSER)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/g
    },
    {
        name: "ADAFRUIT_API_KEY",
        pattern: /(?i)(?:adafruit)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9_-]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "ADOBE_CLIENT_ID_O_AUTH_WEB",
        pattern: /(?i)(?:adobe)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "ADOBE_CLIENT_SECRET",
        pattern: /(?i)\b((p8e-)(?i)[a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "AGE_SECRET_KEY",
        pattern: /AGE-SECRET-KEY-1[QPZRY9X8GF2TVDW0S3JN54KHCE6MUA7L]{58}/g
    },

    {
        name: "AIRTABLE_API_KEY",
        pattern: /(?i)(?:airtable)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{17})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "ALGOLIA_API_KEY",
        pattern: /(?i)(?:algolia)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "ALIBABA_ACCESS_KEY_ID",
        pattern: /(?i)\b((LTAI)(?i)[a-z0-9]{20})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "ALIBABA_SECRET_KEY",
        pattern: /(?i)(?:alibaba)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{30})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "ASANA_CLIENT_ID",
        pattern: /(?i)(?:asana)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([0-9]{16})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "ASANA_CLIENT_SECRET",
        pattern: /(?i)(?:asana)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "ATLASSIAN_API_TOKEN",
        pattern: /(?i)(?:atlassian|confluence|jira)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{24})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "AWS",
        pattern: /(A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/g
    },

    {
        name: "BEAMER_API_TOKEN",
        pattern: /(?i)(?:beamer)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(b_[a-z0-9=_\-]{44})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "BITBUCKET_CLIENT_ID",
        pattern: /(?i)(?:bitbucket)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "BITBUCKET_CLIENT_SECRET",
        pattern: /(?i)(?:bitbucket)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "BITTREX_ACCESS_KEY",
        pattern: /(?i)(?:bittrex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "BITTREX_SECRET_KEY",
        pattern: /(?i)(?:bittrex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "CLOJARS_API_TOKEN",
        pattern: /(?i)(CLOJARS_)[a-z0-9]{60}/g
    },

    {
        name: "CODECOV_ACCESS_TOKEN",
        pattern: /(?i)(?:codecov)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "COINBASE_ACCESS_TOKEN",
        pattern: /(?i)(?:coinbase)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9_-]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "CONFLUENT_ACCESS_TOKEN",
        pattern: /(?i)(?:confluent)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{16})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "CONFLUENT_SECRET_KEY",
        pattern: /(?i)(?:confluent)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "CONTENTFUL_DELIVERY_API_TOKEN",
        pattern: /(?i)(?:contentful)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{43})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DATABRICKS_API_TOKEN",
        pattern: /(?i)\b(dapi[a-h0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DATADOG_ACCESS_TOKEN",
        pattern: /(?i)(?:datadog)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DIGITAL_OCEAN_O_AUTH_ACCESS_TOKEN",
        pattern: /(?i)\b(doo_v1_[a-f0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN",
        pattern: /(?i)\b(dop_v1_[a-f0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DIGITAL_OCEAN_O_AUTH_REFRESH_TOKEN",
        pattern: /(?i)\b(dor_v1_[a-f0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DISCORD_API_KEY",
        pattern: /(?i)(?:discord)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DISCORD_CLIENT_ID",
        pattern: /(?i)(?:discord)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([0-9]{18})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DISCORD_CLIENT_SECRET",
        pattern: /(?i)(?:discord)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DOPPLER_API_TOKEN",
        pattern: /(dp\.pt\.)(?i)[a-z0-9]{43}/g
    },

    {
        name: "DRONECI_ACCESS_TOKEN",
        pattern: /(?i)(?:droneci)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DROPBOX_API_SECRET",
        pattern: /(?i)(?:dropbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{15})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DROPBOX_LONG_LIVED_API_TOKEN",
        pattern: /(?i)(?:dropbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{11}(AAAAAAAAAA)[a-z0-9\-_=]{43})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DROPBOX_SHORT_LIVED_API_TOKEN",
        pattern: /(?i)(?:dropbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(sl\.[a-z0-9\-=_]{135})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "DUFFEL_API_TOKEN",
        pattern: /duffel_(test|live)_(?i)[a-z0-9_\-=]{43}/g
    },

    {
        name: "DYNATRACE_API_TOKEN",
        pattern: /dt0c01\.(?i)[a-z0-9]{24}\.[a-z0-9]{64}/g
    },

    {
        name: "EASY_POST_API_TOKEN",
        pattern: /EZAK(?i)[a-z0-9]{54}/g
    },

    {
        name: "EASY_POST_TEST_API_TOKEN",
        pattern: /EZTK(?i)[a-z0-9]{54}/g
    },

    {
        name: "ETSY_ACCESS_TOKEN",
        pattern: /(?i)(?:etsy)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{24})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "FACEBOOK",
        pattern: /(?i)(?:facebook)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "FASTLY_API_KEY",
        pattern: /(?i)(?:fastly)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "FINICITY_API_TOKEN",
        pattern: /(?i)(?:finicity)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "FINICITY_CLIENT_SECRET",
        pattern: /(?i)(?:finicity)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{20})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "FINNHUB_ACCESS_TOKEN",
        pattern: /(?i)(?:finnhub)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{20})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "FLICKR_ACCESS_TOKEN",
        pattern: /(?i)(?:flickr)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "FLUTTERWAVE_ENCRYPTION_KEY",
        pattern: /FLWSECK_TEST-(?i)[a-h0-9]{12}/g
    },

    {
        name: "FINICITY_PUBLIC_KEY",
        pattern: /FLWPUBK_TEST-(?i)[a-h0-9]{32}-X/g
    },

    {
        name: "FLUTTERWAVE_SECRET_KEY",
        pattern: /FLWSECK_TEST-(?i)[a-h0-9]{32}-X/g
    },

    {
        name: "FRAME_IO_API_TOKEN",
        pattern: /fio-u-(?i)[a-z0-9\-_=]{64}/g
    },

    {
        name: "FRESHBOOKS_ACCESS_TOKEN",
        pattern: /(?i)(?:freshbooks)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "GCP_API_KEY",
        pattern: /(?i)\b(AIza[0-9A-Za-z\\-_]{35})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "GENERIC_API_KEY",
        pattern: /(?i)(?:key|api|token|secret|client|passwd|password|auth|access)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([0-9a-z\-_.=]{10,150})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "GIT_HUB_APP_TOKEN",
        pattern: /(ghu|ghs)_[0-9a-zA-Z]{36}/g
    },

    {
        name: "GIT_HUB_O_AUTH_ACCESS_TOKEN",
        pattern: /gho_[0-9a-zA-Z]{36}/g
    },

    {
        name: "GIT_HUB_PERSONAL_ACCESS_TOKEN",
        pattern: /ghp_[0-9a-zA-Z]{36}/g
    },

    {
        name: "GIT_HUB_REFRESH_TOKEN",
        pattern: /ghr_[0-9a-zA-Z]{36}/g
    },

    {
        name: "GIT_LAB_PERSONAL_ACCESS_TOKEN",
        pattern: /glpat-[0-9a-zA-Z\-\_]{20}/g
    },

    {
        name: "GITTER_ACCESS_TOKEN",
        pattern: /(?i)(?:gitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9_-]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "GO_CARDLESS_API_TOKEN",
        pattern: /(?i)(?:gocardless)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(live_(?i)[a-z0-9\-_=]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "GRAFANA_API_KEY_OR_GRAFANA_CLOUD_API_KEY",
        pattern: /(?i)\b(eyJrIjoi[A-Za-z0-9]{70,400}={0,2})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "GRAFANA_CLOUD_API_TOKEN",
        pattern: /(?i)\b(glc_[A-Za-z0-9+/]{32,400}={0,2})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "GRAFANA_SERVICE_ACCOUNT_TOKEN",
        pattern: /(?i)\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "HASHI_CORP_TERRAFORM_USER_ORG_API_TOKEN",
        pattern: /(?i)[a-z0-9]{14}\.atlasv1\.[a-z0-9\-_=]{60,70}/g
    },

    {
        name: "HEROKU_API_KEY",
        pattern: /(?i)(?:heroku)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "HUB_SPOT_API_TOKEN",
        pattern: /(?i)(?:hubspot)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "INTERCOM_API_TOKEN",
        pattern: /(?i)(?:intercom)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{60})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "JSON_WEB_TOKEN",
        pattern: /(?i)\b(ey[0-9a-z]{30,34}\.ey[0-9a-z-\/_]{30,500}\.[0-9a-zA-Z-\/_]{10,200})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "KRAKEN_ACCESS_TOKEN",
        pattern: /(?i)(?:kraken)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9\/=_\+\-]{80,90})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "KUCOIN_ACCESS_TOKEN",
        pattern: /(?i)(?:kucoin)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{24})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "KUCOIN_SECRET_KEY",
        pattern: /(?i)(?:kucoin)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "LAUNCHDARKLY_ACCESS_TOKEN",
        pattern: /(?i)(?:launchdarkly)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "LINEAR_API_TOKEN",
        pattern: /lin_api_(?i)[a-z0-9]{40}/g
    },

    {
        name: "LINEAR_CLIENT_SECRET",
        pattern: /(?i)(?:linear)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "LINKED_IN_CLIENT_ID",
        pattern: /(?i)(?:linkedin|linked-in)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{14})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "LINKED_IN_CLIENT_SECRET",
        pattern: /(?i)(?:linkedin|linked-in)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{16})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "LOB_API_KEY",
        pattern: /(?i)(?:lob)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}((live|test)_[a-f0-9]{35})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "LOB_PUBLISHABLE_API_KEY",
        pattern: /(?i)(?:lob)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}((test|live)_pub_[a-f0-9]{31})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "MAILCHIMP_API_KEY",
        pattern: /(?i)(?:mailchimp)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{32}-us20)(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "MAILGUN_PRIVATE_API_TOKEN",
        pattern: /(?i)(?:mailgun)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(key-[a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "MAILGUN_PUBLIC_VALIDATION_KEY",
        pattern: /(?i)(?:mailgun)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(pubkey-[a-f0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "MAILGUN_WEBHOOK_SIGNING_KEY",
        pattern: /(?i)(?:mailgun)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-h0-9]{32}-[a-h0-9]{8}-[a-h0-9]{8})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "MAP_BOX_API_TOKEN",
        pattern: /(?i)(?:mapbox)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(pk\.[a-z0-9]{60}\.[a-z0-9]{22})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "MATTERMOST_ACCESS_TOKEN",
        pattern: /(?i)(?:mattermost)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{26})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "MESSAGE_BIRD_API_TOKEN",
        pattern: /(?i)(?:messagebird|message-bird|message_bird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{25})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "MESSAGE_BIRD_CLIENT_ID",
        pattern: /(?i)(?:messagebird|message-bird|message_bird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "MICROSOFT_TEAMS_WEBHOOK",
        pattern: /https:\/\/[a-z0-9]+\.webhook\.office\.com\/webhookb2\/[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}@[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}\/IncomingWebhook\/[a-z0-9]{32}\/[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}/g
    },

    {
        name: "NETLIFY_ACCESS_TOKEN",
        pattern: /(?i)(?:netlify)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{40,46})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "NEW_RELIC_INGEST_BROWSER_API_TOKEN",
        pattern: /(?i)(?:new-relic|newrelic|new_relic)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(NRJS-[a-f0-9]{19})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "NEW_RELIC_USER_API_ID",
        pattern: /(?i)(?:new-relic|newrelic|new_relic)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "NEW_RELIC_USER_API_KEY",
        pattern: /(?i)(?:new-relic|newrelic|new_relic)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(NRAK-[a-z0-9]{27})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "NPM_ACCESS_TOKEN",
        pattern: /(?i)\b(npm_[a-z0-9]{36})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "NYTIMES_ACCESS_TOKEN",
        pattern: /(?i)(?:nytimes|new-york-times,|newyorktimes)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "OKTA_ACCESS_TOKEN",
        pattern: /(?i)(?:okta)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9=_\-]{42})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "PLAID_API_TOKEN",
        pattern: /(?i)(?:plaid)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(access-(?:sandbox|development|production)-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "PLAID_CLIENT_ID",
        pattern: /(?i)(?:plaid)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{24})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "PLAID_SECRET_KEY",
        pattern: /(?i)(?:plaid)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{30})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "PLANET_SCALE_API_TOKEN",
        pattern: /(?i)\b(pscale_tkn_(?i)[a-z0-9=\-_\.]{32,64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "PLANET_SCALE_O_AUTH_TOKEN",
        pattern: /(?i)\b(pscale_oauth_(?i)[a-z0-9=\-_\.]{32,64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "PLANET_SCALE_PASSWORD",
        pattern: /(?i)\b(pscale_pw_(?i)[a-z0-9=\-_\.]{32,64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "POSTMAN_API_TOKEN",
        pattern: /(?i)\b(PMAK-(?i)[a-f0-9]{24}\-[a-f0-9]{34})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "PREFECT_API_TOKEN",
        pattern: /(?i)\b(pnu_[a-z0-9]{36})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "PRIVATE_KEY",
        pattern: /(?i)-----BEGIN[ A-Z0-9_-]{0,100}PRIVATE KEY( BLOCK)?-----[\s\S-]*KEY----/g
    },

    {
        name: "PULUMI_API_TOKEN",
        pattern: /(?i)\b(pul-[a-f0-9]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "PY_PI_UPLOAD_TOKEN",
        pattern: /pypi-AgEIcHlwaS5vcmc[A-Za-z0-9\-_]{50,1000}/g
    },

    {
        name: "RAPID_API_ACCESS_TOKEN",
        pattern: /(?i)(?:rapidapi)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9_-]{50})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "README_API_TOKEN",
        pattern: /(?i)\b(rdme_[a-z0-9]{70})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "RUBYGEM_API_TOKEN",
        pattern: /(?i)\b(rubygems_[a-f0-9]{48})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "SENDBIRD_ACCESS_ID",
        pattern: /(?i)(?:sendbird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "SENDBIRD_ACCESS_TOKEN",
        pattern: /(?i)(?:sendbird)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "SEND_GRID_API_TOKEN",
        pattern: /(?i)\b(SG\.(?i)[a-z0-9=_\-\.]{66})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "SENDINBLUE_API_TOKEN",
        pattern: /(?i)\b(xkeysib-[a-f0-9]{64}\-(?i)[a-z0-9]{16})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "SENTRY_ACCESS_TOKEN",
        pattern: /(?i)(?:sentry)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "SHIPPO_API_TOKEN",
        pattern: /(?i)\b(shippo_(live|test)_[a-f0-9]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "SHOPIFY_ACCESS_TOKEN",
        pattern: /shpat_[a-fA-F0-9]{32}/g
    },

    {
        name: "SHOPIFY_CUSTOM_ACCESS_TOKEN",
        pattern: /shpca_[a-fA-F0-9]{32}/g
    },

    {
        name: "SHOPIFY_PRIVATE_APP_ACCESS_TOKEN",
        pattern: /shppa_[a-fA-F0-9]{32}/g
    },

    {
        name: "SHOPIFY_SHARED_SECRET",
        pattern: /shpss_[a-fA-F0-9]{32}/g
    },

    {
        name: "SIDEKIQ_SECRET",
        pattern: /(?i)(?:BUNDLE_ENTERPRISE__CONTRIBSYS__COM|BUNDLE_GEMS__CONTRIBSYS__COM)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-f0-9]{8}:[a-f0-9]{8})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "SIDEKIQ_SENSITIVE_URL",
        pattern: /(?i)\b(http(?:s??):\/\/)([a-f0-9]{8}:[a-f0-9]{8})@(?:gems.contribsys.com|enterprise.contribsys.com)(?:[\/|\#|\?|:]|$)/g
    },

    {
        name: "SLACK_TOKEN",
        pattern: /xox[baprs]-([0-9a-zA-Z]{10,48})/g
    },

    {
        name: "SLACK_WEBHOOK",
        pattern: /https:\/\/hooks.slack.com\/(services|workflows)\/[A-Za-z0-9+\/]{44,46}/g
    },

    {
        name: "SQUARE_ACCESS_TOKEN",
        pattern: /(?i)\b(sq0atp-[0-9A-Za-z\-_]{22})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "SQUARESPACE_ACCESS_TOKEN",
        pattern: /(?i)(?:squarespace)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "STRIPE",
        pattern: /(?i)(sk|pk)_(test|live)_[0-9a-z]{10,32}/g
    },

    {
        name: "SUMO_LOGIC_ACCESS_ID",
        pattern: /(?i)(?:sumo)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{14})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "SUMO_LOGIC_ACCESS_TOKEN",
        pattern: /(?i)(?:sumo)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{64})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "TELEGRAM_BOT_API_TOKEN",
        pattern: /(?i)(?:^|[^0-9])([0-9]{5,16}:A[a-zA-Z0-9_\-]{34})(?:$|[^a-zA-Z0-9_\-])/g
    },

    {
        name: "TRAVIS_CI_ACCESS_TOKEN",
        pattern: /(?i)(?:travis)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{22})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "TWILIO_API_KEY",
        pattern: /SK[0-9a-fA-F]{32}/g
    },

    {
        name: "TWITCH_API_TOKEN",
        pattern: /(?i)(?:twitch)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{30})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "TWITTER_ACCESS_SECRET",
        pattern: /(?i)(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{45})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "TWITTER_ACCESS_TOKEN",
        pattern: /(?i)(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([0-9]{15,25}-[a-zA-Z0-9]{20,40})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "TWITTER_API_KEY",
        pattern: /(?i)(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{25})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "TWITTER_API_SECRET",
        pattern: /(?i)(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{50})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "TWITTER_BEARER_TOKEN",
        pattern: /(?i)(?:twitter)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(A{22}[a-zA-Z0-9%]{80,100})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "TYPEFORM_API_TOKEN",
        pattern: /(?i)(?:typeform)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(tfp_[a-z0-9\-_\.=]{59})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "VAULT_BATCH_TOKEN",
        pattern: /(?i)\b(hvb\.[a-z0-9_-]{138,212})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "VAULT_SERVICE_TOKEN",
        pattern: /(?i)\b(hvs\.[a-z0-9_-]{90,100})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "YANDEX_ACCESS_TOKEN",
        pattern: /(?i)(?:yandex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(t1\.[A-Z0-9a-z_-]+[=]{0,2}\.[A-Z0-9a-z_-]{86}[=]{0,2})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "YANDEX_API_KEY",
        pattern: /(?i)(?:yandex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(AQVN[A-Za-z0-9_\-]{35,38})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "YANDEX_AWS_ACCESS_TOKEN",
        pattern: /(?i)(?:yandex)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}(YC[a-zA-Z0-9_\-]{38})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },

    {
        name: "ZENDESK_SECRET_KEY",
        pattern: /(?i)(?:zendesk)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{40})(?:['|\"|\n|\r|\s|\x60|;]|$)/g
    },


]
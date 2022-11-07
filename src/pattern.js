module.exports = [
    {
        name: "STRIPE_API",
        pattern: /sk_live_[0-9a-zA-Z]+/i
    },
    {
        name: "MERCADO_PAGO",
        pattern: /APP_USR[0-9a-zA-Z]+/i
    },
    

    {
        name:"CIELO MERCHANT ID",
        pattern:/Merchant ID\: [0-9a-zA-Z]+\-[0-9a-zA-Z]+\-[0-9a-zA-Z]+\-[0-9a-zA-Z]+/i
    },
    {
        name:"CIELO MERCHANT KEY",
        pattern:/Merchant Key\: [0-9a-zA-Z]+/i
    },
    {
        name:"REDE KEY",
        pattern:/\d{8}\:[0-9a-zA-Z]+/i
    },
    {
        name: "AMAZON_AWS",
        pattern: /([^A-Z0-9]|^)(AKIA|A3T|AGPA|AIDA|AROA|AIPcNVA|ASIA)[A-Z0-9]{12,}/i
    },
    {
        name: "FACEBOOK",
        pattern: /\W([0-9a-f]{32})$/i
    },
    {
        name: "FCM_SERVER_KEY",
        pattern: /(AAAA[a-zA-Z0-9_-]{7}:[a-zA-Z0-9_-]{140})/i
    },
    {
        name: "GITHUB_CLIENT_SECRET",
        pattern: /[\W]{1,2}([a-f0-9]{40})[\W]{1,2}$/i
    },
    {
        name: "GOOGLE_FIREBASE_OR_MAPS",
        pattern: /(AIza[0-9A-Za-z\\-_]{35})/i
    },
    {
        name: "GOOGLE_OAUTH_ACCESS_TOKEN",
        pattern: /(ya29\\.[0-9A-Za-z\\-_]+)/i
    },
   
    {
        name: "PAYPAL",
        pattern: /[\W]{1,2}([E][A-Z]{1}[a-zA-Z0-9_-]{78})[\W]{1,2}$/i
    },
    {
        name: "PRIVATE_SSH_KEY",
        pattern: /(-----BEGIN PRIVATE KEY-----[a-zA-Z0-9\S]{100,}-----END PRIVATE KEY-----)/i
    },
    {
        name: "PRIVATE_RSA_KEY",
        pattern: /(-----BEGIN RSA PRIVATE KEY-----[a-zA-Z0-9\S]{100,}-----END RSA PRIVATE KEY-----)/i
    },
    {
        name: "PRIVATE_DSA_KEY",
        pattern: /(-----BEGIN DSA PRIVATE KEY-----[a-zA-Z0-9\S]{100,}-----END DSA PRIVATE KEY-----)/i
    },
    {
        name: "PRIVATE_EC_KEY",
        pattern: /(-----BEGIN EC PRIVATE KEY-----[a-zA-Z0-9\S]{100,}-----END EC PRIVATE KEY-----)/i
    },
    {
        name: "PRIVATE_PGP_KEY",
        pattern: /(-----BEGIN PGP PRIVATE KEY BLOCK-----[a-zA-Z0-9\S]{100,}-----END PGP PRIVATE KEY BLOCK-----)/i
    },
    {
        name: "PRIVATE_OPENSSH_KEY",
        pattern: /(-----BEGIN OPENSSH PRIVATE KEY-----[a-zA-Z0-9\S]{100,}-----END OPENSSH PRIVATE KEY-----)/i
    },
    {
        name: "STRIPE_LIVE_SECRET_KEY",
        pattern: /(sk_live_[0-9a-zA-Z]+)/i
    },
    {
        name: "STRIPE_LIVE_RESTRICTED_KEY",
        pattern: /(rk_live_[0-9a-zA-Z]+})/i
    },
    {
        name: "TWITTER",
        pattern: /[\W]{1,2}([a-zA-Z0-9]{50})[\W]{1,2}$/i
    },
    {
        name: "TWILIO_API_KEY",
        pattern: /SK[0-9a-fA-F]{32}/i
    },

    {
        name: "TWILIO_SID",
        pattern: /(AC[a-f0-9]{32}[^a-f0-9])/i,
    },
    {
        name: "TWILIO_AUTH",
        pattern: /\W[a-f0-9]{32}\W/i
    },
   
    {
        name: "RSA_PRIVATE_KEY",
        pattern: /-----BEGIN RSA PRIVATE KEY-----/i,
    },
    {
        name: "SSH_DSA_PRIVATE_KEY",
        pattern: /-----BEGIN DSA PRIVATE KEY-----/i,
    },
    {
        name: "SSH_EC_PRIVATE_KEY",
        pattern: /-----BEGIN EC PRIVATE KEY-----/i,
    },
    {
        name: "PGP_PRIVATE_KEY_BLOCK",
        pattern: /-----BEGIN PGP PRIVATE KEY BLOCK-----/i,
    },
    {
        name: "AWS_API_KEY",
        pattern: /((?:A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16})/i,
    },
    {
        name: "AMAZON_MWS_AUTH_TOKEN",
        pattern: /amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
    },
    {
        name: "AWS_API_KEY",
        pattern: /AKIA[0-9A-Z]{16}/i,
    },
    {
        name: "AWS_APP_SYNC_GRAPH_QL_KEY",
        pattern: /da2-[a-z0-9]{26}/i,
    },
    {
        name: "FACEBOOK_ACCESS_TOKEN",
        pattern: /EAACEdEose0cBA[0-9A-Za-z]+/i,
    },
    {
        name: "FACEBOOK_O_AUTH",
        pattern: /[fF][aA][cC][eE][bB][oO][oO][kK].*['|\"][0-9a-f]{32}['|\"]/i,
    },
    {
        name: "GIT_HUB",
        pattern: /[gG][iI][tT][hH][uU][bB].*['|\"][0-9a-zA-Z]{35,40}['|\"]/i,
    },
    {
        name: "GENERIC_API_KEY",
        pattern: /[aA][pP][iI]_?[kK][eE][yY].*['|\"][0-9a-zA-Z]{32,45}['|\"]/i,
    },
    {
        name: "GENERIC_SECRET",
        pattern: /[sS][eE][cC][rR][eE][tT].*['|\"][0-9a-zA-Z]{32,45}['|\"]/i,
    },
    {
        name: "GOOGLE_API_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/i,
    },
    {
        name: "GOOGLE_CLOUD_PLATFORM_API_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/i,
    },
    {
        name: "GOOGLE_CLOUD_PLATFORM_O_AUTH",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com/i,
    },
    {
        name: "GOOGLE_DRIVE_API_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/i,
    },
    {
        name: "GOOGLE_DRIVE_O_AUTH",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com/i,
    },
    {
        name: "GOOGLE_GCP_SERVICE_ACCOUNT",
        pattern: /\"type\": \"service_account\"/i,
    },
    {
        name: "GOOGLE_GMAIL_API_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/i,
    },
    {
        name: "GOOGLE_GMAIL_O_AUTH",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com/i,
    },
    {
        name: "GOOGLE_O_AUTH_ACCESS_TOKEN",
        pattern: /ya29\\.[0-9A-Za-z\\-_]+/i,
    },
    {
        name: "GOOGLE_YOU_TUBE_API_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/i,
    },
    {
        name: "GOOGLE_YOU_TUBE_O_AUTH",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com/i,
    },
    {
        name: "HEROKU_API_KEY",
        pattern: /[hH][eE][rR][oO][kK][uU].*[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/i,
    },
    {
        name: "MAIL_CHIMP_API_KEY",
        pattern: /[0-9a-f]{32}-us[0-9]{1,2}/i,
    },
    {
        name: "MAILGUN_API_KEY",
        pattern: /key-[0-9a-zA-Z]{32}/i,
    },
    {
        name: "PAY_PAL_BRAINTREE_ACCESS_TOKEN",
        pattern: /access_token\\$production\\$[0-9a-z]{16}\\$[0-9a-f]{32}/i,
    },
    {
        name: "PICATIC_API_KEY",
        pattern: /sk_live_[0-9a-z]{32}/i,
    },
    {
        name: "STRIPE_API_KEY",
        pattern: /sk_live_[0-9a-zA-Z]+/i,
    },
    {
        name: "STRIPE_RESTRICTED_API_KEY",
        pattern: /rk_live_[0-9a-zA-Z]+/i,
    },
    {
        name: "SQUARE_ACCESS_TOKEN",
        pattern: /sq0atp-[0-9A-Za-z\\-_]{22}/i,
    },
    {
        name: "SQUARE_O_AUTH_SECRET",
        pattern: /sq0csp-[0-9A-Za-z\\-_]{43}/i,
    },
    {
        name: "TELEGRAM_BOT_API_KEY",
        pattern: /[0-9]+:AA[0-9A-Za-z\\-_]{33}/i,
    },
    {
        name: "TWILIO_API_KEY",
        pattern: /SK[0-9a-fA-F]{32}/i,
    },
    {
        name: "TWITTER_ACCESS_TOKEN",
        pattern: /[tT][wW][iI][tT][tT][eE][rR].*[1-9][0-9]+-[0-9a-zA-Z]{40}/i,
    },
    {
        name: "TWITTER_O_AUTH",
        pattern: /[tT][wW][iI][tT][tT][eE][rR].*['|\"][0-9a-zA-Z]{35,44}['|\"]/i,
    },
    {
        name: "SLACK_TOKEN",
        pattern: /(xox[p|b|o|a]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})/i,
    },
    {
        name: "FACEBOOK_OAUTH",
        pattern: /[f|F][a|A][c|C][e|E][b|B][o|O][o|O][k|K].{0,30}['\"\\s][0-9a-f]{32}['\"\\s]/i,
    },
    {
        name: "TWITTER_OAUTH",
        pattern: /[t|T][w|W][i|I][t|T][t|T][e|E][r|R].{0,30}['\"\\s][0-9a-zA-Z]{35,44}['\"\\s]/i,
    },
    {
        name: "HEROKU_API",
        pattern: /[h|H][e|E][r|R][o|O][k|K][u|U].{0,30}[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/i,
    },
    {
        name: "MAILGUN_API",
        pattern: /key-[0-9a-zA-Z]{32}/i,
    },
    {
        name: "MAILCHAMP_API",
        pattern: /[0-9a-f]{32}-us[0-9]{1,2}/i,
    },
    {
        name: "PICATIC_API",
        pattern: /sk_live_[0-9a-z]{32}/i,
    },
    {
        name: "GOOGLE_OAUTH_ID",
        pattern: /[0-9(+-[0-9A-Za-z_]{32}.apps.qooqleusercontent.com/i,
    },
    {
        name: "GOOGLE_API",
        pattern: /AIza[0-9A-Za-z-_]{35}/i,
    },
    {
        name: "GOOGLE_CAPTCHA",
        pattern: /6L[0-9A-Za-z-_]{38}/i,
    },
    {
        name: "GOOGLE_OAUTH",
        pattern: /ya29\\.[0-9A-Za-z\\-_]+/i,
    },
    {
        name: "AMAZON_AWS_ACCESS_KEY_ID",
        pattern: /AKIA[0-9A-Z]{16}/i,
    },
    {
        name: "AMAZON_MWS_AUTH_TOKEN",
        pattern: /amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
    },
    {
        name: "AMAZONAWS_URL",
        pattern: /s3\\.amazonaws.com[/]+|[a-zA-Z0-9_-]*\\.s3\\.amazonaws.com/i,
    },
    {
        name: "FACEBOOK_ACCESS_TOKEN",
        pattern: /EAACEdEose0cBA[0-9A-Za-z]+/i,
    },
  
    {
        name: "AUTHORIZATION_BEARE",
        pattern: /bearer [a-zA-Z0-9_\\-\\.]+/i,
    },
    {
        name: "AUTHORIZATION_API",
        pattern: /api[key|\\s*]+[a-zA-Z0-9_\\-]+/i,
    },
    {
        name: "MAILGUN_API_KEY",
        pattern: /key-[0-9a-zA-Z]{32}/i,
    },
    {
        name: "TWILIO_API_KEY",
        pattern: /SK[0-9a-fA-F]{32}/i,
    },
    {
        name: "TWILIO_ACCOUNT_SID",
        pattern: /AC[a-zA-Z0-9_\\-]{32}/i,
    },
    {
        name: "TWILIO_APP_SID",
        pattern: /AP[a-zA-Z0-9_\\-]{32}/i,
    },
    {
        name: "PAYPAL_BRAINTREE_ACCESS_TOKEN",
        pattern: /access_token\\$production\\$[0-9a-z]{16}\\$[0-9a-f]{32}/i,
    },
    {
        name: "SQUARE_OAUTH_SECRET",
        pattern: /sq0csp-[ 0-9A-Za-z\\-_]{43}/i,
    },
    {
        name: "SQUARE_ACCESS_TOKEN",
        pattern: /sqOatp-[0-9A-Za-z\\-_]{22}/i,
    },
    {
        name: "STRIPE_STANDARD_API",
        pattern: /sk_live_[0-9a-zA-Z]+/i,
    },
    {
        name: "STRIPE_RESTRICTED_API",
        pattern: /rk_live_[0-9a-zA-Z]+/i,
    },
    {
        name: "GITHUB_ACCESS_TOKEN",
        pattern: /[a-zA-Z0-9_-]*:[a-zA-Z0-9_\\-]+@github\\.com*/i,
    },
    {
        name: "RSA_PRIVATE_KEY",
        pattern: /-----BEGIN RSA PRIVATE KEY-----/i,
    },
    {
        name: "SSH_DSA_PRIVATE_KEY",
        pattern: /-----BEGIN DSA PRIVATE KEY-----/i,
    },
    {
        name: "SSH_DC_PRIVATE_KEY",
        pattern: /-----BEGIN EC PRIVATE KEY-----/i,
    },
    {
        name: "PGP_PRIVATE_BLOCK",
        pattern: /-----BEGIN PGP PRIVATE KEY BLOCK----/i,
    },



    {
        name: "ODE_CLIMATE",
        pattern: /EAACEdEose0cBA[0-9A-Za-z]+/i
    },

    {
        name: "FACEBOOK_ACCESS_TOKEN",
        pattern: /((\\\"|'|`)?type(\\\"|'|`)?\\\\s{0,50}(:|=>|=)\\\\s{0,50}(\\\"|'|`)?service_account(\\\"|'|`)?,?)/i
    },

    {
        name: "OOGLE_GCM_SERVICE_ACCOUNT",
        pattern: /(?:r|s)k_[live|test]_[0-9a-zA-Z]{24}/i
    },

    {
        name: "TRIPE_API_KEY",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com/i
    },

    {
        name: "GOOGLE_O_AUTH_KEY",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/i
    },

    {
        name: "GOOGLE_CLOUD_API_KEY",
        pattern: /ya29\\.[0-9A-Za-z\\-_]+/i
    },

    {
        name: "OOGLE_O_AUTH_ACCESS_TOKEN",
        pattern: /sk_[live|test]_[0-9a-z]{32}/i
    },

    {
        name: "ICATIC_API_KEY",
        pattern: /sq0atp-[0-9A-Za-z\-_]{22}/i
    },

    {
        name: "QUARE_ACCESS_TOKEN",
        pattern: /sq0csp-[0-9A-Za-z\-_]{43}/i
    },

    {
        name: "QUARE_O_AUTH_SECRET",
        pattern: /access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}/i
    },

    {
        name: "AY_PAL_BRAINTREE_ACCESS_TOKEN",
        pattern: /amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i
    },

    {
        name: "MAZON_MWS_AUTH_TOKEN",
        pattern: /SK[0-9a-fA-F]{32}/i
    },

    {
        name: "WILO_API_KEY",
        pattern: /SG\.[0-9A-Za-z\-_]{22}\.[0-9A-Za-z\-_]{43}/i
    },

    {
        name: "END_GRID_API_KEY",
        pattern: /key-[0-9a-zA-Z]{32}/i
    },

    {
        name: "AIL_GUN_API_KEY",
        pattern: /[0-9a-f]{32}-us[0-9]{12}/i
    },

    {
        name: "AIL_CHIMP_API_KEY",
        pattern: /sshpass -p.*['|\\\"]/i
    },




    {
        name: "SAUCE_TOKEN",
        pattern: /(xox[pboa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})/i
    },


  


    {
        name: "USERNAME_AND_PASSWORD_IN_URI",
        pattern: /oy2[a-z0-9]{43}/i
    },

    {
        name: "U_GET_API_KEY",
        pattern: /hawk\.[0-9A-Za-z\-_]{20}\.[0-9A-Za-z\-_]{20}/i
    },


    {
        name: "BITCOIN_ADDRESS",
        pattern: /([13][a-km-zA-HJ-NP-Z0-9]{26,33})/i
    },
    {
        name: "SLACK_API_KEY",
        pattern: /xox.-[0-9]{12}-[0-9]{12}-[0-9a-zA-Z]{24}/i
    },
    {
        name: "GOOGLE_CLOUD_PLATFORM_AUTH",
        pattern: /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/i
    },
    {
        name: "GOOGLE_CLOUD_PLATFORM_API",
        pattern: /[A-Za-z0-9_]{21}--[A-Za-z0-9_]{8}/i
    },
    {
        name: "AMAZON_SECRET_KEY",
        pattern: /[0-9a-zA-Z/+]{40}/i
    },
    {
        name: "GMAIL_AUTH_TOKEN",
        pattern: /[0-9(+-[0-9A-Za-z_]{32}.apps.qooqleusercontent.com/i
    },
    {
        name: "GITHUB_AUTH_TOKEN",
        pattern: /[0-9a-fA-F]{40}/i
    },
    {
        name: "INSTAGRAM_TOKEN",
        pattern: /[0-9a-fA-F]{7}.[0-9a-fA-F]{32}/i
    },
    {
        name: "FIREBASE",
        pattern: /AAAA[A-Za-z0-9_-]{7}:[A-Za-z0-9_-]{140}/i
    },
    {
        name: "GOOGLE_CAPTCHA",
        pattern: /6L[0-9A-Za-z-_]{38}|^6[0-9a-zA-Z_-]{39}$/i
    },
    {
        name: "GOOGLE_OAUTH",
        pattern: /ya29\.[0-9A-Za-z\-_]+/i
    },
    {
        name: "AMAZON_AWS_ACCESS_KEY_ID",
        pattern: /A[SK]IA[0-9A-Z]{16}/i
    },
    {
        name: "AMAZON_MWS_AUTH_TOKE",
        pattern: /amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i
    },
    {
        name: "AMAZON_AWS_URL",
        pattern: /s3\.amazonaws.com[/]+|[a-zA-Z0-9_-]*\.s3\.amazonaws.com/i
    },
    {
        name: "FACEBOOK_ACCESS_TOKEN",
        pattern: /EAACEdEose0cBA[0-9A-Za-z]+/i
    },
    {
        name: "AUTHORIZATION_BASIC",
        pattern: /basic\s*[a-zA-Z0-9=:_\+\/-]+/i
    },
    {
        name: "AUTHORIZATION_BEARER",
        pattern: /bearer\s*[a-zA-Z0-9_\-\.=:_\+\/]+/i
    },
    {
        name: "AUTHORIZATION_API",
        pattern: /api[key|\s*]+[a-zA-Z0-9_\-]+/i
    },
    {
        name: "MAILGUN_API_KEY",
        pattern: /key-[0-9a-zA-Z]{32}/i
    },
    {
        name: "TWILIO_API_KEY",
        pattern: /SK[0-9a-fA-F]{32}/i
    },
    {
        name: "TWILIO_ACCOUNT_SID",
        pattern: /AC[a-zA-Z0-9_\-]{32}/i
    },
    {
        name: "TWILIO_APP_SID",
        pattern: /AP[a-zA-Z0-9_\-]{32}/i
    },
    {
        name: "PAYPAL_BRAINTREE_ACCESS_TOKEN",
        pattern: /access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}/i
    },
    {
        name: "SQUARE_OAUTH_SECRET",
        pattern: /sq0csp-[ 0-9A-Za-z\-_]{43}|sq0[a-z]{3}-[0-9A-Za-z\-_]{22,43}/i
    },
    {
        name: "SQUARE_ACCESS_TOKEN",
        pattern: /sqOatp-[0-9A-Za-z\-_]{22}|EAAA[a-zA-Z0-9]{60}/i
    },
    {
        name: "STRIPE_STANDARD_API",
        pattern: /sk_live_[0-9a-zA-Z]+/i
    },
    {
        name: "STRIPE_RESTRICTED_API",
        pattern: /rk_live_[0-9a-zA-Z]+/i
    },
    {
        name: "GITHUB_ACCESS_TOKEN",
        pattern: /[a-zA-Z0-9_-]*:[a-zA-Z0-9_\-]+@github\.com*/i
    },
    {
        name: "RSA_PRIVATE_KEY",
        pattern: /-----BEGIN RSA PRIVATE KEY-----/i
    },
    {
        name: "SSH_DSA_PRIVATE_KEY",
        pattern: /-----BEGIN DSA PRIVATE KEY-----/i
    },
    {
        name: "SSH_DC_PRIVATE_KEY",
        pattern: /-----BEGIN EC PRIVATE KEY-----/i
    },
    {
        name: "PGP_PRIVATE_BLOCK",
        pattern: /-----BEGIN PGP PRIVATE KEY BLOCK-----/i
    },
    {
        name: "JSON_WEB_TOKEN",
        pattern: /ey[A-Za-z0-9_-]*\.[A-Za-z0-9._-]*|ey[A-Za-z0-9_\/+-]*\.[A-Za-z0-9._\/+-]*/i
    },
    
    {
        name: "FACEBOOK_O_AUTH_2_0",
        pattern: /[A-Za-z0-9]{125} (counting letters [2])/i
    },
    {
        name: "GOOGLE_API_KEY",
        pattern: /AIza[0-9A-Za-z-_]{35}/
    },
    {
        name: "GOOGLE_O_AUTH_2_0_SECRET",
        pattern: /0-9a-zA-Z\-_]+/i
    },
    {
        name: "GOOGLE_O_AUTH_2_0_ACCESS_TOKEN",
        pattern: /ya29\.[0-9A-Za-z\-_]+/i
    },
    {
        name: "GIT_HUB_O_AUTH_2_0_ID",
        pattern: /[A-Za-z0-9_]{255}/i
    },
    {
        name: "FOURSQUARE_SECRET_KEY",
        pattern: /R_[0-9a-f]{32}/i
    },

    {
        name: "PICATIC_API_KEY",
        pattern: /sk_live_[0-9a-z]{32}/i
    },
    {
        name: "STRIPE_STANDARD_API_KEY",
        pattern: /sk_live_(0-9a-zA-Z]+)/i
    },
    {
        name: "STRIPE_RESTRICTED_API_KEY",
        pattern: /sk_live_(0-9a-zA-Z]+)/i
    },
    {
        name: "SQUARE_ACCESS_TOKEN",
        pattern: /sqOatp-[0-9A-Za-z\-_]{22}/i
    },
    {
        name: "SQUARE_O_AUTH_SECRET",
        pattern: /q0csp-[ 0-9A-Za-z\-_]{43}/i
    },
    {
        name: "PAYPAL_BRAINTREE_ACCESS_TOKEN",
        pattern: /access_token\,production\$[0-9a-z]{161[0-9a,]{32}/i
    },
    {
        name: "AMAZON_MARKETING_SERVICES_AUTH_TOKEN",
        pattern: /amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-10-9a-f1{4}-[0-9a,]{4}-[0-9a-f]{12}/i
    },
    {
        name: "VARIADOS",
        pattern: /amzn.mws]{8}-[0-9a-f]{4}-10-9a-f1{4}-[0-9a,]{4}-[0-9a-f]{12}/i
    },
    {
        name: "VARIADOS",
        pattern: /(A3T[A-Z0-9]|AKIA|AGPA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/i
    },
    {
        name: "VARIADOS",
        pattern: /(A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/i
    },
    {
        name: "VARIADOS",
        pattern: /https:\/\/hooks.slack.com\/services\/T[a-zA-Z0-9_]{8}\/B[a-zA-Z0-9_]{8}\/[a-zA-Z0-9_]{24}/i
    },
    {
        name: "VARIADOS",
        pattern: /virustotal[_-]?apikey(=| =|:| :)/i
    },
    {
        name: "VARIADOS",
        pattern: /TOKEN[\\-|_|A-Z0-9]*(\'|\")?(:|=)(\'|\")?[\\-|_|A-Z0-9]{10}/i
    },
    {
        name: "VARIADOS",
        pattern: /xoxb-[0-9A-Za-z\\-]{50}/i
    },
    {
        name: "VARIADOS",
        pattern: /xoxp-[0-9A-Za-z\\-]{71}/i
    },
    {
        name: "VARIADOS",
        pattern: /token=[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /[0-9a-f]{32}-us[0-9]{1,2}/i
    },
    {
        name: "VARIADOS",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/i
    },
    {
        name: "VARIADOS",
        pattern: /AAAA[a-zA-Z0-9_-]{5,100}:[a-zA-Z0-9_-]{140}/i
    },
    {
        name: "VARIADOS",
        pattern: /(API|api)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{10}/i
    },
    {
        name: "VARIADOS",
        pattern: /(token|TOKEN)(:|=| : | = )("|')[ 0-9A-Za-z\\-]{10}/i
    },
    {
        name: "VARIADOS",
        pattern: /(SECRET|secret)(:|=| : | = )("|')[0-9A-Za-z\\-]{10}/i
    },
    {
        name: "VARIADOS",
        pattern: /(key|KEY)(:|=)[0-9A-Za-z\\-]{10}/i
    },
    {
        name: "VARIADOS",
        pattern: /secret[_-]?0(=| =|:| :)/i
    },
    {
        name: "VARIADOS",
        pattern: /(password|PASSWORD)(:|=| : | = )("|')[0-9A-Za-z\\-]{10}/i
    },
    {
        name: "VARIADOS",
        pattern: /[0-9(+-[0-9A-Za-z_]{32}.apps.qooqleusercontent.com/i
    },
    {
        name: "VARIADOS",
        pattern: /R_[0-9a-f]{32}/i
    },
    {
        name: "VARIADOS",
        pattern: /sk_live_[0-9a-z]{32}/i
    },
    {
        name: "VARIADOS",
        pattern: /access_token,production$[0-9a-z]{161[0-9a,]{32}/i
    },
    {
        name: "VARIADOS",
        pattern: /key-[0-9a-zA-Z]{32}/i
    },
    {
        name: "VARIADOS",
        pattern: /xox[baprs]-[0-9]{12}-[0-9]{12}-[0-9a-zA-Z]{24}/i
    },
    {
        name: "VARIADOS",
        pattern: /AKIA[0-9A-Z]{16}/i
    },
    {
        name: "VARIADOS",
        pattern: /basic [a-zA-Z0-9]/i
    },
    {
        name: "VARIADOS",
        pattern: /bearer [a-zA-Z0-9]/i
    },
    {
        name: "VARIADOS",
        pattern: /amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i
    },
    {
        name: "VARIADOS",
        pattern: /EAACEdEose0cBA[0-9A-Za-z]+/i
    },
   
    {
        name: "VARIADOS",
        pattern: /[f|F][a|A][c|C][e|E][b|B][o|O][o|O][k|K].*['|\"][0-9a-f]{32}['|\"]/i
    },
    {
        name: "VARIADOS",
        pattern: /(GITHUB|github)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{10}/i
    },
    {
        name: "VARIADOS",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/i
    },
   
    {
        name: "VARIADOS",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/i
    },
    {
        name: "VARIADOS",
        pattern: /[0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com/i
    },
    {
        name: "VARIADOS",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/i
    },
    {
        name: "VARIADOS",
        pattern: /ya29\\.[0-9A-Za-z\\-_]+/i
    },
    {
        name: "VARIADOS",
        pattern: /AIza[0-9A-Za-z\\-_]{35}/i
    },
    {
        name: "VARIADOS",
        pattern: /key-[0-9a-zA-Z]{32}/i
    },
    {
        name: "VARIADOS",
        pattern: /(?<=mailto:)[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]{10}/i
    },
    {
        name: "VARIADOS",
        pattern: /sk_live_[0-9a-z]{32}/i
    },
    {
        name: "VARIADOS",
        pattern: /xox[baprs]-([0-9a-zA-Z]{10,48})/i
    },
    {
        name: "VARIADOS",
        pattern: /(?:r|s)k_live_[0-9a-zA-Z]{24}/i
    },
    {
        name: "VARIADOS",
        pattern: /sqOatp-[0-9A-Za-z\\-_]{22}/i
    },
    {
        name: "VARIADOS",
        pattern: /sq0csp-[ 0-9A-Za-z\\-_]{43}/i
    },
    {
        name: "VARIADOS",
        pattern: /SK[0-9a-fA-F]{32}/i
    },
    {
        name: "VARIADOS",
        pattern: /(dotfiles|DOTFILES)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(encryption_key|ENCRYPTION_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(fabricApiSecret|FABRICAPISECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(fb_secret|FB_SECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(firebase|FIREBASE)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(ftp|FTP)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(gh_token|GH_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(github_key|GITHUB_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(github_token|GITHUB_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(gitlab|GITLAB)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(gmail_password|GMAIL_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(gmail_username|GMAIL_USERNAME)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(api.googlemapsAIza|API.GOOGLEMAPSAIZA)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(herokuapp|HEROKUAPP)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(internal|INTERNAL)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(irc_pass|IRC_PASS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(key|KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(keyPassword|KEYPASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(ldap_password|LDAP_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(ldap_username|LDAP_USERNAME)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(login|LOGIN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(mailchimp|MAILCHIMP)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(mailgun|MAILGUN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(master_key|MASTER_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(mydotfiles|MYDOTFILES)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(mysql|MYSQL)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(node_env|NODE_ENV)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(npmrc_auth|NPMRC_AUTH)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(oauth_token|OAUTH_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(pass|PASS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(passwd|PASSWD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(password|PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(passwords|PASSWORDS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(pemprivate|PEMPRIVATE)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(preprod|PREPROD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(private_key|PRIVATE_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(prod|PROD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(pwd|PWD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(pwds|PWDS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(rds.amazonaws.compassword|RDS.AMAZONAWS.COMPASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(redis_password|REDIS_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(root_password|ROOT_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(secret|SECRET)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(secret.password|SECRET.PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(secret_access_key|SECRET_ACCESS_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(secret_key|SECRET_KEY)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(secret_token|SECRET_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(secrets|SECRETS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(secure|SECURE)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(security_credentials|SECURITY_CREDENTIALS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(send.keys|SEND.KEYS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(send_keys|SEND_KEYS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(slack_api|SLACK_API)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(slack_token|SLACK_TOKEN)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(sql_password|SQL_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(ssh|SSH)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(ssh2_auth_password|SSH2_AUTH_PASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(sshpass|SSHPASS)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(staging|STAGING)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
  
    {
        name: "VARIADOS",
        pattern: /(storePassword|STOREPASSWORD)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(stripe|STRIPE)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(swagger|SWAGGER)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },
    {
        name: "VARIADOS",
        pattern: /(testuser|TESTUSER)(:|=| : | = )( |"|')[0-9A-Za-z\\-]{5,100}/i
    },



    {
        name: "AWS",
        pattern: /(A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/i
    },



   

]
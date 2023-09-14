export default {

    // Step - 3, Date - 18/10/22
    // Setup app configuration for openID Connect
    // copy clientId & issuer from Okta.com developer's Dashboard
    // oidc: {
    //     clientId: '0oa6w7ugsr68iwQEN5d7',
    //     issuer: 'https://dev-64071580.okta.com/oauth2/default',
    //     redirectUri: 'http://localhost:4200/login/callback',
    //     scopes: ['openid', 'profile', 'email']
    // }

    oidc: {
        clientId: '0oa7rdeb5hJi2pi2l5d7',
        issuer: 'https://dev-86746282.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }

}


// login to okta developer using your github a/c

// for application login use these credentials

// Add application login credentials in okta ...Directory->People

// piyushkumar10111@gmail.com   pass - Aspire!9107

// piyush@luv2code.com  pass - Acer@123

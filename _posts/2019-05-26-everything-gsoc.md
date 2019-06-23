---
layout: post
title: Everything GSoC!
bigimg: /img/gsoc.png
tags: [gsoc, bindaas]
---
[**\[UPDATE: Week 4\]**](#week-4) This year I got selected for the Google Summer of Code program. For the next three moths I will be working with Biomedical Informatics, Emory University, in particular on their Data Integration Middleware called **Bindaas**. You can read more about my proposal and the organisation [here](https://summerofcode.withgoogle.com/projects/#5940411036598272).
{: style="text-align: justify;"}

This blog post is to document my progress through the weeks. I will keep updating this post every week. So without further ado
{: style="text-align: justify;"}

## Security Enhancements to Bindaas 
- [Week 0](#week-0)
- [Week 1](#week-1)
- [Week 2](#week-2)
- [Week 3](#week-3)
- [Week 4](#week-4)

---
## Week 0
May 6<sup>th</sup> - May 26<sup>th</sup>  
After getting done with my university examinations, I decided to start writing a few lines of code, even before the official coding period began. I have a better understanding of the core modules as a result.
{: style="text-align: justify;"}

Relevant commits can be found on the [gsoc-week0](https://github.com/tushar-97/bindaas/tree/gsoc-week0) branch.
{: style="text-align: justify;"}

The pull request for the same is [#72](https://github.com/sharmalab/bindaas/pull/72)
{: style="text-align: justify;"}

### <a name="week0-completed-tasks"></a>Completed Tasks
1. Start this blog
2. Fix backward compatibility issue with MongoDB provider

### <a name="week0-pending-tasks"></a>Pending Tasks
1. Finish writing the BigQuery Data Provider
2. Ensure the JWT Manager can support basic CRUD operations 

In reference to point 1, BigQuery is a RESTful web service from Google for working with large datasets using a SQL like syntax. Basic code to use BigQuery as one of the data provider has been added. It's not functional as of now as there seems to be a conflict with the _ServiceAccountCredentials_  package from google's oauth2 library. Others too have reported issues with using this library in a OSGi framework. As soon as this conflict is fixed, logic for querying data can be added.
{: style="text-align: justify;"}

All commits can be tracked in the [bigquery-data-provider](https://github.com/tushar-97/bindaas/tree/bigquery-data-provider) branch.
{: style="text-align: justify;"}

In reference to point 2, a basic JWTManager has been added for creating and managing the tokens. I have decided to use the java-jwt library (more on this in the design updates section [below](#week0-design-updates)). As of now a token is created every time a user logs in and can be viewed on the dashboard.  
{: style="text-align: justify;"}

All commits can be tracked in the [gsoc-week0](https://github.com/tushar-97/bindaas/tree/gsoc-week0) branch.
{: style="text-align: justify;"} 
![JWT](/img/token-dashboard.png)  

### <a name="week0-design-updates"></a>Design Updates
I have added a new package for JWT as

```
├── edu.emory.cci.bindaas.core.jwt
    ├── DefaultJWTManager.java
    ├── IJWTManager.java
    ├── JWTManagerException.java
    └── Token.java
```
The tokens objects are created and managed by the `DefaultJWTManager`. As discussed above I have used the [java-jwt](https://github.com/auth0/java-jwt) library for creating the base64 encoded tokens. I decided to use it for the following reasons:
{: style="text-align: justify;"}
+ Easy to use syntax with convenient method definitions
+ Maintained and updated regularly
+ No dependency issue when importing the library  

I am also leaving `FIXME` comments in the code so that I can track broken code and ensure its fixed before merging into the main branch. 
{: style="text-align: justify;"}

### <a name="week0-plans"></a>Upcoming Week Plans
I plan to finish writing basic CRUD operations for the JWTManager and also implement the BigQuery Data Provider. I also plan to finalise the implementation details of the JWTManager after discussing it with my mentor and other community members. 
{: style="text-align: justify;"}

---

## Week 1
May 27<sup>th</sup> - June 2<sup>nd</sup>  
The past week was a successful one as I was able to get my implementation of the JWT Manager running and was able to query data successfully from my local database. 
{: style="text-align: justify;"}

Now you can query data in the following ways.

```
curl -X GET \
http://localhost:9099/services/project/provider/query/get_data1?api_key=bf8e1bad-05c5-4034-8100-b114290324b2&
```

```
curl -X GET \
http://localhost:9099/services/project/provider/query/get_data?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiaW5kYWFzIiwiZXhwIjoxNTU5NTA5NDg0fQ.jacm6huomHkRHJ5eLuxKPhU2TSd-STErDcQUNIsn-v8&
```

```
curl -X GET \
-H 'Authorization: Bearer
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiaW5kYWFzIiwiZXhwIjoxNTU5NTA5NDg0fQ.jacm6huomHkRHJ5eLuxKPhU2TSd-STErDcQUNIsn-v8' \
http://localhost:9099/services/project/provider/query/get_data
```

Relevant commits can be found on the [gsoc-week1](https://github.com/tushar-97/bindaas/tree/gsoc-week1) branch.
{: style="text-align: justify;"}

The pull request for the same is [#73](https://github.com/sharmalab/bindaas/pull/73)
{: style="text-align: justify;"}

### <a name="week1-completed-tasks"></a>Completed Tasks
1. Ensure the JWT Manager can support basic CRUD operations
2. Basic changes to ensure both JWT and API_KEY protocols can work independently.

### <a name="week1-pending-tasks"></a>Pending Tasks
1. Basic testing for new features added
2. Making the SecurityTokenService work with JWT
3. Finish writing the BigQuery Data Provider

In reference to point 1, I have started to make changes to ensure that the bindaas service can be authenticated by either JWT or API_KEY as per the configuration specified while starting bindaas. I have only tested out a few scenarios and I intend to do a more through check to ensure that everything is working the way it's supposed to. You will find details about the changes I had to make in the design updates section [below](#week1-design-updates).
{: style="text-align: justify;"}

In reference to point 2, the user can currently make the relevant queries using the web console. A large portion of bindaas' users do the same using the command line. This week I intend to integrate the SecurityTokenService to generate (single use?) tokens. Implementation details will be covered in next week's design updates section. 
{: style="text-align: justify;"}

In reference to point 3, I was unsuccessful in fixing the conflicts I was facing last week. This however, is a secondary task, and if it still remains pending this week, it will be added to my stretch goals list (currently empty).
{: style="text-align: justify;"}

The following image is to contrast last week's screenshot and to show both JWT and API_KEYs can be generated as per the configuration specified.
{: style="text-align: justify;"} 
![JWT](/img/new-token-dashboard.png)  

### <a name="week1-design-updates"></a>Design Updates
The current implementation is heavily coupled with API_KEYs as the authentication protocol. Trying to decouple it has certainly been a challenging and interesting task. Since different authentication providers can support different protocols, it only made sense that we specify both in the configuration file. Therefore I have added a new key as `authenticationProtocol` in the `bindaas.config.json` file.
{: style="text-align: justify;"}

For each authentication protocol (username/password, token or api keys) there exists a separate authentication provider. Therefore I added a new provider as `OAuthProvider` for JSON Web Tokens (JWTs). When initializing the instance, we now read the config file and set the appropriate authentication provider and protocol. For rendering the UI the code currently checks the authentication protocol and sets the context for the velocity templates accordingly.
{: style="text-align: justify;"}

```json
{
  "authenticationProviderClass": "edu.emory.cci.bindaas.security.impl.DBAuthenticationProvider",
  "authenticationProtocol": "API_KEY"
}
```

```json
{
  "authenticationProviderClass": "edu.emory.cci.bindaas.security.impl.OAuthProvider",
  "authenticationProtocol": "JWT"
}
```

Above are two valid configuration that can be set in `bindaas.config.json`. Other permutations are "valid" as well but JWT (for example) has not been implemented with DBAuthenticationProvider (for example). These two are the only configurations where authentication will work as other authentication providers have been deprecated.
{: style="text-align: justify;"}

### <a name="week1-plans"></a>Upcoming Week Plans
I plan to integrate [SecurityTokenService](https://github.com/sharmalab/securitytokenservice) with the logic I have written for generating access tokens. After a basic implementation is done I will do some testing for all features that will be completed by next week.
{: style="text-align: justify;"}

---
## Week 2
June 3<sup>rd</sup> - June 9<sup>th</sup>  
I made good progress this week, by updating the [trusted-app-client](https://github.com/sharmalab/bindaas/tree/add-jwt-token/tools/trusted-app-client) to support JWTs. We also got a lot of code reviews done and had around ~2000 lines of code merged into the bindaas repository (on the add-jwt-token branch).
{: style="text-align: justify;"}

All commits from now on can be tracked on the [add-jwt-token](https://github.com/tushar-97/bindaas/tree/add-jwt-token) branch.
{: style="text-align: justify;"}

The pull requests for the same are [#74](https://github.com/sharmalab/bindaas/pull/74),[#76](https://github.com/sharmalab/bindaas/pull/76),[#77](https://github.com/sharmalab/bindaas/pull/77) & [#78](https://github.com/sharmalab/bindaas/pull/78)
{: style="text-align: justify;"}

### <a name="week2-completed-tasks"></a>Completed Tasks
1. Make trusted-app-client support JWT

### <a name="week2-pending-tasks"></a>Pending Tasks
1. Testing, testing and loads of testing!
2. Proper documentation of all new features added
3. Finish integration of JWT into the admin console (front end side)

### <a name="week2-design-updates"></a>Design Updates
The trusted-app-client was added when support for API Keys came to bindaas. This is why the client was written with only API Keys in mind. The client now supports JWT and has also been restructured in a way to support any further protocol additions to bindaas. Existing users will not face any syntax changes, although a new command line argument for protocol has been added. This argument is optional and assumes the value of api_key by default.
{: style="text-align: justify;"}

The endpoints for managing API Keys and JWTs have been renamed to more generic. These are internal to bindaas and do not affect it's users. Specifically
{: style="text-align: justify;"}
- /listAPIKeys endpoint is now /listAuthenticationTokens
- /issueShortLivedApiKey endpoint is now /issueShortLivedAuthenticationToken

The difference in using the client can be seen below:
```
# Earlier client

> java -jar trusted-app-client-0.0.1-jar-with-dependencies.jar -action a \
-username admin -id demo-id -secret demo-secret-key -lifetime 360000 \
-url http://localhost:9099/trustedApplication -expires 12/12/2025

Server Returned :
{
  "api_key": "008b59a8-b5ab-40de-977a-426052fa276b",
  "username": "admin",
  "applicationID": "demo-id",
  "expires": "Fri Dec 12 00:00:00 IST 2025",
  "applicationName": "Demo Application"
}
```
```
# Current client without protocol argument

> java -jar trusted-app-client-0.0.1.jar -action a \
-username admin -id demo-id -secret demo-secret-key -lifetime 360000 \
-url http://localhost:9099/trustedApplication -expires 12/12/2025

WARNING: [protocol] not specified. Using default value of api_key
INFO: Server Returned :
{
  "api_key": "008b59a8-b5ab-40de-977a-426052fa276b",
  "username": "admin",
  "applicationID": "demo-id",
  "expires": "Fri Dec 12 00:00:00 IST 2025",
  "applicationName": "Demo Application"
}
```
```
# Current client with protocol argument

> java -jar trusted-app-client-0.0.1.jar -action a \
-protocol jwt -username admin -id demo-id -secret demo-secret-key \
-lifetime 360000 -url http://localhost:9099/trustedApplication -expires 12/12/2025

INFO: Server Returned :
{
  "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiaW5kYWFzIiwiZXhwIjoxNzY1NDc3ODAwfQ.3gB7tb-Xsysm-So3kVD6_VX47qjK7TMTXiUtZNq_cIQ",
  "username": "admin",
  "applicationID": "demo-id",
  "expires": "Fri Dec 12 00:00:00 IST 2025",
  "applicationName": "Demo Application"
}
```
As you can see from the above code snippets, you can either get an api_key or a jwt depending upon the protocol you specify. The above code snippets however assume that the server was configured to use api_key in the first two, and jwt in the last code snippet. If there is a mismatch in the argument value and the server's configuration, you get the following error.
{: style="text-align: justify;"}

```
SEVERE: edu.emory.cci.bindaas.trusted_app_client.app.exception.ServerException: {
  "error": "Authentication protocol in request does not match with server's configuration"
}
```

The same logic is applicable for all four operations supported by the client, i.e adding/revoking a user, issuing a short lived token and getting a list of tokens.
{: style="text-align: justify;"}

### <a name="week2-plans"></a>Upcoming Week Plans
As per my project proposal I will now implement scope based access. I will also be testing my code for a few days and will try to update the documentation for all the features I have added/modified.
{: style="text-align: justify;"}

---
## Week 3
June 10<sup>th</sup> - June 16<sup>th</sup>  
I spent the last few days testing out all the features that have been added so far. I am happy to share that there were no major bugs and an alpha release is on the horizon!
{: style="text-align: justify;"}

As always relevant commits can be tracked on the [add-jwt-token](https://github.com/tushar-97/bindaas/tree/add-jwt-token) branch.
{: style="text-align: justify;"}

As a side task, I also configured continuous integration for my repository. You can have a look at the [travis-ci](https://github.com/tushar-97/bindaas/tree/travis-ci) branch.
{: style="text-align: justify;"}

### <a name="week3-completed-tasks"></a>Completed Tasks
1. Proper testing of features added/modified
2. Adding trusted-client-app to main pom.xml for distribution and packaging
3. Fix web-console UI to show protocol dependent terminology and features

### <a name="week3-pending-tasks"></a>Pending Tasks
1. Official documentation and guide to use the new features

### <a name="week3-design-updates"></a>Design Updates
No core modules were updated this week. Minor changes have been made to the UI. From now on you will only see, either JWTs or API KEYs in the administrative section of the web console, depending on your configuration. The labels will also change accordingly.
{: style="text-align: justify;"}

### <a name="week3-plans"></a>Upcoming Week Plans  
We now move on to the next phase of my project where new features like scope based access and rate limiting will be added. In this regard, I will be having a discussion with my mentors, Pradeeban & Ashish, where we will iron out the next steps and design changes to be made to bindaas.
{: style="text-align: justify;"}

---
## Week 4
June 17<sup>th</sup> - June 23<sup>rd</sup>  
I have officialy spent a month working on Bindaas now! Basic functionalities to support JWTs have been added. We now move on to managing and restricting access to Bindaas.
{: style="text-align: justify;"}

As always relevant commits can be tracked on the [add-jwt-token](https://github.com/tushar-97/bindaas/tree/add-jwt-token) branch.
{: style="text-align: justify;"}

### <a name="week4-completed-tasks"></a>Completed Tasks
1. Add authentication via Google Sign In.

### <a name="week4-pending-tasks"></a>Pending Tasks
1. Limiting access to features based on roles assigned to users
2. Official documentation and guide to use the new features

### <a name="week4-design-updates"></a>Design Updates
As per last week's discussion we will allow users to sign in via their Google accounts. Their roles will be fetched from an LDAP server and access to features will be limited accordingly. The web console was designed to be used by administrative users only. Since we will now allow non administrative users to login, there will be changes to show limited features. The directory strcuture that we will be using to maintain and query records is as follows:
{: style="text-align: justify;"}
![Directory Structure](/img/ldap-model.jpg)
{: style="display: block; margin-left: auto; margin-right: auto; width: 80%;"}

The above is a temporary structure and we might move forward with a custom schema. We will only need to update the queries if we decide to change the directory structure in the future.
{: style="text-align: justify;"}

### <a name="week4-plans"></a>Upcoming Week Plans
Since I have never worked with LDAP directories before, I might not be able to finish adding the features in the next few days. I also need to spend some time in integrating Keycloak with my LDAP server.
{: style="text-align: justify;"}

---

Thanks for making it through the entire post. If you have any questions/suggestions do leave a comment below.
{: style="text-align: justify;"}

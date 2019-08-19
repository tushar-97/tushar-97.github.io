---
layout: post
title: Everything GSoC!
bigimg: /img/gsoc.png
tags: [gsoc, bindaas]
---
This year I got selected for the Google Summer of Code program. For the next three moths I will be working with Biomedical Informatics, Emory University, in particular on their Data Integration Middleware called **Bindaas**. You can read more about my proposal and the organisation [here](https://summerofcode.withgoogle.com/projects/#5940411036598272).
{: style="text-align: justify;"}

This blog post is to document my progress through the weeks. I will keep updating this post every week. So without further ado
{: style="text-align: justify;"}

## Security Enhancements to Bindaas 
- [Week 0](#week-0)
- [Week 1](#week-1)
- [Week 2](#week-2)
- [Week 3](#week-3)
- [Week 4](#week-4)
- [Week 5](#week-5)
- [Week 6](#week-6)
- [Week 7](#week-7)
- [Week 8](#week-8)
- [Week 9](#week-9)
- [Week 10](#week-10)
- [Week 11](#week-11)
- [Week 12](#week-12)

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
I have officially spent a month working on Bindaas now! Basic functionalities to support JWTs have been added. We now move on to managing and restricting access to Bindaas.
{: style="text-align: justify;"}

As always relevant commits can be tracked on the [add-jwt-token](https://github.com/tushar-97/bindaas/tree/add-jwt-token) branch.
{: style="text-align: justify;"}

### <a name="week4-completed-tasks"></a>Completed Tasks
1. Add authentication via Google Sign In.

### <a name="week4-pending-tasks"></a>Pending Tasks
1. Limiting access to features based on roles assigned to users
2. Official documentation and guide to use the new features

### <a name="week4-design-updates"></a>Design Updates
As per last week's discussion we will allow users to sign in via their Google accounts. Their roles will be fetched from an LDAP server and access to features will be limited accordingly. The web console was designed to be used by administrative users only. Since we will now allow non administrative users to login, there will be changes to show limited features. The directory structure that we will be using to maintain and query records is as follows:
{: style="text-align: justify;"}
![Directory Structure](/img/ldap-model.jpg)
{: style="display: block; margin-left: auto; margin-right: auto; width: 80%;"}

The above is a temporary structure and we might move forward with a custom schema. We will only need to update the queries if we decide to change the directory structure in the future.
{: style="text-align: justify;"}

### <a name="week4-plans"></a>Upcoming Week Plans
Since I have never worked with LDAP directories before, I might not be able to finish adding the features in the next few days. I also need to spend some time in integrating Keycloak with my LDAP server.
{: style="text-align: justify;"}

---
# Week 5
June 24<sup>th</sup> - June 30<sup>th</sup>  
I continued working on adding authentication and authorization mechanisms to Bindaas. **This week also had the first phase of evaluations and I am happy to share I passed.**
{: style="text-align: justify;"}

As always relevant commits can be tracked on the [add-jwt-token](https://github.com/tushar-97/bindaas/tree/add-jwt-token) branch.
{: style="text-align: justify;"}

### <a name="week5-completed-tasks"></a>Completed Tasks
1. Role based view for the web console.

### <a name="week5-pending-tasks"></a>Pending Tasks
1. Access control on databases supported by the providers (primary focus on Mongo)
2. Official documentation and guide to use the new features (long term goal)

### <a name="week5-design-updates"></a>Design Updates/Discussions
Right till the point of writing this blog, I have been looking at proper authorization mechanisms. Our end goal is to give users access to different subsets of the data with different roles. So user A might be able to read and modify collections X and Y, whereas user B might only be able to view collection Y.
{: style="text-align: justify;"}

Mongo fortunately allows us Role Based Access Control for our collections. For this we can either chose from a list of predefined roles or create our own as:
{: style="text-align: justify;"}

```
db.createRole({

    createRole: "role-name",
     
    privileges: [{ 
      resource: { db: "db-name", collection: "collection-name" },
      actions: [ "insert","update","createIndex", "createCollection" ]
    }],
     
    roles: [{ 
      role: "read", db: "db-name"
    }]
 
})
```

After creating these roles we can create different users as:
{: style="text-align: justify;"}

```
db.createUser({

    user: "username",
    pwd: "password",
    roles: [{
      role: "role-name", db: "db-name"
    }]

})
```

Once we have created these users we can share the credentials (the username/password/db combination is exactly what is required while creating a MongoDB provider with authentication). This step will restrict the user's activity to their roles.
{: style="text-align: justify;"}

The most important point to note is that **these mechanisms only work across a collection.** Ideally we would want to break down our database into multiple such collections to facilitate role based control. This however, will be a problem for a lot of existing users of Bindaas who are working with large datasets with different schemas. These users would have to restructure everything, add new roles and users which is quite a big task to undertake (with chances of error and a potential performance hit).
{: style="text-align: justify;"}

On a related note Mongo also provides authentication/authorization via a LDAP instance. The functioning is more or less the same as discussed above. We have to create users and role groups in the LDAP instance and corresponding users in the Mongo instance. Contrary to the highly technical (and at times difficult to understand documentation of Mongo), you can have a look at this well explained article in the documentation: [Authenticate and Authorize Users Using Active Directory via Native LDAP](https://docs.mongodb.com/manual/tutorial/authenticate-nativeldap-activedirectory/)
{: style="text-align: justify;"}

A second approach to all this is to move the authorization part to the Mongo provider level. As an example to how this might be achieved, consider the following hash map:
{: style="text-align: justify;"}
```
{
user-role1="mongo query which returns all the possible entires user1 can access",
user-role2="mongo query which returns all the possible entires user2 can access",
...
}
```
These roles can be set in the LDAP instance and when a user logs in we can get its corresponding role. After that it is as simple as running two queries - one the user provides and the other corresponding to its role, and finding the intersection of both. The only issue is that writing such queries for the hash map might be difficult. This approach is good for those users who don't want to restructure their mongo collections and where the type of roles will be limited. This approach is a novel idea and I haven't found any discussions on this so far. I am not sure if it will work correctly in all use cases so if you find any issues, do let me know.
{: style="text-align: justify;"}


### <a name="week5-plans"></a>Upcoming Week Plans
The aim for this week will to be discuss the ideas above, find and resolve issues and then start implementing them. Ideally the entire authentication/authorization process should be finished by end of this month.
{: style="text-align: justify;"}

---
## Week 6
July 1<sup>st</sup> - July 7<sup>th</sup>  
After discussing the appropriate method for adding an authorization flow, I started working on it and also made minor changes/fixes to the authentication flow.
{: style="text-align: justify;"}

As always relevant commits can be tracked on the [add-jwt-token](https://github.com/tushar-97/bindaas/tree/add-jwt-token) branch.
{: style="text-align: justify;"}

### <a name="week6-completed-tasks"></a>Completed Tasks
1. Get role from authenticated user to mongo provider level

### <a name="week6-pending-tasks"></a>Pending Tasks
1. Complete authorization flow for mongo provider

### <a name="week6-design-updates"></a>Design Updates
Since making changes to existing databases would not be feasible, we decided to implement authorization at the provider level. The user can list out roles and queries specific to those roles. These will be stored in <role,query> multi map and the results will also be cached for improved performance. Further implementation details can be found in the second apporach of last week's design updates section. We will also be adding a "Enable Authorization" flag to give freedom to the user and to make it backward compatible as well.
{: style="text-align: justify;"}

### <a name="week6-plans"></a>Upcoming Week Plans  
I plan to finish basic authorization checks this week and then test it out by creating a random database locally.
{: style="text-align: justify;"}

---
## Week 7
July 8<sup>th</sup> - July 14<sup>th</sup>  
I added authorization checks for mongo provider this week. We still need to find a better way for doing these checks, but other than that everything is in place.
{: style="text-align: justify;"}

As always relevant commits can be tracked on the [add-jwt-token](https://github.com/tushar-97/bindaas/tree/add-jwt-token) branch.
{: style="text-align: justify;"}

### <a name="week7-completed-tasks"></a>Completed Tasks
1. Added authorization check for mongo queries

### <a name="week7-pending-tasks"></a>Pending Tasks
1. Replace these checks with more efficient ways, but at the provider level

### <a name="week7-design-updates"></a>Design Updates
I have added a enable authorization checkbox when we create a mongo provider. This has been kept specific to mongo by design because we aren't rolling out authorization for other data providers at the moment. After enabling authorization the user can specify roles and their corresponding queries. We then parse and run these queries to get a list of authorized _ids. So now whenever the user wants to fetch/update documents we will just check if the _ids of the documents in question are a complete subset of the authorized _ids we had below. The above method is definitely optimal and we are looking for alternatives.
{: style="text-align: justify;"}

### <a name="week7-plans"></a>Upcoming Week Plans
Discuss and implement a better authorization check mechanism. This will be followed by extensive testing.  
{: style="text-align: justify;"}

---
## Week 8
July 15<sup>th</sup> - July 21<sup>st</sup>  
After having discussions and a demo last week, we have decided to use [auth0](https://auth0.com/) which is basically a AaaS (Authentication as a Service) platform. This can handle multiple identity providers and generate tokens for custom endpoints as well.
{: style="text-align: justify;"}

Since this approach is slightly different I have created a new branch as [add-jwt-token-new](https://github.com/tushar-97/bindaas/tree/add-jwt-token-new).
{: style="text-align: justify;"}

### <a name="week8-completed-tasks"></a>Completed Tasks
1. Configuring auth0
2. Client side authentication

### <a name="week8-pending-tasks"></a>Pending Tasks
1. Handling login and authentication server side
2. Verifying tokens from auth0 when calling endpoints

### <a name="week8-design-updates"></a>Design Updates
To make auth0 work with bindaas we can configure it as:
1. Create a new account and register a new tenant (bindaas.auth0.com is available).
2. Create a new Application and configure it for Authorization Code Flow.
3. Create a new API for the bindaas endpoints.
4. Configure Connections for identity providers.
5. Additionally you can add custom JS logic to modify the access token using Roles.

We have implemented the [Authorization Code Flow](https://auth0.com/docs/flows/concepts/auth-code) which ultimately returns a access token to use with the custom api we configured above. We will then verify these tokens using RSA256 (public-private key encryption) whenever any endpoint is called. This will be done between steps 9&10 in the diagram below. These tokens will also have a role which will be used later for authorization checks. The good thing about this is that we have decoupled the generation of tokens from bindaas and can add the auth0 login on any service which runs on top of bindaas. This way we won't have to log into bindaas to get a token and the service itself can make the required endpoint calls.
{: style="text-align: justify;"}

![Authorization Code Flow](/img/auth-code-flow.png)

### <a name="week8-plans"></a>Upcoming Week Plans
I will work on completing authentication so that we can call endpoints by using tokens from auth0.
{: style="text-align: justify;"}

---
## Week 9
July 22<sup>nd</sup> - July 28<sup>th</sup>  
We have finished the integration of auuth0 with Bindaas this week. Both the front end and back end are fully functional and support all the relevant features as before. **This week also had the second phase of evaluations and I am happy to share I passed.**
{: style="text-align: justify;"}

As always relevant commits can be tracked on the [add-jwt-token-new](https://github.com/tushar-97/bindaas/tree/add-jwt-token-new) branch.
{: style="text-align: justify;"}

### <a name="week9-completed-tasks"></a>Completed Tasks
1. Updating back end logic to support and verify auth0 tokens
2. Updating trusted-app-client

### <a name="week9-pending-tasks"></a>Pending Tasks
1. UI aspect of displaying long access tokens from auth0
2. Configure LDAP client for auth0
3. Assigning role to every user

### <a name="week9-design-updates"></a>Design Updates
At this point, I would like to reiterate that Bindaas can be configured in two ways. One will make it run like it used to, using API KEYs. This supports username/password and LDAP authentication but certain configurations have to be changed every time. The other way uses auth0 to generate access tokens for successful logins. This supports multiple identity providers and ldap. No changes have to made to switch between providers. The valid configurations for bindaas.config.json are:
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

If using trusted-app-client with JWTs, you can only revoke and list users as the other two operations (authorizing a user and creating a short token) require generation of access tokens which is now handled by auth0. Therefore the user will have to login using the web-console. Ideally the login will be placed on the application running on top of Bindaas. So you can directly use the access token from the login to call Bindaas' endpoints.
{: style="text-align: justify;"}

### <a name="week9-plans"></a>Upcoming Week Plans  
I plan to finish adding roles to every login to be used for authorization checks and then start working on the authorization part itself.
{: style="text-align: justify;"}

---
## Week 10
July 29<sup>th</sup> - August 4<sup>th</sup>  
We are now moving towards the final few weeks of GSoC. I spent the week making changes to the code so that it could be merged. The auth0 sign in can be configured via the properties file as described in the Design Updates section below.
{: style="text-align: justify;"}

As always relevant commits can be tracked on the [add-jwt-token-new](https://github.com/tushar-97/bindaas/tree/add-jwt-token-new) branch.
{: style="text-align: justify;"}

### <a name="week10-completed-tasks"></a>Completed Tasks
1. Add config file for auth0
2. Fixes as per FIXME comments

### <a name="week10-pending-tasks"></a>Pending Tasks
1. Make role accessible to all data providers
2. Documentation and guides to configure everything

### <a name="week10-design-updates"></a>Design Updates
After creating an account on auth0, please note down the domain, client id and audience and set it in the `bindaas.auth0.properties` file as: 
{: style="text-align: justify;"}

```
auth0.clientId=your-client-id
auth0.audience=your-audience
auth0.domain=your-domain.auth0.com
```

### <a name="week10-plans"></a>Upcoming Week Plans
I plan to finish the authorization process this week so that I can focus on documentation the entire next week. This way everything can be wrapped up by 18th August.  
{: style="text-align: justify;"}
---

## Week 11
August 5<sup>th</sup> - August 11<sup>th</sup>  
I was able to add authorization checks for Mongo queries this week. These can be enabld by specifying a authorization collection when creating a provider and can be used to limit access to parts of a collection. 
{: style="text-align: justify;"}

As always relevant commits can be tracked on the [add-jwt-token-new](https://github.com/tushar-97/bindaas/tree/add-jwt-token-new) branch.
{: style="text-align: justify;"}

### <a name="week11-completed-tasks"></a>Completed Tasks
1. Authorization for Mongo queries

### <a name="week11-pending-tasks"></a>Pending Tasks
1. Documentation/guides for all new features added

### <a name="week11-design-updates"></a>Design Updates
Authorization can be enabled by specifying the collection which has the project-role mapping. Authorization is diabled for older project files by default. Furthermore the collection must be in the following format (the name of the collection can be anything):
{: style="text-align: justify;"}                                                                                                                                                           
```
> db.authorizationRules.find()
{"projectName" : "sepsis-all", "roles" : "admin,dev,user" }
{"projectName" : "sepsis-admin", "roles" : "admin" }

```
                                                                                                                                                           
Additionally the collection which is being queried must have the `project` attribute. For example
{: style="text-align: justify;"}
```
> db.patientData.find()
{"patientId" : "EH101", "name" : "John Doe", "project" : "sepsis-all"}
{"patientId" : "EH102", "name" : "Joe Shmoe", "project" : "sepsis-admin"}
```
Authorization can be toggled from the data provider's configuration. As an example the user should enter `authorizationRules` as the `Authorization Rules Collection Name` when creating a new provider. An empty string will mean that authorization has not been enabled.                                                                                        
{: style="text-align: justify;"}

![Mongo Authorization](/img/mongo-auth.png)

### <a name="week11-plans"></a>Upcoming Week Plans
All code has been added and will be merged over the weekend. The only thing left is to create a wiki which I will do in the coming week.
{: style="text-align: justify;"}
---

## Week 12
August 12<sup>th</sup> - August 18<sup>th</sup>  
I spent the last week of the official coding period in writing the wiki for all the work I have done over the summer. We will be releasing Bindaas v4.0.0 soon and you can find the release notes [here](https://github.com/tushar-97/bindaas/wiki/Bindaas-4.0.0-Release-Notes).                                                                                      
{: style="text-align: justify;"}

With this weekly update we come to the end of GSoC. It has been an exciting and fulfilling experience. I would like to thank my mentors [Pradeeban Kathiravelu](https://kkpradeeban.blogspot.com) and [Ashish Sharma](http://www.bmi.emory.edu/ashishsharma) for their continued help and support. Do check my next blog post for a final update on GSoC.

---

Thanks for making it through the entire post. If you have any questions/suggestions do leave a comment below.
{: style="text-align: justify;"}

---
layout: post
title: Everything GSoC!
bigimg: /img/gsoc.png
tags: [gsoc, bindaas]
---
[**\[UPDATE: Week 1\]**](#week-1) This year I got selected for the Google Summer of Code program. For the next three moths I will be working with Biomedical Informatics, Emory University, in particular on their Data Integration Middleware called **Bindaas**. You can read more about my proposal and the organisation [here](https://summerofcode.withgoogle.com/projects/#5940411036598272).
{: style="text-align: justify;"}

This blog post is to document my progress through the weeks. I will keep updating this post every week. So without further ado
{: style="text-align: justify;"}

## Security Enhancements to Bindaas 
- [Week 0](#week-0)
- [Week 1](#week-1)

---
## Week 0
May 6<sup>th</sup> - May 26<sup>th</sup>  
After getting done with my university examinations, I decided to start writing a few lines of code, even before the official coding period began. I have a better understanding of the core modules as a result.
{: style="text-align: justify;"}

Relevant commits can be found on the [gsoc-week0](https://github.com/tushar-97/bindaas/tree/gsoc-week0) branch.
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

Thanks for making it through the entire post. If you have any questions/suggestions do leave a comment below.
{: style="text-align: justify;"}
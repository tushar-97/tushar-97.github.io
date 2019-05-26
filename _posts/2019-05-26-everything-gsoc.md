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

---
## Week 0
May 6<sup>th</sup> - May 27<sup>th</sup>  
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

Thanks for making it through the entire post. If you have any questions/suggestions leave a comment or send me an email at <tushar1997@gmail.com>.
{: style="text-align: justify;"}
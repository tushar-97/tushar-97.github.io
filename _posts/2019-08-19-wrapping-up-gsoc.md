---
layout: post
title: 'Wrapping Up GSoC: A Bindaas Experience!'
tags: [gsoc, bindaas]
---
For the past 12 weeks I have been working on adding a new authentication and authorization mechanism to [Bindaas](https://github.com/sharmalab/bindaas), a data integration middleware. Bindaas provides a common RESTful interface to various data sources like Apache Drill, MySQL and MongoDB. Bindaas exposes APIs to execute CRUD operations on these data sources. Calls to these operations must be accompanied by a token which is used to authenticate the end user. Earlier token generation and management was handled by Bindaas itself. As part of my GSoC project I have decoupled this from Bindaas by using auth0. [auth0](https://auth0.com/) is an Authentication as a Service platform with support for multiple identity providers (like Google, Github). The user logins through one of these identity providers and auth0 returns an access token (in the form of a JWT). After getting the access token, the user can use it to call the Bindaas endpoints. This has been implemented using Authorization Code Flow as described in RFC 6749. Internally Bindaas verifies that the token is valid and has been issued by auth0. An another advantage of using auth0 is that it allows us to modify these tokens to add a custom claim for role which is used for authorization check.
{: style="text-align: justify;"}

I am proud to share that we will soon be releasing Bindaas v4.0.0 which will include all these features. Over the summer I added 3000+ new lines of code across 100+ files. All the work I did is well documented in the links provided in the useful links section. Do go through them for a detailed understanding of the project. 
{: style="text-align: justify;"}

## Table of Contents
1. [Steps to Build and Run](#steps-to-build-and-run)
2. [Useful Links](#useful-links)
3. [Commit History](#commit-history)
4. [Future Work](#future-work)
5. [Using Bindaas in Your Research](#using-bindaas-in-your-research)
6. [Acknowledgements](#acknowledgements)


## Steps to Build and Run

```
> git clone https://github.com/tushar-97/bindaas.git
> cd bindaas
> git checkout add-jwt-token-new
> mvn clean install
> cd binaries/bin
> java -Dpid=BINDAAS_INSTANCE -Xmx1024m -jar org.eclipse.osgi_3.10.100.v20150529-1857.jar -console
```

## Useful Links
- I have been maintaining a weekly blog post which keeps track of changes made during a particular week, reasoning for making those changes along with proper documentation. You can check it out at [Tushar's Blog Post: Everything GSoC!](https://tushar-97.github.io/2019-05-26-everything-gsoc/)
{: style="text-align: justify;"}
- I have also written a descriptive wiki for all the new features that I have added and that will be a part of the next major release. It is recommended to go through the wiki if you want to try out the new features. You can have a look at [Bindaas v4.0.0 Release Notes](https://github.com/tushar-97/bindaas/wiki/Bindaas-4.0.0-Release-Notes)
{: style="text-align: justify;"}
- The [repository](https://github.com/tushar-97/bindaas) and feature [branch](https://github.com/tushar-97/bindaas/tree/add-jwt-token-new)!
{: style="text-align: justify;"}

## Commit History

| Commit | Description |
|--------|-------------|
| [19f2ba7](https://github.com/tushar-97/bindaas/commit/19f2ba7e1d506127cdcff6f2c26f2a8d840e434d) | Adding a basic JWT Manager |
| [a2e6405](https://github.com/tushar-97/bindaas/commit/a2e640562137c0d688700871a96aa80a1541a996) | Changing method signatures of JWTManager |
| [e4486a9](https://github.com/tushar-97/bindaas/commit/e4486a90a16bf12cd928e889b67e5db81ceac503) | Removing Token Class |
| [b89e9c7](https://github.com/tushar-97/bindaas/commit/b89e9c71027492d183c5ad5e98a83373cc4277c0) | Updating methods in JWTManager |
| [2210624](https://github.com/tushar-97/bindaas/commit/2210624bcf21aa61c75a5350e2e6a7baf15e40c5) | Update to show only JWT in web console |
| [1204e2f](https://github.com/tushar-97/bindaas/commit/1204e2f8e1ad03a361d881da60f93f4ef56d9d7c) | Merge pull request #1 from sharmalab/dev |
| [1d51d8b](https://github.com/tushar-97/bindaas/commit/1d51d8b72151de08f1ec1faa1013de1ed84c9368) | Merge branch 'dev' of https://github.com/tushar-97/bindaas into dev |
| [c227a24](https://github.com/tushar-97/bindaas/commit/c227a2411a4dcd70cb145f4e7bbad7b50c862423) | Added null check for MongoDB Credentials. Fixes #35 |
| [f599e55](https://github.com/tushar-97/bindaas/commit/f599e5515a3477fd8dc21295be939bbf7531aa86) | Adding basic modification/deletion of tokens |
| [20aed06](https://github.com/tushar-97/bindaas/commit/20aed0628eebc5114dc10f5cda05f2f0f78e7cb8) | Updated default Authentication Provider to OAuthPrpovider. Default protocol updated to JWT |
| [ad4d2fd](https://github.com/tushar-97/bindaas/commit/ad4d2fd7a14b65d9dfcd3bcc18e6eda6db69ee08) | Removed Token object. Added claim verification |
| [bc8ec5a](https://github.com/tushar-97/bindaas/commit/bc8ec5a871f84fe83b30f02cc8362ca8eb82fc26) | Adding authenticationProtocol to config |
| [d1cd05b](https://github.com/tushar-97/bindaas/commit/d1cd05b5ff97fe5356a98dc3489f8b7c3c2c3694) | UI changes for adding authentication protocol |
| [6d11c28](https://github.com/tushar-97/bindaas/commit/6d11c28262e153074bda39dabf74395861f0a11a) | Fixing version config |
| [4bd14b0](https://github.com/tushar-97/bindaas/commit/4bd14b05999049f578fe292c0cd638e83d87101f) | Adding protocol for Bindaas-Trusted-App-Client-API |
| [3b1e89a](https://github.com/tushar-97/bindaas/commit/3b1e89a0f81c9ac9a9e497fc5828531aa5363832) | Updated authorizeUser endpoint for Bindaas-Trusted-App-Client-API |
| [5de0439](https://github.com/tushar-97/bindaas/commit/5de0439eb242abf1aee6c40c2d046694e03c93d6) | Fixing typo |
| [ebd8ef8](https://github.com/tushar-97/bindaas/commit/ebd8ef8984003f054a216d3499959f9bbe6abf99) | Merge pull request #3 from tushar-97/gsoc-week2 |
| [9ef5e59](https://github.com/tushar-97/bindaas/commit/9ef5e59fcd83c67a331fc99e22ab36201f0de7f2) | Adding Trusted-App-Client |
| [47df65d](https://github.com/tushar-97/bindaas/commit/47df65d47087fadacbe91b3232171d696c5cf38f) | Added trusted-app-client from https://github.com/nadirsaghar/Bindaas-Trusted-App-Client-API/tree/master/trusted-app-client. Made changes to /authorizeUser endpoint to support protocol |
| [dca68e0](https://github.com/tushar-97/bindaas/commit/dca68e0d7363e39a6b9dfba297bcef04f51555ec) | Rollback commit |
| [086cd8a](https://github.com/tushar-97/bindaas/commit/086cd8a7eb924f674c292944af60276aa961df6c) | Merge branch 'add-jwt-token' of https://github.com/tushar-97/bindaas into add-jwt-token |
| [b206cb9](https://github.com/tushar-97/bindaas/commit/b206cb9610e32f9376fa21e6ad57e2dc58259e2c) | Rollback commit |
| [266e485](https://github.com/tushar-97/bindaas/commit/266e485a7cfee29a3ccfac6cab5d7233fd0859c3) | Adding trusted-app-client from https://github.com/nadirsaghar/Bindaas-Trusted-App-Client-API/tree/master/trusted-app-client. Updated /authorizeUser to support protocol |
| [d8c6faa](https://github.com/tushar-97/bindaas/commit/d8c6faa1e1d47bdc028e41d3249b5a173a332b2c) | Restructuring trusted-app-client |
| [84094df](https://github.com/tushar-97/bindaas/commit/84094dfc8cfa503057e4b39297fecd2950594108) | Updated /revokeUser to support protocol. Updated /listAPIKeys as /listAuthenticationTokens to support protocol. Updated /issueShortLivedApiKey as /issueShortLivedAuthenticationToken to support protocol |
| [f712fb6](https://github.com/tushar-97/bindaas/commit/f712fb68cdb71e6ac0b4d6e7ddb82eb77f0aee29) | Added limit for short lived JWT |
| [37bdc5f](https://github.com/tushar-97/bindaas/commit/37bdc5fc70648388280dc3ee304042a3ad5a273b) | Added logging module to trusted-app-client. Added server side log messages for trusted-app-client endpoints |
| [6cd19d1](https://github.com/tushar-97/bindaas/commit/6cd19d17127cd4c34d39a7f4e5630eacc20f98ef) | Added TrustedAppClientConstants |
| [8d88f7e](https://github.com/tushar-97/bindaas/commit/8d88f7e2f04419b477d2aced783eab1d1ce37713) | Adding null checks |
| [6f97483](https://github.com/tushar-97/bindaas/commit/6f9748330399e0e9019389129fe560b1491c4743) | Added trusted-app-client to main pom. Moved trusted app-client from tools to projects/misc |
| [816db80](https://github.com/tushar-97/bindaas/commit/816db80eb0648500d6a297979f625e70bb80be26) | Merge pull request #13 from sharmalab/add-jwt-token |
| [6186b69](https://github.com/tushar-97/bindaas/commit/6186b69a1904fce34160957acf5adf1c83588727) | Updated log messages |
| [18637c7](https://github.com/tushar-97/bindaas/commit/18637c7c260ee6c6e25406b982e192d4eb7d18df) | Added client side(js) code for auth0 |
| [209755d](https://github.com/tushar-97/bindaas/commit/209755d2066b2dff005003e144a10aa2fa130241) | Updated server side logic to better handle login/logout |
| [986bd6f](https://github.com/tushar-97/bindaas/commit/986bd6f19d27eeaa49bd496564550ee58ed6e377) | Get userinfo from auth0 |
| [eb2b044](https://github.com/tushar-97/bindaas/commit/eb2b04471f69b6c6b346d723c06d5274e592e34f) | Server side changes to handle access token |
| [a049373](https://github.com/tushar-97/bindaas/commit/a04937364decc09902d5126fa1b4038680fdeba1) | Changes to trusted-app-client |
| [9232715](https://github.com/tushar-97/bindaas/commit/9232715c7ddc822fe93cc9a3788e6703cb84cc46) | Added role using auth0. Role based view for web-console |
| [acba3f0](https://github.com/tushar-97/bindaas/commit/acba3f0b8c0798e23569ca750dfafa77630e5213) | Added flow of ROLE till mongo provider level |
| [43ab747](https://github.com/tushar-97/bindaas/commit/43ab7476415a7368471c25f6cf39058cad839ad4) | Creating properties file for auth0 configuration |
| [6ffddd4](https://github.com/tushar-97/bindaas/commit/6ffddd4addb8f6deccef91f34e29f6f8addbcd46) | Removing JIRA's issue collector script |
| [e0ba277](https://github.com/tushar-97/bindaas/commit/e0ba27745761cfb4661f69345d9a9d6a176acbd4) | Removing unnecessary code |
| [f7ea9eb](https://github.com/tushar-97/bindaas/commit/f7ea9eb217d505bc5557666fed468ddcbed5d3e2) | Added constants for api_key, jwt and role |
| [486526f](https://github.com/tushar-97/bindaas/commit/486526f9eb0a75e6724d93c4638b992c08dbe7c6) | Added reveal token link in web-console |
| [e05adb6](https://github.com/tushar-97/bindaas/commit/e05adb64d90101e9051fea2b4bfc3e324f911a6e) | Changing data source view to include authorization collection |
| [eb6e8c1](https://github.com/tushar-97/bindaas/commit/eb6e8c10e38ff0f395fbf7a5f20d7ed3dfb8d81c) | Server side changes for authorization |
| [2aff477](https://github.com/tushar-97/bindaas/commit/2aff477fcda83882a67bfc5009721bd266d31820) | Added authorization check for count, delete and find operations |
| [df86ec7](https://github.com/tushar-97/bindaas/commit/df86ec725c995864dff357b8cd722f89cf872283) | Adding caching for authorization rules |
| [684fb31](https://github.com/tushar-97/bindaas/commit/684fb310231e27ca38a1121a5180a3899cf86366) | Authorization for submit handler |
| [46a0d93](https://github.com/tushar-97/bindaas/commit/46a0d93846528cfe0d62b1140ec1cdf8501adfec) | Refactoring |
| [a045ec2](https://github.com/tushar-97/bindaas/commit/a045ec2b058e5d1d91a9aee2e0b3e91b69492423) | Refactoring |
| [5126382](https://github.com/tushar-97/bindaas/commit/5126382f6390d773eeb771444b9116969040733c) | Added null check for role |

## Future Work
Authorization is only available for Mongo provider at the time of writing. We plan to extend it to all the other providers as well. We further need to discuss real world use cases for authorization and update the logic accordingly.
{: style="text-align: justify;"}

## Using Bindaas in Your Research

Please cite the below, if you use Bindaas in your research

[1] Kathiravelu, P., Saghar, Y. N., Aggarwal, T. & Sharma, A. (2019). Data Services with Bindaas:
RESTful Interfaces for Diverse Data Sources. In IEEE International Conference on Big Data. Dec. 2019.

## Acknowledgements
The entire GSoC experience has been a very fulfilling one, in part due to my mentor [Pradeeban Kathiravelu](https://kkpradeeban.blogspot.com), who gave me the space to work on new ideas and just the right amount of guidance to see them through to fruition. I would also like to thank my mentor [Ashish Sharma](http://www.bmi.emory.edu/ashishsharma) and everyone else at Sharmalab, Emory University for all their help and support. We will continue to bring new features to Bindaas to help you with your big data needs!
{: style="text-align: justify;"}

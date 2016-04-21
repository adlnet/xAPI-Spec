# Experience API
## Advanced Distributed Learning (ADL) Co-Laboratories

>#### License

>"Copyright 2013 Advanced Distributed Learning (ADL) Initiative, U.S. Department of Defense

>Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except 
>in compliance with the License. You may obtain a copy of the License at
>http://www.apache.org/licenses/LICENSE-2.0

>Unless required by applicable law or agreed to in writing, software distributed under the License 
>is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express 
>or implied. See the License for the specific language governing permissions and limitations under 
>the License."

>This document was authored by members of the Experience API Working Group (see 
>list in [CONTRIBUTING.md](CONTRIBUTING.md#contributors)) in support of the Office of the Deputy Assistant Secretary of 
>Defense (Readiness) Advanced Distributed Learning (ADL) Initiative. Please 
>send all feedback and inquiries to helpdesk@adlnet.gov  

## Table of Contents
*	Part One:	[About the Experience API](./xAPI-About.md#partone)  
	*	1.0.	[Introduction](./xAPI-About.md#introduction-partone) 
	*	2.0.	[How To Use This Document](./xAPI-About.md#readingguidelines)  
		*	2.1.	[MUST / SHOULD / MAY](./xAPI-About.md#def-must-should-may)  
	 	*	2.2.	[Guidelines for Interpreting Descriptive Text and Tables](./xAPI-About.md#interpret-text-table)  
	*	3.0.	[Serialization and JavaScript Object Notation](./xAPI-About.md#json)
	*	4.0.	[Definitions](./xAPI-About.md#definitions) 
	*	5.0.	[xAPI Components](./xAPI-About.md#xapi-components) 
	*	6.0.	[Extending xAPI](./xAPI-About.md#extending-xapi) 
	*	7.0.	[Profiles and Communities of Practice](./xAPI-About.md#COPs)  
	*	[Appendices](./xAPI-About.md#append1)  
		*	[Appendix A: Revision History](./xAPI-About.md#Appendix1A)  
		*	[Appendix B: cmi5 Example](./xAPI-About.md#Appendix1B)  
*	Part Two:	[Experience API (xAPI) Data](./xAPI-Data.md#parttwo)  
	*	1.0.	[Documents](./xAPI-Data.md#documents) 
	*	2.0.	[Statements](./xAPI-Data.md#statements)  
		*	2.1.	[Purpose](./xAPI-Data.md#statement-purpose)  
	 	*	2.2.	[Formatting Requirements](./xAPI-Data.md#dataconstraints) 
	 	*	2.3.	[Statement Lifecycle](./xAPI-Data.md#lifecycle) 
		 	*	2.3.1.	[Statement Immutability](./xAPI-Data.md#statement-immutablity-and-exceptions) 
		 	*	2.3.2.	[Voiding](./xAPI-Data.md#voided) 
   		*	2.4.	[Statement Properties](./xAPI-Data.md#statement-properties)  
	        *	2.4.1.	[ID](./xAPI-Data.md#stmtid)  
	        *	2.4.2.	[Actor](./xAPI-Data.md#actor)  
	        *	2.4.3.	[Verb](./xAPI-Data.md#verb)  
	        *	2.4.4.	[Object](./xAPI-Data.md#object)  
	        *	2.4.5.	[Result](./xAPI-Data.md#result)  
	        *	2.4.6.	[Context](./xAPI-Data.md#context)  
	        *	2.4.7.	[Timestamp](./xAPI-Data.md#timestamp)  
	        *	2.4.8.	[Stored](./xAPI-Data.md#stored)  
	        *	2.4.9.	[Authority](./xAPI-Data.md#authority)  
	        *	2.4.10.	[Version](./xAPI-Data.md#version)  
	        *	2.4.11.	[Attachments](./xAPI-Data.md#attachments)  
    	*	2.5.	[Retrieval of Statements](./xAPI-Data.md#retrieval)   
    	*	2.6.	[Signed Statements](./xAPI-Data.md#signature)  
	*	3.0.	[Metadata](./xAPI-Data.md#metadata)
		*	3.1.	[IRI Requirements](./xAPI-Data.md#iri-requirements)  
		*	3.2.	[Hosted Metadata](./xAPI-Data.md#miscmeta)  
    *	4.0.	[Special Data Types and Rules](./xAPI-Data.md#special-data)  
		*	4.1.	[Extensions](./xAPI-Data.md#miscext) 
		*	4.2.	[Language Maps](./xAPI-Data.md#lang-maps)
		*	4.3.	[IRIs](./xAPI-Data.md#iris)
		*	4.4.	[UUIDs](./xAPI-Data.md#uuids)
		*	4.5.	[ISO 8601 Timestamps](./xAPI-Data.md#timestamps)
		*	4.6.	[ISO 8601 Durations](./xAPI-Data.md#durations)
	*	[Appendices](./xAPI-Data.md#append2)  
		*	[Appendix A: Example Statements](./xAPI-Data.md#Appendix2A)  
		*	[Appendix B: Example statement objects of different types](./xAPI-Data.md#Appendix2B)  
		*	[Appendix C: Example definitions for Activities of type "cmi.interaction"](./xAPI-Data.md#Appendix2C)  	
		*	[Appendix D: Example Signed Statement](./xAPI-Data.md#Appendix2D)  
*	Part Three:	[Data Processing, Validation, and Security](./xAPI-Communication.md#partthree)  
	*	1.0.	[Requests](./xAPI-Communication.md#requests)
		*	1.1.	[HEAD Request Implementation](./xAPI-Communication.md#httphead)  
	 	*	1.2.	[Headers](./xAPI-Communication.md#header-parameters) 
	 	*	1.3.	[Alternate Request Syntax](./xAPI-Communication.md#alt-request-syntax) 
	 	*	1.4.	[Encoding](./xAPI-Communication.md#encoding) 
	 	*	1.5.	[Content Types](./xAPI-Communication.md#content-types) 
	        *	1.5.1.	[Application/JSON](./xAPI-Communication.md#applicationjson) 
	        *	1.5.1.	[Multipart/Mixed](./xAPI-Communication.md#multipartmixed)
	*	2.0.	[Resources](./xAPI-Communication.md#datatransfer)   
	 	*	2.1.	[Statement Resource](./xAPI-Communication.md#stmtres) 
	 	*	2.2.	[Documents Resources](./xAPI-Communication.md#doctransfer) 
	 	*	2.3.	[State Resource](./xAPI-Communication.md#stateres) 
	 	*	2.4.	[Agents Resource](./xAPI-Communication.md#agentsres) 
	 	*	2.5.	[Activities Resource](./xAPI-Communication.md#activitiesres) 
	 	*	2.6.	[Agent Profile Resource](./xAPI-Communication.md#agentprofres) 
	 	*	2.7.	[Activity Profile Resource](./xAPI-Communication.md#actprofres) 
	 	*	2.8.	[About Resource](./xAPI-Communication.md#aboutresource) 
   	*	3.0.	[Data Validation](./xAPI-Communication.md#validation)     
    	*	3.1.	[Concurrency](./xAPI-Communication.md#concurrency)  
    	*	3.2.	[Error Codes](./xAPI-Communication.md#errorcodes)
    	*	3.3     [Versioning](./xAPI-Communication.md#versioning)  
    *	4.0.	[Authentication](./xAPI-Communication.md#authentication)  
		*	4.1.	[OAuth 1.0 Authentication Scenarios and Methods](./xAPI-Communication.md#authdefs) 
		*	4.2.	[OAuth 1.0 Authorization Scope](./xAPI-Communication.md#oauthscope)
    *	5.0	[Security](./xAPI-Communication.md#security)
	*	[Appendices](./xAPI-Communication.md#append3)  
		*	[Appendix A: Converting Statements to 1.0.0](./xAPI-Communication.md#Appendix3A)  
		*	[Appendix B: Table of All Endpoints](./xAPI-Communication.md#Appendix3B)  
		*	[Appendix C: Cross Domain Request Example](./xAPI-Communication.md#Appendix3C)  

# Part Three: Data Processing, Validation, and Security 

This third part details the more technical side of the Experience API, dealing with 
how Statements are transferred between Activity Provider and LRS. A number of libraries 
are available for a range of technologies (including JavaScript) which handle 
this part of the specification. It therefore might not be necessary for Activity Provider developers 
to fully understand every detail of this part of the specification.

<a name="requests"/>

## 1.0 Requests

xAPI tracking is done via HTTP Requests from the Activity Provider (client) to the LRS (server).  This 
specification offers guidance in some aspects of this communication.  Where no guidance is offered, it is 
recommended that those implementing xAPI use current industry best practices.

<a name="httphead"/>

### 1.1 HEAD Request Implementation

###### Description
The behaviour of the LRS in response to PUT, POST, GET and DELETE requests is outlined in [Resources](#resources) below. 
All resources that support GET requests also support HEAD.
The LRS will respond to HEAD requests by returning the meta information only, using the HTTP headers, and 
not the actual document.  

###### Rationale

Clients accessing the LRS might need to check if a particular Statement exists, or determine
the modification date of documents such as state or Activity or Agent profile. Particularly
for large documents it's more efficient not to get the entire document just to check its
modification date.

###### LRS Requirements
* The LRS MUST respond to any HTTP HEAD request as it would have responded to an otherwise
identical HTTP GET request except:
    * The message-body MUST be omitted.
    * The Content-Length header MAY be omitted, in order to avoid wasting LRS resources.

<a name="header-parameters"/> 

### 1.2 Headers

##### Header Parameters
Some header parameters used within xAPI data transfer are 
[standard HTTP headers](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields). Others are specific to this
 specification. The following request headers are expected to be used by the Activity Provider in some or all 
 of the types of request and situations described in this specification:

* Accept
* Accept-Encoding
* Accept-Language
* Authorization
* Content-Type
* Content-Length
* Content-Transfer-Encoding
* If-Match
* If-None-Match
* X-Experience-API-Version 

The following response headers are expected to be used by the LRS. Again, not all of these apply
to every type of request and/or situations:

* Content-Type
* Content-Length
* Last-Modified
* ETag
* Status
* X-Experience-API-Version
* X-Experience-API-Consistent-Through

The lists above are not intended to be exhaustive. See requirements throughout this document for more details.

<a name="alt-request-syntax"/>

### 1.3 Alternate Request Syntax

###### Description

One of the goals of the xAPI is to allow cross-domain tracking, and even though 
xAPI seeks to enable tracking from applications other than browsers, browsers 
still need to be supported. Internet Explorer 8 and 9 do not implement Cross 
Origin Resource Sharing, but rather use their own Cross Domain Request API, 
which cannot use all of the xAPI as described above due to only supporting "GET" 
and "POST", and not allowing HTTP headers to be set.  

###### Details/Requirements

The following describes alternate syntax for consumers to use only when unable 
to use the usual syntax for specific calls due to the restrictions mentioned 
above. This alternate syntax can also be used to GET Statements due to limits
on query string length.  

__Method__:  
* All xAPI requests issued MUST be POST. 
* The intended xAPI method MUST be included as the value of the "method" query 
string parameter. 
* The AP MUST NOT include any other query string parameters on the request.

Example: http://example.com/xAPI/statements?method=PUT  

__Content__:  
* If the xAPI call involved sending content, the AP MUST URL encode that content and 
include it as a form parameter called "content". 
* The LRS MUST interpret this content as a UTF-8 string. Storing binary data is not supported 
with this syntax.  

__Headers__:  
* The AP MAY include any header parameters required by this specification which are 
expected to appear in the HTTP header as form parameters with the same names. This applies 
to the following parameters: Authorization, X-Experience-API-Version, Content-Type, Content-Length,
If-Match and If-None-Match. It does not apply to Content-Transfer-Encoding.
* The LRS MUST treat the form parameters listed above as header parameters. 
* The AP MUST include other header parameters not listed above in the HTTP header as normal. 
* The AP SHOULD* still include a Content-Type header (in the HTTP header) for this type of 
request with a value of 'application/x-www-form-urlencoded'. 
* The Content-Type form parameter SHOULD* specify the content type of the content within the content form parameter. 
* The AP SHOULD* still include a Content-Length header (in the HTTP header) for this type of 
request indicating the overall length of the request's content. 
* The Content-Length form parameter SHOULD* specify the length of the content within the content form parameter and 
will therefore be a lower figure than the length listed in the Content-Length header. 

__Query string parameters__:  
* Any query string parameters other than 'method'
MUST instead be included as a form parameter with the same name. 
* The LRS MUST treat any form parameters other than "content" or the 
header parameters listed above as query string parameters. 

__Attachments__: Note that due to issues relating to encoding, it is not possible to send 
binary data attachments using this syntax. See [4.1.11. Attachments](#attachments) 

* The LRS MUST support the syntax above.

__Note__: Versions of Internet Explorer lower than 10 do not 
support Cross Domain Requests between HTTP and HTTPS. This means that for IE9 and lower, 
if the LRS is on an HTTPS domain, the Client sending the Statement must also be on HTTPS. 
If the LRS is on HTTP, the Client must be too.  

There might be cases where there is a requirement for the Client Activity Provider to support 
IE8 and IE9 where the Client code is hosted on a different scheme (HTTP or HTTPS) from 
the LRS. In these cases, proxy is needed to communicate to the LRS. Two simple solutions 
might be to 1) set up a proxy pass through on the same scheme as the Client code to the LRS 
or 2) to host an intermediary server-side LRS on the same scheme as the Client code to route 
Statements to the target LRS.   

* The LRS MAY choose to provide both HTTP and HTTPS endpoints to support this use case. 
* The LRS and the Client SHOULD consider the security risks before making the 
decision to use this scheme.

See [Appendix C: Cross Domain Request Example](#Appendix3C) for an example. 

<a name="encoding"/> 

### 1.4 Encoding

###### Requirement
* All strings MUST be encoded and interpreted as UTF-8. 

<a name="content-types"/> 
### 1.5 Content Types
Requests within this specification normally use an application/json content type. Exceptions to this are:

* Documents can have any content type. 
* Statement requests that may sometimes include attachments use the multipart/mixed content type. 

<a name="applicationjson"/> 
#### 1.5.1 Application/JSON
Requests within this specification normally use an application/json content type. 

###### LRS Requirements
* When receiving a PUT or POST with a document type of "application/json”, an LRS MUST accept batches 
of Statements which contain no attachment Objects.
* When receiving a PUT or POST with a document type of "application/json”, an LRS MUST accept batches 
of Statements which contain only attachment Objects with a populated fileUrl.

<a name="multipartmixed"/> 
#### 1.5.2 Multipart/Mixed

The multipart/mixed content type is used for requests that *could* include attachments. This does not mean that all multipart/mixed
requests neccesarily do include attachments.

##### Procedure for the exchange of attachments

1. A Statement request including zero or more attachments is construed as described below.

2. The Statement is sent to the receiving system using a Content-Type of
"multipart/mixed". Any attachments are placed at the end of such transmissions.

3. The receiving system decides whether to accept or reject the Statement based on the information in the first part.

4. If it accepts the request, it can match the raw data of an attachment(s)
with the attachment header by comparing the SHA-2 of the raw
data to the SHA-2 declared in the header. It MUST not do so any other way.

###### Requirements for Attachment Statement Batches

A request transmitting a Statement batch, Statement results, or single Statement that includes attachments MUST satisfy one of the 
following criteria:

* It MUST be of type "application/json" and include a fileUrl for every attachment EXCEPT for Statement 
results when the attachments filter is false.
* It MUST conform to the definition of multipart/mixed in [RFC 2046](https://www.ietf.org/rfc/rfc2046.txt) and:
    * The first part of the multipart document MUST contain the Statements themselves, with type "application/json".
    * Each additional part contains the raw data for an attachment and forms a logical part of the Statement. This 
    capability will be available when issuing PUT or POST against the Statement resource.
    * MUST include an X-Experience-API-Hash parameter in each part's header after the first (Statements) part.
    * MUST include a Content-Transfer-Encoding parameter with a value of "binary" in each part's header after the first (statements) part.
    * SHOULD only include one copy of an attachment's data when the same attachment is used in multiple Statements that are sent together.
    * SHOULD include a Content-Type parameter in each part's header. For the first part (containing the statement) this MUST be "application/json".
   	* Where parameters have a corresponding property within the Attachment Object (outlined in the table above), and both the parameter and 
   	property are specified for a given Attachment, the value of these parameters and properties MUST match. 


###### LRS Requirements

* An LRS MUST include attachments in the Transmission Format described above
when requested by the Client (see ["Statement Resource"](#stmtapi)).
* An LRS MUST NOT pull Statements from another LRS without requesting attachments.
* An LRS MUST NOT push Statements into another LRS without including attachment data
received, if any, for those attachments.
* When receiving a PUT or POST with a document type of "multipart/mixed”, an LRS MUST accept batches of 
Statements that contain attachments in the Transmission Format described above.
* When receiving a PUT or POST with a document type of "multipart/mixed”, an LRS MUST reject batches of 
Statements having attachments that neither contain a fileUrl nor match a received attachment part based on their hash.
* When receiving a PUT or POST with a document type of "multipart/mixed”, an LRS SHOULD assume a 
Content-Transfer-Encoding of binary for attachment parts.
* An LRS MAY reject (batches of) Statements that are larger than the LRS is configured to allow.
* When receiving a PUT or POST with a document type of "multipart/mixed”, an LRS SHOULD* accept batches 
of Statements which contain no attachment Objects.
* When receiving a PUT or POST with a document type of "multipart/mixed”, an LRS SHOULD* accept batches 
of Statements which contain only attachment Objects with a populated fileUrl.

__Note:__ There is no requirement that Statement batches using the mime/multipart format
contain attachments.

###### Client Requirements

* The Client MAY send Statements with attachments as described above.
* The Client MAY send multiple Statements where some or all have attachments if using "POST".
* The Client MAY send batches of type "application/json" where every attachment
Object has a fileUrl, ignoring all requirements based on the "multipart/mixed" format.
* The Client SHOULD use SHA-256, SHA-384, or SHA-512  to populate the "sha2" property.

###### File URL
The File URL is intended to provide a location from which the LRS or another system can retrieve the
attachment. There are, however, no requirements for the owner of the attachment to make the 
attachment data available at the location indefinitely or to make the attachment publically
available without security restrictions. When determining attachment hosting arrangements, 
designers of systems that will send Statements using the "fileUrl" property are encouraged to 
consider the needs of end recipient(s) of the Statement especially if the attachment content 
is not included with the Statement.

* The attachment data SHOULD be retrievable at the URL indicated by the fileUrl.
* The owner of the attachment MAY stop providing the attachment data at this IRL at any time. 
* Security restrictions MAY be applied to clients attempting to access the attachment data at this IRL. 

The period of time an attachment is made available for, and the security restrictions applied to
hosted attachments, are out of scope of this specification. 

###### Example

Below is an example of a very simple Statement with an attachment. Please note the following:

* The boundary in the sample was chosen to demonstrate valid character classes;
* The selected boundary does not appear in any of the parts;
* For readability the sample attachment is text/plain. Even if it had been a 'binary' type
like 'image/jpeg' no encoding would be done, the raw octets would be included;
* Per RFC 2046, the boundary is <CRLF> followed by -- followed by the boundary string declared in the header.

Don't forget the ```<CRLF>```  when building or parsing these messages.

Headers:

``` 
Content-Type: multipart/mixed; boundary="abcABC0123'()+_,-./:=?"
X-Experience-API-Version:1.0.0
```
Content:
```

--abcABC0123'()+_,-./:=?
Content-Type:application/json

{
    "actor": {
        "mbox": "mailto:sample.agent@example.com",
        "name": "Sample Agent",
        "objectType": "Agent"
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/answered",
        "display": {
            "en-US": "answered"
        }
    },
    "object": {
        "id": "http://www.example.com/tincan/activities/multipart",
        "objectType": "Activity",
        "definition": {
            "name": {
                "en-US": "Multi Part Activity"
            },
            "description": {
                "en-US": "Multi Part Activity Description"
            }
        }
    },
    "attachments": [
        {
            "usageType": "http://example.com/attachment-usage/test",
            "display": { "en-US": "A test attachment" },
            "description": { "en-US": "A test attachment (description)" },
            "contentType": "text/plain; charset=ascii",
            "length": 27,
            "sha2": "495395e777cd98da653df9615d09c0fd6bb2f8d4788394cd53c56a3bfdcd848a"
        }
    ]
}
--abcABC0123'()+_,-./:=?
Content-Type:text/plain
Content-Transfer-Encoding:binary
X-Experience-API-Hash:495395e777cd98da653df9615d09c0fd6bb2f8d4788394cd53c56a3bfdcd848a

here is a simple attachment
--abcABC0123'()+_,-./:=?--
```

<a name="datatransfer"/> <a name="resources"/>
## 2.0 Resources

The LRS is interacted with via RESTful HTTP methods to the resources outlined in this section.
The Statement Resource can be used by itself to track learning records. Other resources provide
additional functionality. 

An LRS will support all of the resources described in this section. It's also possible
for a tool which is not an LRS to choose to follow the LRS requirements of one or 
more of the resources and methods described in this section. For example a tool might
implement POST Statements for the purposes of receiving incoming Statements forwarded by an LRS.
Such a system is not considered to be an LRS or 'partial LRS'; it is simply not an LRS. 

__Note:__ In all of the example endpoints given in the specification, 
"http://example.com/xAPI/" is the example base endpoint of the LRS. All other IRI 
syntax after this represents the particular endpoint used. A full list of endpoints
is included in [Appendix B: Table of All Endpoints](#Appendix3B).

###### Requirements

* The LRS MUST support all of the resources described in [this section](#datatransfer). 
* If the LRS implements OAuth 1.0, the LRS MUST also support all of the OAuth resources 
described in [Section 6.4.2 OAuth Authorization Scope](#oauthscope).
* The LRS MAY support additional resources not described in this specification. 
* Past, current and future versions of this specification do not and will not define resource endpoints 
with path segments starting 'extensions/'. LRSs supporting additional resources not defined 
in this specification SHOULD define their endpoints with path segments starting 'extensions/'.

<a name="stmtres"/> 

#### 2.1 Statement Resource

###### Description

The basic communication mechanism of the Experience API.  


<a name="stmtresput"/>

####2.1.1 PUT Statements

###### Details

Example endpoint: `http://example.com/xAPI/statements`

Stores a single Statement with the given id. POST can also be used to store single Statements.

**Content:** The Statement object to be stored. 

**Returns:** `204 No Content`  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th><th>Required</th></tr>
	<tr><td>statementId</td><td>String</td><td> 
	<td>Id of Statement to record</td></td><td>Required</td></tr>
</table>

###### LRS Requirements

* An LRS MUST NOT make any modifications to its state based on receiving a Statement
with a statementID that it already has a Statement for. Whether it responds with
`409 Conflict` or `204 No Content`, it MUST NOT modify the Statement or any other
Object.

* If the LRS receives a Statement with an id it already has a Statement for, it SHOULD
verify the received Statement matches the existing one and SHOULD return `409 Conflict` if they
do not match. See [Statement comparision requirements](statement-comparision-requirements).

* If the LRS receives a Statement with an id it already has a Statement for **in the same batch**, it SHOULD*
verify the received Statement matches the existing one and SHOULD return `400 Bad Request` if they
do not match. See [Statement comparision requirements](statement-comparision-requirements).

* The LRS MAY respond before Statements that have been stored are available for retrieval.

###### Activity Provider Requirements

* Activity Providers SHOULD POST Statements including the Statement "id" property instead of using PUT. 
* When PUTing statements, the "id" property of the Statement SHOULD be used. 
* Where provided, the "id" property of the Statement MUST match the "statementId" parameter of the request. 

<a name="stmtrespost"/>

####2.1.2 POST Statements

###### Details

Example endpoint: `http://example.com/xAPI/statements`

Stores a Statement, or a set of Statements. 

An alternative for systems 
that generate a large amount of Statements is to provide the LRS side of the API 
on the AP, and have the LRS query that API for the list of updated (or new) 
Statements periodically. This will likely only be a realistic option for systems 
that provide a lot of data to the LRS.  

**Content:** An array of Statements or a single Statement to be stored. 

**Returns:** `200 OK`, Array of Statement id(s) (UUID).  

###### Requirements

* An LRS MUST NOT make any modifications to its state based on a receiving a Statement
with a statementID that it already has a Statement for. Whether it responds with
`409 Conflict` or `200 OK`, it MUST NOT modify the Statement or any other
Object.
* If the LRS receives a Statement with an id it already has a Statement for, it SHOULD
verify the received Statement matches the existing one and return `409 Conflict` if they
do not match. See [Statement comparision requirements]statement-comparision-requirements).
* The LRS MAY respond before Statements that have been stored are available for retrieval.
* GET Statements MAY be called using POST and form parameters if necessary as query strings 
have limits. See [Alternate Request Syntax](#alt-request-syntax) for more details.
* The LRS MUST differentiate a POST to add a Statement or to list Statements based on the 
parameters passed. See [Alternate Request Syntax](#alt-request-syntax) for more details.

<a name="stmtresget"/>

####2.1.3 GET Statements

###### Details

Example endpoint: `http://example.com/xAPI/statements`

This method is called to fetch a single Statement or multiple Statements. If the
statementId or voidedStatementId parameter is specified a single Statement is returned.

Otherwise returns: A [StatementResult](#retstmts) Object,
a list of Statements in reverse chronological order based on "stored" time, 
subject to permissions and maximum list length. If additional results are 
available, an IRL to retrieve them will be included in the StatementResult 
Object.

**Content:** None.

**Returns:** `200 OK`, Statement or [Statement Result](#retstmts) (See [Section 4.2](#retstmts) for details)

<table>
	<tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>statementId</td>
		<td>String</td>
		<td> </td>
		<td>ID of Statement to fetch</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>voidedStatementId</td>
		<td>String</td>
		<td> </td>
		<td>ID of voided Statement to fetch. see <a href="#voidedStatements">Voided
		Statements</a></td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>agent</td>
		<td>Agent or Identified Group Object (JSON)</td>
		<td> </td>
		<td>Filter, only return Statements for which the specified Agent or group is 
		the Actor or Object of the Statement.
			<ul>
				<li> 
					Agents or identified groups are equal when the same 
					Inverse Functional Identifier is used in each Object compared and 
					those Inverse Functional Identifiers have equal values.
				</li><li>
					For the purposes of this filter, groups that have members 
					which match the specified Agent	based on their Inverse Functional
					Identifier as described above are considered a match
				</li>
			</ul>
			<br><br>See <a href="#actor">agent/group</a> Object definition
			for details.
		</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>verb</td>
		<td>Verb id (IRI)</td>
		<td> </td>
		<td>Filter, only return Statements matching the specified verb id.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>activity</td>
		<td>Activity id (IRI)</td>
		<td> </td>
		<td>
			Filter, only return Statements for which the Object of the Statement is 
			an Activity with the specified id.
		</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>registration</td>
		<td>UUID</td>
		<td> </td>
		<td>
			Filter, only return Statements matching the specified registration 
			id. Note that although frequently a unique Registration will be used 
			for one Actor assigned to one Activity, this cannot be assumed. 
			If only Statements for a certain Actor or Activity are required, 
			those parameters also need to be specified.
		</td>
		<td>Optional</td>
	</tr>
	<tr>
	<td>related_activities</td>
		<td>Boolean</td>
		<td>false</td>
		<td>
			Apply the Activity filter broadly. Include Statements for which the Object,
			any of the  context Activities, or any of those properties in a contained
			SubStatement match the Activity parameter, instead of that parameter's 
			normal behavior. Matching is defined in the same way it is for the 
			'activity' parameter.
		</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>related_agents</td>
		<td>Boolean</td>
		<td>false</td>
		<td>
			Apply the Agent filter broadly. Include Statements for which 
			the Actor, Object, Authority, Instructor, Team,
			or any of these properties in a contained SubStatement match the Agent parameter,
			instead of that parameter's normal behavior. Matching is defined in the same way
			it is for the 'agent' parameter.
		</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>since</td>
		<td>Timestamp</td>
		<td> </td>
		<td>Only Statements stored since the specified Timestamp (exclusive) are returned.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>until</td>
		<td>Timestamp</td>
		<td> </td>
		<td>Only Statements stored at or before the specified Timestamp are returned.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>limit</td>
		<td>Nonnegative Integer</td>
		<td>0</td>
		<td>
			Maximum number of Statements to return. 0 indicates return the 
			maximum the server will allow.
		</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>format</td>
		<td>String: ('ids', 'exact', or 'canonical')</td>
		<td>exact</td>
		<td>If 'ids', only include minimum information necessary in Agent, Activity, Verb 
			and Group Objects to identify them. For anonymous groups this means including 
			the minimum information needed to identify each member. 
			<br/><br/>
			If 'exact', return Agent, Activity, Verb and Group Objects populated exactly as they 
			were when the Statement was received. An LRS requesting Statements for the purpose 
			of importing them would use a format of 'exact' in order to maintain 
			<a href="./xAPI-Data.md#statement-immutablity-and-exceptions">Statement Immutability</a>.  
			<br/><br/>
			If 'canonical', return Activity Objects and Verbs populated with the canonical
			definition of the Activity Objects and Display of the Verbs as determined by the LRS, after
			applying the <a href="#queryLangFiltering">language filtering process defined below</a>,
			and return the original Agent and Group Objects as in 'exact' mode.  
		</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>attachments</td><td>Boolean</td><td>false</td>
		<td>If <code>true</code>, the LRS uses the multipart response format and includes all attachments as 
		described previously.  If <code>false</code>, the LRS sends the prescribed response with Content-Type 
		application/json and does not send attachment data.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>ascending</td>
		<td>Boolean</td>
		<td>false</td>
		<td>If <code>true</code>, return results in ascending order of stored time</td>
		<td>Optional</td>
	</tr>
</table>

__Note:__ The values of Boolean parameters are represented as `true` or `false` as in JSON.
###### Requirements

* The LRS MUST reject with an `HTTP 400` error any requests to this resource 
which contain both statementId and voidedStatementId parameters

* The LRS MUST reject with an `HTTP 400` error any requests to this resource 
which contain statementId or voidedStatementId parameters, and also contain any 
other parameter besides "attachments" or "format".

* The LRS MAY apply additional query filter criteria based on permissions associated
with the credentials used. 

* In the event that no statements are found matching the query filter criteria, the LRS MUST still return 
`HTTP 200` and a [StatementResult](#retstmts) Object. In this case, the statements property will contain
an empty array.

* The LRS MUST include the header "X-Experience-API-Consistent-Through", in 
<a href="https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations">ISO 8601
combined date and time</a> format, on all responses to Statements requests, with a value of the 
Timestamp for which all Statements that have or will have a "stored" property before that time 
are known with reasonable certainty to be available for retrieval. This time SHOULD take into 
account any temporary condition, such as excessive load, which might cause a delay in Statements 
becoming available for retrieval.

* If the attachment property of a GET statement is used and is set to <code>true</code>, the LRS MUST use the 
multipart response format and include all attachments as described in <a href="#attachments">4.1.11</a>.

* If the attachment property of a GET statement is used and is set to <code>false</code>, the LRS MUST NOT
include attachment raw data and MUST report application/json.

* The LRS SHOULD* include a "Last-Modified" header which matches the Stored timestamp of the Statement. 

<a name="queryStatementRef" />

###### Filter Conditions for StatementRefs 

This section outlines rules by which Statements targeting other Statements can sometimes be considered to 
meet the filter conditions of a query even if they do not match the original query's filter parameters. 
These rules **do not** apply when retrieving a single Statement using "statementId" or "voidedStatementId" query 
parameters.

'Targeting Statements' means that one Statement (the targeting Statement) includes the Statement Id of another
Statement (the targeted Statement) as a Statement Reference as the object of the Statement. 

For filter parameters which are not time or sequence based (that is, other than "since", "until", or "limit"), 
Statements which target another Statement (by using a StatementRef
as the Object of the Statement) will meet the filter condition if the targeted Statement meets 
the filter condition.

The time and sequence based parameters MUST still be applied to the Statement 
making the StatementRef in this manner. This rule applies recursively, so that "Statement a" is a 
match when a targets b which targets c and the filter conditions described above match for 
"Statement c".

For example, consider the Statement "Ben passed explosives training", and a follow up
Statement: "Andrew confirmed <StatementRef to original Statement\>". The follow up
Statement will not mention "Ben" or "explosives training", but when fetching Statements
with an Actor filter of "Ben" or an Activity filter of "explosives training", both
Statements match and will be returned so long as they fall into the time or sequence
being fetched.

__Note:__ StatementRefs used as a value of the Statement property within Context do not affect how
Statements are filtered.

<a name="queryLangFiltering" />

###### Language filtering requirements for canonical format statements

* Activity Objects contain Language Map Objects for name, description and interaction components. 
The LRS MUST return only one language in each of these maps. 

* The LRS MAY maintain canonical versions of language maps against any IRI identifying an object containing
language maps. This includes the language map stored in the Verb Display property and potentially some 
language maps used within extensions. 

* If the LRS maintains a canonical version of a language map, it SHOULD* return this canonical language map
 when canonical format is used to retrieve Statements. 

* The LRS SHOULD* return only one language within each language map for which it returns a canonical map. 

* In order to choose the most relevant language, the LRS MUST apply the Accept-Language header as 
described in <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html"> RFC 2616</a> 
(HTTP 1.1), except that this logic MUST be applied to each language map individually to select 
which language entry to include, rather than to the resource (list of Statements) as a whole.

<a name="voidedStatements" />

##### 2.1.4 Voided Statements
[Section 4.3 Voided](#voided) describes the process by which statements can be voided. This section
describes how voided statements are handled by the LRS when queried. 

Clients can identify the presence and statementId of any voided Statements by the target of the voiding Statement. 
Aside from debugging tools, many Clients will not want to display voiding statements to their
users and will not display these as part of activity streams and other reports. 

###### Requirements

* The LRS MUST not return any Statement which has been voided, unless that Statement has been
requested by voidedStatementId. The process described in
[the section on filter conditions for StatementRefs](#queryStatementRef) is no exception to this
requirement. Clients wishing to retrieve voided Statements request these individually by voidedStatementId.

* The LRS MUST still return any Statements targeting the voided 
Statement, following the process and conditions described in
[the section on filter conditions for StatementRefs](#queryStatementRef). This includes the
voiding Statement, which cannot be voided. 

<a name="doctransfer"/>

### 2.2 Document Resources 

##### Description
The Experience API provides a facility for Activity Providers to save arbitrary data in 
the form of documents, perhaps related to an Activity, Agent, or combination of both.

##### Details
Note that the following table shows generic properties, not a JSON Object as many other tables 
in this specification do. The id is stored in the IRL, "updated" is HTTP header information, and 
"contents" is the HTTP document itself (as opposed to an Object).
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>id</td><td>String</td><td>Set by AP, unique within the scope of the agent or activity.</td></tr>
	<tr><td>updated</td><td>Timestamp</td><td>When the document was most recently modified.</td></tr>
	<tr><td>contents</td><td>Arbitrary binary data</td><td>The contents of the document</td></tr>
</table>

The three Document Resources provide [document](#miscdocument) storage for learning activity 
providers and Agents. The details of each Resource are found in the following sections, and the 
information in this section applies to all three Resources.

###### Details

<table>
	<tr>
		<th>Resource</th>
		<th>Method</th>
		<th>Endpoint</th>
		<th>Example</th>
	</tr>
	<tr>
		<td>State Resource</td>
		<td>POST</td>
		<td>activities/state</td>
		<td>http://example.com/xAPI/activities/state</td>
	</tr>
	<tr>
		<td>Activity Profile Resource</td>
		<td>POST</td>
		<td>activities/profile</td>
		<td>http://example.com/xAPI/activities/profile</td>
	</tr>
	<tr>
		<td>Agent Profile Resource</td>
		<td>POST</td>
		<td>agents/profile</td>
		<td>http://example.com/xAPI/agents/profile</td>
	</tr>
</table>

###### Requirements

* An Activity Provider MAY send documents to any of the Document Resources for Activities and 
Agents that the LRS does not have prior knowledge of. 

* The LRS MUST NOT reject documents on the basis of not having prior knowledge of the 
Activity and/or Agent.

##### Last Modified
The "Last Modified" header is set by the LRS when returning single or multiple documents in response
to a GET request. 

###### Requirements
* When returning a single document, the LRS SHOULD* include a "Last-Modified" header indicating when
the document was last modified. 
* When returning multiple documents, the LRS SHOULD* include a "Last-Modified" header indicating when
the most recently modified document was last modified. 

###### JSON Procedure with Requirements

If an Activity Provider stores variables as JSON Objects in a document with 
content type application/json, they can manipulate them as sets of variables using POST.

The following process walks through that process and the process requirements.  
For example, a document contains: 

```
{
	"x" : "foo",
	"y" : "bar"
}
```  
When an LRS receives a POST request with content type application/json for an existing document also of
content type application/json, it MUST merge the posted document with the existing document. 
In this context merge is defined as:
* de-serialize the Objects represented by each document.
* for each property directly defined on the Object being posted, set the corresponding
property on the existing Object equal to the value from the posted Object.    
* store any valid json serialization of the existing Object as the document referenced in the request.

Note that only top-level properties are merged, even if a top-level property is an Object.
The entire contents of each original property are replaced with the entire contents of
each new property.

For example, this document is POSTed with the same id as the existing 
document above:

```
{
	"x" : "bash",
	"z" : "faz"
}
```  
the resulting document stored in the LRS is:
```
{
	"x" : "bash",
	"y" : "bar",
	"z" : "faz"
}
```

###### Requirements

* If the document being posted or any existing document does not have a Content-Type
of "application/json", or if either document cannot be parsed as a JSON Object, the LRS MUST
respond with HTTP status code `400 Bad Request`, and MUST NOT update the target document
as a result of the request.

* If the merge is successful, the LRS MUST respond with HTTP 
status code `204 No Content`.

* If an AP needs to delete
a property, it SHOULD use a PUT request to replace the whole document as described below. 

<a name="stateres"/> 

### 2.3 State Resource

##### Description

Generally, this is a scratch area for Activity Providers that do not have their 
own internal storage, or need to persist state across devices. 

##### Details

The semantics of the call are driven by the stateId parameter. If it is included, 
the GET and DELETE methods will act upon a single defined state document 
identified by "stateId". Otherwise, GET will return the available ids, and DELETE 
will delete all state in the context given through the other parameters. This Resource has
[Concurrency](#concurrency) controls associated with it.

###### Single Document (PUT | POST | GET | DELETE)
Example endpoint: http://example.com/xAPI/activities/state

Stores, changes, fetches, or deletes the document specified by the given stateId that 
exists in the context of the specified Activity, Agent, and registration (if specified).  

**Content (PUT | POST):** The document to be stored or updated.  
**Content (GET | DELETE):** None.  

**Returns (PUT | POST | DELETE):** `204 No Content`  
**Returns (GET):** `200 OK`, the State document 
<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>activityId</td>
		<td>Activity id (IRI)</td>
		<td>The Activity id associated with this state.</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>agent</td>
		<td>Agent object (JSON)</td>
		<td>The Agent associated with this state.</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>registration</td>
		<td>UUID</td>
		<td>The Registration associated with this state.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>stateId</td>
		<td>String</td>
		<td>The id for this state, within the given context.</td>
		<td>Required</td>
	</tr>
</table>

###### Multiple Document GET
Example endpoint: http://example.com/xAPI/activities/state

Fetches State Ids of all state data for this context (Activity + Agent \[ + 
registration if specified\]). If "since" parameter is specified, this 
is limited to entries that have been stored or updated since the specified 
Timestamp (exclusive). 

**Content:** None.

**Returns:** `200 OK`, Array of State Ids  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>activityId</td>
		<td>Activity id (IRI)</td>
		<td>The Activity id associated with these states.</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>agent</td>
		<td>Agent object (JSON)</td>
		<td>The Agent associated with these states.</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>registration</td>
		<td>UUID</td>
		<td>The Registration associated with these states.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>since</td>
		<td>Timestamp</td>
		<td>Only ids of states stored since the specified Timestamp (exclusive) are returned.</td>
		<td>Optional</td>
	</tr>
</table>

###### Multiple Document DELETE
Example endpoint: http://example.com/xAPI/activities/state

Deletes all state data for this context (Activity + Agent \[+ registration if 
specified\]).  

**Content:** None.

**Returns**: `204 No Content`  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>activityId</td>
		<td>Activity id (IRI)</td>
		<td>The Activity id associated with this state.</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>agent</td>
		<td>Agent object (JSON)</td>
		<td>The Agent associated with this state.</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>registration</td>
		<td>UUID</td>
		<td>The Registration associated with this state.</td>
		<td>Optional</td>
	</tr>
</table>

<a name="agentsres"/>

### 2.4 Agents Resource

The Agents Resource provides a method to retrieve a special Object with 
combined information about an Agent derived from an outside service, such as a 
directory service. This Resource has [Concurrency](#concurrency) controls associated 
with it.

###### Combined Information GET 

###### Details
Example endpoint: http://example.com/xAPI/agents

Return a special, Person Object for a specified Agent. The Person Object is 
very similar to an Agent Object, but instead of each attribute having a single 
value, each attribute has an array value, and it is legal to include multiple 
identifying properties. This is different from the 
FOAF concept of person, person is being used here to indicate a person-centric 
view of the LRS Agent data, but Agents just refer to one persona (a person in 
one context).  

The 'agent' parameter is a normal Agent Object with a single identifier and no arrays. 
It is not a Person Object, nor is it a Group. 

**Content:** None.

**Returns:** `200 OK`, Person Object

<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>agent</td>
		<td>Agent object (JSON)</td>
		<td>The Agent representation to use in fetching expanded Agent information.</td>
		<td>Required</td>
	</tr>
</table>  

###### Requirements
* An LRS capable of returning multiple identifying properties for a Person 
Object SHOULD require the connecting credentials have increased, explicitly 
given permissions. 
* An LRS SHOULD reject insufficiently privileged requests with 403 "Forbidden".
* If an LRS does not have any additional information about an Agent to return, 
the LRS MUST still return a Person when queried, but that Person Object will only 
include the information associated with the requested Agent. 

__Note:__ This means that if a request is made for an Agent which the LRS has no 
prior knowledge of, it will still return a Person object containing the information 
about the Agent it received in the request. 

###### Person Properties

###### Details

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>objectType</td>
		<td>String</td>
		<td>"Person"</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>name</td>
		<td>Array of strings.</td>
		<td>List of names of Agents retrieved.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td><a href="http://xmlns.com/foaf/spec/#term_mbox">mbox</a></td>
		<td>Array of IRIs in the form "mailto:email address".</td>
		<td>List of e-mail addresses of Agents retrieved.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td><a href="http://xmlns.com/foaf/spec/#term_mbox_sha1sum">mbox_sha1sum</a></td>
		<td>Array of strings.</td>
		<td>List of the SHA1 hashes of mailto IRIs (such as go in an mbox property).</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>openid*</td>
		<td>Array of strings.</td>
		<td>List of openids that uniquely identify the Agents retrieved.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>account*</td>
		<td>Array of account objects.</td>
		<td>List of accounts to match. Complete account Objects (homePage and name) 
		MUST be provided.</td>
		<td>Optional</td>
	</tr>
</table> 

See also: [Agent](#agent).

###### Requirements

* All array properties MUST be populated with members with the 
same definition as the similarly named property from Agent Objects.  

* Additional properties not listed here SHOULD* NOT be added to this object and each 
property MUST occur only once. 

<a name="activitiesres"/> 

### 2.5 Activities Resource

The Activities Resource provides a method to retrieve a full description 
of an Activity from the LRS. This Resource has [Concurrency](#concurrency) controls 
associated with it.

###### Full Activity Object GET
Example endpoint: http://example.com/xAPI/activities

Loads the complete Activity Object specified.  

**Content:** None.

**Returns:** `200 OK`, Content 
<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>activityId</td>
		<td>Activity id (IRI)</td>
		<td>The id associated with the Activities to load.</td>
		<td>Required</td>
	</td>
</table>

###### Requirements

* If an LRS does not have a canonical definition of the Activity to return, the LRS SHOULD* still return an Activity Object when queried.

<a name="agentprofres"/>

### 2.6 Agent Profile Resource

###### Description

The Agent Profile Resource is much like the State Resource, allowing for arbitrary key / 
document pairs to be saved which are related to an Agent. 

###### Details

The semantics of the call are driven by the profileId parameter. If it is included, 
the GET method will act upon a single defined document identified by "profileId". 
Otherwise, GET will return the available ids.  

###### Single Agent or Profile (PUT | POST | GET | DELETE) 

Example endpoint: http://example.com/xAPI/agents/profile

Stores, changes, fetches, or deletes the specified profile document in the context of the 
specified Agent.  

**Content (PUT | POST):** The document to be stored or updated.  
**Content (GET | DELETE):** None.  

**Returns (PUT | POST | DELETE):** `204 No Content`  
**Returns (GET):** `200 OK`, the Profile document  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>agent</td>
		<td>Agent object (JSON)</td>
		<td>The Agent associated with this profile.</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>profileId</td>
		<td>String</td>
		<td>The profile id associated with this profile.</td>
		<td>Required</td>
	</tr>
</table>  

__Note:__ The agent parameter is an Agent Object and not a Group. Activity Providers wishing to store data
against an Identified Group can use the Identified Group's identifier within an Agent Object. 

###### Multiple Document GET 
Example endpoint: http://example.com/xAPI/agents/profile

Fetches Profile Ids of all profile entries for an Agent. If "since" parameter is specified, 
this is limited to entries that have been stored or updated since the specified 
Timestamp (exclusive).  

**Content:** None.

**Returns:** `200 OK`, Array of Profile Ids  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>agent</td>
		<td>Agent object (JSON)</td>
		<td>The Agent associated with this profile.</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>since</td>
		<td>Timestamp</td>
		<td>Only ids of profiles stored since the specified Timestamp 
			(exclusive) are returned.</td>
		<td>Optional</td>
	</tr>
</table>  

<a name="actprofres"/> 

### 2.7 Activity Profile Resource

###### Description

The Activity Profile Resource is much like the State Resource, allowing for arbitrary key 
/ document pairs to be saved which are related to an Activity. 

###### Details

The semantics of the call are driven by the profileId parameter. If it is included, 
the GET method will act upon a single defined document identified by "profileId". 
Otherwise, GET will return the available ids.

###### Single Document (PUT | POST | GET | DELETE)
Example endpoint: http://example.com/xAPI/activities/profile

Stores, changes, fetches, or deletes the specified profile document in the context of the 
specified Activity.  

**Content (PUT | POST):** The document to be stored or updated.  
**Content (GET | DELETE):** None.  

**Returns (PUT | POST | DELETE)** `204 No Content`  
**Returns (GET):** `200 OK`, the Profile document  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>activityId</td>
		<td>Activity id (IRI)</td>
		<td>The Activity id associated with this profile.</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>profileId</td>
		<td>String</td>
		<td>The profile id associated with this profile.</td>
		<td>Required</td>
	</tr>
</table>

###### Multiple Document GET
Example endpoint: http://example.com/xAPI/activities/profile

Fetches Profile Ids of all profile entries for an Activity. If "since" parameter is 
specified, this is limited to entries that have been stored or updated since 
the specified Timestamp (exclusive).  

**Content:** None.

**Returns:** `200 OK`, Array of Profile Ids  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th><tr>
	<tr>
		<td>activityId</td>
		<td>Activity id (IRI)</td>
		<td>The Activity id associated with these profiles.</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>since</td>
		<td>Timestamp</td>
		<td>Only ids of profiles stored since the specified Timestamp (exclusive) 
		are returned.</td>
		<td>Optional</td>
	</tr>
</table>


<a name="aboutresource"/> 

### 2.8 About Resource

###### Description

Returns JSON Object containing information about this LRS, including the xAPI version
supported.

###### Rationale

Primarily this resource exists to allow Clients that support multiple xAPI versions to
decide which version to use when communicating with the LRS. Extensions are included to
allow other uses to emerge.

###### Details

###### Information GET

Example endpoint: http://example.com/xAPI/about

**Content:** None.

**Returns:** `200 OK`, JSON object containing basic metadata about this LRS
<table border="1">
	<tr><th>property</th><th>type</th><th>description</th><th>Required</th></tr>
	<tr>
		<td>version</td>
		<td>array of version strings</td>
		<td>xAPI versions this LRS supports</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>extensions</td>
		<td><a href="#miscext">Object</a></td>
		<td>A map of other properties as needed.</td>
		<td>Optional</td>
	</tr>

</table>

###### Requirements

* An LRS MUST return the JSON document described above, with a version property that includes
the latest minor and patch version the LRS conforms to, for each major version.
    * For version 1.0.0 of this specification, this means that "1.0.0" MUST be included;
    "0.9" and "0.95" MAY be included. (For the purposes of this requirement, "0.9" and "0.95"
    are considered major versions.)
* Additional properties MUST NOT be added to this object outside of extensions and each 
property MUST occur only once.  
* An LRS SHOULD allow unauthenticated access to this resource
* An LRS MUST NOT reject requests based on their version header as would otherwise be 
required by <a href="#versioning"/>Versioning</a>.

<a name="validation"/> 

## 3.0 Data Validation

###### Description

The function of the LRS within the xAPI is to store and retrieve Statements. 
As long as it has sufficient information to perform these tasks, it is 
expected that it does them. Validation of Statements in the Experience API is 
focused solely on syntax, not semantics. Enforcing the rules that ensure 
valid meaning among Verb definitions, Activity types, and extensions is the 
responsibility of the Activity Provider sending the Statement. 

###### Requirements

* The LRS SHOULD enforce rules regarding structure. 
* The LRS SHOULD NOT enforce rules regarding meaning.  

<a name="concurrency"/>

### 3.1 Concurrency

##### Description
Concurrency control makes certain that a client does not PUT, POST or DELETE documents based on old
data into an LRS.

##### Details
xAPI will use HTTP 1.1 entity tags ([ETags](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19))
to implement optimistic concurrency control in the portions of the API where PUT, POST or DELETE might
overwrite or remove existing data, being:

* State Resource
* Agent Profile Resource 
* Activity Profile Resource

##### Client Requirements
The State Resource will permit PUT, POST and DELETE requests without concurrency headers, since state conflicts
are unlikely. The requirements below only apply to Agent Profile Resource and Activity Profile Resource.

* A Client making a PUT request to either the Agent Profile Resource or Activity Profile Resource MUST include the 
[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24) header or the 
[If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) header.

* A Client making a POST request to either the Agent Profile Resource or Activity Profile Resource SHOULD* include the 
[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24) header or the 
[If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) header.

* A Client making a DELETE request to either the Agent Profile Resource or Activity Profile Resource SHOULD* include the 
[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24) header.

* Clients SHOULD* use the ETag value provided by the LRS rather than calculating it themselves. 

##### LRS Requirements

* An LRS responding to a GET request MUST add an ETag HTTP header to the response.
* An LRS responding to a GET request without using a transfer encoding or using the identity transfer encoding MUST calculate the value of the ETag header to be a hexadecimal string
of the SHA-1 digest of the contents. This hexidecimal string SHOULD be rendered using numbers and lowercase 
characters only; uppercase characters SHOULD NOT be used. The requirement to calculate the ETag this way will be removed in a future version of the specification.
* An LRS responding to a GET request using any non-identity transfer encoding MUST NOT calculate the included ETag as above, due to the interpretation of ETags by existing web infrastructure.
* As defined in [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19), an LRS responding to a GET request MUST enclose the header in quotes.  
* An LRS responding to a PUT request MUST handle the [If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24) header as described in RFC2616, HTTP 1.1 if it contains an ETag, in order to detect
modifications made after the consumer last fetched the document.
* An LRS responding to a PUT request MUST handle the [If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) header as described in RFC2616, HTTP 1.1 if it contains "*", in order to to detect 
when there is a resource present that the consumer is not aware of.
* An LRS responding to a POST or DELETE request SHOULD* handle the [If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24) header as described in RFC2616, HTTP 1.1 if it contains an ETag, in order to detect
modifications made after the consumer last fetched the document.
* An LRS responding to a POST request SHOULD* handle the [If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) header as described in RFC2616, HTTP 1.1 if it contains "*", in order to to detect 
when there is a resource present that the consumer is not aware of.

If the header precondition in either of the PUT request cases above fails, the LRS:

* MUST return HTTP status 412 "Precondition Failed".
* MUST NOT make a modification to the resource. 

If the header precondition in any of the POST or DELETE request cases above fails, the LRS:

* SHOULD* return HTTP status 412 "Precondition Failed".
* SHOULD* NOT make a modification to the resource. 

If a PUT request is received without either header for a resource that already exists, the LRS:

* MUST return HTTP status 409 "Conflict".
* MUST return a response explaining that the consumer SHOULD
	- check the current state of the resource.
	- set the "If-Match" header with the current ETag to resolve the conflict.
* MUST NOT make a modification to the resource.

<a name="errorcodes" /> 

### 3.2 Error Codes

##### Description

This specification defines requirements, some of which are imposed on the LRS to accept or reject requests,
return responses and perform other behaviours in certain conditions. In cases where an LRS is required 
to reject a request, the appropriate error code is listed as part of the requirement. 

None of these requirements contradict the idea that the LRS is also allowed to 
be configurable to reject requests and respond or behave differently on the basis of conditions 
that are out of scope this specification. 

One of these conditions is permission. For example, the LRS might assign permissions
to a particular set of credentials such that those credentials can only issue statements
relating to a particular agent. It could then reject any statements using those credentials
not relating to that agent. The permissions that can be assigned by an LRS are out of scope of
this specification, aside from the list of recommended OAuth Authorization scope values in
section [6.4.2](#oauthscope). 

Permissions can also affect the response returned by an LRS to GET requests. For example, 
a set of credentials might have permission only to view statements about a particular actor, in which case
the LRS will filter any returned statements to exclude any statements not relating to that actor. See 
[GET Statements](#stmtapiget) for details. 

In cases explicitly allowed by this specification, the credentials used can also affect the LRS behaviour in 
handling a request, for example the LRS will normally overwrite the Authority property of a Statement, but can 
sometimes accept a submitted authority if it has a strong trust relationship associated with the credentials 
used to submit the statement. See [Authority](#authority) for details. 

Permissions set by an LRS could cause a technically conformant LRS to fail conformance testing. 
This could occur where requests made by the test suite are rejected on the basis of permissions. For this reason
the LRS needs to be configurable, or credentials used for testing need to have sufficient permissions granted,
such that permission restrictions do not affect the result of conformance testing. 

Another condition is where the request sent is beyond the size limits set by the LRS. It would be unreasonable
to expect the LRS to always accept requests of any size. The LRS can choose any size limit it sees fit, but
needs to be configurable so as not to apply size limits during conformance testing. Of course, some size limits
will still exist during conformance testing due to limitations of hardware etc. but it is expected that these limits
are sufficiently high so as not to affect the running of tests. 

The LRS can also reject requests or revoke credentials in case of suspected malicious intend, for example
an unexpected large number of requests made in a short period of time. It is expected that that limits 
will be sufficiently high such that the rate of requests made during conformance testing will not trigger any rate limits.

##### Details 
The list below offers some general guidance on HTTP error codes that could
be returned from various methods in the API. 

* `400 Bad Request` - Indicates
an error condition caused by an invalid or missing argument. The term 
"invalid arguments" includes malformed JSON or invalid Object structures.

* `401 Unauthorized` - Indicates that authentication is required, or in the 
case authentication has been posted in the request, that the given credentials 
have been refused.

* `403 Forbidden` - Indicates that the request is unauthorized for the given 
credentials. Note this is different than refusing the credentials given. In 
this case, the credentials have been validated, but the authenticated Client 
is not allowed to perform the given action.

* `404 Not Found` - Indicates the requested resource was not found. May be 
returned by any method that returns a uniquely identified resource, for 
instance, any State or Agent Profile or Activity Profile Resource call targeting a specific document, 
or the method to retrieve a single Statement.

* `409 Conflict` - Indicates an error condition due to a conflict with the 
current state of a resource, in the case of State Resource, Agent Profile or Activity Profile Resource
calls, or in the Statement PUT or POST calls. See Section [6.3 Concurrency](#concurrency) for more details.

* `412 Precondition Failed` - Indicates an error condition due to a failure of 
a precondition posted with the request, in the case of State or Agent Profile or Activity Profile 
API calls. See Section [6.3 Concurrency](#concurrency) for more details.

* `413 Request Entity Too Large` - Indicates that the LRS has rejected the Statement or 
document because its size (or the size of an Attachment included in the request) is larger than 
the maximum allowed by the LRS. 

* `429 Too Many Requests` - Indicates that the LRS has rejected the request because it has received 
too many requests from the client or set of credentials in a given amount of time. 

* `500 Internal Server Error` - Indicates a general error condition, typically an 
unexpected exception in processing on the server.

##### Requirements

* An LRS MUST return the error code most appropriate to the error condition from the list above.

* An LRS SHOULD return a message in the response explaining the cause of the error.

* An LRS SHOULD use content negotiation as described in [RFC 7231](http://tools.ietf.org/html/rfc7231#section-5.3) to decide the format of the error.

* An LRS SHOULD allow for plain text, HTML, and JSON responses for errors (using content negotiation).

* An AP SHOULD send an Accept header with requests to enable content negotiation.

* The LRS MUST reject with `HTTP 400 Bad Request` status any requests 
that use any parameters which the LRS does not recognize in their 
intended context in this specification ( __Note:__ LRSs MAY recognize and act on 
parameters not in this specification).

* The LRS MUST reject with `HTTP 400 Bad Request` status any requests 
that use any parameters matching parameters described in this 
specification in all but case.

* The LRS MUST reject a batch of statements if any statement within that 
batch is rejected.

* The LRS MUST reject with `HTTP 403 Forbidden` status any request rejected by the
LRS where the credentials associated with the request do not have permission to make that request. 

* The LRS MUST reject with `HTTP 413 Request Entity Too Large` status any request rejected by the
LRS where the size of the Attachment, Statement or document is larger than the maximum allowed by the LRS.

* The LRS MAY choose any Attachment, Statement and document size limits and MAY vary this limit on any basis, e.g., per authority.

* The LRS MUST reject with `429 Too Many Requests` status any request rejected by the
LRS where the request is rejected due to too many requests being received by a particular client 
or set of credentials in a given amount of time. 

* The LRS MAY choose any rate limit and MAY vary this limit on any basis, e.g., per authority.

The following requirements exist for the purposes of conformance testing, to ensure that any limitations or permissions implemented 
by the LRS do not affect the running of a conformance test suite. 

* The LRS SHOULD* be configurable not to reject any requests from a particular set of credentials on the basis of permissions. 
This set of credentials SHOULD* be used for conformance testing but MAY be deleted/deactivated on live systems. 

* The LRS MUST be configurable to accept Attachments, Statements or documents of any reasonable size (see above).

* The LRS MUST be configurable to accept requests at any reasonable rate. 

<a name="versioning"/> 

### 3.3 Versioning

###### Rationale

Future revisions of the specification might introduce changes such as properties added to 
Statements.

Systems retrieving Statements might then receive responses that include Statements of different
versions. The version header allows for these version differences to be handled correctly, and 
to ascertain that no partial or mixed LRS version implementations exist.

Using Semantic Versioning will allow Clients and LRSs to reliably know compatibility as the specification changes.

###### Details

Starting with 1.0.0, xAPI will be versioned according to [Semantic Versioning 1.0.0](http://semver.org/spec/v1.0.0.html).  Every request from a Client and every response from the LRS includes an HTTP header with the name 
“X-Experience-API-Version" and the version as the value. For example, ``X-Experience-API-Version : 1.0.3`` for version 1.0.3; 
see the [Revision History](#Appendix1A) for the current version of this specification. 

###### LRS Requirements

* The LRS MUST include the "X-Experience-API-Version" header in every response.
* The LRS MUST set this header to the latest patch version.
* The LRS MUST accept requests with a version header of "1.0" as if the version header was "1.0.0".
* The LRS MUST reject requests with version header prior to "1.0.0" unless such requests are routed to a 
fully conformant implementation of the prior version specified in the header.
* The LRS MUST accept requests with a version header starting with "1.0." if the request is otherwise valid. 
* The LRS MUST reject requests with a version header of "1.1.0" or greater.
* The LRS MUST make these rejects by responding with an HTTP 400 error including a short description 
of the problem.

###### Client Requirements

* The Client MUST include the "X-Experience-API-Version" header in every request.
* The Client MUST set this header to the latest patch version.
* The Client SHOULD tolerate receiving responses with a version of "1.0.0" or later.
* The Client SHOULD tolerate receiving data structures with additional properties.
* The Client SHOULD ignore any properties not defined in version 1.0.0 of the spec.

###### Conversion Requirements

* Systems MUST NOT convert Statements of newer versions into a prior version format, e.g., in order to handle version differences.
* Systems MAY convert Statements of older versions into a newer version only by following the methods described in
<a href="#Appendix3A">Appendix A: Converting Statements to 1.0.0</a>.


<a name="authentication"/>

## 4.0 Authentication

###### Rationale

In order to balance interoperability and the varying security requirements of different
environments, several authentication options are defined.

###### Details
The following authentication methods are defined within the specification. Any given LRS will 
implement at least one of these methods and might implement additional methods not defined within
this specification. 

- [OAuth 1.0 (RFC 5849)](http://tools.ietf.org/html/rfc5849), with signature methods of "HMAC-SHA1", "RSA-SHA1", and "PLAINTEXT"
- [HTTP Basic Authentication](http://tools.ietf.org/html/rfc7235)
- Common Access Cards

While Common Access Cards are defined as an authentication option within this specification,
the implementation details of this authentication method are not defined. The xAPI Working Group
encourages LRS developers implementing Common Access Cards as an authentication method to collaborate
in defining the details of this authentication method in a future version of this specification. 

No further details are provided to describe HTTP Basic Authentication as this authentication method
is clearly and completely defined in [RFC 7235](http://tools.ietf.org/html/rfc7235). 

###### Requirements

- The LRS MUST support authentication using at least one of the authentication methods defined in this 
specification.

- The LRS MUST handle making, or delegating, decisions on the validity of Statements,
 and determining what operations might be performed based on the credentials used.

<a name="authdefs"/>

### 4.1 OAuth 1.0 Authentication Scenarios and Methods

The matrix and requirements below describe the possible authentication 
scenarios used within OAuth and recommends the authentication workflow to be 
used in these scenarios. The process described for each scenario is not intended 
to be comprehensive, but rather outline variations to the standard OAuth workflow. 

The requirements in this section only apply if the LRS supports OAuth 1.0.

A **registered application** is an application that will authenticate to the LRS as an OAuth 
consumer that has been registered with the LRS.

A **known user** is a user account on the LRS, or on a system which the LRS trusts to define users.


<table border="1">
<tr><th></th><th>Known user</th><th>User unknown</th></tr>
<tr>
<td>Application is registered</td>
<td>Standard workflow for OAuth.</td>
<td>LRS trusts application to access xAPI without additional user credentials. OAuth token steps are not invoked</td>
</tr>
<tr>
<td>Application is not registered</td>
<td>The application Agent is not identified as a registered Agent and the LRS cannot make assumptions on its identity.</td>
<td></br></td>
</tr>
<tr>
<td>No application</td>
<td>HTTP Basic Authentication is used instead of OAuth, since no application is involved.</td>
<td></br></td>
</tr>
<tr>
<td>No authentication</td>
<td align="center"colspan="2">MAY be supported by the LRS, possibly for testing purposes.</td>

</tr>

</table> 

##### Requirements

* The LRS MUST record the application's name and a unique consumer key (identifier).
* The LRS MUST provide a mechanism to complete this registration, or delegate to another system that provides 
such a mechanism.
* The LRS MUST be able to be configured for complete support of the xAPI:
	* With any of the methods below.
	* In any of the workflow scenarios below.
* The LRS MAY (for security reasons): 
	* Support a subset of the methods below.
	* Limit the known users or registered applications.
* The LRS SHOULD at a minimum supply OAuth with "HMAC-SHA1" and "RSA-SHA1" signatures.

###### Application registered + known user Process and Requirements
**Process:** The standard workflow for OAUth 1.0 is used. 

**Requirements:**
* The LRS MUST support the endpoints in section [6.4.2 OAuth Authorization Scope](#oauthscope) to complete the standard OAuth workflow 
(details not in this specification).
* If this form of authentication is used to record Statements and no authority is specified, the LRS SHOULD 
record the authority as a group consisting of an Agent representing the registered application, and an Agent 
representing the known user.

###### Application registered + user unknown Process and Requirements
**Process:** 
The LRS honors requests that are signed using OAuth with the registered application's credentials and with an empty token and token secret.

**Requirements:**
* If this form of authentication is used to record Statements, the LRS SHOULD 
record the authority as the Agent representing the registered application.

###### Application not registered + known user Process and Requirements
**Process:**
The AP uses a consumer secret consisting of an empty string to call the 
Temporary Credential Request endpoint specifying the "consumer_name" and other usual parameters.
The "consumer_name" contains a string representing the application requesting access. 

The AP then sends the user's browser to the Resource Owner Authorization using the 
temporary credentials obtained from the LRS. The Resource Owner Authorization presents a 
page displaying the "consumer_name" plus a warning that the identity of the application requesting 
authorization cannot be verified.

Otherwise the process follows the standard OAuth workflow. 

**Requirements:**
* If this form of authentication is used to record Statements, the LRS MUST record an authority 
that includes both that application and the authenticating user, as a group, since OAuth specifies 
an application.

###### No application + known user Process and Requirements
**Process:**
Use a username/password combination provided by the LRS for use by the known user.

**Requirements:**
* If this form of authentication is used to record Statements, the LRS SHOULD 
record the authority as the Agent representing the known user.

###### No authorization Process and Requirements

* Requests MUST include headers for HTTP Basic Authentication based on a username and password containing zero or
more space characters. 
* Requests SHOULD* include headers for HTTP Basic Authentication based on a username and password each consisting of 
an empty string. In this case the HTTP Basic Authentication header will be `Basic ` followed by a base64 encoded version of the string `:`.
This results in the string `Basic Og==`.

This is in order to distinguish an explicitly unauthenticated request from a request that needs to be given a HTTP Basic Authentication 
challenge.

<a name="oauthscope"/> 

### 4.2 OAuth 1.0 Authorization Scope

##### Description
These are recommendations for scopes designed to enable an LRS and an application
communicating using the xAPI to negotiate a level of access which accomplishes what the
application needs while minimizing the potential for misuse. The limitations of each scope
are in addition to any security limitations placed on the user account associated with the
request.

Elements of this section draw on [OAuth 2.0](http://tools.ietf.org/html/rfc6749#section-3.3)
despite this section describing requirements for LRS supporting [OAuth 1.0](http://tools.ietf.org/html/rfc5849). 

The requirements in this section only apply if the LRS
supports OAuth 1.0.

##### Details

The following table lists xAPI scope values:  
<table>
	<tr><th>Scope</th><th>Permission</th></tr>
	<tr><td>statements/write</td><td>write any Statement</td></tr>
	<tr>
		<td>statements/read/mine</td>
		<td>read Statements written by "me", that is with an authority 
			matching what the LRS would assign if writing a Statement with 
			the current token.
		</td>
	</tr>
	<tr><td>statements/read</td><td>read any Statement</td>
	<tr>
		<td>state</td>
		<td>read/write state data, limited to Activities and Actors 
			associated with the current token to the extent it is 
			possible to determine this relationship.
		</td>
	</tr>
	<tr>
		<td>define</td>
		<td>(re)Define Activities and Actors. If storing a Statement 
			when this is not granted, ids will be saved and the LRS 
			MAY save the original Statement for audit purposes, but 
			SHOULD NOT update its canonical representation of any 
			Actors or Activities.
		</td>
	</tr>
	<tr>
		<td>profile</td>
		<td>read/write profile data, limited to Activities and Actors 
			associated with the current token to the extent it is 
			possible to determine this relationship.
		</td>
	</tr>
	<tr><td>all/read</td><td>unrestricted read access</td></tr>
	<tr><td>all</td><td>unrestricted access</td></tr>
</table>

###### OAuth Extended Parameters  
Note that the parameters "consumer_name" and "scope" are not part of 
OAuth 1.0, and therefore if used MUST be passed as query string or form 
parameters, not in the OAuth header.  

###### OAuth Endpoints  
<table>
	<tr>
		<th>Name</th>
		<th>Endpoint</th>
		<th>Example</th>
	</tr>
	<tr>
		<td>Temporary Credential Request</td>
		<td>OAuth/initiate</td>
		<td>http://example.com/xAPI/OAuth/initiate</td>
	</tr>
	<tr>
		<td>Resource Owner Authorization</td>
		<td>OAuth/authorize</td>
		<td>http://example.com/xAPI/OAuth/authorize</td>
	</tr>
	<tr>
		<td>Token Request</td>
		<td>OAuth/token</td>
		<td>http://example.com/xAPI/OAuth/token </td>
	</tr>
</table>

##### Example
The list of scopes determines the set of permissions that is being requested. 
For example,an instructor might grant "statements/read" to a Client, 
but the LRS would still limit that tool to Statements that the instructor could 
read if querying the LRS with their credentials directly (such as Statements 
relating to their students).

##### Requirements

* The LRS MUST accept a scope parameter as defined in [OAuth 2.0](http://tools.ietf.org/html/rfc6749#section-3.3).
* The LRS MUST assume a requested scope of "statements/write" and "statements/read/mine" if no 
scope is specified.
* The LRS MUST support the scope of "all" as a minimum.
* The LRS MAY support other scopes.
* The Client SHOULD request only the minimal needed scopes, to increase the chances that the request
will be granted.

<a name="security"/>

## 5.0 Security 

Security beyond authentication (including the interpretation of OAuth
authorization scopes) is beyond the current scope of this document and left to
the individual LRS provider as an implementation detail. Implementors are
encouraged to follow industry best practices, e.g., [The HTTPS-Only Standard](https://https.cio.gov) from the office of the White House CIO.

While other security concerns are beyond the scope of this specification, 
the xAPI Community remains dedicated to determining security best practices. 
This effort has begun at [xAPIsec](https://github.com/xapisec/xapisec). 
Participation is highly encouraged.

<a name="append3"/>
## Appendices

<a name="Appendix3A"/>

### Appendix A: Converting Statements to 1.0.0

######Rationale
This is a 1.0.0 specification, and as such implementers do not have to consider prior
versions of the specification. However, prior versions did see notable adoption. This data
conversion is specified in order
to preserve the data tracked using earlier versions, and make it available to new implementers
in a consistent manner.

######Details

######Conversion of Statements created based on version 0.9

A 1.0.0 system converting a Statement created in 0.9 MUST follow the steps below:

* If the Statement has been voided or uses Verbs, Activity types, or properties not included in the
 0.9 specification, do not convert it.
* Prefix "verb" with "http://adlnet.gov/expapi/verbs/".
* Prefix any Activity ids which are not full absolute IRIs with "tag:adlnet.gov,2013:expapi:0.9:activities:"
* Prefix any extension keys which are not full absolute IRIs with "tag:adlnet.gov,2013:expapi:0.9:extensions:"
* Prefix Activity types with "http://adlnet.gov/expapi/activities/"
* for each Agent (Actor):
    * Search for Inverse Functional Identifiers in this order: "mbox, mbox_sha1sum, openid,
    account". Keep the first populated Inverse Functional Identifier found and discard the rest.
    * For the above Inverse Functional Identifier, take the first element in the array and
    use that as the value of that Inverse Functional Identifier property, discarding any
    remaining elements.
    * If the "name" property is present, set it equal to the first element in the "name"
    array, discard the remaining elements.
    * Remove all remaining properties.
* Remove the "voided" property from the Statement, if present. Remember, if the value of the
  voided property is true, then the Statement MUST NOT be converted.
* Add "version": "1.0.0"
* If an authority was not previously set, set the authority to an Agent identified by
an account with a homePage set to the home page corresponding to the
system performing the conversion and an accountName of "unknown".
* if the Statement property in Context was set, remove it from the Statement.
* Preserve all other properties without modification, including "stored". Stored will still
be updated if the Statement is passed to another system.

######Conversion of Statements created based on version 0.95

A 1.0.0 system converting a Statement created in 0.95 MUST follow the steps below:

* If the Statement is voided, do not convert it.
* Remove the "voided" property from the Statement, if present. Remember, if the value
  of the voided property is true, then the Statement MUST NOT be converted.
* Add "version": "1.0.0"
* If an authority was not previously set, set the authority to an Agent identified by
an account with a homePage set to the home page corresponding to the
system performing the conversion and an accountName of "unknown".
* If the Statement property in Context was set to anything other than a
StatementRef, remove it from the Statement.
* Preserve all other properties without modification, including "stored". Stored will still
be updated if the Statement is passed to another system.


######Example


A 0.9 Statement:
```
{
    "id": "d1eec41f-1e93-4ed6-acbf-5c4bd0c24269",
    "actor": {
        "objectType": "Person",
        "name": [
            "Joe Schmoe",
            "Joseph Schmoseph"
        ],
        "mbox": [
            "mailto:joe@example.com"
        ],
        "openid": [
            "http://openid.com/joe-schmoe"
        ]
    },
    "verb": "completed",
    "inProgress": false,
    "object": {
        "objectType": "Activity",
        "id": "http://www.example.com/activities/001",
        "definition": {
            "name": {
                "en-US": "Example Activity"
            },
            "type": "course"
        }
    },
    "result": {
        "completion": true
    },
    "context": {
        "instructor": {
            "objectType": "Person",
            "lastName": [
                "Dad"
            ],
            "firstName": [
                "Joe's"
            ],
            "mbox": [
                "mailto:joesdad@example.com"
            ]
        },
        "contextActivities": {
            "parent": {
                "objectType": "Activity",
                "id": "non-absolute-activity-id",
                "definition": {
                    "name": {
                        "en-US": "Another Activity"
                    }
                }
            }
        }
    },
    "timestamp": "2012-06-01T19:09:13.245Z",
    "stored": "2012-06-29T15:41:39.165Z"
}
```

Converted to 1.0.0:
```
{
    "version": "1.0.0",
    "id": "d1eec41f-1e93-4ed6-acbf-5c4bd0c24269",
    "actor": {
        "objectType": "Agent",
        "name": "Joe Schmoe",
        "mbox": "mailto:joe@example.com"
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/completed",
        "display": {
            "en-US": "completed"
        }
    },
    "object": {
        "objectType": "Activity",
        "id": "http://www.example.com/activities/001",
        "definition": {
            "name": {
                "en-US": "Example Activity"
            },
            "type": "http://adlnet.gov/expapi/activities/course"
        }
    },
    "result": {
        "completion": true
    },
    "context": {
        "instructor": {
            "objectType": "Agent",
            "mbox": "mailto:joesdad@example.com"
        },
        "contextActivities": {
            "parent": [
                {
                    "objectType": "Activity",
                    "id": "tag:adlnet.gov,2013:expapi:0.9:activities:non-absolute-activity-id",
                    "definition": {
                        "name": {
                            "en-US": "Another Activity"
                        }
                    }
                }
            ]
        }
    },
    "timestamp": "2012-06-01T19:09:13.245Z",
    "stored": "2012-06-29T15:41:39.165Z",
    "authority": {
        "objectType": "Agent",
        "account": {
            "homePage": "http://www.example.com",
            "name": "unknown"
        }
    }
}
```


<a name="Appendix3B"/>

### Appendix B: Table of All Endpoints

### Required Endpoints
<table>
	<tr>
		<th>Endpoint (Base Endpoint of the LRS Precedes Each Endpoint)</th>
		<th>Function</th>
	</tr>
	<tr>
		<td>statements</td>
		<td>Statement Storage/Retrieval</td>
	</tr>
	<tr>
		<td>agents</td>
		<td>Agent Object Storage/Retrieval</td>
	</tr>
	<tr>
		<td>agents/profile</td>
		<td>Agent Profile Resource</td>
	</tr>
	<tr>
		<td>activities</td>
		<td>Activity Object Storage/Retrieval</td>
	</tr>
	<tr>
		<td>activities/profile</td>
		<td>Activity Profile Resource</td>
	</tr>
	<tr>
		<td>activities/state</td>
		<td>State Resource</td>
	</tr>
	<tr>
		<td>about</td>
		<td>LRS Information</td>
	</tr>
</table>

### OAuth Endpoints
<table>
	<tr>
		<th>Endpoint (Base Endpoint of the LRS Precedes Each Endpoint)</th>
		<th>Function</th>
	</tr>
	<tr>
		<td>OAuth/initiate</td>
		<td>Temporary Credential Request</td>
	</tr>
	<tr>
		<td>OAuth/authorize</td>
		<td>Resource Owner Authorization</td>
	</tr>
	<tr>
		<td>OAuth/token</td>
		<td>Token Request</td>
	</tr>
</table>

<a name="Appendix3C"/>

### Appendix C: Cross Domain Request example

[Alternate Request Syntax](#alt-request-syntax) outlines alternative syntax for use 
when the normal syntax cannot be used due to browser or querystring length restrictions. This appendix provides an example of a
PUT statements request following this format. 

Request using normal syntax:

```
URL: http://example.com/xAPI/statements
Method: PUT

Query String Parameters:
    statementId=c70c2b85-c294-464f-baca-cebd4fb9b348

Request Headers:
    Accept:*/*
    Accept-Encoding:gzip, deflate, sdch
    Accept-Language:en-US,en;q=0.8
    Authorization: Basic VGVzdFVzZXI6cGFzc3dvcmQ=
    Content-Type: application/json
    X-Experience-API-Version: 1.0.3
    Content-Length: 351

Content:
{"id":"c70c2b85-c294-464f-baca-cebd4fb9b348","timestamp":"2014-12-29T12:09:37.468Z","actor":{"objectType":"Agent","mbox":"mailto:example@example.com","name":"Test User"},"verb":{"id":"http://adlnet.gov/expapi/verbs/experienced","display":{"en-US":"experienced"}},"object":{"id":"http://example.com/xAPI/activities/myactivity","objectType":"Activity"}}

```

Request using using alternative syntax:

```
URL: http://example.com/xAPI/statements?method=PUT&statementId=c70c2b85-c294-464f-baca-cebd4fb9b348
Method: POST

Request Headers:
    Accept:*/*
    Accept-Encoding:gzip, deflate, sdch
    Accept-Language:en-US,en;q=0.8
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 745

Content (with added line breaks and not URL encoded for readability):
    statementId=c70c2b85-c294-464f-baca-cebd4fb9b348
    &Authorization=Basic VGVzdFVzZXI6cGFzc3dvcmQ=
    &X-Experience-API-Version=1.0.3
    &Content-Type=application/json
    &Content-Length=351
    &content={"id":"c70c2b85-c294-464f-baca-cebd4fb9b348","timestamp":"2014-12-29T12:09:37.468Z","actor":{"objectType":"Agent","mbox":"mailto:example@example.com","name":"Test User"},"verb":{"id":"http://adlnet.gov/expapi/verbs/experienced","display":{"en-US":"experienced"}},"object":{"id":"http://example.com/xAPI/activities/myactivity","objectType":"Activity"}}
```

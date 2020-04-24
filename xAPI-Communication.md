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
*	Part Two:	[Experience API Data](./xAPI-Data.md#parttwo)  
	*	1.0.	[Documents](./xAPI-Data.md#documents) 
	*	2.0.	[Statements](./xAPI-Data.md#statements)  
		*	2.1.	[Purpose](./xAPI-Data.md#statement-purpose)  
	 	*	2.2.	[Formatting Requirements](./xAPI-Data.md#dataconstraints) 
	 	*	2.3.	[Statement Lifecycle](./xAPI-Data.md#lifecycle) 
		 	*	2.3.1.	[Statement Immutability](./xAPI-Data.md#statement-immutability-and-exceptions) 
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
	 	*	1.2.	[Headers](./xAPI-Communication.md#headers) 
	 	*	1.3.	[Alternate Request Syntax](./xAPI-Communication.md#alt-request-syntax) 
	 	*	1.4.	[Encoding](./xAPI-Communication.md#encoding) 
	 	*	1.5.	[Content Types](./xAPI-Communication.md#content-types) 
	        *	1.5.1.	[Application/JSON](./xAPI-Communication.md#applicationjson) 
	        *	1.5.2.	[Multipart/Mixed](./xAPI-Communication.md#multipartmixed)
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
		*	[Appendix B: Table of All Resources](./xAPI-Communication.md#Appendix3B)  
		*	[Appendix C: Cross Domain Request Example](./xAPI-Communication.md#Appendix3C)  

<a name="partthree"></a>
# Part Three: Data Processing, Validation, and Security 

This third part details the more technical side of the Experience API, dealing with how Statements are transferred between 
Learning Record Provider and LRS. A number of libraries are available for a range of technologies (including JavaScript) 
which handle this part of the specification. It therefore might not be necessary for Learning Record Providers to fully 
understand every detail of this part of the specification.

<a name="requests"></a>

## <a name="1.0">1.0</a> Requests

xAPI tracking is done via HTTP Requests from the Learning Record Provider (client) to the LRS (server). This 
specification offers guidance in some aspects of this communication.  Where no guidance is offered, it is 
recommended that those implementing xAPI use current industry best practices.

<a name="httphead"></a>

### <a name="1.1">1.1</a> HEAD Request Implementation

###### <a name="1.1.s1"></a>Description
The behavior of the LRS in response to PUT, POST, GET and DELETE requests is outlined in [Resources](#resources) below. 
All resources that support GET requests also support HEAD.
The LRS will respond to HEAD requests by returning the meta information only, using the HTTP headers, and 
not the actual document.  

###### <a name="1.1.s2"></a>Rationale

Clients accessing the LRS might need to check if a particular Statement exists, or determine
the modification date of documents such as those in State, Activity Profile, or Agent Profile Resources. Particularly
for large documents, it is more efficient not to retrieve the entire document just to check its modification date.

###### <a name="1.1.s3"></a>LRS Requirements
* <a name="1.1.s3.b1"></a>The LRS MUST respond to any HTTP HEAD request as it would have responded to an otherwise
identical HTTP GET request except:
    * <a name="1.1.s3.b1.b1"></a>The message-body MUST be omitted.
    * <a name="1.1.s3.b1.b2"></a>The Content-Length header MAY be omitted, in order to avoid wasting LRS resources.

<a name="headers"></a> 

### <a name="1.2">1.2</a> Headers

##### <a name="1.2.s1"></a>Header Parameters
Some header parameters used within xAPI data transfer are 
[standard HTTP headers](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields). Others are specific to this
 specification. The following request headers are expected to be used by the Learning Record Providers in some or all 
 of the types of request and situations described in this specification:

* <a name="1.2.s1.b1"></a>Accept
* <a name="1.2.s1.b2"></a>Accept-Encoding
* <a name="1.2.s1.b3"></a>Accept-Language
* <a name="1.2.s1.b4"></a>Authorization
* <a name="1.2.s1.b5"></a>Content-Type
* <a name="1.2.s1.b6"></a>Content-Length
* <a name="1.2.s1.b7"></a>Content-Transfer-Encoding
* <a name="1.2.s1.b8"></a>If-Match
* <a name="1.2.s1.b9"></a>If-None-Match
* <a name="1.2.s1.b10"></a>X-Experience-API-Version 

The following response headers are expected to be used by the LRS. Again, not all of these apply
to every type of request and/or situations:

* <a name="1.2.s1.b11"></a>Content-Type
* <a name="1.2.s1.b12"></a>Content-Length
* <a name="1.2.s1.b13"></a>Last-Modified
* <a name="1.2.s1.b14"></a>ETag
* <a name="1.2.s1.b15"></a>Status
* <a name="1.2.s1.b16"></a>X-Experience-API-Version
* <a name="1.2.s1.b17"></a>X-Experience-API-Consistent-Through

The lists above are not intended to be exhaustive. See requirements throughout this document for more details.

<a name="alt-request-syntax"></a>

### <a name="1.3">1.3</a> Alternate Request Syntax


###### <a name="1.3.s1"></a>Description

One of the goals of the xAPI is to allow cross-domain tracking, and even though xAPI seeks to enable tracking from 
applications other than browsers, browsers still need to be supported. For example, Internet Explorer 8 and 9 do not 
implement Cross Origin Resource Sharing, but rather use their own Cross Domain Request API, which cannot use all of 
the xAPI as described above due to only supporting "GET" and "POST", and not allowing HTTP headers to be set.  

###### <a name="1.3.s2"></a>Details/Requirements

The following describes alternate syntax to use only when unable to use the usual syntax for specific calls due to the 
restrictions mentioned above. This alternate syntax can also be used to GET Statements due to limits on query string length.  

See [Appendix C: Cross Domain Request Example](#Appendix3C) for an example. 

###### <a name="1.3.s3"></a>Requirements

__Method__:  
* <a name="1.3.s3.b1"></a>All xAPI requests issued MUST be POST. 
* <a name="1.3.s3.b2"></a>The intended xAPI method MUST be included as the value of the "method" query 
string parameter. 
* <a name="1.3.s3.b3"></a>The Learning Record Provider MUST NOT include any other query string parameters on the request.

Example: http://example.com/xAPI/statements?method=PUT  

__Content__:  
* <a name="1.3.s3.b4"></a>If the xAPI call involved sending content, the Learning Record Provider MUST URL encode that content and 
include it as a form parameter called "content". 
* <a name="1.3.s3.b5"></a>The LRS MUST interpret this content as a UTF-8 string. Storing binary data is not supported with this syntax.  

__Headers__:  
* <a name="1.3.s3.b6"></a>The Learning Record Provider MAY include any header parameters required by this specification which are 
expected to appear in the HTTP header as form parameters with the same names. This applies 
to the following parameters: Authorization, X-Experience-API-Version, Content-Type, Content-Length,
If-Match and If-None-Match. It does not apply to Content-Transfer-Encoding.
* <a name="1.3.s3.b7"></a>The LRS MUST treat the form parameters listed above as header parameters. 
* <a name="1.3.s3.b8"></a>The Learning Record Provider MUST include other header parameters not listed above in the HTTP header as normal. 
* <a name="1.3.s3.b9"></a>The Learning Record Provider SHOULD* still include a Content-Type header (in the HTTP header) for this type of 
request with a value of 'application/x-www-form-urlencoded'. 
* <a name="1.3.s3.b10"></a>The Content-Type form parameter SHOULD* specify the content type of the content within the content form parameter. 
* <a name="1.3.s3.b11"></a>The Learning Record Provider SHOULD* still include a Content-Length header (in the HTTP header) for this type of 
request indicating the overall length of the request's content. 
* <a name="1.3.s3.b12"></a>The Content-Length form parameter SHOULD* specify the length of the content within the 
content form parameter and will therefore be a lower figure than the length listed in the Content-Length header. 

__Query string parameters__:  
* <a name="1.3.s3.b13"></a>Any query string parameters other than "method" MUST instead be included as a form parameter 
with the same name. 
* <a name="1.3.s3.b14"></a>The LRS MUST treat any form parameters other than "content" or the header parameters 
listed above as query string parameters. 

__Attachments__: Note that due to issues relating to encoding, it is not possible to send 
binary data attachments using this syntax. See [Attachments](./xAPI-Data.md#attachments) 

* <a name="1.3.s3.b15"></a>The LRS MUST support the syntax above.  

There might be cases where there is a requirement for the Learning Record Provider to support applications or browsers where the 
Client code is hosted on a different scheme (HTTP or HTTPS) from the LRS. A proxy is only needed IF you want to support HTTP to 
HTTPS requests from IE 9 or lower. You can do HTTP to HTTPS (or HTTPS to HTTP!) without a proxy if you use a modern browser. 
Two simple solutions might be to 1) set up a proxy pass through on the same scheme as the Client code to the LRS or 2) to host an 
intermediary server-side LRS on the same scheme as the Client code to route Statements to the target LRS.

Strongly consider security risks before making the decision to use implementations that use HTTP.

<a name="encoding"></a> 

### <a name="1.4">1.4</a> Encoding

###### <a name="1.4.s1"></a>Requirements
* <a name="1.4.s1.b1"></a>All strings MUST be encoded and interpreted as UTF-8. 

<a name="content-types"></a> 
### <a name="1.5">1.5</a> Content Types
Requests and responses within this specification normally use an `application/json` content type. Exceptions to this are:

* <a name="1.5.b1"></a>Documents can have any content type. 
* <a name="1.5.b2"></a>Statement requests that can sometimes include Attachments use the `multipart/mixed` content type. 

<a name="applicationjson"></a> 
#### <a name="1.5.1">1.5.1</a> Application/JSON
Requests within this specification normally use an `application/json` content type. 

###### <a name="1.5.1.s1"></a>LRS Requirements
* <a name="1.5.1.s1.b1"></a>When receiving a PUT or POST with a document type of `application/json`, an LRS MUST accept batches 
of Statements which contain no Attachment Objects.
* <a name="1.5.1.s1.b2"></a>When receiving a PUT or POST with a document type of `application/json`, an LRS MUST accept batches 
of Statements which contain only Attachment Objects with a populated fileUrl.

<a name="multipartmixed"></a> 
#### <a name="1.5.2">1.5.2</a> Multipart/Mixed

The `multipart/mixed` content type is used for requests that *could* include Attachments. This does not mean that all 
"multipart/mixed" requests necessarily do include Attachments.

##### <a name="1.5.2.s1"></a>Procedure For The Exchange Of Attachments

* <a name="1.5.2.s1.b1"></a>A Statement request including zero or more Attachments is construed as described below.

* <a name="1.5.2.s1.b2"></a>The Statement is sent using a Content-Type of `multipart/mixed`. Any Attachments are placed 
at the end of such transmissions.

* <a name="1.5.2.s1.b3"></a>The LRS decides whether to accept or reject the Statement based on the information in the first part.

* <a name="1.5.2.s1.b4"></a>If it accepts the request, it can match the raw data of an Attachment(s) with the 
Attachment header by comparing the SHA-2 of the raw data to the SHA-2 declared in the header. It MUST not do so any other way.

###### <a name="1.5.2.s2"></a>Requirements for Attachment Statement Batches

A request transmitting a Statement batch, Statement results, or single Statement that includes Attachments MUST satisfy one of the 
following criteria:

* <a name="1.5.2.s2.b1"></a>It MUST be of type `application/json` and include a fileUrl for every Attachment EXCEPT for Statement 
results when the "attachments" filter is `false`.
* <a name="1.5.2.s2.b2"></a>It MUST conform to the definition of "multipart/mixed" in [RFC 2046](https://www.ietf.org/rfc/rfc2046.txt) and:
    * <a name="1.5.2.s2.b2.b1"></a>The first part of the multipart document MUST contain the Statements themselves, 
    with type `application/json`.
    * <a name="1.5.2.s2.b2.b2"></a>Each additional part contains the raw data for an Attachment and forms a logical 
    part of the Statement. This capability will be available when issuing PUT or POST requests against the Statement Resource.
    * <a name="1.5.2.s2.b2.b3"></a>MUST include an X-Experience-API-Hash parameter in each part's header after the 
    first (Statements) part.
    * <a name="1.5.2.s2.b2.b4"></a>MUST include a Content-Transfer-Encoding parameter with a value of `binary` in each 
    part's header after the first (Statements) part.
    * <a name="1.5.2.s2.b2.b5"></a>SHOULD only include one copy of an Attachment's data when the same Attachment is used 
    in multiple Statements that are sent together.
    * <a name="1.5.2.s2.b2.b6"></a>SHOULD include a Content-Type parameter in each part's header. For the first part 
    (containing the Statement) this MUST be `application/json`.
   	* <a name="1.5.2.s2.b2.b7"></a>Where parameters have a corresponding property within the attachment Object 
   	(outlined in the table above), and both the parameter and property are specified for a given Attachment, 
	the value of these parameters and properties MUST match. 

###### <a name="1.5.2.s3"></a>LRS Requirements

* <a name="1.5.2.s3.b1"></a>An LRS MUST include Attachments in the Transmission Format described above
when requested by the Client (see [Statement Resource](#stmtres)).
* <a name="1.5.2.s3.b2"></a>An LRS MUST NOT pull Statements from another LRS without requesting Attachments.
* <a name="1.5.2.s3.b3"></a>An LRS MUST NOT push Statements into another LRS without including Attachment data
received, if any, for those Attachments.
* <a name="1.5.2.s3.b4"></a>When receiving a PUT or POST with a document type of `multipart/mixed`, an LRS MUST accept batches of 
Statements that contain Attachments in the Transmission Format described above.
* <a name="1.5.2.s3.b5"></a>When receiving a PUT or POST with a document type of `multipart/mixed`, an LRS MUST reject batches of 
Statements having Attachments that neither contain a fileUrl nor match a received Attachment part based on their hash.
* <a name="1.5.2.s3.b6"></a>When receiving a PUT or POST with a document type of `multipart/mixed`, an LRS SHOULD assume a 
Content-Transfer-Encoding of binary for Attachment parts.
* <a name="1.5.2.s3.b7"></a>An LRS MAY reject (batches of) Statements that are larger than the LRS is configured to allow.
* <a name="1.5.2.s3.b8"></a>When receiving a PUT or POST with a document type of `multipart/mixed`, an LRS SHOULD* accept batches 
of Statements which contain no Attachment Objects.
* <a name="1.5.2.s3.b9"></a>When receiving a PUT or POST with a document type of `multipart/mixed`, an LRS SHOULD* accept batches 
of Statements which contain only Attachment Objects with a populated fileUrl.

__Note:__ There is no requirement that Statement batches using the "mime/multipart" format contain Attachments.

###### <a name="1.5.2.s4"></a>Learning Record Provider Requirements

* <a name="1.5.2.s4.b1"></a>A Learning Record Provider MAY send Statements with Attachments as described above.
* <a name="1.5.2.s4.b2"></a>A Learning Record Provider MAY send multiple Statements where some or all have 
Attachments if using POST.
* <a name="1.5.2.s4.b3"></a>A Learning Record Provider MAY send batches of type `application/json` where every attachment
Object has a fileUrl, ignoring all requirements based on the "multipart/mixed" format.
* <a name="1.5.2.s4.b4"></a>A Learning Record Provider SHOULD use SHA-256, SHA-384, or SHA-512 to populate the "sha2" property.

###### <a name="1.5.2.s5"></a>File URL
The File URL is intended to provide a location from which the Attachment can be received.
There are, however, no requirements for the owner of the Attachment to make the 
Attachment data available at the location indefinitely or to make the Attachment publically
available without security restrictions. When determining Attachment hosting arrangements, 
those creating Statements using the "fileUrl" property are encouraged to consider the needs of end recipient(s) 
of the Statement, especially if the Attachment content is not included with the Statement.

* <a name="1.5.2.s5.b1"></a>The Attachment data SHOULD be retrievable at the URL indicated by the fileUrl.
* <a name="1.5.2.s5.b2"></a>The owner of the attachment MAY stop providing the attachment data at this IRL at any time. 
* <a name="1.5.2.s5.b3"></a>Security restrictions MAY be applied to those attempting to access the Attachment data at this IRL. 

The period of time an Attachment is made available for, and the security restrictions applied to
hosted attachments, are out of scope of this specification. 

###### <a name="1.5.2.s6"></a>Example

Below is an example of a very simple Statement with an Attachment. Please note the following:

* <a name="1.5.2.s6.b1"></a>The boundary in the sample was chosen to demonstrate valid character classes;
* <a name="1.5.2.s6.b2"></a>The selected boundary does not appear in any of the parts;
* <a name="1.5.2.s6.b3"></a>For readability the sample attachment is of type "text/plain". Even if it had been 
a binary type like "image/jpeg", no encoding would be done, the raw octets would be included;
* <a name="1.5.2.s6.b4"></a>Per RFC 2046, the boundary is `<CRLF>` followed by -- followed by the boundary string 
declared in the header.

__Note:__ Don't forget the ```<CRLF>```  when building or parsing these messages.

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

<a name="datatransfer"></a> <a name="resources"></a>
## <a name="2.0">2.0</a> Resources

The LRS is interacted with via RESTful HTTP methods to the resources outlined in this section.
The Statement Resource can be used by itself to track learning records. Other resources provide
additional functionality. 

An LRS will support all of the resources described in this section. It's also possible
for a tool which is not an LRS to choose to follow the LRS requirements of one or 
more of the resources and methods described in this section. For example a tool might
implement POST Statements for the purposes of receiving incoming Statements forwarded by an LRS.
Such a system is not considered to be an LRS or 'partial LRS'; it is simply not an LRS. 

__Note:__ In all of the example endpoints where xAPI resources are located given in the specification, `http://example.com/xAPI/` 
is the example base endpoint of the LRS. All other IRI syntax after this represents the particular resource used. 
A full list of the endpoints is included in [Appendix B: Table of All Resources](#Appendix3B).

###### <a name="2.0.s1"></a>Requirements

* <a name="2.0.s1.b1"></a>The LRS MUST support all of the resources described in this section. 
* <a name="2.0.s1.b2"></a>If the LRS implements OAuth 1.0, the LRS MUST also support all of the OAuth resources 
described in [OAuth Authorization Scope](#oauthscope).
* <a name="2.0.s1.b3"></a>The LRS MAY support additional resources not described in this specification. 
* <a name="2.0.s1.b4"></a>Past, current and future versions of this specification do not and will not define endpoints 
with path segments starting with `extensions/`. LRSs supporting additional resources not defined in this specification SHOULD 
define their endpoints with path segments starting with `extensions/`.

<a name="stmtres"></a> 

#### <a name="2.1">2.1</a> Statement Resource

###### <a name="2.1.s1"></a>Description

The basic communication mechanism of the Experience API.  

<a name="stmtresput"></a>

#### <a name="2.1.1">2.1.1</a> PUT Statements

###### <a name="2.1.1.s1"></a>Details

Example endpoint: `http://example.com/xAPI/statements`

Stores a single Statement with the given id. POST can also be used to store single Statements.

**Content:** The Statement object to be stored. 

**Returns:** `204 No Content`  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th><th>Required</th></tr>
	<tr id="2.1.1.s1.table1.row1"><td>statementId</td><td>String</td><td> 
	<td>Id of Statement to record</td></td><td>Required</td></tr>
</table>

###### <a name="2.1.1.s2"></a>LRS Requirements

* <a name="2.1.1.s2.b1"></a>The LRS MAY respond before Statements that have been stored are available for retrieval.

* <a name="2.1.1.s2.b2"></a>An LRS MUST NOT make any modifications to its state based on receiving a Statement
with a statementId that it already has a Statement for. Whether it responds with `409 Conflict` or `204 No Content`, 
it MUST NOT modify the Statement or any other Object.

* <a name="2.1.1.s2.b3"></a>If the LRS receives a Statement with an id it already has a Statement for, it SHOULD
verify the received Statement matches the existing one and SHOULD return `409 Conflict` if they
do not match. See [Statement comparison requirements](./xAPI-Data.md#statement-comparison-requirements).

* <a name="2.1.1.s2.b4"></a>If the LRS receives a batch of Statements containing two or more Statements with the same id, 
it SHOULD* reject the batch and return `400 Bad Request`.



###### <a name="2.1.1.s3"></a>Learning Record Provider Requirements

* <a name="2.1.1.s3.b1"></a>Learning Record Providers SHOULD POST Statements including the Statement "id" property 
instead of using PUT. 
* <a name="2.1.1.s3.b2"></a>When PUTing Statements, the "id" property of the Statement SHOULD be used. 
* <a name="2.1.1.s3.b3"></a>Where provided, the "id" property of the Statement MUST match the "statementId" parameter of the request. 

<a name="stmtrespost"></a>

#### <a name="2.1.2">2.1.2</a> POST Statements

###### <a name="2.1.2.s1"></a>Details

Example endpoint: `http://example.com/xAPI/statements`

Stores a Statement, or a set of Statements.

**Content:** An array of Statements or a single Statement to be stored. 

**Returns:** `200 OK`, Array of Statement id(s) (UUID) in the same order as the corresponding stored Statements.  

###### <a name="2.1.2.s2"></a>Requirements

* <a name="2.1.2.s2.b1"></a>The LRS MAY respond before Statements that have been stored are available for retrieval.
* <a name="2.1.2.s2.b2"></a>GET Statements MAY be called using POST and form parameters if necessary as query strings 
have limits. See [Alternate Request Syntax](#alt-request-syntax) for more details.
* <a name="2.1.2.s2.b3"></a>The LRS MUST differentiate a POST to add a Statement or to list Statements based on the 
parameters passed. See [Alternate Request Syntax](#alt-request-syntax) for more details.
* <a name="2.1.2.s2.b4"></a>An LRS MUST NOT make any modifications to its state based on receiving a Statement
with an id that it already has a Statement for. Whether it responds with `409 Conflict` or `204 No Content`, 
it MUST NOT modify the Statement or any other Object.
* <a name="2.1.2.s2.b5"></a>If the LRS receives a Statement with an id it already has a Statement for, it SHOULD
verify the received Statement matches the existing one and SHOULD return `409 Conflict` if they
do not match. See [Statement comparison requirements](./xAPI-Data.md#statement-comparison-requirements).
* <a name="2.1.2.s2.b6"></a>If the LRS receives a batch of Statements containing two or more Statements with the same id, 
it SHOULD* reject the batch and return `400 Bad Request`.

<a name="stmtresget"></a>

#### <a name="2.1.3">2.1.3</a> GET Statements

###### <a name="2.1.3.s1"></a>Details

Example endpoint: `http://example.com/xAPI/statements`

This method is called to fetch a single Statement or multiple Statements. If the statementId or voidedStatementId parameter 
is specified a single Statement is returned.

Otherwise returns: A [StatementResult](./xAPI-Data.md#retrieval) Object, a list of Statements in reverse chronological order based 
on "stored" time, subject to permissions and maximum list length. If additional results are available, an IRL to 
retrieve them will be included in the StatementResult Object.

**Content:** None.

**Returns:** `200 OK`, Statement or [Statement Result](./xAPI-Data.md#retrieval)

<table>
	<tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th><th>Required</th></tr>
	<tr id="2.1.3.s1.table1.row1">
		<td>statementId</td>
		<td>String</td>
		<td> </td>
		<td>Id of Statement to fetch</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row2">
		<td>voidedStatementId</td>
		<td>String</td>
		<td> </td>
		<td>Id of voided Statement to fetch. see <a href="./xAPI-Data.md#voided">Voided
		Statements</a></td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row3">
		<td>agent</td>
		<td>Agent or Identified Group Object (JSON)</td>
		<td> </td>
		<td>Filter, only return Statements for which the specified Agent or Group is 
		the Actor or Object of the Statement.
			<ul>
				<li> 
					Agents or Identified Groups are equal when the same 
					Inverse Functional Identifier is used in each Object compared and 
					those Inverse Functional Identifiers have equal values.
				</li><li>
					For the purposes of this filter, Groups that have members 
					which match the specified Agent	based on their Inverse Functional
					Identifier as described above are considered a match
				</li>
			</ul>
			<br><br>See <a href="./xAPI-Data.md#actor">agent/group</a> Object definition
			for details.
		</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row4">
		<td>verb</td>
		<td>Verb id (IRI)</td>
		<td> </td>
		<td>Filter, only return Statements matching the specified Verb id.</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row5">
		<td>activity</td>
		<td>Activity id (IRI)</td>
		<td> </td>
		<td>
			Filter, only return Statements for which the Object of the Statement is 
			an Activity with the specified id.
		</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row6">
		<td>registration</td>
		<td>UUID</td>
		<td> </td>
		<td>
			Filter, only return Statements matching the specified registration 
			id. Note that although frequently a unique registration will be used 
			for one Actor assigned to one Activity, this cannot be assumed. 
			If only Statements for a certain Actor or Activity are required, 
			those parameters also need to be specified.
		</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row7">
	<td>related_activities</td>
		<td>Boolean</td>
		<td>false</td>
		<td>
			Apply the Activity filter broadly. Include Statements for which the Object,
			any of the  context Activities, or any of those properties in a contained
			SubStatement match the Activity parameter, instead of that parameter's 
			normal behavior. Matching is defined in the same way it is for the 
			"activity" parameter.
		</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row8">
		<td>related_agents</td>
		<td>Boolean</td>
		<td>false</td>
		<td>
			Apply the Agent filter broadly. Include Statements for which 
			the Actor, Object, Authority, Instructor, Team,
			or any of these properties in a contained SubStatement match the Agent parameter,
			instead of that parameter's normal behavior. Matching is defined in the same way
			it is for the "agent" parameter.
		</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row9">
		<td>since</td>
		<td>Timestamp</td>
		<td> </td>
		<td>Only Statements stored since the specified Timestamp (exclusive) are returned.</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row10">
		<td>until</td>
		<td>Timestamp</td>
		<td> </td>
		<td>Only Statements stored at or before the specified Timestamp are returned.</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row11">
		<td>limit</td>
		<td>Nonnegative Integer</td>
		<td>0</td>
		<td>
			Maximum number of Statements to return. 0 indicates return the 
			maximum the server will allow.
		</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row12">
		<td>format</td>
		<td>String: (<code>ids</code>, <code>exact</code>, or <code>canonical</code>)</td>
		<td>exact</td>
		<td>If <code>ids</code>, only include minimum information necessary in Agent, Activity, Verb 
			and Group Objects to identify them. For Anonymous Groups this means including 
			the minimum information needed to identify each member. 
			<br/><br/>
			If <code>exact</code>, return Agent, Activity, Verb and Group Objects populated exactly as they 
			were when the Statement was received. An LRS requesting Statements for the purpose 
			of importing them would use a format of "exact" in order to maintain 
			<a href="./xAPI-Data.md#statement-immutability-and-exceptions">Statement Immutability</a>.  
			<br/><br/>
			If <code>canonical</code>, return Activity Objects and Verbs populated with the canonical
			definition of the Activity Objects and Display of the Verbs as determined by the LRS, after
			applying the <a href="#queryLangFiltering">language filtering process defined below</a>,
			and return the original Agent and Group Objects as in "exact" mode.  
		</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row13">
		<td>attachments</td><td>Boolean</td><td>false</td>
		<td>If <code>true</code>, the LRS uses the multipart response format and includes all attachments as 
		described previously.  If <code>false</code>, the LRS sends the prescribed response with Content-Type 
		application/json and does not send attachment data.</td>
		<td>Optional</td>
	</tr>
	<tr id="2.1.3.s1.table1.row14">
		<td>ascending</td>
		<td>Boolean</td>
		<td>false</td>
		<td>If <code>true</code>, return results in ascending order of stored time</td>
		<td>Optional</td>
	</tr>
</table>

__Note:__ The values of Boolean parameters are represented as `true` or `false` as in JSON.
###### <a name="2.1.3.s2"></a>Requirements

* <a name="2.1.3.s2.b1"></a>The LRS MUST reject with a `400 Bad Request` error any requests to this resource 
which contain both statementId and voidedStatementId parameters

* <a name="2.1.3.s2.b2"></a>The LRS MUST reject with an `400 Bad Request` error any requests to this resource which 
contain statementId or voidedStatementId parameters, and also contain any other parameter besides "attachments" or "format".

* <a name="2.1.3.s2.b3"></a>The LRS MAY apply additional query filter criteria based on permissions associated
with the credentials used. 

* <a name="2.1.3.s2.b4"></a>In the event that no Statements are found matching the query filter criteria, the LRS MUST still return 
`200 OK` and a [StatementResult](./xAPI-Data.md#retrieval) Object. In this case, the "statements" property will contain an empty array.

* <a name="2.1.3.s2.b5"></a>The LRS MUST include the header "X-Experience-API-Consistent-Through", in 
[ISO 8601 combined date and time](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format, 
on all responses to Statements Resource requests, with a value of the timestamp for which all Statements that have or will have a 
"stored" property before that time are known with reasonable certainty to be available for retrieval. This time SHOULD take 
into account any temporary condition, such as excessive load, which might cause a delay in Statements becoming available 
for retrieval. It is expected that this will be a recent timestamp, even if there are no recently received Statements. 

* <a name="2.1.3.s2.b6"></a>If the "attachment" property of a GET Statement is used and is set to `true`, the LRS MUST 
use the multipart response format and include all Attachments as described in [Part Two](./xAPI-Data.md#attachments).

* <a name="2.1.3.s2.b7"></a>If the "attachment" property of a GET statement is used and is set to `false`, the LRS MUST NOT
include Attachment raw data and MUST report `application/json`.

* <a name="2.1.3.s2.b8"></a>The LRS SHOULD* include a "Last-Modified" header which matches the "stored" Timestamp 
of the Statement. 

<a name="queryStatementRef"></a>

###### <a name="2.1.3.s3"></a>Filter Conditions for StatementRefs

This section outlines rules by which Statements targeting other Statements can sometimes be considered to 
meet the filter conditions of a query even if they do not match the original query's filter parameters. 
These rules **do not** apply when retrieving a single Statement using "statementId" or "voidedStatementId" query 
parameters.

'Targeting Statements' means that one Statement (the targeting Statement) includes the Statement id of another
Statement (the targeted Statement) as a Statement Reference as the Object of the Statement. 

For filter parameters which are not time or sequence based (that is, other than "since", "until", or "limit"), 
Statements which target another Statement (by using a StatementRef as the Object of the Statement) will meet the 
filter condition if the targeted Statement meets the filter condition.

The time and sequence based parameters MUST still be applied to the Statement making the StatementRef in this manner. 
This rule applies recursively, so that "Statement a" is a match when a targets b which targets c and the filter 
conditions described above match for "Statement c".

For example, consider the Statement 'Ben passed explosives training', and a follow up
Statement: "Andrew confirmed <StatementRef to original Statement\>". The follow up
Statement will not mention 'Ben' or 'explosives training', but when fetching Statements
with an Actor filter of 'Ben' or an Activity filter of 'explosives training', both
Statements match and will be returned so long as they fall into the time or sequence
being fetched.

__Note:__ StatementRefs used as a value of the "Statement" property within Context do not affect how
Statements are filtered.

<a name="queryLangFiltering"></a>

###### <a name="2.1.3.s4"></a>Language Filtering Requirements for Canonical Format Statements

* <a name="2.1.3.s4.b1"></a>Activity Objects contain Language Map Objects within their "name", "description" and various 
interaction components. The LRS MUST return only one language in each of these maps. 

* <a name="2.1.3.s4.b2"></a>The LRS MAY maintain canonical versions of language maps against any IRI identifying an object containing
language maps. This includes the language map stored in the Verb's "display" property and potentially some 
language maps used within extensions. 

* <a name="2.1.3.s4.b3"></a>If the LRS maintains a canonical version of a language map, it SHOULD* return this canonical language map
 when canonical format is used to retrieve Statements. 

* <a name="2.1.3.s4.b4"></a>The LRS SHOULD* return only one language within each language map for which it returns a canonical map. 

* <a name="2.1.3.s4.b5"></a>In order to choose the most relevant language, the LRS MUST apply the "Accept-Language" header as 
described in [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html) 
(HTTP 1.1), except that this logic MUST be applied to each language map individually to select 
which language entry to include, rather than to the resource (list of Statements) as a whole.

<a name="voidedStatements"></a>

##### <a name="2.1.4">2.1.4</a> Voided Statements
[Part Two](./xAPI-Data.md#voided) describes the process by which Statements can be voided. This section
describes how voided Statements are handled by the LRS when queried. 

Clients can identify the presence and Statement id of any voided Statements by the target of the voiding Statement. 
Aside from debugging tools, many Learning Record Consumers will not want to display voiding Statements to their users 
and will not display these as part of activity streams and other reports. 

###### <a name="2.1.4.s1"></a>Requirements

* <a name="2.1.4.s1.b1"></a>The LRS MUST not return any Statement which has been voided, unless that Statement has been 
requested by voidedStatementId. The process described in [the section on filter conditions for StatementRefs](#queryStatementRef) 
is no exception to this requirement. The process of retrieving voiding Statements is to request each 
individually by voidedStatementId.

* <a name="2.1.4.s1.b2"></a>The LRS MUST still return any Statements targeting the voided Statement, following the process 
and conditions described in [the section on filter conditions for StatementRefs](#queryStatementRef). This includes the 
voiding Statement, which cannot be voided. 

<a name="doctransfer"></a>

### <a name="2.2">2.2</a> Document Resources 

##### <a name="2.2.s1"></a>Description
The Experience API provides a facility for Learning Record Providers to save arbitrary data in 
the form of documents, perhaps related to an Activity, Agent, or combination of both.

##### <a name="2.2.s2"></a>Details
Note that the following table shows generic properties, not a JSON Object as many other tables 
in this specification do. The id is stored in the IRL, "updated" is HTTP header information, and 
"contents" is the HTTP document itself (as opposed to an Object).
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr id="2.2.s2.table1.row1"><td>id</td><td>String</td><td>Set by Learning Record Provider, unique within the scope 
	of the Agent or Activity.</td></tr>
	<tr id="2.2.s2.table1.row2"><td>updated</td><td>Timestamp</td><td>When the document was most recently modified.</td></tr>
	<tr id="2.2.s2.table1.row3"><td>contents</td><td>Arbitrary binary data</td><td>The contents of the document</td></tr>
</table>

The three Document Resources provide [document](./xAPI-Data.md#documents) storage.  The details of each resource are found in 
the following sections, and the information in this section applies to all three resources.

###### <a name="2.2.s3"></a>Details

<table>
	<tr>
		<th>Resource</th>
		<th>Method</th>
		<th>Endpoint</th>
		<th>Example</th>
	</tr>
	<tr id="2.2.s3.table1.row1">
		<td>State Resource</td>
		<td>POST</td>
		<td>activities/state</td>
		<td>http://example.com/xAPI/activities/state</td>
	</tr>
	<tr id="2.2.s3.table1.row2">
		<td>Activity Profile Resource</td>
		<td>POST</td>
		<td>activities/profile</td>
		<td>http://example.com/xAPI/activities/profile</td>
	</tr>
	<tr id="2.2.s3.table1.row3">
		<td>Agent Profile Resource</td>
		<td>POST</td>
		<td>agents/profile</td>
		<td>http://example.com/xAPI/agents/profile</td>
	</tr>
</table>

###### <a name="2.2.s4"></a>Requirements

* <a name="2.2.s4.b1"></a>A Learning Record Provider MAY send documents to any of the Document Resources for Activities and 
Agents that the LRS does not have prior knowledge of. 

* <a name="2.2.s4.b2"></a>The LRS MUST NOT reject documents on the basis of not having prior knowledge of the Activity and/or Agent.

##### <a name="2.2.s5"></a>Last Modified
The "Last Modified" header is set by the LRS when returning single or multiple documents in response to a GET request. 

###### <a name="2.2.s6"></a>Requirements
* <a name="2.2.s6.b1"></a>When returning a single document, the LRS SHOULD* include a "Last-Modified" header indicating when
the document was last modified. 
* <a name="2.2.s6.b2"></a>When returning multiple documents, the LRS SHOULD* include a "Last-Modified" header indicating when
the most recently modified document was last modified. 

###### <a name="2.2.s7"></a>JSON Procedure with Requirements

If a Learning Record Provider stores variables as JSON Objects in a document with content type `application/json`, 
they can manipulate them as sets of variables using POST.

The following process walks through that process and the process requirements.  
For example, a document contains: 

```
{
	"x" : "foo",
	"y" : "bar"
}
```  
When an LRS receives a POST request with content type `application/json` for an existing document also of
content type `application/json`, it MUST merge the posted document with the existing document. 
In this context, merge is defined as:
* <a name="2.2.s7.b1"></a>de-serialize the Objects represented by each document.
* <a name="2.2.s7.b2"></a>for each property directly defined on the Object being posted, set the corresponding
property on the existing Object equal to the value from the posted Object.    
* <a name="2.2.s7.b3"></a>store any valid json serialization of the existing Object as the document referenced in the request.

Note that only top-level properties are merged, even if a top-level property is an Object. The entire contents of each 
original property are replaced with the entire contents of each new property.

For example, this document is POSTed with the same id as the existing document above:

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

###### <a name="2.2.s8"></a>Requirements

* <a name="2.2.s8.b1"></a>If the document being posted or any existing document does not have a Content-Type
of `application/json`, or if either document cannot be parsed as a JSON Object, the LRS MUST
respond with HTTP status code `400 Bad Request`, and MUST NOT update the target document
as a result of the request.

* <a name="2.2.s8.b2"></a>If the merge is successful, the LRS MUST respond with HTTP status code `204 No Content`.

* <a name="2.2.s8.b3"></a>If a Learning Record Provider needs to delete a property, it SHOULD use a PUT request to replace 
the whole document as described below. 

<a name="stateres"></a> 

### <a name="2.3">2.3</a> State Resource

##### <a name="2.3.s1"></a>Description

Generally, this is a scratch area for Learning Record Providers that do not have their own internal storage, 
or need to persist state across devices. 

##### <a name="2.3.s2"></a>Details

The semantics of the call are driven by the "stateId" parameter. If it is included, the GET and DELETE methods will 
act upon a single defined state document identified by "stateId". Otherwise, GET will return the available ids, 
and DELETE will delete all state in the context given through the other parameters. This resource has
[Concurrency](#concurrency) controls associated with it.

###### <a name="2.3.s3"></a>Single Document (PUT | POST | GET | DELETE)

Example endpoint: http://example.com/xAPI/activities/state

Stores, changes, fetches, or deletes the document specified by the given "stateId" that 
exists in the context of the specified Activity, Agent, and registration (if specified).  

**Content (PUT | POST):** The document to be stored or updated.  
**Content (GET | DELETE):** None.  

**Returns (PUT | POST | DELETE):** `204 No Content`  
**Returns (GET):** `200 OK`, the State document 
<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr id="2.3.s3.table1.row1">
		<td>activityId</td>
		<td>Activity id (IRI)</td>
		<td>The Activity id associated with this state.</td>
		<td>Required</td>
	</tr>
	<tr id="2.3.s3.table1.row2">
		<td>agent</td>
		<td>Agent Object (JSON)</td>
		<td>The Agent associated with this state.</td>
		<td>Required</td>
	</tr>
	<tr id="2.3.s3.table1.row3">
		<td>registration</td>
		<td>UUID</td>
		<td>The registration associated with this state.</td>
		<td>Optional</td>
	</tr>
	<tr id="2.3.s3.table1.row4">
		<td>stateId</td>
		<td>String</td>
		<td>The id for this state, within the given context.</td>
		<td>Required</td>
	</tr>
</table>

###### <a name="2.3.s4"></a>Multiple Document GET

Example endpoint: http://example.com/xAPI/activities/state

Fetches State ids of all state data for this context (Activity + Agent \[ + registration if specified\]). 
If "since" parameter is specified, this is limited to entries that have been stored or updated since the specified 
timestamp (exclusive). 

**Content:** None.

**Returns:** `200 OK`, Array of State id(s)  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr id="2.3.s4.table1.row1">
		<td>activityId</td>
		<td>Activity id (IRI)</td>
		<td>The Activity id associated with these states.</td>
		<td>Required</td>
	</tr>
	<tr id="2.3.s4.table1.row2">
		<td>agent</td>
		<td>Agent object (JSON)</td>
		<td>The Agent associated with these states.</td>
		<td>Required</td>
	</tr>
	<tr id="2.3.s4.table1.row3">
		<td>registration</td>
		<td>UUID</td>
		<td>The Registration associated with these states.</td>
		<td>Optional</td>
	</tr>
	<tr id="2.3.s4.table1.row4">
		<td>since</td>
		<td>Timestamp</td>
		<td>Only ids of states stored since the specified Timestamp (exclusive) are returned.</td>
		<td>Optional</td>
	</tr>
</table>

###### <a name="2.3.s5"></a>Multiple Document DELETE

Example endpoint: http://example.com/xAPI/activities/state

Deletes all state data for this context (Activity + Agent \[+ registration if specified\]).  

**Content:** None.

**Returns**: `204 No Content`  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr id="2.3.s5.table1.row1">
		<td>activityId</td>
		<td>Activity id (IRI)</td>
		<td>The Activity id associated with this state.</td>
		<td>Required</td>
	</tr>
	<tr id="2.3.s5.table1.row2">
		<td>agent</td>
		<td>Agent object (JSON)</td>
		<td>The Agent associated with this state.</td>
		<td>Required</td>
	</tr>
	<tr id="2.3.s5.table1.row3">
		<td>registration</td>
		<td>UUID</td>
		<td>The Registration associated with this state.</td>
		<td>Optional</td>
	</tr>
</table>

<a name="agentsres"></a>

### <a name="2.4">2.4</a> Agents Resource

The Agents Resource provides a method to retrieve a special Object with combined information about an Agent derived from 
an outside service, such as a directory service. This resource has [Concurrency](#concurrency) controls associated with it.

###### <a name="2.4.s1"></a>Combined Information GET

###### <a name="2.4.s2"></a>Details

Example endpoint: http://example.com/xAPI/agents

Return a special, Person Object for a specified Agent. The Person Object is very similar to an Agent Object, 
but instead of each attribute having a single value, each attribute has an array value, and it is legal to 
include multiple identifying properties. This is different from the FOAF concept of person, person is being 
used here to indicate a person-centric view of the LRS Agent data, but Agents just refer to one 
persona (a person in one context).  

The "agent" parameter is a normal Agent Object with a single identifier and no arrays. 
It is not a Person Object, nor is it a Group. 

**Content:** None.

**Returns:** `200 OK`, Person Object

<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr id="2.4.s2.table1.row1">
		<td>agent</td>
		<td>Agent object (JSON)</td>
		<td>The Agent representation to use in fetching expanded Agent information.</td>
		<td>Required</td>
	</tr>
</table>

###### <a name="2.4.s3"></a>Requirements
* <a name="2.4.s3.b1"></a>An LRS capable of returning multiple identifying properties for a Person 
Object SHOULD require the connecting credentials have increased, explicitly 
given permissions. 
* <a name="2.4.s3.b2"></a>An LRS SHOULD reject insufficiently privileged requests with `403 Forbidden`.
* <a name="2.4.s3.b3"></a>If an LRS does not have any additional information about an Agent to return, 
the LRS MUST still return a Person Object when queried, but that Person Object will only 
include the information associated with the requested Agent. 

__Note:__ This means that if a request is made for an Agent which the LRS has no 
prior knowledge of, it will still return a Person object containing the information 
about the Agent it received in the request. 

###### <a name="2.4.s4"></a>Person Properties

###### <a name="2.4.s5"></a>Details

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr id="2.4.s5.table1.row1">
		<td>objectType</td>
		<td>String</td>
		<td><code>Person</code></td>
		<td>Required</td>
	</tr>
	<tr id="2.4.s5.table1.row2">
		<td>name</td>
		<td>Array of strings.</td>
		<td>List of names of Agents retrieved.</td>
		<td>Optional</td>
	</tr>
	<tr id="2.4.s5.table1.row3">
		<td><a href="http://xmlns.com/foaf/spec/#term_mbox">mbox</a></td>
		<td>Array of IRIs in the form "mailto:email address".</td>
		<td>List of e-mail addresses of Agents retrieved.</td>
		<td>Optional</td>
	</tr>
	<tr id="2.4.s5.table1.row4">
		<td><a href="http://xmlns.com/foaf/spec/#term_mbox_sha1sum">mbox_sha1sum</a></td>
		<td>Array of strings.</td>
		<td>List of the SHA1 hashes of mailto IRIs (such as go in an mbox property).</td>
		<td>Optional</td>
	</tr>
	<tr id="2.4.s5.table1.row5">
		<td>openid*</td>
		<td>Array of strings.</td>
		<td>List of openids that uniquely identify the Agents retrieved.</td>
		<td>Optional</td>
	</tr>
	<tr id="2.4.s5.table1.row6">
		<td>account*</td>
		<td>Array of account objects.</td>
		<td>List of accounts to match. Complete account Objects (homePage and name) 
		MUST be provided.</td>
		<td>Optional</td>
	</tr>
</table>

See also: [Agent](./xAPI-Data.md#agent).

###### <a name="2.4.s6"></a>Requirements

* <a name="2.4.s6.b1"></a>All array properties MUST be populated with members with the same definition as the 
similarly named property from Agent Objects.  

* <a name="2.4.s6.b2"></a>Additional properties not listed here SHOULD* NOT be added to this object and each 
property MUST occur only once. 

<a name="activitiesres"></a> 

### <a name="2.5">2.5</a> Activities Resource

The Activities Resource provides a method to retrieve a full description of an Activity from the LRS. 
This resource has [Concurrency](#concurrency) controls associated with it.

###### <a name="2.5.s1"></a>Full Activity Object GET

Example endpoint: http://example.com/xAPI/activities

Loads the complete Activity Object specified.  

**Content:** None.

**Returns:** `200 OK`, Content 
<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr id="2.5.s1.table1.row1">
		<td>activityId</td>
		<td>Activity id (IRI)</td>
		<td>The id associated with the Activities to load.</td>
		<td>Required</td>
	</tr>
</table>

###### <a name="2.5.s2"></a>Requirements

* <a name="2.5.s2.b1"></a>If an LRS does not have a canonical definition of the Activity to return, the LRS SHOULD* 
still return an Activity Object when queried.

<a name="agentprofres"></a>

### <a name="2.6">2.6</a> Agent Profile Resource

###### <a name="2.6.s1"></a>Description

The Agent Profile Resource is much like the State Resource, allowing for arbitrary key / document pairs to be saved 
which are related to an Agent. 

###### <a name="2.6.s2"></a>Details

The semantics of the request are driven by the "profileId" parameter. If it is included, the GET method will act upon 
a single defined document identified by "profileId". Otherwise, GET will return the available ids.  

###### <a name="2.6.s3"></a>Single Agent or Profile Document (PUT | POST | GET | DELETE)

Example endpoint: http://example.com/xAPI/agents/profile

Stores, changes, fetches, or deletes the specified Profile document in the context of the specified Agent.  

**Content (PUT | POST):** The document to be stored or updated.  
**Content (GET | DELETE):** None.  

**Returns (PUT | POST | DELETE):** `204 No Content`  
**Returns (GET):** `200 OK`, the Profile document  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr id="2.6.s3.table1.row1">
		<td>agent</td>
		<td>Agent object (JSON)</td>
		<td>The Agent associated with this Profile document.</td>
		<td>Required</td>
	</tr>
	<tr id="2.6.s3.table1.row2">
		<td>profileId</td>
		<td>String</td>
		<td>The profile id associated with this Profile document.</td>
		<td>Required</td>
	</tr>
</table>

__Note:__ The "agent" parameter is an Agent Object and not a Group. Learning Record Providers wishing to store data
against an Identified Group can use the Identified Group's identifier within an Agent Object. 

###### <a name="2.6.s4"></a>Multiple Document GET

Example endpoint: http://example.com/xAPI/agents/profile

xAPI tracking is done via HTTP Requests from the Learning Record Provider (LRP) (a client system with requirements defined in this document) to the Learning Record Store (LRS) (a server system with requirements defined in this document). This specification offers guidance in some aspects of this communication.

  1. LRS Communication

The primary function of the LRS within the xAPI is to store and retrieve Statements. Validation of Statements in the Experience API is focused solely on syntax, not semantics. Enforcing the rules that ensure valid meaning among Verb definitions, Activity types, and extensions is the not the responsibility of the LRS, it should only enforce rules regarding structure.

The following table summarizes the Resources with which HTTP methods can interact. Implementation details for each resource will be found in Section 1.2 LRS Resources. The LRS is interacted with via RESTful HTTP methods to the resources outlined in this section.

The LRS MUST enforce requirements as found in the tables in this section, by rejecting any request with appropriate error code where invalid

Other Resources and undefined requests are out of scope of this document. It is suggested that an LRS SHOULD NOT reject those requests for the sole purpose of their absence from this document (but may certainly do so for security/unsupported reasons)

| **Base Resource IRI/URL of the LRS Precedes Each Entry** | **Function** |
 **Supported Calls** |
| --- | --- | --- |
| statements | Statement Storage/Retrieval | PUT, POST,GET,HEAD |
| agents | Agent Object Storage/Retrieval | GET, HEAD |
| agents/profile | Agent Profile Resource | PUT, POST, GET, HEAD, DELETE |
| activities | Activity Object Storage/Retrieval | GET, HEAD |
| activities/profile | Activity Profile Resource | PUT, POST, GET, HEAD, DELETE |
| activities/state | State Resource | PUT, POST, GET, DELETE, HEAD |
| about | LRS Information | GET, HEAD |
| extensions/&quot;yourext&quot; | Any Additional Resource Not Identified in this Document | Not specified |

    1. Headers

The LRS must implement and validate, per other requirements in this document, the following request headers:

- Accept
- Accept-Encoding
- Accept-Language
- Authorization
- Content-Type
- Content-Length
- Content-Transfer-Encoding
- If-Match
- If-None-Match
- X-Experience-API-Version

The following response headers are expected to be used by the LRS. Again, not all of these apply to every type of request and/or situations:

- Content-Type
- Content-Length
- Last-Modified
- ETag
- Status
- X-Experience-API-Version
- X-Experience-API-Consistent-Through

The lists above are not intended to be exhaustive of LRS requirements. Implementation details can be found throughout this document.

    1. Encoding

All strings MUST be encoded and interpreted as UTF-8.

    1. Content Types

Requests and responses within this specification normally use an application/json content type. Exceptions to this are:

- Documents can have any content type.
- Statement requests that can sometimes include Attachments use the multipart/mixed content type.

#### Application/JSON

###### LRS Requirements

- When receiving a PUT or POST with a document type of application/json, an LRS MUST accept batches of Statements which contain no Attachment Objects.
- When receiving a PUT or POST with a document type of application/json, an LRS MUST accept batches of Statements which contain only Attachment Objects with a populated fileUrl.

#### Multipart/Mixed

The multipart/mixed content type is used for requests that _could_ include Attachments. This does not mean that all &quot;multipart/mixed&quot; requests necessarily do include Attachments.

##### Procedure For The Exchange Of Attachments

- A Statement request including zero or more Attachments is construed in accordance with requirements in this document.
- The Statement is sent using a Content-Type of multipart/mixed. Any Attachments are placed at the end of such transmissions.
- The LRS decides whether to accept or reject the Statement based on the information in the first part.
- If it accepts the request, it can match the raw data of an Attachment(s) with the Attachment header by comparing the SHA-2 of the raw data to the SHA-2 declared in the header. It MUST not do so any other way.

###### Requirements for Attachment Statement Batches

A request transmitting a Statement batch, Statement results, or single Statement that includes Attachments MUST satisfy one of the following criteria:

- It MUST be of type application/json and include a fileUrl for every Attachment EXCEPT for Statement results when the &quot;attachments&quot; filter is false.
- It MUST conform to the definition of &quot;multipart/mixed&quot; in [RFC 2046](https://www.ietf.org/rfc/rfc2046.txt) and:
  - The first part of the multipart document MUST contain the Statements themselves, with type application/json.
  - Each additional part contains the raw data for an Attachment and forms a logical part of the Statement. This capability will be available when issuing PUT or POST requests against the Statement Resource.
  - MUST include an X-Experience-API-Hash parameter in each part&#39;s header after the first (Statements) part.
  - MUST include a Content-Transfer-Encoding parameter with a value of binary in each part&#39;s header after the first (Statements) part.
  - SHOULD only include one copy of an Attachment&#39;s data when the same Attachment is used in multiple Statements that are sent together.
  - SHOULD include a Content-Type parameter in each part&#39;s header. For the first part (containing the Statement) this MUST be application/json.
  - Where parameters have a corresponding property within the attachment Object (and both the parameter and property are specified for a given Attachment, the value of these parameters and properties MUST match.

###### LRS Requirements

- An LRS MUST include Attachments in the Transmission Format described above when issued a Request (see [Statement Resource](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Communication.md#stmtres)).
- When receiving a PUT or POST with a document type of multipart/mixed, an LRS MUST accept batches of Statements that contain Attachments in the Transmission Format described above.
- When receiving a PUT or POST with a document type of multipart/mixed, an LRS MUST reject batches of Statements having Attachments that neither contain a fileUrl nor match a received Attachment part based on their hash.
- When receiving a PUT or POST with a document type of multipart/mixed, an LRS SHOULD assume a Content-Transfer-Encoding of binary for Attachment parts.
- When receiving a PUT or POST with a document type of multipart/mixed, an LRS MUST accept batches of Statements which contain no Attachment Objects.
- When receiving a PUT or POST with a document type of multipart/mixed, an LRS MUST accept batches of Statements which contain only Attachment Objects with a populated fileUrl.

**Note:**  There is no requirement that Statement batches using the &quot;mime/multipart&quot; format contain Attachments.

The File URL is intended to provide a location from which the Attachment can be received. There are, however, no requirements for the owner of the Attachment to make the Attachment data available at the location indefinitely or to make the Attachment publically available without security restrictions. When determining Attachment hosting arrangements, those creating Statements using the &quot;fileUrl&quot; property are encouraged to consider the needs of end recipient(s) of the Statement, especially if the Attachment content is not included with the Statement.

The period of time an Attachment is made available for, and the security restrictions applied to hosted attachments, are out of scope of this specification.

    1. Concurrency

Concurrency control makes certain that a PUT, POST or DELETE does not perform operations based on old data.

##### Details

xAPI uses HTTP 1.1 entity tags ([ETags](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19)) to implement optimistic concurrency control in the following resources, where PUT, POST or DELETE are allowed to overwrite or remove existing data:

- State Resource
- Agent Profile Resource
- Activity Profile Resource

##### LRS Requirements

- An LRS responding to a GET request MUST add an ETag HTTP header to the response.
- An LRS responding to a PUT, POST, or DELETE request MUST handle the &quot;[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)&quot; header as described in RFC2616, HTTP 1.1 if it contains an ETag, in order to detect modifications made after the document was last fetched.
- -.

If the header precondition in either of the request cases above fails, the LRS:

- MUST return HTTP status 412 Precondition Failed.
- MUST NOT make a modification to the resource.

If a PUT request is received without either header for a resource that already exists, the LRS:

- MUST return HTTP status 409 Conflict.
- MUST return a response explaining that the Learning Record Provider SHOULD
  - check the current state of the resource.
  - set the &quot;If-Match&quot; header with the current ETag to resolve the conflict.
- MUST NOT make a modification to the resource.

    1. Error Codes

The list below covers many error conditions that could be returned from various methods in the API.

- 400 Bad Request - Indicates an error condition caused by an invalid or missing argument. The term &quot;invalid arguments&quot; includes malformed JSON or invalid Object structures.
- 401 Unauthorized - Indicates that authentication is required, or in the case authentication has been posted in the request, that the given credentials have been refused.
- 403 Forbidden - Indicates that the request is unauthorized for the given credentials. Note this is different than refusing the credentials given. In this case, the credentials have been validated, but the authenticated system is not allowed to perform the given action.
- 404 Not Found - Indicates the requested resource was not found. May be returned by any method that returns a uniquely identified resource, for instance, any State, Agent Profile, or Activity Profile Resource request targeting a specific document, or the method to retrieve a single Statement.
- 409 Conflict - Indicates an error condition due to a conflict with the current state of a resource, in the case of State Resource, Agent Profile Resource or Activity Profile Resource requests, or in the Statement Resource PUT or POST calls. See Section [3.1 Concurrency](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Communication.md#concurrency) for more details.
- 412 Precondition Failed - Indicates an error condition due to a failure of a precondition posted with the request, in the case of State or Agent Profile or Activity Profile API requests. See Section [6.3 Concurrency](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Communication.md#concurrency) for more details.
- 413 Request Entity Too Large - Indicates that the LRS has rejected the Statement or document because its size (or the size of an Attachment included in the request) is larger than the maximum allowed by the LRS.
- 429 Too Many Requests - Indicates that the LRS has rejected the request because it has received too many requests from the system or set of credentials in a given amount of time.
- 500 Internal Server Error - Indicates a general error condition, typically an unexpected exception in processing on the server.

##### Requirements

- An LRS MUST return the error code most appropriate to the error condition from the list above.
- An LRS SHOULD return a message in the response explaining the cause of the error.
- An LRS SHOULD use content negotiation as described in [RFC 7231](http://tools.ietf.org/html/rfc7231#section-5.3) to decide the format of the error.
- An LRS SHOULD allow for plain text, HTML, and JSON responses for errors (using content negotiation).
- The LRS MUST reject with 400 Bad Request status any requests that use any parameters which the LRS does not recognize in their intended context in this specification. ( **Note:**  LRSs MAY recognize and act on parameters not in this specification).
- The LRS MUST reject with 400 Bad Request status any requests that use any parameters matching parameters described in this specification in all but case.
- The LRS MUST reject a batch of statements if any Statement within that batch is rejected.
- The LRS MUST reject with 403 Forbidden status any request rejected by the LRS where the credentials associated with the request do not have permission to make that request.
- The LRS MUST reject with 413 Request Entity Too Large status any request rejected by the LRS where the size of the Attachment, Statement or document is larger than the maximum allowed by the LRS.
- The LRS MAY choose any Attachment, Statement and document size limits and MAY vary this limit on any basis, e.g., per authority.
- The LRS MUST reject with 429 Too Many Requests status any request rejected by the LRS where the request is rejected due to too many requests being received by a particular system or set of credentials in a given amount of time.
- The LRS MAY choose any rate limit and MAY vary this limit on any basis, e.g., per authority.

    1. LRS Resources

Each LRS Resource is described in the following sections. Each Resource has requirements for each of the HTTP methods that may be made to it. Each section will include the expected contents of the body of the request, the request parameters, and the expected returns. If an HTTP method is not described, it is out of scope of this document.

LRSs leverage both Statements and documents as data structures. The LRS MUST support all of the resources described in this section.

- The LRS MAY support additional resources not described in this specification.
- Past, current and future versions of this specification do not and will not define resource locations (endpoints) with path segments starting with extensions/. LRSs supporting additional resources not defined in this specification SHOULD define their resource locations with path segments starting with extensions/
- A Learning Record Provider MAY send documents to any of the Document Resources for Activities and Agents that the LRS does not have prior knowledge of.
- The LRS MUST NOT reject documents on the basis of not having prior knowledge of the Activity and/or Agent.

The LRS shall reject Requests where parameters are:

- missing any required properties
- with any null values (except inside extensions).
- where the wrong data type is used (see tables), for example:
  - with strings where numbers are required, even if those strings contain numbers, or
  - with strings where booleans are required, even if those strings contain booleans.
- with any non-format-following key or value, including the empty string, where a string with a particular format (such as mailto IRI, UUID, or IRI) is required.
- where the case of a key does not match the case specified in this specification.
- where the case of a value restricted to enumerated values does not match an enumerated value given in this specification exactly.
- where a key or value is not allowed by this specification.
- containing IRL or IRI values without a scheme.

**Note:**  In all of the examples in this specification, http://example.com/xAPI/ is the example base resource location (endpoint) of the LRS. All other IRI syntax after this represents the particular resource used.

To be placed below/integrated:

Documents are only name/value pairs. Document requests are generic with only the following form:

| **Property** | **Type** | **Description** |
| --- | --- | --- |
| id | String | Set by Learning Record Provider, unique within the scope of the Agent or Activity. |
| updated | Timestamp | When the document was most recently modified (HTTP Header). |
| contents | Arbitrary binary data | The contents of the document |

1.1.6.1 Statement Resource (/statements)

Statements are the key data structure of xAPI. This resource facilitates their storage and retrieval.

Example resource location/endpoint: [http://example.com/xAPI/statements](http://example.com/xAPI/statements)

**PUT Request:**

**Summary:** Stores a single Statement with the given id.

| **Parameter** | **Type** | **Default** | **Description** | **Required** |
| --- | --- | --- | --- | --- |
| statementId | String |
 | Id of Statement to record | Required |

**Body:**  The Statement object to be stored.

**Returns:**  204 No Content

######
LRS Requirements

- The LRS MAY respond before Statements that have been stored are available for retrieval.
- An LRS MUST NOT make any modifications to its state based on receiving a Statement with a statementId that it already has a Statement for. Whether it responds with 409 Conflict or 204 No Content, it MUST NOT modify the Statement or any other Object.
- If the LRS receives a Statement with an id it already has a Statement for, it SHOULD verify the received Statement matches the existing one and SHOULD return 409 Conflict if they do not match. See [Statement comparison requirements](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#statement-comparison-requirements).
- If the LRS receives a batch of Statements containing two or more Statements with the same id, it SHOULD\* reject the batch and return 400 Bad Request.

###### Learning Record Provider Requirements

- Learning Record Providers SHOULD POST Statements including the Statement &quot;id&quot; property instead of using PUT.
- When PUTing Statements, the &quot;id&quot; property of the Statement SHOULD be used.
- Where provided, the &quot;id&quot; property of the Statement MUST match the &quot;statementId&quot; parameter of the request.

**POST Request:**

**Summary:** Stores a Statement, or a set of Statements.

**Body:**  An array of Statements or a single Statement to be stored.

**Returns:**  200 OK, Array of Statement id(s) (UUID) in the same order as the corresponding stored Statements.

###### Requirements

- The LRS MAY respond before Statements that have been stored are available for retrieval.
- An LRS MUST NOT make any modifications to its state based on receiving a Statement with an id that it already has a Statement for. Whether it responds with 409 Conflict or 204 No Content, it MUST NOT modify the Statement or any other Object.
- If the LRS receives a Statement with an id it already has a Statement for, it SHOULD verify the received Statement matches the existing one and SHOULD return 409 Conflict if they do not match. See [Statement comparison requirements](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#statement-comparison-requirements).
- If the LRS receives a batch of Statements containing two or more Statements with the same id, it SHOULD\* reject the batch and return 400 Bad Request.

**GET Request:**

**Summary:** Fetches a single Statement or multiple Statements. If the statementId or voidedStatementId parameter is specified a single Statement is returned. Otherwise, a [StatementResult](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#retrieval) Object, a list of Statements in reverse chronological order based on &quot;stored&quot; time, subject to permissions and maximum list length. If additional results are available, an IRL to retrieve them will be included in the StatementResult Object.

| **Parameter** | **Type** | **Default** | **Description** | **Required** |
| --- | --- | --- | --- | --- |
| statementId | String |
 | Id of Statement to fetch | Optional |
| voidedStatementId | String |
 | Id of voided Statement to fetch. see [Voided Statements](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#voided) | Optional |
| agent | Agent or Identified Group Object (JSON) |
 | Filter, only return Statements for which the specified Agent or Group is the 
 or Object of the Statement.
- Agents or Identified Groups are equal when the same Inverse Functional Identifier is used in each Object compared and those Inverse Functional Identifiers have equal values.
- For the purposes of this filter, Groups that have members which match the specified Agent based on their Inverse Functional Identifier as described above are considered a match


 See [agent/group](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#actor) Object definition for details. | Optional |
| verb | Verb id (IRI) |
 | Filter, only return Statements matching the specified Verb id. | Optional |
| activity | Activity id (IRI) |
 | Filter, only return Statements for which the Object of the Statement is an Activity with the specified id. | Optional |
| registration | UUID |
 | Filter, only return Statements matching the specified registration id. Note that although frequently a unique registration will be used for one Actor assigned to one Activity, this cannot be assumed. If only Statements for a certain Actor or Activity are required, those parameters also need to be specified. | Optional |
| related\_activities | Boolean | false | Apply the Activity filter broadly. Include Statements for which the Object, any of the context Activities, or any of those properties in a contained SubStatement match the Activity parameter, instead of that parameter&#39;s normal behavior. Matching is defined in the same way it is for the &quot;activity&quot; parameter. | Optional |
| related\_agents | Boolean | false | Apply the Agent filter broadly. Include Statements for which the Actor, Object, Authority, Instructor, Team, Context Agent, Context Group, or any of these properties in a contained SubStatement match the Agent parameter, instead of that parameter&#39;s normal behavior. Matching is defined in the same way it is for the &quot;agent&quot; parameter. | Optional |
| since | Timestamp |
 | Only Statements stored since the specified Timestamp (exclusive) are returned. | Optional |
| until | Timestamp |
 | Only Statements stored at or before the specified Timestamp are returned. | Optional |
| limit | Nonnegative Integer | 0 | Maximum number of Statements to return. 0 indicates return the maximum the server will allow. | Optional |
| format | String: (ids, exact, or canonical) | exact | If ids, only include minimum information necessary in Agent, Activity, Verb and Group Objects to identify them. For Anonymous Groups this means including the minimum information needed to identify each member.

 If exact, return Agent, Activity, Verb and Group Objects populated exactly as they were when the Statement was received. An LRS requesting Statements for the purpose of importing them would use a format of &quot;exact&quot; in order to maintain [Statement Immutability](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#statement-immutability-and-exceptions).

 If canonical, return Activity Objects and Verbs populated with the canonical definition of the Activity Objects and Display of the Verbs as determined by the LRS, after applying the [language filtering process defined below](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Communication.md#queryLangFiltering), and return the original Agent and Group Objects as in &quot;exact&quot; mode. | Optional |
| attachments | Boolean | false | If true, the LRS uses the multipart response format and includes all attachments as described previously. If false, the LRS sends the prescribed response with Content-Type application/json and does not send attachment data. | Optional |
| ascending | Boolean | false | If true, return results in ascending order of stored time | Optional |

**Body:**  None.

**Returns:**  200 OK, Statement or [Statement Result](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#retrieval)

**Note:**  The values of Boolean parameters are represented as true or false as in JSON.

###### Requirements

- The LRS MUST reject with a 400 Bad Request error any requests to this resource which contain both statementId and voidedStatementId parameters
- The LRS MUST reject with an 400 Bad Request error any requests to this resource which contain statementId or voidedStatementId parameters, and also contain any other parameter besides &quot;attachments&quot; or &quot;format&quot;.
- The LRS MAY apply additional query filter criteria based on permissions associated with the credentials used.
- In the event that no Statements are found matching the query filter criteria, the LRS MUST still return 200 OK and a [StatementResult](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#retrieval) Object. In this case, the &quot;statements&quot; property will contain an empty array.
- The LRS MUST include the header &quot;X-Experience-API-Consistent-Through&quot;, in [ISO 8601 combined date and time](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format, on all responses to Statements Resource requests, with a value of the timestamp for which all Statements that have or will have a &quot;stored&quot; property before that time are known with reasonable certainty to be available for retrieval. This time SHOULD take into account any temporary condition, such as excessive load, which might cause a delay in Statements becoming available for retrieval. It is expected that this will be a recent timestamp, even if there are no recently received Statements.
- If the &quot;attachment&quot; property of a GET Statement is used and is set to true, the LRS MUST use the multipart response format and include all Attachments as described in this document.
- If the &quot;attachment&quot; property of a GET statement is used and is set to false, the LRS MUST NOT include Attachment raw data and MUST report application/json.
- The LRS MUST include a &quot;Last-Modified&quot; header which matches the &quot;stored&quot; Timestamp of the Statement.
- When queried for Statements with a Format of exact, the LRS MUST return the &quot;display&quot; property exactly as included (or omitted) within the Statement.

###### Filter Conditions for StatementRefs

This section outlines rules by which Statements targeting other Statements can sometimes be considered to meet the filter conditions of a query even if they do not match the original query&#39;s filter parameters. These rules  **do not**  apply when retrieving a single Statement using &quot;statementId&quot; or &quot;voidedStatementId&quot; query parameters.

&#39;Targeting Statements&#39; means that one Statement (the targeting Statement) includes the Statement id of another Statement (the targeted Statement) as a Statement Reference as the Object of the Statement.

For filter parameters which are not time or sequence based (that is, other than &quot;since&quot;, &quot;until&quot;, or &quot;limit&quot;), Statements which target another Statement (by using a StatementRef as the Object of the Statement) will meet the filter condition if the targeted Statement meets the filter condition.

The time and sequence based parameters MUST still be applied to the Statement making the StatementRef in this manner. This rule applies recursively, so that &quot;Statement a&quot; is a match when a targets b which targets c and the filter conditions described above match for &quot;Statement c&quot;.

For example, consider the Statement &#39;Ben passed explosives training&#39;, and a follow up Statement: &quot;Andrew confirmed \&lt;StatementRef to original Statement\&gt;&quot;. The follow up Statement will not mention &#39;Ben&#39; or &#39;explosives training&#39;, but when fetching Statements with an Actor filter of &#39;Ben&#39; or an Activity filter of &#39;explosives training&#39;, both Statements match and will be returned so long as they fall into the time or sequence being fetched.

**Note:**  StatementRefs used as a value of the &quot;Statement&quot; property within Context do not affect how Statements are filtered.

###### Language Filtering Requirements for Canonical Format Statements

- Activity Objects contain Language Map Objects within their &quot;name&quot;, &quot;description&quot; and various interaction components. The LRS MUST return only one language in each of these maps.
- The LRS MAY maintain canonical versions of language maps against any IRI identifying an object containing language maps. This includes the language map stored in the Verb&#39;s &quot;display&quot; property and potentially some language maps used within extensions.
- The LRS MAY maintain a canonical version of any language map and return this when canonical format is used to retrieve Statements. The LRS MUST return only one language within each language map for which it returns a canonical map.
- In order to choose the most relevant language, the LRS MUST apply the &quot;Accept-Language&quot; header as described in [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html) (HTTP 1.1), except that this logic MUST be applied to each language map individually to select which language entry to include, rather than to the resource (list of Statements) as a whole.

##### Voided Statements

Section 1.2.5 describes the process by which Statements can be voided. This section describes how voided Statements are handled by the LRS when queried via a GET request.

Learning Record Providers can identify the presence and Statement id of any voided Statements by the target of the voiding Statement.

###### Requirements

- The LRS MUST not return any Statement which has been voided, unless that Statement has been requested by voidedStatementId. The process described in [the section on filter conditions for StatementRefs](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Communication.md#queryStatementRef) is no exception to this requirement. The process of retrieving voiding Statements is to request each individually by voidedStatementId.
- The LRS MUST still return any Statements targeting the voided Statement, following the process and conditions described in [the section on filter conditions for StatementRefs](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Communication.md#queryStatementRef). This includes the voiding Statement, which cannot be voided.

1.1.6.2 State Resource (/activities/state)

A place to store information about the state of an activity in a generic form called a document. The intent of this resource is to store/retrieve a specific agent&#39;s data within a specific activity, potentially tied to a registration. The semantics of the LRS response are driven by the presence of a &quot;stateId&quot; parameter. If it is included, the GET and DELETE methods will act upon a single defined state document identified by &quot;stateId&quot;. Otherwise, GET will return the available ids, and DELETE will delete all state in the context given through the other parameters. This resource has [Concurrency](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Communication.md#concurrency) controls associated with it.

Example resource location/endpoint: [http://example.com/xAPI/activities/state](http://example.com/xAPI/activities/state)

**PUT Request:**

**Summary:** Stores a single document with the given id.

**Body:**  The document object to be stored.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with this state. | Required |
| agent | Agent Object (JSON) | The Agent associated with this state. | Required |
| registration | UUID | The registration associated with this state. | Optional |
| stateId | String | The id for this state, within the given context. | Required |

**POST Request:**

**Summary:** Updates/stores a single document with the given id.

**Body:**  The document object to be stored/updated.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with this state. | Required |
| agent | Agent Object (JSON) | The Agent associated with this state. | Required |
| registration | UUID | The registration associated with this state. | Optional |
| stateId | String | The id for this state, within the given context. | Required |

When an LRS receives a POST request with content type application/json for an existing document also of content type application/json, it MUST merge the posted document with the existing document. In this context, merge is defined as:

- de-serialize the Objects represented by each document.
- for each property directly defined on the Object being posted, set the corresponding property on the existing Object equal to the value from the posted Object.
- store any valid json serialization of the existing Object as the document referenced in the request.

Note that only top-level properties are merged, even if a top-level property is an Object. The entire contents of each original property are replaced with the entire contents of each new property.

- If the document being posted or any existing document does not have a Content-Type of application/json, or if either document cannot be parsed as a JSON Object, the LRS MUST respond with HTTP status code 400 Bad Request, and MUST NOT update the target document as a result of the request.
- If the merge is successful, the LRS MUST respond with HTTP status code 204 No Content.

**(Single Document) GET Request:**

**Summary:** Fetches a single document with the given id.

**Body:**  None.

**Returns:**  200, The State Document

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with this state. | Required |
| agent | Agent Object (JSON) | The Agent associated with this state. | Required |
| registration | UUID | The registration associated with this state. | Optional |
| stateId | String | The id for this state, within the given context. | Required unless since parameter is present. In that case, Not Allowed. |
| since | Timestamp | Do not use for single document GET request. | Optional if stateId is not used. If the stateId parameter is included, Not Allowed. |

- The LRS MUST include a &quot;Last-Modified&quot; header indicating when the document was last modified.

**(Single Document) DELETE Request:**

**Summary:** Deletes a single document with the given id.

**Body:**  None.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with this state. | Required |
| agent | Agent Object (JSON) | The Agent associated with this state. | Required |
| registration | UUID | The registration associated with this state. | Optional |
| stateId | String | The id for this state, within the given context. | Required |

(Multiple Document) GET Request:

**Summary:** Fetches State ids of all state data for this context (Activity + Agent [+ registration if specified]). If &quot;since&quot; parameter is specified, this is limited to entries that have been stored or updated since the specified timestamp (exclusive).

**Body:**  None.

**Returns:**  200, Array of State ids

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with these states. | Required |
| agent | Agent object (JSON) | The Agent associated with these states. | Required |
| registration | UUID | The Registration associated with these states. | Optional |
| stateId | String | Do not use for Multiple Document GET request. | Required unless since parameter is present. In that case, Not Allowed. |
| since | Timestamp | Only ids of states stored since the specified Timestamp (exclusive) are returned. | Optional as long as stateId is not used. If the stateId parameter is included, Not Allowed. |

(Multiple Document) DELETE Request:

**Summary:** Deletes all state data for this context (Activity + Agent [+ registration if specified]).

**Body:**  None.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with these states. | Required |
| agent | Agent object (JSON) | The Agent associated with these states. | Required |
| registration | UUID | The Registration associated with these states. | Optional |

1.1.6.3 Agents Resource (/agents)

The Agents Resource provides a method to retrieve a special Object with combined information about an Agent derived from an outside service, such as a directory service. This resource has [Concurrency](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Communication.md#concurrency) controls associated with it. This object is called a &quot;Person Object&quot;. The Person Object is very similar to an Agent Object, but instead of each attribute having a single value, each attribute has an array value, and it is legal to include multiple identifying properties. This is different from the FOAF concept of person, person is being used here to indicate a person-centric view of the LRS Agent data, but Agents just refer to one persona (a person in one context).

Example resource location/endpoint: [http://example.com/xAPI/agents](http://example.com/xAPI/agents)

GET Request:

**Summary:** Return a Person Object for a specified Agent.

**Body:**  None.

**Returns:**  200 OK, Person Object

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| agent | Agent object (JSON) | The Agent representation to use in fetching expanded Agent information. | Required |

######


###### Person Object Details

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | Person | Required |
| name | Array of strings. | List of names of Agents retrieved. | Optional |
| [mbox](http://xmlns.com/foaf/spec/#term_mbox) | Array of IRIs in the form &quot;mailto:email address&quot;. | List of e-mail addresses of Agents retrieved. | Optional |
| [mbox\_sha1sum](http://xmlns.com/foaf/spec/#term_mbox_sha1sum) | Array of strings. | List of the SHA1 hashes of mailto IRIs (such as go in an mbox property). | Optional |
| openid\* | Array of strings. | List of openids that uniquely identify the Agents retrieved. | Optional |
| account\* | Array of account objects. | List of accounts to match. Complete account Objects (homePage and name) MUST be provided. | Optional |

- If an LRS does not have any additional information about an Agent to return, the LRS MUST still return a Person Object when queried, but that Person Object will only include the information associated with the requested Agent.

- All array properties MUST be populated with members with the same definition as the similarly named property from Agent Objects.

1.1.6.4 Activities Resource (/activities)

The Activities Resource provides a method to retrieve a full description of an Activity from the LRS. This resource has [Concurrency](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Communication.md#concurrency) controls associated with it.

Example resource location/endpoint: [http://example.com/xAPI/activities](http://example.com/xAPI/activities)

GET Request:

**Summary:** Fetches the complete Activity Object specified.

**Body:**  None.

**Body:**  None.

**Returns:**  200 OK, Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The id associated with the Activities to load. | Required |

- If an LRS does not have a canonical definition of the Activity to return, the LRS MUST still return an Activity Object when queried.

1.1.6.5 Agent Profile Resource (/agents/profile)

A place to store information about an Agent in a generic form called a document. This information is not tied to an activity or registration. The semantics of the LRS response are driven by the presence of a &quot;profileId&quot; parameter. If it is included, the GET and method will act upon a single defined profile document identified by &quot;ProfileId&quot;. Otherwise, GET will return the available ids given through the other parameter.

Example resource location/endpoint: [http://example.com/xAPI/agents/profile](http://example.com/xAPI/agents/profile)

PUT Request:

**Summary:** Stores a single document with the given id.

**Body:**  The document to be stored.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| agent | Agent object (JSON) | The Agent associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

POST Request:

**Summary:** Stores/updates a single document with the given id.

**Body:**  The document to be stored/updated.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| agent | Agent object (JSON) | The Agent associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

When an LRS receives a POST request with content type application/json for an existing document also of content type application/json, it MUST merge the posted document with the existing document. In this context, merge is defined as:

- de-serialize the Objects represented by each document.
- for each property directly defined on the Object being posted, set the corresponding property on the existing Object equal to the value from the posted Object.
- store any valid json serialization of the existing Object as the document referenced in the request.

Note that only top-level properties are merged, even if a top-level property is an Object. The entire contents of each original property are replaced with the entire contents of each new property.

- If the document being posted or any existing document does not have a Content-Type of application/json, or if either document cannot be parsed as a JSON Object, the LRS MUST respond with HTTP status code 400 Bad Request, and MUST NOT update the target document as a result of the request.
- If the merge is successful, the LRS MUST respond with HTTP status code 204 No Content.

DELETE Request:

**Summary:** Deletes a single document with the given id.

**Body:**  None.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| agent | Agent object (JSON) | The Agent associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

(Single Document) GET Request:

**Summary:** Fetches a single document with the given id.

**Body:**  None.

**Returns:**  200 OK, the Profile document

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| agent | Agent object (JSON) | The Agent associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

- The LRS MUST include a &quot;Last-Modified&quot; header indicating when the document was last modified.

(Multiple Document) GET Request:

**Summary:** Fetches Profile ids of all Profile documents for an Agent. If &quot;since&quot; parameter is specified, this is limited to entries that have been stored or updated since the specified Timestamp (exclusive).

**Body:**  None.

**Returns:**  200 OK, Array of profileIds.

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| agent | Agent object (JSON) | The Agent associated with this Profile document. | Required |
| since | Timestamp | Only ids of Profiles stored since the specified Timestamp (exclusive) are returned. |
 |

1.1.6.6 Activity Profile Resource (/activities/profile)

A place to store information about an Activity in a generic form called a document. This information is not tied to an Actor or registration. The semantics of the LRS response are driven by the presence of a &quot;profileId&quot; parameter. If it is included, the GET and method will act upon a single defined profile document identified by &quot;ProfileId&quot;. Otherwise, GET will return the available ids given through the other parameter.

Example resource location/endpoint: [http://example.com/xAPI/activities/profile](http://example.com/xAPI/activities/profile)

PUT Request:

**Summary:** Stores a single document with the given id.

**Body:**  The document to be stored.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

POST Request:

**Summary:** Stores/updates a single document with the given id.

**Body:**  The document to be stored/updated.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

When an LRS receives a POST request with content type application/json for an existing document also of content type application/json, it MUST merge the posted document with the existing document. In this context, merge is defined as:

- de-serialize the Objects represented by each document.
- for each property directly defined on the Object being posted, set the corresponding property on the existing Object equal to the value from the posted Object.
- store any valid json serialization of the existing Object as the document referenced in the request.

Note that only top-level properties are merged, even if a top-level property is an Object. The entire contents of each original property are replaced with the entire contents of each new property.

- If the document being posted or any existing document does not have a Content-Type of application/json, or if either document cannot be parsed as a JSON Object, the LRS MUST respond with HTTP status code 400 Bad Request, and MUST NOT update the target document as a result of the request.
- If the merge is successful, the LRS MUST respond with HTTP status code 204 No Content.

DELETE Request:

**Summary:** Deletes a single document with the given id.

**Body:**  None.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

(Single Document) GET Request:

**Summary:** Fetches a single document with the given id.

**Body:**  None.

**Returns:**  200 OK, the Profile document

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

- The LRS MUST include a &quot;Last-Modified&quot; header indicating when the document was last modified.

(Multiple Document) GET Request:

**Summary:** Fetches Profile ids of all Profile documents for an Activity. If &quot;since&quot; parameter is specified, this is limited to entries that have been stored or updated since the specified Timestamp (exclusive).

**Body:**  None.

**Returns:**  200 OK, Array of profileIds.

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
|
 |
 |
 |
 |
| activityId | Activity id (IRI) | The Activity id associated with these Profile documents. | Required |
| since | Timestamp | Only ids of Profile documents stored since the specified Timestamp (exclusive) are returned. |
 |

1.1.6.7 About Resource (/about)

Returns JSON Object containing information about this LRS, including supported extensions and xAPI version(s).

Example resource location/endpoint: [http://example.com/xAPI/about](http://example.com/xAPI/about)

**GET Request:**

**Body:**  None.

**Returns:**  200 OK, JSON object containing basic metadata about this LRS

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| version | Array of version strings | xAPI versions this LRS supports | Required |
| extensions | [Object](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#miscext) | A map of other properties as needed or supported additional resources (extensions) | Optional |

- An LRS MUST return the JSON document described above, with a &quot;version&quot; property that includes the latest minor and patch version the LRS conforms to, for each major version.
- An LRS MUST NOT reject requests based to this resource on their version header as would otherwise be required by [Versioning](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Communication.md#versioning).

1.1.7 Versioning

Using Semantic Versioning will allow LRPs and LRSs to remain interoperable as the specification changes.

###### Details

xAPI is versioned according to [Semantic Versioning 1.0.0](http://semver.org/spec/v1.0.0.html).
 Every request from an LRP (or other systems that may interact with an LRS) and every response from the LRS includes an HTTP header with the name X-Experience-API-Version and the version as the value. For example, X-Experience-API-Version : 2.0.0 for version 2.0.0;

**Note:**  For patch versions of the specification later than 2.0.0, the &quot;X-Experience-API-Version&quot; header will not match the [statement version property](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#version) which is always 2.0.0 for all 2.0.x versions of the spec. The &quot;X-Experience-API-Version&quot; header enables the LRS and client system to determine the exact patch version of the specification being followed. While no communication incompatibility should arise among 2.0.x versions, there are sometimes clarifications of previously intended behavior.

###### LRS Requirements

- The LRS MUST include the &quot;X-Experience-API-Version&quot; header in every response.
- The LRS MUST set this header to the latest patch version.
- The LRS MUST accept requests with a version header of 2.0 as if the version header was 2.0.0.
- The LRS MUST reject requests with version header prior to version 2.0.0 unless such requests are routed to a fully conformant implementation of a prior version specified in the header.
- The LRS MUST reject requests with a version header of 2.1.0 or greater.
- The LRS MUST make these rejects by responding with a 400 Bad Request error including a short description of the problem.

## 1.1.8 Authentication

###### Rationale

In order to support the varying security requirements of different environments, a specific authentication mechanism is not defined. In practice [HTTP Basic Authentication](http://tools.ietf.org/html/rfc7235) has been very broadly used, so it may be worth considering as a lowest common denominator.

###### Requirements

- The LRS MUST handle making, or delegating, decisions on the validity of Statements, and determining what operations might be performed based on the credentials used (or lack therof).

## 1.1.9 Security

Security is beyond the scope of this document and left to the individual LRS provider as an implementation detail. Implementors are encouraged to follow industry best practices, e.g., [The HTTPS-Only Standard](https://https.cio.gov/) from the office of the White House CIO.

It is possible that security concerns may arise in the implementation of this specification, and implementers might choose to break a conformance requirement for the sake of security. In these cases, implementers are encouraged to consider both the security and interoperability implications of their implementation decisions. In any case, the LRS will still need to be configurable such that it is able to pass conformance tests.

1.2 LRS Data Requirements

The LRS is responsible for handling various data formats described in Section 1.1. This includes following acceptance criteria for those data formats. The most common data format in xAPI is the Statement.

The required field in each of these tables dictates the LRS responsibility in validating data. Required indicates the LRS needs this property and will reject Statements that do not have them. Recommended indicates that the LRS should be given this property, and in some cases will set it itself if it is not provided. Optional indicates that the field may be used as is and the LRS takes no default responsibility if it is not provided. Not Recommended indicates that the LRS should NOT receive this property and instead the LRS should populate the value.

Statement Immutability:

Statements will inevitably be stored in databases. While the methods to PUT/POST and GET them are specific, the storage mechanism is not. JSON has flexibility in form, which means that a reconstruction may not be exact, ordering being a very common example. This document defines only certain aspects of Statements to be immutable. For all intents and purposes, if immutability required fields are equal, then the Statements are equal.

- The LRS shall store, retrieve, and compare Statements in a way that preserves immutability requirements, which includes the following properties with exceptions in parentheses
  - Actor (except the ordering of group members)
  - Verb (except for display)
  - Object
  - Duration (see section on Duration for further requirements)
- The LRS shall specifically NOT consider any of the following for equivalence, nor is it responsible for preservation as described above for the following properties/cases:
  - Case (upper vs. lower)
  - Id
  - Order of any Group Members
  - Authority
  - Stored
  - Timestamp
  - Version
  - Any attachments
  - Any referenced Activity Definitions

1.2.1 Table Guidelines:

Tables in this document represent requirements that shall be followed. It is the responsibility of an LRS to reject requests that contain data that doesn&#39;t follow requirements in these tables. The following requirements are expected to be followed for each table in this section. Note: The &quot;description&quot; portion of table will have requirements, in particular for controlled vocabulary, enumerations, etc.

The LRS SHALL reject any Statement that doesn&#39;t conform to the &quot;Type&quot; field.

An LRS SHALL reject a Statement with additional properties other than extensions in the locations where extensions are allowed

An LRS shall reject a Statement with invalid IRIs

An LRS shall reject a Statement that uses a property more than once

The LRS shall reject Statements:

- missing any required properties
- with any null values (except inside extensions).
- where the wrong data type is used (see tables), for example:
  - with strings where numbers are required, even if those strings contain numbers, or
  - with strings where booleans are required, even if those strings contain booleans.
- with any non-format-following key or value, including the empty string, where a string with a particular format (such as mailto IRI, UUID, or IRI) is required.
- where the case of a key does not match the case specified in this specification.
- where the case of a value restricted to enumerated values does not match an enumerated value given in this specification exactly.
- where a key or value is not allowed by this specification.
- containing IRL or IRI values without a scheme.

1.2.2 Statement Table

Each Statement in xAPI has the following JSON structure and requirements. Note that properties with type &quot;Object&quot; will have subsequent tables.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| id | UUID | UUID assigned by LRS if not set by the Learning Record Provider. | Recommended |
| [actor](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#actor) | Object | Whom the Statement is about, as an [Agent](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#agent) or [Group](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#group) Object. | Required |
| [verb](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#verb) | Object | Action taken by the Actor. | Required |
| [object](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#object) | Object | Activity, Agent, or another Statement that is the Object of the Statement. | Required |
| [result](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#result) | Object | Result Object, further details representing a measured outcome. | Optional |
| [context](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#context) | Object | Context that gives the Statement more meaning. Examples: a team the Actor is working with, altitude at which a scenario was attempted in a flight simulator. | Optional |
| [timestamp](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamp) | [Timestamp](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamps) | Timestamp of when the events described within this Statement occurred (it can represent any point during an experience, not necessarily the beginning or end). Set by the LRS if not provided. | Optional |
| [stored](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#stored) | [Timestamp](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamps) | Timestamp of when this Statement was recorded. Set by LRS. | Not Recommended |
| [authority](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#authority) | Object | Agent or Group who is asserting this Statement is true. Verified by the LRS based on authentication. Set by LRS if not provided or if a strong trust relationship between the Learning Record Provider and LRS has not been established. | Optional |
| [version](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#version) | Version | The Statement&#39;s associated xAPI version, formatted according to [Semantic Versioning 1.0.0](http://semver.org/spec/v1.0.0.html). | Not Recommended |
| [attachments](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#attachments) | Ordered array of Attachment Objects | Headers for Attachments to the Statement | Optional |

1.2.2.1 Actor Tables

Actors can take on the form of either Groups or Agents. Groups can be identified, and if they are not, are considered to be anonymous groups. Specific requirements are found in the tables below.

**Actor as Agent Table –** An actor property that that implements an Agent has the following JSON structure and requirements:

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | Value is &quot;Agent&quot;. This property is optional except when the Agent is used as a Statement&#39;s object. | Optional (except when it is to be used in a Statement Object) |
| name | String | Full name of the Agent. | Optional |
| [mbox](http://xmlns.com/foaf/spec/#term_mbox) | mailto IRI | The required format is &quot;mailto:email address&quot;.
 Only email addresses that have only ever been and will ever be assigned to this Agent, but no others, SHOULD be used for this property and mbox\_sha1sum. | Exactly One of mbox, mbox\_sha1sum, openid, account is required |
| [mbox\_sha1sum](http://xmlns.com/foaf/spec/#term_mbox_sha1sum) | String | The hex-encoded SHA1 hash of a mailto IRI (i.e. the value of an mbox property). An LRS MAY include Agents with a matching hash when a request is based on an mbox. | Exactly One of mbox, mbox\_sha1sum, openid, account is required |
| openid | URI | An openID that uniquely identifies the Agent. | Exactly One of mbox, mbox\_sha1sum, openid, account is required |
| account | [Object](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#agentaccount) | A user account on an existing system e.g. an LMS or intranet. | Exactly One of mbox, mbox\_sha1sum, openid, account is required |

**Actor as Anonymous Group Table –** An actor property that that implements a Group, if implemented with the following requirements, will do so as an Anonymous Group.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | Group. | Required |
| name | String | Name of the Group. | Optional |
| member | Array of [Agent Objects](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#agent) | The members of this Group. This is an unordered list. | Required |

**Actor as Identified Group Table –** An actor property that that implements a Group, if implemented with the following requirements, will do so as an Identified Group.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | Group. | Required |
| name | String | Name of the Group. | Optional |
| member | Array of [Agent Objects](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#agent) | The members of this Group. This is an unordered list. | Optional |
| [mbox](http://xmlns.com/foaf/spec/#term_mbox) | mailto IRI | The required format is &quot;mailto:email address&quot;.
 Only email addresses that have only ever been and will ever be assigned to this Agent, but no others, SHOULD be used for this property and mbox\_sha1sum. | Exactly One of mbox, mbox\_sha1sum, openid, account is required |
| [mbox\_sha1sum](http://xmlns.com/foaf/spec/#term_mbox_sha1sum) | String | The hex-encoded SHA1 hash of a mailto IRI (i.e. the value of an mbox property). An LRS MAY include Agents with a matching hash when a request is based on an mbox. | Exactly One of mbox, mbox\_sha1sum, openid, account is required |
| openid | URI | An openID that uniquely identifies the Agent. | Exactly One of mbox, mbox\_sha1sum, openid, account is required |
| account | [Object](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#agentaccount) | A user account on an existing system e.g. an LMS or intranet. | Exactly One of mbox, mbox\_sha1sum, openid, account is required |

**Account Table –** Actors (Agents and Groups, including when they are Objects) may use the Account Object (as demonstrated in previous tables). If used, the properties of that Account Object are:

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| homePage | IRL | The canonical home page for the system the account is on. This is based on FOAF&#39;s accountServiceHomePage. | Required |
| name | String | The unique id or name used to log in to this account. This is based on FOAF&#39;s accountName. | Required |

1.2.2.2 Verb Table

Verbs appear in Statements as Objects consisting of an IRI and a set of display names corresponding to multiple languages or dialects which provide human-readable meanings of the Verb. The table below lists all properties of the Verb Object.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| id | IRI | Corresponds to a Verb definition. Each Verb definition corresponds to the meaning of a Verb, not the word. | Required |
| display | [Language Map](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-map) | The human readable representation of the Verb in one or more languages. This does not have any impact on the meaning of the Statement, but serves to give a human-readable display of the meaning already determined by the chosen Verb. | Recommended |

1.2.2.3 Object Table:

Objects in xAPI vary widely in use and are classified in that use by the objectType property. Each of the following sections provides additional requirements that stem from the use of objectType.

The LRS shall treat any Object without an objectType as though the value was &quot;Activity&quot;.

**Object As Activity Table –** An Object property if implemented with the following requirements, will do so as an Activity. There are many sub-properties to Objects.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | MUST be Activity when present | Optional |
| [id](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#acturi) | IRI | An identifier for a single unique Activity | Required |
| [definition](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#actdef) | Object | Metadata | Optional |

**Definition (from Object as Activity) Table –** All properties are optional, but if implemented, some properties in sub-properties will have requirements.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| name | [Language Map](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-maps) | The human readable/visual name of the Activity | Recommended |
| description | [Language Map](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-maps) | A description of the Activity | Recommended |
| type | IRI | The type of Activity. | Recommended |
| moreInfo | IRL | Resolves to a document with human-readable information about the Activity, which could include a way to launch the activity. | Optional |
| [I](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#actdef)[nteraction](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#actdef) Activities | Object | Interaction definitions | Optional |
| extensions | Object | A map of other properties as needed (see: [Extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#miscext)) | Optional |

**Interaction Activities (from Object as Activity) Table –** If implemented, the Interaction Activities Property follows this table:

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| interactionType | String | The type of interaction. Possible values are: true-false, choice, fill-in, long-fill-in, matching, performance, sequencing, likert, numeric or other. | Required |
| correctResponsesPattern | Array of Strings | A pattern representing the correct response to the interaction. The structure of this pattern varies depending on the interactionType. This is detailed below. | Optional |
| choices | scale | source | target | steps | Array of interaction components | Specific to the given interactionType (see below). | Optional |

**Interactions, Expanded (part of the Interaction Activities Table) –** The interactionType is controlled vocabulary. Based on the term used, the data formatting and purpose changes according to the following table.

| **interactionType** | **Description** | **Format** |
| --- | --- | --- |
| true-false | An interaction with two possible responses: true or false. | Either true or false |
| choice | An interaction with a number of possible choices from which the learner can select. This includes interactions in which the learner can select only one answer from the list and those where the learner can select multiple items. | A list of item ids delimited by [,]. If the response contains only one item, the delimiter MUST not be used. |
| fill-in | An interaction which requires the learner to supply a short response in the form of one or more strings of characters. Typically, the correct response consists of part of a word, one word or a few words. &quot;Short&quot; means that the correct responses pattern and learner response strings will normally be 250 characters or less. | A list of responses delimited by [,]. If the response contains only one item, the delimiter MUST not be used. |
| long-fill-in | An interaction which requires the learner to supply a response in the form of a long string of characters. &quot;Long&quot; means that the correct responses pattern and learner response strings will normally be more than 250 characters. | A list of responses delimited by [,]. If the response contains only one item, the delimiter MUST not be used. |
| matching | An interaction where the learner is asked to match items in one set (the source set) to items in another set (the target set). Items do not have to pair off exactly and it is possible for multiple or zero source items to be matched to a given target and vice versa. | A list of matching pairs, where each pair consists of a source item id followed by a target item id. Items can appear in multiple (or zero) pairs. Items within a pair are delimited by [.]. Pairs are delimited by [,]. |
| performance | An interaction that requires the learner to perform a task that requires multiple steps. | A list of steps containing a step ids and the response to that step. Step ids are separated from responses by [.]. Steps are delimited by [,]. The response can be a String as in a fill-in interaction or a number range as in a numeric interaction. |
| sequencing |
 An interaction where the learner is asked to order items in a set.
 | An ordered list of item ids delimited by [,]. |
| likert | An interaction which asks the learner to select from a discrete set of choices on a scale |
 A single item id
 |
| numeric | Any interaction which requires a numeric response from the learner. | A range of numbers represented by a minimum and a maximum delimited by [:]. Where the range does not have a maximum or does not have a minimum, that number is omitted but the delimiter is still used. E.g. [:]4 indicates a maximum for 4 and no minimum. Where the correct response or learner&#39;s response is a single number rather than a range, the single number with no delimiter MAY be used. |
| other | Another type of interaction that does not fit into those defined above. | Any format is valid within this string as appropriate for the type of interaction. |

The Correct Responses Pattern contains an array of response patterns. A learner&#39;s response will be considered correct if it matches  **any**  of the response patterns in that array. Where a response pattern is a delimited list, the learner&#39;s response is only considered correct if  **all**  of the items in that list match the learner&#39;s response.

###### Characterstring parameters

Some of the values within the responses described above can be prepended with certain additional parameters. These parameters are represented by the format {parameter=value}. See [the long-fill-in example within Appendix C](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#long-fill-in).

Characterstring parameters are not validated by the LRS. Systems interpreting Statement data can use their best judgement in interpreting (or ignoring) invalid characterstring parameters and values.

The following parameters are valid at the start of the string representing the list of items for the listed interaction types:

| **Parameter** | **Default** | **Description** | **Value** | **Interaction types** |
| --- | --- | --- | --- | --- |
| case\_matters | false | Whether or not the case of items in the list matters. | true or false | fill-in, long-fill-in |
| order\_matters | true | Whether or not the order of items in the list matters. | true or false | fill-in, long-fill-in, performance |

The following parameters are valid at the start of each item in the list for the listed interaction types:

| **Parameter** | **Description** | **Value** | **Interaction types** |
| --- | --- | --- | --- |
| lang | The language used within the item. | [RFC 5646 Language Tag](http://tools.ietf.org/html/rfc5646) | fill-in, long-fill-in, performance (String responses only) |

**Interaction Components, Expanded (part of the Interaction Activities Table) –**

Depending on interactionType, Interaction Activities can take additional properties, each containing a list of interaction components. These additional properties are called &quot;interaction component lists&quot;. The following table shows the supported interaction component list(s) for an Interaction Activity with the given interactionType.

| **interactionType** | **Interaction Component Lists** | **Description** |
| --- | --- | --- |
| choice, sequencing | choices | A list of the options available in the interaction for selection or ordering. |
| likert | scale | A list of the options on the likert scale. |
| matching | source, target | Lists of sources and targets to be matched. |
| performance | steps | A list of the elements making up the performance interaction. |
| true-false, fill-in, long-fill-in, numeric, other | [No component lists supported] | None |

Regardless of interactionType, each Component List has the following additional properties:

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| id | String | Identifies the interaction component within the list. | Required |
| description | [Language Map](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-maps) | A description of the interaction component (for example, the text for a given choice in a multiple-choice interaction) | Optional |

**Object As Actor Table –** See **Actor as Agent Table**. An Object property, if implemented with the following requirements, will do so as an Actor or Agent.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | MUST be Agent or Group when present | Required |
| [id](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#acturi) | IRI | An identifier for a single unique Activity | Required |
| [definition](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#actdef) | Object | Metadata | Optional |

**Object As Statement Table –** An Object property, if implemented with the following requirements, will do so as a Statement Reference (StatementRef).

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | In this case, MUST be StatementRef. | Required |
| id | UUID | The UUID of a Statement. | Required |

**Object As Sub-Statement Table –** An Object property, if implemented with the following requirements, will do so as a Sub-Statement

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | In this case, MUST be SubStatement. | Required |
| [actor](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#actor) | Object | Whom the Statement is about, as an [Agent](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#agent) or [Group](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#group) Object. | Required |
| [verb](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#verb) | Object | Action taken by the Actor. | Required |
| [object](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#object) | Object | Activity, Agent, or another Statement that is the Object of the Statement. | Required |
| [result](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#result) | Object | Result Object, further details representing a measured outcome. | Optional |
| [context](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#context) | Object | Context that gives the Statement more meaning. Examples: a team the Actor is working with, altitude at which a scenario was attempted in a flight simulator. | Optional |
| [timestamp](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamp) | [Timestamp](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamps) | Timestamp of when the events described within this Statement occurred (it can represent any point during an experience, not necessarily the beginning or end). Set by the LRS if not provided. | Optional |
| [attachments](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#attachments) | Ordered array of Attachment Objects | Headers for Attachments to the Statement | Optional |

1.2.2.4 Result Table

Represents a measured outcome related to the Statement in which it is included.

**Result Table:** The table below lists all properties of the Result Object.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| score | Object | The score of the Agent in relation to the success or quality of the experience. [See: Score](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#Score) | Optional |
| success | Boolean | Indicates whether or not the attempt on the Activity was successful. | Optional |
| completion | Boolean | Indicates whether or not the Activity was completed. | Optional |
| response | String | A response appropriately formatted for the given Activity. | Optional |
| duration | [Duration](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#durations) | Period of time over which the Statement occurred. | Optional |
| extensions | Object | A map of other properties as needed. [See: Extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#miscext) | Optional |

**Score Table –** Represents the outcome of a graded Activity achieved by an Agent. The table below lists all properties of the Score Object.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| scaled | Decimal number between -1 and 1, inclusive | The score related to the experience as modified by scaling and/or normalization. | Recommended |
| raw | Decimal number between min and max (if present, otherwise unrestricted), inclusive | The score achieved by the Actor in the experience described by the Statement. This is not modified by any scaling or normalization. | Optional |
| min | Decimal number less than max (if present) | The lowest possible score for the experience described by the Statement. | Optional |
| max | Decimal number greater than min (if present) | The highest possible score for the experience described by the Statement. | Optional |

1.2.2.5 Context Table:

Property to add contextual information to a Statement. It can store information such as the instructor for an experience, if this experience happened as part of a team-based Activity, or how an experience fits into some broader activity.

**Context Table –** The table below lists all properties of the context Object.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| registration | UUID | The registration that the Statement is associated with. | Optional |
| instructor | Agent (MAY be a Group) | Instructor that the Statement relates to, if not included as the Actor of the Statement. | Not Recommended |
| team | Group | Team that this Statement relates to, if not included as the Actor of the Statement. | Not Recommended |
| contextActivities | contextActivities Object | A map of the types of learning activity context that this Statement is related to. Every key in the contextActivities Object MUST be one of &quot;parent&quot;, &quot;grouping&quot;, &quot;category&quot;, or &quot;other&quot;.Every value in the contextActivities Object MUST be either a single Activity Object or an array of Activity Objects. | Optional |
| contextAgents | Array of contextAgent Objects | Collection of Objects describing relationship(s) between Agent(s) and the current Statement. Zero or more Activity Type IRIs are used to categorize these relationship(s) | Optional |
| contextGroups | Array of contextGroup Objects | Collection of Objects describing relationship(s) between Identified or Anonymous Group(s) and the current Statement. Zero or more Activity Type IRIs are used to categorize these relationship(s) | Optional |
| revision | String | Revision of the learning activity associated with this Statement. Format is free. | Optional |
| platform | String | Platform used in the experience of this learning activity. | Optional |
| language | String (as defined in [RFC 5646](http://tools.ietf.org/html/rfc5646)) | Code representing the language in which the experience being recorded in this Statement (mainly) occurred in, if applicable and known. | Optional |
| statement | [Statement Reference](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#stmtref) | Another Statement to be considered as context for this Statement. | Optional |
| extensions | Object | A map of any other domain-specific context relevant to this Statement. For example, in a flight simulator altitude, airspeed, wind, attitude, GPS coordinates might all be relevant ([See Extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#miscext)) | Optional |

NOTE: With the addition of context agents and context groups, it is recommended not to use instructor or team. They are supported in this document for backward compatibility purposes.

**Context Agents and Groups Details:**

A single Statement may require the inclusion of many contextually relevant Agent(s) and/or Group(s) in order to properly describe an experience. When this is the case, the relationship between the Agent(s) and/or Group(s) and the Statement itself needs to be represented in a structured manner. The context properties contextAgents and contextGroups serve as this structure.

- Inclusion of contextAgents within a Statement establishes that a relationship exists between said Statement and one or more Agent(s)
- Inclusion of contextGroups within a Statement establishes that a relationship exists between said Statement and one or more Group(s)
- Zero or more Activity Types are used to categorize each Statement specific relationship
- Each Statement specific relationship corresponds to an individual contextAgents or contextGroups Object

The relationship established by each contextAgents and contextGroups Object is limited in scope to the Statement in which the Object is found. In general, an Agent many have permanent characteristics, characteristics which are consistent across experiences, but these kinds of Agent specific properties should be captured in an Agent Profile

All Objects found within the contextAgents and/or contextGroups array(s) are independent of one another.

**Context Agents Table:**

Each contextAgent Object found within a contextAgents array has the following properties.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | contextAgent | Required |
| agent | Agent Object | A single Agent Object for which a Statement specific relationship is being defined | Required |
| relevantTypes | Array of Activity &quot;type&quot; IRIs | A collection of 1 or more Activity Type(s) used to characterize the relationship between the Statement and the Agent. If not provided, only a generic relationship is intended (not recommended) | Optional |

- Any and All valid Agent Objects can be used as the agent within a contextAgent Object.
- An Agent Object does NOT need to be found within any other Statement property in order to be included as the agent property within a contextAgent Object.
- Any and All valid Activity Type IRIs can be included within the relevantTypes array of a contextAgent Object.
- An Activity Type IRI does NOT need to be found within any other Statement property in order to be included within the relevantTypes property of a contextAgent Object

**Context Group Table:**

Each contextGroup Object found within a contextAgents array has the following properties.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | contextGroup | Required |
| Group | Group (Follow requirements in linked section to specify Group type and description) | A single Group Object for which a Statement specific relationship is being defined. | Required |
| relevantTypes | Array of Activity &quot;type&quot; IRIs | A collection of 1 or more Activity Type(s) used to characterize the relationship between the Statement and the Agent. If not provided, only a generic relationship is intended (not recommended) | Optional |

- Any and All valid Group Objects can be used as the group within a contextGroup Object
- A Group Object does NOT need to be found within any other Statement property in order to be included as the group property within a contextGroup Object.
- Any and All valid Activity Type IRIs can be included within the relevantTypes array of a contextAgent Object.
- An Activity Type IRI does NOT need to be found within any other Statement property in order to be included within the relevantTypes property of a contextAgent Object

1.2.2.6 Attachments

In some cases an Attachment is logically an important part of a Learning Record. It could be an essay, a video, etc. Another example of such an Attachment is (the image of) a certificate that was granted as a result of an experience.

**Attachments Table –** The table below lists all properties of the context Object.

| **Property** | **Type** | **Description** | **Required** | **Corresponding Request Parameter** |
| --- | --- | --- | --- | --- |
| usageType | IRI | Identifies the usage of this Attachment. For example: one expected use case for Attachments is to include a &quot;completion certificate&quot;. An IRI corresponding to this usage MUST be coined, and used with completion certificate attachments. | Required |
 |
| display | [Language Map](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-maps) | Display name (title) of this Attachment. | Required |
 |
| description | [Language Map](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-maps) | A description of the Attachment | Optional |
 |
| contentType | [Internet Media Type](https://www.ietf.org/rfc/rfc2046.txt?number=2046) | The content type of the Attachment. | Required | Content-Type |
| length | Integer | The length of the Attachment data in octets. | Required | Content-Length |
| sha2 | String | The SHA-2 hash of the Attachment data.
 This property is always required, even if fileURL is also specified. | Required | X-Experience-API-Hash |
| fileUrl | IRL | An IRL at which the Attachment data can be retrieved, or from which it used to be retrievable. | Optional |
 |

1.2.3 Metadata

Metadata is additional information about a resource. It enables decision making, search, and discoverability. In xAPI, metadata can be utilized essentially in two ways.

First, metadata is used in the definition property of an Activity Object (the Object when the objectType is Activity). In this case, the metadata is part of the Statement. Other fields, including extensions, can be used as metadata in a similar regard. Including metadata in a Statement allows metadata about the IRI to be expressed without the necessity of resolving it.

Second, metadata may be hosted. In this case, additional information about an identifier can be provided within a Statement and can be hosted at the location pointed to by the identifier IRI. Hosting metadata at the IRI location allows the owner of the IRI to define the canonical metadata for that IRI. This is the main purpose for which IRIs are used in xAPI.

All hosted metadata, including the format, is optional. However, it is recommended that the [Activity Definition Object](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#activity) metadata is followed for hosted Activity identifiers.

For the structure of metadata about all other identifiers, see the format below:

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| name | [Language Map](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-maps) | The human readable/visual name. For Verbs, this is equivalent to the &quot;display&quot; property in a Statement. | Optional |
| description | [Language Map](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-maps) | description | Optional |

Hosted metadata consists of a document containing a JSON object as described above. If this hosted metadata is provided, it is the canonical source of information about the identifier it describes.

##### LRS Recommendations

The following recommendations are made for any LRS that implements resolvable metadata into its data model for querying purposes. This behavior is optional.

- The LRS MAY act as a [Metadata Consumer](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-About.md#def-metadata-consumer) and attempt to resolve identifier IRIs.
- If an Activity IRI is a URL, an LRS SHOULD attempt to GET that URL, and include in HTTP headers: Accept: application/json, \*/\*. This SHOULD be done as soon as practical after the LRS first encounters the Activity id.
- Upon loading JSON which is a valid Activity Definition from a URL used as an Activity id, an LRS SHOULD incorporate the loaded definition into its canonical definition for that Activity, while preserving names or definitions not included in the loaded definition.
- Upon loading any document from which the LRS can parse an Activity Definition from a URL used as an Activity id, an LRS MAY consider this definition when determining its canonical representation of that Activity&#39;s definition.

1.2.4 LRS Processing of Data

An LRS functions as a gatekeeper for xAPI Data. Statements, in particular, are highly structured and have many requirements. Statements are expected to be unique and to be immutable. In this regard they are unchangeable and should not be deleted. This section outlines requirements that focus on storage and retrieval of Statements, including the rejection cases for Statements.

1.2.4.1 LRS Rejection Cases

It is useful to note that an LRS can reject Statements for many reasons not specified in this document and doesn&#39;t have to perpetually keep data beyond normal processes. This specification is not intended to usurp security, authority, or data management processes.

The following requirements have to do with rejection/acceptance in such cases:

- The LRS SHOULD reject entire batches of Statements if sent from an unauthorized source
- An LRS MAY NOT reject a Statement solely based on the order of properties
- The LRS shall not reject a Statement that uses the voided verb if it cannot find the id of the Object of that Statement (nor does the LRS have to try to find it)
- An LRS SHOULD NOT reject a Statement based on size of individual properties
- An LRS MAY reject a Statement if the overall size is too large, contains information not permissible to the environment, or is thought to be malicious
- An LRS MAY choose to not validate IRIs/UUIDs; An LRS is responsible for data format, not values
- An LRS shall NOT reject a timestamp for having a greater value than the current time, within an acceptable margin of error (intentionally not specified in this document)

1.2.4.2 Specific Statement Data Requirements for an LRS

The following requirements apply to specific parts of a component. These requirements involve rejection, creation, conformance to standards, and overwriting of data.

- The LRS MUST NOT return a different serialization of any properties except those [listed as exceptions](https://github.com/adlnet/xAPI-Spec/blob/IEEE/xAPI-Data.md#statement-immutability-and-exceptions).
- The LRS MUST create an &quot;id&quot; property if an accepted Statement doesn&#39;t have one.
- The LRS shall reject Statements if the Actor object contains more than one Inverse Functional Identifier
- The LRS shall reject Statements which use an Agent of type &quot;Group&quot; within the member property of a Group.
- The LRS MUST process and store numbers with at least the precision of IEEE 754 32-bit floating point numbers
- The LRS shall reject a Statement that uses an Interaction Activity without a valid interactionType
- An LRS, upon consuming a valid interactionType, MAY validate the remaining properties as specified for Interaction Activities and MAY return 400 Bad Request if the remaining properties are not valid for the Interaction Activity.
- An interaction component&#39;s id value SHOULD NOT have whitespace.
- The LRS shall reject a Statement with an Object with ObjectType SubStatement that has within it an Object with ObjectType SubStatement.
- The LRS shall set the &quot;timestamp&quot; property to the value of the [&quot;stored&quot; property](https://github.com/adlnet/xAPI-Spec/blob/IEEE/xAPI-Data.md#stored) if not provided.
- The &quot;stored&quot; property MUST be set by the LRS; An LRS SHOULD validate and then MUST overwrite any value currently in the &quot;stored&quot; property of a Statement it receives.
- The LRS MUST ensure that all Statements stored have an authority
- The LRS SHOULD overwrite the authority on all Statements it stores, based on the credentials used to send those Statements.
- When the LRS overwrites the authority, the LRS MUST apply a deterministic process to map the credentials used to store a statement to an authority
- The LRS MAY leave the submitted authority unchanged but SHOULD do so only where a strong trust relationship has been established, and with extreme caution.
- The LRS MUST return every value in the contextActivities Object as an array, even if it arrived as a single Activity Object.
- The LRS MUST return single Activity Objects as an array of length one containing the same Activity.
- An LRS SHOULD NOT reject a Statement that is otherwise valid except the version (property within Statement).

## 1.2.4.3Data Response Recommendations

The following optional recommendations are determined best practices to some of the fringe components of xAPI. This section can be used to detail processes that come up in exceptional cases.

Upon receiving a Statement with an Activity Definition that differs from the one stored, an LRS SHOULD decide whether it considers the Learning Record Provider to have the authority to change the definition and SHOULD update the stored Activity Definition accordingly if that decision is positive.

An LRS MAY make small corrections to its canonical definition for the Activity when receiving a new definition e.g. spelling errors.

An LRS SHOULD NOT make significant changes to its canonical definition for the Activity based on an updated definition e.g. changes to correct responses.

Statements returned by an LRS MUST retain the version they are accepted with. If they lack a version, the version MUST be set to 2.0.0.

An LRS MAY include all necessary information within the &quot;more&quot; property IRL to continue the query to avoid the need to store IRLs and associated query data.

An LRS SHOULD NOT generate extremely long IRLs within the &quot;more&quot; property.

An LRS MAY re-run the query at the point in time that the IRL retrieved from the &quot;more&quot; property is accessed such that the batch retrieved includes Statements which would have been included in that batch if present in the LRS at the time the original query was run and excludes Statements from that batch which have since been voided.

Alternatively, an LRS MAY cache a list of Statements to be returned at the &quot;more&quot; property such that the batch of Statements returned matches those Statements that would have been returned when the original query was run.

An LRS MAY remove voided Statements from the cached list of Statements if using this method.

## 1.2.5 Statement Voiding

Not all Statements are perpetually valid once they have been issued. Mistakes or other factors could dictate that a previously made Statement is marked as invalid. This is called &quot;voiding a Statement&quot; and the reserved Verb http://adlnet.gov/expapi/verbs/voided is used for this purpose. Any Statement that voids another cannot itself be voided.

The LRS shall reject Statements with the verb http://adlnet.gov/expapi/verbs/voided when:

• The objectType property is not &quot;StatementRef&quot;

• Has no &quot;id&quot; for the Object (e.g. no target for voiding)

An LRS MUST consider a Statement it contains voided if and only if the Statement is not itself a voiding Statement and the LRS also contains a voiding Statement referring to the first Statement

Upon receiving a Statement that voids another, the LRS MAY roll back any changes to Activity or Agent definitions which were introduced by the Statement that was just voided.

## 1.2.6 Statement Signing

A Statement can include a digital signature to provide strong and durable evidence of the authenticity and integrity of the Statement.

Signed Statements include a JSON web signature (JWS) as an Attachment. This allows the original serialization of the Statement to be included along with the signature. For interoperability, the &quot;RSA + SHA&quot; series of JWS algorithms have been selected, and for discoverability of the signer X.509 certificates SHOULD be used.

**Statement Signing Process:**

- A Signed Statement MUST include a JSON web signature (JWS) as defined here: [http://tools.ietf.org/html/rfc7515](http://tools.ietf.org/html/rfc7515), as an Attachment with a usageType of http://adlnet.gov/expapi/attachments/signature and a contentType of application/octet-stream.
- JWS Compact Serialization SHALL be used to create the JSON web signature. Use of JWS JSON Serialization is strongly discouraged, is unlikely to be interoperable with other systems, and will be forbidden in a future version of this specification.
- The JWS signature MUST have a payload of a valid JSON serialization of the complete Statement before the signature was added.
- The JWS signature MUST use an algorithm of &quot;RS256&quot;, &quot;RS384&quot;, or &quot;RS512&quot;.
- The JWS signature SHOULD have been created based on the private key associated with an X.509 certificate.
- If X.509 was used to sign, the JWS header SHOULD include the &quot;x5c&quot; property containing the associated certificate chain.

Additional Requirements

- The LRS MUST reject requests to store Statements that contain malformed signatures, with 400 Bad Request.
- The LRS SHOULD include a message in the response of a rejected statement.
- In order to verify signatures are well formed, the LRS MUST do the following:
  - Decode the JWS signature, and load the signed serialization of the Statement from the JWS signature payload.
  - Validate that the original Statement is logically equivalent to the received Statement. See [Statement comparison requirements](https://github.com/adlnet/xAPI-Spec/blob/IEEE/xAPI-Data.md#statement-comparison-requirements).
  - If the JWS header includes an X.509 certificate, validate the signature against that certificate as defined in JWS.
  - Validate that the signature requirements outlined above have been met.

# 1.2.7 Additional Requirements for Data Types

The following section provides guidance and requirements for data types found in this document. Many tables contain specific data types that have requirements found in this section.

**IRIs:**

Internationalized Resource Identifiers, or IRIs, are unique identifiers which could also be resolvable. Because resolving is not a requirement, IRIs/URIs are used instead of IRLs/URLs. In order to allow the greatest flexibility in the characters used in an identifier, IRIs are used instead of URIs as IRIs can contain some characters outside of the ASCII character set.

The LRS has responsibilities in regard to each IRI as outlined below. Activity Definitions have additional rules as shown in Section XXX (will be different for LRS vs. LRP)

- When storing or comparing IRIs, LRSs MUST handle them only by using one or more of the approaches described in [5.3.1 (Simple String Comparison) and 5.3.2 (Syntax-Based Normalization) of RFC 3987](https://tools.ietf.org/html/rfc3987#section-5.3)

**Extensions:**

Extensions are available as part of Activity Definitions, as part of a Statement&#39;s &quot;context&quot; property, or as part of a Statement&#39;s &quot;result&quot; property. In each case, extensions are intended to provide a natural way to extend those properties for some specialized use. The contents of these extensions might be something valuable to just one application, or it might be a convention used by an entire Community of Practice.

Extensions are defined by a map and logically relate to the part of the Statement where they are present. The values of an extension can be any JSON value or data structure. Extensions in the &quot;context&quot; property provide context to the core experience, while those in the &quot;result&quot; property provide elements related to some outcome. Within Activities, extensions provide additional information that helps define an Activity within some custom application or Community of Practice. The meaning and structure of extension values under an IRI key are defined by the person who controls the IRI.

- The LRS MUST reject any Statement where a key of an extensions map is not an IRI.
- An LRS MUST NOT reject a Statement based on the values of the extensions map.

**Language Maps:**

A language map is a dictionary where the key is a [RFC 5646 Language Tag](http://tools.ietf.org/html/rfc5646), and the value is a string in the language specified in the tag. This map SHOULD be populated as fully as possible based on the knowledge of the string in question in different languages.

The shortest valid language code for each language string is generally preferred. The [ISO 639 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php) plus an [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) allows for the designation of basic languages (e.g., es for Spanish) and regions (e.g., es-MX, the dialect of Spanish spoken in Mexico). If only the ISO 639 language code is known for certain, do not guess at the possible ISO 3166-1 country code. For example, if only the primary language is known (e.g., English) then use the top level language tag en, rather than en-US. If the specific regional variation is known, then use the full language code.

**Note:**  For Chinese languages, the significant linguistic diversity represented by zh means that the ISO 639 language code is generally insufficient.

The content of strings within a language map is plain text. It is expected that any formatting code such as HTML tags or markdown will not be rendered, but will be displayed as code when this string is displayed to an end user. An important exception to this is if language map Object is used in an extension and the owner of that extension IRI explicitly states that a particular form of code will be rendered.

- An LRS shall reject a Statement with invalid RFC 5646 language tags (Keys of language maps MUST be sent with valid [RFC 5646](http://tools.ietf.org/html/rfc5646) language tags, for similar reasons
- The LRS MUST at least validate that the sequence of token lengths for language map keys matches the [RFC 5646](http://tools.ietf.org/html/rfc5646) standard)

**UUIDs:**

Universally Unique Identifiers, or UUIDs, are 128-bit values that are globally unique. Unlike IRIs, there is no expectation of resolvability as UUIDs take on a completely different format.

- UUIDs MUST be in the standard string form.
- UUIDS SHOULD use variant 2 in [RFC 4122](http://tools.ietf.org/html/rfc4122).

**Timestamps:**

- An LRS MUST convert Timestamps to UTC rather than rejecting Statements that send Timestamps not in UTC form
- An LRS MAY truncated or round a Timestamp to a precision of at least 3 decimal digits for seconds.

**Duration:**

- The LRS MUST reject a Statement if the duration is not expressed using the format for Duration in ISO 8601:2004(E) section 4.4.3.2.
- An LRS MUST reject Statements with the alternative format (in conformity with the format used for time points and described in ISO 8601:2004(E) section 4.4.3.3). This requirement exists in case of conflicting ISO requirements.
- On receiving a Duration with more than 0.01 second precision, the LRS MUST NOT reject the request but MAY truncate the &quot;duration&quot; property to 0.01 second precision.
- When comparing making a comparison (e.g. as a part of the statement signing process) of Statements in regard to a Duration, any precision beyond 0.01 second precision MUST NOT be included in the comparison.

**Documents:**

Documents are generic constructs made up of only name/value pairs. Document requests are generic with only the following form:

| **Property** | **Type** | **Description** |
| --- | --- | --- |
| id | String | Set by Learning Record Provider, unique within the scope of the Agent or Activity. |
| updated | Timestamp | When the document was most recently modified (HTTP Header). |
| contents | Arbitrary binary data | The contents of the document |

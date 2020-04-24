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
		*	[Appendix B: Table of All Resources](./xAPI-Communication.md#Appendix3B)  
		*	[Appendix C: Cross Domain Request Example](./xAPI-Communication.md#Appendix3C)  


  1. LRP Communication

The LRP interacts with an LRS via RESTful HTTP methods to the resources outlined in this section.  The primary function of the LRP within the xAPI is to create valid Requests to the LRS. All tables in this section are redundant with those listed in Section 1.1 LRS Communication, but are listed here as context such that LRPs can understand what the LRS supports. This section does include LRP requirements that are not seen in Section 1.1. An LRP is just one type of system that interacts with an LRS. Other such interactions are not defined in this Document.

The following table summarizes the Resources with which HTTP methods can interact. Details for what an LRP can expect can be found within Section 2.2 LRS Resources.

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

The LRP is allowed to use the following headers as described in this document.

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

    1. Encoding

All strings MUST be encoded and interpreted as UTF-8.

    1. Content Types

Requests and responses within this specification normally use an application/json content type. Exceptions to this are:

- Documents can have any content type.
- Statement requests that can sometimes include Attachments use the multipart/mixed content type.

#### Application/JSON

The application/JSON content type is used for all requests that do not otherwise specify a content type.

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
  - Where parameters have a corresponding property within the attachment Object and both the parameter and property are specified for a given Attachment, the value of these parameters and properties MUST match.

###### Learning Record Provider Requirements

- A Learning Record Provider MAY send Statements with Attachments as described above.
- A Learning Record Provider MAY send multiple Statements where some or all have Attachments if using POST.
- A Learning Record Provider MAY send batches of type application/json where every attachment Object has a fileUrl, ignoring all requirements based on the &quot;multipart/mixed&quot; format.
- A Learning Record Provider SHOULD use SHA-256, SHA-384, or SHA-512 to populate the &quot;sha2&quot; property.

###### File URL

The File URL is intended to provide a location from which the Attachment can be received. There are, however, no requirements for the owner of the Attachment to make the Attachment data available at the location indefinitely or to make the Attachment publically available without security restrictions. When determining Attachment hosting arrangements, those creating Statements using the &quot;fileUrl&quot; property are encouraged to consider the needs of end recipient(s) of the Statement, especially if the Attachment content is not included with the Statement.

The period of time an Attachment is made available for, and the security restrictions applied to hosted attachments, are out of scope of this specification.

    1. Concurrency

Concurrency control makes certain that a PUT, POST or DELETE does not perform operations based on old data.

##### Details

xAPI uses HTTP 1.1 entity tags ([ETags](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19)) to implement optimistic concurrency control in the following resources, where PUT, POST or DELETE are allowed to overwrite or remove existing data:

- State Resource
- Agent Profile Resource
- Activity Profile Resource

- As LRP making a PUT request to either the Agent Profile Resource or Activity Profile Resource MUST include the &quot;[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)&quot; header or the [If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) header.
- An LRP making a POST request to either the Agent Profile Resource or Activity Profile Resource MUST include the &quot;[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)&quot; header or the [If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) header.
- An LRP making a DELETE request to either the Agent Profile Resource or Activity Profile Resource MUST include the &quot;[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)&quot; header.
- An LRP MUST use the ETag value provided by the LRS rather than calculating it themselves.

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

- A Learning Record Provider SHOULD send an &quot;Accept&quot; header with requests to enable content negotiation.

    1. LRS Resources

Each LRS Resource is described in the following sections. Each Resource has requirements for each of the HTTP methods that may be made to it. Each section will include the expected contents of the body of the request, the request parameters, and the expected returns. If an HTTP method is not described, it is out of scope of this document.

LRPs leverage both Statements and documents as data structures. Statements are highly structured and described in Section 2 (link).An LRP may interact with any of the resources described in this section.

- A Learning Record Provider MAY send documents to any of the Document Resources for Activities and Agents that the LRS does not have prior knowledge of.

**Note:**  In all of the examples in this specification, http://example.com/xAPI/ is the example base endpoint(resource location) of the LRS. All other IRI syntax after this represents the particular resource used.

2.1.6.1 Statement Resource (/statements)

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

###### Learning Record Provider Requirements

- Learning Record Providers SHOULD POST Statements including the Statement &quot;id&quot; property instead of using PUT.
- When PUTing Statements, the &quot;id&quot; property of the Statement SHOULD be used.
- Where provided, the &quot;id&quot; property of the Statement MUST match the &quot;statementId&quot; parameter of the request.

**POST Request:**

**Summary:** Stores a Statement, or a set of Statements.

**Body:**  An array of Statements or a single Statement to be stored.

**Returns:**  200 OK, Array of Statement id(s) (UUID) in the same order as the corresponding stored Statements.

**GET Request:**

**Summary:** Fetches a single Statement or multiple Statements. If the statementId or voidedStatementId parameter is specified a single Statement is returned. Otherwise, a [StatementResult](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#retrieval) Object, a list of Statements in reverse chronological order based on &quot;stored&quot; time, subject to permissions and maximum list length. If additional results are available, an IRL to retrieve them will be included in the StatementResult Object.

| **Parameter** | **Type** | **Default** | **Description** | **Required** |
| --- | --- | --- | --- | --- |
| statementId | String |
 | Id of Statement to fetch | Optional |
| voidedStatementId | String |
 | Id of voided Statement to fetch. see [Voided Statements](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#voided) | Optional |
| agent | Agent or Identified Group Object (JSON) |
 | Filter, only return Statements for which the specified Agent or Group is the Actor or Object of the Statement.
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
| related\_agents | Boolean | false | Apply the Agent filter broadly. Include Statements for which the Actor, Object, Authority, Instructor, Team, or any of these properties in a contained SubStatement match the Agent parameter, instead of that parameter&#39;s normal behavior. Matching is defined in the same way it is for the &quot;agent&quot; parameter. | Optional |
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

##### Voided Statements

[Part Two](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#voided) describes the process by which Statements can be voided. This section describes how voided Statements are handled by the LRS when queried via a GET request.

Learning Record Providers can identify the presence and Statement id of any voided Statements by the target of the voiding Statement.

2.1.6.2 State Resource (/activities/state)

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

- If a Learning Record Provider needs to delete a property, it SHOULD use a PUT request to replace the whole document.

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

2.1.6.3 Agents Resource (/agents)

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

- All array properties MUST be populated with members with the same definition as the similarly named property from Agent Objects.

2.1.6.4 Activities Resource (/activities)

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

2.1.6.5 Agent Profile Resource (/agents/profile)

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

- An LRP making a PUT request to this resource MUST include the &quot;[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)&quot; header or the [If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) header.

POST Request:

**Summary:** Stores/updates a single document with the given id.

**Body:**  The document to be stored/updated.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| agent | Agent object (JSON) | The Agent associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

- If a Learning Record Provider needs to delete a property, it SHOULD use a PUT request to replace the whole document.
- An LRP making a POST request to this resource MUST include the &quot;[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)&quot; header or the [If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) header.

DELETE Request:

**Summary:** Deletes a single document with the given id.

**Body:**  None.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| agent | Agent object (JSON) | The Agent associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

- An LRP making a DELETE request to this resource SHOULD\* include the &quot;[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)&quot; header.

(Single Document) GET Request:

**Summary:** Fetches a single document with the given id.

**Body:**  None.

**Returns:**  200 OK, the Profile document

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| agent | Agent object (JSON) | The Agent associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

(Multiple Document) GET Request:

**Summary:** Fetches Profile ids of all Profile documents for an Agent. If &quot;since&quot; parameter is specified, this is limited to entries that have been stored or updated since the specified Timestamp (exclusive).

**Body:**  None.

**Returns:**  200 OK, Array of profileIds.

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| agent | Agent object (JSON) | The Agent associated with this Profile document. | Required |
| since | Timestamp | Only ids of Profiles stored since the specified Timestamp (exclusive) are returned. |
 |

2.1.6.6 Activity Profile Resource (/activities/profile)

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

- An LRP making a PUT request to this resource MUST include the &quot;[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)&quot; header or the [If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) header.

POST Request:

**Summary:** Stores/updates a single document with the given id.

**Body:**  The document to be stored/updated.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

- If a Learning Record Provider needs to delete a property, it SHOULD use a PUT request to replace the whole document.
- An LRP making a POST request to this resource MUST include the &quot;[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)&quot; header or the [If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) header.

DELETE Request:

**Summary:** Deletes a single document with the given id.

**Body:**  None.

**Returns:**  204 No Content

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

- An LRP making a DELETE request to this resource SHOULD\* include the &quot;[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)&quot; header.

(Single Document) GET Request:

**Summary:** Fetches a single document with the given id.

**Body:**  None.

**Returns:**  200 OK, the Profile document

| **Parameter** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| activityId | Activity id (IRI) | The Activity id associated with this Profile document. | Required |
| profileId | String | The profile id associated with this Profile document. | Required |

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

2.1.6.7 About Resource (/about)

Returns JSON Object containing information about this LRS, including supported extensions and xAPI version(s).

Example resource location/endpoint: [http://example.com/xAPI/about](http://example.com/xAPI/about)

**GET Request:**

**Body:**  None.

**Returns:**  200 OK, JSON object containing basic metadata about this LRS

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| version | Array of version strings | xAPI versions this LRS supports | Required |
| extensions | [Object](https://github.com/adlnet/xAPI-Spec/blob/dev/xAPI-Data.md#miscext) | A map of other properties as needed or supported additional resources (extensions) | Optional |

2.1.7 Versioning

Using Semantic Versioning will allow LRPs to remain interoperable as the specification changes.

Every request to the LRS and every response from the LRS MUST include an HTTP header with the name X-Experience-API-Version and the version as the value. For example, X-Experience-API-Version : 2.0.0 for version 2.0.0;

###### LRP Requirements

- The LRP MUST include the &quot;X-Experience-API-Version&quot; header in every request.
- The LRP MUST set this header to the latest patch version.

######


## 2.1.8 Authentication

###### Rationale

In order to support the varying security requirements of different environments, a specific authentication mechanism is not defined. In practice [HTTP Basic Authentication](http://tools.ietf.org/html/rfc7235) has been very broadly used, so it may be worth considering as a lowest common denominator.

###### Requirements

- The LRS MUST handle making, or delegating, decisions on the validity of Statements, and determining what operations might be performed based on the credentials used (or lack therof).

## 2.1.9 Security

Security is beyond the scope of this document and left to the individual LRS provider as an implementation detail. Implementors are encouraged to follow industry best practices, e.g., [The HTTPS-Only Standard](https://https.cio.gov/) from the office of the White House CIO.

It is possible that security concerns may arise in the implementation of this specification, and implementers might choose to break a conformance requirement for the sake of security. In these cases, implementers are encouraged to consider both the security and interoperability implications of their implementation decisions. In any case, the LRS will still need to be configurable such that it is able to pass conformance tests.

2.2 LRP Data Requirements

The LRP is responsible for creation of various data formats described in Section 2.1. The most common data format in xAPI is the Statement.

An LRP MUST NOT use a property in a Statement more than one time

The required field in each of these tables dictates the LRP responsibility in creating data. Required indicates the LRP MUST include this property in the format supplied. Recommended indicates that the LRP SHOULD create the property, many of which will be set by the LRS if not provided. Optional indicates that the field may be used by an LRP, but the LRS takes no default responsibility if it is not provided. Not Recommended indicates that the LRP SHOULD NOT use this property and instead the LRS should populate the value.

Statement Immutability:

Statements will be inevitably be stored in databases. While the methods to PUT/POST and GET them are specific, the storage mechanism is not. JSON has flexibility in form, which means that a reconstruction may not be exact, ordering being a very common example. This document defines only certain aspects of Statements to be immutable. For all intents and purposes, if immutability required fields are equal, then the Statements are equal.

- The following properties are immutable
  - Actor (except the ordering of group members)
  - Verb (except for display)
  - Object
  - Duration (see section on Duration for further requirements)
- The following properties are not immutable
  - Case
  - Id
  - Order of any Group Members
  - Authority
  - Stored
  - Timestamp
  - Version
  - Any attachments
  - Any referenced Activity Definitions

2.2.1 Table Guidelines:

Tables in this document represent requirements that shall be followed. It is the responsibility of an LRP to create Statements and requests that contain data that follow requirements in these tables. The following requirements are expected to be followed for each table in this section. Note: The &quot;description&quot; portion of table will have requirements, in particular for controlled vocabulary, enumerations, etc.

An LRP SHALL NOT add additional properties to Statements

An LRP SHALL NOT use a property more than once

The LRP SHALL create Statements:

- With all required properties
- Without any null values (except inside extensions).
- Following all formatting of the data type provided
- Following format of key or value, including not providing an empty string, where a string with a particular format (such as mailto IRI, UUID, or IRI) is required.
- Where the case of a key does matches the case specified in this specification.
- Where the case of a value restricted to enumerated values matches an enumerated value given in this specification exactly.
- Which do not have a key or value that is not allowed by this specification.
- That contain IRL or IRI values with a scheme.

2.2.2 Statement Table

Each Statement in xAPI has the following JSON structure and requirements. Note that properties with type &quot;Object&quot; will have subsequent tables.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| id | UUID | UUID assigned by LRS if not set by the Learning Record Provider. | Recommended |
| [actor](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#actor) | Object | Whom the Statement is about, as an [Agent](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#agent) or [Group](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#group) Object. | Required |
| [verb](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#verb) | Object | Action taken by the Actor. | Required |
| [object](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#object) | Object | Activity, Agent, or another Statement that is the Object of the Statement. | Required |
| [result](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#result) | Object | Result Object, further details representing a measured outcome. | Optional |
| [context](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#context) | Object | Context that gives the Statement more meaning. Examples: a team the Actor is working with, altitude at which a scenario was attempted in a flight simulator. | Optional |
| [timestamp](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamp) | [Timestamp](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamps) | Timestamp of when the events described within this Statement occurred. Set by the LRS if not provided. | Optional |
| [stored](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#stored) | [Timestamp](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamps) | Timestamp of when this Statement was recorded. Set by LRS. | Not Recommended |
| [authority](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#authority) | Object | Agent or Group who is asserting this Statement is true. Verified by the LRS based on authentication. Set by LRS if not provided or if a strong trust relationship between the Learning Record Provider and LRS has not been established. | Optional |
| [version](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#version) | Version | The Statement&#39;s associated xAPI version, formatted according to [Semantic Versioning 1.0.0](http://semver.org/spec/v1.0.0.html). | Not Recommended |
| [attachments](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#attachments) | Ordered array of Attachment Objects | Headers for Attachments to the Statement | Optional |

2.2.2.1 Actor Tables

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

2.2.2.2 Verb Table

Verbs appear in Statements as Objects consisting of an IRI and a set of display names corresponding to multiple languages or dialects which provide human-readable meanings of the Verb. The table below lists all properties of the Verb Object.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| id | IRI | Corresponds to a Verb definition. Each Verb definition corresponds to the meaning of a Verb, not the word. | Required |
| display | [Language Map](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#lang-map) | The human readable representation of the Verb in one or more languages. This does not have any impact on the meaning of the Statement, but serves to give a human-readable display of the meaning already determined by the chosen Verb. | Recommended |

2.2.2.3 Object Table:

Objects in xAPI vary widely in use and are classified in that use by the objectType property. Each of the following sections provides additional requirements that stem from the use of objectType. That is, if an Object is to be used as an Activity, its objectType shall be &quot;Activity&quot;.

The LRS shall treat any Object without an objectType as though the value was &quot;Activity&quot;.

**Object**  **As Activity Table –** An Object property if implemented with the following requirements, will do so as an Activity. There are many sub-properties to Objects.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | MUST be Activity when present | Required |
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
| Id | String | Identifies the interaction component within the list. | Required |
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
| Id | UUID | The UUID of a Statement. | Required |

**Object As Sub-Statement Table –** An Object property, if implemented with the following requirements, will do so as a Sub-Statement

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| objectType | String | In this case, MUST be SubStatement. | Required |
| [actor](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#actor) | Object | Whom the Statement is about, as an [Agent](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#agent) or [Group](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#group) Object. | Required |
| [verb](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#verb) | Object | Action taken by the Actor. | Required |
| [object](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#object) | Object | Activity, Agent, or another Statement that is the Object of the Statement. | Required |
| [result](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#result) | Object | Result Object, further details representing a measured outcome. | Optional |
| [context](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#context) | Object | Context that gives the Statement more meaning. Examples: a team the Actor is working with, altitude at which a scenario was attempted in a flight simulator. | Optional |
| [timestamp](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamp) | [Timestamp](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#timestamps) | Timestamp of when the events described within this Statement occurred. Set by the LRS if not provided. | Optional |
| [attachments](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#attachments) | Ordered array of Attachment Objects | Headers for Attachments to the Statement | Optional |

2.2.2.4 Result Table

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

- Context
- Attachments

2.2.2.5 Context Table:

Property to add contextual information to a Statement. It can store information such as the instructor for an experience, if this experience happened as part of a team-based Activity, or how an experience fits into some broader activity.

**Context Table –** The table below lists all properties of the context Object.

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| registration | UUID | The registration that the Statement is associated with. | Optional |
| instructor | Agent (MAY be a Group) | Instructor that the Statement relates to, if not included as the Actor of the Statement. | Optional |
| team | Group | Team that this Statement relates to, if not included as the Actor of the Statement. | Optional |
| contextActivities | contextActivities Object | A map of the types of learning activity context that this Statement is related to. Valid context types are: parent, &quot;grouping&quot;, &quot;category&quot; and &quot;other&quot;.Every key in the contextActivities Object MUST be one of &quot;parent&quot;, &quot;grouping&quot;, &quot;category&quot;, or &quot;other&quot;.Every value in the contextActivities Object MUST be either a single Activity Object or an array of Activity Objects. | Optional |
| contextAgents | Array of Objects | Collection of Objects describing relationship(s) between Agent(s) and zero or more Activity Type IRIs | Optional |
| contextGroups | Array of Objects | Collection of Objects describing relationship(s) between Identified or Anonymous Group(s) and zero or more Activity Type IRIs. | Optional |
| revision | String | Revision of the learning activity associated with this Statement. Format is free. | Optional |
| platform | String | Platform used in the experience of this learning activity. | Optional |
| language | String (as defined in [RFC 5646](http://tools.ietf.org/html/rfc5646)) | Code representing the language in which the experience being recorded in this Statement (mainly) occurred in, if applicable and known. | Optional |
| statement | [Statement Reference](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#stmtref) | Another Statement to be considered as context for this Statement. | Optional |
| extensions | Object | A map of any other domain-specific context relevant to this Statement. For example, in a flight simulator altitude, airspeed, wind, attitude, GPS coordinates might all be relevant ([See Extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#miscext)) | Optional |

**Context Activities Details:**

Many Statements do not just involve one (Object) Activity that is the focus, but relate to other contextually relevant Activities. The &quot;contextActivities&quot; property allow for these related Activities to be represented in a structured manner.

There are four valid context types. All, any or none of these MAY be used in a given Statement. For example: a course that is part of a qualification. The course has several classes. The course relates to a class as the parent, the qualification relates to the class as the grouping.

- **Parent** : an Activity with a direct relation to the Activity which is the Object of the Statement.
- **Grouping** : an Activity with an indirect relation to the Activity which is the Object of the Statement.
- **Category** : an Activity used to categorize the Statement. &quot;Tags&quot; would be a synonym. In practice has been widely used to indicate a profile of xAPI.
- **Other** : a contextActivity used for any other purpose.

**Context Agents and Groups Details:**

An Actor has many permanent characteristics that can be captured in an Agent Profile. However, in the context of a single Statement, certain characteristics are necessary to express for context, but are only relevant for that Statement. The &quot;contextAgents&quot; and &quot;contextGroups&quot; properties allow for these relationships to be represented in a structured manner.

Context Agents:

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| Agent | IFI | The Inverse Functional Identifier used toidentify this Agent. | Required |
| relevantTypes | Array of IRIs | A collection of IRIs used to characterize the Agent. If not provided, only a generic relationship is intended (not recommended) | Optional |

Context Groups:

| **Property** | **Type** | **Description** | **Required** |
| --- | --- | --- | --- |
| Group | IFI | The Inverse Functional Identifier used toidentify this (Identified) Group. | Optional (follow rules of Identified and Anonymous Groups) |
| Members | Array of Agents | The collection of Agents which belong to the Group. The collection does not have to be the complete set of Group members. | Optional (follow rules of Identified and Anonymous Groups) |
| relevantTypes | Array of IRIs | A collection of IRIs used to characterize the Agent. If not provided, only a generic relationship is intended (not recommended) | Optional |

2.2.2.6 Attachments

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

2.2.3 Metadata

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

The following recommendations are made for any LRS that implements resolvable metadata into its data model for querying purposes. This behavior is optional.

##### Learning Record Provider Requirements

The following recommendations are made for any LRP that wishes to implement resolvable metadata for querying purposes. This behavior is optional.

- Metadata MAY be provided with an identifier.
- If metadata is provided, both &quot;name&quot; and &quot;description&quot; SHOULD be included.
- For any of the identifier IRIs above the Metadata Provider SHOULD make a human-readable description of the intended usage accessible at the IRI.
- For any of the identifier IRIs above the Metadata Provider SHOULD ensure that this JSON metadata available at that IRI when the IRI is requested and a Content-Type of application/json is requested.
- Where the IRI represents an Activity, the Metadata Provider MAY host metadata using the [Activity Definition](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#actdef) JSON format which is used in Statements, with a Content-Type of application/json.

#####


2.2.4 LRP Processing of Data

An LRP functions as the creator of xAPI Data. Statements, in particular, are highly structured and have many requirements. An LRP is responsible for formatting and sending statements such that they will not get rejected by the LRS, and otherwise follow Data Design Best Practices

Statements are expected to be unique and to be immutable. In this regard they are unchangeable and should not be deleted. This section outlines requirements that focus on specific practices that are unique to certain Statement properties.

2.2.4.1 LRP Statement Best Practices

Some of the requirements in this section are covered in the tables above, but are explained in more detail below or are listed again to reiterate best practices.

An LRP SHOULD provide an id for the Statement

An LRP SHOULD NOT provide a timestamp stored for the Statement

An LRP SHOULD NOT provide authority for the Statement

An LRP SHOULD NOT provide a version for the Statement

If an LRP sets the Statement version, it MUST set it to 2.0.0.

An LRP should SHOULD NOT include properties with a value of an empty object

The Learning Record Provider SHOULD ensure that every value in the contextActivities Object is an array of Activity Objects instead of a single Activity Object

A Learning Record Provider MUST NOT use a future time for a &quot;timestamp&quot; property in a Statement.

An LRP MAY create a Statement where a SubStatement has a &quot;timestamp&quot; property that is in the future.

The LRP SHALL NOT create a Statement with an Object with ObjectType SubStatement that has within it an Object with ObjectType SubStatement.

An LRP SHOULD NOT provide an interaction component&#39;s id value with whitespace in the value.

The LRP SHALL NOT provide a &quot;language&quot; property with invalid values for any reason, including if not applicable or unknown.

## 2.2.5 Statement Voiding

Not all Statements are perpetually valid once they have been issued. Mistakes or other factors could dictate that a previously made Statement is marked as invalid. This is called &quot;voiding a Statement&quot; and the reserved Verb http://adlnet.gov/expapi/verbs/voided is used for this purpose. Any Statement that voids another cannot itself be voided.

An LRP SHALL NOT send a Statement with the Verb http://adlnet.gov/expapi/verbs/voided when:

- The Statement&#39;s Object&#39;s objectType property is not &quot;StatementRef&quot;
- The Statement has no &quot;id&quot; for the Object (e.g. no target for voiding)

## 2.2.6 Statement Signing

A Statement can include a digital signature to provide strong and durable evidence of the authenticity and integrity of the Statement.

Signed Statements include a JSON web signature (JWS) as an Attachment. This allows the original serialization of the Statement to be included along with the signature. For interoperability, the &quot;RSA + SHA&quot; series of JWS algorithms have been selected, and for discoverability of the signer X.509 certificates SHOULD be used.

**Statement Signing Process:**

- A Signed Statement MUST include a JSON web signature (JWS) as defined here: [http://tools.ietf.org/html/rfc7515](http://tools.ietf.org/html/rfc7515), as an Attachment with a usageType of http://adlnet.gov/expapi/attachments/signature and a contentType of application/octet-stream.
- JWS Compact Serialization MUST be used to create the JSON web signature. Use of JWS JSON Serialization is strongly discouraged, is unlikely to be interoperable with other systems, and will be forbidden in a future version of this specification.
- The JWS signature MUST have a payload of a valid JSON serialization of the complete Statement before the signature was added.
- The JWS signature MUST use an algorithm of &quot;RS256&quot;, &quot;RS384&quot;, or &quot;RS512&quot;.
- The JWS signature SHOULD have been created based on the private key associated with an X.509 certificate.
- If X.509 was used to sign, the JWS header SHOULD include the &quot;x5c&quot; property containing the associated certificate chain.

# 2.2.7 Additional Requirements for Data Types

The following section provides guidance and requirements for data types found in this document. Many tables contain specific data types that have requirements found in this section.

**IRIs:**

Internationalized Resource Identifiers, or IRIs, are unique identifiers which could also be resolvable. Because resolving is not a requirement, IRIs/URIs are used instead of IRLs/URLs. In order to allow the greatest flexibility in the characters used in an identifier, IRIs are used instead of URIs as IRIs can contain some characters outside of the ASCII character set.

The LRP has responsibilities in regard to each IRI as outlined below. Many of these are only best practices as they will not be testable through software, but if not followed, will undermine the use of xAPI in a larger environment. To put it another way, the SHOULD requirements carry the weight of a MUST requirement. Activity Definitions have additional rules as shown in Section XXX (will be different for LRS vs. LRP).

- Learning Record Providers defining new IRIs SHOULD only use IRIs they control or have permission from the controller to use.
- Where a suitable identifier already exists, the Learning Activity Provider SHOULD use the corresponding existing identifier and SHOULD NOT create a new identifier.

- When re-using an existing identifier, Learning Record Providers SHOULD ensure that the exact character equivalent IRI is used.
- A Learning Record Provider MAY create their own identifiers where a suitable identifier does not already exist.
- When defining identifiers, the Learning Record Provider MAY use IRIs containing anchors so that a single page can contain definitions for multiple identifiers. E.g. http://example.com/xapi/verbs#defenestrated
- When defining identifiers, the Learning Activity Provider SHOULD use lowercase IRIs.

**Extensions:**

Extensions are available as part of Activity Definitions, as part of a Statement&#39;s &quot;context&quot; property, or as part of a Statement&#39;s &quot;result&quot; property. In each case, extensions are intended to provide a natural way to extend those properties for some specialized use. The contents of these extensions might be something valuable to just one application, or it might be a convention used by an entire Community of Practice.

Extensions are defined by a map and logically relate to the part of the Statement where they are present. The values of an extension can be any JSON value or data structure. Extensions in the &quot;context&quot; property provide context to the core experience, while those in the &quot;result&quot; property provide elements related to some outcome. Within Activities, extensions provide additional information that helps define an Activity within some custom application or Community of Practice. The meaning and structure of extension values under an IRI key are defined by the person who controls the IRI.

- The keys of an extensions map MUST be IRIs.
- Learning Record Providers SHOULD always strive to map as much information as possible into the built-in elements in order to leverage interoperability among Experience API conformant tools.
- All extension IRIs SHOULD have controllers.
- The controller of an IRL extension key SHOULD make a human-readable description of the intended meaning of the extension supported by the IRL accessible at the IRL.

**Language Maps:**

A language map is a dictionary where the key is a [RFC 5646 Language Tag](http://tools.ietf.org/html/rfc5646), and the value is a string in the language specified in the tag. This map SHOULD be populated as fully as possible based on the knowledge of the string in question in different languages.

The shortest valid language code for each language string is generally preferred. The [ISO 639 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php) plus an [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) allows for the designation of basic languages (e.g., es for Spanish) and regions (e.g., es-MX, the dialect of Spanish spoken in Mexico). If only the ISO 639 language code is known for certain, do not guess at the possible ISO 3166-1 country code. For example, if only the primary language is known (e.g., English) then use the top level language tag en, rather than en-US. If the specific regional variation is known, then use the full language code.

**Note:**  For Chinese languages, the significant linguistic diversity represented by zh means that the ISO 639 language code is generally insufficient.

The content of strings within a language map is plain text. It is expected that any formatting code such as HTML tags or markdown will not be rendered, but will be displayed as code when this string is displayed to an end user. An important exception to this is if language map Object is used in an extension and the owner of that extension IRI explicitly states that a particular form of code will be rendered.

An LRP SHALL only send a Statement with invalid RFC 5646 language tags (Keys of language maps MUST be sent with valid [RFC 5646](http://tools.ietf.org/html/rfc5646) language tags, for similar reasons, The LRS MUST at least validate that the sequence of token lengths for language map keys matches the [RFC 5646](http://tools.ietf.org/html/rfc5646) standard)

**UUIDs:**

Universally Unique Identifiers, or UUIDs, are 128-bit values that are globally unique. Unlike IRIs, there is no expectation of resolvability as UUIDs take on a completely different format. UUIDs MUST be in the standard string form. It is recommended variant 2 in [RFC 4122](http://tools.ietf.org/html/rfc4122) is used.

**Timestamps:**

- A Timestamp MUST be formatted according to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
- A Timestamp MUST be expressed using the format described in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt), which is a profile of ISO 8601.
- A Timestamp MUST be formatted to UTC
- If used, An LRP SHOULD send a Timestamp with at least millisecond precision (3 decimal points beyond seconds).

**Duration:**

- An LRP MUST provide Statements with Duration expressed using the format for Duration in ISO 8601:2004(E) section 4.4.3.2.
- An LRP MUST NOT provide Statements with the alternative format (in conformity with the format used for time points and described in ISO 8601:2004(E) section 4.4.3.3).
- Learning Record Providers SHOULD provide a maximum precision of 0.01 seconds.
- Learning Record Providers MAY provide less precision, for example in the case of reading a University Degree precision might be in months or years.
- When comparing Durations (or Statements containing them), any precision beyond 0.01 second precision MUST NOT be included in the comparison.

**Documents:**

Documents are generic constructs made up of only name/value pairs. Document requests are generic with only the following form:

| **Property** | **Type** | **Description** |
| --- | --- | --- |
| id | String | Set by Learning Record Provider, unique within the scope of the Agent or Activity. |
| updated | Timestamp | When the document was most recently modified (HTTP Header). |
| contents | Arbitrary binary data | The contents of the document |

#


__Note:__ Attached signature not shown, see [Attachments](#attachments) for Attachment message format.


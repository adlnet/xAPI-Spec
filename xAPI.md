# Experience API
## Advanced Distributed Learning (ADL) Co-Laboratories

>This document was authored by members of the Experience API Working Group (see 
>list on pp. 7-8) in support of the Office of the Deputy Assistant Secretary of 
>Defense (Readiness) Advanced Distributed Learning (ADL) Initiative. Please 
>send all feedback and inquiries to helpdesk@adlnet.gov  

## Table of Contents
[1.0. Revision History](#revhistory)  
[2.0. Role of the Experience API](#roleofxapi)  
  [2.1. ADL's Role in the Experience API](#adlrole)  
    [2.2. Contributors](#contributors)  
		[2.2.1. Working Group Participants](#wg)  
		[2.2.2. Requirements Gathering Participants](#reqparticipants)  
[3.0. Definitions](#defintions)  
	[Tin Can API (TCAPI)](#tcapi)  
[4.0. Statement](#statement)  
    [4.1. Statement Properties](#stmtprops)  
		[4.1.1. ID](#stmtid)  
		[4.1.2. Actor](#actor)  
		[4.1.3. Verb](#verb)  
		[4.1.4. Object](#object)  
		[4.1.5. Result](#result)  
		[4.1.6. Context](#context)  
		[4.1.7. Timestamp](#timestamp)  
		[4.1.8. Stored](#stored)  
		[4.1.9. Authority](#authority)  
		[4.1.10. Voided](#voided)  
		[4.1.11. Attachments](#attachments)   
    [4.2. Retrieval of Statements](#retstmts)  
[5.0. Miscellaneous Types](#misctypes)  
    [5.1. Document](#miscdocument)  
    [5.2. Language Map](#misclangmap)  
    [5.3. Extensions](#miscext)  
    [5.4. Identifier Metadata](#miscmeta)  
[6.0. Runtime Communication](#rtcom)  
    [6.1. Encoding](#encoding)  
    [6.2. API Versioning](#apiversioning)  
    [6.3. Concurrency](#concurrency)  
    [6.4. Security](#security)  
		[6.4.1. Authentication Definitions](#authdefs)  
		[6.4.2. OAuth Authorization Scope](#oauthscope)  
[7.0. Data Transfer (REST)](#datatransfer)  
    [7.1. Error Codes](#errorcodes)  
    [7.2. Statement API](#stmtapi)  
    [7.3. Document APIs](#docapis)  
    [7.4. State API](#stateapi)  
    [7.5. Activity Profile API](#actprofapi)  
    [7.6. Agent Profile API](#agentprofapi)  
    [7.7. Cross Origin Requests](#cors)  
    [7.8. Validation](#validation)  
[Appendix A: Bookmarklet](#AppendixA)  
[Appendix B: Creating an "IE Mode" Request](#AppendixB)  
[Appendix C: Example definitions for activities of type "cmi.interaction"](#AppendixC)  
[Appendix D: Example statements](#AppendixD)  
[Appendix E: Converting Statements to 1.0](#AppendixE)

<a name="revhistory"/>  
## 1.0 Revision History
###### 0.8 (Project Tin Can API Deliverable) to 0.9 (March 31, 2012):  
  
Rustici software, whom delivered Project Tin Can API, made modifications to the 
API prior to the April 2012 Kickoff Meeting. It was voted in this meeting to 
move those changes into the current spec and revision to 0.9.

###### 0.90 to 0.95 (August 31, 2012):  

"Core" verbs and activity types were removed from the specification. References 
to these verbs in results, context, interactions, and activity definitions have 
also been removed. It is recommended that implementers prefer community defined 
verbs to creating their own verbs.
- Verbs, activity types, and extension keys are now URIs
- Restructured and added language around some of the other implementation 
details and scope.
- Changed from using a person-centric view of agents to a persona-centric 
view.
- Friend of a Friend (FOAF) agent merging requirement removed.
- Agent objects must now have exactly 1 uniquely identifying property, instead 
of at least one.

###### 0.95 to 1.0 (April 26, 2013): 
Various refinements and clarifications including:
- Adding attachments
- Activity metadata is now stored as JSON rather than XML
- Changes to voiding statements
- Clarification and naming of the Document APIs
- Changes to querying the Statement API

<a name="roleofxapi"/>
## 2.0 Role of the Experience API  
The Experience API is a service that allows for statements of experience 
(typically learning experiences, but could be any experience) to be delivered 
to and stored securely in a Learning Record Store. The Experience API is 
dependent on Learning Activity Providers to create and track learning experiences; 
this specification provides a data model and associated components on how to 
accomplish these tasks.  
Specifically, the Experience API provides:  
- Structure and definition of statement, state, learner, activity and objects, 
which are the means by which experiences are conveyed by a Learning Activity Provider.
- Data Transfer methods for the storage and retrieval (but not validation) of 
these objects to/from a Learning Record Store.  Note that the systems storing 
or retrieving records need not be Learning Activity Providers. LRSs may 
communicate with other LRSs, or reporting systems.
- Security methods allowing for the trusted exchange of information between 
the Learning Record Store and trusted sources.  

The Experience API is the first of many potential specifications that will merge 
to create a higher architecture of online learning and training. Authentication 
services, querying services, visualization services, and personal data services 
are some examples of additional components that the Experience API is designing 
to work alongside. While the implementation details of these services are not 
specified here, the Experience API is designed with these components in mind.  
 
<a name="adlrole"/>
### 2.1 ADL's Role in the Experience API  
ADL has taken a role of steward and facilitator in the development of the 
Experience API.  The Experience API is seen as one piece of the ADL Training 
and Learning Architecture, which facilitates learning anytime and anywhere. 
ADL views the Experience API as an evolved version of SCORM that can support 
similar use cases, but can also support many of the use cases gathered by ADL 
and submitted by those involved in distributed learning which SCORM could not 
enable.  
 
<a name="contributors"/> 
### 2.2 Contributors
My thanks to everyone who contributed to the Experience API project. Many of 
you have called into the weekly meetings and helped to shape the specification 
into something that is useful for the entire distributed learning community. 
Many of you assisted in releasing code samples, products, and documentation to 
aid those who are creating and adopting the specification.  I'd also like to 
thank all of those who were involved in supplying useful, honest information 
about your organization's use of SCORM and other learning best practices. 
Through the use-cases, shared experiences, and knowledge you have shared, ADL 
and the community clearly identified the first step in creating the Training 
and Learning Architecture--the Experience API.  You are truly the community 
leaders on which we depend to make our training and education the very best.  

Kristy S. Murray, Ed.D.  
Director, ADL Initiative  
OSD, Training Readiness & Strategy (TRS)  

<a name="wg"/>
### 2.2.1 Working Group Participants  
<table>
	<tr><th>Name:</th><th>Organization:</th></tr>
	<tr><td>Aaron Silvers</td><td>ADL</td></tr>
	<tr><td>Al Bejcek</td><td>NetDimensions</td></tr>
	<tr><td>Ali Shahrazad</td><td>SaLTBOX</td></tr>
	<tr><td>Andrew Downes</td><td>Epic</td></tr>
	<tr><td>Andy Johnson</td><td>ADL</td></tr>
	<tr><td>Andy Whitaker</td><td>Rustici Software</td></tr>
	<tr><td>Anthony Altieri</td><td>American Red Cross</td></tr>
	<tr><td>Anto Valan</td><td>Omnivera Learning Solutions</td></tr>
	<tr><td>Avron Barr</td><td>Aldo Ventures, Inc.</td></tr>
	<tr><td>Ben Clark</td><td>Rustici Software</td></tr>
	<tr><td>Bill McDonald</td><td>Boeing</td></tr>
	<tr><td>Brian J. Miller</td><td>Rustici Software</td></tr>
	<tr><td>Chad Udell</td><td>Float Mobile Learning</td></tr>
	<tr><td>Dan Allen</td><td>Litmos</td></tr>
	<tr><td>Dan Kuemmel</td><td>Sentry Insurance</td></tr>
	<tr><td>Dave Mozealous</td><td>Articulate</td></tr>
	<tr><td>David Ells</td><td>Rustici Software</td></tr>
	<tr><td>Eric Johnson</td><td>Planning and Learning Technologies, Inc.</td></tr>
	<tr><td>Fiona Leteney</td><td>Feenix e-learning</td></tr>
	<tr><td>Greg Tatka</td><td>Menco Social Learning</td></tr>
	<tr><td>Ingo Dahn</td><td>University Koblenz-Landau</td></tr>
	<tr><td>Jason Haag</td><td>ADL</td></tr>
	<tr><td>Jeff Place</td><td>Questionmark</td></tr>
	<tr><td>Jennifer Cameron</td><td>Sencia Corporate Web Solutions</td></tr>
	<tr><td>Jeremy Brockman</td><td> </td></tr>
	<tr><td>Joe Gorup</td><td>CourseAvenue</td></tr>
	<tr><td>John Kleeman</td><td>Questionmark</td></tr>
	<tr><td>Jonathan Poltrack</td><td>ADL</td></tr>
	<tr><td>Kris Miller</td><td>edcetra Training</td></tr>
	<tr><td>Kris Rockwell</td><td>Hybrid Learning Systems</td></tr>
	<tr><td>Lang Holloman</td><td> </td></tr>
	<tr><td>Lou Wolford</td><td>ADL</td></tr>
	<tr><td>Luke Hickey</td><td>dominKnow</td></tr>
	<tr><td>Marcus Birtwhistle</td><td>ADL</td></tr>
	<tr><td>Mark Davis</td><td>Exambuilder</td></tr>
	<tr><td>Megan Bowe</td><td>Rustici Software</td></tr>
	<tr><td>Melanie VanHorn</td><td>ADL</td></tr>
	<tr><td>Michael Flores</td><td>Here Everything's Better</td></tr>
	<tr><td>Michael Roberts</td><td>vTrainingRoom</td></tr>
	<tr><td>Mike Palmer</td><td>OnPoint Digital</td></tr>
	<tr><td>Mike Rustici</td><td>Rustici Software</td></tr>
	<tr><td>Nik Hruska</td><td>ADL</td></tr>
	<tr><td>Patrick Kedziora</td><td>Kedzoh</td></tr>
	<tr><td>Paul Roberts</td><td>Questionmark</td></tr>
	<tr><td>Rich Chetwynd</td><td>Litmos</td></tr>
	<tr><td>Richard Fouchaux</td><td>Ontario Human Rights  Commission</td></tr>
	<tr><td>Richard Lenz</td><td>Organizational Strategies, Inc.</td></tr>
	<tr><td>Rick Raymer</td><td>Serco</td></tr>
	<tr><td>Rob Chadwick</td><td>ADL</td></tr>
	<tr><td>Robert Lowe</td><td></td></tr>
	<tr><td>Russell Duhon</td><td>SaLTBOX</td></tr>
	<tr><td>Stephen Trevorrow</td><td>Problem Solutions, LLC.</td></tr>
	<tr><td>Steve Baumgartner</td><td></td></tr>
	<tr><td>Steve Flowers</td><td>XPConcept</td></tr>
	<tr><td>Thomas Ho</td><td></td></tr>
	<tr><td>Tim Martin</td><td>Rustici Software</td></tr>
	<tr><td>Tom Creighton</td><td>ADL</td></tr>
	<tr><td>Walt Grata</td><td>ADL</td></tr>
</table> 
<a name="reqparticipants"/> 
#### 2.2.2 Requirements Gathering Participants  
In collection of requirements for the Experience API, there were many people and 
organizations that provided invaluable feedback to SCORM, distributed learning 
efforts, and learning in general.  User Voice Site, Rustici Blog, etc.  

### 2.3 Reading guidelines for the non-technically inclined.

Since you’re reading this document, it’s probably safe to say that you’re interested in understanding 
the Experience API, informally called TinCan. The purpose of this document is to describe how the xAPI is 
implemented in a large variety of systems. It’s a fairly technical document by nature and you may
decide that you don’t understand much of it. Even so, there are useful things to learn by reading further. Not only
because the tools that you work with are based on the specifications described below; the technical people that you
talk to may assume that you have a basic level of knowledge. Exactly for this reason you’re advised to read the small
sections labeled ‘description’ and ‘rationale’ while skipping the ‘details’ and ‘examples’. Needless to say, many
other sources can be found that explain xAPI very well, but this document is the core of them all.

<a name="defintions"/> 
## 3.0 Definitions  

* [Activity](#def-activity)
* [Authentication](#def-authentication)
* [Authorization](#def-authorization)
* [Community of Practice](#def-community-of-practice)
* [Experience API (xAPI)](#def-experience-api)
* [Immutable](#def-immutable)
* [Inverse Functional Identifier](#def-inverse-functinal-identifier)
* [Learning Activity Provider](#def-activity-provider)
* [Learning Management System (LMS)](#def-learning-management-system)
* [Learning Record Store (LRS)](#def-learning-record-store)"
* [MUST / SHOULD / MAY](<#def-must-should-may)
* [Profile](#def-profile)
* [Registration](#def-registration)
* [Service](#def-service)
* [State](#def-state)
* [Statement](#def-statement)
* [Tin Can API (TCAPI)](#tcapi)
* [URI](#def-uri)

<a name="def-activity" />
__Activity__: A thing with which to be interacted. An activity can be a unit of 
instruction, experience, or performance that is to be tracked in meaningful combination with a verb. 
Interpretation of ‘Activity’ is broad, meaning that activities can even be tangible objects. In the statement
“Anna tried a cake recipe”: the recipe constitutes the Activity in terms of the XAPI statement. 
E.g. a book, an e-learning course, a hike, a meeting.

<a name="def-authentication" />
__Authentication__: The concept of verifying the identity of a user or system. This 
allows interactions between the two “trusted” parties.

<a name="def-authorization" />
__Authorization__: The affordance of permissions based on a user or system's role: 
the process of making one user or system "trusted" by another.

<a name="def-community-of-practice" />
__Community of Practice__: A group, usually connected by a common cause, role or 
purpose, which operates in a common modality.

<a name="def-experience-api" />
__Experience API (xAPI)__: The API defined in this document, the product of 
"Project Tin Can". A simple, lightweight way for any permitted actor to store 
and retrieve extensible learning records, learner and learning experience profiles, 
regardless of the platform used.  

<a name ="def-immutable" />
__Immutable__:  Adjective used  describe things which cannot be changed. With 
some exceptions, statements in the xAPI are immutable. This ensures that when 
statements are shared between LRS, multiple copies of the statement remain
the same.

<a name="def-inverse-functinal-identifier" />
__Inverse Functional Identifier__: An identifier which is unique to a particular persona or group.
 Used to identify Agents and Groups. See section 4.1.2

<a name="def-activity-provider" />
__Learning Activity Provider (AP)__: The software object that is communicating with 
the LRS to record information about a learning experience. May be similar to a SCORM 
package as it is possible to bundle assets with the software object that does this 
communication, but may also be separate from the experience it is reporting about.

<a name="def-learning-management-system" />
__Learning Management System (LMS)__: Provides the tracking functionality of an LRS, 
but provides additional administrative and reporting functionality. In this document 
the term will be used when talking about existing systems that implement learning 
standards. The XAPI can work independently of an LMS, but is built with knowledge 
of the suite of services an LMS provides.

<a name="def-learning-record-store" />
__Learning Record Store (LRS)__: A system that stores learning information. Prior to the XAPI 
most LRSs are Learning Management Systems (LMSs), however this document uses the term 
LRS to be clear that a full LMS is not necessary to implement the XAPI. The XAPI 
is dependent on an LRS to function.

<a name="def-must-should-may" />
__MUST / SHOULD / MAY__: Three levels of obligation with regards to conformity. A system that fails to implement a MUST (or a MUST NOT) is non-conformant. Failing to meet a SHOULD is not a violation of conformity, but goes against best practices. MAY equals an option, to be decided by the developer with no consequences for conformity.

<a name="def-profile" />
__Profile__: A construct where information about the learner or activity is kept, 
typically in name/document pairs that have meaning to an instructional system component.

<a name="def-registration" />
__Registration__: When an LRS is an integral part of an LMS, the LMS likely supports the concept of registration, 
an instance of a learner signing up for a particular learning activity. See [section 4.1.6](#context).

<a name="def-service" />
__Service__: A software component responsible for one or more aspects of the distributed 
learning process. An LMS typically combines many services to design a complete learning 
experience.

<a name="def-state" />
__State__: Similar to SCORM suspend data, but allows storage of arbitrary key/document 
pairs. The LRS does not have to retain state once the learning experience is considered 
"done" (LRS has closed its "registration").

<a name="def-statement" />
__Statement__: A simple statement consisting of ```<Actor (learner)>``` ```<verb>``` ```<object>```, 
with ```<result>```, in ```<context>``` to track an aspect of a learning experience. A set of 
several statements may be used to track complete details about a learning experience.

<a name="tcapi"/>
__Tin Can API (TCAPI)__: The previous name of the API defined in this document.  

<a name="def-uri" />
__URI__: Uniform Resource Identifier. A unique identifier which may be a URL. This should be a full absolute URI including a scheme. Relative URIs should not be used. URLs should be defined within a domain controlled by the person creating the URL. 

<a name="statement"/> 
## 4.0 Statement  
The statement is the core of the XAPI.  All learning events are stored as statements 
such as: "I did this".  

<a name="stmtprops"/>
### 4.1 Statement Properties:  
Actor, verb, and object are required, all other properties are optional. Properties 
can occur in any order, but are limited to one use each. Each property is discussed 
below.  

<table>
	<tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr>
	<tr><td>id</td><td>UUID</td><td></td>
	<td>UUID assigned by LRS if not set by the Learning Activity Provider.</td></tr>
	<tr><td><a href="#actor">actor</a></td><td>Object</td><td></td>
	<td>Who the statement is about, as an <a href="#agent">Agent</a> or 
		<a href="#group">Group</a> object. 'I'</td></tr>
	<tr><td><a href="#verb">verb</a></td><td>Object</td><td></td>
	<td>Action of the Learner or Team object. "Did".</td></tr>
	<tr><td><a href="#object">object</a></td><td>Object</td><td></td>
	<td>Activity, agent, or another statement that is the object of the statement, 
	"this". Note that objects which are provided as a value for this field should 
	include a "objectType" field. If not specified, the object is assumed to be 
	an activity.</td></tr>
	<tr><td><a href="#result">result</a></td><td>Object</td><td></td>
	<td>Result object, further details relevant to the specified verb.</td></tr>
	<tr><td><a href="#context">context</a></td><td>Object</td><td></td>
	<td>Context that gives the statement more meaning. Examples: Team actor is 
	working with, altitude in a flight simulator.</td></tr>
	<tr><td><a href="#timestamp">timestamp</a></td><td>Date/Time</td><td></td>
	<td>Timestamp (Formatted according to <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations">ISO 8601</a>) 
	of when what this statement describes happened. If not provided, LRS 
	should set this to the value of "stored" time.</td></tr>
	<tr><td><a href="#stored">stored</a></td><td>Date/Time</td><td></td>
	<td>Timestamp (Formatted according to <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations">ISO 8601</a>) 
	of when this statement was recorded. Set by LRS.</td></tr>
	<tr><td><a href="#authority">authority</a></td><td>Object</td><td></td>
	<td>Agent who is asserting this statement is true. Verified by LRS based on 
	authentication, and set by LRS if left blank.</td></tr>
	<tr><td><a href="#version">version</a></td><td>String</td><td>"1.0"</td>
	<td>API version the statement conforms to. Set by LRS.</td></tr>
	<tr>
		<td><a href="#attachments">attachments</a></td>
		<td>Array of attachment objects</td>
		<td>false</td>
	    <td>Headers for attachments to the statement</td>
	</tr>
</table>  
Aside from (potential or required) assignments of properties during initial 
processing ("id", "authority", "stored", "timestamp") statements are immutable. Note that the content of 
activities that are referenced in statements are not considered part of the 
statement itself. So while the statement is immutable, the activities referenced 
by that statement are not. This means a deep serialization of a statement into 
JSON will change if the referenced activities change (see the
[Statement API's](#stmtapi) 'format' parameter for details).  

 
Simplest possible statement using all properties that MUST or SHOULD be used:  
```
{
	"id": "12345678-1234-5678-1234-567812345678",
	"actor":{
		"mbox":"mailto:xapi@adlnet.gov"
	},
	"verb":{
		"id":"http://adlnet.gov/expapi/verbs/created",
		"display":{
			"en-US":"created"
		}
	},
	"object":{
		"id":"http://example.adlnet.gov/xapi/example/activity"
	}
}
```  
See [Appendix D: Example statements](#AppendixD) for more examples. 

<a name="stmtid"/> 
#### 4.1.1 ID:  

###### Description: 
A UUID (see [RFC 4122](http://www.ietf.org/rfc/rfc4122.txt)
for requirements, and the UUID must be in standard string form).

###### Details: 

* SHOULD be generated by the Learning Activity Provider.
* MUST be generated by the LRS if a statement is received without an ID.

<a name="actor"/>
#### 4.1.2 Actor:  

###### Description: 
A mandatory Agent or Group object, identified by an "inverse functional identifier".

###### Details: 
An "inverse functional identifier" is a value shared between multiple Agents that designates these Agents as the same unique identity without doubt.

###### Rationale:
Learning experiences become meaningless if they cannot be attributed to identifiable individuals and/or groups. In an XAPI statement the required element "Actor" constitutes this identification, loosely inspired on the widely accepted FOAF principle (see: <a href="http://xmlns.com/foaf/spec/#term_Agent"> Friend Of A Friend</a>).

<a name="agent"/>
##### 4.1.2.1 Agent
###### Description:
An Agent (an individual) is identified by one of the following: 

* an e-mail address or its hash (cf. 'mbox' and 'mbox_sha1sum' as in FOAF)
* OpenID
* an account on an existing system (such as twitter, an intranet or an LMS)


###### Details:

An agent...

* MUST be identified by one (1) of the four types of inverse functional identifiers listed in the table below;
* MUST NOT include more than one (1) inverse functional identifier;
* SHOULD NOT use inverse functional identifiers that are also used for any Groups;
* is an important concept in relation to OAuth, see the section on OAuth for details.

The table below lists all properties of Agent objects. The last four are inverse functional identifiers.


<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>objectType</td><td>string</td><td>"Agent". This property is optional except when the Agent is used as a statement's Object.</td></tr>
	<tr><td>name</td><td>string</td><td>Full name of the Agent. This property is optional.</td></tr>
	<tr><td>mbox</td><td>mailto URI</td><td>The required format is "mailto:email address". <br>
The local part of the email address must be URI encoded.<br>Only emails that have only ever been and will ever be assigned to this Agent, 
but no others, should be used for this property and mbox_sha1sum.</td></tr>
	<tr><td>mbox_sha1sum</td><td>string</td><td>The SHA1 hash of a mailto URI (i.e. the value of an mbox property). An LRS MAY include Agents with a matching hash when a request is based on an mbox.</td></tr>
	<tr><td>openID</td><td>URI</td><td>An openID that uniquely identifies the Agent.</td></tr>
	<tr><td>account</td><td><a href="#agentaccount">account object</a></td><td>A user account on an existing system e.g. an LMS or intranet.</td></tr>	

</table>

<a name="agentaccount"/>

###### Account object

###### Description: 

A user account on an existing system, such as a private system (LMS or intranet) or a public system (social networking site).

###### Details:

* If the system that provides the "account" uses OpenID, the Learning Activity Provider SHOULD use this as the Agent instead of the account object.
* If the Learning Activity Provider is concerned about revealing personally identifiable information about the Agent, it SHOULD use an opaque account name (for example an account number) to identify all statements about a person while maintaining anonimity.


The table below lists all properties of Account objects.
<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>homepage</td><td>URL</td><td>The canonical home page for the system the account is on. This is based on FOAF's accountServiceHomePage.</td></tr>
	<tr><td>name</td><td>string</td><td>The unique ID or name used to log in to this account. This is based 
			on FOAF's accountName.</td></tr>
</table>


###### Example:

This example uses an opaque account:

```
{
	"objectType": "Agent",
	"account": {
		"homePage": "http://www.example.com",
		"name": "1625378"
	}
}
``` 

<a name="group"/>
##### 4.1.2.2 Group
###### Description:

A Group...

* represents collections of Agents;
* can be used most places an Agent can;
* can either be anonymous or identified.

###### Details

An anonymous group...

* MAY be used to describe a cluster of people where there is no ready identifier for this cluster, e.g. an ad hoc team;
* MUST include a 'member' property listing constituent Agents;
* MUST NOT contain Group objects in the 'member' property.
* MUST NOT include any inverse functional identifiers

The table below lists all properties of an anonymous Group.

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>objectType</td><td>String</td><td>"Group". This property is required.</td></tr>
	<tr><td>name</td><td>String</td><td>Name of the group. Optional.</td></tr>
	<tr><td>member</td><td>Array of <a href="#agent">Agent objects</a></td><td>The members of this Group.</td></tr>
</table>

An identified group...

* MUST include exactly one (1) inverse functional identifier;
* MAY include a 'member' property listing constituent Agents;
* MUST NOT contain Group objects in the 'member' property.
* SHOULD NOT use inverse functional identifiers that are also used for any Agents.

The table below lists all properties of an identified Group. The last four are inverse functional identifiers.

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>objectType</td><td>String</td><td>"Group". This property is required.</td></tr>
	<tr><td>name</td><td>String</td><td>Name of the group. Optional.</td></tr>
	<tr><td>member</td><td>Array of <a href="#agent">Agent objects</a></td><td>The members of this Group.</td></tr>
	<tr><td>mbox</td><td>mailto URI</td><td>The required format is "mailto:email address". <br>
The local part of the email address must be URI encoded.<br>Only emails that have only ever been and will ever be assigned to this Group, 
but no others, should be used for this property and mbox_sha1sum.</td></tr>
	<tr><td>mbox_sha1sum</td><td>string</td><td>The SHA1 hash of a mailto URI (i.e. the value of an mbox property). An LRS MAY include Groups with a matching hash when a request is based on an mbox.</td></tr>
	<tr><td>openID</td><td>URI</td><td>An openID that uniquely identifies the Group.</td></tr>
	<tr><td>account</td><td><a href="#agentaccount">account object</a></td><td>A user account on an existing system e.g. an LMS or intranet.</td></tr>	

</table>

A system consuming Statements...

* MUST consider each anonymous Group distinct;
* MUST NOT assume that Agents in the 'member' property comprise an exact list of agents in a given anonymous or identified Group.


<a name="verb"/>
#### 4.1.3 Verb:

###### Description
The verb defines the action between actor and activity. It asserts what is done by the actor in relation to 
the activity. Verbs appear in statements as objects consisting of a URI and a set of display names.

###### Rationale

The verb in an xAPI statement describes the learning experience. The xAPI does not specify any particular 
verbs. (With one exception, namely the reserved verb <a href="#voided">'http://adlnet.gov/expapi/verbs/voided'</a>). 
Instead, it defines how to create verbs so that communities of practice can coin their own meaningful verbs 
and make them available for use by anyone. A predefined list of verbs would be limited by definition and 
they might not be able to effectively capture all possible future learning experiences.

###### Details
###### Semantics
The Verb URI identifies the particular semantics of a word, not the word itself. 

For example, the English word "fired" could mean different things depending on context, such as "fired a 
weapon", "fired a kiln", or "fired an employee". In this case, a URI MUST identify one of these specific 
meanings, not the word "fired". 

###### Language
A verb in the Experience API is a URI, and denotes a specific meaning not tied to any particular language. 

For example, a particular verb URI such as http://example.org/firearms#fire might denote the action of firing a gun, 
or the verb URI http://example.com/فعل/خواندن might denote the action of reading a book. 

###### A new verb
The person who coins a new verb...

* MUST own the URI, or...
* MUST have permission from the owner to use it to denote an xAPI verb;
* SHOULD make a human-readable description of the intended usage of the verb 
accessible at the URI.

###### Verb lists and repositories
ADL released a set of recommended verbs. Other lists have been published by other groups and organisations. 
If the meaning of one of the verbs on these lists is intended, 
Learning Activity Providers...

* SHOULD use the corresponding existing verb;
* MAY create and use their own verbs where a suitable verb does not already exist.


###### NOTE: 
In some future version, this specification might specify additional machine-readable information about 
the verb be made available, but the choice to do so is postponed to monitor emerging practices 
and pain points. 
 

##### 4.1.3.1 Verb Object: 

###### Description

The verb object is the representation of a verb that is actually included in a statement. It consists of:

* a reference the verb itself via a URI;
* a display property which provides the human-readable meaning of the verb in one or more languages.


###### Details
The display property:

* MUST be used to illustrate the meaning which is already determined by the verb URI;
* MUST NOT be used to alter the meaning of a verb;
* SHOULD be used by all statements.

A system reading a statement:

* MUST use the verb URI to infer meaning;
* MUST NOT use the display property to infer any meaning from the statement; 
* MUST use the display property only for display to a human.

The table below lists all properties of the Verb object.

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Example</th></tr>
	<tr>
		<td>id</td>
		<td>URI</td>
		<td>Corresponds to a verb definition. Each verb definition 
			corresponds to the meaning of a verb, not the word. The URI should 
			be human-readable and contain the verb meaning.</td>
		<td>id : "http://www.adlnet.gov/XAPIprofile/ran(travelled_a_distance)"</td>
	</tr>
	<tr>
		<td>display</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>The human readable representation of the 
			verb in one or more languages. This does not have any impact on the 
			meaning of the statement, but serves to give a human-readable 
			display of the meaning already determined by the chosen verb.</td>
		<td>display : { "en-US" : "ran"}<br/>
			display : { "en-US" : "ran", "es" : "corrió" }</td>
	</tr>
</table>

The verb in the table above is included for illustrative purposes only. This is not intended to imply that
a verb with this meaning has been defined with this id. This applies to all example verbs given in this 
specification document, with the exception of the reserved verb <a href="#voided">'http://adlnet.gov/expapi/verbs/voided'</a>. 


<a name="object"/>
####4.1.4 Object
###### Definition

The object of a statement is the Activity, Agent, or Statement that is the object 
of the statement. It is the "this" part of the statement, cf. "I did this". 

###### NOTE:
Objects which are provided as a value for this field SHOULD include an "objectType" 
field. If not specified, the object is assumed to be an Activity. Other valid values 
are: <a href="#agentasobj">Agent</a>, <a href="#substmt">Statement</a> or <a href="#stmtref">StatementRef</a>.

###### Rationale
Objects in a statement may be either an Activity, an Agent or another statement. 
Some examples:

* The object is an Activity: "Jeff wrote an essay about hiking."
* The Object is an Agent: "Nellie interviewed Jeff."
* The Object is a Statement: "Nellie commented on 'Jeff wrote an essay about hiking.'"

Statements as objects are typically, but not exclusively, used in scenarios where 
some existing activity is graded, reviewed or commented on.

<a name="activity"/>
##### 4.1.4.1 When the "Object" is an Activity

A statement may represent an Activity as the object of the statement. An activity is any thing 
which is interacted with. See <a href="#30-definitions">section 3.0 Definitions</a>.
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr>
		<td>objectType</td>
		<td>String</td>
		<td>MUST be "Activity" when present. Optional in all cases.</td>
	</tr>
	<tr>
		<td><a href="#acturi">id</a></td><td>URI</td>
		<td>MAY be a URL, which points to the logical definition of the activity. 
		This MAY point to metadata or the URL for the activity</td>
	</tr>
	<tr>
		<td><a href="#actdef">definition</a></td>
		<td>Activity Definition Object</td>
		<td>Metadata, <a href="#actdef">See below</a></td>
	</tr>
</table>
<a name="acturi"/>
###### Activity ID  
An activity ID must always refer to a single unique activity. There may be 
corrections to that activity's definition. Spelling fixes would be appropriate, 
for example, but changing correct responses would not.  

The activity ID is unique, and any reference to it always refers to the same 
activity. Activity Providers must ensure this is true and the LRS may not attempt 
to treat multiple references to the same ID as references to different activities, 
regardless of any information which indicates two authors or organizations may 
have used the same activity ID.    

When defining an activity ID, care must be taken to make sure it will not be 
re-used. It should use a domain the creator controls or has been authorized to 
use for this purpose, according to a scheme the domain owner has adopted to make 
sure activity IDs within that domain remain unique.  

Any state or statements stored against an activity ID must be compatible and 
consistent with any other state or statements that are stored against the same 
activity ID, even if those statements were stored in the context of a new 
revision or platform.   

###### NOTE: 
The prohibition against an LRS treating references to the same activity 
ID as two different activities, even if the LRS can positively determine that 
was the intent, is crucial to prevent activity ID creators from creating IDs 
that could be easily duplicated, as intent would be indeterminable should a 
conflict with another system arise.  

<a name="actdef"/>
###### Activity Definition  
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr>
		<td>name</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>The human readable/visual name of the activity</td>
	</tr>
	<tr>
		<td>description</td>
		<td><a href="misclangmap">Language Map</a></td>
		<td>A description of the activity</td>
	</tr>
	<tr>
		<a name="acttype"/>
		<td>type</td>
		<td>URI</td>
		<td>the type of activity. Note, URI fragments (sometimes called 
			relative URLs) are not valid URIs. <a href="#verb-lists-and-repositories">As with verbs</a>, we recommend
			that Learning Activity Providers look for and use established, 
			widely adopted, activity types.
		</td>
	</tr>
	<tr>
		<td>url</td>
		<td>URL</td>
		<td>An optional url which SHOULD resolve to a document human-readable information about the activity,
		which MAY inclue a way to 'launch' the activity.
		</td>
	</tr>
	<tr>
		<td>interactionType | correctResponsesPattern | choices | scale | 
			source | target | steps</td>
		<td colspan="2"><a href="#interactionacts">See "Interaction Activities"</a></td>
	</tr>
	<tr>
		<td>extensions</td>
		<td>Extensions Object</td>
		<td>A map of other properties as needed (see: <a href="#miscext">Extensions</a>)</td>
	</tr>
</table>  
An LRS should update its internal representation of an activity's definition 
upon receiving a statement with a different definition of the activity from the 
one stored, but only if it considers the Learning Activity Provider to have the 
authority to do so.  

<a name="actmeta"/>
###### Activity Metadata
* Activities with URL identifiers MAY may host metadata using the <a href="#actdef">
activity definition</a> JSON format which is used in statements, with a Content-Type of "application/json"
* If the activity URI is a URL, LRS's SHOULD attempt to GET that URL, and include in HTTP
headers: "Accept: application/json, */*". This SHOULD be done as soon as practical after the LRS
first encounters the activity id.
* If the LRS loads JSON which is a valid activity definition from a URL used as an activity id,
 the LRS SHOULD incorporate the loaded definition into its internal definition for that activity,
while preserving names or definitions not included in the loaded definition.
* If the LRS loads any document from which the LRS can parse an activity definition
from a URL used as an activity id, then the LRS MAY consider this definition when determining
its internal representation of that activity's definition.

<a name="interactionacts"/>
###### Interaction Activities  

Traditional e-learning has included structures for interactions or assessments. 
As a way to allow these practices and structures to extend Experience API's 
utility, this specification include built in definitions for interactions which 
borrows from the CMI data model. These definitions are intended to provide a 
simple and familiar utility for recording interaction data. These definitions 
are simple to use, and consequently limited. It is expected that communities of 
practice requiring richer interactions definitions will do so through the use 
of extensions to an activity's type and definition.  

When defining interaction activities, the activity type: 
"http://adlnet.gov/expapi/activities/cmi.interaction" SHOULD 
be used, and a valid interactionType MUST be specified. If interactionType 
is specified, an LRS processing MAY validate the remaining properties as 
specified in the table below, and return HTTP 400 "Bad Request" if the 
remaining properties are not valid for the interaction type.  
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr>
		<td>interactionType</td>
		<td>String</td>
		<td>As in "cmi.interactions.n.type" as defined in the SCORM 2004 4th 
			edition Runtime Environment.</td>
	</tr>
	<tr>
		<td>correctResponsesPattern</td>
		<td>An array of strings</td>
		<td>Corresponds to 
			"cmi.interactions.n.correct_responses.n.pattern" as defined in 
			the SCORM 2004 4th edition Runtime Environment, where the final 
			<em>n</em> is the index of the array.</td>
	</tr>
	<tr>
		<td>choices | scale | source | target | steps</td>
		<td>Array of interaction components</td>
		<td>Specific to the given interactionType (<a href="#interactionType">see below</a>).</td>
	</tr>
</table>  

###### Interaction Components  

Interaction components are defined as follows:  
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr>
		<td>id</td>
		<td>String</td>
		<td>As in "cmi.interactions.n.id" as defined in the SCORM 2004 4th 
			edition Runtime Environment</td> 
	<tr>
		<td>description</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>a description of the interaction component 
			(for example, the text for a given choice in a multiple-choice interaction)</td>
	</tr>
</table>  

<a name="interactionType"/>

The following table shows the supported lists of CMI interaction components for 
an interaction activity with the given interactionType.  
<table>
	<tr><th>interactionType</th><th>supported component list(s)</th><tr>
	<tr><td>choice, sequencing</td><td>choices</td></tr>
	<tr><td>likert</td><td>scale</td></tr>
	<tr><td>matching</td><td>source, target</td></tr>
	<tr><td>performance</td><td>steps</td></tr>
	<tr><td>true-false, fill-in, numeric, other</td><td>[No component lists defined]</td></tr>
</table>

See [Appendix C](#AppendixC) for examples of activity definitions for each of the cmi.interaction types.

<a name="agentasobj"/>
##### 4.1.4.2 When the "Object" is an Agent or a Group

Statements that specify an Agent or Group as an Object...

- MUST specify an 'objectType' property. 

See [section 4.1.2](#actor) for details regarding Agents.  

<a name="stmtasobj"/>
##### 4.1.4.3 When the "Object" is a Statement

###### Rationale

A statement that is the object in another statement can either be existing or 
new. For example, when grading or commented on an experience that is tracked as an independant event,
the existing statement about that experience will be the object of the statement. Also, 
in the special case of <a href="#voided">voiding</a>, the object is an already 
existing statement. In these situations, a Statement Reference is used.

When the object is an experience that would be misleading as an independant statement,
that experience can be tracked as a statement within a statement. These are called Sub-Statements. 
An example is given further below.

<a name="stmtref"/>
###### Statement References

A statement reference is a pointer to another pre-existing statement.

The table below lists all properties of a Statement Reference object:

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>objectType</td><td>string</td><td>MUST be "StatementRef".</td></tr>
	<tr><td>id</td><td>UUID</td><td>MUST be set to the UUID of a statement 
	which is present on the system.</td></tr>
</table>

###### Statement References - Example

Assuming that some statement has already been stored with 
the ID 8f87ccde-bb56-4c2e-ab83-44982ef22df0, the following example shows how a 
comment could be issued on the original statement, using a new statement:  

```
{
	"actor" : { 
		"objectType": "Agent", 
		"mbox":"mailto:test@example.com" 
	},
	"verb" : { 
		"id":"http://example.com/commented", 
		"display": {
			"en-US":"commented"
		} 
	},
	"object" : {
		"objectType":"StatementRef",
		"id":"8f87ccde-bb56-4c2e-ab83-44982ef22df0"
	},
	"result" : { 
		"response" : "Wow, nice work!" 
	}
}
``` 

<a name="substmt"/>
###### Sub-Statements

A Sub-Statement is a new statement included as part of a parent statement.

###### Requirements
A Sub-Statement...

* MUST specify an "objectType" property with the value "SubStatement";
* MUST NOT have the "id", "stored", or "authority" properties;
* MUST NOT contain a sub-statement of their own i.e. cannot be nested.

Implementations MUST validate the sub-statement as they would other statements, 
with the addition of these rules.

###### Sub-statements - Example

One interesting use of sub-statements is in creating statements of intention. 
For example, using sub-statements we can create statements of the form 
"<I> <planned> (<I> <did> <this>)" to indicate that we've planned to take some 
action. The concrete example that follows logically states that 
"I planned to visit 'Some Awesome Website'". 
 


```
{
	"actor": {
		"objectType": "Agent", 
		"mbox":"mailto:test@example.com" 
	},
	"verb" : { 
		"id":"http://example.com/planned", 
		"display":{
			"en-US":"planned"
		} 
	},
	"object": {
		"objectType": "SubStatement",
		"actor" : {
			"objectType": "Agent", 
			"mbox":"mailto:test@example.com" 
		},
		"verb" : { 
			"id":"http://example.com/visited", 
			"display":{
				"en-US":"will visit"
			} 
		},
		"object": {
			"id":"http://example.com/website",
			"definition": { 
				"name" : {
					"en-US":"Some Awesome Website"
				}
			}
		}
	}
}
```

###### NOTE: 
Whilst the verb display MAY take the future tense, the verb id SHOULD remain past tense.
Later, when 'I' actually visit 'Some Awesome Website', reporting tools can thereby match the verb ids. 

<a name="result"/>
#### 4.1.5 Result:
###### Description: 

An optional field that represents a measured outcome related to the statement in which it is included.

###### Details

A result can be completion, success, score, etc. 
The 'Result' field may also contain arbitrary measurements if needed by the Learning Activity Provider.

<table border="1">
<tr><th>property</th><th>type</th><th>description</th></tr>
<td>score</td>
<td><a href ="#Score">Score object</a></td>
<td>The score of the agent in relation to the success or quality of the experience. </a></td>
</tr>
<tr><td>success</td><td>Boolean</td><td>Was the learning activity successful?</td>
</tr>
<tr><td>completion</td><td>Boolean</td><td>Was the learning activity completed?</td>
</tr>
<tr>
<td>response</td><td>String</td><td>A response appropriately formatted for the given activity.</td>
</tr>
<tr>
<td>duration</td><td>Formatted according to <a href="https://en.wikipedia.org/wiki/ISO_8601%22%20%5Cl%20%22Durations">ISO 8601</a> with  a precision of 0.01 seconds</td><td>Period of time over which the statement occurred.</td>
</tr>
<tr>
<td>Extensions</td><td><a href="#miscext">Extensions object</a></td><td>A map of other properties as needed.</td>
</tr>
</table> 

<a name="Score"/>
##### 4.1.5.1 Score property

###### Description
An optional numeric field that represents the outcome of a graded activity achieved by an agent.


The table below defines the score object. 
<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>scaled</td><td>Decimal number between -1 and 1, inclusive</td><td>Cf. 'cmi.score.scaled' in SCORM 2004 4th Edition</td></tr>
	<tr><td>raw</td><td>Decimal number between min and max (if present, otherwise unrestricted), inclusive</td><td>Cf. 'cmi.score.raw'</td></tr>
	<tr><td>min</td><td>Decimal number less than max (if present)</td><td>Cf. 'cmi.score.min'</td></tr>
	<tr><td>max</td><td>Decimal number greater than min (if present)</td><td>Cf. 'cmi.score.max'</td></tr>
</table>

###### Details

The Score property...

- SHOULD include 'scaled' if a logical percent based score is known;
- SHOULD NOT be used for scores relating to progress or completion. Consider using an extension from an extension 
profile instead.

<a name="context"/>
#### 4.1.6 Context

###### Description: 
An optional field that provides a place to add contextual information to a statement. All its field properties are 
optional.

###### Rationale: 
The "context" field provides a place to add some contextual information to a statement. It can store information such 
as the instructor for an experience, if this experience happened as part of a team activity, or how an experience fits 
into some broader activity.

<table border="1">
<tr><th>property</th><th>type</th><th>description</th></tr>
<tr>
<td>registration</td>
<td>UUID</td>
<td>The registration that the statement is associated with. <a href ="#Registration">See 4.1.6.1</a></td>

</tr>
<tr>
<td>instructor</td>
<td>Agent (may be a group)</td>
<td>Instructor that the statement relates to, if not included as the Actor of the statement.</td>

</tr>
<tr>
<td>team</td>
<td>Group</td>
<td>Team that this statement relates to, if not included as the Actor of the statement.</td>

</tr>
<tr>
<td>contextActivities</td>
<td>contextActivities object</td>
<td>A map of the types of learning activity context that this statement is related to.
Valid context types are: "parent", "grouping", "category", "other". <a href ="#contextActivities">See 4.1.6.2</a></td>

</tr>
<tr>
<td>revision</td>
<td>String</td>
<td>Revision of the learning activity associated with this statement. Format is free.<br>
- SHOULD be used to track fixes of minor issues (like a spelling error), <br>
- SHOULD NOT be used if there is a major change in learning objectives, pedagogy, or assets of an activity. (Use a new 
activity ID instead).<br>
- MUST NOT be used if the statement's object is a Person.


</tr>
<tr>
<td>platform</td>
<td>String</td>
<td>Platform used in the experience of this learning activity. <br>
- MUST NOT be used if the statement's object is a Person.
<br>Defined vocabulary, TBD. </td>

</tr>
<tr>
<td>language</td>
<td>String (as defined in <a href="http://tools.ietf.org/html/rfc5646">RFC 5646</a>)</td>
<td>Code representing the language in which the experience being recorded in this statement (mainly) occurred in, if 
applicable and known.<br>
- MUST NOT be used if not applicable or unknown.
</td>

</tr>
<tr>
<td>statement</td>
<td>Statement by reference or by object</td>
<td>Another statement (either existing or new), which should be considered as context for this statement. 
<a href = "#stmtasobj">See section 4.1.4.3</a> for details about including statements within other statements. </td>

</tr>
<tr>
<td>extensions</td>
<td>Extensions object</td>
<td>A map of any other domain-specific context relevant to this statement. For example, in a flight simulator 
altitude, airspeed, wind, attitude, GPS coordinates might all be relevant (<a href="#miscext">See section 5.3</a>)</td>

</tr>

</table>
<a name="Registration"/>
##### 4.1.6.1 Registration property

###### Description:
An instance of a learner undertaking a particular learning activity.

###### Details:
When an LRS is an integral part of an LMS, the LMS likely supports the concept of registration. For example all 
the statements about one time a person took a test might have one registration. If the learner takes the test again, 
the statements from this second occasion would have a different registration from the first occasion. 

The LMS may also close the registration at some point when it considers the learning experience complete. For 
Experience API purposes, a registration may be applied more broadly; an LMS could assign a group of students to a 
group of activities and track all related statements in one registration.

<a name="contextActivities"/>
##### 4.1.6.2 Context activities property

###### Description: 
A map of the types of context to ids of learning activities, or a learning activity this statement is related to.

###### Rationale: 
Many activities are not autonomous or stand-alone, but form a part in a larger logical group of activities. "Context 
activities" allow for these larger activities to be represented in a structured manner.

###### Details:
There are three valid context types. All, any or none of these MAY be used in a given statement:

1. __Parent__ : an activity with a direct relation to the activity which is the object of the statement.
For example: a statement about a quiz question would have the quiz as its parent activity.
 
2. __Grouping__ : an activity with an indirect relation to the activity which is the object of the statement.
For example: a course that is part of a qualification. The course has several classes. The course relates to a class 
as the parent, the qualification relates to the class as the grouping.

3. __Category__ : an activity used to categorize the statement. "Tags" would be a synonym. Main driver is to have a 
4. way to get "profile" in the statement in a searchable way, but this includes more general categories of statements.

For example: Anna attempts a bilogy exam, and the statement is tracked using the CMI-5 profile.
The statement's activity refers to the exam, and the category is the CMI-5 profile.

4. __Other__ : a context activity that doesn't fit one of the other fields.
For example: Anna studies a textbook for a biology exam. The statement's activity refers to the textbook, and the 
exam is a context activity of type "other".

###### Example I:

```
{
	"other" : {
	"id" : "http://example.adlnet.gov/xapi/example/test"
	}
}
```
###### Example II: 
Consider the following hierarchical structure: "Questions 1 to 6" are part of "Test 1" which in turn belongs to the course "Algebra 1". 
The six questions are registered as part of the test by declaring "Test 1" as their parent. Also they are grouped with other statements about "Algebra 1" to fully mirror the hierarchy. This is particularly useful with the object of the statement is an agent, not an activity. "Andrew mentored Ben with context Algebra I".

```
{
	"parent" : {
	"id" : "http://example.adlnet.gov/xapi/example/test 1"
	},
	"grouping" : {
	"id" : "http://example.adlnet.gov/xapi/example/Algebra1"
	}
}
```

<a name="timestamp"/>
#### 4.1.7 Timestamp:

###### Definition
The time at which a statement about an experience took place.

###### Requirements
A timestamp:

* MUST be formatted according to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations);
* MAY be truncated or rounded to a precision of at least 3 decimal digits for seconds (millisecond precision MUST be preserved) 
* SHOULD include the timezone;
* MAY be a moment in the future, to denote a deadline for planned learning, provided it is included inside a SubStatement;
* SHOULD be the current or a past time when it is outside of a SubStatement.

A reporting tool:

* MAY consider timestamps from different timezones that represent the same logical time to be equivalent.

###### Details
A timestamp in a statement related to learning that occurs outside of the system can differ from 
[4.1.8. Stored](#stored) (the system time of the event). Namely, there can be delays between the occurrence of the 
experience and the reception of the corresponding statement by the LRS. Another cause is when statements are propagated 
to other systems.


<a name="stored"/> 
#### 4.1.8 Stored:
###### Definition: 
The time at which a statement is stored by the LRS.

###### Requirements
Stored time:

* MUST be formatted according to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations);
* MAY be truncated or rounded to a precision of at least 3 decimal digits for seconds (millisecond precision MUST be preserved) 
* SHOULD include the timezone;
* SHOULD be the current or a past time

A reporting tool:

* MAY consider stored time from different timezones that represent the same logical time to be equivalent.

<a name="authority"/> 
#### 4.1.9 Authority:
The authority property provides information about who or what has asserted that 
this statement is true. Consequently, the asserting authority may be an 
[Agent](#agent) (representing the authenticating user or some system or 
application), or in the case of 3-legged OAuth workflows, a [Group](#group) 
of two Agents representing an application and user together. 
Unless used in the aforementioned 3-legged OAuth workflow, a Group MUST NOT 
be used to assert authority.  

###### LRS Requirements:
* The LRS SHOULD overwrite the authority on all stored recieved statements, based on 
 the credentials used to send those statemens.
* The LRS MAY leave the submitted authority unchanged but SHOULD do so only where a strong
 trust relationship has been established, and with extreme caution.
* The LRS MUST ensure that all statements stored have an authority.

If a statement is stored using a validated OAuth connection, and the LRS creates 
or modifies the authority property of the statement, the authority MUST contain 
an agent object that represents the OAuth consumer, either by itself, or as part 
of a group in the case of 3-legged OAuth. This agent MUST be identified by account, 
and MUST use the consumer key as the account name field. If the OAuth consumer is 
a registered application,then the token request endpoint MUST be used as the 
account homePage, otherwise the temporary credentials endpoint must be used as 
the account homePage.  

Except as specified in the paragraph above, agent objects MUST NOT use any OAuth 
endpoint as an account homePage.  

The behavior of an LRS SHOULD NOT rely on Agents with an account using the 
temporary credentials endpoint as the homePage and with matching account names 
coming from the same source, as there is no way to verify that, since multiple 
unregistered applications could choose the same consumer key. Each unregistered 
consumer SHOULD pick a unique consumer key.  

If a user connects directly (using HTTP Basic Auth) 
or is included as part of a 3-legged OAuth workflow, the LRS MUST include the user 
as an Agent in the authority, and MAY identify the user with any of the legal 
identifying properties.  

###### OAuth Authorities  

In a 3-legged OAuth workflow, authentication involves both an OAuth consumer 
and a user of the OAuth service provider. For instance, requests made by an 
authorized Twitter plugin on your Facebook account will include credentials 
that are specific not only to Twitter as a client application, or you as a 
user, but the unique combination of both.  

To support this concept, an LRS preparing the authority of a statement received 
via 3-legged OAuth MUST use a pairing of an application and a user. Below is a 
concrete example which represents a pairing of an OAuth consumer and a user.  

```
"authority": {
	"objectType" : "group",
	"member": [
		{
			"account": {
				"homePage":"http://example.com/XAPI/OAuth/Token",
				"name":"oauth_consumer_x75db"
			}
		},
		{ 
			"mbox":"mailto:bob@example.com" 
		}
	]
}
```
<a name="voided"/>
#### 4.1.10 Voided:
###### Rationale

The certainty that an LRS has an accurate and complete collection of data is guaranteed by the fact that statements 
cannot be logically changed or deleted. This immutability of statements is a key factor in enabling the distributed 
nature of Experience API.
However, not all statements are perpetually valid once they have been issued. Mistakes or other factors could require 
that a previously made statement is marked as invalid. This is called ‘voiding a statement’ and the reserved verb 
“http://adlnet.gov/expapi/voided” is used for this purpose. 

###### Requirements
When issuing a statement that voids another, the object of that voiding statement...

* MUST have the “objectType” field set to “Statement”;
* MUST specify the ID of the statement-to-be-voided by it’s “id” field.


Upon receiving a statement that voids another, the LRS...

* MAY roll back any changes to activity or agent definitions which were introduced by the statement that was just voided;
* SHOULD return a descriptive error if the target statement cannot be found;
* MUST NOT report the voided statement when queried, but MUST report the voiding statement 
(see <a href="#queryStatementRef">StatementRef</a> in 7.2 Statement API).


###### Example
```
{
	"actor" : {
		"objectType": "Agent",
		"name" : "Example Admin",
		"mbox" : "mailto:admin@example.adlnet.gov"
	},
	"verb" : {
		"id":"http://adlnet.gov/expapi/verbs/voided",
		"display":{
			"en-US":"voided"
		}
	},
	"object" : {
		"objectType":"StatementRef",
		"id" : "e05aa883-acaf-40ad-bf54-02c8ce485fb0"
	}
}
```  

This example statement voids a previous statement which it identifies with the statement ID 
"e05aa883-acaf-40ad-bf54-02c8ce485fb0".


###### Details
Any statement that voids another cannot itself be voided. An activity provider that wants to “unvoid” a previously 
voided statement...

* SHOULD issue that statement again under a new ID

A reporting system...

* SHOULD NOT show voided or voiding statements by default.

See ["Statement References"](#stmtref) in section [4.1.4.3](#stmtasobj) for details about making references to other 
statements. 

<a name="attachments"/>
#### 4.1.11 Attachments

###### Description: 
A digital artefact providing evidence of a learning experience.

###### Rationale: 
In some cases an attachment may logically be an important part of a learning record. Think of a simulated 
communication with ATC, an essay, a video,  etc. Another example of such an attachment is (the image of) a 
certificate that was granted as a result of an experience. It is useful to have a way to store these attachments 
in and retrieve them from an LRS. 

###### Details:
The table below lists all properties of the Attachment object.
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<a name="attachmentUsage" />
		<td>usageType</td>
		<td>URI</td>
		<td>Identifies the usage of this attachment. For example: one expected use case
		for attachments is to include a "completion certificate". A type URI corresponding
		to this usage should be coined, and used with completion certificate attachments.</td>
		<td>yes</td>
	</tr>
	<tr>
		<td>display</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>Display name (title) of this attachment.</td>
		<td>yes</td>
	</tr>
	<tr>
		<td>description</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>A description of the attachment</td>
		<td>no</td>
	</tr>
	<tr>
		<td>contentType</td>
		<td><a href="https://www.ietf.org/rfc/rfc2046.txt?number=2046">Internet Media Type</a></td>
		<td>The content type of the attachment.</td>
		<td>yes</td>
	</tr>
	<tr>
		<td>length</td>
		<td>integer</td>
		<td>The length of the attachment data in octets</td>
		<td>yes</td>
	</tr>
	<tr>
		<td>sha2</td>
		<td>base64</td>
		<td>The SHA-2 hash of the attachment data. A minimum key size of 256 bits is recommended.</td>
		<td>yes</td>
	</tr>
	<tr>
		<td>fileUrl</td>
		<td>URL</td>
		<td>A URL at which the attachment data may be retrieved, or from which it used to be retrievable. </td>
		<td>no</td>
	</tr>
</table>

###### Procedure for the exchange of attachments
Since these attachments may lead to very large statements, it should be possible for a client to filter out 
attachments when retrieving statements, by following this procedure:

1. A statement including an attachment is construed according to the Transmission Format described below.
2. The statement is sent to the receiving system using a content-Type of "multipart/mixed". The attachments are 
placed at the end of such transmissions.
3. The receiving system decides whether to accept or reject the statement based on the information in the first part.
4. If it accepts the attachment, it can match the raw data of an attachment with the attachment header in a statement 
by comparing the SHA-2 of the raw data to the SHA-2 declared in the header.


###### Requirements for statement streams that include attachments

A statement stream that includes attachments:

* MUST be of type "multipart/mixed" rather than "application/json";
	* The first part of the multipart document MUST contain the statements themselves, with type "applicaton/json";
	* Each additional part contains the raw data for an attachment and forms a logical part of the statement. This 
	capability will be available when issuing PUT or POST against the statement resource.
* SHOULD only include one copy of an attachment when the same attachment is used in multiple statements that are sent 
in one message;
* MUST conform to the definition of multipart/mixed in RFC 1341;
* SHOULD include a Content-type field in each part's header, for the first part this MUST be "application/json";
* MUST include a X-Experience-API-Hash field in each part's header after the first (statements) part;
	* This field MUST be set to match the "sha2" property of the attachment declaration corresponding to the 
	attachment included in this part.
* MUST include a Content-Transfer-Encoding field with a value of "binary" in each part's header after the first (statements) part;


###### Requirements for the LRS:

* MUST accept statements via the statements resource PUT or POST that contain attachments in the Transmission Format 
described above;
* MUST reject statements having attachments that do not contain a fileUrl, and do not have a hash matching any raw 
data received;
* MUST include attachments in the Transmission Format described above when requested by the client (see query API);
* MUST NOT pull statements from another LRS without requesting attacments;
* MUST NOT push statements into another LRS without including attachments;
* MAY reject (batches of) statements that are larger than the LRS is configured to allow;
* SHOULD accept statements in the above format that don't declare any attachments.
* SHOULD assume a Content-Transfer-Encoding of binary for attachment parts

###### Requirements for the client:
* MAY send statements with attachments as described above;
* MAY send multiple statements where some or all have attachments if using "POST".

###### Example:

Below is an example of a very simple statement with an attachment. Please note the following:

* The boundary in the sample was chosen to demonstrate valid character classes;
* The selected boundary does not appear in any of the parts;
* For readability the sample attachment is text/plain. Even if it had been a 'binary' type
like 'image/jpeg' no encoding would be done, the raw octets would be included;
* Per RFC 1341, the boundary is <CRLF> followed by -- followed by the boundary string declared in the header.

Don't forget the ```<CRLF>```  when building or parsing these messages.

Headers:

``` 
Content-Type: multipart/mixed; boundary=abcABC0123'()+_,-./:=?
X-Experience-API-Version:1.0
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

<a name="retstmts"/> 
### 4.2 Retrieval of Statements:
A collection of statements can be retrieved by performing a query on the "statements" 
endpoint, see section [7.2 "Statement API"](#stmtapi) for details.  
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>statements</td><td>Array of Statements</td>
		<td>List of statements. If the list returned has been limited (due to pagination), 
			and there are more results, they will be located at the "statements" property 
			within the container located at the URL provided by the "more" element of 
			this statement result object.
		</td>
	</tr>
	<tr><td>more</td><td>URL</td>
		<td>Relative URL that may be used to fetch more results, including the full path 
			and optionally a query string but excluding scheme, host, and port. 
			Empty string if there are no more results to fetch.<br/><br/>

			This URL must be usable for at least 24 hours after it is returned by the LRS. 
			In order to avoid the need to store these URLs and associated query data, an 
			LRS may include all necessary information within the URL to continue the 
			query, but should avoid generating extremely long URLs. The consumer should 
			not attempt to interpret any meaning from the URL returned.
		</td>
	</tr>
</table>

<a name="misctypes"/> 
## 5.0 Miscellaneous Types
<a name="miscdocument"/> 
### 5.1 Document:
The Experience API provides a facility for Activity Providers to save arbitrary data in 
the form of documents, which may be related to an Activity, Agent, or combination of both.  
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>id</td><td>String</td><td>Set by AP, unique within state scope (learner, activity).</td></tr>
	<tr><td>updated</td><td>Timestamp</td><td>When the document was most recently modified.</td></tr>
	<tr><td>contents</td><td>Arbitrary binary data</td><td>The contents of the document</td></tr>
</table>
Note that in the REST binding, State is a document not an object. ID is stored in the URL, 
updated is HTTP header information, and contents is the HTTP document itself.  


<a name="misclangmap"/>
### 5.2 Language Map
A language map is a dictionary where the key is a 
[RFC 5646 Language Tag](http://tools.ietf.org/html/rfc5646), and the value is a 
string in the language specified in the tag. This map should be populated as 
fully as possible based on the knowledge of the string in question in different 
languages.  

<a name="miscext"/> 
### 5.3 Extensions
Extensions are defined by a map. The keys of that map MUST be URLs, and the 
values MAY be any JSON value or data structure. The meaning and structure of 
extension values under a URL key are defined by the person who coined the URL, 
who SHOULD be the owner of the URL, or have permission from the owner. The owner 
of the URL SHOULD make a human-readable description of the intended meaning of 
the extension supported by the URL accessible at the URL. A learning record store 
MUST NOT reject an Experience API statement based on the values of the extensions 
map.  

Extensions are available as part of activity definitions, as part of statement 
context, or as part of some statement result. In each case, they’re intended to 
provide a natural way to extend those elements for some specialized use. The 
contents of these extensions might be something valuable to just one application, 
or it might be a convention used by an entire community of practice.  

Extensions should logically relate to the part of the statement where they are 
present. Extensions in statement context should provide context to the core 
experience, while those in the result should provide elements related to some 
outcome. For activities, they should provide additional information that helps 
define an activity within some custom application or community.  

###### Note: 
A statement should not be totally defined by its extensions, and be 
meaningless otherwise. Experience API statements should be capturing experiences 
among actors and objects, and SHOULD always strive to map as much information as 
possible into the built in elements, in order to leverage interoperability among 
Experience API conformant tools.  

<a name="miscmeta"/>
### 5.4 Identifier Metadata
There are several types of URI identifiers used in this specification:
* <a href="#verb">verb</a>
* <a href="#acturi">activity id</a>
* <a href="#acttype">activity type</a>
* <a href="#miscext">extension key</a>
* <a href="#attachmentUsage">attachment usage type</a>

For activity ids, see <a href="#actdef">activity definition</a>.

For all other identifiers, metadata MAY be provided in the following JSON format:

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr>
		<td>name</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>The human readable/visual name</td>
	</tr>
	<tr>
		<td>description</td>
		<td><a href="misclangmap">Language Map</a></td>
		<td>description</td>
	</tr>
</table>

* For any of the identifier URIs above, if the URI is a URL that was coined for use with this
specification, the owner of that URL SHOULD
make this JSON metadata available at that URL when the URL is requested and a Content-Type
of "applicaton/json" is requested.
* If this metadata is provided as describe above, it is the canonical source of information
about the identifier it describes
* Other sources of information MAY be used to fill in missing details, such as translations, or
take the place of this metadata entirely if it was not provided or can not be loaded. This MAY
include metadata in other formats stored at the URL of an identifier, particularly if that
identifier was not coined for use with this specification.

<a href="#verb-lists-and-repositories">As with verbs</a>, we recommend 
that Learning Activity Providers look for and use established, 
widely adopted identifiers for all types of URI identifier other than activity id. Where an
identifier already exists, the Learning Activity Provider:

* SHOULD use the corresponding existing identifier;
* MAY create and use their own verbs where a suitable identifier does not already exist.

<a name="rtcom"/>
## 6.0 Runtime Communication

Sections 6 and 7 detail the more technical side of the Experience API, dealing with 
how statements are transferred between Activity Provider and LRS. A number of libraries 
are under development for a range of technologies (including JavaScript) which handle 
this part of the specification. It therefore may not be necessary for content developers 
to fully understand every detail of this part of the specification.

<a name="encoding"/> 
### 6.1 Encoding:
All strings must be encoded and interpreted as UTF-8.  

<a name="apiversioning"/> 
### 6.2 API Versioning:


###### Requirement

Every request from a client and every response from the LRS must include an HTTP header with the name “X-Experience-API Version” and the version number as the value.

Example:  ``X-Experience-API Version : 1.0``
 
###### Rationale

Future revisions of the spec may introduce changes such as properties added to statements.
Systems retrieving statements may then receive responses that include statements of different versions. The version header allows for these version differences to be handled correctly, and to ascertain that no partial or mixed LRS version implementations exist.

###### Details

Requirements for the LRS:

* MUST include the "X-Experience-API Version" header in every response;
* MUST set this header to "1.0";
* MUST reject requests with version header prior to "1.0" unless such requests are routed to a fully conformant implementation of the prior version specified in the header;
* MUST make these rejects by responding with an HTTP 400 error including a short description of the problem.


Requirements for the client:

* SHOULD tolerate receiving responses with a version of "1.0" or later;
* SHOULD tolerate receiving data structures with additional properties;
* SHOULD ignore any properties not defined in version 1.0 of the spec.


Converting statements to other versions:

* Systems MUST NOT convert statements of newer versions into a prior version format e.g. in order to handle version differences.
* Systems MAY convert statements of older versions into a newer version only by following the methods described in
<a href="#AppendixE">Appendix E: Converting Statements to 1.0</a>.

<a name="concurrency"/> 
### 6.3 Concurrency:
In order to prevent "lost edits" due to API consumers PUT-ing changes based on 
old data, XAPI will use HTTP 1.1 entity tags 
([ETags](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19)) 
to implement optimistic concurrency control in the portions of the API 
where PUT may overwrite existing data. (State API, Actor and Activity 
profile APIs). The requirements in the rest of this "Concurrency" section 
only apply to those APIs.  

When responding to a GET request, the LRS will add an ETag HTTP header to the 
response. The value of this header must be a hexidecimal string of the 
SHA-1 digest of the contents, and must be enclosed in quotes.  

The reason for specifying the LRS ETag format is to allow API consumers that 
can't read the ETag header to calculate it themselves.  

When responding to a PUT request, the LRS must handle the 
[If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24) 
header or [If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26) 
header as described in RFC2616, HTTP 1.1, if the If-Match header contains an 
ETag, or the If-None-Match header contains "*". In the first case, this is to 
detect modifications made after the consumer last fetched the document, and in 
the second case, this is to detect when there is a resource present that the 
consumer is not aware of.  

In either of the above cases, if the header precondition specified fails, 
the LRS must return HTTP status 412 "Precondition Failed", and make no 
modification to the resource.  

XAPI consumers should use these headers to avoid concurrency problems. The State 
API will permit PUT statements without concurrency headers, since state conflicts 
are unlikely. For other APIs that use PUT (Actor and Activity Profile), the 
headers are required. If a PUT request is received without either header for a 
resource that already exists, the LRS must return HTTP status 409 "Conflict", 
and return a plain text body explaining that the consumer must check the current 
state of the resource and set the “If-Match” header with the current ETag to 
resolve the conflict. In this case, the LRS must make no modification to the resource.  

<a name="security"/>
### 6.4 Security:

###### Requirement

The LRS MUST support authentication using at least one of the following methods:
-	OAuth 1.0 (rfc5849), with signature methods of "HMAC-SHA1", "RSA-SHA1", and "PLAINTEXT"
- HTTP Basic Authentication
- Common Access Cards (implementation details to follow in a later version)

###### Rationale

The LRS is always responsible for making, or delegating, decisions on the validity of statements, and determining what operations may be performed based on the credentials used.

###### Authentication scenarios

The below matrix describes the possible authentication scenarios.

A **registered application** is an application that will authenticate to the LRS as an OAuth  consumer that has been registered with the LRS.
A **known user** is a user account on the LRS, or on a system which the LRS trusts to define users.


<table border="1">
<tr><th></th><th>Known user</th><th>User unknown</th></tr>
<tr>
<td>Application is registered</td>
<td>Standard workflow for OAuth.</td>
<td>LRS trusts application to access XAPI without additional user credentials. OAuth token steps are not invoked</td>
</tr>
<tr>
<td>Application is not registered</td>
<td>The application Agent is not identified as a registered Agent and the LRS cannot make assumptions on its identity.</td>
<td></br></td>
</tr>
<tr>
<td>No application</td>
<td>HTTPBasicAuthentication is used instead of OAuth, since no application is involved.</td>
<td></br></td>
</tr>
<tr>
<td>No authentication</td>
<td align="center"colspan="2">MAY be supported by the LRS, possibly for testing purposes.</td>

</tr>

</table> 

	
#### 6.4.1	
###### How to handle each scenario

###### General
* The LRS must record the application's name and a unique consumer key (identifier);
* The LRS must provide a mechanism to complete this registration, or delegate to another system that provides such 
a mechanism;
The means by which this registration is accomplished are not defined by OAuth or the XAPI.

###### Application registered + known user

* Use endpoints below to complete the standard workflow.
* If this form of authentication is used  to record statements and no  authority  is specified, the LRS should record 
the  authority  as a group consisting of an Agent representing the registered application, and a Person representing 
the known user.

###### Application not registered + user unknown

* LRS will honor requests that are signed using OAuth with the registered application’s credentials and with an empty 
token and token secret.
* If this form of authentication is used  to record statements and no  authority  is specified, the LRS should record 
the  authorityas the Agent representing the registered application.

###### Application not registered + known user 

* Use a blank consumer secret;
* Call “Temporary Credential” request;
* Specify “consumer_ name” and other usual parameters;
User will then see “consumer_ name” plus a warning that the identity of the application requesting authorization 
cannot be verified.
* the LRS MUST record an  authority that includes both that application and the authenticating user, as a group, 
since OAuth specifies an application.

###### No application + known user 

* Use username/password combination that corresponds to an LRS login.
* Authority to be recorded as the Agent identified by the login, **unless…**
	* other Authority is specified **and…**
	* LRS trusts the known user to specify this Authority.

###### No authorization

* Requests should include headers for HTTP Basic Authentication based on a blank username and password, in order to 
distinguish an explicitly unauthenticated request from a  request that should be given a HTTP Basic Authentication 
challenge.

###### Details

Requirements for the LRS:

* MUST be able to be configured for complete support of the XAPI 
	* With any of the above methods;
	* In any of the workflow scenarios above.
* MAY (for security reasons): 
	* Support a subset of the above methods;
	* Limit the known users or registered applications.
* SHOULD at a minimum supply Oauth with "HMAC-SHA1" and "RSA-SHA1" signatures.


<a name="oauthscope"/> 
#### 6.4.2 OAuth Authorization Scope
The LRS will accept a scope parameter as defined in 
[OAuth 2.0](https://tools.ietf.org/html/draft-ietf-oauth-v2-22%22%20%5Cl%20%22section-3.3). 
If no scope is specified, a requested scope of "statements/write" and 
"statements/read/mine" will be assumed. The list of scopes determines the set 
of permissions that is being requested. An API client should request only the 
minimal needed scopes, to increase the chances that the request will be granted.  

LRSs are not required to support any of these scopes except “all”. These are 
recommendations for scopes which should enable an LRS and an application 
communicating using the XAPI to negotiate a level of access which accomplishes 
what the application needs while minimizing the potential for misuse. The 
limitations of each scope are in addition to any security limitations placed on 
the user account associated with the request.  

For example, an instructor might grant "statements/read" to a reporting tool, 
but the LRS would still limit that tool to statements that the instructor 
could read if querying the LRS with their credentials directly (such as 
statements relating to their students).  

XAPI scope values:  
<table>
	<tr><th>Scope</th><th>Permission</th></tr>
	<tr><td>statements/write</td><td>write any statement</td></tr>
	<tr>
		<td>statements/read/mine</td>
		<td>read statements written by "me", that is with an authority 
			matching what the LRS would assign if writing a statement with 
			the current token.
		</td>
	</tr>
	<tr><td>statements/read</td><td>read any statement</td>
	<tr>
		<td>state</td>
		<td>read/write state data, limited to activities and actors 
			associated with the current token to the extent it is 
			possible to determine this relationship.
		</td>
	</tr>
	<tr>
		<td>define</td>
		<td>(re)Define activities and actors. If storing a statement 
			when this is not granted, IDs will be saved and the LRS 
			may save the original statement for audit purposes, but 
			should not update its internal representation of any 
			actors or activities.
		</td>
	</tr>
	<tr>
		<td>profile</td>
		<td>read/write profile data, limited to activities and actors 
			associated with the current token to the extent it is 
			possible to determine this relationship.
		</td>
	</tr>
	<tr><td>all/read</td><td>unrestricted read access</td></tr>
	<tr><td>all</td><td>unrestricted access</td></tr>
</table>

###### OAuth Extended Parameters  
Note that the parameters "consumer_name" and "scope" are not part of 
OAuth 1.0, and therefore if used should be passed as query string or form 
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
		<td>http://example.com/XAPI/OAuth/initiate</td>
	</tr>
	<tr>
		<td>Resource Owner Authorization</td>
		<td>OAuth/authorize</td>
		<td>http://example.com/XAPI/OAuth/authorize</td>
	</tr>
	<tr>
		<td>Token Request</td>
		<td>OAuth/token</td>
		<td>http://example.com/XAPI/OAuth/token </td>
	</tr>
</table>

<a name="datatransfer"/> 
## 7.0 Data Transfer (REST)
This section describes The XAPI consists of 4 sub-APIs: statement, state, 
learner, and activity profile. The four sub-APIs of the Experience API 
are handled via RESTful HTTP methods. The statement API can be used by itself 
to track learning records.  

Note: In all of the example endpoints given in the specification, "http://example.com/XAPI/"
is the example URL of the LRS and everything after this represents the endpoint which MUST
be used. 

<a name="errorcodes"/> 
### 7.1 Error Codes
The list below offers some general guidance on HTTP error codes that could
be returned from various methods in the API. An LRS MUST return the error
code most appropriate to the error condition based on the list below, and
SHOULD return a message in the
response explaining the cause of the error.  
- 400 Bad Request - indicates
an error condition caused by an invalid or missing argument. The term 
"invalid arguments" includes malformed JSON or invalid object structures.
- 401 Unauthorized - Indicates that authentication is required, or in the 
case authentication has been posted in the request, that the given credentials 
have been refused.
- 403 Forbidden - Indicates that the request is unauthorized for the given 
credentials. Note this is different than refusing the credentials given. In 
this case, the credentials have been validated, but the authenticated client 
is not allowed to perform the given action.
- 404 Not Found - Indicates the requested resource was not found. May be 
returned by any method that returns a uniquely identified resource, for 
instance, any state or profile API call targeting a specific document, or 
the method to retrieve a single statement.
- 409 Conflict - Indicates an error condition due to a conflict with the 
current state of a resource, in the case of state and profile API calls, or 
in the statement PUT call. See section 6.3 for more details.
- 412 Precondition Failed - Indicates an error condition due to a failure of 
a precondition posted with the request, in the case of state and profile API 
calls. See section 6.3 for more details.
- 413 Request Entity Too Large - Indicates that the LRS has rejected the statement or document
because it's size is larger than the maximum allowed by the LRS. The LRS is free to
choose any limit and MAY vary this limit on any basis e.g. per authority, but
MUST be configurable to accept statements of any size.
- 500 Internal Server Error - General error condition, typically indicating an 
unexpected exception in processing on the server.

<a name="stmtapi"/> 
### 7.2 Statement API:
The basic communication mechanism of the Experience API.  

###### PUT statements
Example endpoint: http://example.com/XAPI/statements

Stores statement with the given ID. This MUST NOT modify an existing statement. 
If the statement ID already exists, the receiving system SHOULD verify the 
received statement matches the existing one and return 409 Conflict if they 
do not match.  

An LRS MUST NOT make any modifications to its state based on a receiving a statement 
with a statementID that it already has a statement for. Whether it responds with 
"409 Conflict", or "204 No Content", it MUST NOT modify the statement or any other 
object.  

Returns: 204 No Content  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th></tr>
	<tr><td>statementId</td><td>String</td><td> </td><td>ID of statement to record</td></tr>
</table>

###### POST statements
Example endpoint: http://example.com/XAPI/statements

Stores a statement, or a set of statements. Since the PUT method targets a specific 
statement ID, POST must be used rather than PUT to save multiple statements, or to 
save one statement without first generating a statement ID. An alternative for systems 
that generate a large amount of statements is to provide the LRS side of the API 
on the AP, and have the LRS query that API for the list of updated (or new) 
statements periodically. This will likely only be a realistic option for systems 
that provide a lot of data to the LRS.  

Returns: 200 OK, statement ID(s) (UUID).  

###### GET statements
Example endpoint: http://example.com/XAPI/statements

This method may be called to fetch a single statement or multiple statements. If the
statementId or voidedStatementId parameter is specified a single statement is returned.
Otherwise returns: A [StatementResult](#retstmts) object,
a list of statements in reverse chronological order based on "stored" time, 
subject to permissions and maximum list length. If additional results are 
available, a URL to retrieve them will be included in the StatementResult 
object.

Returns: 200 OK, statement or [Statement Result](#retstmts) (See section 4.2 for details)

<table>
	<tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th></tr>
	<tr><td>statementId</td><td>String</td><td> </td><td>ID of statement to fetch</td></tr>
	<tr><td>voidedStatementId</td><td>String</td><td> </td><td>ID of voided statement to fetch. see <a href="#voidedStatements">Voided Statements</a></td></tr>
	<tr><td>agent</td><td>Agent or identified Group Object (JSON)</td><td> </td>
		<td>Filter, only return statements for which the specified agent or group is the actor or object of the statement.
			<ul><li> Agents or identified groups are equal when the same Inverse Functional Identifier is used in each
			object compared and those Inverse Functional Identifiers have equal values.
			</li><li>For the purposes of this filter, groups that have members which match the specified agent
			based on their Inverse Functional Identifier as described above are considered a match</li></ul>
			<br><br>See <a href="#actor">agent/group</a> object definition
			for details.
		</td>
	</tr>
	<tr><td>verb</td><td>String</td><td> </td>
		<td>Filter, only return statements matching the specified verb id.</td>
	</tr>
	<tr><td>activity</td><td>Activity id (URI)</td><td> </td>
		<td>Filter, only return statements for which the object of the statement is an activity with the specified id.
		</td>
	</tr>
	<tr><td>registration</td><td>UUID</td><td> </td>
		<td>Filter, only return statements matching the specified registration 
			ID. Note that although frequently a unique registration ID will be used 
			for one actor assigned to one activity, this should not be assumed. 
			If only statements for a certain actor or activity should be returned, 
			those parameters should also be specified.
		</td>
	</tr>
	<tr><td>related_activities</td><td>Boolean</td><td>False</td>
		<td>Apply the activity filter broadly. Include statements for which the object,
		any of the  context activities, or any of those properties in a contained SubStatement
		match the activity parameter, instead of that parameter's normal behavior. Matching
		is defined in the same way it is for the 'activity' parameter."
		</td>
	</tr>
	<tr><td>related_agents</td><td>Boolean</td><td>False</td>
		<td>Apply the agent filter broadly. Include statements for which 
			the actor, object, authority, instructor, team,
			or any of these properties in a contained SubStatement match the agent parameter,
			instead of that parameter's normal behavior. Matching is defined in the same way
			it is for the 'agent' parameter.
		</td>
	</tr>
	<tr><td>since</td><td>Timestamp</td><td> </td>
		<td>Only statements stored since the specified timestamp (exclusive) are returned.</td>
	</tr>
	<tr><td>until</td><td>Timestamp</td><td> </td>
		<td>Only statements stored at or before the specified timestamp are returned.</td>
	</tr>
	<tr><td>limit</td><td>Nonnegative Integer</td><td>0</td>
		<td>Maximum number of statements to return. 0 indicates return the 
			maximum the server will allow.</td>
	</tr>
	<tr><td>format</td><td>{"ids", "exact", "canonical"}</td><td>exact</td>
		<td>If "ids", only include minimum information necessary in agent and 
			activity objects to identify them, If "exact", return agent and
			activity objects populated exactly as they were when the statement was received.<br/><br/>
			
			If "canonical", return activity objects populated with the canonical
			definition of the activity objects as determined by the LRS, after
			applying the language filtering process defined below, and return the original
			agent objects as in "exact" mode.

			Activity objects contain Language Map objects for name and 
			description. Only one language should be returned in each of 
			these maps.<br/><br/>
			In order to provide these strings in the most relevant language, 
			the LRS will apply the Accept-Language header as described in 
			<a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html">
			RFC 2616</a> (HTTP 1.1), except that this logic will 
			be applied to each language map individually to select which 
			language entry to include, rather than to the resource (list of 
			statements) as a whole.

			An LRS requesting statements for the purpose of importing them SHOULD use a format of "exact".
		</td>
	</tr>
	<tr><td>attachments</td><td>Boolean</td><td>False</td>
		<td>If true LRS MUST use the multipart response format and include any attachments as described in <a href="#attachments">4.1.11. Attachments</a>, otherwise the LRS MUST NOT include attachments.</td>
	</tr>
	<tr><td>ascending</td><td>Boolean</td><td>False</td>
		<td>If true, return results in ascending order of stored time</td>
	</tr>
</table>

The LRS MUST reject with an HTTP 400 error any requests to this resource which:
* contain both statementId and voidedStatementId parameters
* contain statementId or voidedStatementId parameters, and also contain any other parameter besides "attachments" or "format".
* contain any parameters the LRS does not recognize

###### Note: 
Due to query string limits, this method MAY be called using POST and
form fields if necessary. The LRS MUST differentiate a POST to add a statement
or to list statements based on the parameters passed.  

<a name="queryStatementRef" />
###### Note: 
For filter parameters which are not time or sequence based (that is, other than
since, until, or limit), statements which target another statement will meet the filter
condition if the targeted statement meet the condition. The time and sequence based parameters must
still be applied to the source or "targeting" statement included in this manner. The targeted
statement refers to any statement included in another statement's object property as a
statementRef. This rule applies recursively, so that "statement a" is a match when a targets
b which targets c and the filter conditions described above match for "statement c".

For example, consider the statement "Ben passed explosives training", and a follow up
statement: "Andrew confirmed \<statementRef to original statement\>". The follow up
statement will not mention "Ben" or "explosives training", but when fetching statements
with an actor filter of "Ben" or an activity filter of "explosives training", both
statements will be returned.

<a name="voidedStatements">
###### Voided statements
The LRS MUST not return any statement which has been voided, unless that statement has been
requested by voidedStatementId. The LRS MUST still return any statements targetting the voided statement,
unless they themselves have been voided. This includes the voiding statement, which cannot be voided.
Reporting tools can identify the presence and statementId of any voided statements by the target of the voiding 
statement. Reporting tools wishing to retrieve voided statements SHOULD request these individually by voidedStatementId.

<a name="docapis"/> 
### 7.3 Document APIs:
The 3 Document APIs provide <a href="#miscdocument">document</a> storage for learning activity providers
and agents. The details of each API are found in the following sections, and the information in this section 
applies to all three APIs.

###### New Agents and Activities
An Activity Provider MAY send documents to any of the document APIs for activities and agents that
the LRS does not have prior knowledge of. The LRS MUST NOT reject documents on the basis of not having 
prior knowledge of the activity and/or agent. 



###### POST to store application/json arrays of variables
<table>
	<tr>
		<th>API</th>
		<th>Method</th>
		<th>Endpoint</th>
		<th>Example</th>
	</tr>
	<tr>
		<td>State API</td>
		<td>POST</td>
		<td>activities/state</td>
		<td>http://example.com/XAPI/activities/state</td>
	</tr>
	<tr>
		<td>Activity Profile API</td>
		<td>POST</td>
		<td>activities/profile</td>
		<td>http://example.com/XAPI/activities/profile</td>
	</tr>
	<tr>
		<td>Agent Profile API</td>
		<td>POST</td>
		<td>agent/profile</td>
		<td>http://example.com/XAPI/agents/profile</td>
	</tr>
</table>

APs MAY use Documents of content type "application/json" to store sets of variables. For example a document 
contains:

```
{
	"x" : "foo",
	"y" : "bar"
}
```  
When an LRS receives a POST request with content type application/json for an existing document also of
content type application/json, it MUST merge the posted document with the existing document. 
In this context merge is defined as:
* de-serialize the objects represented by each document
* for each property directly defined on the object being posted, set the corresponding
property on the existing object equal to the value from the posted object.    
* store any valid json serialization of the existing object as the document referenced in the request

Note that only top-level properties are merged, even if a top-level property is an object
the entire contents of each original property are replaced with the entire contents of
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
If the original document exists, and the original document or the document being posted
do not have a Content-Type:
of "application/json", or if either document can not be parsed as JSON objects, the LRS MUST
respond with HTTP status code 400 "Bad Request", and MUST NOT update the target document
as a result of the request. 

If the original document does not exist, the LRS MUST treat the request the same as it 
would a PUT request and store the document being posted.

If the merge is successful, the LRS MUST respond with HTTP 
status code 204 "No Content".

If an AP needs to delete
a property, it SHOULD use a PUT request to replace the whole document as described below. 

<a name="stateapi"/> 
### 7.4 State API:
Generally, this is a scratch area for activity providers that do not have their 
own internal storage, or need to persist state across devices. When using the 
state API, be aware of how the stateId parameter affects the semantics of the 
call. If it is included, the GET and DELETE methods will act upon a single 
defined state document identified by "stateId". Otherwise, GET will return the 
available IDs, and DELETE will delete all state in the context given through the 
other parameters.  

###### PUT | POST | GET | DELETE activities/state
Example endpoint: http://example.com/XAPI/activities/state

Stores, fetches, or deletes the document specified by the given stateId that 
exists in the context of the specified activity, agent, and registration (if specified).  

Returns: (PUT | POST | DELETE) 204 No Content, (GET) 200 OK - State Content  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The activity ID associated with this state</td>
	</tr>
	<tr><td>agent</td><td>(JSON/XML)</td><td>yes</td>
		<td>The agent associated with this state</td>
	</tr>
	<tr><td>registration</td><td>UUID</td><td>no</td>
		<td>The registration ID associated with this state.</td>
	</tr>
	<tr><td>stateId</td><td>String</td><td>yes</td>
		<td>The id for this state, within the given context.</td>
	</tr>
</table>

###### GET activities/state
Example endpoint: http://example.com/XAPI/activities/state

Fetches IDs of all state data for this context (activity + agent \[ + 
registration if specified\]). If “since” parameter is specified, this 
is limited to entries that have been stored or updated since the specified 
timestamp (exclusive).  

Returns: 200 OK, Array of IDs  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The activity ID associated with these states.</td>
	</tr>
	<tr><td>agent</td><td>(JSON/XML)</td><td>yes</td>
		<td>The actor associated with these states.</td>
	</tr>
	<tr><td>registration</td><td>UUID</td><td>no</td>
		<td>The registration ID associated with these states.</td>
	</tr>
	<tr><td>since</td><td>Timestamp</td><td>no</td>
		<td>Only IDs of states stored since the specified timestamp (exclusive) are returned.</td>
	</tr>
</table>

###### DELETE activities/state
Example endpoint: http://example.com/XAPI/activities/state

Deletes all state data for this context (activity + agent \[+ registration if 
specified\]).  

Returns: 204 No Content  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The activity ID associated with this state</td>
	</tr>
	<tr><td>agent</td><td>(JSON/XML)</td><td>yes</td>
		<td>The actor associated with this state</td>
	</tr>
	<tr><td>registration</td><td>UUID</td><td>no</td>
		<td>The registration ID associated with this state.</td>
	</tr>
</table>



<a name="actprofapi"/> 
### 7.5 Activity Profile API:
The Activity Profile API is much like the State API, allowing for arbitrary key 
/ document pairs to be saved which are related to an Activity. When using the 
profile API for manipulating documents, be aware of how the profileId parameter
 affects the semantics of the call. If it is included, the GET and DELETE methods 
will act upon a single defined document identified by "profileId". Otherwise, 
GET will return the available IDs, and DELETE will delete all state in the 
context given through the other parameters.  

The Activity Profile API also includes a method to retrieve a full description 
of an activity from the LRS.  

###### GET activities
Example endpoint: http://example.com/XAPI/activities

Loads the complete activity object specified.  

Returns: 200 OK - Content  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The ID associated with the activities to load.</td>
	</td>
</table>

###### PUT | POST | GET | DELETE activities/profile
Example endpoint: http://example.com/XAPI/activities/profile

Saves/retrieves/deletes the specified profile document in the context of the 
specified activity.  

Returns: (PUT | POST | DELETE) 204 No Content, (GET) 200 OK - Profile Content  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The activity ID associated with this profile.</td>
	</tr>
	<tr><td>profileId</td><td>String</td><td>yes</td>
		<td>The profile ID associated with this profile.</td>
	</tr>
</table>

###### GET activities/profile
Example endpoint: http://example.com/XAPI/activities/profile

Loads IDs of all profile entries for an activity. If "since" parameter is 
specified, this is limited to entries that have been stored or updated since 
the specified timestamp (exclusive).  

Returns: 200 OK - List of IDs  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th><tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The activity ID associated with these profiles.</td>
	</tr>
	<tr><td>since</td><td>Timestamp</td><td>no</td>
		<td>Only IDs of profiles stored since the specified timestamp (exclusive) are returned.</td>
	</tr>
</table>

<a name="agentprofapi"/> 
### 7.6 Agent Profile API:
The Agent Profile API is much like the State API, allowing for arbitrary key / 
document pairs to be saved which are related to an Agent. When using the 
profile API for manipulating documents, be aware of how the profileId parameter 
affects the semantics of the call. If it is included, the GET and DELETE 
methods will act upon a single defined document identified by "profileId". 
Otherwise, GET will return the available IDs, and DELETE will delete all state 
in the context given through the other parameters.  

The Agent Profile API also includes a method to retrieve a special object with 
combined information about an Agent derived from an outside service, such as a 
directory service.  

###### GET agents
Example endpoint: http://example.com/XAPI/agents

Return a special, Person object for a specified agent. The Person object is 
very similar to an Agent object, but instead of each attribute having a single 
value, each attribute has an array value, and it is legal to include multiple 
identifying properties. Note that the argument is still a normal Agent object 
with a single identifier and no arrays. Note that this is different from the 
FOAF concept of person, person is being used here to indicate a person-centric 
view of the LRS agent data, but agents just refer to one persona (a person in 
one context).  

An LRS capable of returning multiple identifying properties for an Person SHOULD 
require the connecting credentials have increased, explicitly given permissions. 
An LRS SHOULD reject insufficiently privileged requests with 403 "Forbidden". 
If an LRS does not have any additional information about an Agent to return, the 
LRS MUST still return a Person when queried, but that Person object will only 
include the information associated with the requested Agent.  

###### Person properties

All array properties must be populated with members with the 
same definition as the similarly named property from Agent objects.  

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>objectType</td><td>String</td><td>"Person". Required.</td></tr>
	<tr><td>name</td><td>Array of strings.</td><td> Optional. List of names of Agents to retrieve.</td></tr>
	<tr>
		<td><a href="http://xmlns.com/foaf/spec/%22%20%5Cl%20%22term_mbox">mbox*</a></td>
		<td>Array of URIs in the form "mailto:email address".</td>
		<td>List of e-mail addresses of Agents to retrieve.</td>
	</tr>
	<tr>
		<td><a href="http://xmlns.com/foaf/spec/%22%20%5Cl%20%22term_mbox_sha1sum">mbox_sha1sum*</a></td>
		<td>Array of strings.</td>
		<td>List of the SHA1 hashes of mailto URIs (such as go in an mbox property)</td>
	</tr>
	<tr>
		<td>openid*</td>
		<td>Array of strings.</td>
		<td>List of openids that uniquely identify the agents to retrieve.</td>
	</tr>
	<tr>
		<td>account*</td>
		<td>Array of account objects.</td>
		<td>List of accounts to match. Complete account objects (homePage and name) must be provided.</td>
	</tr>
</table> 

See also: <a href="#agent">section 4.1.2.1 Agent</a>.

Returns: 200 OK - Expanded Agent Object  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>agent</td><td>Object (JSON)</td><td>yes</td>
		<td>The agent representation to use in fetching expanded agent information.</td>
	</tr>
</table>  

###### PUT | POST | GET | DELETE agents/profile
Example endpoint: http://example.com/XAPI/agents/profile

Saves/retrieves/deletes the specified profile document in the context of the 
specified agent.  

Returns: (PUT | POST | DELETE) 204 No Content, (GET) 200 OK - Profile Content  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>agent</td><td>Object (JSON)</td><td>yes</td>
		<td>The agent associated with this profile.</td>
	</tr>
	<tr><td>profileId</td><td>String</td><td>yes</td>
		<td>The profile ID associated with this profile.</td>
	</tr>
</table>  

###### GET agents/profile
Example endpoint: http://example.com/XAPI/agents/profile

Loads IDs of all profile entries for an agent. If "since" parameter is specified, 
this is limited to entries that have been stored or updated since the specified 
timestamp (exclusive).  

Returns: 200 OK - List of IDs  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>agent</td><td>Object (JSON)</td><td>yes</td>
		<td>The agent associated with this profile.</td>
	</tr>
	<tr><td>since</td><td>Timestamp</td><td>no</td>
		<td>Only IDs of profiles stored since the specified timestamp 
			(exclusive) are returned</td>
	</tr>
</table>  

<a name="cors"/>
### 7.7 Cross Origin Requests:
One of the goals of the XAPI is to allow cross-domain tracking, and even though 
XAPI seeks to enable tracking from applications other than browsers, browsers 
still need to be supported. Internet Explorer 8 and 9 do not implement Cross 
Origin Resource Sharing, but rather use their own Cross Domain Request API, 
which cannot use all of the XAPI as described above due to only supporting "GET" 
and "POST", and not allowing HTTP headers to be set.  

The following describes alternate syntax for consumers to use only when unable 
to use the usual syntax for specific calls due to the restrictions mentioned 
above. All LRSs must support this syntax.  

__Method__: All XAPI requests issued must be POST. The intended XAPI method 
must be included as the only query string parameter on the request. 
(example: http://example.com/XAPI/statements?method=PUT)  

__Headers__: Any required parameters which are expected to appear in the HTTP 
header must instead be included as a form parameter with the same name.  

__Content__: If the XAPI call involved sending content, that content must now 
be encoded and included as a form parameter called "content". The LRS will 
interpret this content as a UTF-8 string, storing binary data is not supported 
with this syntax.  

See [Appendix B](#AppendixB) for an example function written in Javascript 
which transforms a normal request into one using this alternate syntax.  

It should also be noted that versions of Internet Explorer lower than 10 do not
support Cross Domain Requests between http and https. This means that for IE9 and lower,
if the LRS is on an https domain, the client sending the statement must also be on https. 
If the LRS is on http, the client must be too. 

There may be cases where there is a requirement for the client activity provider to support 
IE8 and 9  where the client code is hosted on a different scheme (http or https) from 
the LRS. In these cases, a simple solution would be to host an intermediary server side LRS on 
the same scheme as the client code to route statements to the target LRS. An LRS MAY choose to provide 	
both http and https endpoints to support this use case. Http is inherently less secure
than https, and both LRS and client should consider the security risks before making the decision 
to use this scheme. 
 
<a name="validation"/> 
### 7.8 Validation:
The function of the LRS within the XAPI is to store and retrieve statements. 
As long as it has sufficient information to perform these tasks, it is 
expected that it does them. Validation of statements in the Experience API is 
focused solely on syntax, not semantics. It SHOULD enforce rules regarding structure, 
but SHOULD NOT enforce rules regarding meaning. Enforcing the rules that ensure 
valid meaning among verb definitions, activity types, and extensions is the 
responsibility of the Activity Provider sending the statement.  

<a name="AppendixA"/> 
## Appendix A: Bookmarklet

XAPI enables using an "I learned this" bookmarklet to self-report learning. 
The following is an example of such a bookmarklet, and the statement that this 
bookmarklet would send if used on the page: http://adlnet.gov/xapi.  

The bookmarklet would be provided by the LRS to track to, for a specific user. 
Therefore the LRS URL, authentication, and actor information is hard coded in 
the bookmarklet. Note that since the authorization token must be included in 
the bookmarklet, the LRS should provide a token with limited privileges, 
ideally only enabling the storage of self-reported learning statements.  

The UUID generation is only necessary since the PUT method is being used, if a 
statement is POSTED without an ID the LRS will generate it.  

In order to allow cross-domain reporting of statements, a browser that supports 
the "Access-Control-Allow-Origin" and "Access-Control-Allow-Methods" headers 
must be used, such as IE 8+, FF 3.5+, Safari 4+, Safari iOS Chrome, or Android 
browser. Additionally the server must set the required headers.  

In the example below, the following values in the first few lines should be replaced
with your own values. All other values should be left as they are. 

<table>
	<tr>
		<th>Value in example</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>http://localhost:8080/XAPI/</td>
		<td>Endpoint of the LRS to send the statements to.</td>
	</tr>
	<tr>
		<td>dGVzdDpwYXNzd29yZA==</td>
		<td>Base 64 encoded username and password, usually in the form "username : password".</td>
	</tr>
	<tr>
		<td>learner@example.adlnet.gov</td>
		<td>Email address of the learner using the bookmarklet.</td>
	</tr>
</table>

```javascript
var url = "http://localhost:8080/XAPI/Statements/?statementId="+_ruuid();
var auth = "Basic dGVzdDpwYXNzd29yZA==";
var statement = {
	actor:{ 
		"objectType": "Agent", 
		"mbox" : "mailto:learner@example.adlnet.gov"
	},
	verb:"",
	object:{
		id:""
	}
};
var definition = statement.object.definition;


statement.verb='http://adlnet.gov/expapi/verbs/experienced';
statement.object.id = window.location.toString();
definition.type="http://adlnet.gov/expapi/activities/link";

var xhr = new XMLHttpRequest();
xhr.open("PUT", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", auth);
xhr.onreadystatechange = function() {
	if(xhr.readyState == 4) {
		alert(xhr.status + " : " + xhr.responseText);
	}
};
xhr.send(JSON.stringify(statement));

/*!
Modified from: Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
function _ruuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
}
```

###### Example Statement Using Bookmarklet  

###### Headers:  
```
{ 
	"content-type": "application/json; charset=UTF-8",
	"authorization": "d515309a-044d-4af3-9559-c041e78eb446",
	"referer": "http://adlnet.gov/xapi/",
	"content-length": "###",
	"origin": "http://adlnet.gov" }
```

###### Method Path:  
```
PUT : /XAPI/Statements/?statementId=ed1d064a-eba6-45ea-a3f6-34cdf6e1dfd9

Body:
{
	"actor": {
		"objectType": "Agent",
		"mbox": "mailto:learner@example.adlnet.gov"
	},
	"verb": "http://adlnet.gov/expapi/verbs/experienced",
	"object": {
		"id": "http://adlnet.gov/xapi/ ",
		"definition": {
			"type": "http://adlnet.gov/expapi/activities/link"
		}
	}
}
```
<a name="AppendixB"/>
## Appendix B: Creating an “IE Mode” Request
```javascript
function getIEModeRequest(method, url, headers, data){

	var newUrl = url;

	// Everything that was on query string goes into form vars
	var formData = new Array();
	var qsIndex = newUrl.indexOf('?');
	if(qsIndex > 0){
		formData.push(newUrl.substr(qsIndex+1));
		newUrl = newUrl.substr(0, qsIndex);
	}

	// Method has to go on querystring, and nothing else
	newUrl = newUrl + '?method=' + method;

	// Headers
	if(headers !== null){
		for(var headerName in headers){
			formData.push(
				headerName + "=" +
					encodeURIComponent(
						headers[headerName]));
		}
	}

	// The original data is repackaged as "content" form var
	if(data !== null){
		formData.push('content=' + encodeURIComponent(data));
	}

	return {
		"method":"POST",
		"url":newUrl,
		"headers":{},
		"data":formData.join("&")
	};
}
``` 
<a name="AppendixC"/>   
## Appendix C: Example definitions for activities of type “cmi.interaction”

###### true-false  

```
"definition": {
	"description": {
		"en-US": "Does the XAPI include the concept of statements?"
	},
	"type": "http://adlnet.gov/expapi/activities/cmi.interaction",
	"interactionType": "true-false",
	"correctResponsesPattern": [
		"true"
	]
}
```

###### choice  
```
"definition": {
	"description": {
		"en-US": "Which of these prototypes are available at the beta site?"
	},
	"type": "http://adlnet.gov/expapi/activities/cmi.interaction",
	"interactionType": "choice",
	"correctResponsesPattern": [
		"golf[,]tetris"
	],
	"choices": [
		{
			"id": "golf", 
			"description": {
				"en-US": "Golf Example"
			}
		},
		{
			"id": "facebook", 
			"description": {
				"en-US": "Facebook App"
			}
		},
		{
			"id": "tetris", 
			"description": {
				"en-US": "Tetris Example"
			}
		},
		{
			"id": "scrabble", 
			"description": {
				"en-US": "Scrabble Example"
			}
		}
	]
}
```

###### fill-in  
```
"definition": {
	"description": {
		"en-US": "Ben is often heard saying: "
	},
	"type": "http://adlnet.gov/expapi/activities/cmi.interaction",
	"interactionType": "fill-in",
	"correctResponsesPattern": [
		"Bob’s your uncle"
	]
}
```

###### likert  
```
"definition": {
	"description": {
		"en-US": "How awesome is Experience API?"
	},
	"type": "http://adlnet.gov/expapi/activities/cmi.interaction",
	"interactionType": "likert",
	"correctResponsesPattern": [
		"likert_3"
	],
	"scale": [
		{
			"id": "likert_0", 
			"description": {
				"en-US": "It’s OK"
			}
		},
		{
			"id": "likert_1", 
			"description": {
				"en-US": "It’s Pretty Cool"
			}
		},
		{
			"id": "likert_2", 
			"description": {
				"en-US": "It’s Damn Cool"
			}
		},
		{
			"id": "likert_3", 
			"description": {
				"en-US": "It’s Gonna Change the World"
			}
		}
	]
}
```

###### matching  
```
{
	"definition":{
		"description":{
			"en-US":"Match these people to their kickball team:"
		},
		"type":"http://adlnet.gov/expapi/activities/cmi.interaction",
		"interactionType":"matching",
		"correctResponsesPattern":[
			"ben[.]3[,]chris[.]2[,]troy[.]4[,]freddie[.]1"
		],
		"source":[
			{
				"id":"ben",
				"description":{
					"en-US":"Ben"
				}
			},
			{
				"id":"chris",
				"description":{
					"en-US":"Chris"
				}
			},
			{
				"id":"troy",
				"description":{
					"en-US":"Troy"
				}
			},
			{
				"id":"freddie",
				"description":{
					"en-US":"Freddie"
				}
			}
		],
		"target":[
			{
				"id":"1",
				"description":{
					"en-US":"Swift Kick in the Grass"
				}
			},
			{
				"id":"2",
				"description":{
					"en-US":"We got Runs"
				}
			},
			{
				"id":"3",
				"description":{
					"en-US":"Duck"
				}
			},
			{
				"id":"4",
				"description":{
					"en-US":"Van Delay Industries"
				}
			}
		]
	}
}
```

###### performance  
```
"definition": {
	"description": {
		"en-US": "This interaction measures performance over a day of RS sports:"
	},
	"type": "http://adlnet.gov/expapi/activities/cmi.interaction",
	"interactionType": "performance",
	"correctResponsesPattern": [
		"pong[.]1:[,]dg[.]:10[,]lunch[.]"
	],
	"steps": [
		{
			"id": "pong", 
			"description": {
				"en-US": "Net pong matches won"
			}
		},
		{
			"id": "dg", 
			"description": {
				"en-US": "Strokes over par in disc golf at Liberty"
				}
			},
		{
			"id": "lunch", 
			"description": {
				"en-US": "Lunch having been eaten"
			}
		}
	]
}
```

###### sequencing  
```
"definition": {
	"description": {
		"en-US": "Order players by their pong ladder position:"
	},
	"type": "http://adlnet.gov/expapi/activities/cmi.interaction",
	"interactionType": "sequencing",
	"correctResponsesPattern": [
		"tim[,]mike[,]ells[,]ben"
	],
	"choices": [
		{
			"id": "tim", 
			"description": {
				"en-US": "Tim"
			}
		},
		{
			"id": "ben", "description": {
				"en-US": "Ben"
			}
		},
		{
			"id": "ells", 
			"description": {
				"en-US": "Ells"
			}
		},
		{
			"id": "mike", 
			"description": {
				"en-US": "Mike"
			}
		}
	]
}
```

###### numeric  
```
"definition": {
	"description": {
		"en-US": "How many jokes is Chris the butt of each day?
	"},
	"type": "http://adlnet.gov/expapi/activities/cmi.interaction",
	"interactionType": "numeric",
	"correctResponsesPattern": [
		"4:"
	]
}
```

###### other  
```
"definition": {
	"description": {
		"en-US": "On this map, please mark Franklin, TN"
	},
	"type": "http://adlnet.gov/expapi/activities/cmi.interaction",
	"interactionType": "other",
	"correctResponsesPattern": [
		"(35.937432,-86.868896)"
	]
}
```

<a name="AppendixD"/>   
## Appendix D: Example statements

Example of a simple statement:  
```
{
	"id":"fd41c918-b88b-4b20-a0a5-a4c32391aaa0",
	"actor":{
		"objectType": "Agent",
		"name":"Project Tin Can API",
		"mbox":"mailto:user@example.com"
	},
	"verb":{
		"id":"http://adlnet.gov/expapi/verbs/created",
		"display":{ 
			"en-US":"created" 
		}
	},
	"object":{
		"id":"http://example.adlnet.gov/xapi/example/simplestatement",
		"definition":{
			"name":{ 
				"en-US":"simple statement" 
			},
			"description":{ 
				"en-US":"A simple Experience API statement. Note that the LRS 
				does not need to have any prior information about the actor (learner), the 
				verb, or the activity/object." 
			}
		}
	}
}
```   
Typical simple completion with verb "attempted":  
```
{
	"actor":{
        "objectType": "Agent",
		"name":"Example Learner",
		"mbox":"mailto:example.learner@adlnet.gov"
	},
	"verb":{
		"id":"http://adlnet.gov/expapi/verbs/attempted",
		"display":{
			"en-US":"attempted"
		}
	},
	"object":{
		"id":"http://example.adlnet.gov/xapi/example/simpleCBT",
		"definition":{
			"name":{
				"en-US":"simple CBT course"
			},
			"description":{
				"en-US":"A fictitious example CBT course."
			}
		}
	},
	"result":{
		"score":{
			"scaled":0.95
		},
		"success":true,
		"completion":true
	}
}
```  

<a name="AppendixE"/>
## Appendix E: Converting Statements to 1.0

######Rationale:
This is a 1.0 specification, and as such implementers should not have to consider prior
versions of the specification. However, prior versions did see notable adoption. This data
conversion is specified in order
to preserve the data tracked using earlier versions, and make it available to new implementers
in a consistant manner.

######Details:

######Conversion of statements created based on version 0.9

A 1.0 system converting a statement created in 0.9 MUST follow the steps below:

* If the statement is voided, do not convert it.
* Prefix "verb" with "http://adlnet.gov/expapi/verbs/".
* Prefix any activity ids which are not a full absolute URIs with "urn:expapi:0.9:activities:"
* Prefix activity types with "http://adlnet.gov/expapi/activities/"
* for each agent (actor):
    * Search for inverse functional identifiers in this order: "mbox, mbox_sha1sum, openId,
    account". Keep the first populated inverse functional identifier found and discard the rest.
    * For the above inverse functional identifier, take the first element in the array and
    use that as the value of that inverse functional identifier property, discarding any
    remaining elements.
    * If the "name" property is present, set it equal to the first element in the "name"
    array, discard the remaining elements.
    * Remove all remaining properties.
* Remove the "voided" property from the statement, if present. Remember, if the value of the
  voided property is true, then the statement MUST NOT be converted
* Add "version": "1.0"
* If an authority was not previously set, set the authority to an agent identified by
an account with a homePage set to the home page corresponding to the
system performing the conversion and an accountName of "unknown".
* Preserve all other fields without modification, including "stored". Stored should still
be updated if the statement is passed to another system.

######Conversion of statements created based on version 0.95

A 1.0 system converting a statement created in 0.95 MUST follow the steps below:

* If the statement is voided, do not convert it.
* Remove the "voided" property from the statement, if present. Remember, if the value
  of the voided property is true, then the statement MUST NOT be converted
* Add "version": "1.0"
* If an authority was not previously set, set the authority to an agent identified by
an account with a homePage set to the home page corresponding to the
system performing the conversion and an accountName of "unknown".
* Preserve all other fields without modification, including "stored". Stored should still
be updated if the statement is passed to another system.


######Example:


A 0.9 statement:
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
    "stored": "2012-06-29T15:41:39.165Z",
}
```

Converted to 1.0:
```
{
    "version": "1.0",
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
                    "id": "urn:expapi:0.9:activities:non-absolute-activity-id",
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

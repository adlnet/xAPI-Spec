# Experience API
## Advanced Distributed Learning (ADL) Co-Laboratories

>This document was authored by members of the Experience API Working Group (see 
>list on pp. 7-8) in support of the Office of the Deputy Assistant Secretary of 
>Defense (Readiness) Advanced Distributed Learning (ADL) Initiative. Please 
>send all feedback and inquiries to helpdesk@adlnet.gov  

## Table of Contents
*	1.0.	[Revision History](#revhistory)  
*	2.0.	[Role of the Experience API](#roleofxapi)
	*	2.1.	[ADL's Role in the Experience API](#adlrole)  
 	*	2.2.	[Contributors](#contributors)
 		*	2.2.1.	[Working Group Participants](#wg)  
		*	2.2.2.	[Requirements Gathering Participants](#reqparticipants) 
	*	2.2.3	[Reading Guidelines for the Non-Technically Inclined](#readingguidelines)
*	3.0.	[Definitions](#defintions)  
*	4.0.	[Statement](#statement)  
    *	4.1.	[Statement Properties](#stmtprops)  
        *	4.1.1.	[ID](#stmtid)  
        *	4.1.2.	[Actor](#actor)  
        *	4.1.3.	[Verb](#verb)  
        *	4.1.4.	[Object](#object)  
        *	4.1.5.	[Result](#result)  
        *	4.1.6.	[Context](#context)  
        *	4.1.7.	[Timestamp](#timestamp)  
        *	4.1.8.	[Stored](#stored)  
        *	4.1.9.	[Authority](#authority)  
        *	4.1.10.	[Version](#version)  
        *	4.1.11.	[Attachments](#attachments)  
        *	4.1.12.	[Data Constraints](#dataconstraints)  
    *	4.2.	[Retrieval of Statements](#retstmts)  
	*	4.3.	[Voided](#voided)  
	*	4.4.	[Signed Statements](#signature)  
*	5.0.	[Miscellaneous Types](#misctypes)  
    *	5.1.	[Document](#miscdocument)  
    *	5.2.	[Language Map](#misclangmap)  
    *	5.3.	[Extensions](#miscext)  
    *	5.4.	[Identifier Metadata](#miscmeta)  
*	6.0.	[Runtime Communication](#rtcom)  
    *	6.1.	[Encoding](#encoding)  
    *	6.2.	[API Versioning](#apiversioning)  
    *	6.3.	[Concurrency](#concurrency)  
    *	6.4.	[Security](#security)  
		*	6.4.1.	[Authentication Definitions](#authdefs)  
		*	6.4.2.	[OAuth Authorization Scope](#oauthscope)  
*	7.0.	[Data Transfer (REST)](#datatransfer)  
    *	7.1.	[Error Codes](#errorcodes)  
    *	7.2.	[Statement API](#stmtapi)  
    *	7.3.	[Document APIs](#docapis)  
    *	7.4.	[State API](#stateapi)  
    *	7.5.	[Activity Profile API](#actprofapi)  
    *	7.6.	[Agent Profile API](#agentprofapi)  
    *	7.7.	[About resource](#aboutresource)  
    *	7.8.	[Cross Origin Requests](#cors)  
    *	7.9.	[Validation](#validation)  
    *	7.10.	[HTTP HEAD](#httphead)  
*	[Appendix A: Bookmarklet](#AppendixA)  
*	[Appendix B: Creating an "IE Mode" Request](#AppendixB)  
*	[Appendix C: Example definitions for Activities of type "cmi.interaction"](#AppendixC)  
*	[Appendix D: Example Statements](#AppendixD)  
*	[Appendix E: Converting Statements to 1.0.0](#AppendixE)   
*	[Appendix F: Example Signed Statement](#AppendixF)

<a name="revhistory"/>  

## 1.0 Revision History
###### 0.8 (Project Tin Can API Deliverable) to 0.9 (March 31, 2012)  
  
Rustici Software, who delivered the Project Tin Can API, made modifications to the 
API prior to the April 2012 Kickoff Meeting. It was voted in this meeting to 
move those changes into the current specification and revision to 0.9.

###### 0.90 to 0.95 (August 31, 2012)  

"Core" Verbs and Activity types were removed from the specification. References 
to these verbs in results, context, interactions, and Activity Definitions were 
also  removed. It was recommended that implementers prefer community defined 
verbs to creating their own verbs.
- Verbs, Activity types, and extension keys are now URIs
- Restructured and added language around some of the other implementation 
details and scope.
- Changed from using a person-centric view of Agents to a persona-centric 
view.
- Friend of a Friend (FOAF) Agent merging requirement was removed.
- Agent Objects must now have exactly 1 uniquely identifying property, instead 
of at least one.

###### 0.95 to 1.0.0 (April 26, 2013) 
Various refinements and clarifications including:
- Adding attachments
- Activity metadata is now stored as JSON rather than XML
- Changes to voiding Statements
- Clarification and naming of the Document APIs
- Changes to querying the Statement API
- Signed Statements

<a name="roleofxapi"/>

## 2.0 Role of the Experience API  
The Experience API is a service that allows for statements of experience
to be delivered to and stored securely in a Learning Record Store (LRS). These statements
of experience are typically learning experiences, but the API can address statements
of any kind of experience. The Experience API is dependent on Activity Providers to 
create and track these learning experiences; this specification provides a data model and 
associated components on how to accomplish these tasks.

Specifically, the Experience API provides:  

* The structure and definition of Statement, State, learner, Activity and Objects,
which are the means by which experiences are conveyed by a Activity Provider.

* Data Transfer methods for the storage and retrieval (but not validation) of
these Objects to/from a Learning Record Store.  Note that the systems storing 
or retrieving records need not be Activity Providers. LRSs may 
communicate with other LRSs, or reporting systems.

* Security methods allowing for the trusted exchange of information between
the Learning Record Store and trusted sources.  

The Experience API is the first of many envisioned technologies that will enable
a richer architecture of online learning and training. Authentication
services, querying services, visualization services, and personal data services 
are some examples of additional technologies which the Experience API is designed
to support. While the implementation details of these services are not specified here,
the Experience API is designed with this larger architectural vision in mind.
 
<a name="adlrole"/>

### 2.1 ADL's Role in the Experience API  
The Advanced Distributed Learning (ADL) Initiative has taken on the roles of steward and facilitator 
in the development of the Experience API.  The Experience API is seen as one piece of the ADL Training 
and Learning Architecture, which facilitates learning anytime and anywhere. ADL views the Experience API 
as an evolved version of SCORM that can support similar use cases, but can also support many of the use 
cases gathered by ADL and submitted by those involved in distributed learning that SCORM could not 
enable.  
 
<a name="contributors"/> 

### 2.2 Contributors
> _"My thanks to everyone who contributed to the Experience API project. Many of 
you have called into the weekly meetings and helped to shape the specification 
into something that is useful for the entire distributed learning community. 
Many of you assisted in releasing code samples, products, and documentation to 
aid those who are creating and adopting the specification.  I'd also like to 
thank all of those who were involved in supplying useful, honest information 
about your organization's use of SCORM and other learning best practices. 
Through the use-cases, shared experiences, and knowledge you have shared, ADL 
and the community clearly identified the first step in creating the Training 
and Learning Architecture--the Experience API.  You are truly the community 
leaders on which we depend to make our training and education the very best."_ 

Kristy S. Murray, Ed.D.  
Director, ADL Initiative  
OSD, Training Readiness & Strategy (TRS)  

<a name="wg"/>

### 2.2.1 Working Group Participants  
<table>
	<tr><th>_Name_</th><th>_Organization_</th></tr>
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
	<tr><td>Chris Sawwa</td><td>Meridian Knowledge Solutions</td></tr>
	<tr><td>Dan Allen</td><td>Litmos</td></tr>
	<tr><td>Dan Kuemmel</td><td>Sentry Insurance</td></tr>
	<tr><td>Dave Mozealous</td><td>Articulate</td></tr>
	<tr><td>David Ells</td><td>Rustici Software</td></tr>
	<tr><td>David N. Johnson</td><td>Clear Learning Systems</td></tr>
	<tr><td>Doug Hagy</td><td>Twin Lakes Consulting Corporation</td></tr>
	<tr><td>Eric Johnson</td><td>Planning and Learning Technologies, Inc.</td></tr>
	<tr><td>Fiona Leteney</td><td>Feenix e-learning</td></tr>
	<tr><td>Greg Tatka</td><td>Menco Social Learning</td></tr>
	<tr><td>Ingo Dahn</td><td>University Koblenz-Landau</td></tr>
	<tr><td>Jason Haag</td><td>ADL</td></tr>
	<tr><td>Jeff Place</td><td>Questionmark</td></tr>
	<tr><td>Jennifer Cameron</td><td>Sencia Corporate Web Solutions</td></tr>
	<tr><td>Jeremy Brockman</td><td> </td></tr>
	<tr><td>Jhorlin De Armas</td><td>Riptide Software</td></tr>
	<tr><td>Joe Gorup</td><td>CourseAvenue</td></tr>
	<tr><td>John Kleeman</td><td>Questionmark</td></tr>
	<tr><td>Jonathan Archibald</td><td>Brightwave</td></tr>
	<tr><td>Jonathan Poltrack</td><td>ADL</td></tr>
	<tr><td>Kris Miller</td><td>edcetra Training</td></tr>
	<tr><td>Kris Rockwell</td><td>Hybrid Learning Systems</td></tr>
	<tr><td>Lang Holloman</td><td> </td></tr>
	<tr><td>Lou Wolford</td><td>ADL</td></tr>
	<tr><td>Luke Hickey</td><td>dominKnow</td></tr>
	<tr><td>Marcus Birtwhistle</td><td>ADL</td></tr>
	<tr><td>Mark Davis</td><td>Exambuilder</td></tr>
	<tr><td>Matteo Scaramuccia</td><td> </td></tr>
	<tr><td>Megan Bowe</td><td>Rustici Software</td></tr>
	<tr><td>Melanie VanHorn</td><td>ADL</td></tr>
	<tr><td>Michael Flores</td><td>Here Everything's Better</td></tr>
	<tr><td>Michael Roberts</td><td>vTrainingRoom</td></tr>
	<tr><td>Mike Palmer</td><td>OnPoint Digital</td></tr>
	<tr><td>Mike Rustici</td><td>Rustici Software</td></tr>
	<tr><td>Nick Washburn</td><td>Riptide Software</td></tr>
	<tr><td>Nikolaus Hruska</td><td>ADL</td></tr>
	<tr><td>Pankaj Agrawal</td><td>Next Software Solutions</td></tr>
	<tr><td>Patrick Kedziora</td><td>Kedzoh</td></tr>
	<tr><td>Paul Esch</td><td>Nine Set</td></tr>
	<tr><td>Paul Roberts</td><td>Questionmark</td></tr>
	<tr><td>Rich Chetwynd</td><td>Litmos</td></tr>
	<tr><td>Richard Fouchaux</td><td>Ontario Human Rights  Commission</td></tr>
	<tr><td>Richard Lenz</td><td>Organizational Strategies, Inc.</td></tr>
	<tr><td>Rick Raymer</td><td></td></tr>
	<tr><td>Rob Chadwick</td><td>ADL</td></tr>
	<tr><td>Robert Lowe</td><td>NetDimensions</td></tr>
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
In collection of requirements for the Experience API, many people and 
organizations provided invaluable feedback to the Sharable Content Object
Reference Model (SCORM®), distributed learning efforts, and learning technology
efforts in general.  While not an exhaustive listing, the white papers gathered 
in 2008 by the Learning Education and Training Standards Interoperability (LETSI) 
group, the Rustici Software _UserVoice_ website, one-on-one interviews and various
blogs were important sources from which requirements were gathered for the 
Experience API specification.

<a name="readingguidelines"/> 

### 2.3 Reading Guidelines for the Non-Technically Inclined

This is a definitive document which describes how the Experience API is to be implemented
across a variety of systems. It is a technical document authored specifically for individuals 
and organizations implementing this technology with the intent of such individuals 
developing interoperable tools, systems and services that are independent of each other 
and interoperable with each other. 

Whenever possible, the language and formatting used in this document is intended to be 
_considerate_ of non-technical readers because various tools, systems and services 
are based on the specification set described below. For this reason, sections that provide a 
_high-level overview_ of a given facet of the Experience API are labeled **description** or 
**rationale**. Items in this document labeled as **requirements**, **details** or **examples** are more technical. 

<a name="defintions"/>
 
## 3.0 Definitions  

* [Activity](#def-activity)
* [Activity Provider (AP)](#def-activity-provider)
* [Actor](#def-actor)
* [Authentication](#def-authentication)
* [Authorization](#def-authorization)
* [Community of Practice](#def-community-of-practice)
* [Experience API (xAPI)](#def-experience-api)
* [Immutable](#def-immutable)
* [Internationalized Resource Idenfier (IRI)](#def-iri)
* [Inverse Functional Identifier](#def-inverse-functional-identifier)
* [Learning Management System (LMS)](#def-learning-management-system)
* [Learning Record Store (LRS)](#def-learning-record-store)
* [MUST / SHOULD / MAY](#def-must-should-may)
* [Profile](#def-profile)
* [Registration](#def-registration)
* [Representational State Transfer (REST)](#def-rest)
* [Service](#def-service)
* [Statement](#def-statement)
* [Tin Can API (TCAPI)](#def-tcapi)
* [Verb](#def-verb)

<a name="def-activity" />

__Activity__: Something with which an Actor interacted. It can be a unit of instruction, experience, 
or performance that is to be tracked in meaningful combination with a Verb. Interpretation of 
Activity is broad, meaning that Activities can even be tangible Objects.

<a name="def-activity-provider" />

__Activity Provider (AP)__: The software object that is communicating with 
the LRS to record information about a learning experience. May be similar to a SCORM 
package in that it is possible to bundle learning assets with the software object that performs this 
communication, but an Activity Provider may also be separate from the experience it is reporting about.

<a name="def-actor" />

__Actor__: An identity or persona of an individual or group tracked using Statements as doing an 
action (Verb) within an Activity.

<a name="def-authentication" />

__Authentication__: The concept of verifying the identity of a user or system. Authentication 
allows interactions between the two "trusted" parties.

<a name="def-authorization" />

__Authorization__: The affordance of permissions based on a user or system's role; 
the process of making one user or system "trusted" by another.

<a name="def-client" />

__Client__: - Refers to any entity that may interact with an LRS. A Client can be an 
Activity Provider, reporting tool, an LMS, or another LRS.

<a name="def-community-of-practice" />

__Community of Practice__: A group, usually connected by a common cause, role or 
purpose, which operates in a common modality.

<a name="def-experience-api" />

__Experience API (xAPI)__: The API defined in this document, the product of 
"Project Tin Can". A simple, lightweight way for any permitted Actor to store 
and retrieve extensible learning records, learner and learning experience profiles, 
regardless of platform.  

<a name ="def-immutable" />

__Immutable__:  Adjective used to describe things which cannot be changed. With 
some exceptions, Statements in the xAPI are immutable. This ensures that when 
Statements are shared between LRSs, multiple copies of the Statement remain
the same.

<a name="def-iri" />

__Internationalized Resource Identifiers (IRI)__: A unique identifier which may be a URL.
In the xAPI, all IRIs should be a full absolute IRI including a scheme. Relative IRIs 
should not be used. URLs should be defined within a domain controlled by the person creating the URL.

<a name="def-inverse-functional-identifier" />

__Inverse Functional Identifier__: An identifier which is unique to a particular persona or group.
 Used to identify Agents and Groups.

<a name="def-learning-management-system" />

__Learning Management System (LMS)__: "A software package used to administer one or more courses to one or more learners. An LMS is typically a web-based 
system that allows learners to authenticate themselves, register for courses, complete courses and take  
assessments" (Learning Systems Architecture Lab definition). In this document the term will be used in the context of 
existing systems implementing learning standards.

<a name="def-learning-record-store" />

__Learning Record Store (LRS)__: A system that stores learning information. Prior to the xAPI 
most LRSs were Learning Management Systems (LMSs); however this document uses the term 
LRS to be clear that a full LMS is not necessary to implement the xAPI. The xAPI 
is dependent on an LRS to function.

<a name="def-must-should-may" />

__MUST / SHOULD / MAY__: Three levels of obligation with regards to conformance to the xAPI 
specification. A system that fails to implement a MUST (or a MUST NOT) requirement is non-conformant.
Failing to meet a SHOULD requirement is not a violation of conformity, but goes against best practices. 
MAY indicates an option, to be decided by the developer with no consequences for conformity.

<a name="def-profile" />

__Profile__: A construct where information about the learner or activity is kept, 
typically in name/document pairs that have meaning to an instructional system component.

<a name="def-registration" />

__Registration__: An instance of a learner experiencing a particular Activity.

<a name="def-rest" />

__Representational State Transfer (REST)__: An architecture for designing networked web Services.
It relies on HTTP methods and uses current web best practices.

<a name="def-service" />

__Service__: A software component responsible for one or more aspects of the distributed 
learning process. An LMS typically combines many services to design a complete learning 
experience.

<a name="def-statement" />

__Statement__: A simple construct consisting of ```<actor (learner)>``` ```<verb>``` ```<object>```, 
with ```<result>```, in ```<context>``` to track an aspect of a learning experience. A set of 
several Statements may be used to track complete details about a learning experience.

<a name="def-tcapi"/>

__Tin Can API (TCAPI)__: The previous name of the API defined in this document, often used in 
informal references to the Experience API.  

<a name="def-verb" />

__Verb__: Defines the action being done by the Actor within the Activity within a Statement. 

<a name="statement"/> 

## 4.0 Statement  
The Statement is the core of the xAPI. All learning events are stored as Statements.
A Statement is akin to a sentence of the form "I did this".

<a name="stmtprops"/>

### 4.1 Statement Properties  
Actor, Verb, and Object are required, all other properties are optional. Properties 
can occur in any order, but are limited to one use each. Each property is discussed 
below.  

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>id</td><td>UUID</td>
	<td>UUID assigned by LRS if not set by the Activity Provider.</td></tr>
	<tr><td><a href="#actor">actor</a></td><td>Object</td>
	<td>Who the Statement is about, as an <a href="#agent">Agent</a> or 
		<a href="#group">Group</a> Object. Represents the "I" in "I Did This".</td></tr>
	<tr><td><a href="#verb">verb</a></td><td>Object</td>
	<td>Action of the Learner or Team Object. Represents the "Did" in "I Did This".</td></tr>
	<tr><td><a href="#object">object</a></td><td>Object</td>
	<td>Activity, Agent, or another Statement that is the Object of the Statement. 
	Represents the "This" in "I Did This". Note that Objects which are provided as a value for this field should 
	include an "objectType" field. If not specified, the Object is assumed to be 
	an Activity.</td></tr>
	<tr><td><a href="#result">result</a></td><td>Object</td>
	<td>Result Object, further details representing a measured outcome relevant to the specified Verb.</td></tr>
	<tr><td><a href="#context">context</a></td><td>Object</td>
	<td>Context that gives the Statement more meaning. Examples: a team the Actor is 
	working with, altitude at which a scenario was attempted in a flight simulator.</td></tr>
	<tr><td><a href="#timestamp">timestamp</a></td><td>Date/Time</td>
	<td>Timestamp (Formatted according to <a href="https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations">ISO 8601</a>) 
	of when the events described within this Statement occurred. If not provided, LRS 
	should set this to the value of "stored" time.</td></tr>
	<tr><td><a href="#stored">stored</a></td><td>Date/Time</td>
	<td>Timestamp (Formatted according to <a href="https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations">ISO 8601</a>) 
	of when this Statement was recorded. Set by LRS.</td></tr>
	<tr><td><a href="#authority">authority</a></td><td>Object</td>
	<td>Agent who is asserting this Statement is true. Verified by the LRS based on 
	authentication, and set by LRS if left blank.</td></tr>
	<tr><td><a href="#version">version</a></td><td>Version</td>
	<td>The Statement’s associated xAPI version, formatted according to <a href="http://semver.org/spec/v1.0.0.html">Semantic Versioning 1.0.0</a>.</td></tr>
	<tr>
		<td><a href="#attachments">attachments</a></td>
		<td>Array of attachment Objects</td>
	    <td>Headers for attachments to the Statement</td>
	</tr>
</table>  
Aside from (potential or required) assignments of properties during LRS 
processing ("id", "authority", "stored", "timestamp", "version") Statements are immutable. Note that the content of 
Activities that are referenced in Statements is not considered part of the 
Statement itself. So while the Statement is immutable, the Activities referenced 
by that Statement are not. This means a deep serialization of a Statement into 
JSON will change if the referenced Activities change (see the
[Statement API's](#stmtapi) "format" parameter for details).  

 
An example of the simplest possible Statement using all properties that MUST or SHOULD be used:  
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
See [Appendix D: Example Statements](#AppendixD) for more examples. 

<a name="stmtid"/> 

#### 4.1.1 ID 

###### Description 

A UUID (see [RFC 4122](http://www.ietf.org/rfc/rfc4122.txt)
for requirements, and the UUID must be in standard string form).

###### Requirements 

* Ids MUST be generated by the LRS if a Statement is received without an id.
* Ids SHOULD be generated by the Activity Provider.

<a name="actor"/>

#### 4.1.2 Actor  

###### Description 
A mandatory Agent or Group Object.

<a name="agent"/>

##### 4.1.2.1 When the Actor ObjectType is Agent
###### Description
An Agent (an individual) is a persona or system.

###### Details

* An Agent MUST be identified by one (1) of the four types of Inverse Functional Identifiers (see
<a href="#inversefunctional"> 4.1.2.3 Inverse Functional Identifier</a>);
* An Agent MUST NOT include more than one (1) Inverse Functional Identifier;
* An Agent SHOULD NOT use Inverse Functional Identifiers that are also used as a Group identifier.

The table below lists the properties of Agent Objects.

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr><td>objectType</td><td>string</td><td>"Agent". This property is optional except when the Agent is used as a Statement's Object.</td><td>no</td></tr>
	<tr><td>name</td><td>String</td><td>Full name of the Agent.</td><td>no</td></tr>
	<tr><td colspan="2">see <a href="#inversefunctional"> 4.1.2.3 Inverse Functional Identifier</a></td>
	    <td>An Inverse Functional Identifier unique to the Agent.</td><td>yes</td></tr>
</table>


<a name="group"/>

##### 4.1.2.2 When the Actor ObjectType is Group
###### Description

A Group represents a collection of Agents and can be used in most of the same situations an Agent 
can be used.  There are two types of Groups, anonymous and identified.

###### Requirements

* A system consuming Statements MUST consider each Anonymous Group distinct even if it has an identical set of members.
* A system consuming Statements MUST NOT assume that Agents in the 'member' property comprise an exact list of Agents
in a given anonymous or Identified Group.

###### Requirements for Anonymous Groups

* An Anonymous Group MUST include a 'member' property listing constituent Agents.
* An Anonymous Group MUST NOT contain Group Objects in the 'member' property.
* An Anonymous Group MUST NOT include any Inverse Functional Identifiers.

###### Requirements for Identified Groups

* An Identified Group MUST include exactly one (1) Inverse Functional Identifier.
* An Identified Group MUST NOT contain Group Objects in the 'member' property.
* An Identified Group SHOULD NOT use Inverse Functional Identifiers that are also used as Agent identifiers.
* An Identified Group MAY include a 'member' property listing constituent Agents.

###### Details

An Anonymous Group is used describe a cluster of people where there is no ready identifier for 
this cluster, e.g. an ad hoc team.

The table below lists all properties of an Anonymous Group.

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr><td>objectType</td><td>String</td><td>"Group". </td><td>yes</td></tr>
	<tr><td>name</td><td>String</td><td>Name of the group.</td><td>no</td></tr>
	<tr><td>member</td><td>Array of <a href="#agent">Agent Objects</a></td><td>The members of this Group.</td><td>yes</td></tr>
</table>

An Identified Group is used to uniquely identify a cluster of Agents.

The table below lists all properties of an Identified Group.

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr><td>objectType</td><td>String</td><td>"Group". </td><td>yes</td></tr>
	<tr><td>name</td><td>String</td><td>Name of the group.</td><td>no</td></tr>
	<tr><td>member</td><td>Array of <a href="#agent">Agent Objects</a></td><td>The members of this Group.</td><td>yes</td></tr>
	<tr><td colspan="2">see <a href="#inversefunctional"> 4.1.2.3 Inverse Functional Identifier</a></td>
	    <td>An Inverse Functional Identifier unique to the Group.</td><td>yes</td></tr>	
</table>


<a name="inversefunctional">

##### 4.1.2.3 Inverse Functional Identifier
###### Description 
An "Inverse Functional Identifier" is a value of an Agent or Identified
Group that is guaranteed to only ever refer to that Agent or Identified Group.

###### Rationale
Learning experiences become meaningless if they cannot be attributed to identifiable
individuals and/or groups. In an xAPI Statement this is accomplished with a set of
Inverse Functional Identifiers loosely inspired on the widely accepted FOAF principle
(see: <a href="http://xmlns.com/foaf/spec/#term_Agent"> Friend Of A Friend</a>).

###### Details

The table below lists all possible Inverse Functional Identifier properties.

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>mbox</td><td>mailto URI</td><td>The required format is "mailto:email address". <br>
The local part of the email address must be URI encoded.<br>Only email addresses that have only ever been and will ever be assigned to this Agent, 
but no others, should be used for this property and mbox_sha1sum.</td></tr>
	<tr><td>mbox_sha1sum</td><td>String</td><td>The SHA1 hash of a mailto URI (i.e. the value of an mbox property). An LRS MAY include Agents with a matching hash when a request is based on an mbox.</td></tr>
	<tr><td>openID</td><td>URI</td><td>An openID that uniquely identifies the Agent.</td></tr>
	<tr><td>account</td><td><a href="#agentaccount">Object</a></td><td>A user account on an existing system e.g. an LMS or intranet.</td></tr>	
</table>


<a name="agentaccount"/>

###### Account Object

###### Description 

A user account on an existing system, such as a private system (LMS or intranet) or a public
system (social networking site).

###### Details

* If the system that provides the account Object uses OpenID, the Activity Provider
SHOULD use the openID property instead of an account Object.
* If the Activity Provider is concerned about revealing personally identifiable
information about an Agent or Group, it SHOULD use an opaque account name (for example an
account number) to identify all Statements about a person while maintaining anonymity.

The table below lists all properties of Account Objects.

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>homepage</td><td>URL</td><td>The canonical home page for the system the account is on. This is based on FOAF's accountServiceHomePage.</td></tr>
	<tr><td>name</td><td>String</td><td>The unique id or name used to log in to this account. This is based 
			on FOAF's accountName.</td></tr>
</table>


###### Example

This example shows an Agent identified by an opaque account:

```
{
	"objectType": "Agent",
	"account": {
		"homePage": "http://www.example.com",
		"name": "1625378"
	}
}
``` 

<a name="verb"/>

#### 4.1.3 Verb

###### Description
The Verb defines the action between Actor and Activity. 

###### Rationale

The Verb in an xAPI Statement describes the action performed during the learning experience. The 
xAPI does not specify any particular Verbs. (With one exception, namely the reserved 
Verb <a href="#voided">'http://adlnet.gov/expapi/verbs/voided'</a>). Instead, it defines how to create Verbs so that 
communities of practice can establish Verbs meaningful to their members and make them available 
for use by anyone. A predefined list of Verbs would be limited by definition and might not be able to 
effectively capture all possible future learning experiences. 

###### Requirements

Verbs appear in Statements as Objects consisting of a URI and a set of display names 
corresponding to multiple languages or dialects which provide human-readable meanings of the Verb. 

* The display property MUST be used to illustrate the meaning which is already determined by the Verb URI.
* A system reading a Statement MUST use the Verb URI to infer meaning.
* The display property MUST NOT be used to alter the meaning of a Verb.
* A system reading a Statement MUST NOT use the display property to infer any meaning from the Statement.
* A system reading a Statement MUST NOT use the display property for any purpose other than display to a human.
Using the display property for aggregation or categorization of Statements is an example of violating this requirement. 
* The display property SHOULD be used by all Statements.
* The URI contained in the id SHOULD be human-readable and imply the Verb meaning.


###### Details

The table below lists all properties of the Verb Object.

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr>
		<td>id</td>
		<td>URI</td>
		<td>Corresponds to a Verb definition. Each Verb definition 
			corresponds to the meaning of a Verb, not the word. The URI should 
			be human-readable and contain the Verb meaning.</td>
	</tr>
	<tr>
		<td>display</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>The human readable representation of the 
			Verb in one or more languages. This does not have any impact on the 
			meaning of the Statement, but serves to give a human-readable 
			display of the meaning already determined by the chosen Verb.</td>
	</tr>
</table>

###### Example

```
{
	"verb" : { 
		"id":"http://www.adlnet.gov/XAPIprofile/ran(travelled_a_distance)", 
		"display":{
			"en-US":"ran",
			"es" : "corrió" 
		} 
	}
}
``` 

The Verb in the example above is included for illustrative purposes only. This is not intended to imply that
a Verb with this meaning has been defined with this id. This applies to all example verbs given in this 
specification document, with the exception of the reserved Verb <a href="#voided">'http://adlnet.gov/expapi/verbs/voided'</a>. 
			
##### 4.1.3.1 Use in Language and Semantics of Verbs

###### Details
_Semantics_

The URI represented by the Verb id identifies the particular semantics of a word, not the word itself. 

For example, the English word "fired" could mean different things depending on context, such as "fired a 
weapon", "fired a kiln", or "fired an employee". In this case, a URI MUST identify one of these specific 
meanings, not the word "fired". 

The display property has some flexibility in tense. While the Verb URIs are expected to remain in the 
past tense, if conjugating verbs to another tense (using the same Verb) within the Activity makes sense, 
it is allowed.

_Language_

A Verb in the Experience API is a URI, and denotes a specific meaning not tied to any particular language. 

For example, a particular Verb URI such as http://example.org/firearms#fire might denote the action of firing a gun, 
or the Verb URI http://example.com/فعل/خواندن might denote the action of reading a book. 

##### 4.1.3.2 Use in Communities of Practice

###### Requirements for Communities of Practice

* Anyone establishing a new Verb MUST own the URI, or MUST have permission from the owner to use it to denote an xAPI Verb;
* Anyone establishing a new Verb SHOULD make a human-readable description of the intended usage of the Verb 
accessible at the URI.

###### Requirements for Activity Providers

* Activity Providers SHOULD use a corresponding existing Verb whenever possible.
* Activity Providers MAY create and use a Verb if no suitable Verb exists.

###### Details

Communities of practice will, at some point in time, need to establish new Verbs to meet the needs of their constituency.

Therefore, it is expected that xAPI generates profiles, lists, and repositories that become centered on Verb 
vocabularies.  ADL is one such organization that is creating a companion document containing 
Verbs for xAPI.  In fulfillment of the requirements above, a collection of IRIs of recommended Verbs 
exists.  There are times when Activity Providers may wish to use a different Verb for the same meaning.



<a name="object"/>

####4.1.4 Object

###### Description

The Object of a Statement can be an Activity, Agent/Group, Sub-Statement, or Statement Reference. It is the "this" part of the 
Statement, i.e. "I did this". 

Some examples:

* The Object is an Activity: "Jeff wrote an essay about hiking."

* The Object is an Agent: "Nellie interviewed Jeff."

* The Object is a Sub-Statement or Statement Reference (different implementations, but similar when human-read): 
"Nellie commented on 'Jeff wrote an essay about hiking.'"

###### Details

Objects which are provided as a value for this field SHOULD include an "objectType" 
field. If not specified, the objectType is assumed to be "Activity". Other valid values 
are: <a href="#agentasobj">Agent</a>, <a href="#agentasobj">Group</a>, <a href="#substmt">Sub-Statement</a> or [StatementRef](#stmtref)</a>.
The properties of an Object change according to the objectType.

<a name="activity"/>

##### 4.1.4.1 When the ObjectType is Activity

A Statement may represent an Activity as the Object of the Statement. The following table lists the Object 
properties in this case.

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr>
		<td>objectType</td>
		<td>String</td>
		<td>MUST be "Activity" when present. Optional in all cases.</td>
	</tr>
	<tr>
		<td><a href="#acturi">id</a></td><td>URI</td>
		<td>An identifier for a single unique Activity. Required.</td>
	</tr>
	<tr>
		<td><a href="#actdef">definition</a></td>
		<td>Object</td>
		<td>Optional Metadata, <a href="#actdef">See below</a></td>
	</tr>
</table>

<a name="actdef"/>

##### Activity Definition

###### Details

The table below lists the properties of the Activity Definition Object:

<table>
	<tr><th>Property</th><th>Type</th><th>Use</th><th>Description</th></tr>
	<tr>
		<td>name</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>Recommended</td>
		<td>The human readable/visual name of the Activity</td>
	</tr>
	<tr>
		<td>description</td>
		<td><a href="misclangmap">Language Map</a></td>
		<td>Recommended</td>
		<td>A description of the Activity</td>
	</tr>
	<tr>
		<a name="acttype"/>
		<td>type</td>
		<td>URI</td>
		<td>Recommended</td>
		<td>The type of Activity.</td>
	</tr>
	<tr>
		<td>moreInfo</td>
		<td>URL</td>
		<td>Optional</td>
		<td>SHOULD resolve to a document human-readable information about the Activity,
		which MAY include a way to 'launch' the Activity.
		</td>
	</tr>
	<tr>
		<td colspan="4">Interaction properties, See: <a href="#interactionacts">Interaction Activities</a></td>
	</tr>
	<tr>
		<td>extensions</td>
		<td>Object</td>
		<td>Optional</td>
		<td>A map of other properties as needed (see: <a href="#miscext">Extensions</a>)</td>
	</tr>
</table>

__Note:__ URI fragments (sometimes called relative URLs) are not valid URIs. As with Verbs, it is recommended that
Activity Providers look for and use established, widely adopted, Activity types.

An LRS should update its internal representation of an Activity's definition upon receiving a 
Statement with the same Activity id, but with a different definition of the Activity from the one stored, 
but only if it considers the Activity Provider to have the authority to do so.  

<a name="acturi"/>

##### Activity id  

###### Requirements for Activity Ids

* An Activity id MUST be unique.
* An Activity id MUST always reference the same Activity.
* An Activity id SHOULD use a domain that the creator is authorized to use for this purpose.
* An Activity id SHOULD be created according to a scheme that makes sure all Activity ids within 
that domain remain unique.
* An Activity id MAY point to metadata or the URL for the Activity.


###### Requirements for the LRS

* An LRS MUST ignore any information which indicates two authors or organizations may have used the same Activity id.
* An LRS MUST NOT treat references to the same id as references to different Activities.
* Upon receiving a Statement with an Activity Definition that differs from the one stored, an LRS
SHOULD decide whether it considers the Activity Provider to have the authority to change the definition and
SHOULD update the stored Activity Definition accordingly if that decision is positive.
* An LRS MAY accept small corrections to the Activity’s definition. For example, it would be okay for an LRS
to accept spelling fixes, but it may not accept changes to correct responses.

###### Requirements for the Activity Provider

* An Activity Provider MUST ensure that Activity ids are not re-used across multiple Activities.
* An Activity Provider MUST only generate states or Statements against a certain Activity id that are compatible
and consistent with states or Statements previously stored against the same id.
* An Activity Provider MUST NOT allow new versions (i.e. revisions or other platforms) of the Activity 
to break compatibility.
	
###### Details

If it were possible to use the same id for two different Activities, the validity of Statements about 
these Activities could be questioned. This means an LRS may never treat (references to) the same 
Activity id as belonging to two different Activities, even if it thinks this was intended. Namely, 
when a conflict with another system occurs, it’s not possible to determine the intentions. 

<a name="actmeta"/>

##### Activity Metadata

###### Requirements

* If an Activity URI is a URL, an LRS SHOULD attempt to GET that URL, and include in HTTP
headers: "Accept: application/json, */*". This SHOULD be done as soon as practical after the LRS
first encounters the Activity id.

* Upon loading JSON which is a valid Activity Definition from a URL used as an Activity id,
 an LRS SHOULD incorporate the loaded definition into its internal definition for that Activity,
while preserving names or definitions not included in the loaded definition.

* An Activity with a URL identifier MAY host metadata using the <a href="#actdef">
Activity Definition</a> JSON format which is used in Statements, with a Content-Type of "application/json"

* Upon loading any document from which the LRS can parse an Activity Definition
from a URL used as an Activity id, an LRS MAY consider this definition when determining
its internal representation of that Activity's definition.

<a name="interactionacts"/>

##### Interaction Activities  

###### Rationale

Traditional e-learning has included structures for interactions or assessments. 
As a way to allow these practices and structures to extend Experience API's 
utility, this specification includes built-in definitions for interactions, which 
borrows from the SCORM 2004 4th Edition Data Model. These definitions are intended to provide a 
simple and familiar utility for recording interaction data. These definitions 
are simple to use, and consequently limited. It is expected that communities of 
practice requiring richer interactions definitions will do so through the use 
of extensions to an Activity's type and definition.  

###### Requirements

* Interaction Activities MUST have a valid interactionType.
* Interaction Activities SHOULD have the Activity type http://adlnet.gov/expapi/activities/cmi.interaction".
* An LRS, upon consuming a valid interactionType, MAY validate the remaining properties as specified in the table 
below and MAY return HTTP 400 "Bad Request" if the remaining properties are not valid for the Interaction Activity.

###### Details

The table below lists the properties for Interaction Activities.

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr>
		<td>interactionType</td>
		<td>String</td>
		<td>As in "cmi.interactions.n.type" as defined in the SCORM 2004 4th 
			Edition Run-Time Environment.</td>
	</tr>
	<tr>
		<td>correctResponsesPattern</td>
		<td>An array of strings</td>
		<td>Corresponds to 
			"cmi.interactions.n.correct_responses.n.pattern" as defined in 
			the SCORM 2004 4th Edition Run-Time Environment, where the final 
			<em>n</em> is the index of the array.</td>
	</tr>
	<tr>
		<td>choices | scale | source | target | steps</td>
		<td>Array of interaction components</td>
		<td>Specific to the given interactionType (<a href="#interactionType">see below</a>).</td>
	</tr>
</table>  

##### Interaction Components  

###### Requirements

* Within an array of interaction components, all id values MUST be distinct.
* An interaction component's id value SHOULD not have whitespace.

###### Details

Interaction components are defined as follows:  

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr>
		<td>id</td>
		<td>String</td>
		<td>A value such as used in practice for "cmi.interactions.n.id" as
            defined in the SCORM 2004 4th Edition Run-Time Environment</td> 
	<tr>
		<td>description</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>A description of the interaction component 
			(for example, the text for a given choice in a multiple-choice interaction)</td>
	</tr>
</table>

<a name="interactionType"/>

The following table shows the supported lists of CMI interaction components for 
an interaction Activity with the given interactionType.

<table>
	<tr><th>interactionType</th><th>supported component list(s)</th><tr>
	<tr><td>choice, sequencing</td><td>choices</td></tr>
	<tr><td>likert</td><td>scale</td></tr>
	<tr><td>matching</td><td>source, target</td></tr>
	<tr><td>performance</td><td>steps</td></tr>
	<tr><td>true-false, fill-in, numeric, other</td><td>[No component lists defined]</td></tr>
</table>

See [Appendix C](#AppendixC) for examples of Activity Definitions for each of the cmi.interaction types.

<a name="agentasobj"/>

##### 4.1.4.2 When the "Object" is an Agent or a Group

###### Requirements

* Statements that specify an Agent or Group as an Object MUST specify an 'objectType' property. 

See [Section 4.1.2 Actor](#actor) for details regarding Agents.  

<a name="stmtasobj"/>

##### 4.1.4.3 When the "Object" is a Statement

###### Rationale

There are two possibilities for using a Statement as an Object.  First, an Object can take on the form 
of a Statement that already exists by using a Statement Reference. A common use case for 
Statement References is grading or commenting on an experience that could be tracked as an 
independent event.  The special case of voiding a Statement would also use a Statement Reference.
Second, an Object can be brand new Statement by using a Sub-Statement.  A common use case for 
Sub-Statements would be any experience that would be misleading as its own Statement. Each type is defined below.

<a name="stmtref"/>

##### Statement References

###### Description
A Statement Reference is a pointer to another pre-existing Statement.

###### Requirements

* A Statement Reference MUST specify an "objectType" property with the value "StatementRef".
* A Statement Reference MUST set the "id" property to the UUID of a Statement which is present on the system.

The table below lists all properties of a Statement Reference Object:

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>objectType</td><td>String</td><td>In this case, MUST be "StatementRef".</td></tr>
	<tr><td>id</td><td>UUID</td><td>The UUID of a Statement 
	which is present on the system.</td></tr>
</table>

###### Example

Assuming that some Statement has already been stored with 
the id 8f87ccde-bb56-4c2e-ab83-44982ef22df0, the following example shows how a 
comment could be issued on the original Statement, using a new Statement:  

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

##### Sub-Statements

A Sub-Statement is a new Statement included as part of a parent Statement.

###### Requirements

* A Sub-Statement MUST specify an "objectType" property with the value "SubStatement".
* A Sub-Statement MUST be validated as a Statement in addition to other Sub-Statement requirements.
* A Sub-Statement MUST NOT have the "id", "stored", "version" or "authority" properties.
* A Sub-Statement MUST NOT contain a Sub-Statement of their own i.e. cannot be nested.

###### Example

One interesting use of Sub-Statements is in creating Statements of intention. 
For example, using Sub-Statements we can create Statements of the form 
```"<I> <planned> (<I> <did> <this>)"```  to indicate that we've planned to take some 
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

<a name="result"/>

#### 4.1.5 Result

###### Description
An optional field that represents a measured outcome related to the Statement in which it is included.

###### Details
The following table contains the properties of the Results Object.

<table border="1">
<tr><th>Property</th><th>Type</th><th>Description</th></tr>
<td>score</td>
<td>Object</td>
<td>The score of the Agent in relation to the success or quality of the experience. <a href ="#Score">See: Score</a></a></td>
</tr>
<tr><td>success</td><td>Boolean</td><td>Indicates whether or not the attempt on the Activity was successful.</td>
</tr>
<tr><td>completion</td><td>Boolean</td><td>Indicates whether or not the Activity was completed.</td>
</tr>
<tr>
<td>response</td><td>String</td><td>A response appropriately formatted for the given Activity.</td>
</tr>
<tr>
<td>duration</td><td>Formatted according to <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations">ISO 8601</a>
with a precision of 0.01 seconds</td><td>Period of time over which the Statement occurred.</td>
</tr>
<tr>
<td>Extensions</td><td>Object</td><td>A map of other properties as needed.
<a href="#miscext">See: Extensions</a></td>
</tr>
</table> 

<a name="Score"/>

##### 4.1.5.1 Score

###### Description
An optional numeric field that represents the outcome of a graded Activity achieved by an Agent.

###### Requirements

* The Score Object SHOULD include 'scaled' if a logical percent based score is known.
* The Score Object SHOULD NOT be used for scores relating to progress or completion.  Consider using an extension
from an extension profile instead.

###### Details

The table below defines the Score Object. 

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>scaled</td><td>Decimal number between -1 and 1, inclusive</td><td>Cf. 'cmi.score.scaled' in SCORM 2004 4th Edition</td></tr>
	<tr><td>raw</td><td>Decimal number between min and max (if present, otherwise unrestricted), inclusive</td><td>Cf. 'cmi.score.raw'</td></tr>
	<tr><td>min</td><td>Decimal number less than max (if present)</td><td>Cf. 'cmi.score.min'</td></tr>
	<tr><td>max</td><td>Decimal number greater than min (if present)</td><td>Cf. 'cmi.score.max'</td></tr>
</table>



<a name="context"/>

#### 4.1.6 Context

###### Description 
An optional field that provides a place to add contextual information to a Statement. All properties are optional.

###### Rationale 
The "context" field provides a place to add some contextual information to a Statement. It can store information such 
as the instructor for an experience, if this experience happened as part of a team Activity, or how an experience fits 
into some broader activity.

###### Requirements

* The _revision_ property MUST NOT be used if the Statement's Object is an Agent or Group.
* The _platform_ property MUST NOT be used if the Statement's Object is an Agent or Group.
* The _language_ property MUST NOT be used if not applicable or unknown.
* The _revision_ property SHOULD be used to track fixes of minor issues (like a spelling error).
* The _revision_ property SHOULD NOT be used if there is a major change in learning objectives, pedagogy, 
or assets of an Activity. (Use a new Activity id instead).

###### Details

The following table contains the properties of the Context Object.

<table border="1">
<tr><th>property</th><th>type</th><th>description</th></tr>
<tr>
<td>registration</td>
<td>UUID</td>
<td>The registration that the Statement is associated with. 

</tr>
<tr>
<td>instructor</td>
<td>Agent (may be a group)</td>
<td>Instructor that the Statement relates to, if not included as the Actor of the Statement.</td>

</tr>
<tr>
<td>team</td>
<td>Group</td>
<td>Team that this Statement relates to, if not included as the Actor of the Statement.</td>

</tr>
<tr>
<td>contextActivities</td>
<td>contextActivities Object</td>
<td>A map of the types of learning activity context that this Statement is related to.
Valid context types are: "parent", "grouping", "category" and "other". 

</tr>
<tr>
<td>revision</td>
<td>String</td>
<td>Revision of the learning activity associated with this Statement. Format is free.
</tr>
<tr>
<td>platform</td>
<td>String</td>
<td>Platform used in the experience of this learning activity. </td>

</tr>
<tr>
<td>language</td>
<td>String (as defined in <a href="http://tools.ietf.org/html/rfc5646">RFC 5646</a>)</td>
<td>Code representing the language in which the experience being recorded in this Statement (mainly) occurred in, if 
applicable and known.
</td>

</tr>
<tr>
<td>statement</td>
<td>[Statement Reference](#stmtref)</td>
<td>Another Statement, which should be considered as context for this Statement. </td>

</tr>
<tr>
<td>extensions</td>
<td>Object</td>
<td>A map of any other domain-specific context relevant to this Statement. For example, in a flight simulator 
altitude, airspeed, wind, attitude, GPS coordinates might all be relevant (<a href="#miscext">See Extensions</a>)</td>

</tr>

</table>


__Note:__ Revision has no behavioral implications within the scope of xAPI. It is simply stored,
so that it is available for reporting tools.

<a name="Registration"/>

##### 4.1.6.1 Registration Property

###### Description
An instance of a learner undertaking a particular learning activity.

###### Details
When an LRS is an integral part of an LMS, the LMS likely supports the concept of registration. 
The Experience API applies the concept of registration more broadly.  A registration could be 
considered to be an attempt, a session, or could span multiple Activities. There is no expectation that 
completing an Activity ends a registration. Nor is a registration necessarily confined to a single Agent.

<a name="contextActivities"/>

##### 4.1.6.2 ContextActivities Property

###### Description
A map of the types of learning activity context that this Statement is related to.

###### Rationale
Many Statements do not just involve one Object Activity that is the focus,
but relate to other contextually relevant Activities. "Context Activities" allow for 
these related Activities to be represented in a structured manner.

###### Requirements
* Every key in the contextActivities Object MUST be one of parent, grouping, category, or other.
* Every value in the contextActivities Object MUST be either a single Activity Object or an array of Activity Objects.
* The LRS MUST return every value in the contextActivities Object as an array, even if it arrived
as a single Activity Object.
* The LRS MUST return single Activity Objects as an array of length one containing the same Activity.
* The Client SHOULD ensure that every value in the contextActivities Object is an array of Activity Objects 
instead of a single Activity Object.

###### Details
There are four valid context types. All, any or none of these MAY be used in a given Statement:

1. __Parent__: an Activity with a direct relation to the Activity
which is the Object of the Statement. In almost all cases there
is only one sensible parent or none, not multiple.
For example: a Statement about a quiz question would have the quiz
as its parent Activity.
 
2. __Grouping__: an Activity with an indirect relation to the Activity
which is the Object of the Statement.
For example: a course that is part of a qualification. The course
has several classes. The course relates to a class as the parent,
the qualification relates to the class as the grouping.

3. __Category__: an Activity used to categorize the Statement.
"Tags" would be a synonym. Category SHOULD be used to indicate
a "profile" of xAPI behaviors, as well as other categorizations.
For example: Anna attempts a biology exam, and the Statement is
tracked using the CMI-5 profile. The Statement's Activity refers
to the exam, and the category is the CMI-5 profile.

5. __Other__: a context Activity that doesn't fit one of the other fields.
For example: Anna studies a textbook for a biology exam. The Statement's
Activity refers to the textbook, and the exam is a context Activity of type "other".

Single Activity Objects are allowed as values so that 0.95 Statements will be compatible with 1.0.0.

__Note:__ The values in this section are not for expressing all the relationships the Statement Object has.
Instead, they are for expressing relationships appropriate for the specific Statement
(though the nature of the Object will often be important in determining that).
For instance, it is appropriate in a Statement about a test to include the course
the test is part of as parent, but not to include every possible degree
program the course could be part of in the grouping value.

###### Example

Consider the following hierarchical structure: "Questions 1 to 6"
are part of "Test 1" which in turn belongs to the course "Algebra 1". 
The six questions are registered as part of the test by declaring
"Test 1" as their parent. Also they are grouped with other Statements
about "Algebra 1" to fully mirror the hierarchy. This is particularly
useful when the Object of the Statement is an Agent, not an Activity.
"Andrew mentored Ben with context Algebra I".

```
{
	"parent" : [{
	"id" : "http://example.adlnet.gov/xapi/example/test 1"
	}],
	"grouping" : [{
	"id" : "http://example.adlnet.gov/xapi/example/Algebra1"
	}]
}
```

<a name="timestamp"/>

#### 4.1.7 Timestamp

###### Description
The time at which a  Statement was generated.

###### Requirements
* A timestamp MUST be formatted according to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
* A timestamp SHOULD include the timezone.
* A timestamp SHOULD be the current or a past time when it is outside of a Sub-Statement.
* A timestamp MAY be truncated or rounded to a precision of at least 3 decimal digits for seconds (millisecond precision MUST be preserved). 
* A timestamp MAY be a moment in the future, to denote a deadline for planned learning, provided it is included 
inside a Sub-Statement.

###### Details
A timestamp in a Statement that occurs outside of the system can differ from 
[Stored](#stored) (the system time of the event). Namely, there can be delays between the occurrence of the 
experience and the reception of the corresponding Statement by the LRS. Another cause is when Statements 
are propagated to other systems.


<a name="stored"/> 

#### 4.1.8 Stored

###### Description 
The time at which a Statement is stored by the LRS.

The stored property is the literal time the Statement was stored.  Use [Timestamp](#timestamp) 
to track a time at which the Statement was generated.

###### Requirements

* The stored property MUST be formatted according to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
* The stored property SHOULD include the timezone.
* The stored property SHOULD be the current or a past time
* The stored property MAY be truncated or rounded to a precision of at least 3 decimal digits
for seconds (millisecond precision MUST be preserved). 

<a name="authority"/> 

#### 4.1.9 Authority

###### Description
The authority property provides information about whom or what has asserted that 
this Statement is true. 

###### Requirements
* Authority MUST be an Agent, except in 3-legged OAuth, where it MUST be a Group with two Agents. 
The two Agents represent an application and user together.
* The LRS MUST include the user as an Agent as the entire authority if a user connects 
directly (using HTTP Basic Authentication) or is included as part of a Group. 
* The LRS MUST ensure that all Statements stored have an authority.
* The LRS SHOULD overwrite the authority on all stored received Statements, 
based on the credentials used to send those Statements.
* The LRS MAY leave the submitted authority unchanged but SHOULD do so only 
where a strong trust relationship has been established, and with extreme caution.
* The LRS MAY identify the user with any of the legal identifying properties if 
a user connects directly (using HTTP Basic Authentication) or a part of 3-legged OAuth. 

###### Details
The asserting authority represents the authenticating user or some system or application.

##### OAuth Credentials as Authority 

###### Description
This is a workflow for use of OAuth.  2-legged and 3-legged OAuth are both supported.

###### Requirements
* The authority MUST contain an Agent Object that represents the OAuth consumer, either by itself, or 
as part of a group in the case of 3-legged OAuth.
* The Agent representing the OAuth consumer MUST be identified by account.
* The Agent representing the OAuth consumer MUST use the consumer key as the “account name” field.
* If the Agent representing the OAuth consumer is a registered application, the token request endpoint 
MUST be used as the account homePage.
* If the Agent representing the OAuth consumer is not a registered application, the temporary  
credentials endpoint MUST be used as the account homePage.
* An LRS MUST NOT trust the application portion of the authority in the event the account name is from 
the same source as the unregistered application. (Multiple unregistered applications could choose the same consumer key. 
As a result, there is no consistent way to verify this combination of temporary credentials and 
the account name.) 
* Each unregistered consumer SHOULD use a unique consumer key.


###### Details
This workflow assumes a Statement is stored using a validated OAuth connection and the LRS 
creates or modifies the authority property of the Statement.

In a 3-legged OAuth workflow, authentication involves both an OAuth consumer and a user of the 
OAuth service provider. For instance, requests made by an authorized Twitter plug-in on their 
Facebook account will include credentials that are specific not only to Twitter as a Client application, 
or them as a user, but the unique combination of both.

###### Example

The pairing of an OAuth consumer and a user.

```
"authority": {
	"objectType" : "Group",
	"member": [
		{
			"account": {
				"homePage":"http://example.com/xAPI/OAuth/Token",
				"name":"oauth_consumer_x75db"
			}
		},
		{ 
			"mbox":"mailto:bob@example.com" 
		}
	]
}
```

<a name="version"/> 

#### 4.1.10 Version
###### Description
Version information in Statements helps systems that process data from an LRS get their bearings. Since
the Statement data model is guaranteed consistent through all 1.0.x versions, in order to support data
flow among such LRSs the LRS is given some flexibility on Statement versions that are accepted.

###### Requirements
* Version MUST be formatted as laid out for the API version header in [API Versioning](#apiversioning)

###### LRS Requirements
* An LRS MUST accept all Statements where their version starts with "1.0." if they otherwise validate.
* An LRS MUST reject all Statements with a version specified that does not start with "1.0.".
* Statements returned by an LRS MUST retain the version they are accepted with. If they
lack a version, the version MUST be set to 1.0.0.


###### Client Requirements
* If Clients set the Statement version, they MUST set it to 1.0.0
* Clients SHOULD NOT set the Statement version;


<a name="attachments"/>
#### 4.1.11 Attachments

###### Description
A digital artifact providing evidence of a learning experience.

###### Rationale 
In some cases an attachment may logically be an important part of a learning record. Think of a simulated 
communication with ATC, an essay, a video, etc. Another example of such an attachment is (the image of) a 
certificate that was granted as a result of an experience. It is useful to have a way to store these attachments 
in and retrieve them from an LRS. 

###### Requirements for Attachment Statement Batches

A Statement batch, Statement results, or single Statement that includes attachments:

* MUST be of type "application/json" and include a fileUrl for every attachment EXCEPT for Statement results when the attachments filter is false or
* MUST conform to the definition of multipart/mixed in RFC 1341 and:
    * The first part of the multipart document MUST contain the Statements themselves, with type "applicaton/json".
    * Each additional part contains the raw data for an attachment and forms a logical part of the Statement. This 
capability will be available when issuing PUT or POST against the Statement resource.
	* MUST include a X-Experience-API-Hash field in each part's header after the first (statements) part.
	* This field MUST be set to match the "sha2" property of the attachment declaration corresponding to the 
	attachment included in this part.
	* MUST include a Content-Transfer-Encoding field with a value of "binary" in each part's header after the first (statements) part.
    * SHOULD only include one copy of an attachment's data when the same attachment is used in multiple Statements that are sent together.
    * SHOULD include a Content-type field in each part's header, for the first part this MUST be "application/json".


###### Requirements for the LRS

* An LRS MUST include attachments in the Transmission Format described above
when requested by the Client (see Section [7.2 "Statement API"](#stmtapi)).
* An LRS MUST NOT pull Statements from another LRS without requesting attachments.
* An LRS MUST NOT push Statements into another LRS without including attachment data
received, if any, for those attachments.
* When receiving a PUT or POST with a document type of "application/json", 
    * An LRS MUST accept batches of Statements which contain either no attachment Objects, or
only attachment Objects with a populated fileUrl.
* Otherwise:
    * An LRS MUST accept batches of Statements via the Statements resource PUT or POST that contain
    attachments in the Transmission Format described above.
    * An LRS MUST reject batches of Statements having attachments that neither contain a fileUrl nor match a
received attachment part based on their hash.
    * An LRS SHOULD assume a Content-Transfer-Encoding of binary for attachment parts.
* An LRS MAY reject (batches of) Statements that are larger than the LRS is configured to allow.

__Note:__ There is no requirement that Statement batches using the mime/multipart format
contain attachments.

###### Requirements for the Client

* The Client MAY send Statements with attachments as described above.
* The Client MAY send multiple Statements where some or all have attachments if using "POST".
* The Client MAY send batches of type "application/json" where every attachment
Object has a fileUrl, ignoring all requirements based on the "multipart/mixed" format.

###### Details
The table below lists all properties of the Attachment Object.
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

_Procedure for the exchange of attachments_

1. A Statement including an attachment is construed according to the Transmission Format described below.

2. The Statement is sent to the receiving system using a Content-Type of
"multipart/mixed". The attachments are placed at the end of such transmissions.

3. The receiving system decides whether to accept or reject the Statement based on the information in the first part.

4. If it accepts the attachment, it can match the raw data of an attachment
with the attachment header in a Statement by comparing the SHA-2 of the raw
data to the SHA-2 declared in the header. It MUST not do so any other way.


###### Example

Below is an example of a very simple Statement with an attachment. Please note the following:

* The boundary in the sample was chosen to demonstrate valid character classes;
* The selected boundary does not appear in any of the parts;
* For readability the sample attachment is text/plain. Even if it had been a 'binary' type
like 'image/jpeg' no encoding would be done, the raw octets would be included;
* Per RFC 1341, the boundary is <CRLF> followed by -- followed by the boundary string declared in the header.

Don't forget the ```<CRLF>```  when building or parsing these messages.

Headers:

``` 
Content-Type: multipart/mixed; boundary=abcABC0123'()+_,-./:=?
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

<a name="dataconstraints"/>
#### 4.1.12 Data Constraints

###### Details

All the properties used in Statements are restricted to certain types, and those types
constrain the behavior of systems processing Statements. For clarity, certain key
requirements are documented here, emphasizing where compliant systems have a responsibility
to act in certain ways.

###### Requirements for the Client

The following requirements reiterate especially important requirements already
included elsewhere, to emphasize, clarify, and provide implementation guidance.

* Values requiring IRIs MUST be sent with valid IRIs. Please use a library to
construct them instead of string concatenation. Complete IRI validation is
extremely difficult, so much of the burden for ensuring data portability is on the Client.
* Keys of language maps MUST be sent with valid RFC 5646 language tags, for similar reasons.

###### Requirements for the LRS

* The LRS MUST reject Statements
    * with any null values (except inside extensions).
    * with strings where numbers are required, even if those strings contain numbers.
    * with strings where booleans are required, even if those strings contain booleans.
    * with any non-format-following key or value, including the empty string, where a.
      string with a particular format (such as mailto URI, UUID, or IRI) is required.
    * where the case of a key does not match the case specified in the standard.
    * where the case of a value restricted to enumerated values does not match
      an enumerated value given in the standard exactly.
* The LRS MUST reject Statements containing URL, URI, or IRI values without a scheme.
* The LRS MUST at least validate that the sequence of token lengths for language map keys
matches the [RFC 5646](http://tools.ietf.org/html/rfc5646) standard.
* The LRS MUST process and store numbers with at least the precision of IEEE 754 32-bit
floating point numbers.
* The LRS MUST validate parameter values to the same standards required for values of the
same types in Statements. __Note:__ string parameter values are not quoted as they are in JSON.
* The LRS MAY use best-effort validation for URL, URI, and IRI formats to satisfy the
non-format-following rejection requirement.
* The LRS MAY use best-effort validation for language map keys to satisfy the
non-format-following rejection requirement.


<a name="retstmts"/> 

### 4.2 Retrieval of Statements

###### Description
A collection of Statements can be retrieved by performing a query on the "statements" 
endpoint, see Section [7.2 "Statement API"](#stmtapi) for details. 

###### Details
The following table shows the data structure for the results of queries on the Statement API.
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>statements</td><td>Array of Statements</td>
		<td>List of Statements. If the list returned has been limited (due to pagination), 
			and there are more results, they will be located at the "statements" property 
			within the container located at the URL provided by the "more" element of 
			this Statement result Object.
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

<a name="voided"/>
#### 4.3 Voided

###### Rationale

The certainty that an LRS has an accurate and complete collection of data is guaranteed by the fact that Statements 
cannot be logically changed or deleted. This immutability of Statements is a key factor in enabling the distributed 
nature of Experience API.

However, not all Statements are perpetually valid once they have been issued. Mistakes or other factors could require 
that a previously made Statement is marked as invalid. This is called "voiding a Statement" and the reserved Verb 
“http://adlnet.gov/expapi/verbs/voided" is used for this purpose. Any Statement that voids another cannot 
itself be voided.

###### Requirements

* When issuing a Statement that voids another, the Object of that voiding Statement MUST have the "objectType" 
field set to "StatementRef".
* When issuing a Statement that voids another, the Object of that voiding Statement MUST specify the id 
of the statement-to-be-voided by its "id" field.
* Upon receiving a Statement that voids another, the LRS SHOULD reject the entire request which includes the 
voiding Statement with HTTP 403 'Forbidden' if the request is not from a source authorized to void Statements.
* Upon receiving a Statement that voids another, the LRS SHOULD return a descriptive error if the target 
Statement cannot be found.
* Upon receiving a Statement that voids another, the LRS MAY roll back any changes to Activity or Agent 
definitions which were introduced by the Statement that was just voided;
* An Activity Provider that wants to "unvoid" a previously voided Statement SHOULD issue that Statement 
again under a new id
* A reporting system SHOULD NOT show voided or voiding Statements by default.

###### Note: See ["Statement References"](#stmtref) in [Section 4.1.4.3 When the "Object" is a Statement](#stmtasobj) 
for details about making references to other Statements.  To see how voided statements behave when queried, 
See [StatementRef](#queryStatementRef) in 7.2 Statement API).

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

This example Statement voids a previous Statement which it identifies with the Statement id 
"e05aa883-acaf-40ad-bf54-02c8ce485fb0".


<a name="signature"/>
#### 4.4 Signed Statements

##### Description
A Statement may include a <a href="https://en.wikipedia.org/wiki/Digital_signature">
digital signature</a> to provide strong and durable evidence of the authenticity and
integrity of the Statement.

##### Rationale
Some Statements will have regulatory or legal significance, or otherwise require strong
and durable evidence of their authenticity and integrity. It may be necessary to verify
these Statements without trusting the system they were first recorded in, or perhaps
without access to that system. Digital signatures will enable a third-party system
to validate such Statements.

##### Requirements

* A Signed Statement MUST include a JSON web signature (JWS) as defined here:
http://tools.ietf.org/html/draft-ietf-jose-json-web-signature, as an attachment with a usageType
of "http://adlnet.gov/expapi/attachments/signature" and a contentType of "application/octet-stream".
* The JWS signature MUST have a payload of a valid JSON serialization of the Statement generated
before the signature was added.
* The JWS signature MUST use an algorithm of "RS256","RS384", or "RS512".
* The JWS signature SHOULD have been created based on the private key associated with an
X.509 certificate.
* If X.509 was used to sign, the JWS header SHOULD include the "x5c" property containing
the associated certificate chain.
* The LRS MUST reject requests to store Statements that contain malformed signatures,
with HTTP 400 and SHOULD include a message describing the problem in the response.
In order to verify signatures are well formed, the LRS MUST do the following:
    * Decode the JWS signature, and load the signed serialization of the Statement from the
JWS signature payload.
    * Validate that the "original" Statement is logically equivalent to the received Statement.
    	* When making this equivilance check, differences which could have been caused by
    	allowed or required LRS processing of "id", "authority", "stored", "timestamp", or
    	"version" MUST be ignored.
    * If the JWS header includes an X.509 certificate, validate the signature against that
    certificate as defined in JWS.
* Clients MUST NOT assume a signature is valid simply because an LRS has accepted it.

##### Details

Signed Statements include a JSON web signature (JWS) as an attachment. This allows
the original serialization of the Statement to be included along with the signature.
For interoperability, the "RSA + SHA" series of JWS algorithms have been selected, and
for discoverability of the signer X.509 certificates SHOULD be used.

See <a href="#AppendixF">Appendix F: Example Signed Statement</a> for an example.

##### Note: The step of validating against the included X.509 certificate is intended as a
way to catch mistakes in the signature, not as a security measure. Clients MUST NOT assume
a signature is valid simply because an LRS has accepted it. The steps to authenticate
a signed Statement will vary based on the degree of certainty required and are outside
the scope of this specification.


<a name="misctypes"/>
## 5.0 Miscellaneous Types

<a name="miscdocument"/> 

### 5.1 Document
The Experience API provides a facility for Activity Providers to save arbitrary data in 
the form of documents, which may be related to an Activity, Agent, or combination of both.  
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>id</td><td>String</td><td>Set by AP, unique within state scope (learner, activity).</td></tr>
	<tr><td>updated</td><td>Timestamp</td><td>When the document was most recently modified.</td></tr>
	<tr><td>contents</td><td>Arbitrary binary data</td><td>The contents of the document</td></tr>
</table>
Note that in the REST binding, State is a document not an Object. The id is stored in the URL, 
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
MUST NOT reject an Experience API Statement based on the values of the extensions 
map.  

Extensions are available as part of Activity Definitions, as part of Statement 
context, or as part of some Statement result. In each case, they're intended to 
provide a natural way to extend those elements for some specialized use. The 
contents of these extensions might be something valuable to just one application, 
or it might be a convention used by an entire community of practice.  

Extensions should logically relate to the part of the Statement where they are 
present. Extensions in Statement context should provide context to the core 
experience, while those in the result should provide elements related to some 
outcome. For Activities, they should provide additional information that helps 
define an Activity within some custom application or community.  

__Note:__ A Statement should not be totally defined by its extensions, and be 
meaningless otherwise. Experience API Statements should be capturing experiences 
among Actors and Objects, and SHOULD always strive to map as much information as 
possible into the built in elements, in order to leverage interoperability among 
Experience API conformant tools.  

<a name="miscmeta"/>

### 5.4 Identifier Metadata
There are several types of URI identifiers used in this specification:
* <a href="#verb">Verb</a>
* <a href="#acturi">Activity id</a>
* <a href="#acttype">Activity type</a>
* <a href="#miscext">extension key</a>
* <a href="#attachmentUsage">attachment usage type</a>

For Activity ids, see <a href="#actdef">Activity Definition</a>.

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

If metadata is provided, both name and description SHOULD be included.

* For any of the identifier URIs above, if the URI is a URL that was coined for use with this
specification, the owner of that URL SHOULD
make this JSON metadata available at that URL when the URL is requested and a Content-Type
of "application/json" is requested.
* If this metadata is provided as described above, it is the canonical source of information
about the identifier it describes
* Other sources of information MAY be used to fill in missing details, such as translations, or
take the place of this metadata entirely if it was not provided or cannot be loaded. This MAY
include metadata in other formats stored at the URL of an identifier, particularly if that
identifier was not coined for use with this specification.

<a href="#verb-lists-and-repositories">As with Verbs</a>, we recommend 
that Activity Providers look for and use established, 
widely adopted identifiers for all types of URI identifier other than Activity id. Where an
identifier already exists, the Activity Provider:

* SHOULD use the corresponding existing identifier;
* MAY create and use their own Verbs where a suitable identifier does not already exist.

<a name="rtcom"/>

## 6.0 Runtime Communication

Sections 6 and 7 detail the more technical side of the Experience API, dealing with 
how Statements are transferred between Activity Provider and LRS. A number of libraries 
are under development for a range of technologies (including JavaScript) which handle 
this part of the specification. It therefore may not be necessary for content developers 
to fully understand every detail of this part of the specification.

<a name="encoding"/> 

### 6.1 Encoding

###### Requirement
* All strings MUST be encoded and interpreted as UTF-8. 

<a name="apiversioning"/> 

### 6.2 API Versioning

###### Rationale

Future revisions of the specification may introduce changes such as properties added to 
Statements.

Systems retrieving Statements may then receive responses that include Statements of different
versions. The version header allows for these version differences to be handled correctly, and 
to ascertain that no partial or mixed LRS version implementations exist.

Using Semantic Versioning will allow Clients and LRSs to reliably know whether they're
compatible or not as the specification changes.

###### Requirements

Every request from a Client and every response from the LRS must include an HTTP header with the name “X-Experience-API-Version" and the version as the value.
Starting with 1.0.0, xAPI will be versioned according to [Semantic Versioning 1.0.0](http://semver.org/spec/v1.0.0.html)

Example:  ``X-Experience-API-Version : 1.0.0``

####### Requirements for the LRS:

* MUST include the "X-Experience-API-Version" header in every response.
* MUST set this header to "1.0.0".
* MUST accept requests with a version header of "1.0" as if the version header was "1.0.0".
* MUST reject requests with version header prior to "1.0.0" unless such requests are routed to a fully conformant implementation of the prior version specified in the header.
* MUST reject requests with a version header of "1.1.0" or greater.
* MUST make these rejects by responding with an HTTP 400 error including a short description of the problem.


####### Requirements for the Client:

* SHOULD tolerate receiving responses with a version of "1.0.0" or later.
* SHOULD tolerate receiving data structures with additional properties.
* SHOULD ignore any properties not defined in version 1.0.0 of the spec.

####### Converting Statements to other versions:

* Systems MUST NOT convert Statements of newer versions into a prior version format, e.g., in order to handle version differences.
* Systems MAY convert Statements of older versions into a newer version only by following the methods described in
<a href="#AppendixE">Appendix E: Converting Statements to 1.0.0</a>.

<a name="concurrency"/> 
### 6.3 Concurrency

##### Description
Concurrency control makes certain that an API consumer does not PUT changes based on old
data into an LRS.

##### Details
xAPI will use HTTP 1.1 entity tags ([ETags](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19))
to implement optimistic concurrency control in the portions of the API where PUT may
overwrite existing data, being:

* State API
* Agent Profile API 
* Activity Profile API

The State API will permit PUT Statements without concurrency headers, since state conflicts
are unlikely. The requirements below only apply to Agent Profile API and Activity Profile API.

##### Client requirements

An xAPI Client using either Agent Profile API or Activity Profile API…

* MUST include the [If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)
header or MUST include the If-None-Match header.

##### LRS requirements

The LRS that responds to a GET request

* MUST add an ETag HTTP header to the response.
* MUST calculate the value of this header to be a hexidecimal string of the  SHA-1 digest
of the contents.
* MUST enclose the header in quotes.

The reason for specifying the LRS ETag format is to allow API consumers that can't read
the ETag header to calculate it themselves.

The LRS that responds to a PUT request

* MUST handle the [If-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24)
header as described in RFC2616, HTTP 1.1 if it contains an ETag, in order to detect
modifications made after the consumer last fetched the document.
* MUST handle the [If-None-Match](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26)
header as described in RFC2616, HTTP 1.1 if it contains "*", in order to to detect when there
is a resource present that the consumer is not aware of.

If the header precondition in either of the above cases fails, the LRS

* MUST return HTTP status 412 "Precondition Failed".
* MUST NOT make a modification to the resource. 

If a PUT request is received without either header for a resource that already exists, the LRS

* MUST return HTTP status 409 "Conflict".
* MUST return a plain text body explaining that the consumer SHOULD
	- check the current state of the resource.
	- set the "If-Match" header with the current ETag to resolve the conflict.
* MUST NOT make a modification to the resource.


<a name="security"/>

### 6.4 Security

###### Rationale

In order to balance interoperability and the varying security requirements of different
environments, several authentication options are defined.

###### Requirement

The LRS MUST support authentication using at least one of the following methods:
-	OAuth 1.0 (rfc5849), with signature methods of "HMAC-SHA1", "RSA-SHA1", and "PLAINTEXT"
- HTTP Basic Authentication
- Common Access Cards (implementation details to follow in a later version)
- The LRS MUST handle making, or delegating, decisions on the validity of Statements,
 and determining what operations may be performed based on the credentials used.



###### Authentication scenarios

The below matrix describes the possible authentication scenarios.

A **registered application** is an application that will authenticate to the LRS as an OAuth  consumer that has been registered with the LRS.
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

	
<a name="authdefs"/>

#### 6.4.1 How To Handle Each Scenario

##### General
* The LRS must record the application's name and a unique consumer key (identifier).
* The LRS must provide a mechanism to complete this registration, or delegate to another system that provides such 
a mechanism.
The means by which this registration is accomplished are not defined by OAuth or the xAPI.

##### Application registered + known user

* Use endpoints below to complete the standard workflow.
* If this form of authentication is used  to record Statements and no  authority  is specified, the LRS should record 
the  authority  as a group consisting of an Agent representing the registered application, and an Agent representing 
the known user.

##### Application registered + user unknown

* LRS will honor requests that are signed using OAuth with the registered application's credentials and with an empty 
token and token secret.
* If this form of authentication is used  to record Statements and no  authority  is specified, the LRS should record 
the  authority as the Agent representing the registered application.

##### Application not registered + known user 

* Use a blank consumer secret;
* Call "Temporary Credential" request;
* Specify "consumer_name" and other usual parameters;
User will then see "consumer_name" plus a warning that the identity of the application requesting authorization 
cannot be verified.
* the LRS MUST record an  authority that includes both that application and the authenticating user, as a group, 
since OAuth specifies an application.

##### No application + known user 

* Use username/password combination that corresponds to an LRS login.
* Authority to be recorded as the Agent identified by the login, **unless…**
	* other Authority is specified **and…**
	* LRS trusts the known user to specify this Authority.

##### No authorization

* Requests should include headers for HTTP Basic Authentication based on a blank username and password, in order to 
distinguish an explicitly unauthenticated request from a  request that should be given a HTTP Basic Authentication 
challenge.

##### Requirements

The LRS:

* MUST be able to be configured for complete support of the xAPI:
	* With any of the above methods.
	* In any of the workflow scenarios above.
* MAY (for security reasons): 
	* Support a subset of the above methods.
	* Limit the known users or registered applications.
* SHOULD at a minimum supply Oauth with "HMAC-SHA1" and "RSA-SHA1" signatures.


<a name="oauthscope"/> 

#### 6.4.2 OAuth Authorization Scope

##### Description
These are recommendations for scopes which should enable an LRS and an application
communicating using the xAPI to negotiate a level of access which accomplishes what the
application needs while minimizing the potential for misuse. The limitations of each scope
are in addition to any security limitations placed on the user account associated with the
request.


##### Requirements
The LRS:

* MUST accept a scope parameter as defined in [OAuth 2.0](https://tools.ietf.org/html/draft-ietf-oauth-v2-22%22%20%5Cl%20%22section-3.3);
* MUST assume a requested scope of "statements/write" and "statements/read/mine" if no
scope is specified;
* MUST support the scope of "all" as a minimum; 
* MAY support other scopes.

An xAPI Client:

* SHOULD request only the minimal needed scopes, to increase the chances that the request
will be granted.

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
			may save the original Statement for audit purposes, but 
			should not update its internal representation of any 
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

<a name="datatransfer"/> 


##### Example
The list of scopes determines the set of permissions that is being requested. For example,
an instructor might grant "statements/read" to a reporting tool, but the LRS would still
limit that tool to Statements that the instructor could read if querying the LRS with their
credentials directly (such as Statements relating to their students).

## 7.0 Data Transfer (REST)
This section describes that the xAPI consists of 4 sub-APIs: Statement, State, 
Agent, and Activity Profile. These four sub-APIs of the Experience API 
are handled via RESTful HTTP methods. The Statement API can be used by itself 
to track learning records.  

__Note:__ In all of the example endpoints given in the specification, "http://example.com/xAPI/"
is the example URL of the LRS and everything after this represents the endpoint which MUST
be used. 

###### LRS Requirements

The LRS MUST reject with ```HTTP 400 Bad Request``` status (see below) any request to any of
these APIs using any parameters:

* the LRS does not recognize (__Note:__ LRSs may recognize and act on parameters not in 
this specification).

* that match parameters described in this specification in all but case.

<a name="errorcodes" /> 

### 7.1 Error Codes

The list below offers some general guidance on HTTP error codes that could
be returned from various methods in the API. An LRS MUST return the error
code most appropriate to the error condition based on the list below, and
SHOULD return a message in the
response explaining the cause of the error.  

* ```400 Bad Request``` - Indicates
an error condition caused by an invalid or missing argument. The term 
"invalid arguments" includes malformed JSON or invalid Object structures.

* ```401 Unauthorized``` - Indicates that authentication is required, or in the 
case authentication has been posted in the request, that the given credentials 
have been refused.

* ```403 Forbidden``` - Indicates that the request is unauthorized for the given 
credentials. Note this is different than refusing the credentials given. In 
this case, the credentials have been validated, but the authenticated Client 
is not allowed to perform the given action.

* ```404 Not Found``` - Indicates the requested resource was not found. May be 
returned by any method that returns a uniquely identified resource, for 
instance, any State or Agent Profile or Activity Profile API call targeting a specific document, 
or the method to retrieve a single Statement.

* ```409 Conflict``` - Indicates an error condition due to a conflict with the 
current state of a resource, in the case of State API, Agent Profile or Activity Profile API
calls, or in the Statement PUT call. See Section [6.3 Concurrency](#concurrency) for more details.

* ```412 Precondition Failed``` - Indicates an error condition due to a failure of 
a precondition posted with the request, in the case of State or Agent Profile or Activity Profile 
API calls. See Section [6.3 Concurrency](#concurrency) for more details.

* ```413 Request Entity Too Large``` - Indicates that the LRS has rejected the Statement or 
document because its size is larger than the maximum allowed by the LRS. The LRS is free to
choose any limit and MAY vary this limit on any basis, e.g., per authority, but
MUST be configurable to accept Statements of any size.

* ```500 Internal Server Error``` - Indicates a general error condition, typically an 
unexpected exception in processing on the server.

<a name="stmtapi"/> 

### 7.2 Statement API
The basic communication mechanism of the Experience API.  

###### PUT Statements
Example endpoint: ```http://example.com/xAPI/statements```

Stores Statement with the given id.

Returns: ```204 No Content```  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th></tr>
	<tr><td>statementId</td><td>String</td><td> </td><td>Id of Statement to record</td></tr>
</table>

###### POST Statements

Example endpoint: ```http://example.com/xAPI/statements```

Stores a Statement, or a set of Statements. Since the PUT method targets a specific 
Statement id, POST must be used rather than PUT to save multiple Statements, or to 
save one Statement without first generating a Statement id. An alternative for systems 
that generate a large amount of Statements is to provide the LRS side of the API 
on the AP, and have the LRS query that API for the list of updated (or new) 
Statements periodically. This will likely only be a realistic option for systems 
that provide a lot of data to the LRS.  

Returns: ```200 OK```, Statement id(s) (UUID).  

###### Common requirements for PUT and POST

An LRS MUST NOT make any modifications to its state based on a receiving a Statement
with a statementID that it already has a Statement for. Whether it responds with
```409 Conflict``` or ```204 No Content```, it MUST NOT modify the Statement or any other
Object.

If the LRS receives a Statement with an id it already has a Statement for, it SHOULD
verify the received Statement matches the existing one and return ```409 Conflict``` if they
do not match.

The LRS MAY respond before Statements that have been stored are available for retrieval.

###### GET Statements

Example endpoint: ```http://example.com/xAPI/statements```

This method may be called to fetch a single Statement or multiple Statements. If the
statementId or voidedStatementId parameter is specified a single Statement is returned.

Otherwise returns: A [StatementResult](#retstmts) Object,
a list of Statements in reverse chronological order based on "stored" time, 
subject to permissions and maximum list length. If additional results are 
available, a URL to retrieve them will be included in the StatementResult 
Object.

Returns: ```200 OK```, Statement or [Statement Result](#retstmts) (See [Section 4.2](#retstmts) for details)

<table>
	<tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th></tr>
	<tr><td>statementId</td><td>String</td><td> </td><td>ID of Statement to fetch</td></tr>
	<tr><td>voidedStatementId</td><td>String</td><td> </td><td>ID of voided Statement to fetch. see <a href="#voidedStatements">Voided Statements</a></td></tr>
	<tr><td>agent</td><td>Agent or Identified Group Object (JSON)</td><td> </td>
		<td>Filter, only return Statements for which the specified Agent or group is the Actor or Object of the Statement.
			<ul><li> Agents or identified groups are equal when the same Inverse Functional Identifier is used in each
			Object compared and those Inverse Functional Identifiers have equal values.
			</li><li>For the purposes of this filter, groups that have members which match the specified Agent
			based on their Inverse Functional Identifier as described above are considered a match</li></ul>
			<br><br>See <a href="#actor">agent/group</a> Object definition
			for details.
		</td>
	</tr>
	<tr><td>verb</td><td>Verb id (IRI)</td><td> </td>
		<td>Filter, only return Statements matching the specified verb id.</td>
	</tr>
	<tr><td>activity</td><td>Activity id (URI)</td><td> </td>
		<td>Filter, only return Statements for which the Object of the Statement is an Activity with the specified id.
		</td>
	</tr>
	<tr><td>registration</td><td>UUID</td><td> </td>
		<td>Filter, only return Statements matching the specified registration 
			id. Note that although frequently a unique registration id will be used 
			for one Actor assigned to one Activity, this should not be assumed. 
			If only Statements for a certain Actor or Activity should be returned, 
			those parameters should also be specified.
		</td>
	</tr>
	<tr><td>related_activities</td><td>Boolean</td><td>False</td>
		<td>Apply the Activity filter broadly. Include Statements for which the Object,
		any of the  context Activities, or any of those properties in a contained SubStatement
		match the Activity parameter, instead of that parameter's normal behavior. Matching
		is defined in the same way it is for the 'Activity' parameter."
		</td>
	</tr>
	<tr><td>related_agents</td><td>Boolean</td><td>False</td>
		<td>Apply the Agent filter broadly. Include Statements for which 
			the Actor, Object, authority, instructor, team,
			or any of these properties in a contained SubStatement match the Agent parameter,
			instead of that parameter's normal behavior. Matching is defined in the same way
			it is for the 'agent' parameter.
		</td>
	</tr>
	<tr><td>since</td><td>Timestamp</td><td> </td>
		<td>Only Statements stored since the specified timestamp (exclusive) are returned.</td>
	</tr>
	<tr><td>until</td><td>Timestamp</td><td> </td>
		<td>Only Statements stored at or before the specified timestamp are returned.</td>
	</tr>
	<tr><td>limit</td><td>Nonnegative Integer</td><td>0</td>
		<td>Maximum number of Statements to return. 0 indicates return the 
			maximum the server will allow.</td>
	</tr>
	<tr><td>format</td><td>String: ("ids", "exact", or "canonical")</td><td>exact</td>
		<td>If "ids", only include minimum information necessary in Agent,
			Activity, and group Objects to identify them. For anonymous groups this means
			including the minimum information needed to identify each member.

			If "exact", return Agent,
			Activity, and group Objects populated exactly as they were when the Statement
			was received.<br/><br/>
			
			If "canonical", return Activity Objects populated with the canonical
			definition of the Activity Objects as determined by the LRS, after
			applying the language filtering process defined below, and return the original
			Agent Objects as in "exact" mode.

			Activity Objects contain Language Map Objects for name and 
			description. Only one language should be returned in each of 
			these maps.<br/><br/>

			In order to provide these strings in the most relevant language, 
			the LRS will apply the Accept-Language header as described in 
			<a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html">
			RFC 2616</a> (HTTP 1.1), except that this logic will 
			be applied to each language map individually to select which 
			language entry to include, rather than to the resource (list of 
			Statements) as a whole.

			An LRS requesting Statements for the purpose of importing them SHOULD use a format of "exact".
		</td>
	</tr>
	<tr><td>attachments</td><td>Boolean</td><td>False</td>
		<td>If true LRS MUST use the multipart response format and include all
            attachments as described in <a href="#attachments">4.1.11.
            Attachments</a>, otherwise the LRS MUST NOT include attachment raw data and MUST send the prescribed response with Content-Type
            application/json.</td>
	</tr>
	<tr><td>ascending</td><td>Boolean</td><td>False</td>
		<td>If true, return results in ascending order of stored time</td>
	</tr>
</table>

The LRS MUST reject with an ```HTTP 400``` error any requests to this resource which:

* contain both statementId and voidedStatementId parameters

* contain statementId or voidedStatementId parameters, and also contain any other parameter 
besides "attachments" or "format".

The LRS MUST include the header "X-Experience-API-Consistent-Through", in 
<a href="https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations">ISO 8601
combined date and time</a> format, on all responses to Statements requests, with a value of the 
timestamp for which all Statements that have or will have a "stored" property before that time 
are known with reasonable certainty to be available for retrieval. This time SHOULD take into 
account any temporary condition, such as excessive load, which might cause a delay in Statements 
becoming available for retrieval.

###### Note

Due to query string limits, this method MAY be called using POST and
form fields if necessary. The LRS MUST differentiate a POST to add a Statement
or to list Statements based on the parameters passed.  

<a name="queryStatementRef" />

###### Filter Conditions for StatementRefs 

For filter parameters which are not time or sequence based (that is, other than
since, until, or limit), Statements which target another Statement (by using a StatementRef
as the Object of the Statement) will meet the filter condition if the targeted Statement meets 
the condition. The time and sequence based parameters must still be applied to the Statement 
making the StatementRef in this manner. This rule applies recursively, so that "Statement a" is a 
match when a targets b which targets c and the filter conditions described above match for 
"Statement c".

For example, consider the Statement "Ben passed explosives training", and a follow up
Statement: "Andrew confirmed \<StatementRef to original Statement\>". The follow up
Statement will not mention "Ben" or "explosives training", but when fetching Statements
with an Actor filter of "Ben" or an Activity filter of "explosives training", both
Statements match and will be returned so long as they fall into the time or sequence
being fetched.

This section does not apply when retrieving Statements with statementId or voidedStatementId.

###### Note 

StatementRefs used in the statement field in context do not affect how
Statements are filtered.

<a name="voidedStatements" />

###### Voided Statements

The LRS MUST not return any Statement which has been voided, unless that Statement has been
requested by voidedStatementId. The LRS MUST still return any Statements targetting the voided 
Statement when retrieving Statements using explicit or implicit time or sequence based retrieval,
unless they themselves have been voided, as described in
[the section on filter conditions for StatementRefs](#queryStatementRef). This includes the
voiding Statement, which cannot be voided. Reporting tools can identify the presence and
statementId of any voided Statements by the target of the voiding Statement. Reporting 
tools wishing to retrieve voided Statements SHOULD request these individually by 
voidedStatementId.

<a name="docapis" />

### 7.3 Document APIs

The three Document APIs provide [document](#miscdocument) storage for learning activity 
providers and Agents. The details of each API are found in the following sections, and the 
information in this section applies to all three APIs.

###### New Agents and Activities

An Activity Provider MAY send documents to any of the document APIs for Activities and Agents that
the LRS does not have prior knowledge of. The LRS MUST NOT reject documents on the basis of not 
having prior knowledge of the Activity and/or Agent. 

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
		<td>http://example.com/xAPI/activities/state</td>
	</tr>
	<tr>
		<td>Activity Profile API</td>
		<td>POST</td>
		<td>activities/profile</td>
		<td>http://example.com/xAPI/activities/profile</td>
	</tr>
	<tr>
		<td>Agent Profile API</td>
		<td>POST</td>
		<td>agent/profile</td>
		<td>http://example.com/xAPI/agents/profile</td>
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
* de-serialize the Objects represented by each document
* for each property directly defined on the Object being posted, set the corresponding
property on the existing Object equal to the value from the posted Object.    
* store any valid json serialization of the existing Object as the document referenced in the request

Note that only top-level properties are merged, even if a top-level property is an Object
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
of "application/json", or if either document can not be parsed as JSON Objects, the LRS MUST
respond with HTTP status code 400 "Bad Request", and MUST NOT update the target document
as a result of the request. 

If the original document does not exist, the LRS MUST treat the request the same as it 
would a PUT request and store the document being posted.

If the merge is successful, the LRS MUST respond with HTTP 
status code 204 "No Content".

If an AP needs to delete
a property, it SHOULD use a PUT request to replace the whole document as described below. 

<a name="stateapi"/> 

### 7.4 State API
Generally, this is a scratch area for Activity Providers that do not have their 
own internal storage, or need to persist state across devices. When using the 
State API, be aware of how the stateId parameter affects the semantics of the 
call. If it is included, the GET and DELETE methods will act upon a single 
defined state document identified by "stateId". Otherwise, GET will return the 
available ids, and DELETE will delete all state in the context given through the 
other parameters.  

###### PUT | POST | GET | DELETE activities/state
Example endpoint: http://example.com/xAPI/activities/state

Stores, fetches, or deletes the document specified by the given stateId that 
exists in the context of the specified Activity, Agent, and registration (if specified).  

Returns: (PUT | POST | DELETE) 204 No Content, (GET) 200 OK - State Content  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The Activity id associated with this state.</td>
	</tr>
	<tr><td>agent</td><td>JSON</td><td>yes</td>
		<td>The Agent associated with this state.</td>
	</tr>
	<tr><td>registration</td><td>UUID</td><td>no</td>
		<td>The registration id associated with this state.</td>
	</tr>
	<tr><td>stateId</td><td>String</td><td>yes</td>
		<td>The id for this state, within the given context.</td>
	</tr>
</table>

###### GET activities/state
Example endpoint: http://example.com/xAPI/activities/state

Fetches ids of all state data for this context (Activity + Agent \[ + 
registration if specified\]). If "since" parameter is specified, this 
is limited to entries that have been stored or updated since the specified 
timestamp (exclusive).  

Returns: 200 OK, Array of ids  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The Activity id associated with these states.</td>
	</tr>
	<tr><td>agent</td><td>JSON<</td><td>yes</td>
		<td>The Actor associated with these states.</td>
	</tr>
	<tr><td>registration</td><td>UUID</td><td>no</td>
		<td>The registration id associated with these states.</td>
	</tr>
	<tr><td>since</td><td>Timestamp</td><td>no</td>
		<td>Only ids of states stored since the specified timestamp (exclusive) are returned.</td>
	</tr>
</table>

###### DELETE activities/state
Example endpoint: http://example.com/xAPI/activities/state

Deletes all state data for this context (Activity + Agent \[+ registration if 
specified\]).  

Returns: 204 No Content  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The Activity id associated with this state.</td>
	</tr>
	<tr><td>agent</td><td>JSON<</td><td>yes</td>
		<td>The Actor associated with this state.</td>
	</tr>
	<tr><td>registration</td><td>UUID</td><td>no</td>
		<td>The registration id associated with this state.</td>
	</tr>
</table>



<a name="actprofapi"/> 

### 7.5 Activity Profile API
The Activity Profile API is much like the State API, allowing for arbitrary key 
/ document pairs to be saved which are related to an Activity. When using the 
Activity Profile API for manipulating documents, be aware of how the profileId parameter
 affects the semantics of the call. If it is included, the GET and DELETE methods 
will act upon a single defined document identified by "profileId". Otherwise, 
GET will return the available ids, and DELETE will delete all state in the 
context given through the other parameters.  

The Activity Profile API also includes a method to retrieve a full description 
of an Activity from the LRS.  

###### GET activities
Example endpoint: http://example.com/xAPI/activities

Loads the complete Activity Object specified.  

Returns: 200 OK - Content  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The id associated with the Activities to load.</td>
	</td>
</table>

###### PUT | POST | GET | DELETE activities/profile
Example endpoint: http://example.com/xAPI/activities/profile

Saves/retrieves/deletes the specified profile document in the context of the 
specified Activity.  

Returns: (PUT | POST | DELETE) 204 No Content, (GET) 200 OK - Profile Content  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The Activity id associated with this profile.</td>
	</tr>
	<tr><td>profileId</td><td>String</td><td>yes</td>
		<td>The profile id associated with this profile.</td>
	</tr>
</table>

###### GET activities/profile
Example endpoint: http://example.com/xAPI/activities/profile

Loads ids of all profile entries for an Activity. If "since" parameter is 
specified, this is limited to entries that have been stored or updated since 
the specified timestamp (exclusive).  

Returns: 200 OK - List of ids  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th><tr>
	<tr><td>activityId</td><td>String</td><td>yes</td>
		<td>The Activity id associated with these profiles.</td>
	</tr>
	<tr><td>since</td><td>Timestamp</td><td>no</td>
		<td>Only ids of profiles stored since the specified timestamp (exclusive) are returned.</td>
	</tr>
</table>

<a name="agentprofapi"/> 

### 7.6 Agent Profile API
The Agent Profile API is much like the State API, allowing for arbitrary key / 
document pairs to be saved which are related to an Agent. When using the 
Agent Profile API for manipulating documents, be aware of how the profileId parameter 
affects the semantics of the call. If it is included, the GET and DELETE 
methods will act upon a single defined document identified by "profileId". 
Otherwise, GET will return the available ids, and DELETE will delete all state 
in the context given through the other parameters.  

The Agent Profile API also includes a method to retrieve a special Object with 
combined information about an Agent derived from an outside service, such as a 
directory service.  

###### GET agents
Example endpoint: http://example.com/xAPI/agents

Return a special, Person Object for a specified Agent. The Person Object is 
very similar to an Agent Object, but instead of each attribute having a single 
value, each attribute has an array value, and it is legal to include multiple 
identifying properties. Note that the argument is still a normal Agent Object 
with a single identifier and no arrays. Note that this is different from the 
FOAF concept of person, person is being used here to indicate a person-centric 
view of the LRS Agent data, but Agents just refer to one persona (a person in 
one context).  

An LRS capable of returning multiple identifying properties for a Person Object SHOULD 
require the connecting credentials have increased, explicitly given permissions. 
An LRS SHOULD reject insufficiently privileged requests with 403 "Forbidden". 
If an LRS does not have any additional information about an Agent to return, the 
LRS MUST still return a Person when queried, but that Person Object will only 
include the information associated with the requested Agent.  

###### Person properties

All array properties must be populated with members with the 
same definition as the similarly named property from Agent Objects.  

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td>objectType</td><td>String</td><td>"Person". Required.</td></tr>
	<tr><td>name</td><td>Array of strings.</td><td> Optional. List of names of Agents to retrieve.</td></tr>
	<tr>
		<td><a href="http://xmlns.com/foaf/spec/%22%20%5Cl%20%22term_mbox">mbox</a></td>
		<td>Array of URIs in the form "mailto:email address".</td>
		<td>List of e-mail addresses of Agents to retrieve.</td>
	</tr>
	<tr>
		<td><a href="http://xmlns.com/foaf/spec/%22%20%5Cl%20%22term_mbox_sha1sum">mbox_sha1sum</a></td>
		<td>Array of strings.</td>
		<td>List of the SHA1 hashes of mailto URIs (such as go in an mbox property).</td>
	</tr>
	<tr>
		<td>openid*</td>
		<td>Array of strings.</td>
		<td>List of openids that uniquely identify the Agents to retrieve.</td>
	</tr>
	<tr>
		<td>account*</td>
		<td>Array of account objects.</td>
		<td>List of accounts to match. Complete account Objects (homePage and name) must be provided.</td>
	</tr>
</table> 

See also: [Section 4.1.2.1 Agent](#agent).

Returns: ```200 OK - Expanded Agent Object```

<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>agent</td><td>Object (JSON)</td><td>yes</td>
		<td>The Agent representation to use in fetching expanded Agent information.</td>
	</tr>
</table>  

###### PUT | POST | GET | DELETE agents/profile

Example endpoint: http://example.com/xAPI/agents/profile

Saves/retrieves/deletes the specified profile document in the context of the 
specified Agent.  

Returns: (PUT | POST | DELETE) 204 No Content, (GET) 200 OK - Profile Content  

<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>agent</td><td>Object (JSON)</td><td>yes</td>
		<td>The agent associated with this profile.</td>
	</tr>
	<tr><td>profileId</td><td>String</td><td>yes</td>
		<td>The profile id associated with this profile.</td>
	</tr>
</table>  

###### GET agents/profile
Example endpoint: http://example.com/xAPI/agents/profile

Loads ids of all profile entries for an Agent. If "since" parameter is specified, 
this is limited to entries that have been stored or updated since the specified 
timestamp (exclusive).  

Returns: 200 OK - List of ids  
<table>
	<tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
	<tr><td>agent</td><td>Object (JSON)</td><td>yes</td>
		<td>The Agent associated with this profile.</td>
	</tr>
	<tr><td>since</td><td>Timestamp</td><td>no</td>
		<td>Only ids of profiles stored since the specified timestamp 
			(exclusive) are returned</td>
	</tr>
</table>  

<a name="aboutresource"/> 

### 7.7. About resource

###### GET about
Example endpoint: http://example.com/xAPI/about

###### Description
Returns JSON Object containing information about this LRS, including the xAPI version
supported.

###### Rationale
Primarily this resource exists to allow Clients that suport multiple xAPI versions to
decide which version to use when communicating with the LRS. Extensions are included to
allow other uses to emerge.

###### Details
Returns: 200 OK - Single 'about' JSON document.
<table border="1">
<tr><th>property</th><th>type</th><th>description</th></tr>
<td>version</td><td>array of version strings</td><td>xAPI versions this LRS supports</td>
</tr>
<tr>
<td>Extensions</td><td><a href="#miscext">Object</a></td><td>A map of other properties as needed.</td>
</tr>
</table>

###### LRS Requirements
* MUST return the JSON document described above, with a version property that includes
the latest minor and patch version the LRS conforms to, for each major version.
    * For version 1.0.0 of this specification, this means that "1.0.0" MUST be included;
    "0.9" and "0.95" MAY be included. (For the purposes of this requirement, "0.9" and "0.95"
    are considered major versions.)
* SHOULD allow unauthenticated access to this resource
* MUST NOT reject requests based on their version header as would otherwise be required
by <a href="#apiversioning"/>6.2 API Versioning</a>.


<a name="cors"/>

### 7.8 Cross Origin Requests
One of the goals of the xAPI is to allow cross-domain tracking, and even though 
xAPI seeks to enable tracking from applications other than browsers, browsers 
still need to be supported. Internet Explorer 8 and 9 do not implement Cross 
Origin Resource Sharing, but rather use their own Cross Domain Request API, 
which cannot use all of the xAPI as described above due to only supporting "GET" 
and "POST", and not allowing HTTP headers to be set.  

The following describes alternate syntax for consumers to use only when unable 
to use the usual syntax for specific calls due to the restrictions mentioned 
above. All LRSs must support this syntax.  

__Method__: All xAPI requests issued must be POST. The intended xAPI method 
must be included as the only query string parameter on the request. 
(example: http://example.com/xAPI/statements?method=PUT)  

__Headers__: Any required parameters which are expected to appear in the HTTP 
header must instead be included as a form parameter with the same name.  

__Content__: If the xAPI call involved sending content, that content must now 
be encoded and included as a form parameter called "content". The LRS will 
interpret this content as a UTF-8 string. Storing binary data is not supported 
with this syntax.  

__Attachments__: Sending attachment data requires sending a
multipart/mixed request, therefore sending attachment data is not supported
with this syntax. See [4.1.11. Attachments](#attachments) 

See [Appendix B](#AppendixB) for an example function written in JavaScript 
which transforms a normal request into one using this alternate syntax.  

It should also be noted that versions of Internet Explorer lower than 10 do not 
support Cross Domain Requests between HTTP and HTTPS. This means that for IE9 and lower, 
if the LRS is on an HTTPS domain, the Client sending the Statement must also be on HTTPS. 
If the LRS is on HTTP, the Client must be too.  

There may be cases where there is a requirement for the Client Activity Provider to support 
IE8 and IE9 where the Client code is hosted on a different scheme (HTTP or HTTPS) from 
the LRS. In these cases, proxy is needed to communicate to the LRS. Two simple solutions 
might be to 1) set up a proxy pass through on the same scheme as the Client code to the LRS 
or 2) to host an intermediary server side LRS on the same scheme as the Client code to route 
Statements to the target LRS.  An LRS MAY choose to provide both HTTP and HTTPS endpoints 
to support this use case. HTTP is inherently less secure than HTTPS, and both LRS and 
Client should consider the security risks before making the decision to use this scheme. 

<a name="validation"/> 

### 7.9 Validation
The function of the LRS within the xAPI is to store and retrieve Statements. 
As long as it has sufficient information to perform these tasks, it is 
expected that it does them. Validation of Statements in the Experience API is 
focused solely on syntax, not semantics. It SHOULD enforce rules regarding structure, 
but SHOULD NOT enforce rules regarding meaning. Enforcing the rules that ensure 
valid meaning among Verb definitions, Activity types, and extensions is the 
responsibility of the Activity Provider sending the Statement.  

<a name="httphead"/>

### 7.10. HTTP HEAD

###### Description
The LRS will respond to HEAD requests by returning the meta information only, using 
the HTTP headers, and not the actual document.  

###### Rationale

Clients accessing the LRS may need to check if a particular Statement exists, or determine
the modification date of documents such as state or Activity or Agent profile. Particularly
for large documents it's more efficient not to get the entire document just to check its
modification date.

###### LRS Requirements
* The LRS MUST respond to any HTTP HEAD request as it would have responded to an otherwise
identical HTTP GET request except:
    * The message-body MUST be omitted.
    * The Content-Length header MAY be omitted, in order to avoid wasting LRS resources.

<a name="AppendixA"/> 

## Appendix A: Bookmarklet

An xAPI Bookmarklet enables individual user tracking with base authentication. Examples 
could be an "I think this," "I learned this," "I like this," or "I don't like this" Statement 
that allows self-reporting. The following is an example of such a bookmarklet, and the Statement 
that this bookmarklet would send if used on the page: http://adlnet.gov/xapi.

The bookmarklet MAY be provided by the LRS to track a specific user
for behavior analytics.

Therefore the LRS URL, authentication, and Actor information is hard coded into 
the bookmarklet. Note that since the authorization token must be included in 
the bookmarklet, the LRS should provide a token with limited privileges, 
Ideally the token should enable the storage of self-reported learning 
Statements only. 

The UUID SHOULD be included as part of the bookmarklet PUT Statement. If a Statement 
is POSTed without a UUID, the LRS MUST generate one.

In order to allow cross-domain reporting of Statements, a browser that supports 
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
		<td>http://localhost:8080/xAPI/</td>
		<td>Endpoint of the LRS to send the Statements to.</td>
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
var url = "http://localhost:8080/xAPI/statements?statementId="+_ruuid();
var auth = "Basic dGVzdDpwYXNzd29yZA==";
var statement = {
	"actor" : { 
		"objectType" : "Agent", 
		"mbox" : "mailto:learner@example.adlnet.gov"
	},
	"verb" : {
		"id" : "",
		"display" : {}
	},
	"object" : {
		"id" : "",
		"definition" : {}
	}
};
var definition = statement.object.definition;

statement.verb.id = 'http://adlnet.gov/expapi/verbs/experienced';
statement.verb.display = { "en-US" : "experienced" };
statement.object.id = window.location.toString();
definition.type = "http://adlnet.gov/expapi/activities/link";

var xhr = new XMLHttpRequest();
xhr.open("PUT", url, true);
xhr.setRequestHeader("X-Experience-API-Version", "1.0");
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

###### Headers  
```
{
	"content-type": "application/json; charset=UTF-8",
	"authorization": "d515309a-044d-4af3-9559-c041e78eb446",
	"referer": "http://adlnet.gov/xapi/",
	"content-length": "###",
	"origin": "http://adlnet.gov"
}
```

###### Method Path  
```
PUT : /xAPI/Statements/?statementId=ed1d064a-eba6-45ea-a3f6-34cdf6e1dfd9

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

## Appendix B: Creating an "IE Mode" Request
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

## Appendix C: Example definitions for Activities of type "cmi.interaction"

###### true-false  

```
"definition": {
	"description": {
		"en-US": "Does the xAPI include the concept of statements?"
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
		"Bob's your uncle"
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
				"en-US": "It's OK"
			}
		},
		{
			"id": "likert_1", 
			"description": {
				"en-US": "It's Pretty Cool"
			}
		},
		{
			"id": "likert_2", 
			"description": {
				"en-US": "It's Damn Cool"
			}
		},
		{
			"id": "likert_3", 
			"description": {
				"en-US": "It's Gonna Change the World"
			}
		}
	]
}
```

###### matching  
```
"definition": {
	"description": {
		"en-US": "Match these people to their kickball team:"
	},
	"type": "http://adlnet.gov/expapi/activities/cmi.interaction",
	"interactionType": "matching",
	"correctResponsesPattern": [
		"ben[.]3[,]chris[.]2[,]troy[.]4[,]freddie[.]1"
	],
	"source": [
		{
			"id": "ben",
			"description": {
				"en-US": "Ben"
			}
		},
		{
			"id": "chris",
			"description": {
				"en-US": "Chris"
			}
		},
		{
			"id": "troy",
			"description": {
				"en-US": "Troy"
			}
		},
		{
			"id": "freddie",
			"description": {
				"en-US": "Freddie"
			}
		}
	],
	"target": [
		{
			"id": "1",
			"description": {
				"en-US": "Swift Kick in the Grass"
			}
		},
		{
			"id": "2",
			"description": {
				"en-US": "We got Runs"
			}
		},
		{
			"id": "3",
			"description": {
				"en-US": "Duck"
			}
		},
		{
			"id": "4",
			"description": {
				"en-US": "Van Delay Industries"
			}
		}
	]
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
		"en-US": "How many jokes is Chris the butt of each day?"
	},
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

Example of a simple statement (line breaks are for display purposes only):  
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
				does not need to have any prior information about the Actor (learner), the 
				verb, or the Activity/object." 
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

## Appendix E: Converting Statements to 1.0.0

######Rationale
This is a 1.0.0 specification, and as such implementers should not have to consider prior
versions of the specification. However, prior versions did see notable adoption. This data
conversion is specified in order
to preserve the data tracked using earlier versions, and make it available to new implementers
in a consistant manner.

######Details

######Conversion of Statements created based on version 0.9

A 1.0.0 system converting a Statement created in 0.9 MUST follow the steps below:

* If the Statement has been voided or uses Verbs, Activity types, or properties not included in the
 0.9 specification, do not convert it.
* Prefix "verb" with "http://adlnet.gov/expapi/verbs/".
* Prefix any Activity ids which are not full absolute URIs with "tag:adlnet.gov,2013:expapi:0.9:activities:"
* Prefix any extension keys which are not full absolute URIs with "tag:adlnet.gov,2013:expapi:0.9:extensions:"
* Prefix Activity types with "http://adlnet.gov/expapi/activities/"
* for each Agent (Actor):
    * Search for Inverse Functional Identifiers in this order: "mbox, mbox_sha1sum, openId,
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
* if the Statement field in context was set, remove it from the Statement.
* Preserve all other fields without modification, including "stored". Stored should still
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
* if the Statement field in context was set to anything other than a
StatementRef, remove it from the Statement.
* Preserve all other fields without modification, including "stored". Stored should still
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

<a name="AppendixF"/>
## Appendix F: Example Signed Statement
An example signed Statement, as described in: <a href="#signature">4.4 Signed Statements</a>.

The original Statement serialization to be signed. New lines in this example are included
via CR+LF (0x0D + 0x0A).

```
{
    "version": "1.0.0",
    "id": "33cff416-e331-4c9d-969e-5373a1756120",
    "actor": {
        "mbox": "mailto:example@example.com",
        "name": "Example Learner",
        "objectType": "Agent"
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/experienced",
        "display": {
            "en-US": "experienced"
        }
    },
    "object": {
        "id": "https://www.youtube.com/watch?v=xh4kIiH3Sm8",
        "objectType": "Activity",
        "definition": {
            "name": {
                "en-US": "Tax Tips & Information : How to File a Tax Return "
            },
            "description": {
                "en-US": "Filing a tax return will require filling out either a 1040, 1040A or 1040EZ form"
            }
        }
    },
    "timestamp": "2013-04-01T12:00:00Z"
}
```

Example private key for X.509 certificate that will be used for signing:
```
-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQDjxvZXF30WL4oKjZYXgR0ZyaX+u3y6+JqTqiNkFa/VTnet6Ly2
OT6ZmmcJEPnq3UnewpHoOQ+GfhhTkW13j06j5iNn4obcCVWTL9yXNvJH+Ko+xu4Y
l/ySPRrIPyTjtHdG0M2XzIlmmLqm+CAS+KCbJeH4tf543kIWC5pC5p3cVQIDAQAB
AoGAOejdvGq2XKuddu1kWXl0Aphn4YmdPpPyCNTaxplU6PBYMRjY0aNgLQE6bO2p
/HJiU4Y4PkgzkEgCu0xf/mOq5DnSkX32ICoQS6jChABAe20ErPfm5t8h9YKsTfn9
40lAouuwD9ePRteizd4YvHtiMMwmh5PtUoCbqLefawNApAECQQD1mdBW3zL0okUx
2pc4tttn2qArCG4CsEZMLlGRDd3FwPWJz3ZPNEEgZWXGSpA9F1QTZ6JYXIfejjRo
UuvRMWeBAkEA7WvzDBNcv4N+xeUKvH8ILti/BM58LraTtqJlzjQSovek0srxtmDg
5of+xrxN6IM4p7yvQa+7YOUOukrVXjG+1QJBAI2mBrjzxgm9xTa5odn97JD7UMFA
/WHjlMe/Nx/35V52qaav1sZbluw+TvKMcqApYj5G2SUpSNudHLDGkmd2nQECQFfc
lBRK8g7ZncekbGW3aRLVGVOxClnLLTzwOlamBKOUm8V6XxsMHQ6TE2D+fKJoNUY1
2HGpk+FWwy2D1hRGuoUCQAXfaLSxtaWdPtlZTPVueF7ZikQDsVg+vtTFgpuHloR2
6EVc1RbHHZm32yvGDY8IkcoMfJQqLONDdLfS/05yoNU=
-----END RSA PRIVATE KEY-----
```

Example public X.509 certificate
```
-----BEGIN CERTIFICATE-----
MIIDATCCAmqgAwIBAgIJAMB1csNuA6+kMA0GCSqGSIb3DQEBBQUAMHExCzAJBgNV
BAYTAlVTMRIwEAYDVQQIEwlUZW5uZXNzZWUxGDAWBgNVBAoTD0V4YW1wbGUgQ29t
cGFueTEQMA4GA1UEAxMHRXhhbXBsZTEiMCAGCSqGSIb3DQEJARYTZXhhbXBsZUBl
eGFtcGxlLmNvbTAeFw0xMzA0MDQxNTI4MzBaFw0xNDA0MDQxNTI4MzBaMIGWMQsw
CQYDVQQGEwJVUzESMBAGA1UECBMJVGVubmVzc2VlMREwDwYDVQQHEwhGcmFua2xp
bjEYMBYGA1UEChMPRXhhbXBsZSBDb21wYW55MRAwDgYDVQQLEwdFeGFtcGxlMRAw
DgYDVQQDEwdFeGFtcGxlMSIwIAYJKoZIhvcNAQkBFhNleGFtcGxlQGV4YW1wbGUu
Y29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjxvZXF30WL4oKjZYXgR0Z
yaX+u3y6+JqTqiNkFa/VTnet6Ly2OT6ZmmcJEPnq3UnewpHoOQ+GfhhTkW13j06j
5iNn4obcCVWTL9yXNvJH+Ko+xu4Yl/ySPRrIPyTjtHdG0M2XzIlmmLqm+CAS+KCb
JeH4tf543kIWC5pC5p3cVQIDAQABo3sweTAJBgNVHRMEAjAAMCwGCWCGSAGG+EIB
DQQfFh1PcGVuU1NMIEdlbmVyYXRlZCBDZXJ0aWZpY2F0ZTAdBgNVHQ4EFgQUVs3v
5afEdOeoYeVajAQE4v0WS1QwHwYDVR0jBBgwFoAUyVIc3yvra4EBz20I4BF39IAi
xBkwDQYJKoZIhvcNAQEFBQADgYEAgS/FF5D0Hnj44rvT6kgn3kJAvv2lj/fyjztK
IrYS33ljXGn6gGyA4qtbXA23PrO4uc/wYCSDICDpPobh62xTCd9qObKhgwWOi05P
SBLqUu3mwfAe15LJBJBqPVZ4K0kppePBU8m6aIZoH57L/9t4OoaL8yKs/qjKFeI1
OFWZxvA=
-----END CERTIFICATE-----
```

Example certificate authority certificate
```
-----BEGIN CERTIFICATE-----
MIIDNzCCAqCgAwIBAgIJAMB1csNuA6+jMA0GCSqGSIb3DQEBBQUAMHExCzAJBgNV
BAYTAlVTMRIwEAYDVQQIEwlUZW5uZXNzZWUxGDAWBgNVBAoTD0V4YW1wbGUgQ29t
cGFueTEQMA4GA1UEAxMHRXhhbXBsZTEiMCAGCSqGSIb3DQEJARYTZXhhbXBsZUBl
eGFtcGxlLmNvbTAeFw0xMzA0MDQxNTI1NTNaFw0yMzA0MDIxNTI1NTNaMHExCzAJ
BgNVBAYTAlVTMRIwEAYDVQQIEwlUZW5uZXNzZWUxGDAWBgNVBAoTD0V4YW1wbGUg
Q29tcGFueTEQMA4GA1UEAxMHRXhhbXBsZTEiMCAGCSqGSIb3DQEJARYTZXhhbXBs
ZUBleGFtcGxlLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA1sBnBWPZ
0f7WJUFTJy5+01SlS5Z6DDD6Uye9vK9AycgV5B3+WC8HC5u5h91MujAC1ARPVUOt
svPRs45qKNFIgIGRXKPAwZjawEI2sCJRSKV47i6B8bDv4WkuGvQaveZGI0qlmN5R
1Eim2gUItRj1hgcC9rQavjlnFKDY2rlXGukCAwEAAaOB1jCB0zAdBgNVHQ4EFgQU
yVIc3yvra4EBz20I4BF39IAixBkwgaMGA1UdIwSBmzCBmIAUyVIc3yvra4EBz20I
4BF39IAixBmhdaRzMHExCzAJBgNVBAYTAlVTMRIwEAYDVQQIEwlUZW5uZXNzZWUx
GDAWBgNVBAoTD0V4YW1wbGUgQ29tcGFueTEQMA4GA1UEAxMHRXhhbXBsZTEiMCAG
CSqGSIb3DQEJARYTZXhhbXBsZUBleGFtcGxlLmNvbYIJAMB1csNuA6+jMAwGA1Ud
EwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEADhwTebGk735yKhm8DqCxvNnEZ0Nx
sYEYOjgRG1yXTlW5pE691fSH5AZ+T6fpwpZcWY5QYkoN6DnwjOxGkSfQC3/yGmcU
DKBPwiZ5O2s9C+fE1kUEnrX2Xea4agVngMzR8DQ6oOauLWqehDB+g2ENWRLoVgS+
ma5/Ycs0GTyrECY=
-----END CERTIFICATE-----
```

JWS Header. Note that along with specifying the algorithm, the certificate chain for
the signing certificate has been included.
```
{
    "alg": "RS256",
    "x5c": [
        "MIIDATCCAmqgAwIBAgIJAMB1csNuA6+kMA0GCSqGSIb3DQEBBQUAMHExCzAJBgNVBAYTAlVTMRIwEAYDVQQIEwlUZW5uZXNzZWUxGDAWBgNVBAoTD0V4YW1wbGUgQ29tcGFueTEQMA4GA1UEAxMHRXhhbXBsZTEiMCAGCSqGSIb3DQEJARYTZXhhbXBsZUBleGFtcGxlLmNvbTAeFw0xMzA0MDQxNTI4MzBaFw0xNDA0MDQxNTI4MzBaMIGWMQswCQYDVQQGEwJVUzESMBAGA1UECBMJVGVubmVzc2VlMREwDwYDVQQHEwhGcmFua2xpbjEYMBYGA1UEChMPRXhhbXBsZSBDb21wYW55MRAwDgYDVQQLEwdFeGFtcGxlMRAwDgYDVQQDEwdFeGFtcGxlMSIwIAYJKoZIhvcNAQkBFhNleGFtcGxlQGV4YW1wbGUuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjxvZXF30WL4oKjZYXgR0ZyaX+u3y6+JqTqiNkFa/VTnet6Ly2OT6ZmmcJEPnq3UnewpHoOQ+GfhhTkW13j06j5iNn4obcCVWTL9yXNvJH+Ko+xu4Yl/ySPRrIPyTjtHdG0M2XzIlmmLqm+CAS+KCbJeH4tf543kIWC5pC5p3cVQIDAQABo3sweTAJBgNVHRMEAjAAMCwGCWCGSAGG+EIBDQQfFh1PcGVuU1NMIEdlbmVyYXRlZCBDZXJ0aWZpY2F0ZTAdBgNVHQ4EFgQUVs3v5afEdOeoYeVajAQE4v0WS1QwHwYDVR0jBBgwFoAUyVIc3yvra4EBz20I4BF39IAixBkwDQYJKoZIhvcNAQEFBQADgYEAgS/FF5D0Hnj44rvT6kgn3kJAvv2lj/fyjztKIrYS33ljXGn6gGyA4qtbXA23PrO4uc/wYCSDICDpPobh62xTCd9qObKhgwWOi05PSBLqUu3mwfAe15LJBJBqPVZ4K0kppePBU8m6aIZoH57L/9t4OoaL8yKs/qjKFeI1OFWZxvA=",
        "MIIDNzCCAqCgAwIBAgIJAMB1csNuA6+jMA0GCSqGSIb3DQEBBQUAMHExCzAJBgNVBAYTAlVTMRIwEAYDVQQIEwlUZW5uZXNzZWUxGDAWBgNVBAoTD0V4YW1wbGUgQ29tcGFueTEQMA4GA1UEAxMHRXhhbXBsZTEiMCAGCSqGSIb3DQEJARYTZXhhbXBsZUBleGFtcGxlLmNvbTAeFw0xMzA0MDQxNTI1NTNaFw0yMzA0MDIxNTI1NTNaMHExCzAJBgNVBAYTAlVTMRIwEAYDVQQIEwlUZW5uZXNzZWUxGDAWBgNVBAoTD0V4YW1wbGUgQ29tcGFueTEQMA4GA1UEAxMHRXhhbXBsZTEiMCAGCSqGSIb3DQEJARYTZXhhbXBsZUBleGFtcGxlLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA1sBnBWPZ0f7WJUFTJy5+01SlS5Z6DDD6Uye9vK9AycgV5B3+WC8HC5u5h91MujAC1ARPVUOtsvPRs45qKNFIgIGRXKPAwZjawEI2sCJRSKV47i6B8bDv4WkuGvQaveZGI0qlmN5R1Eim2gUItRj1hgcC9rQavjlnFKDY2rlXGukCAwEAAaOB1jCB0zAdBgNVHQ4EFgQUyVIc3yvra4EBz20I4BF39IAixBkwgaMGA1UdIwSBmzCBmIAUyVIc3yvra4EBz20I4BF39IAixBmhdaRzMHExCzAJBgNVBAYTAlVTMRIwEAYDVQQIEwlUZW5uZXNzZWUxGDAWBgNVBAoTD0V4YW1wbGUgQ29tcGFueTEQMA4GA1UEAxMHRXhhbXBsZTEiMCAGCSqGSIb3DQEJARYTZXhhbXBsZUBleGFtcGxlLmNvbYIJAMB1csNuA6+jMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEADhwTebGk735yKhm8DqCxvNnEZ0NxsYEYOjgRG1yXTlW5pE691fSH5AZ+T6fpwpZcWY5QYkoN6DnwjOxGkSfQC3/yGmcUDKBPwiZ5O2s9C+fE1kUEnrX2Xea4agVngMzR8DQ6oOauLWqehDB+g2ENWRLoVgS+ma5/Ycs0GTyrECY="
    ]
}
```

JWS signature
```
ew0KICAgICJhbGciOiAiUlMyNTYiLA0KICAgICJ4NWMiOiBbDQogICAgICAgICJNSUlEQVRDQ0FtcWdBd0lCQWdJSkFNQjFjc051QTYra01BMEdDU3FHU0liM0RRRUJCUVVBTUhFeEN6QUpCZ05WQkFZVEFsVlRNUkl3RUFZRFZRUUlFd2xVWlc1dVpYTnpaV1V4R0RBV0JnTlZCQW9URDBWNFlXMXdiR1VnUTI5dGNHRnVlVEVRTUE0R0ExVUVBeE1IUlhoaGJYQnNaVEVpTUNBR0NTcUdTSWIzRFFFSkFSWVRaWGhoYlhCc1pVQmxlR0Z0Y0d4bExtTnZiVEFlRncweE16QTBNRFF4TlRJNE16QmFGdzB4TkRBME1EUXhOVEk0TXpCYU1JR1dNUXN3Q1FZRFZRUUdFd0pWVXpFU01CQUdBMVVFQ0JNSlZHVnVibVZ6YzJWbE1SRXdEd1lEVlFRSEV3aEdjbUZ1YTJ4cGJqRVlNQllHQTFVRUNoTVBSWGhoYlhCc1pTQkRiMjF3WVc1NU1SQXdEZ1lEVlFRTEV3ZEZlR0Z0Y0d4bE1SQXdEZ1lEVlFRREV3ZEZlR0Z0Y0d4bE1TSXdJQVlKS29aSWh2Y05BUWtCRmhObGVHRnRjR3hsUUdWNFlXMXdiR1V1WTI5dE1JR2ZNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0R05BRENCaVFLQmdRRGp4dlpYRjMwV0w0b0tqWllYZ1IwWnlhWCt1M3k2K0pxVHFpTmtGYS9WVG5ldDZMeTJPVDZabW1jSkVQbnEzVW5ld3BIb09RK0dmaGhUa1cxM2owNmo1aU5uNG9iY0NWV1RMOXlYTnZKSCtLbyt4dTRZbC95U1BScklQeVRqdEhkRzBNMlh6SWxtbUxxbStDQVMrS0NiSmVINHRmNTQza0lXQzVwQzVwM2NWUUlEQVFBQm8zc3dlVEFKQmdOVkhSTUVBakFBTUN3R0NXQ0dTQUdHK0VJQkRRUWZGaDFQY0dWdVUxTk1JRWRsYm1WeVlYUmxaQ0JEWlhKMGFXWnBZMkYwWlRBZEJnTlZIUTRFRmdRVVZzM3Y1YWZFZE9lb1llVmFqQVFFNHYwV1MxUXdId1lEVlIwakJCZ3dGb0FVeVZJYzN5dnJhNEVCejIwSTRCRjM5SUFpeEJrd0RRWUpLb1pJaHZjTkFRRUZCUUFEZ1lFQWdTL0ZGNUQwSG5qNDRydlQ2a2duM2tKQXZ2MmxqL2Z5anp0S0lyWVMzM2xqWEduNmdHeUE0cXRiWEEyM1ByTzR1Yy93WUNTRElDRHBQb2JoNjJ4VENkOXFPYktoZ3dXT2kwNVBTQkxxVXUzbXdmQWUxNUxKQkpCcVBWWjRLMGtwcGVQQlU4bTZhSVpvSDU3TC85dDRPb2FMOHlLcy9xaktGZUkxT0ZXWnh2QT0iLA0KICAgICAgICAiTUlJRE56Q0NBcUNnQXdJQkFnSUpBTUIxY3NOdUE2K2pNQTBHQ1NxR1NJYjNEUUVCQlFVQU1IRXhDekFKQmdOVkJBWVRBbFZUTVJJd0VBWURWUVFJRXdsVVpXNXVaWE56WldVeEdEQVdCZ05WQkFvVEQwVjRZVzF3YkdVZ1EyOXRjR0Z1ZVRFUU1BNEdBMVVFQXhNSFJYaGhiWEJzWlRFaU1DQUdDU3FHU0liM0RRRUpBUllUWlhoaGJYQnNaVUJsZUdGdGNHeGxMbU52YlRBZUZ3MHhNekEwTURReE5USTFOVE5hRncweU16QTBNREl4TlRJMU5UTmFNSEV4Q3pBSkJnTlZCQVlUQWxWVE1SSXdFQVlEVlFRSUV3bFVaVzV1WlhOelpXVXhHREFXQmdOVkJBb1REMFY0WVcxd2JHVWdRMjl0Y0dGdWVURVFNQTRHQTFVRUF4TUhSWGhoYlhCc1pURWlNQ0FHQ1NxR1NJYjNEUUVKQVJZVFpYaGhiWEJzWlVCbGVHRnRjR3hsTG1OdmJUQ0JuekFOQmdrcWhraUc5dzBCQVFFRkFBT0JqUUF3Z1lrQ2dZRUExc0JuQldQWjBmN1dKVUZUSnk1KzAxU2xTNVo2RERENlV5ZTl2SzlBeWNnVjVCMytXQzhIQzV1NWg5MU11akFDMUFSUFZVT3RzdlBSczQ1cUtORklnSUdSWEtQQXdaamF3RUkyc0NKUlNLVjQ3aTZCOGJEdjRXa3VHdlFhdmVaR0kwcWxtTjVSMUVpbTJnVUl0UmoxaGdjQzlyUWF2amxuRktEWTJybFhHdWtDQXdFQUFhT0IxakNCMHpBZEJnTlZIUTRFRmdRVXlWSWMzeXZyYTRFQnoyMEk0QkYzOUlBaXhCa3dnYU1HQTFVZEl3U0JtekNCbUlBVXlWSWMzeXZyYTRFQnoyMEk0QkYzOUlBaXhCbWhkYVJ6TUhFeEN6QUpCZ05WQkFZVEFsVlRNUkl3RUFZRFZRUUlFd2xVWlc1dVpYTnpaV1V4R0RBV0JnTlZCQW9URDBWNFlXMXdiR1VnUTI5dGNHRnVlVEVRTUE0R0ExVUVBeE1IUlhoaGJYQnNaVEVpTUNBR0NTcUdTSWIzRFFFSkFSWVRaWGhoYlhCc1pVQmxlR0Z0Y0d4bExtTnZiWUlKQU1CMWNzTnVBNitqTUF3R0ExVWRFd1FGTUFNQkFmOHdEUVlKS29aSWh2Y05BUUVGQlFBRGdZRUFEaHdUZWJHazczNXlLaG04RHFDeHZObkVaME54c1lFWU9qZ1JHMXlYVGxXNXBFNjkxZlNINUFaK1Q2ZnB3cFpjV1k1UVlrb042RG53ak94R2tTZlFDMy95R21jVURLQlB3aVo1TzJzOUMrZkUxa1VFbnJYMlhlYTRhZ1ZuZ016UjhEUTZvT2F1TFdxZWhEQitnMkVOV1JMb1ZnUyttYTUvWWNzMEdUeXJFQ1k9Ig0KICAgIF0NCn0.ew0KICAgICJ2ZXJzaW9uIjogIjEuMC4wIiwNCiAgICAiaWQiOiAiMzNjZmY0MTYtZTMzMS00YzlkLTk2OWUtNTM3M2ExNzU2MTIwIiwNCiAgICAiYWN0b3IiOiB7DQogICAgICAgICJtYm94IjogIm1haWx0bzpleGFtcGxlQGV4YW1wbGUuY29tIiwNCiAgICAgICAgIm5hbWUiOiAiRXhhbXBsZSBMZWFybmVyIiwNCiAgICAgICAgIm9iamVjdFR5cGUiOiAiQWdlbnQiDQogICAgfSwNCiAgICAidmVyYiI6IHsNCiAgICAgICAgImlkIjogImh0dHA6Ly9hZGxuZXQuZ292L2V4cGFwaS92ZXJicy9leHBlcmllbmNlZCIsDQogICAgICAgICJkaXNwbGF5Ijogew0KICAgICAgICAgICAgImVuLVVTIjogImV4cGVyaWVuY2VkIg0KICAgICAgICB9DQogICAgfSwNCiAgICAib2JqZWN0Ijogew0KICAgICAgICAiaWQiOiAiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj14aDRrSWlIM1NtOCIsDQogICAgICAgICJvYmplY3RUeXBlIjogIkFjdGl2aXR5IiwNCiAgICAgICAgImRlZmluaXRpb24iOiB7DQogICAgICAgICAgICAibmFtZSI6IHsNCiAgICAgICAgICAgICAgICAiZW4tVVMiOiAiVGF4IFRpcHMgJiBJbmZvcm1hdGlvbiA6IEhvdyB0byBGaWxlIGEgVGF4IFJldHVybiAiDQogICAgICAgICAgICB9LA0KICAgICAgICAgICAgImRlc2NyaXB0aW9uIjogew0KICAgICAgICAgICAgICAgICJlbi1VUyI6ICJGaWxpbmcgYSB0YXggcmV0dXJuIHdpbGwgcmVxdWlyZSBmaWxsaW5nIG91dCBlaXRoZXIgYSAxMDQwLCAxMDQwQSBvciAxMDQwRVogZm9ybSINCiAgICAgICAgICAgIH0NCiAgICAgICAgfQ0KICAgIH0sDQogICAgInRpbWVzdGFtcCI6ICIyMDEzLTA0LTAxVDEyOjAwOjAwWiINCn0.FWuwaPhwUbkk7h9sKW5zSvjsYNugvxJ-TrVaEgt_DCUT0bmKhQScRrjMB6P9O50uznPwT66oF1NnU_G0HVhRzS5voiXE-y7tT3z0M3-8A6YK009Bk_digVUul-HA4Fpd5IjoBBGe3yzaQ2ZvzarvRuipvNEQCI0onpfuZZJQ0d8
```

Signed Statement
```
{
    "version": "1.0.0",
    "id": "33cff416-e331-4c9d-969e-5373a1756120",
    "actor": {
        "mbox": "mailto:example@example.com",
        "name": "Example Learner",
        "objectType": "Agent"
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/experienced",
        "display": {
            "en-US": "experienced"
        }
    },
    "object": {
        "id": "https://www.youtube.com/watch?v=xh4kIiH3Sm8",
        "objectType": "Activity",
        "definition": {
            "name": {
                "en-US": "Tax Tips & Information : How to File a Tax Return "
            },
            "description": {
                "en-US": "Filing a tax return will require filling out either a 1040, 1040A or 1040EZ form"
            }
        }
    },
    "timestamp": "2013-04-01T12:00:00Z",
    "attachments": [
        {
            "usageType": "http://adlnet.gov/expapi/attachments/signature",
            "display": { "en-US": "Signature" },
            "description": { "en-US": "A test signature" },
            "contentType": "application/octet-stream",
            "length": 4235,
            "sha2": "dc9589e454ff375dd5dfd6f556d2583e231e8cafe55ef40102ddd988b79f86f0"
        }
    ]
}
```

__Note:__ Attached signature not shown, see <a href="#attachments"> attachments</a> for
attachment message format.

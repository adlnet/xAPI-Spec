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
*	Part One:	[About the Experience API](#partone)  
	*	1.0.	[Introduction](#introduction-partone) 
	*	2.0.	[How To Use This Document](#readingguidelines)  
		*	2.1.	[MUST / SHOULD / MAY](#def-must-should-may)  
	 	*	2.2.	[Guidelines for Interpreting Descriptive Text and Tables](#interpret-text-table)  
	*	3.0.	[Serialization and JavaScript Object Notation](#json)
	*	4.0.	[Definitions](#definitions) 
	*	5.0.	[xAPI Components](#xapi-components) 
	*	6.0.	[Extending xAPI](#extending-xapi) 
	*	7.0.	[Profiles and Communities of Practice](#COPs)  
	*	[Appendices](#append1)  
		*	[Appendix A: Revision History](#Appendix1A)  
		*	[Appendix B: cmi5 Example](#Appendix1B)  
*	Part Two:	[Experience API (xAPI) Data](#parttwo)  
	*	1.0.	[Documents](#documents) 
	*	2.0.	[Statements](#statements)  
		*	2.1.	[Purpose](#statement-purpose)  
	 	*	2.2.	[Formatting Requirements](#dataconstraints) 
	 	*	2.3.	[Statement Lifecycle](#lifecycle) 
		 	*	2.3.1.	[Statement Immutability](#statement-immutablity-and-exceptions) 
		 	*	2.3.2.	[Voiding](#voided) 
   		*	2.4.	[Statement Properties](#statement-properties)  
	        *	2.4.1.	[ID](#stmtid)  
	        *	2.4.2.	[Actor](#actor)  
	        *	2.4.3.	[Verb](#verb)  
	        *	2.4.4.	[Object](#object)  
	        *	2.4.5.	[Result](#result)  
	        *	2.4.6.	[Context](#context)  
	        *	2.4.7.	[Timestamp](#timestamp)  
	        *	2.4.8.	[Stored](#stored)  
	        *	2.4.9.	[Authority](#authority)  
	        *	2.4.10.	[Version](#version)  
	        *	2.4.11.	[Attachments](#attachments)  
    	*	2.5.	[Retrieval of Statements](#retrieval)   
    	*	2.6.	[Signed Statements](#signature)  
	*	3.0.	[Metadata](#metadata)
		*	3.1.	[IRI Requirements](#iri-requirements)  
		*	3.2.	[Hosted Metadata](#miscmeta)  
    *	4.0.	[Special Data Types and Rules](#special-data)  
		*	4.1.	[Extensions](#miscext) 
		*	4.2.	[Language Maps](#lang-maps)
		*	4.3.	[IRIs](#iris)
		*	4.4.	[UUIDs](#uuids)
		*	4.5.	[ISO 8601 Timestamps](#timestamps)
		*	4.6.	[ISO 8601 Durations](#durations)
	*	[Appendices](#append2)  
		*	[Appendix A: Example Statements](#Appendix2A)  
		*	[Appendix B: Example statement objects of different types](#Appendix2B)  
		*	[Appendix C: Example definitions for Activities of type "cmi.interaction"](#Appendix2C)  	
		*	[Appendix D: Example Signed Statement](#Appendix2D)  
*	Part Three:	[Data Processing, Validation, and Security](#partthree)  
	*	1.0.	[Requests](#requests)
		*	1.1.	[HEAD Request Implementation](#httphead)  
	 	*	1.2.	[Headers](#header-parameters) 
	 	*	1.3.	[Alternate Request Syntax](#alt-request-syntax) 
	 	*	1.4.	[Encoding](#encoding) 
	*	2.0.	[Resources](#datatransfer)   
	 	*	2.1.	[Statement Resource](#stmtres) 
	 	*	2.2.	[Documents Resources](#doctransfer) 
	 	*	2.3.	[State Resource](#stateres) 
	 	*	2.4.	[Agents Resource](#agentsres) 
	 	*	2.5.	[Activities Resource](#activitiesres) 
	 	*	2.6.	[Agent Profile Resource](#agentprofres) 
	 	*	2.7.	[Activity Profile Resource](#actprofres) 
	 	*	2.8.	[About Resource](#aboutresource) 
   	*	3.0.	[Data Validation](#validation)     
    	*	3.1.	[Concurrency](#concurrency)  
    	*	3.2.	[Error Codes](#errorcodes)
    	*	3.3     [Versioning](#versioning)  
    *	4.0.	[Authentication](#authentication)  
		*	4.1.	[OAuth 1.0 Authentication Scenarios and Methods](#authdefs) 
		*	4.2.	[OAuth 1.0 Authorization Scope](#oauthscope)
    *	5.0	[Security](#security)
	*	[Appendices](#append3)  
		*	[Appendix A: Converting Statements to 1.0.0](#Appendix3A)  
		*	[Appendix B: Table of All Endpoints](#Appendix3B)  
		*	[Appendix C: Cross Domain Request Example](#Appendix3C)  

<a name="partone"/>
#Part One: About The Experience API

<a name="introduction-partone"/>
## 1.0 Introduction

The Experience API (xAPI) is a technical specification that aims to facilitate the documentation and communication of learning experiences. It specifies 
a structure to describe learning experiences and defines how these descriptions can be exchanged electronically.  

The xAPI is an initiative of the Advanced Distributed Learning (ADL), established in 1997 to standardize and modernize training and education management and delivery in the US. Among the many outcomes of ADL was SCORM - the Sharable Content Object Reference Model. SCORM has become an internationally recognized framework that has been a major factor contributing to the economy and effectiveness of online learning around the world.
  
While SCORM has been a great success, there is a growing realization of the need to track learning experiences of individuals beyond formal, structured computer-based training. In assessing candidates' suitability for positions or their capability for performing various tasks, there is a need to consider a wide range of formal and informal learning experiences, both on and offline.  That information, more often than not is scattered across a wide variety of sources.

Out of this perceived need, the xAPI initiative and specification were born. xAPI assumes that:
  * There is a need to be able to analyze information about learning experiences and their outcomes distributed across a wide variety of sources, platforms and technologies.
  * Developing a commonly-accepted framework for gathering, storing and exchanging this information represents the best way of achieving this.

The goals of the xAPI are:

* To make it easier to understand and compare learning experiences and their outcomes recorded across a wide variety of contexts, platforms and technologies.
* To maximize interoperability of systems which create, gather, store and process information about learning experiences.
* To provide a guide to those who want to build applications that conform to and implement this specification.
* To provide criteria against which conformance to this specification can be tested.

The document that follows sets out the xAPI specification which is designed to achieve these goals. 
<a name="readingguidelines"/> 

## 2.0 How to Use This Document

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

This specification is split into three parts. Part one is this introduction. It offers some background, 
high-level summaries and direction on how to read the rest of the specification. 

Part two of this specification defines 
a data model for various data objects that are transferred between systems. The most significant object within the xAPI data model 
is the Statement object. This specification defines the properties of the Statement object (including "Actor", "Verb", "Object", 
"Result", and "Context") and the rules of syntax for the values of those properties and how they are represented. 
This part helps to ensure that systems implementing the specification follow a consistent data structure.

Part three of this specification sets out the transfer methods that must be used when communicating 
information about learning experiences between programs that adhere to the specification. This includes the format 
of requests and the expected responses. Note that the systems storing or retrieving records need not be Activity Providers. LRSs 
can communicate with other LRSs, or systems. xAPI follows the guidelines of the REST software architecture style, and as such data 
is transferred via HTTP requests and responses. Part three also defines security methods allowing for the trusted exchange of information 
between the Learning Record Store and trusted sources.

<a name="def-must-should-may" />
### 2.1 MUST / SHOULD / MAY 
There are three levels of obligation with regards to conformance to the xAPI specification identified by the terms 
MUST, SHOULD and MAY. A system that fails to implement a MUST (or a MUST NOT) requirement is non-conformant. 
Failing to meet a SHOULD requirement is not a violation of conformity, but goes against the recommendations of the specification. MAY indicates an option, to be decided by the developer with no consequences for conformity. Usage 
of these terms outside of requirement language does not designate a requirement and is avoided whenever possible. 
Complete definitions of MUST, SHOULD, MAY, MUST NOT and SHOULD NOT are found in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

The use of an asterisk* following SHOULD indicates a very strong recommendation. It is planned that these 
recommendations will become MUST requirements in a future version. Not following these recommendations could 
risk interoperability and and/or lead to various other issues depending on the specifics of the recommendation. 
These recommendations cannot be MUST requirements within this version as these would be breaking changes. 
The xAPI Working Group strongly encourages adopters to implement these requirements as though they were MUST 
requirements, while continuing to support other adopters that might not do so.

<a name="interpret-text-table" />
### 2.2 Guidelines for Interpreting Descriptive Text and Tables
As a rule of thumb, if the guideline appears technical or seems to be a requirement, interpret it 
as such. This is especially true of longer, more, detailed explanations and of tables, each of which would 
be unintuitive and/or lengthy to dissect into a list of requirements.

Tables are used throughout this specification to define requirements for lists of properties, parameters, etc.
The tables define which properties are required, recommended and optional. Generally, 'optional' relates to the  
system creating the object and systems receiving and interpreting the object need to be able to interpret all 
properties of that object. Often, properties are optional because the data may not be relevant in all contexts; 
if the data is relevant in a particular context, then it's expected the property will be populated.

If an optional property or parameter contains an object with properties that are recommended or required, then 
these properties are only recommended/required if the property or parameter containing them is used.

Examples are provided through the specification and in appendices to illustrate implementation. The content of these examples is fictional in order to illustrate the requirements of the specification and may not always 
illustrate the best practice approach to tracking the particular learning experience used in the example. Examples 
can be used to inform interpretation of requirements but aren't intended to take precedence over requirements. 

Where the specification does not include requirements relating to a particular facet of implementation, that detail can be considered to be outside of the scope of this specification and it is up to the implementer to determine a 
sensible approach. This specification tries to avoid vagueness and will usually give a rationale even if there no 
requirement in a given area.

<a name="json" />
## 3.0 Serialization and JavaScript Object Notation (JSON)

Serialization is the process of translating data objects and structures into a format for storage or transmission, such that the original data object can be recreated from the resulting serialization. In some cases it might be possible to serialize a piece of data in more than one way, for example a boolean property with a value of true might be represented as `true` or `1` depending on the serialization used. 

xAPI follows the rules of JSON for serializations (so boolean values are represented as `true` or `false`). It might also be possible to represent the objects defined in this specification using other serializations, such as XML. This is out of scope of this specification and use of anything other than JSON to represent the objects defined in this specification is not conformant. 

Even within the rules of JSON there are possible variations of how data can be serialized, especially in relation to data about time. This is significant as a number of features of xAPI rely on systems being able to determine whether two Statements are equivalent. See <a href="#statement-immutability-and-exceptions"> Immutability and exceptions</a> for more details about the properties of the Statement affected by this. 

JSON allows for objects to have properties that contain empty objects. This is not recommended within xAPI; if the statement is not intended to contain data about a property then it is expected that the property will not be used at all. All required properties are required to contain values. 

###### Requirements
* Statements and other objects SHOULD NOT include properties with a value of an empty object. 

<a name="definitions"/>
 
## 4.0 Definitions  

* [Activity](#def-activity)
* [Activity Provider (AP)](#def-activity-provider)
* [Actor](#def-actor)
* [Application Programming Interface (API)](#def-api)
* [Authentication](#def-authentication)
* [Authorization](#def-authorization)
* [Community of Practice](#def-community-of-practice)
* [Endpoint](#endpoint)
* [Experience API (xAPI)](#def-experience-api)
* [Immutable](#def-immutable)
* [Internationalized Resource Identifier (IRI)](#def-iri)
* [Internationalized Resource Locator (IRL)](#def-irl)
* [Inverse Functional Identifier](#def-inverse-functional-identifier)
* [Learning Experience] (#def-learning-experience")
* [Learning Management System (LMS)](#def-learning-management-system)
* [Learning Record](#def-learning-record)
* [Learning Record Consumer](#def-learning-record-consumer)
* [Learning Record Provider](#def-learning-record-provider)
* [Learning Record Store (LRS)](#def-learning-record-store)
* [Metadata Provider](#def-metadata-provider)
* [Metadata Consumer](#def-metadata-consumer)
* [Persona](#def-persona)
* [Profile](#def-profile)
* [Registration](#def-registration)
* [Representational State Transfer (REST)](#def-rest)
* [Service](#def-service)
* [Statement](#def-statement)
* [Tin Can API (TCAPI)](#def-tcapi)
* [Verb](#def-verb)

<a name="def-activity" />

__Activity__: An Activity is a type of Object making up the “this” in “I did this”; it is something 
with which an Actor interacted. It can be a unit of instruction, experience, or performance that is 
to be tracked in meaningful combination with a Verb. Interpretation of Activity is broad, meaning that 
Activities can even be tangible objects such as a chair (real or virtual). In the statement "Anna 
tried a cake recipe", the recipe constitutes the Activity in terms of the xAPI statement. Other 
examples of activities include a book, an e-learning course, a hike or a meeting.

<a name="def-activity-provider" />

__Activity Provider (AP)__: Now referred to as a Learning Record Provider. This change differentiates that 
the activity itself is not always the responsibility of software, rather just the tracking portion is. 

<a name="def-actor" />

__Actor__: An individual or group representation tracked using Statements performing an action within 
an Activity.  Is the "I" in "I did this".

<a name="def-api" />

__Application Programming Interface (API)__: A set of rules and standards created to allow access into 
a software application or tool.  

<a name="def-authentication" />

__Authentication__: The concept of verifying identity. Authentication allows interactions between two 
"trusted" parties.

<a name="def-authorization" />

__Authorization__: The affordance of permissions based on role; the process of making one party 
"trusted" by another.

<a name="def-client" />

__Client__: - Refers to any entity that might interact through requests. Some examples could be a 
Learning Record Provider, a Learning Record Consumer, a Learning Record Store (LRS), or a Learning 
Management System (LMS).

<a name="def-community-of-practice" />

__Community of Practice__: A group, usually connected by a common cause, role or 
purpose, which operates in a common modality.

<a name="def-endpoint" />

__Endpoint__: An entry point in a service-oriented-architecture.  xAPI mirrors this approach with Resources 
by defining the IRI from which communication takes place as an Endpoint.

<a name="def-experience-api" />

__Experience API (xAPI)__: The collection of rules articulated in this document which determines how learning 
experiences are defined, formatted, and exchanged so that independent software programs can exchange and make 
use of this information.

<a name ="def-immutable" />

__Immutable__:  Adjective used to describe things which cannot be changed. With 
some exceptions, Statements in the xAPI are immutable. This ensures that when 
Statements are shared between LRSs, multiple copies of the Statement remain
the same.

<a name="def-iri" />

__Internationalized Resource Identifier  (IRI)__: A unique identifier which could be an IRL. 
Used to identify an object such as a verb, activity or activity type. Unlike URIs, IRIs 
can contain some characters outside of the ASCII character set in order to support international 
languages. 

IRIs always include a scheme. This is not a requirement of this standard, but part of the 
definition of IRIs, per [RFC 3987](http://www.ietf.org/rfc/rfc3987.txt). What are sometimes 
called 'relative IRIs' are not IRIs.

<a name="def-irl" />

__Internationalized Resource Locator (IRL)__:  In the context of this document, 
an IRL is an IRI that when translated into a URI (per the IRI to URI rules), is a URL. 

<a name="def-inverse-functional-identifier" />

__Inverse Functional Identifier__: An identifier which is unique to a particular persona or group.

<a name="def-learning-experience" />

__Learning Experience__: An event associated with learning.  It is highly diverse as far as what it can be.  
Examples include reading a book, taking an online course, going on a field trip, engaging in self-directed 
research, or receiving a certificate for a completed course.

<a name="def-learning-management-system" />

__Learning Management System (LMS)__: "A software package used to administer one or more courses to one or more learners. 
An LMS is typically a web-based system that allows learners to authenticate themselves, register for courses, complete 
courses and take assessments" (Learning Systems Architecture Lab definition). An LMS in this document is used as an 
example of how a user is identified as trusted within a system and able to access its Learning Experiences.

<a name="def-learning-record" />

__Learning Record__: An account of a Learning Experience that is formatted according to the rules of xAPI.  A Learning Record
takes on many forms, including Statements, documents, and their parts.  This definition is intended to be all-inclusive.

<a name="def-learning-record-consumer" />

__Learning Record Consumer__: An xAPI Client that accesses data from Learning Record Store(s) with the intent of processing the data, including interpretation, analysis, translation, dissemination, and aggregation.

<a name="def-learning-record-provider" />

__Learning Record Provider__: An xAPI Client that sends data to Learning Record Store(s).  Often, the Learning Record 
Provider will create Learning Records while monitoring a learner as a part of a Learning Experience.

<a name="def-learning-record-store" />

__Learning Record Store (LRS)__: A server (i.e. system capable of receiving and processing web requests) that is responsible 
for receiving, storing, and providing access to Learning Records.

<a name="def-metadata-consumer" />

__Metadata Consumer__: A person, organization, software program or other thing that seeks to determine the meaning represented
by an IRI used within this specification and/or retrieves metadata about an IRI. An LRS might or
might not be a metadata consumer. 

<a name="def-metadata-provider" />

__Metadata Provider__: A person, organization, software program or other thing that coins IRIs to be used within 
this specification and/or hosts metadata about an IRI. 

<a name="def-persona" />

__Persona__: A set of one or more representations which defines an Actor uniquely.  Conceptually, this is like 
having a "home email" and a "work email".  Both are the same person, but have different data, associations, etc.

<a name="def-profile" />

__Profile__: A construct where information about the learner or activity is kept, typically in name/document pairs 
that have meaning to an instructional system component.  Note that "profile" is also used to describe specifications
building on xAPI that Communies of Practice may develop.

<a name="def-registration" />

__Registration__: An instance of a learner experiencing a particular Activity.

<a name="def-rest" />

__Representational State Transfer (REST)__: An architecture for designing networked web Services.
It relies on HTTP methods and uses current web best practices.

<a name="def-service" />

__Service__: A software component responsible for one or more aspects of the distributed learning process. 
An LMS typically combines many services to design a complete learning experience.

<a name="def-statement" />

__Statement__: A data sctructure showing evidence for any sort of experience or event which is to be tracked 
in xAPI as a Learning Record.  A set of several Statements, each representing an event in time, might be used 
to track complete details about a learning experience.  

<a name="def-tcapi"/>

__Tin Can API (TCAPI)__: The previous name of the API defined in this document, often used in 
informal references to the Experience API.  

<a name="def-verb" />

__Verb__: Is the action being done by the Actor within the Activity within a Statement. 
A Verb represents the "did" in "I did this".

<a name="xapi-components" />

## 5.0 xAPI Components

This section explains and shows graphically how different pieces of xAPI can fit together.  

##### Tracking Experiences Through Systems

![Data Flow in xAPI](/xAPIDataFlow.jpg)

Figure 1 shows the tracking of experiences through the data flow of xAPI. While a learner experiences a learning activity, data about that experience is tracked to a Learning Record Store (LRS). Authentication with the LRS may use the learner's credentials, the activity provider's credentials, or a combination. A Data Analysis Tool, acting as a Service with permission, can request the data from the LRS and use it to display meaningful reports or visualizations. In the case of more structured learning, a user may be dependent on an Activity Provider to deliver and/or authorize use of content to them. Once this triangle of authorization and access is complete, a registration exists for that user in that content tracked by that LRS and experience tracking may proceed.

##### Activity Data and Metadata

![xAPI Activity Data and Metadata](/xAPIMetadata.jpg)

Understanding how a single activity (as uniquely identified by its IRI) is produced, populated, updated, and 
consumed is a key concept in xAPI. Figure 2 shows this process. xAPI Statements with the Activity objects have 
metadata properties that may be populated. This is done through the  Activity Definition object. The Id of each 
Activity is an IRI which also could have metadata located at where it resolves to. Any metadata where the IRI resolves is under the control of the Metadata Provider. Any metadata at the IRI is the authoritative source of metadata, and could be used to populate the LRS's canonical version of the Activity's metadata (Activity 
Definition) as a preference to what it receives from Statements. A Metadata Consumer can access Metadata directly from the authority or can query the Activities Resource.  


##### Agent and Profile Management

![xAPI Activity Data and Metadata](/xAPIAgentsAndEndpoints.jpg)

xAPI grants the framework for allowing selective access to one's personal data. This is done through the 
management of what are called personas. In xAPI, each persona represents the "I" in "I did this" and is 
logically the subject of the Statement. A user sending records to an LRS could have multiple personas associated with him or her. In Figure 3, a single user can access multiple Services(or apps, etc.), each of which could have a different persona. More likely is that personas exist for a particular purpose, such as work, home, school, 
social, etc.  Each of these Services send data to the LRS. Within the LRS now, there are Statements from three 
different personas of the same user. The LRS can aggregate all of the information of each of the personas into one 
"Person" Object and send it through the Agents Resource.  

<a name="extending-xapi" />

## 6.0 Extending xAPI

xAPI can be extended in a few ways. The most notable is Statement Extensions, which allow great flexibility within Statements.  It is recommended that profiles or Communities of Practice agree on how to use  
extensions for their particular use cases. Implementation details are covered in [4.1 Extensions](#miscext).

The About Resource is another place xAPI supports Extensions.  The LRS may find it useful to communicate features or behaviors beyond this specification to activity provider. The LRS can use extensions to the About Resource to communicate these features and behaviours.

Finally, the set of Resources implemented is not expected to be constrained by this document. Resources beyond 
those listed in this specification can be implemented and co-exist with the Resources defined in this specification.

<a name="COPs" />

## 7.0 Profiles and Communities of Practice

xAPI strictly defines the structure of statements communicated between the client and an LRS but is very flexible as to the content of that statement structure. For example, the specification requires that all statements have a verb property, but does not restrict the values of that property; any verb can be used. This flexibility enables xAPI to be used in any context, including future use cases not envisaged by the specification authors.

It is intended that Communities of Practice (CoPs) will define the identifiers (verbs, activity types, contextual relationships, extensions, etc.) to be used in their use cases. It is very important that such communities exist  
and share best practices. The CoP will define these identifiers in a profile. This is a set of rules and/or 
vocabularies to implemented in addition to xAPI for the particular use case being addressed.

It is recommended that a profile use a unique "category" within a Statement's context to refer to any Statement  
which follows the profile.  An example profile is [cmi5](https://github.com/AICC/CMI-5_Spec_Current"), 
which is designed for the traditional single learner, single online learning use case.  An example cmi5 Statement can 
be found in [Appendix B: cmi5 Example](#Appendix1B).

CoPs are highly recommended to avoid duplication of effort, as creating too many ways to solve the same problem 
will cause fragmentation in similar domains and will hurt interoperability.  An example of a CoP for the medical 
field is the [Medbiquitous xAPI Interest Group](http://groups.medbiq.org/medbiq/display/XIG/XAPI+Interest+Group+Home).

<a name="append1"/>
## Appendices

<a name="Appendix1A"/>
### Appendix A: Revision History
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
- Agent Objects now have exactly 1 uniquely identifying property, instead 
of at least one.

###### 0.95 to 1.0.0 (April 26, 2013) 
Various refinements and clarifications including:
- Adding attachments
- Activity metadata is now stored as JSON rather than XML
- Changes to voiding Statements
- Clarification and naming of the Document APIs
- Changes to querying the Statement API
- Signed Statements

[0.95...1.0.0](https://github.com/adlnet/xAPI-Spec/compare/0.95-spec...1.0.0)

###### 1.0.0 to 1.0.1 (October 1, 2013)
Clarifications and additional examples including:
- Fixed various typos
- Added additional examples in the appendices

[1.0.0...1.0.1](https://github.com/adlnet/xAPI-Spec/compare/1.0.0...1.0.1)

###### 1.0.1 to 1.0.2 (October 1, 2014)
- Added optional/required to tables
- Added missing table heading on Interaction components
- Change yes/no to required/optional in attachments
- Clarified intent of 'moreInfo' property

[1.0.1...1.0.2](https://github.com/adlnet/xAPI-Spec/compare/1.0.1...1.0.2)

###### 1.0.2 to 1.0.3 (TBC, 2016)
- Complete reorganization of the document into three parts
- Many, many clarifications
- Removed back-references to SCORM
- Additional explanatory text and diagrams
- Rename Statement API and Document APIs to Statement Resource and Document Resources

[1.0.2...1.0.3](https://github.com/adlnet/xAPI-Spec/compare/1.0.2...1.0.3)


<a name="Appendix1B"/>
### Appendix B: cmi5 Example 

The following example illustrates a statement following the cmi5 Community of Practice. It demonstrates use of Extensions 
and "category" Context Activities.

```
{
  "id":"2a41c918-b88b-4220-20a5-a4c32391a240",
  "actor": {
    "objectType": "Agent",
    "name": "Gert Frobe",
    "account": {
      "homePage": "http://example.adlnet.gov",
      "name": "1625378"
    }
  },
  "verb": {
    "id": "http://adlnet.gov/expapi/verbs/failed",
    "display": {
      "en-US": "failed"
    }
  },
  "object": {
    "id":"https://example.adlnet.gov/AUidentifier",
    "objectType": "Activity"
  },
  "result": {
    "score": {
      "scaled": 0.65,
      "raw": 65,
      "min": 0,
      "max": 100
    },
    "success": false,
    "duration": "PT30M",
    "extensions": {
    "http://w3id.org/xapi/cmi5/result/extensions/progress": 100
    }
  },
  "context": {
     "registration": "ec231277-b27b-4c15-8291-d29225b2b8f7",
     "contextActivities": {
        "category": [
          {
          "id": "http://w3id.org/xapi/cmi5/context/categories/moveon"
          },
          {
          "id": "http://w3id.org/xapi/cmi5/context/categories/cmi5"
          }
        ]
     },
     "extensions": {
       "http://w3id.org/xapi/cmi5/context/extensions/sessionid": "458240298378231",
      }
   },
  "timestamp": "2012-06-01T19:09:13.245+00:00"
}
```


<a name="parttwo" />
#Part Two: Experience API (xAPI) Data


<a name="documents" />
## 1.0 Documents

### Document

The Experience API provides a facility for Activity Providers to save arbitrary data in the form of documents.  This data 
is largely unstructured, which allows for flexibility.  Specifics on document behaviors can be found in [Part 3](#doctransfer) 

<a name="statements" /> 

## 2.0 Statements  

###### Description 
The Statement is the core of the xAPI. All learning events are stored as Statements.
A Statement is akin to a sentence of the form "I did this".

<a name="statement-purpose"/> 
### 2.1 Purpose

Statements are the evidence for any sort of experience or event which is to be tracked in xAPI. 
While Statements follow a machine readable JSON format, they can also easily be described
using natural language. This can be extremely useful for the design process. Statements are 
meant to be aggregated and analyzed to provide larger meaning for the overall experience than 
just the sum of its parts.

<a name="dataconstraints"/>
### 2.2 Formatting Requirements

###### Details

All the properties used in Statements are restricted to certain types, and those types
constrain the behavior of systems processing Statements. For clarity, certain key
requirements are documented here, emphasizing where compliant systems have a responsibility
to act in certain ways.

###### Requirements

* A Statement MUST use each property no more than one time.
* A Statement MUST use “actor”, “verb”, and “object”.
* A Statement MAY use its properties in any order.
* The LRS MUST NOT return a different serialisation of any properties except those 
[listed as exceptions above](#statement-immutablity-and-exceptions).

###### Client Requirements

The following requirements reiterate especially important requirements already 
included elsewhere, to emphasize, clarify, and provide implementation guidance.  
Complete IRI validation is extremely difficult, so much of the burden for ensuring data portability is on the Client.

* Values requiring IRIs MUST be sent with valid IRIs. 
* Keys of language maps MUST be sent with valid [RFC 5646](http://tools.ietf.org/html/rfc5646) language tags, for similar reasons.
* A library SHOULD be used to construct IRIs, as opposed to string concatenation. 
* Values SHOULD be considered to be case sensitive unless specified otherwise. 
* Lowercase SHOULD be used to send case insensitive data.
* Additional properties SHOULD* NOT be added to Statements unless explicitly allowed by this specification. 

__Note:__ The LRS is recommended to reject Statements containing additional properties. Additional properties in 
Statements would mean that the Statement would not be interoperable with all LRSs. 

###### LRS Requirements

* The LRS MUST reject Statements
    * with any null values (except inside extensions).
    * with strings where numbers are required, even if those strings contain numbers.
    * with strings where booleans are required, even if those strings contain booleans.
    * with any non-format-following key or value, including the empty string, where a
      string with a particular format (such as mailto IRI, UUID, or IRI) is required.
    * where the case of a key does not match the case specified in this specification.
    * where the case of a value restricted to enumerated values does not match
      an enumerated value given in this specification exactly.
    * where a key or value is not allowed by this specification.
    * where a key occurs multiple times within an object. 
    * containing IRL or IRI values without a scheme.
* The LRS MUST at least validate that the sequence of token lengths for language map keys
matches the [RFC 5646](http://tools.ietf.org/html/rfc5646) standard.
* The LRS MUST process and store numbers with at least the precision of IEEE 754 32-bit
floating point numbers.
* The LRS MUST validate parameter values to the same standards required for values of the
same types in Statements. __Note:__ string parameter values are not quoted as they are in JSON.
* The LRS SHOULD treat all values as case sensitive unless specified otherwise.
* The LRS MAY use best-effort validation for IRL and IRI formats to satisfy the
non-format-following rejection requirement.
* The LRS MAY use best-effort validation for language map keys to satisfy the
non-format-following rejection requirement.
* Additional properties SHOULD* NOT be added to Statements and other objects unless explicitly allowed by this specification and the 
LRS SHOULD* reject Statements containing such additional properties.

<a name="lifecycle" />

### 2.3 Statement Lifecycle

Statements are information about a tracked learning experience. Typically, the information represented in the 
Statement has already happened. Thus, the natural language used in "display" or in the human-readable portion of 
the Verb Id will usually use the past tense.

Statements are expected to be permanent. The only way to undo a Statement within this specification is to 
[void it](#voided). Voiding does not destroy a Statement, rather indicates the evidence in the 
Statement is to be disregarded.

<a name="statement-immutablity-and-exceptions" />

#### 2.3.1 Statement Immutability

Statements are immutable (they cannot be changed). The following are exceptions or areas not covered by this rule:

* Potential or required assignments of properties during LRS 
processing ("id", "authority", "stored", "timestamp", "version"). 

* Activity Definitions referenced by a Statement. The content of 
Activity Definitions that are referenced in Statements is not considered part of the 
Statement itself. This means a deep serialization of a Statement into 
JSON will change if the referenced Activity Definition changes (see the
[Statement API's](#stmtapi) "format" parameter for details).  

* Verbs referenced by a Statement. The Display property of the Verb is not considered 
part of the Statement itself (see the [Statement API's](#stmtapi) "format" parameter for details). 

* Serialization of Timestamp data. This is not considered part of the immutable statement 
itself. For example, the timestamp and stored properties of a statement can be returned
in a different timezone to the one with which they were stored so long as the point in time
referenced is not affected. See [4.1.7 Timestamp](#timestamp) and [4.1.8 Stored](#stored) for details. 

* Serialization of un-ordered lists. The list of Agents in a Group is not considered to be an ordered list
and so the LRS can return this list of agents in any order. See [4.1.2.2 Groups](#group).

* Attachments. These are not part of statements and an LRS will return statements without attachments when the client
requests this (see the [Statement API's](#stmtapi) "attachments" parameter for details).

* Case sensitivity. Some properties are case insensitive and changes in case therefore do not affect immutability. 
For example the domain portion an e-mail address is case insensitive. It is recommended to use lowercase for any case 
insensitive text. 

The following explicitly are **not** exceptions and **are** covered by this rule:

* Result Duration. Due to variable lengths of months, years and even minutes and the flexible nature of the 
timestamp property as representing either the start, middle or end of the experience, it is not possible for 
an LRS to accurately deserialize the Result Duration and convert between units of time. For this reason, the 
Result Duration is considered a string for purposes of statement comparison. 

<a name="statement-comparision-requirements" />
###### Statement Comparision Requirements
There are a number of scenarios outlined in this specification which require statements to be
compared to see if they match. In these scenarios, the following rules apply:

* Differences which could have been caused by 
[exceptions to Statement immutability](#statement-immutablity-and-exceptions) MUST be ignored.
* Differences relating to a different serialisation of any properties not
[listed as exceptions](#statement-immutablity-and-exceptions) MUST not be ignored. 

<a name="voided"/>

#### 2.3.2 Voiding

###### Rationale

The certainty that an LRS has an accurate and complete collection of data is guaranteed by the fact that Statements 
cannot be logically changed or deleted. This immutability of Statements is a key factor in enabling the distributed 
nature of Experience API.

However, not all Statements are perpetually valid once they have been issued. Mistakes or other factors could require that a previously made Statement is marked as invalid. This is called "voiding a Statement" and the
reserved Verb “http://adlnet.gov/expapi/verbs/voided" is used for this purpose. Any Statement that voids another
cannot itself be voided.

###### Requirements

* When issuing a Statement that voids another, the Object of that voiding Statement MUST have the "objectType" 
property set to "StatementRef".
* When issuing a Statement that voids another, the Object of that voiding Statement MUST specify the id 
of the statement-to-be-voided by its "id" property.
* an LRS MUST consider a Statement it contains "voided" if and only if the Statement is not itself a voiding Statement and the LRS also contains a voiding Statement referring to the first Statement.
* Upon receiving a Statement that voids another, the LRS SHOULD reject the entire request which includes the 
voiding Statement with HTTP 403 'Forbidden' if the request is not from a source authorized to void Statements.
* Upon receiving a Statement that voids another, the LRS SHOULD NOT* reject the request on the grounds of the 
Object of that voiding Statement not being present. 
* Upon receiving a Statement that voids another, the LRS MAY roll back any changes to Activity or Agent 
definitions which were introduced by the Statement that was just voided.
* An Activity Provider that wants to "unvoid" a previously voided Statement SHOULD issue that Statement 
again under a new id.

__Note:__ See ["Statement References"](#stmtref) in [When the "Object" is a Statement](#stmtasobj) 
for details about making references to other Statements.  To see how voided statements behave when queried, 
See [StatementRef](#queryStatementRef) in 7.3 Statement API).

###### Example

This example Statement voids a previous Statement which it identifies with the Statement id 
"e05aa883-acaf-40ad-bf54-02c8ce485fb0".

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
<a name="statement-properties"/> 
### 2.4 Statement Properties  

###### Details
The details of each property of a statement are described in the table below.  

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr><td>id</td><td>UUID</td>
	<td>UUID assigned by LRS if not set by the Activity Provider.</td>
	<td>Recommended</td></tr>
	<tr><td><a href="#actor">actor</a></td><td>Object</td>
	<td>Whom the Statement is about, as an <a href="#agent">Agent</a> or 
		<a href="#group">Group</a> Object. Represents the "I" in "I Did This".</td>
	<td>Required</td></tr>
	<tr><td><a href="#verb">verb</a></td><td>Object</td>
	<td>Action taken by the Actor. Represents the "Did" in "I Did This".</td>
	<td>Required</td></tr>
	<tr><td><a href="#object">object</a></td><td>Object</td>
	<td>Activity, Agent, or another Statement that is the Object of the Statement. 
	Represents the "This" in "I Did This".</td>
	<td>Required</td></tr>
	<tr><td><a href="#result">result</a></td><td>Object</td>
	<td>Result Object, further details representing a measured outcome relevant to the specified Verb.</td>
	<td>Optional</td></tr>
	<tr><td><a href="#context">context</a></td><td>Object</td>
	<td>Context that gives the Statement more meaning. Examples: a team the Actor is 
	working with, altitude at which a scenario was attempted in a flight simulator.</td>
	<td>Optional</td></tr>
	<tr><td><a href="#timestamp">timestamp</a></td><td><a href="#timestamps">Timestamp</a></td>
	<td>Timestamp of when the events described within this Statement occurred. Set by the LRS if not provided.</td>
	<td>Optional</td></tr>
	<tr><td><a href="#stored">stored</a></td><td><a href="#timestamps">Timestamp</a></td>
	<td>Timestamp of when this Statement was recorded. Set by LRS.</td>
	<td>Set by LRS</td></tr>
	<tr><td><a href="#authority">authority</a></td><td>Object</td>
	<td>Agent or Group who is asserting this Statement is true. Verified by the LRS based on 
	authentication. Set by LRS if not provided or if a strong trust relationship between the sender and LRS has not been established.</td>
	<td>Optional</td></tr>
	<tr><td><a href="#version">version</a></td><td>Version</td>
	<td>The Statement’s associated xAPI version, formatted according to <a href="http://semver.org/spec/v1.0.0.html">Semantic Versioning 1.0.0</a>.</td>
	<td>Not Recommended</td></tr>
	<tr>
		<td><a href="#attachments">attachments</a></td>
		<td>Ordered array of Attachment Objects</td>
	    <td>Headers for attachments to the Statement</td>
	<td>Optional</td></tr>
</table>  

###### Example

An example of the simplest possible Statement using all properties that MUST or SHOULD be used.
It is recommended to also populate optional properties where relevant. 
When this Statement is returned from the LRS it will include some additional properties added by the LRS.  
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
See [Appendix A: Example Statements](#Appendix2A) for more examples. 



<a name="stmtid"/> 

#### 2.4.1 ID 

###### Description 

A UUID (all versions of variant 2 in [RFC 4122](http://www.ietf.org/rfc/rfc4122.txt) are valid, and the UUID MUST be in standard string form).

###### Requirements 

* Ids MUST be generated by the LRS if a Statement is received without an id.
* Ids SHOULD be generated by the Activity Provider.

<a name="actor"/>

#### 2.4.2 Actor  

###### Description 
The Actor defines who performed the action. The Actor of a Statement can be an Agent or a Group. 

<a name="agent"/>

##### 2.4.2.1 When the Actor ObjectType is Agent
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
	<tr><td>objectType</td><td>string</td><td>"Agent". This property is optional except when the Agent is used as a Statement's object.</td>
	<td>Optional</td></tr>
	<tr><td>name</td><td>String</td><td>Full name of the Agent.</td>
	<td>Optional</td></tr>
	<tr><td colspan="2">see <a href="#inversefunctional"> 4.1.2.3 Inverse Functional Identifier</a></td>
	    <td>An Inverse Functional Identifier unique to the Agent.</td>
	    <td>Required</td></tr>
</table>


<a name="group"/>

##### 2.4.2.2 When the Actor ObjectType is Group
###### Description

A Group represents a collection of Agents and can be used in most of the same situations an Agent 
can be used.  There are two types of Groups, anonymous and identified.

###### Details

An Anonymous Group is used describe a cluster of people where there is no ready identifier for 
this cluster, e.g. an ad hoc team.

The table below lists all properties of an Anonymous Group.

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr><td>objectType</td><td>String</td><td>"Group". </td><td>Required</td></tr>
	<tr><td>name</td><td>String</td><td>Name of the group.</td><td>Optional</td></tr>
	<tr><td>member</td><td>Array of <a href="#agent">Agent Objects</a></td>
	<td>The members of this Group. This is an unordered list.</td>
	<td>Required</td></tr>
</table>

An Identified Group is used to uniquely identify a cluster of Agents.

The table below lists all properties of an Identified Group.

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr><td>objectType</td><td>String</td><td>"Group". </td><td>Required</td></tr>
	<tr><td>name</td><td>String</td><td>Name of the group.</td><td>Optional</td></tr>
	<tr><td>member</td><td>Array of <a href="#agent">Agent Objects</a></td>
	<td>The members of this Group. This is an unordered list.</td>
	<td>Optional</td></tr>
	<tr><td colspan="2">see <a href="#inversefunctional"> 4.1.2.3 Inverse Functional Identifier</a></td>
	    <td>An Inverse Functional Identifier unique to the Group.</td><td>Required</td></tr>	
</table>

###### Requirements

* A system consuming Statements MUST consider each Anonymous Group distinct even if it has an identical set of members.
* Activity Providers SHOULD use an Identified Group when they wish to issue multiple statements, aggregate data 
or store and retrieve documents relating to a group.
* An Activity Provider MAY include a complete or partial list of Agents in the 'member' property of a given Anonymous or Identified Group.
* An LRS returning a statement MAY return the list of group members in any order.

###### Requirements for Anonymous Groups

* An Anonymous Group MUST include a 'member' property listing constituent Agents.
* An Anonymous Group MUST NOT contain Group Objects in the 'member' property.
* An Anonymous Group MUST NOT include any Inverse Functional Identifiers.

###### Requirements for Identified Groups

* An Identified Group MUST include exactly one (1) Inverse Functional Identifier.
* An Identified Group MUST NOT contain Group Objects in the 'member' property.
* An Identified Group SHOULD NOT use Inverse Functional Identifiers that are also used as Agent identifiers.
* An Identified Group MAY include a 'member' property listing constituent Agents.


<a name="inversefunctional">

##### 2.4.2.3 Inverse Functional Identifier
###### Description 
An Inverse Functional Identifier (IFI) is a value of an Agent or Identified
Group that is guaranteed to only ever refer to that Agent or Identified Group.

###### Rationale
Agents and Groups need to be uniquely identifiable in order for data to be stored and retrieved against them. 
In an xAPI Statement this is accomplished using Inverse Functional Identifiers which are loosely inspired 
on the widely accepted FOAF principle (see: <a href="http://xmlns.com/foaf/spec/#term_Agent"> Friend Of A Friend</a>).

###### Details

The table below lists all possible Inverse Functional Identifier properties.

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th></tr>
	<tr><td><a href="http://xmlns.com/foaf/spec/#term_mbox">mbox</a></td><td>mailto IRI</td><td>The required format is "mailto:email address". <br>
	Only email addresses that have only ever been and will ever be assigned to this Agent, 
but no others, SHOULD be used for this property and mbox_sha1sum.</td></tr>
	<tr><td><a href="http://xmlns.com/foaf/spec/#term_mbox_sha1sum">mbox_sha1sum</a></td><td>String</td><td>The SHA1 hash of a mailto IRI (i.e. the value of an mbox property). An LRS MAY include Agents with a matching hash when a request is based on an mbox.</td></tr>
	<tr><td>openid</td><td>URI</td><td>An openID that uniquely identifies the Agent.</td></tr>
	<tr><td>account</td><td><a href="#agentaccount">Object</a></td><td>A user account on an existing system e.g. an LMS or intranet.</td></tr>	
</table>

###### Client Requirements
* The domain portions of email addresses are case insensitive. Clients SHOULD uses lowercase for the domain portion of the email address when calculating the SHA1 hash
for the "mbox_sha1sum" property. 

<a name="agentaccount"/>

##### 2.4.2.4 Account Object

###### Description 

A user account on an existing system, such as a private system (LMS or intranet) or a public
system (social networking site).

###### Details

* If the system that provides the account Object uses OpenID, the Activity Provider
SHOULD use the openid property instead of an account Object.
* If the Activity Provider is concerned about revealing personally identifiable
information about an Agent or Group, it SHOULD use an opaque account name (for example an
account number) to identify all Statements about a person while maintaining anonymity.

The table below lists all properties of Account Objects.

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr><td>homePage</td><td>IRL</td><td>The canonical home page for the system the account is on. This is based on FOAF's accountServiceHomePage.</td>
	<td>Required</td></tr>
	<tr><td>name</td><td>String</td><td>The unique id or name used to log in to this account. This is based 
			on FOAF's accountName.</td><td>Required</td></tr>
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

#### 2.4.3 Verb

###### Description
The Verb defines the action between Actor and Activity. 

###### Rationale

The Verb in an xAPI Statement describes the action performed during the learning experience. The 
xAPI does not specify any particular Verbs. (With one exception, namely the reserved 
Verb <a href="#voided">'http://adlnet.gov/expapi/verbs/voided'</a>). Instead, it defines how to create Verbs so that 
communities of practice can establish Verbs meaningful to their members and make them available 
for use by anyone. A predefined list of Verbs would be limited by definition and might not be able to 
effectively capture all possible future learning experiences. 

###### Details

Verbs appear in Statements as Objects consisting of an IRI and a set of display names 
corresponding to multiple languages or dialects which provide human-readable meanings of the Verb. 
The table below lists all properties of the Verb Object.

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>id</td>
		<td>IRI</td>
		<td>Corresponds to a Verb definition. Each Verb definition 
			corresponds to the meaning of a Verb, not the word. 
		</td>
		<td>Required</td>
	</tr>
	<tr>
		<td>display</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>The human readable representation of the 
			Verb in one or more languages. This does not have any impact on the 
			meaning of the Statement, but serves to give a human-readable 
			display of the meaning already determined by the chosen Verb.</td>
		<td>Recommended</td>
	</tr>
</table>

###### Verb Id Requirements

* A system reading a Statement MUST use the Verb IRI to infer meaning.
* The IRI contained in an id SHOULD contain a human-readable portion which SHOULD provide meaning enough 
for a person reviewing the raw statement to disambiguate the Verb from other similar(in syntax) Verbs.
* A single Verb IRI MUST NOT be used to refer to multiple meanings.

###### Verb Display AP Requirements
* The Display property SHOULD be used by all Statements.
* The Display property MUST be used to illustrate the meaning which is already determined by the Verb IRI.

###### Verb Display LRS Requirements
The requirements below relate to the Display property as returned by the LRS via the API.  

* When queried for Statements with a Format of "exact", the LRS MUST return the Display property 
exactly as included (or omitted) within the Statement.
* When queried for Statements with a Format of "ids", the LRS SHOULD* NOT include the Display property.
* When queried for Statements with a Format of "canonical", the LRS SHOULD* return a canonical Display 
for that Verb. 
* The LRS may determine its canonical Display based on the Verb Display property included within 
Statements it receives, the Name property included in the metadata as described in 
[section 5.4 Identifier metadata](#miscmeta), or the Verb Display as defined in some other location.

###### Verb Display Client Requirements
The requirements below relate to the display property as displayed to a user either by the LRS or
another system. 

* The Display property MUST NOT be used to alter the meaning of a Verb.
* A system reading a Statement MUST NOT use the Display property to infer any meaning from the Statement.
* A system reading a Statement MUST NOT use the Display property for any purpose other than Display to a human.
Using the Display property for aggregation or categorization of Statements is an example of violating this requirement. 
* Systems displaying a Statement's Verb in a user interface MAY choose to render the Verb Display property included within the 
Statement, the Name property included in the metadata as described in [section 5.4 Identifier metadata](#miscmeta), or the 
Verb Display as defined in some other location.
* Systems displaying a Statement's Verb MUST NOT display a word that differs from the meaning of the Verb but 
MAY alter the wording and tense displayed for the purposes of human-readability. 

###### Example
This example shows a Verb with the recommended properties set and using US English and Spanish languages. 
```
{
    "id":"http://example.com/xapi/verbs#defenestrated", 
    "display":{
        "en-US":"defenestrated",
        "es" : "defenestrado" 
    } 
}
``` 

The Verb in the example above is included for illustrative purposes only. This is not intended to imply that
a Verb with this meaning has been defined with this id. This applies to all example verbs given in this 
specification document, with the exception of the reserved Verb <a href="#voided">'http://adlnet.gov/expapi/verbs/voided'</a>. 
			
##### 2.4.3.1 Use in Language and Semantics of Verbs

###### Details
_Semantics_

The IRI represented by the Verb Id identifies the particular semantics of a word, not the word itself. 

For example, the English word "fired" could mean different things depending on context, such as 
"fired(a weapon)", "fired(a kiln)", or "fired(an employee)". In this case, an IRI identifies one of 
these specific meanings. 

The display property has some flexibility in tense. While the human-readable portion of the Verb Id will 
usually use the past tense, if conjugating verbs to another tense within the display property makes most
sense for the statement as a whole, it is allowed.

_Language_

A Verb in the Experience API is an IRI, and denotes a specific meaning not tied to any particular language. 

For example, a particular Verb IRI such as http://example.org/firearms#fire might denote the action of firing a gun, 
or the Verb IRI http://example.com/فعل/خواندن might denote the action of reading a book. 


<a name="object"/>

####2.4.4 Object

###### Description

The Object of a Statement can be an Activity, Agent/Group, SubStatement, or Statement Reference. It is the "this" part of the 
Statement, i.e. "I did this". 

Some examples:

* The Object is an Activity: "Jeff wrote an essay about hiking."

* The Object is an Agent: "Nellie interviewed Jeff."

* The Object is a SubStatement or Statement Reference (different implementations, but similar when human-read): 
"Nellie commented on 'Jeff wrote an essay about hiking.'"

###### Details

Objects which are provided as a value for this property SHOULD include an "objectType" 
property. If not specified, the objectType is assumed to be "Activity". Other valid values 
are: <a href="#agentasobj">Agent</a>, <a href="#agentasobj">Group</a>, <a href="#substmt">SubStatement</a> or [StatementRef](#stmtref)</a>.
The properties of an Object change according to the objectType.

<a name="activity"/>

##### 2.4.4.1 When the ObjectType is Activity

###### Details

A Statement can represent an Activity as the Object of the Statement. The following table lists the Object 
properties in this case.

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>objectType</td>
		<td>String</td>
		<td>MUST be "Activity" when present</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td><a href="#acturi">id</a></td><td>IRI</td>
		<td>An identifier for a single unique Activity</td>
		<td>Required</td>
	</tr>
	<tr>
		<td><a href="#actdef">definition</a></td>
		<td>Object</td>
		<td>Metadata, <a href="#actdef">See below</a></td>
		<td>Optional</td>
	</tr>
</table>

If it were possible to use the same id for two different Activities, the validity of Statements about 
these Activities could be questioned. This means an LRS can't ever treat (references to) the same 
Activity id as belonging to two different Activities, even if it thinks this was intended. Namely, 
when a conflict with another system occurs, it’s not possible to determine which Activity is intended. 


###### <a name="actdef" />Activity Definition
The table below lists the properties of the Activity Definition Object:

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>name</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>The human readable/visual name of the Activity</td>
		<td>Recommended</td>
	</tr>
	<tr>
		<td>description</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>A description of the Activity</td>
		<td>Recommended</td>
	</tr>
	<tr>
		<a name="acttype"/>
		<td>type</td>
		<td>IRI</td>
		<td>The type of Activity.</td>
		<td>Recommended</td>
	</tr>
	<tr>
		<td>moreInfo</td>
		<td>IRL</td>
		<td>Resolves to a document with human-readable information about the Activity, 
		which could include a way to launch the activity.
		</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td colspan="4">Interaction properties, See: <a href="#interactionacts">Interaction Activities</a></td>
	</tr>
	<tr>
		<td>extensions</td>
		<td>Object</td>
		<td>A map of other properties as needed (see: <a href="#miscext">Extensions</a>)</td>
		<td>Optional</td>
	</tr>
</table>

__Note:__ IRI fragments (sometimes called relative IRLs) are not valid IRIs. As with Verbs, it is recommended that
Activity Providers look for and use established, widely adopted, Activity types.


###### <a name="acturi" />Activity Id Requirements

* An Activity id MUST be unique.
* An Activity id MUST always reference the same Activity.
* An Activity id SHOULD use a domain that the creator is authorized to use for this purpose.
* An Activity id SHOULD be created according to a scheme that makes sure all Activity ids within 
that domain remain unique.
* An Activity id MAY point to metadata or the IRL for the Activity.

###### LRS Requirements

* An LRS MUST NOT take action in the event it perceives an activity id is being used by multiple 
authors and/or organizations.
* An LRS MUST NOT treat references to the same id as references to different Activities.
* Upon receiving a Statement with an Activity Definition that differs from the one stored, an LRS
SHOULD decide whether it considers the Activity Provider to have the authority to change the definition and
SHOULD update the stored Activity Definition accordingly if that decision is positive.
* An LRS MAY make small corrections to its canonical definition for the Activity when receiving a new definition e.g. to fix a spelling.
* An LRS SHOULD NOT make significant changes to its canonical definition for the Activity based on an updated definition 
e.g. changes to correct responses.


###### Activity Provider Requirements

* An Activity Provider MUST ensure that Activity ids are not reused across multiple Activities.
* An Activity Provider MUST only generate states or Statements against a certain Activity id that are compatible
and consistent with states or Statements previously stored against the same id.
* An Activity Provider MUST NOT allow new versions (i.e. revisions or other platforms) of the Activity 
to break compatibility.	



<a name="interactionacts"/>

##### Interaction Activities  

###### Rationale

Traditional e-learning has included structures for interactions or assessments. As a way to allow these practices and
structures to extend Experience API's utility, this specification includes built-in definitions for interactions, which
borrows from the SCORM 2004 4th Edition Data Model. These definitions are intended to provide a simple and familiar utility
for recording interaction data. Since 1.0.3, direct references to the SCORM data model have started to be removed, and any
associated requirements included directly in this document.

These interaction definitions are simple to use, and consequently limited. It is expected that communities of practice
requiring richer interactions definitions will do so through the use of Activity Types and Activity Definition Extensions. 

###### Details

The table below lists the properties for Interaction Activities.

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>interactionType</td>
		<td>String</td>
		<td>The type of interaction. Possible values are: “true-false”, “choice”, “fill-in”, “long-fill-in”,
		“matching”, “performance”, “sequencing”, “likert”, “numeric” or “other”. </td>
		<td>Required</td>
	</tr>
	<tr>
		<td>correctResponsesPattern</td>
		<td>An array of strings</td>
		<td>A pattern representing the correct response to the interaction. The structure of this pattern varies
		depending on the interactionType. This is detailed below. </td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>choices | scale | source | target | steps</td>
		<td>Array of interaction components</td>
		<td>Specific to the given interactionType (<a href="#interactionComponentLists">see below</a>).</td>
		<td>Optional</td>
	</tr>
</table>  

###### Interaction Types
The table below describes the kinds of interactions represented by each of the interactionTypes. These types of interactions were originally 
based on the types of interactions allowed for "cmi.interactions.n.type" in the SCORM 2004 4th Edition Run-Time Environment.
See [Appendix C](#Appendix2C) for examples definitions for each interaction type. 

<table>
	<tr><th>interactionType</th><th>Description</th></tr>
	<tr>
		<td>true-false</td>
		<td>An interaction with two possible responses: true or false.</td>
	</tr>
	<tr>
		<td>choice</td>
		<td>An interaction with a number of possible choices from which the learner can select. 
			This includes interactions in which the learner can select only one answer from the list and
			those where the learner can select multiple items.</td>
	</tr>
	<tr>
		<td>fill-in</td>
		<td>An interaction which requires the learner to supply a short response in the form of one or more 
			strings of characters. Typically, the correct response consists of part of a word, one word or a few words. 
			'Short' means that the correct responses pattern and learner response strings will normally be 250 characters or less;
		</td>
	</tr>
	<tr>
		<td>long-fill-in</td>
		<td>An interaction which requires the learner to supply a response in the form of a long string of characters.
			'Long' means that the correct responses pattern and learner response strings will normally be more than 250 characters.
		</td>
	</tr>
	<tr>
		<td>matching</td>
		<td>An interaction where the learner is asked to match items in one set (the source set) to items in another set (the target set).
			Items do not have to pair off exactly and it's possible for multiple or zero source items to be matched to a given target and vice versa.</td>
	</tr>
	<tr>
		<td>performance</td>
		<td>An interaction that requires the learner to perform a task that requires multiple steps.</td>
	</tr>
	<tr>
		<td>sequencing</td>
		<td>An interaction where the learner is asked to order items in a set.</td>
	</tr>
	<tr>
		<td>likert</td>
		<td>An interaction which asks the learner to select from a discrete set of choices on a scale</td>
	</tr>
	<tr>
		<td>numeric</td>
		<td>Any interaction which requires a numeric response from the learner.</td>
	</tr>
	<tr>
		<td>other</td>
		<td>Another type of interaction that does not fit into those defined above.</td>
	</tr>
</table>

###### Response Patterns
The table below outlines the format of the strings within correctResponsesPattern property for each interaction type. 
This format is also used to represent the learner's response within the result object. These formats were originally based on the 
requirements relating to "cmi.interactions.n.correct_responses.n.pattern" as defined in the SCORM 2004 4th Edition 
Run-Time Environment. See [Appendix C](#Appendix2C) for examples of each format. 

<table>
	<tr><th>interactionType</th><th>Format</th></tr>
	<tr>
		<td>true-false</td>
		<td>Either <code>true</code> or <code>false</code></td>
	</tr>
	<tr>
		<td>choice</td>
		<td>A list of item ids delimited by <code>[,]</code>. If the response contains only one item, the delimiter MUST not be used.</td>
	</tr>
	<tr>
		<td>fill-in and long-fill-in</td>
		<td>A list of responses delimited by <code>[,]</code>. If the response contains only one item, the delimiter MUST not be used.</td>
	</tr>
	<tr>
		<td>matching</td>
		<td>A list of matching pairs, where each  pair consists of a source item id followed by a target item id. 
			Items can appear in multiple (or zero) pairs.
			Items within a pair are delimited by <code>[.]</code>. Pairs are delimited by <code>[,]</code>.
		</td>
	</tr>
	<tr>
		<td>performance</td>
		<td>
			A list of steps containing a step ids and the response to that step.
			Step ids are separated from responses by <code>[.]</code>. Steps are delimited by <code>[,]</code>.
			The response can be a string as in a fill-in interaction or a number range as in a numeric interaction. 
		</td>
	</tr>
	<tr>
		<td>sequencing</td>
		<td>An ordered list of item ids delimited by <code>[,]</code>.</td>
	</tr>
	<tr>
		<td>likert</td>
		<td>A single item id</td>
	</tr>
	<tr>
		<td>numeric</td>
		<td>A range of numbers represented by a minimum and a maximum delimited by <code>[:]</code>. 
			Where the range does not have a maximum or does not have a minimum, that number is omitted but the delimiter is
			still used. E.g. `"[:]4"` indicates a maximum for 4 and no minimum. 
			Where the correct response or learner's response is a single number rather than a range, the single number
			with no delimiter MAY be used. 
		</td>
	</tr>
	<tr>
		<td>other</td>
		<td>Any format is valid within this string as appropriate for the type of interaction.</td>
	</tr>
</table>

###### Correct Responses Pattern
The Correct Responses Pattern contains an array of response patterns. A learner's response will be considered correct if it matches
**any** of the response patterns in that array. Where a response pattern is a delimited list, the learner's response is only considered correct
if **all** of the items in that list match the learner's response. For example, consider the Correct Response Pattern with a value of:

```
"correctResponsesPattern": [
    "foo[,]bar",
    "foo"
]
``` 

In this example, `foo[,]bar` and  `foo` are correct learner responses; `bar` is not.

The Correct Responses Pattern, if used, is intended to be an exhaustive list of possible correct responses. Where the criteria for a question are complex and correct responses cannot be exhaustively listed, Activity Providers are discouraged from using the "correct responses pattern" property.

Systems reading statements cannot infer success based on comparison of the Response with the Correct Responses Pattern, nor can they rely on the Correct Responses Pattern always being exhaustive. The Activity Provider is allowed to mark questions as correct where the response does not match the correct responses pattern, though this is discouraged except in exceptional circumstances.

Where the Correct Response Pattern contains an empty array, the meaning of this is that there is no correct
answer; all answers are incorrect. Where any answer is correct (e.g. in a survey), the Correct Response Pattern property
is omitted. 

###### Characterstring parameters
Some of the values within the responses described above can be prepended with certain additional parameters. These were originally based on the characterstring
delimiters defined in the SCORM 2004 4th Edition Run-Time Environment. These parameters are represented by the format `{parameter=value}`.
See [the long-fill-in example within Appendix C](#long-fill-in). 

Characterstring parameters are not validated by the LRS. Systems interpreting statement data can use their best judgement in interpreting (or ignoring) invalid characterstring parameters and values.

The following parameters are valid at the start of the string representing the list of items for the listed interaction types:
<table>
	<tr><th>Parameter</th><th>Default</th><th>Description</th><th>Value</th><th>Interaction types</th></tr>
	<tr>
		<td>case_matters</td>
		<td>false</td>
		<td>Whether or not the case of items in the list matters.</td>
		<td><code>true</code> or <code>false</code></td>
		<td>fill-in, long-fill-in</td>
	</tr>
	<tr>
		<td>order_matters</td>
		<td>true</td>
		<td>Whether or not the order of items in the list matters.</td>
		<td><code>true</code> or <code>false</code></td>
		<td>fill-in, long-fill-in, performance</td>
	</tr>
</table>

The following parameters are valid at the start of each item in the list for the listed interaction types:
<table>
	<tr><th>Parameter</th><th>Description</th><th>Value</th><th>Interaction types</th></tr>
	<tr>
		<td><code>lang</code></td>
		<td>The language used within the item.</td>
		<td><a href="http://tools.ietf.org/html/rfc5646">RFC 5646 Language Tag</a></td>
		<td>fill-in, long-fill-in, performance (string responses only)</td>
	</tr>
</table>


###### Requirements

* Interaction Activities MUST have a valid interactionType.
* Interaction Activities SHOULD have the Activity type "http://adlnet.gov/expapi/activities/cmi.interaction".
* An LRS, upon consuming a valid interactionType, MAY validate the remaining properties as specified for Interaction Activities 
and MAY return HTTP 400 "Bad Request" if the remaining properties are not valid for the Interaction Activity.
* The LRS SHOULD* NOT enforce character limits relating to response patterns. 
* The LRS SHOULD* NOT limit the length of the correctResponsesPattern array for any interactionType. 


##### Interaction Components  

###### Details

Interaction components are defined as follows:  

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>id</td>
		<td>String</td>
		<td>Identifies the interaction component within the list.</td>
        <td>Required</td>
	<tr>
		<td>description</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>A description of the interaction component 
			(for example, the text for a given choice in a multiple-choice interaction)</td>
		<td>Optional</td>
	</tr>
</table>

<a name="#interactionComponentLists"/>

Depending on Interaction Type, Interaction Activities can take additional properties, each containing a 
list of interaction components. These additional properties are called ‘interaction component lists’. The following table
shows the supported interaction component list(s) for an Interaction Activity with the given interactionType.

<table>
	<tr><th>interactionType</th><th>supported interaction component list(s)</th><th>Description</th><tr>
	<tr><td>choice, sequencing</td><td>choices</td>
	<td>A list of the options available in the interaction for selection or ordering.</td></tr>
	<tr><td>likert</td><td>scale</td>
	<td>A list of the options on the likert scale.</td></tr>
	<tr><td>matching</td><td>source, target</td>
	<td>Lists of sources and targets to be matched.</td></tr>
	<tr><td>performance</td><td>steps</td>
	<td>A list of the elements making up the performance interaction.</td></tr>
	<tr><td>true-false, fill-in, long-fill-in, numeric, other</td><td>[No component lists defined]</td><td></td></tr>
</table>


###### Requirements

* Within an array of interaction components, all id values MUST be distinct.
* An interaction component's id value SHOULD NOT have whitespace.

###### Examples

See [Appendix C](#Appendix2C) for examples of Activity Definitions for each of the cmi.interaction types.

<a name="agentasobj"/>

##### 2.4.4.2 When the "Object" is an Agent or a Group

###### Requirements

* Statements that specify an Agent or Group as an Object MUST specify an 'objectType' property. 

See [Actor](#actor) for details regarding Agents.  

<a name="stmtasobj"/>

##### 2.4.4.3 When the "Object" is a Statement

###### Rationale

There are two possibilities for using a Statement as an Object.  First, an Object can take on the form 
of a Statement that already exists by using a Statement Reference. A common use case for 
Statement References is grading or commenting on an experience that could be tracked as an 
independent event.  The special case of voiding a Statement would also use a Statement Reference.
Second, an Object can be a brand new Statement by using a SubStatement. Each type is defined below.

<a name="stmtref"/>

##### Statement References

###### Description
A Statement Reference is a pointer to another pre-existing Statement.

###### Requirements

* A Statement Reference MUST specify an "objectType" property with the value "StatementRef".
* A Statement Reference MUST set the "id" property to the UUID of a Statement. There is no requirement for 
the LRS to validate that the UUID matches a Statement that exists.

The table below lists all properties of a Statement Reference Object:

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr><td>objectType</td><td>String</td><td>In this case, MUST be "StatementRef".</td><td>Required</td></tr>
	<tr><td>id</td><td>UUID</td><td>The UUID of a Statement. 
	</td><td>Required</td></tr>
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

##### SubStatements

###### Description
A SubStatement is like a Statement included as part of a containing Statement, but does not represent an event that has occurred (unlike a Statement). It can be used to describe, for example, a pattern of a potential future Statement, or the behavior a teacher looked for when evaluating a student (without representing the student actually doing that behavior). 

###### Requirements

* A SubStatement MUST specify an "objectType" property with the value "SubStatement".
* A SubStatement MUST be validated as a Statement in addition to other SubStatement requirements.
* A SubStatement MUST NOT have the "id", "stored", "version" or "authority" properties.
* A SubStatement MUST NOT contain a SubStatement of its own, i.e., cannot be nested.

###### Example

One interesting use of SubStatements is in creating Statements of intention. 
For example, using SubStatements we can create Statements of the form 
`"<I> <planned> (<I> <did> <this>)"`  to indicate that we've planned to take some 
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
			"objectType": "Activity",
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

#### 2.4.5 Result

###### Description
An optional property that represents a measured outcome related to the Statement in which it is included.

###### Details
The following table contains the properties of the Results Object.

<table border="1">
<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<td>score</td>
	<td>Object</td>
	<td>The score of the Agent in relation to the success or quality of the experience. 
	<a href ="#Score">See: Score</a></td>
	<td>Optional</td>
</tr>
<tr>
	<td>success</td>
	<td>Boolean</td>
	<td>Indicates whether or not the attempt on the Activity was successful.</td>
	<td>Optional</td>
</tr>
<tr>
	<td>completion</td>
	<td>Boolean</td>
	<td>Indicates whether or not the Activity was completed.</td>
	<td>Optional</td>
</tr>
<tr>
	<td>response</td>
	<td>String</td>
	<td>A response appropriately formatted for the given Activity.</td>
	<td>Optional</td>
</tr>
<tr>
	<td>duration</td>
	<td><a href="#durations">Duration</a></td>
	<td>Period of time over which the Statement occurred.</td>
	<td>Optional</td>
</tr>
<tr>
	<td>extensions</td>
	<td>Object</td>
	<td>A map of other properties as needed.
	<a href="#miscext">See: Extensions</a></td>
	<td>Optional</td>
</tr>
</table> 

<a name="Score"/>

##### 2.4.5.1 Score

###### Description
An optional property that represents the outcome of a graded Activity achieved by an Agent.

###### Details

The table below defines the Score Object. 

<table border ="1">
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>scaled</td>
		<td>Decimal number between -1 and 1, inclusive</td>
		<td>The score related to the experience as modified by scaling and/or normalization. 
		</td>
		<td>Recommended</td>
	</tr>
	<tr>
		<td>raw</td>
		<td>Decimal number between min and max (if present, otherwise unrestricted), inclusive</td>
		<td>The score achieved by the actor in the experience described by the statement. This is not modified by
		any scaling or normalization.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>min</td>
		<td>Decimal number less than max (if present)</td>
		<td>The lowest possible score for the experience described by the statement.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>max</td>
		<td>Decimal number greater than min (if present)</td>
		<td>The highest possible score for the experience described by the statement.</td>
		<td>Optional</td>
	</tr>
</table>

The properties of the Score Object are based on the corresponding properties of cmi.score as defined in SCORM 2004 
4th Edition. The "scaled" and "raw" properties do not necessarily relate directly as scaling and normalization can
be applied differently by Activity Providers within different Communities of Practice. Scaling and normalization are 
outside the scope of this specification.

###### Requirements

* The Score Object SHOULD include 'scaled' if a logical percent based score is known.
* The Score Object SHOULD NOT be used for scores relating to progress or completion.  Consider using an extension
from an extension profile instead.


<a name="context"/>

#### 2.4.6 Context

###### Description 
An optional property that provides a place to add contextual information to a Statement. All properties are optional.

###### Rationale 
The Context property provides a place to add some contextual information to a Statement. It can store information such 
as the instructor for an experience, if this experience happened as part of a team Activity, or how an experience fits 
into some broader activity.

###### Details

The following table contains the properties of the Context Object.

<table border="1">
<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
<tr>
	<td>registration</td>
	<td>UUID</td>
	<td>The registration that the Statement is associated with.</td>
	<td>Optional</td>
</tr>
<tr>
	<td>instructor</td>
	<td>Agent (MAY be a Group)</td>
	<td>Instructor that the Statement relates to, if not included as the Actor of the Statement.</td>
	<td>Optional</td>
</tr>
<tr>
	<td>team</td>
	<td>Group</td>
	<td>Team that this Statement relates to, if not included as the Actor of the Statement.</td>
	<td>Optional</td>
</tr>
<tr>
	<td>contextActivities</td>
	<td>contextActivities Object</td>
	<td>A map of the types of learning activity context that this Statement is related to.
	Valid context types are: "parent", "grouping", "category" and "other".</td> 
	<td>Optional</td>
</tr>
<tr>
	<td>revision</td>
	<td>String</td>
	<td>Revision of the learning activity associated with this Statement. Format is free.
	<td>Optional</td>
</tr>
<tr>
	<td>platform</td>
	<td>String</td>
	<td>Platform used in the experience of this learning activity. </td>
	<td>Optional</td>
</tr>
<tr>
	<td>language</td>
	<td>String (as defined in <a href="http://tools.ietf.org/html/rfc5646">RFC 5646</a>)</td>
	<td>Code representing the language in which the experience being recorded in this 
	Statement (mainly) occurred in, if applicable and known.
	</td>
	<td>Optional</td>
</tr>
<tr>
	<td>statement</td>
	<td><a href="#stmtref">Statement Reference</a></td>
	<td>Another Statement to be considered as context for this Statement. </td>
	<td>Optional</td>
</tr>
<tr>
	<td>extensions</td>
	<td>Object</td>
	<td>A map of any other domain-specific context relevant to this Statement. For example, 
	in a flight simulator altitude, airspeed, wind, attitude, GPS coordinates might all be 
	relevant (<a href="#miscext">See Extensions</a>)</td>
	<td>Optional</td>
</tr>

</table>

###### Requirements

* The revision property MUST only be used if the Statement's Object is an Activity.
* The platform property MUST only be used if the Statement's Object is an Activity.
* The language property MUST NOT be used if not applicable or unknown.
* The revision property SHOULD be used to track fixes of minor issues (like a spelling error).
* The revision property SHOULD NOT be used if there is a major change in learning objectives, pedagogy, 
or assets of an Activity. (Use a new Activity id instead).

__Note:__ Revision has no behavioral implications within the scope of xAPI. It is simply stored
so that it is available for systems interpreting and displaying data.

<a name="Registration"/>

##### 2.4.6.1 Registration Property

###### Description
An instance of a learner undertaking a particular learning activity.

###### Details
When an LRS is an integral part of an LMS, the LMS likely supports the concept of registration. 
The Experience API applies the concept of registration more broadly.  A registration could be 
considered to be an attempt, a session, or could span multiple Activities. There is no expectation that 
completing an Activity ends a registration. Nor is a registration necessarily confined to a single Agent.

The Registration is also used when storing documents within the State resource, e.g. for 
bookmarking. Normally the same Registration is used for requests to both the Statement and 
State resources relating to the same learning experience so that all data recorded for the experience is consistent. 

<a name="contextActivities"/>

##### 2.4.6.2 ContextActivities Property

###### Description
A map of the types of learning activity context that this Statement is related to.

###### Rationale
Many Statements do not just involve one Object Activity that is the focus,
but relate to other contextually relevant Activities. "Context Activities" allow for 
these related Activities to be represented in a structured manner.

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
tracked using the cmi5 profile. The Statement's Activity refers
to the exam, and the category is the cmi5 profile.

5. __Other__: a context Activity that doesn't fit one of the other properties.
For example: Anna studies a textbook for a biology exam. The Statement's
Activity refers to the textbook, and the exam is a context Activity of type "other".

Single Activity Objects are allowed as values so that 0.95 Statements will be compatible with 1.0.0.

__Note:__ The values in this section are not for expressing all the relationships the Statement Object has.
Instead, they are for expressing relationships appropriate for the specific Statement
(though the nature of the Object will often be important in determining that).
For instance, it is appropriate in a Statement about a test to include the course
the test is part of as parent, but not to include every possible degree
program the course could be part of in the grouping value.

###### Requirements
* Every key in the contextActivities Object MUST be one of parent, grouping, category, or other.
* Every value in the contextActivities Object MUST be either a single Activity Object or an array of Activity Objects.
* The LRS MUST return every value in the contextActivities Object as an array, even if it arrived
as a single Activity Object.
* The LRS MUST return single Activity Objects as an array of length one containing the same Activity.
* The Client SHOULD ensure that every value in the contextActivities Object is an array of Activity Objects 
instead of a single Activity Object.

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
    "parent" : [
        {
            "id" : "http://example.adlnet.gov/xapi/example/test1"
        }
    ],
    "grouping" : [
        {
            "id" : "http://example.adlnet.gov/xapi/example/Algebra1"
        }
    ]
}
```

<a name="timestamp"/>

#### 2.4.7 Timestamp

###### Description
The time at which the experience occurred.

###### Details

The timestamp property is of type [Timestamp](#timestamps). It is formatted according to the normal format of ISO 8601 and 
corresponds to the time of when the events described within this Statement occurred. If it is not included in the Statement 
when it is submitted to the LRS, the LRS populates it with the same value it would use with [Stored](#stored).

The timestamp property in a Statement can differ from the [stored property](#stored) (the time at which the statement is 
stored). Namely, there can be delays between the occurrence of the experience and the reception of the corresponding 
Statement by the LRS. 

Where the experience occurs over a period of time, the timestamp property can represent the start, end or any point of time 
during the experience. It is expected that communities of practice will define an appropriate point to record the 
Timestamp for different experiences. For example when recording the experience of eating at a restaurant, it might 
be most appropriate to record the Timestamp of the start of the experience; when recording the experience of 
completing a qualification, it might be most appropriate to record the Timestamp of the end of the experience.
These examples are for illustrative purposes only and are not meant to be prescriptive.

###### Requirements

* For requirements pertaining to the Timestamp data type, see [Part 3: Timestamps](#timestamps).
* The timestamp property SHOULD* be set by the LRS to the value of the [stored property](#stored) if not provided.
* A timestamp property MAY represent any point during an experience, not necessarily the beginning or end. 
* An AP MUST NOT use a future time for a timestamp property in a Statement.
* A SubStatement MAY have a timestamp property that is in the future.
* An LRS SHOULD* NOT reject a timestamp for having a greater value than the current time, to prevent issues due to 
clock errors.

<a name="stored"/> 

#### 2.4.8 Stored

###### Description 
The time at which a Statement is stored by the LRS. This can be any time between when the LRS receives the Statement and 
when it is written to storage. 

###### Details 
The stored property is of type [Timestamp](#timestamps). The stored property is the literal time the Statement was stored. 
Used to record the time at which the experience described in the Statement.

###### Requirements

* For requirements pertaining to the Timestamp data type, see [ISO 8601 Timestamps](#timestamps) below.
* The stored property MUST be set by the LRS; An LRS MUST validate and then overwrite any value currently in the 
stored property of a Statement it receives.
* The stored property SHOULD be the current or a past time.

<a name="authority"/> 

#### 2.4.9 Authority

###### Description
The authority property provides information about whom or what has asserted that 
this Statement is true. 

###### Details
The asserting authority represents the authenticating user or some system or application.

###### Requirements
* Authority MUST be an Agent, except in 3-legged OAuth, where it MUST be a Group with two Agents. 
The two Agents represent an application and user together.
* The LRS MUST include the user as an Agent as the entire authority if a user connects 
directly (using HTTP Basic Authentication) or is included as part of a Group. 
* The LRS MUST ensure that all Statements stored have an authority.
* The LRS SHOULD overwrite the authority on all Statements it stores,
based on the credentials used to send those Statements.
* The LRS MAY leave the submitted authority unchanged but SHOULD do so only 
where a strong trust relationship has been established, and with extreme caution.
* The LRS MAY identify the user with any of the legal identifying properties if 
a user connects directly (using HTTP Basic Authentication) or a part of 3-legged OAuth. 


##### OAuth Credentials as Authority 

###### Description
This is a workflow for use of OAuth.  2-legged and 3-legged OAuth are both supported.

###### Details
This workflow assumes a Statement is stored using a validated OAuth connection and the LRS 
creates or modifies the authority property of the Statement.

In a 3-legged OAuth workflow, authentication involves both an OAuth consumer and a user of the 
OAuth service provider. For instance, requests made by an authorized Twitter plug-in on their 
Facebook account will include credentials that are specific not only to Twitter as a Client application, 
or them as a user, but the unique combination of both.

###### Requirements
* The authority MUST contain an Agent Object that represents the OAuth consumer, either by itself, or 
as part of a group in the case of 3-legged OAuth.
* The Agent representing the OAuth consumer MUST be identified by account.
* The Agent representing the OAuth consumer MUST use the consumer key as the value of the Account "name” property.
* If the Agent representing the OAuth consumer is a registered application, the token request endpoint 
MUST be used as the account homePage.
* If the Agent representing the OAuth consumer is not a registered application, the temporary  
credentials endpoint MUST be used as the Account "homePage".
* An LRS MUST NOT trust the application portion of the authority in the event the account name is from 
the same source as the unregistered application. (Multiple unregistered applications could choose the same consumer key. 
As a result, there is no consistent way to verify this combination of temporary credentials and 
the account name.) 
* Each unregistered consumer SHOULD use a unique consumer key.

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

#### 2.4.10 Version
###### Description
Version information in Statements helps systems that process data from an LRS get their bearings. Since
the Statement data model is guaranteed consistent through all 1.0.x versions, in order to support data
flow among such LRSs the LRS is given some flexibility on Statement versions that are accepted.

###### Requirements
* Version MUST be formatted as laid out for the API version header in [Versioning](#versioning)

###### LRS Requirements
* An LRS MUST accept all Statements where their version starts with "1.0." if they otherwise validate.
* An LRS MUST reject all Statements with a version specified that does not start with "1.0.".
* Statements returned by an LRS MUST retain the version they are accepted with. If they
lack a version, the version MUST be set to 1.0.0.


###### Client Requirements
* If Clients set the Statement version, they MUST set it to 1.0.0.
* Clients SHOULD NOT set the Statement version.


<a name="attachments"/>
#### 2.4.11 Attachments

###### Description
A digital artifact providing evidence of a learning experience.

###### Rationale 
In some cases an attachment is logically an important part of a learning record. Think of a simulated 
communication with ATC, an essay, a video, etc. Another example of such an attachment is (the image of) a 
certificate that was granted as a result of an experience. It is useful to have a way to store these attachments 
in and retrieve them from an LRS. In the case of wanting to include an attachment(s) for a SubStatement, we strongly recommend including the attachment(s) in the Statement Attachment object and including the payloads as you would normally for a Statement.

###### Details
The table below lists all properties of the Attachment object.
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th><th>Corresponding request parameter</th></tr>
	<tr>
		<a name="attachmentUsage" />

		<td>usageType</td>
		<td>IRI</td>
		<td>Identifies the usage of this attachment. For example: one expected use case
		for attachments is to include a "completion certificate". A type IRI corresponding
		to this usage MUST be coined, and used with completion certificate attachments.</td>
		<td>Required</td>
		<td></td>
	</tr>
	<tr>
		<td>display</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>Display name (title) of this attachment.</td>
		<td>Required</td>
		<td></td>
	</tr>
	<tr>
		<td>description</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>A description of the attachment</td>
		<td>Optional</td>
		<td></td>
	</tr>
	<tr>
		<td>contentType</td>
		<td><a href="https://www.ietf.org/rfc/rfc2046.txt?number=2046">Internet Media Type</a></td>
		<td>The content type of the attachment.</td>
		<td>Required</td>
		<td>Content-Type</td>
	</tr>
	<tr>
		<td>length</td>
		<td>Integer</td>
		<td>The length of the attachment data in octets.</td>
		<td>Required</td>
		<td>Content-Length</td>
	</tr>
	<tr>
		<td>sha2</td>
		<td>String</td>
		<td>The SHA-2 hash of the attachment data. <br/>
		This property is always required, even if "fileURL" is also specified. 
		</td>
		<td>Required</td>
		<td>X-Experience-API-Hash</td>
	</tr>
	<tr>
		<td>fileUrl</td>
		<td>IRL</td>
		<td>An IRL at which the attachment data can be retrieved, or from which it used 
		to be retrievable. </td>
        <td>Optional</td>
		<td></td>
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

###### Requirements for Attachment Statement Batches

A Statement batch, Statement results, or single Statement that includes attachments MUST satisfy one of the 
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
when requested by the Client (see Section [7.3 "Statement Resource"](#stmtapi)).
* An LRS MUST NOT pull Statements from another LRS without requesting attachments.
* An LRS MUST NOT push Statements into another LRS without including attachment data
received, if any, for those attachments.
* When receiving a PUT or POST with a document type of "application/json”, an LRS MUST accept batches 
of Statements which contain no attachment Objects.
* When receiving a PUT or POST with a document type of "application/json”, an LRS MUST accept batches 
of Statements which contain only attachment Objects with a populated fileUrl.
* When receiving a PUT or POST with a document type of "multipart/mixed”, an LRS MUST accept batches of 
Statements that contain attachments in the Transmission Format described above.
* When receiving a PUT or POST with a document type of "multipart/mixed”, an LRS MUST reject batches of 
Statements having attachments that neither contain a fileUrl nor match a received attachment part based on their hash.
* When receiving a PUT or POST with a document type of "multipart/mixed”, an LRS SHOULD assume a 
Content-Transfer-Encoding of binary for attachment parts.
* An LRS MAY reject (batches of) Statements that are larger than the LRS is configured to allow.


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

Don't forget the `<CRLF>`  when building or parsing these messages.

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

<a name="retrieval"/> 
### 2.5 Retrieval of Statements

###### Description
A collection of Statements can be retrieved by performing a query on the "statements" 
endpoint, see [Statement Resource](#stmtapi) for details. 

###### Details
The following table shows the data structure for the results of queries on the Statement Resource.
<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr><td>statements</td><td>Array of Statements</td>
		<td>List of Statements. If the list returned has been limited (due to pagination), 
			and there are more results, they will be located at the "statements" property 
			within the container located at the IRL provided by the "more" element of 
			this Statement result Object.
			
			Where no matching statements are found, this property will contain an empty array.
		</td>
		<td>Required</td>
	</tr>
	<tr><td>more</td><td>IRL</td>
		<td>Relative IRL that can be used to fetch more results, including the full path 
			and optionally a query string but excluding scheme, host, and port. 
			Empty string if there are no more results to fetch.
		</td>
		<td>Required if the list returned has been limited, otherwise optional.</td>
	</tr>
</table>

###### Requirements

* The IRL retrieved from the more property MUST be usable for at least 24 hours after it is returned by the LRS. 
* An LRS MAY include all necessary information within the more property IRL to continue the query to avoid the 
need to store IRLs and associated query data.
* An LRS SHOULD NOT generate extremely long IRLs within the more property.
* An LRS MAY re-run the query at the point in time that the IRL retrieved from the more property is accessed such
that the batch retrieved includes statements which would have been included in that batch if present in the LRS at 
the time the original query was run and excludes statements from that batch which have since been voided. 
* Alternatively, an LRS MAY cache a list of statements to be returned at the more property such that the batch of statements
returned matches those statements that would have been returned when the original query was run. 
* An LRS MAY remove voided statements from the cached list of statements if using this method. 
* The consumer SHOULD NOT attempt to interpret any meaning from the IRL returned from the more property.

<a name="signature"/>
### 2.6 Signed Statements

##### Description
A Statement can include a <a href="https://en.wikipedia.org/wiki/Digital_signature">
digital signature</a> to provide strong and durable evidence of the authenticity and
integrity of the Statement.

##### Rationale
Some Statements will have regulatory or legal significance, or otherwise require strong
and durable evidence of their authenticity and integrity. It might be necessary to verify
these Statements without trusting the system they were first recorded in, or perhaps
without access to that system. Digital signatures will enable a third-party system
to validate such Statements.

##### Details
Signed Statements include a JSON web signature (JWS) as an attachment. This allows
the original serialization of the Statement to be included along with the signature.
For interoperability, the "RSA + SHA" series of JWS algorithms have been selected, and
for discoverability of the signer X.509 certificates SHOULD be used.

##### Signature Requirements
* A Signed Statement MUST include a JSON web signature (JWS) as defined here:
http://tools.ietf.org/html/draft-ietf-jose-json-web-signature, as an attachment with a usageType
of "http://adlnet.gov/expapi/attachments/signature" and a contentType of "application/octet-stream".
* JWS Compact Serialization SHOULD* be used to create the JSON web signature. Use of JWS JSON Serialization is 
strongly discouraged, is unlikely to be interoperble with other systems, and will be forbidden in a future version
of this specification. 
* The JWS signature MUST have a payload of a valid JSON serialization of the complete Statement, minus signature.
* The JWS signature MUST use an algorithm of "RS256","RS384", or "RS512".
* The JWS signature SHOULD have been created based on the private key associated with an
X.509 certificate.
* If X.509 was used to sign, the JWS header SHOULD include the "x5c" property containing
the associated certificate chain.

##### LRS Requirements
* The LRS MUST reject requests to store Statements that contain malformed signatures, with HTTP 400.
* The LRS SHOULD include a message in the response of a rejected statement. 
* In order to verify signatures are well formed, the LRS MUST do the following:
    * Decode the JWS signature, and load the signed serialization of the Statement from the
      JWS signature payload.
    * Validate that the "original" Statement is logically equivalent to the received Statement. 
    See [Statement comparision requirements](statement-comparision-requirements).
    * If the JWS header includes an X.509 certificate, validate the signature against that
    certificate as defined in JWS.
    * Validate that the Signature Requirements outlined above have been met. 

__Note:__ The step of validating against the included X.509 certificate is intended as a
way to catch mistakes in the signature, not as a security measure. The steps to authenticate
a signed Statement will vary based on the degree of certainty required and are outside
the scope of this specification.

##### Client Requirements
* Clients MUST follow the Signature Requirements outlined above.
* Clients MUST NOT assume a signature is valid simply because an LRS has accepted it.

##### Example
See <a href="#Appendix2D">Appendix D: Example Signed Statement</a> for an example.



<a name="metadata"/>

## 3.0 Metadata

Metadata is additional information about the resource. It enables decision making, search, and discoverability  within systems.  In xAPI, metadata can be utilized in a variety of locations. The most common is within 
[Activity Definitions](#actdef).

<a name="iri-requirements"/>
### 3.1 IRI Requirements

xAPI uses IRIs for identifiers. Using IRIs ensures uniqueness and promotes resolvability. The LRS and Activity 
Provider each have responsibilities in regard to each IRI as outlined below. Activity Definitions have additional  rules which can be found in [this section](#actdef).

<a name="miscmeta"/>

### 3.2 Hosted Metadata

##### Description
Additional information about an identifier can be provided within a Statement and can 
be hosted at the location pointed to by the identifier IRI. Including metadata in a Statement
allows metadata about the IRI to be expressed without the necessity of resolving it. Hosting
metadata at the IRI location allows the owner of the IRI to define the canonical metadata for
that IRI. 

##### Details
There are several types of IRI identifiers used in this specification:
* <a href="#verb">Verb</a>
* <a href="#acturi">Activity id</a>
* <a href="#acttype">Activity type</a>
* <a href="#miscext">extension key</a>
* <a href="#attachmentUsage">attachment usage type</a>

For the structure of hosted metadata about Activity ids, see <a href="#activity"> the Activity Definition Object</a>.

For the structure of hosted metadata about all other identifiers, see the format below:

<table>
	<tr><th>Property</th><th>Type</th><th>Description</th><th>Required</th></tr>
	<tr>
		<td>name</td>
		<td><a href="#misclangmap">Language Map</a></td>
		<td>The human readable/visual name. For Verbs, this is equivalent to the Display property in a statement.</td>
		<td>Optional</td>
	</tr>
	<tr>
		<td>description</td>
		<td><a href="misclangmap">Language Map</a></td>
		<td>description</td>
		<td>Optional</td>
	</tr>
</table>

Hosted metadata consists of a document containing a JSON object as described above. 
If this hosted metadata is provided, it is the canonical source of information about the 
identifier it describes.  We recommend that 
Activity Providers look for and use established, widely adopted identifiers for all types of IRI 
identifiers other than Activity id.

##### Metadata Provider Requirements

* Metadata MAY be provided with an identifier.
* If metadata is provided, both name and description SHOULD be included.
* [Metadata Providers](#def-metadata-provider) defining new IRIs SHOULD* only use IRIs they control or have permission from the controller to use.
* [Metadata Providers](#def-metadata-provider) defining new Verb IRIs MUST only use IRIs they control or have permission from the controller to use.
* For any of the identifier IRIs above the Metadata Provider SHOULD make a human-readable description of the intended usage accessible at the IRI.
* For any of the identifier IRIs above the Metadata Provider SHOULD ensure that this JSON metadata available at that 
IRI when the IRI is requested and a Content-Type of "application/json" is requested.
* Where the IRI represents an Activity, the Metadata Provider MAY host metadata using the <a href="#actdef">
Activity Definition</a> JSON format which is used in Statements, with a Content-Type of "application/json".
* Where a suitable identifier already exists, the Metadata Provider SHOULD NOT create a new identifier.
* The Metadata Provider MAY create their own identifiers where a suitable identifier does not already exist.
* When defining identifiers, the Metadata Provider MAY use IRIs containing anchors so that a single page can contain 
definitions for multiple identifiers. E.g. http://example.com/xapi/verbs#defenestrated

##### Activity Provider Requirements
* Where a suitable identifier already exists, the Activity Provider SHOULD use the corresponding existing identifier.

##### LRS Requirements
* The LRS MAY act as a [Metadata Consumer](#def-metadata-consumer) and attempt to resolve identifier IRIs.
* If an Activity IRI is a URL, an LRS SHOULD attempt to GET that URL, and include in HTTP
headers: "Accept: application/json, */*". This SHOULD be done as soon as practical after the LRS
first encounters the Activity id.
* Upon loading JSON which is a valid Activity Definition from a URL used as an Activity id,
 an LRS SHOULD incorporate the loaded definition into its canonical definition for that Activity,
while preserving names or definitions not included in the loaded definition.
* Upon loading any document from which the LRS can parse an Activity Definition
from a URL used as an Activity id, an LRS MAY consider this definition when determining
its canonical representation of that Activity's definition.

##### Metadata Consumer Requirements
* If a Metadata Consumer obtains metadata from an IRI, it SHOULD make a strong presumption that the 
metadata found at that IRI is authoritative in regards to the properties and languages included in that metadata. 
* The Metadata Consumer MAY use other sources of information to fill in missing details, 
such as translations, or take the place of the hosted metadata entirely if it was not provided, cannot be loaded or the 
Metadata Consumer does not trust it. Other sources of information MAY
include metadata in other formats stored at the IRI of an identifier, particularly if that
identifier was not coined for use with this specification.


<a name="special-data"/>

## 4.0 Special Data Types and Rules

The following are data types requiring additional rules that are found commonly in this specification.

<a name="miscext"/> 

### 4.1 Extensions

##### Description
Extensions are available as part of Activity Definitions, as part of Statement context, 
or as part of a Statement result. In each case, they're intended to provide a natural 
way to extend those elements for some specialized use. The contents of these extensions might 
be something valuable to just one application, or it might be a convention used by an entire 
Community of Practice.

##### Details
Extensions are defined by a map and logically relate to the part of the Statement where they are 
present. The values of an extension can be any JSON value or data structure. Extensions in Statement 
context provide context to the core experience, while those in the result provide elements related to 
some outcome. For Activities, extensions provide additional information that helps define an Activity 
within some custom application or community. The meaning and structure of extension values under an 
IRI key are defined by the person who controls the IRI.

##### Requirements

* The keys of an extensions map MUST be IRIs.
* An LRS MUST NOT reject a Statement based on the values of the extensions map.
* Clients SHOULD always strive to map as much information as possible into the built-in 
elements in order to leverage interoperability among Experience API conformant tools.
* All extension IRIs SHOULD have controllers.
* The controller of an IRL extension key SHOULD make a human-readable description
of the intended meaning of the extension supported by the IRL accessible at the IRL.

__Note:__ A Statement defined entirely by its extensions becomes meaningless as no other system 
can make sense of it.  

<a name="lang-maps"/> 

### 4.2 Language Maps

##### Description
A language map is a dictionary where the key is a [RFC 5646 Language Tag](http://tools.ietf.org/html/rfc5646), and the value is a string in the language specified in the tag. This map SHOULD be populated as fully as possible based on the knowledge of the string in question in different languages.  

The content of strings within a language map is plain text. It's expected that any formatting code 
such as HTML tags or markdown will not be rendered, but will be displayed as code when this string is 
displayed to an end user. An important exception to this is if language map object is used in an extension and 
the owner of that extension IRI explicitly states that a particular form of code will be rendered.

<a name="iris"/>

### 4.3 IRIs

Internationalized Resource Identifiers, or IRIs, are unique identifiers which could also be resolvable. Because 
resolving is not a requirement, IRIs/URIs are used instead of IRLs/URLs. In order to allow the greatest flexibility 
in the characters used in an identifier, IRIs are used instead of URIs as IRIs can contain some characters outside 
of the ASCII character set. 

See [Metadata](#metadata). 

<a name="uuids"/>

### 4.4 UUIDs

Universally Unique Identifiers, or UUIDs, are 128-bit values that are globally unique.  Unlike IRIs, there is 
no expectation of resolvability as UUIDs take on a completely different format.  UUIDs MUST be in the standard 
string form.  It is recommended variant 2 in [RFC 4122](http://tools.ietf.org/html/rfc4122) is used.

<a name="timestamps"/>

### 4.5 ISO 8601 Timestamps

Timestamps are a format type which represent a specific time.  They are formatted according to ISO 8601's normal format. 
Statements sent to an LRS can be expected to keep precision to at least milliseconds 

###### Requirements
* A Timestamp MUST be formatted according to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
* A Timestamp MUST preserve precision to at least milliseconds (3 decimal points beyond seconds).  
* A Timestamp SHOULD* include the time zone.
* If the Timestamp includes a time zone, the LRS MAY be return the Timestamp using a different timezone to the one 
* originally used in the statement so long as the point in time referenced is not affected. 
* The LRS SHOULD* return the Timestamp in UTC timezone. 
* A Timestamp MAY be truncated or rounded to a precision of at least 3 decimal digits for seconds. 

<a name="durations"/>

### 4.6 ISO 8601 Durations

Durations are strings representing the amount of time something took.

###### Requirements

* A Duration MUST be expressed using the format for duration in ISO 8601:2004(E) section 4.4.3.2.
The alternative format (in conformity with the format used for time points and described in ISO 8601:2004(E) 
section 4.4.3.3) MUST NOT be used.
* Clients SHOULD provide a maximum precision of 0.01 seconds. 
* Clients MAY provide less precision, for example in the case of reading a University Degree precision might 
be in months or years. 
* On receiving a Duration with more than 0.01 second precision, the LRS SHOULD* NOT reject the request but MAY 
truncate the Duration property to 0.01 second precision. 
* When comparing Durations, any precision beyond 0.01 second precision SHOULD* NOT be included in the comparison.

###### Examples
The table below provides some example ISO 8601 durations. This list is not intended to be exhaustive. 

<table>
	<tr><th>Example</th><th>Explanation</th></tr>
	<tr>
		<td>PT4H35M59.14S</td>
		<td>Four hours, thirty five minutes and 59.14 seconds.</td>
	</tr>
	<tr>
		<td>P16559.14S</td>
		<td>The same time period as above represented in seconds. 
		(Note: if the time period in question contained a leap second, this conversion would be inaccurate)</td>
	</tr>
	<tr>
		<td>P3Y1M29DT4H35M59.14S</td>
		<td>A duration also including years, months and days.</td>
	</tr>
	<tr>
		<td>P3Y</td>
		<td>Approximately three years e.g. completion of a qualification.</td>
	</tr>
	<tr>
		<td>P4W</td>
		<td>Four weeks. Note that weeks cannot be combined with other time periods. 'P4W1D' is not valid.</td>
	</tr>
</table>

Durations are expected to be presented in the format in which they are recorded. For example if a duration is tracked
in seconds (or fractions of a second) there is no need to convert this to hours, minutes and seconds. 

<a name="append2"/>
## Appendices
<a name="Appendix2A"/>  
 
### Appendix A: Example statements

Example of a simple statement (line breaks are for display purposes only):  
```
{
	"id":"fd41c918-b88b-4b20-a0a5-a4c32391aaa0",
	"timestamp": "2015-11-18T12:17:00+00:00",
	"actor":{
		"objectType": "Agent",
		"name":"Project Tin Can API",
		"mbox":"mailto:user@example.com"
	},
	"verb":{
		"id":"http://example.com/xapi/verbs#sent-a-statement",
		"display":{ 
			"en-US":"sent" 
		}
	},
	"object":{
		"id":"http://example.com/xapi/activity/simplestatement",
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
Completion with verb "attempted" and duration expressed in seconds (not converted to minutes and seconds):  
```
{
	"id":"7ccd3322-e1a5-411a-a67d-6a735c76f119",
	"timestamp": "2015-12-18T12:17:00+00:00",
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
		"completion":true,
		"duration": "PT1234S"
	}
}
```  
A long example statement showcasing most of the properties available. This example shows
a statement returned by an LRS including the authority and stored properties set by the LRS:  
```
{
    "id": "6690e6c9-3ef0-4ed3-8b37-7f3964730bee",
    "actor": {
        "name": "Team PB",
        "mbox": "mailto:teampb@example.com",
        "member": [
            {
                "name": "Andrew Downes",
                "account": {
                    "homePage": "http://www.example.com",
                    "name": "13936749"
                },
                "objectType": "Agent"
            },
            {
                "name": "Toby Nichols",
                "openid": "http://toby.openid.example.org/",
                "objectType": "Agent"
            },
            {
                "name": "Ena Hills",
                "mbox_sha1sum": "ebd31e95054c018b10727ccffd2ef2ec3a016ee9",
                "objectType": "Agent"
            }
        ],
        "objectType": "Group"
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/attended",
        "display": {
            "en-GB": "attended",
            "en-US": "attended"
        }
    },
    "result": {
        "extensions": {
            "http://example.com/profiles/meetings/resultextensions/minuteslocation": "X:\\meetings\\minutes\\examplemeeting.one"
        },
        "success": true,
        "completion": true,
        "response": "We agreed on some example actions.",
        "duration": "PT1H0M0S"
    },
    "context": {
        "registration": "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
        "contextActivities": {
            "parent": [
                {
                    "id": "http://www.example.com/meetings/series/267",
                    "objectType": "Activity"
                }
            ],
            "category": [
                {
                    "id": "http://www.example.com/meetings/categories/teammeeting",
                    "objectType": "Activity",
                    "definition": {
			            "name": {
			                "en": "team meeting"
			            },
			            "description": {
			                "en": "A category of meeting used for regular team meetings."
			            },
			            "type": "http://example.com/expapi/activities/meetingcategory"
			        }
                }
            ],
            "other": [
                {
                    "id": "http://www.example.com/meetings/occurances/34257",
                    "objectType": "Activity"
                },
                {
                    "id": "http://www.example.com/meetings/occurances/3425567",
                    "objectType": "Activity"
                }
            ]
        },
        "instructor" :
        {
        	"name": "Andrew Downes",
            "account": {
                "homePage": "http://www.example.com",
                "name": "13936749"
            },
            "objectType": "Agent"
        },
        "team":
        {
        	"name": "Team PB",
        	"mbox": "mailto:teampb@example.com",
        	"objectType": "Group"
        }, 
        "platform" : "Example virtual meeting software",
        "language" : "tlh",
        "statement" : {
        	"objectType":"StatementRef",
        	"id" :"6690e6c9-3ef0-4ed3-8b37-7f3964730bee"
        }
        
    },
    "timestamp": "2013-05-18T05:32:34.804Z+00:00",
    "stored": "2013-05-18T05:32:34.804Z+00:00",
    "authority": {
        "account": {
            "homePage": "http://cloud.scorm.com/",
            "name": "anonymous"
        },
        "objectType": "Agent"
    },
    "version": "1.0.0",
    "object": {
        "id": "http://www.example.com/meetings/occurances/34534",
        "definition": {
            "extensions": {
                "http://example.com/profiles/meetings/activitydefinitionextensions/room": {"name": "Kilby", "id" : "http://example.com/rooms/342"}
            },
            "name": {
                "en-GB": "example meeting",
                "en-US": "example meeting"
            },
            "description": {
                "en-GB": "An example meeting that happened on a specific occasion with certain people present.",
                "en-US": "An example meeting that happened on a specific occasion with certain people present."
            },
            "type": "http://adlnet.gov/expapi/activities/meeting",
            "moreInfo": "http://virtualmeeting.example.com/345256"
        },
        "objectType": "Activity"
    }
}
```  
<a name="Appendix2B"/>  

### Appendix B: Example statement objects of different types

The object of a statement can be an activity, agent, group or statement. 
This appendix provides one example of each. 

###### Activity
```
{
    "id": "http://www.example.co.uk/exampleactivity",
    "definition": {
        "name": {
            "en-GB": "example activity",
            "en-US": "example activity"
        },
        "description": {
            "en-GB": "An example of an activity",
            "en-US": "An example of an activity"
        },
        "type": "http://www.example.co.uk/types/exampleactivitytype"
    },
    "objectType": "Activity"
}
```

###### Agent
```
{
    "name": "Andrew Downes",
    "mbox": "mailto:andrew@example.co.uk",
    "objectType": "Agent"
}
```

###### Group
This example shows an identified group with members. 
```
{
    "name": "Example Group",
    "account" : {
    	"homePage" : "http://example.com/homePage",
    	"name" : "GroupAccount"
    },
    "objectType": "Group",
    "member": [
        {
            "name": "Andrew Downes",
            "mbox": "mailto:andrew@example.com",
            "objectType": "Agent"
        },
        {
            "name": "Aaron Silvers",
            "openid": "http://aaron.openid.example.org",
            "objectType": "Agent"
        }
    ]
}
```


###### Statement
This example shows a SubStatement object whose object is a Statement Reference.

```
{
    "objectType": "SubStatement",
    "actor" : {
        "objectType": "Agent", 
        "mbox":"mailto:agent@example.com" 
    },
    "verb" : { 
        "id":"http://example.com/confirmed", 
        "display":{
            "en":"confirmed"
        } 
    },
    "object": {
        "objectType":"StatementRef",
		"id" :"9e13cefd-53d3-4eac-b5ed-2cf6693903bb"
    }
}
```

<a name="Appendix2C"/>  

### Appendix C: Example definitions for Activities of type "cmi.interaction"

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

###### long-fill-in  
```
"definition": {
	"description": {
		"en-US": "What is the purpose of the xAPI?"
	},
	"type": "http://adlnet.gov/expapi/activities/cmi.interaction",
	"interactionType": "long-fill-in",
	"correctResponsesPattern": [
		"{case_matters=false}{lang=en}To store and provide access to learning experiences."
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
		"4[:]"
	]
}
```

In this example the minimum correct answer is 4 and there is no maximum. 5, 6 or 976 would all be correct answers. 

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

<a name="Appendix2D"/>

### Appendix D: Example Signed Statement

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
            "sha2": "672fa5fa658017f1b72d65036f13379c6ab05d4ab3b6664908d8acf0b6a0c634"
        }
    ]
}
```

__Note:__ Attached signature not shown, see <a href="#attachments"> attachments</a> for
attachment message format.


<a name="partthree"/>

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
			of importing them would use a format of 'exact'.  
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

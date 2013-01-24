Permissions Profile
===================

This profile defines how a Learning Activity Provider (AP) MAY assign security 
permissions to statements, activity definitions and agents asserting who is able to
retrieve, modify and delete these objects. It also defines how an LRS implementing
this profile MUST interpret these permissions and reject unauthorized requests.

<a name="0.1" /> 
## 0.1 A Note On Profiles
Profiles are add-ons to the core Tin Can specification. An LRS, AP or reporting tool does not have to implement 
any profiles to be Tin Can compliant. When this profile says 'an LRS MUST', it refers only to an LRS implementing 
this profile. Compliance with a particular profile enables tools do more together, for example this profile enables 
definition of who can view, edit and delete what in a standard way.

<a name="0.2" /> 
## 0.2 Contents  
 [0.1 A Note On Profiles](#0.1)  
 [0.2 Contents](#0.2)  
[1.0 Groups](#1.0)    
[2.0 The Permissions Object](#2.0)  
[3.0 Statement Permissions](#3.0)  
[4.0 Activity Definition Permissions](#4.0)  
[5.0 Agent Profile Permissions](#5.0)  
[6.0 Leaning Activity Provider Authority Permissions](#6.0)  
[7.0 Agent Authority Permissions](#7.0)  
[8.0 Global Default Permissions](#8.0) 
 
<a name="1.0" />
## 1.0 Groups
This profile allows APs to assign permissions to identified groups, and therefore requires a standard way for the AP 
to create, modify and delete groups. As a minimum, the LRS MUST implement the following methods of managing groups. 
It MAY also implement additional methods.

This section coins the term group consumer (GC). A GC may be any system that wants to maintain a list of agents in a group.
This may be a reporting tool, or may be an LRS. An LRS implementing this permissions profile SHOULD also implement
this mechanism of group management and return groups via its agent profile API accordingly.

The core Tin Can specification refers to anonymous groups and identified groups. The key difference is that identified 
groups have an identifier which can be any identifier allowed for an agent. It is recommended that the account 
identifier be used for most identified groups. 

An AP SHOULD create, modify and delete groups using statements. In all cases the actor SHOULD be the Agent performing 
the action and MUST match the authority issuing the statement. The verb SHOULD be one of those listed below and the 
object should be an identified group. In all instances, the LRS MUST check permissions as described below and reject 
unauthorized statements. Identified groups SHOULD not include a member property when used in group management statements.  

###Verbs
####Formed
__http://adlnet.gov/expapi/verbs/groups#formed__
Instructs the GC to create a group. The object of the statement MUST be an identified group. Where a group with the same id
is created multiple times, the earliest timestamp SHOULD be considered to be when the group was created. 

####Disbanded
__http://adlnet.gov/expapi/verbs/groups#disbanded__
Instructs the GC to remove all members from the group. The object of the statement MUST be an identified group. It is up to 
the GC whether or not it still considers the group to exist.

####Enrolled
__http://adlnet.gov/expapi/verbs/groups#enrolled__
Used to add members to a group. The object of the statement SHOULD be the group of agents to add and SHOULD be either 
a single agent, an anonymous group or an identified group. The context team of the statement SHOULD be an identified 
group that the members are added to. 

This instructs the GC to add these agents to the group if they are not already members of that group. When identified groups are 
used, the identified group itself SHOULD be enrolled, rather than the members of that group. 

Identified groups MAY be nested indefinitely using this verb, but each group has a maximum of one parent. Statements that attempt to enrol 
groups which already have a parent should be ignored. The statement's stored property SHOULD be used to determine priority. 

####Unenrolled
__http://adlnet.gov/expapi/verbs/groups#unenrolled__
Used to remove members from groups. The object of the statement SHOULD be the group of agents to remove and MAY be 
an anonymous or identified group. The context team of the statement SHOULD be an identified group that the members 
are removed from.

This instructs the GC to remove these agents from the group, if found in that group. 

<a name="2.0" /> 
## 2.0 The Permissions Object
Blah blah blah....what this is....

Identified groups SHOULD NOT have a member property when used in this extension.

In lists of agents, verbs and activities, these objects SHOULD NOT
contain any properties for that object.

''''
<table>
	<tr>
		<th>property</th>
		<th>type</th>
		<th>description</th>
	</tr>
	<tr>
		<td>requireDualAuthority</td>
		<td>Boolean</td>
		<td>If true, both agent and activity are required to have permissions for the action</td>
	</tr>
	<tr>
		<td>activities</td>
		<td>Array of activities</td>
		<td></td>
	</tr>
	<tr>
		<td>agents</td>
		<td>Array of agents and identified groups</td>
		<td></td>
	</tr>
</table>
''''

<a name="3.0" /> 
## 3.0 Statement Permissions
Statement permissions deal with who can read, and reference statements (including voiding). 
This is defined using an extension as part of the statement's context by the issuer of the statement.

Statements are forever, and so are statement permissions. To give or remove statement permissions 
to or from an agent, that agent should be enrolled to or unenrolled from a group which has that statement
permission. Statement issuers should plan ahead when defining groups and permissions.

This extension URI to be used is http://adlnet.gov/xapi/extensions/permissions#statement

This extension has two properties, 'permissions' and 'blocks'. 'permissions' defines actions that
are explicitly allowed. 'blocks' defines actions that are explicitly banned. Where 'permissions'
and 'blocks' contradict, the 'block' should take priority.

'permissions' and 'blocks' contain objects. The table below outlines the properties of that object.
For convenience, descriptions state what each property allows, but for 'blocks', these properties
instead define what is banned. 

''''
<table>
	<tr>
		<th>property</th>
		<th>type</th>
		<th>description</th>
	</tr>
	<tr>
		<td>read</td>
		<td>permissions object</td>
		<td>Who is allowed to retrieve this statement</td>
	</tr>
	<tr>
		<td>readAnonymised</td>
		<td>permissions object</td>
		<td>blah action may not be supported by lrs blah</td>
	</tr>
	<tr>
		<td>reference</td>
		<td>object</td>
		<td>blah verb permissions pairs blah</td>
	</tr>
	<tr>
		<td>reference/verb</td>
		<td>verb object</td>
		<td>blah</td>
	</tr>
	<tr>
		<td>reference/permissions</td>
		<td>verb object</td>
		<td>permissions object</td>
	</tr>
</table>
''''

<a name="4.0" /> 
## 4.0 Activity Profile Permissions
Activity definition permissions deal with who can create, read, modify and delete activity definitions and documents
accessible via the activity profile API. This is defined by the AP authority and/or other authorised authorities 
in a document within the activity profile API.

<a name="5.0" /> 
## 5.0 Agent Profile Permissions
Agent profile permissions deal with who can create, read, modify and delete agent profiles and documents accessible
via the agent profile API. This is defined by authorised authorities in a document within the Agent profile API.

<a name="6.0" /> 
## 6.0 Leaning Activity Provider Authority Permissions
AP authority permissions deal with permissions specifically granted to or revoked from AP authorities. This is defined 
by authorised authorities in a document within the Activity Profile API.

<a name="7.0" /> 
##7.0 Agent Authority Permissions
Agent authority permissions deal with permissions specifically granted to or revoked from agent authorities. 
This is defined by authorised authorities in a document within the agent profile API.

<a name="8.0" /> 
## 8.0 Global Default Permissions
Global default permissions provide default permissions to be used when no specific permissions are defined. These are
defined by authorised authorities in a document within the Activity Profile API for an activity representing the LRS.

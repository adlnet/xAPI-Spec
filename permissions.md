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
[1.0 Completed and Failed Actions](#1.0)  
 [1.1 Verbs](#1.1)  
[2.0 Groups](#2.0)  
[3.0 Statement Permissions](#3.0)  
[4.0 Activity Definition Permissions](#4.0)  
[5.0 Agent Profile Permissions](#5.0)  
[6.0 Leaning Activity Provider Authority Permissions](#6.0)  
[7.0 Agent Authority Permissions](#7.0)  
[8.0 Global Default Permissions](#8.0)  

<a name="1.0" /> 
## 1.0 Completed and Failed Actions
This profile defines actions that can be requested by issuing statements with specific verbs. If the action is 
either not possible or the authority making the statement does not have permission to do so, the LRS will not 
complete the action. In some cases, for example when large batches of statements are sent together, the LRS will 
need to make the decision to accept or reject  statement before it is able to work out whether or not it can 
complete the action. In addition to this, some users may find it helpful to have records of failed actions.

For these reasons, the LRS SHOULD accept statements from any authority which has permission to send it statements. 
It should then issue statements to indicate whether or not the action has succeeded.

The actor of these statements SHOULD be an agent representing the LRS, for example an agent using an account name 
of "root". This agent should be used for all statements issued by the LRS. The LRS itself SHOULD be assumed to have 
permission to do anything.

The object of these statements SHOULD be the reference of the statement requesting the action.

<a name="1.1" /> 
### 1.1 Verbs
The verbs are as follows:

#### Completed
__http://adlnet.gov/expapi/verbs/permissions#completed__
The LRS asserts that the action described in the object statement has been successfully completed.

####Failed to Complete
__http://adlnet.gov/expapi/verbs/permissions#failedtocomplete__
The LRS asserts that the action described in the object statement has not been successfully completed. The reason for 
the failure SHOULD be explained in the statement's result response property.

<a name="2.0" /> 
## 2.0 Groups
This profile allows APs to assign permissions to identified groups, and therefore requires a standard way for the AP 
to create, modify and delete groups. As a minimum, the LRS MUST implement the following methods of managing groups. 
It MAY also implement additional methods.

The core Tin Can specification refers to anonymous groups and identified groups. The key difference is that identified 
groups have an identifier which can be any identifier allowed for an agent. It is recommended that the account 
identifier be used for most groups. In the core specification, both types of group can contain a member property. 
APs implementing this profile, however, SHOULD NOT include a member property with identified groups. The LRS will 
need to handle the member property on identified groups in the same way that it does for statements from APs not 
implementing this profile.

An AP SHOULD create, modify and delete groups using statements. In all cases the actor SHOULD be the Agent performing 
the action and MUST match the authority issuing the statement. The verb SHOULD be one of those listed below and the 
object should be an identified group. In all instances, the LRS MUST check permissions as described below and reject 
unauthorized statements.

###Verbs
####Created
__http://adlnet.gov/expapi/verbs/groups#created__
Used to create a group. The object of the statement MUST be an identified group.

The LRS MUST add the group to its internal list of agents accessible via the Agent Profile API. If a group with the 
same id already exists, the LRS  MUST reject the statement. 

####Deleted
__http://adlnet.gov/expapi/verbs/groups#deleted__
Used to remove a group from the LRS. The object of the statement MUST be an identified group.

The LRS MUST remove the group from its own internal list of agents accessible via the Agent Profile API. If the group 
does not exist, the LRS MUST reject the statement.

####Enrolled
__http://adlnet.gov/expapi/verbs/groups#enrolled__
Used to add members to a group. The object of the statement SHOULD be the group of agents to add and SHOULD be either 
a single agent, an anonymous group or an identified group. The context team of the statement SHOULD be an identified 
group that the members are added to. 

The LRS MUST add these agents to the group if they are not already members of that group. When identified groups are 
used, the identified group itself MUST be enrolled, rather than the members of that group. The LRS SHOULD NOT reject 
statements because agents are already part of the group. Identified groups MAY be nested indefinitely using this verb, 
but each group has a maximum of one parent. The LRS MUST reject statements that attempt to enrol groups which already 
have a parent.

####Unenrolled
__http://adlnet.gov/expapi/verbs/groups#unenrolled__
Used to remove members from groups. The object of the statement SHOULD be the group of agents to remove and MAY be 
an anonymous or identified group. The context team of the statement SHOULD be an identified group that the members 
are removed from.

The LRS MUST remove these agents from the group, if found in that group. The LRS SHOULD NOT reject statements because 
agents are not found. 
 
<a name="3.0" /> 
## 3.0 Statement Permissions

<a name="4.0" /> 
## 4.0 Activity Definition Permissions

<a name="5.0" /> 
## 5.0 Agent Profile Permissions

<a name="6.0" /> 
## 6.0 Leaning Activity Provider Authority Permissions

<a name="7.0" /> 
##7.0 Agent Authority Permissions

<a name="8.0" /> 
## 8.0 Global Default Permissions

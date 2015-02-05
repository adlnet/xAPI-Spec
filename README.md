xAPI-Spec
=========

# Workflow for Editing the Experience API Specification

## Set up
If you are not currently working with GitHub and git, follow these set up steps 
first. GitHub provides excellent help at [https://help.github.com/articles/set-up-git](https://help.github.com/articles/set-up-git)

### Sign up for a GitHub account
If you do not already have a GitHub account, [sign up](https://github.com/signup/free).


### Fork the ADL repository
Go to the Experience API repository. Fork the repository to your own account using 
the "Fork" button on the top right of Experience API repository page. This makes a 
copy of the Experience API repository. This fork gives you the ability to edit your 
version of the document without impacting the master copy.


### Install Git (use cmd line) or Install Windows/Mac GitHub client
You need to install Git to work with a GitHub repository. If you are on a Windows machine, you can download the GitHub client app. If you use a Mac you can download the GitHub client app but will also have to download git to add a remote to the master repository. Otherwise install git from the 
git site.

__Git__  
This provides a command line client app for working with a git repository (like 
GitHub)  
Download and run [git install](http://git-scm.com/downloads)

__GitHub Client__  
GitHub Client provides a GUI interface to simplify working with a repository on 
GitHub. This does not currently support synchronizing with a master repository so 
some commands will still need to be completed using the command line.

__Mac:__ http://mac.github.com/  
__Windows:__ http://windows.github.com/


### Clone your GitHub fork to your machine
To make edits and work on the files in the repository, clone your repository to 
your local machine using Git. The url is provided on the home page of your 
repository (ex. ```https://github.com/<your username>/xAPI-Spec/```)  

__Git__  
```git clone https://github.com/<your username>/xAPI-Spec/>```  

__GitHub Client__  
On the home screen of the client app, select your account under 'github' and 
choose the repository you want to clone. Selecting the repository from the list 
gives you an option to clone it. 

### Add ADL repository as upstream remote
Add a remote repository to git to reference the master repository. This will make 
synchronizing with the master respository a bit easier.  

__Git__  
```git remote add upstream https://github.com/adlnet/xAPI-Spec```  

__GitHub Client__  
Currently the GitHub clients don't have a way to synchronize with the master 
repository. In order to do this, open your repository on the GitHub client 
app home screen. On the repository screen select 'tools' and 'open a shell 
here'. Alternatively use the 'Git Shell' shortcut if it was created during 
installation. **NOTE:** If you're using a Mac there is no shell shortcut so navigate to ```/your/repo/path/xAPI-Spec``` then follow the shell instructions.
  
In the shell, enter..  
```git remote add upstream https://github.com/adlnet/xAPI-Spec```  


## Workflow

### Sync up with Master ADL Repository
Pull down changes from the master repository. This automatically does a 
fetch of the master repository and a merge into your local repository.  

__Git and GitHub Client__  
```git pull upstream master```

### Make Changes Locally
Edit the local copy of the file, save and commit. Rule of thumb: Use commits 
like save points. Commit to indicate logical groups of edits, and places 
where the edits could be safely rolled back.  

__Git__  
```git commit -a -m "<commit message>"```  

__GitHub Client__  
The GitHub client will detect saved changes to the documents in your 
local repository and present a button to commit your edits at the top 
right of the repository screen.  

### Push Changes to Your Repository (Origin)
Pushing your changes to your remote GitHub repository stages the files 
so that you can then make requests to the master repository to merge in 
your changes.

__Git__  
```git push origin```

__GitHub Client__  
The GitHub client has a 'sync' button at the top of the repository screen. 
This will synchronize your local and remote (origin) repository.  

### Submit a Pull Request to Master ADL Repository (Upstream)
When you forked from the Experience API repository, a link back to the master 
repository is remembered. To send your changes back the the master repository, 
click the "Pull Request" button at the top of your repository page. This will 
direct you to a page that gives you the ability to submit a request to the 
master repository to merge in the changes you committed.

##Style Guide
### Property and object names

When refering to a property or object, the name should be capitalized. No formatting or quotes should be used. 

For example:

    The Context Activities property within the Context of the Statement is awesome.

Double quotes may be used when refering to properties within properties. When used within quotes, the capitalization of 
should match that actually used in the object being described. 

For example:

    You can use "category" Context Activities to denote the recipe being followed in crafting the statement. 

    The Group "member" property is an un-ordered list!

### Headings
Hashes (#) should be used for all headings following the following format:

# Experience API (1 hash)
## 1 Statement (2 hashes)
### 1.1 Top level property (3 hashes)
#### 1.1.1 next level (4 hashes)
##### 1.1.1.1 next level and any deeper levels (5 hashes)
###### Rationale, details etc. (6 hashes)

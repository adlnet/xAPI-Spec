xAPI-Spec
=========

# Workflow for Editing the Experience API Specification

## Set up
If you are not currently working with GitHub and git, follow these set up steps 
first. GitHub provides excellent help at https://help.github.com/articles/set-up-git

### Sign up for a GitHub account
If you do not already have a GitHub account, [sign up](https://github.com/signup/free).


### Fork the ADL repository
Go to the Experience API repository. Fork the repository to your own account using 
the "Fork" button on the top right of Experience API repository page. This makes a 
copy of the Experience API repository. This fork gives you the ability to edit your 
version of the document without impacting the master copy.


### Install Git (use cmd line) or Install Windows/Mac GitHub client
You need to install Git to work with a GitHub repository. If you are on a Windows 
or Mac, you can download the GitHub client app. Otherwise install git from the 
git site.

__Git__  
This provides a command line client app for working with a git repository (like 
GitHub)  
Download and run [git install](http://git-scm.com/downloads)

__GitHub Client__  
GitHub Client provides a GUI interface to simplify working with a repository on 
GitHub. This does not currently support synchronizing with a base repository so 
some commands will still need to be completed using the command line.

__mac:__ http://mac.github.com/  
__windows:__ http://windows.github.com/


### Clone your GitHub fork to your machine
To make edits and work on the files in the repository, clone your repository to 
your local machine using Git. The url is provided on the home page of your 
repository (ex. https://github.com/garemoko/xAPI-Spec/)  

__Git__  
```git clone <url_to_your_repository>```  

__GitHub Client__  
On the home screen of the client app, select your account under 'github' and 
choose the repository you want to clone. Selecting the repository from the list 
gives you an option to clone it. 

### Add ADL repository as upstream remote
Add a remote repository to git to reference the base repository. This will make 
synchronizing with the base respository a bit easier.  

__Git__  
```git remote add upstream https://github.com/adlnet/xAPI-Spec```  

__GitHub Client__  
Currently the GitHub clients don't have a way to synchronize with a base 
repository. In order to do this, open your repository on the GitHub client 
app home screen. On the repository screen select 'tools' and 'open a shell 
here'. Alternatively use the 'Git Shell' shortcut if it was created during 
installation.  
In the shell, enter..  
```git remote add upstream <url_to_base_repository>```  


## Workflow

### Sync up with Base ADL Repository
Pull down changes from the base repository. This automatically does a 
fetch of the base repository and a merge into your local repository.  

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
so that you can then make requests to the base repository to merge in 
your changes.

__Git__  
```git push origin```

__GitHub Client__  
The GitHub client has a 'sync' button at the top of the repository screen. 
This will synchronize your local and remote (origin) repository.  

### Submit a Pull Request to Base ADL Repository (Upstream)
When you forked from the Experience API repository, a link back to the base 
repository is remembered. To send your changes back the the base repository, 
click the "Pull Request" button at the top of your repository page. This will 
direct you to a page that gives you the ability to submit a request to the 
base repository to merge in the changes you committed.

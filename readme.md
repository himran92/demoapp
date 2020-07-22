## Install Python in Mac
Check if your current version is Python 3 by 
`python --version`
If Not install version 3

## Virtual Environment
After cloning the project, setup the virtual environment by following commands inside project folder
<br />
`python3 -m venv env` 
<br />
`source env/bin/activate`

## Download all requirments
In python, requirments.txt file holds all the information of installed packages and their versions.
Download all dependencies of project by command
`pip install -r requirements.txt `

## Update dependencies
If you add any dependency within the project run the following command to update requirements.txt file
`pip freeze > requirements.txt`

## Create App in Project
In order to create a new django app, within the main project repo
`cd demoapp`
then create another app like existing `pdfforms` app
`django-admin startapp app2`

## React frontend

You'll need to install Yarn to run the frontend app in development. The quickest way is with Homebrew:
`brew install yarn`

Then:

```
cd demoapp/pdf-gen
yarn install
yarn start
```

The React dev server will be running on `localhost:3000`.
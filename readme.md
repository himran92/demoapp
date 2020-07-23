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
And then add the app in InstalledApps of settings

## Migrate Tables Form & Field
* Make migrations of the models `python manage.py makemigrations`
* Migrate `python manage.py migrate`
* This will create a Table Form (id, name, fields list). 
And a Table Field with (id, name, type). Both Forms and Fields have many to many relationship.

## Create Form & Field
We can add values in form and field table by using django admin. 
* Create SuperUser by
`python manage.py createsuperuser`
Give Username, Email, Password. 
* Run the Django Server by `python ./manage.py runserver`
* Go to `http://127.0.0.1:8000/admin`. And give Username and Password to sign-in. 
* Use the Console to add/edit Forms and their fields. You need to add Fields first which can be selected for a form later. 

## Query by GraphQL
* Go to `http://localhost:8000/graphql`
* To retrieve all forms with their fields, give query:

``` 
query {
  allForms {
    id
    name
    fields {
      id
      name
    }
  }
}
```

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
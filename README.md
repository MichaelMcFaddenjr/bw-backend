# Use My Tech API

## https://ft-backend-use-my-tech.herokuapp.com/

Here are all the endpoints. I don't know if you will need all of them but better to have them. 

### [GET]/api/items
***RESTRICTED***
Returns data for all items

### [GET]/api/items/:item_id
***RESTRICTED***
Data for a specified item including the owner

### [GET]/api/users/:user_id/items
***RESTRICTED***
Returns data for all items created by a specified user

### [GET]/api/users/:user_id
***RESTRICTED***
See a specific users information

### [POST]/api/items/user/:user_id
***RESTRICTED***
Create an item using a users id

### [PUT]/api/items/:user_id/:item_id
***RESTRICTED***
Edit item information using the item_id

### [DELETE]/api/items/:user_id/:item_id
***RESTRICTED***
Delete an item with user and item id

### [POST]/api/users/register
create a new user

### [POST]/api/users/login
User login- token received at login

### [PUT]/api/users/:user_id
***RESTRICTED***
Edit a users email and password

## Items
#### [GET]/api/items
***RESTRICTED***
See full array of items

<details>

```JSON
[
    {
        "item_id": 1,
        "item_name": "Canon MarkIII with lens",
        "item_description": "Rent my camera",
        "item_price": "$150 per day",
        "item_image": "",
        "item_category": "Camera",
        "item_location": "Los Cabos",
        "item_owner_id": 1,
        "item_owner": "michael"
    },
    {
        "item_id": 2,
        "item_name": "Red Dragon",
        "item_description": "The best in the world",
        "item_price": "$500 per day",
        "item_image": "",
        "item_category": "Camera",
        "item_location": "San Diego",
        "item_owner_id": 2,
        "item_owner": "jaden"
    },
    {
        "item_id": 3,
        "item_name": "Bose Speaker System",
        "item_description": "Turn it up to 11",
        "item_price": "$250 per day",
        "item_image": "",
        "item_category": "Sound",
        "item_location": "San Clemente",
        "item_owner_id": 3,
        "item_owner": "fernando"
    },
    {
        "item_id": 4,
        "item_name": "Fog Machine",
        "item_description": "Smoke it out",
        "item_price": "$25 per day",
        "item_image": "",
        "item_category": "Party",
        "item_location": "San Diego",
        "item_owner_id": 4,
        "item_owner": "joseph"
    }
]
```
</details>

#### [GET] /api/items/user/:user_id
***RESTRICTED***
Data for a specified item including the owner

<details>

```JSON
{
    "item_id": 3,
    "item_name": "Bose Speaker System",
    "item_description": "Turn it up to 11",
    "item_price": "$250 per day",
    "item_image": "",
    "item_category": "Sound",
    "item_location": "San Clemente",
    "item_owner_id": 3,
    "item_owner": "fernando"
}
```
</details>

#### [POST] /api/items/user/:user_id
***RESTRICTED***
Create an item using a users id
***REQUIRED INFO***
* item_name 'string'
* item_price 'string' ex. '$25 per day'
* item_category 'string' make a drop down for this so we dont have to worry about spelling issues
* item_location 'string'

 ***OPTIONAL INFO***
* item_description 'string'
* item_image 'string'

<details>

```JSON
{
    "item_id": 1,
    "item_name": "Canon MarkIII with lens",
    "item_description": "Rent my camera",
    "item_price": "$150 per day",
    "item_image": "",
    "item_category": "Camera",
    "item_location": "Los Cabos",
}
```
</details>

#### [PUT] /api/items/:user_id/:item_id
***RESTRICTED***
Edit item information using the item_id
***REQUIRED INFO***

* item_name 'string'
* item_price 'string' ex. '$25 per day'
* item_category 'string' make a drop down for this so we dont have to worry about spelling issues
* item_location 'string'

 ***OPTIONAL INFO***
* item_description 'string'
* item_image 'string'

<details>

```JSON
{
    "item_name": "Canon MarkIII with lens",
    "item_description": "Rent my camera",
    "item_price": "$150 per day",
    "item_image": "",
    "item_category": "Camera",
    "item_location": "Los Cabos",
}
```
</details>

#### [DELETE] /api/items/:user_id/:item_id
***RESTRICTED***
Remove an item using the user and item id

<details>

```JSON
{
  "message": "Item deleted"
}
```
</details>

## Users
#### [GET] /api/users
***RESTRICTED***
see the full array of users

<details>

```JSON
[
    {
        "user_id": 1,
        "username": "michael",
        "email": "michael@michael.com"
    },
    {
        "user_id": 2,
        "username": "jaden",
        "email": "jaden@jaden.com"
    },
    {
        "user_id": 3,
        "username": "fernando",
        "email": "fernando@fernando.com"
    },
    {
        "user_id": 4,
        "username": "joseph",
        "email": "joseph@joseph.com"
    }
]
```
</details>

#### [GET] /api/users/:user_id
***RESTRICTED*** ENDPOINT

See a specific user's information
<details>

```JSON
  {
    "user_id": 1,
    "username": "michael",
    "email": "michael@michael.com"
  }
```

</details>

#### [GET] /api/users/:user_id/items
***RESTRICTED*** ENDPOINT

See all items created by a single user
<details>

```JSON
[
  {
    "item_id": 1,
    "item_name": "Canon MarkIII with lens",
    "item_description": "Rent my camera",
    "item_price": "$150 per day",
    "item_image": "",
    "item_category": "Camera",
    "item_location": "Los Cabos",
  }
]
```

</details>

#### [POST] /api/users/register
Create a new user

***Required information***
* username
* email
* password

<details>

```JSON
{
    "user_id": 1,
    "username": "michael",
    "email": "michael@michael.com"
}
```

</details>

#### [POST] /api/users/login
Logs in a user, receives a token for authorization

 ***Required information***
* username
* password

<details>

```JSON
{
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhYmUiLCJpYXQiOjE2MjE2NjEwODMsImV4cCI6MTYyMTc0NzQ4M30.7VWM3Q1JWAgw-HWKpDCu2GZN4AzVlkA-FUZoEIO0oZg"
}
```

</details>

#### [PUT] /api/users/:user_id
***RESTRICTED***

Edit the user's email and password only
Need to send back username, email, and password

 ***Required information***
* username
* email
* password

<details>

```JSON
{
    "username": "michael",
    "password": "password",
    "email": "michael@michael.com"
}
```

</details>

#### [DELETE] /api/users/:user_id
***RESTRICTED ***

Delete a user
<details>

```JSON
{
    "message": "See ta never"
}
```

</details>
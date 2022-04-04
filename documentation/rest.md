# Routes API

This document contains all API definitions and their routes.

**Product list**
----
      
* **URL**

    /{_locale}/api/products

* **Method:**

    `GET`
  
* **URL Params**

    None

* **Data Params**

    **Required:**

    `token=[string]`
    
    `alpha2=[string]`

* **Success Response:**

  * **Code:** 200  
    **Content:** 
    
    ```json
        {
          "success": false,
          "message": "Successfully found",
          "data": {
            "id": 281,
            "name": "Brazil",
            "alpha2": "BR",
            "slug": "brazil",
            "alpha3": null,
            "native": "Brasil"
          }
        }
    ```

**Search countries**
----
      
* **URL**

    /{_locale}/api/location/country/search

* **Method:**

    `POST`
  
* **URL Params**

    None

* **Data Params**

    **Required:**

    `token=[string]`
    
    `text=[string]`

* **Success Response:**

  * **Code:** 200  
    **Content:** 
    
    ```json
        {
          "success": false,
          "message": "Successfully found",
          "data": [
            {
              "id": 307,
              "name": "Germany",
              "alpha2": "DE",
              "slug": "germany",
              "alpha3": null,
              "native": "Deutschland"
            },
            {
              "id": 392,
              "name": "Madagascar",
              "alpha2": "MG",
              "slug": "madagascar",
              "alpha3": null,
              "native": "Madagasikara"
            },
            {
              "id": 445,
              "name": "Seychelles",
              "alpha2": "SC",
              "slug": "seychelles",
              "alpha3": null,
              "native": "Seychelles"
            },
            ...
          ]
        }
    ```


**List states**
----
      
* **URL**

    /{_locale}/api/location/states

* **Method:**

    `GET`
  
* **URL Params**

    **Required:**

    `token=[string]`
    
    `countryId=[integer]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200  
    **Content:** 
    
    ```json
        {
          "success": true,
          "message": "Successfully found",
          "data": [{
            "id": 483,
            "location_country_id": 483,
            "name": "New York",
            "slug": "new-york",
          }...]
        }
    ```


**List cities**
----
      
* **URL**

    /{_locale}/api/location/cities

* **Method:**

    `GET`
  
* **URL Params**

    **Required:**

    `token=[string]`
    
    `stateId=[integer]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200  
    **Content:** 
    
    ```json
        {
          "success": true,
          "message": "Successfully found",
          "data": [{
            "id": 21349,
            "location_state_id": 2408,
            "name": "Manhattan",
            "slug": "manhattan",
          }...]
        }
    ```


**Upload property media**
----
      
* **URL**

    /{_locale}/api/property-media/upload

* **Method:**

    `POST`
  
* **URL Params**

    None 

* **Data Params**

    **Required:**
    
    `token=[string]`
    
    `propertyId=[integer]`
    
    `photos[0]=[file]`
    
    **Optional:**
    
    `type=[string]`
    
* **Success Response:**

  * **Code:** 200  
    **Content:** 
    
    ```json
        {
          "success": true,
          "message": "Upload successfully",
          "property_media_id": 10,
          "file": "http://example.com/uploads/media/2020/10/image.jpg"
        }
    ```


**Delete property media**
----
      
* **URL**

    /{_locale}/api/property-media/delete

* **Method:**

    `POST`
  
* **URL Params**

    None 

* **Data Params**

    **Required:**

    `token=[string]`
    
    `propertyMediaId=[integer]`

* **Success Response:**

  * **Code:** 200  
    **Content:** 
    
    ```json
        {
          "success": true,
          "message": "Media deleted successfully."
        }
    ```


**Sort property media**
----
      
* **URL**

    /{_locale}/api/property-media/sort

* **Method:**

    `POST`
  
* **URL Params**

    None 

* **Data Params**

    **Required:**

    `token=[string]`
    
    `propertyMediaId=[integer]`
    
    `sort=[json]`
    - `[{"propertyMediaId":1,"index":0}, {"propertyMediaId":2,"index":1},...]`
    
* **Success Response:**

  * **Code:** 200  
    **Content:** 
    
    ```json
        {
          "success": true,
          "message": "Files was sorted."
        }
    ```


**Search clients**
----

* **URL**

  /{_locale}/api/client/search

* **Method:**

  `POST`

* **URL Params**

  None

* **Data Params**

  **Required:**

  `token=[string]`

  `text=[string]`

* **Success Response:**

  * **Code:** 200  
    **Content:**

    ```json
        {
          "success": true,
          "message": "Successfully found",
          "data": [
              {
                  "id": 1,
                  "name": "Remax",
                  "code_license": null,
                  "created_at": {
                      "timezone": {...},
                      "offset": 0,
                      "timestamp": 1621544493
                  }
              },
              ...
          ],
        }
    ```
  
**Login**
----

* **URL**

  /{_locale}/api/auth/login

* **Method:**

  `POST`

* **URL Params**

  None

* **Data Params**

  **Required:**

  `username=[string]`

  `password=[string]`

* **Content-Type**  
  `application/json`

* **Success Response:**

  * **Code:** 200  
    **Content:**

    ```json
        {
          "token": "d7a3rfna83fafshq7basda...",
        }
    ```
  
**Register**
----

* **URL**

  /{_locale}/api/auth/register

* **Method:**

  `POST`

* **HEADER Params**

  **Required:**

  `Authorization=[string]`

* **URL Params**

  None

* **Data Params**

  `phone=[string]`

  **Required:**

  `client_type=[integer]`

  `first_name=[string]`
  
  `last_name=[string]`
  
  `email=[string]`

  `password=[string]`

  `repeat_password=[string]`

* **Content-Type**  
  `application/json`

* **Success Response:**

  * **Code:** 200  
    **Content:**

    ```json
        {
            "errors": [],
            "message":"Registered successfully"  
        }
    ```

  * **Code:** 400  
    **Content:**

    ```json
        {
            "errors": {
                "username":"",
                "first_name":"",
                "last_name":"",
                "password":"",
                "client_type": "Is necessary to inform which type of account will be created."
            },
            "message":"Something is wrong. Review your information and try again."  
        }
    ```

**Send proposal**
----

* **URL**

  /{_locale}/api/property/send-proposal

* **Method:**

  `POST`

* **HEADER Params**

  **Required:**

  `Authorization=[string]`  
  `ReCaptcha=[string]`

* **URL Params**

  None

* **Data Params**

  `email=[string]`  
  `phone=[string]`  

  **Required:**

  `property_id=[integer]`  
  `name=[string]`  
  `text=[string]`  

* **Content-Type**  
  `application/json`

* **Success Response:**

  * **Code:** 200  
    **Content:**

    ```json
        {
            "errors": [],
            "message":"Proposal arrived on"  
        }
    ```

  * **Code:** 400  
    **Content:**

    ```json
        {
            "errors": {
                "name":"",
                "email":"",
                "phone":"",
                "text":"This value is not valid."
            },
            "message":"Failed by sending your proposal."  
        }
    ```


**Search location**
----

* **URL**

  /{_locale}/api/location/search

* **Method:**

  `POST`

* **HEADER Params**

  **Required:**

  `Authorization=[string]`  

* **URL Params**

  None

* **Data Params**

  None  

  **Required:**

  `text=[string]`  

* **Content-Type**  
  `application/json`

  * **Success Response:**

    * **Code:** 200  
      **Content:**

      ```json
          {
            "data": [
              {
                "category": "City",
                "key": "south-san-francisco_california_US",  
                "name": "South San Fransisco, California",             
              },
              {...} 
            ],  
            "message":"Successfully found"  
          }
      ```

    * **Code:** 400  
      **Content:**

      ```json
          {
              "message":"No results found"  
          }
      ```


**Search properties**
----

* **URL**

  /{_locale}/api/property/search

* **Method:**

  `POST`

* **HEADER Params**

  **Required:**

  `Authorization=[string]`

* **URL Params**

  None

* **Data Params**

  None

  **Required:**

  None

* **Content-Type**  
  `application/json`

  * **Success Response:**

    * **Code:** 200  
      **Content:**

      ```json
            {"pagination" : "<HTML>",
             "properties": "<HTML>",
             "page":1,
             "filters": "<HTML>",
             "title":"Properties for Rent",
             "metaTitle":"Properties for Rent - Bonom"
            }
      ```


**Forgot password**
----

* **URL**

  /{_locale}/api/auth/forgot-password

* **Method:**

  `POST`

* **HEADER Params**

  **Required:**

  `Authorization=[string]`

* **URL Params**

  None

* **Data Params**

  None

  **Required:**
  `email=[string]`

* **Content-Type**  
  `application/json`

  * **Success Response:**

    * **Code:** 200  
      **Content:**

      ```json
            {
              "message":"We send an email to reset your password."
            }
      ```

    * **Code:** 400  
      **Content:**

      ```json
          {
              "message":"We didn't find an account with the correspond email."  
          }
      ```


**Reset password**
----

* **URL**

  /{_locale}/api/auth/reset-password

* **Method:**

  `POST`

* **HEADER Params**

  **Required:**

  `Authorization=[string]`

* **URL Params**

  None

* **Data Params**

  None

  **Required:**  
  `token=[string]`  
  `new_password=[string]`  
  `confirm_new_passworf=[string]`

* **Content-Type**  
  `application/json`

  * **Success Response:**

    * **Code:** 200  
      **Content:**

      ```json
            {
              "message":"Password was updated successfully."
            }
      ```

    * **Code:** 400  
      **Content:**

      ```json
          {
              "message":"Token is invalid."  
          }
      ```


**Product list**
----

* **URL**

  /{_locale}/api/products

* **Method:**

  `GET`

* **HEADER Params**

  **Required:**

  `Authorization=[string]`

* **URL Params**

  None

* **Data Params**

  None

* **Content-Type**  
  `application/json`

  * **Success Response:**

    * **Code:** 200  
      **Content:**

      ```json
            [
              {
                "id": 1,
                "articleNumber": 1,
                "name": "JBL Tune 230 NC TWS – Wasserfeste, True-Wireless In-Ear-Kopfhörer...",
                "description": "Info zu diesem Artikel\nJBL Pure Bass Sound für unterwegs...",
                "price": "79.90",
                "image": "https://m.media-amazon.com/images/I/61-Fy3meKHL._AC_SX679_.jpg"
              },
              ...
            ]
      ```

    * **Code:** 204  
      **Content:**

      ```json
          []
      ```

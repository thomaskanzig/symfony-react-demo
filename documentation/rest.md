# Routes API

This document contains all API definitions and their routes.

**Login**
----

* **URL**

  `/api/login`

* **Method:**

  `POST`

* **HEADER Params**

  **Required:**

  None

* **URL Params**

  None

* **Data Params**

  `username=[string]`  
  `password=[string]`  

* **Content-Type**  
  `application/json`

  * **Success Response:**

    * **Code:** 200  
      **Content:**

      ```json
      {
          "token": "4XxEWznBe5ryslYSfYQ2sKlJRwogbwrQk2181krf0wnjMuksxa..."
      }
      ```

    * **Code:** 401  
      **Content:**

      ```json
      {
          "code":401,
          "message":"Invalid credentials."
      }
      ```


**Product list**
----

* **URL**

  `/api/products`

* **Method:**

  `GET`

* **HEADER Params**

  **Required:**

  `Authorization=Bearer [string]`

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
      ]
      ```

    * **Code:** 204  
      **Content:**

      ```json
      []
      ```


**Product detail**
----

* **URL**

  `/api/product/:productId`

* **Method:**

  `GET`

* **HEADER Params**

  **Required:**

  `Authorization=Bearer [string]`

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
      {
          "id":5,
          "articleNumber":1001,
          "name":"Jabra Elite Active 65t",
          "description":"Lange Akkulaufzeiten und stabile True-Wireless Verbindung: Mit dem Ladeetui laufen die Kopfh\u00f6rer bis zu 15 Stunden lang \u2013 H\u00f6rgenuss den ganzen Tag, mit den Elite Active 65t Kopfh\u00f6rer",
          "price":"59.99",
          "image":"https:\/\/m.media-amazon.com\/images\/I\/61UlsbLA33L._AC_SX679_.jpg",
          "createdAt": {...}
      }
      ```

    * **Code:** 204  
      **Content:**

      ```json
      {}
      ```

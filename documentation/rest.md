# Routes API

This document contains all API definitions and their routes.

**Product list**
----

* **URL**

  `/api/products`

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

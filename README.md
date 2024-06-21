# Angular Orders Page Documentation

## Overview
This Angular 13 page implemented with DDD provides an interation for the consume of the API https://github.com/karin-jpg/orders-project-api
Here, you can see (with a pagination), filter and cancel all of the orders in a simple table

## Requirements
- [Node 17](https://nodejs.org/pt/blog/release/v17.7.1) or higher
- [NMP 8.5.4](https://www.npmjs.com/package/npm/v/8.5.4) or higher
- [Angular 13](https://www.npmjs.com/package/@angular/cli/v/13.0.0)

## Installation
1. Clone this repository;

2. Navigate to the project directory:
    ```sh
    cd <project_directory>
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Run the local server - if done correctly, it should be available on the http://localhost:4200
    ```sh
    npm start
    ```

At this point, you should have this [API](https://github.com/karin-jpg/orders-project-api) running at the same time on PORT 8000 (See the API read.me for more details)

## Functionality

1. See all of the orders (10 orders per page)
    ![image](https://github.com/karin-jpg/orders-project-frontend/assets/52075166/609139e2-d293-4dbb-b4dc-2e64fc99d6d6)

2. Filter by customer name - using a input field that can find by first name, last name or fullname
   ![image](https://github.com/karin-jpg/orders-project-frontend/assets/52075166/1161d774-46fa-4544-9012-6c95a7f17596)


3. Filter by order status - using a drop down
   ![image](https://github.com/karin-jpg/orders-project-frontend/assets/52075166/700ed73d-a634-4c47-b2f1-e0e75f842762)

4. Clear filter fields - with a click of a button
   
5. An in-table button for canceling the order - with a confirm option to avoid any accidents
   ![image](https://github.com/karin-jpg/orders-project-frontend/assets/52075166/3fa3d218-5995-4dd2-85ea-6d405f2a44d1)

 
### Conclusion
This Angular page implemented with just the basic of DDD is just a simple co-funcionality to the use of the [Symfony API](https://github.com/karin-jpg/orders-project-api/edit/main/README.md)  
Follow the provided instructions for installation and usage to get started and remember to have the Symfony API running together!

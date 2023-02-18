# Cheat sheet

1. Initialize project
    * npm init -y
    * npm i express
    * npm i -D nodemon
2. install and setup express
    * add routes
    * add body parser
    * add static routes
3. Add view engine
    * npm i express-handlebars
    * register with express
    * add views folder
    * add home template
    * add home layout
    * add partial template folder
4. Add home controller
    * add controller to routes
5. Configure database
    * npm i mongoose
    * set strict query
6. Authentication
    * fix html links in layout
    * add auth controller
    * add register page
    * add post register action
    * add login page
7. Add user model
8. Add auth service
9. Install bcrypt and cookie-parser
    * npm i bcrypt cookie-parser
10. Register user
    * validate repeat password
    * use bcrypt to hash password
12. Generate jwt token
    * npm i jsonwebtoken
    * OPTIONAL: use util.promisify to use async
    * generate token with payload
    * add token to cookie
13. Add auth middleware
    * add decoded token
    * use authentication
14. Logout
15. Authorize middleware
16. Dynamic navigation

1. npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form

2. crreated env file and .env.sample file

3.created database,collection in Appwrite website and set attributes and indexes in collection and created a bucket.

4. createde conf=> conf.js and store all env there bcz sometimes our IDs can be taken as number so to make it in String form we do that.

5. creating auth.js in appwrite folder in src, where we create a class for signUp,login,logout, userStatus etc. we are making it in class form because it helps us whenever we change our backend service.

6. creating config.js in appwrite folder , here we create a class component same as step 5 for our dataBase for user to createPost,upadatePost,deletePost,getPost,updatefiles etc..

7. we will create redux tolkit for session storage

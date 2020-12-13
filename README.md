1. Client Side:
   .react app created using create-react-app
   .App.js will render Home component.
   .Home Component will render the 1st page where a person can submit the roll numbers, once user enters the roll numbers, it will be splited into an array and will do general         check and sends each roll number to backend server using forEach loop. 
   .Loader Component will show loader until the result is fetched.
   .Results Component will show the results of all the roll numbers in tabular format.
   .Css files are used respetively for them.
   
2. Server Side:
    .express app created using express generator.
    .Index.js has the logic to fetch the data from the external api, once the data is received from the front end, the data is sent to external server and then it sends back the        results to the front end. 
   
3. Libraries and plugins used: 
    .react-bootstrap
    .Axios to send data from front end to backend.
    .express framework for node.js backend server
    .request module to send request to the external api.
    .cors to allow cross origin sharing.
    
4. 
 
    
   

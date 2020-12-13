1. Client Side:
    react app created using create-react-app
   .App.js will render Home component.
    Home Component will render the 1st page where a person can submit the roll numbers, once user enters the roll numbers, it will be splited into an array and will do general       check and sends each roll number to backend server using forEach loop. 
    Loader Component will show loader until the result is fetched.
    Results Component will show the results of all the roll numbers in tabular format.
    Css files are used respetively for them.
   
2. Server Side:
     express app created using express generator.
     Index.js has the logic to fetch the data from the external api, once the data is received from the front end, the data is sent to external server and then it sends back the        results to the front end. 
   
3. Libraries and plugins used: 
    .react-bootstrap
    .Axios to send data from front end to backend
    .express framework for node.js backend server
    .request module to send request to the external api
    .cors to allow cross origin sharing
    
4.test case and screenshots

input : 5,6,9,12,18,20,25,30,32,36,37,38,40,42,45
![image](https://user-images.githubusercontent.com/28905722/102017689-6e4b2180-3d8e-11eb-95c1-71dd09ce6a80.png)

output
![image](https://user-images.githubusercontent.com/28905722/102017731-b66a4400-3d8e-11eb-93bd-98f2f801cbea.png)

input : hello,2,3,4
![image](https://user-images.githubusercontent.com/28905722/102017775-ed405a00-3d8e-11eb-95ff-e95f5e805558.png)

output
![image](https://user-images.githubusercontent.com/28905722/102017791-034e1a80-3d8f-11eb-938d-baab2c2e2bc7.png)

input : 6,7,8,90
![image](https://user-images.githubusercontent.com/28905722/102017838-46a88900-3d8f-11eb-8e0e-a767676dedb3.png)

output : 
![image](https://user-images.githubusercontent.com/28905722/102017853-6b046580-3d8f-11eb-85aa-13c866eee77a.png)



    
   

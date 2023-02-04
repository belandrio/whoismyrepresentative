## Steps for running Whoismyrepresentative?

First you need to run the backend part. There is a folder: server.

#### `cd server`
#### `npm install`
#### `npm run dev`

This will expose two endpoints: http://localhost:5000/getAllSensByState/:state and http://localhost:5000/getAllRensByState/:state. The CORS issue is fixed through https://www.npmjs.com/package/cors. 

Then, you can got to the front end folder. I have used React with TS and Tailwind for styling. Run the following commands:

#### `cd client`
#### `npm install`
#### `npm run start`

You can see the app at http://localhost:3000/

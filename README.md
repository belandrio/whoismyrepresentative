## Steps for running Whoismyrepresentative?

### Backend part 

There is a .nvmrc file, that contents just a simple string representing the version of Node.js the project requires. I have node version 18.7.0, that's why it is <b>v18.7.0</b>.

If you dont have nvm (Node Version Manager) and you have a different node version run:</br>
<code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash</code>

If you get this error: Profile not found. Tried ~/.bashrc, ~/.bash_profile, ~/.zshrc, and ~/.profile, run:</br>
<code>echo "source ~/.bash_profile" >> ~/.zshrc</code>

Close the terminal and reopon a new terminal and run:</br>
<code>nvm</code></br>

Now you be able to see all available commands with nvm. If something goes wrong and you still get <code>nvm: command not found </code> follow the [documentation](https://github.com/nvm-sh/nvm).

Run the next commands:</br>
<code>cd server</code></br>
<code>nvm install</code></br>
<code>npm install</code></br>
<code>npm run dev</code></br>

If you get this error: <code>EADDRINUSE</code>, that means that the port is already taken, so either change the port, in server/server.js & client/package.json, either kill the other thing running in the same port. 

We have two endpoints: http://localhost:5000/getAllSensByState/:state and http://localhost:5000/getAllRensByState/:state. The CORS issue is fixed through https://www.npmjs.com/package/cors.

### Front end part 

I have used React with TS and Tailwind for styling. </br>
Run the next commands:</br>

<code>cd client</code></br>
<code>npm install</code></br>
<code>npm run start</code></br>

You can see the app at http://localhost:3000/

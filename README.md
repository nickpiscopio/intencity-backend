# This is the README for how to install Intencity's backend services.

## Documentation

This goes over how to incorporate Node.JS with Express and TypeScript 2.

    http://brianflove.com/2016/11/08/typescript-2-express-node

## Install

Install the node packages via:

    npm install

#### Postgres

##### MacOS
    https://www.codementor.io/devops/tutorial/getting-started-postgresql-server-mac-osx
    
##### Linux
    https://www.godaddy.com/garage/tech/config/how-to-install-postgresql-on-ubuntu-14-04/
    
Install Postgres:

    # On Mac
    brew install postgresql
    
    # On Linux
    sudo dpkg --configure -a
    sudo apt-get -f install
    sudo apt-get update
    sudo apt-get install postgresql postgresql-contrib
    
Version information:
    
    postgres -V                     # This command only works on Mac.
    postgres (PostgreSQL) 9.6.5
    
Start and stop Postgres:

It should run on port 5432

    # On Mac
    brew services start postgresql
    brew services stop postgresql
    pg_ctl -D /usr/local/var/postgres start && brew services start postgresql   # Starts Postgres automatically
    
    # On Linux
    sudo service postgresql start
    sudo service postgresql stop
    sudo update-rc.d postgresql enable       # Starts Postgres automatically

Start Postgres SQL:

    # On Mac
    psql postgres
    
    # On Linux
    sudo -u postgres -i
    psql
    
Create the database and user:

    CREATE ROLE intencit with LOGIN PASSWORD 'Fkw8ywJ267';
    ALTER ROLE intencit CREATEDB;
    SET ROLE intencit;
    CREATE DATABASE intencity;
    GRANT ALL ON DATABASE intencity TO intencit;
    
Quick tips

    \l                  # Shows a list of databases.
    \dt                 # Shows a list of database tables.
    \d+ [TABLE_NAME]    # Describes a specified table.
    \quit               # Quits out of the psql interface.
    \c [DATABSE_NAME]   # Connects to a different databases.
    
## Run the code

### From IntelliJ
To run the code from IntelliJ, select:  
* Run  
* Edit Configurations...  
* Click the '+' button in the upper left corner.  
* Select npm.  
* Name the configuration.  
* Select the command "run".  
* Select the Script, "debug".  
* Select "node" as the Node interpreter.  
* Select OK to save.

Click the play button to run the application. 
 
Click the debug button to debug the application.  

**Note: To debug a NodeJS application, the breakpoint needs to be set in the corresponding location in the 'dist' folder. This is because TypeScript needs to be compiled into JavaScript, and thus run from the compiled JavaScript.**

### From NPM

TypeScript needs to be compiled into JavaScript prior to running the backend. To compile run:

    npm run build

To start the server run:

    npm run app

To compile and start the server afterwards, run:

    npm run start
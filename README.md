# Write your Readme here; explaining how to use this app
# ISTE 422 Final

This is a csv parsing application that takes in csv files, returns the base file and the base file parsed into JSON




## Prerequisites 

This project requires Node v22.15.0

```bash
  nvm install v22.15.0
  nvm use v22.15.0
```
    
## Installation 

1. Clone the repo
```bash
  git clone https://github.com/Ksullivan87/422-final
```

2. Install NPM packages
   ```sh
   npm install
   ```


## Deployment
1. Compose the Docker Container
```bash
docker compose up -d
```


## Usage

Once the container is composed and running, the volumes should be available to recieve and deliver files. This is only a `CSV` to `JSON` parser, and as such the system will not accept any file formats aside from `CSV`. Once a `CSV` file is placed into the `inbound` folder, the system will automaticall parse and translate the file into `JSON`, that `JSON` file will be available in the `Outbound` folder. The original `CSV` file will also be made available in the `Processed` folder. 


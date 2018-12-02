# Use a lighter version of Node as a parent image
FROM node:10
# Set the working directory to /client
WORKDIR /usr/src/e-sante
# copy package.json into the container at /client
COPY package*.json ./
# install dependencies
RUN npm install --global create-react-app
RUN npm install
# Copy the current directory contents into the container at /client
COPY . .
# Make port 80 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]

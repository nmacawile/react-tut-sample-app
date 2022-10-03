FROM node:14-alpine
RUN apk add git
RUN git config --global core.autocrlf true
WORKDIR /app
RUN npx create-react-app .
COPY . .

EXPOSE 3000
CMD ["npm", "start"]

# docker build --tag react-tut .
# docker create --name react-tut -p 3000:3000 -it --volume react-tut:/app react-tut

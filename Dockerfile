FROM node:lts-buster

RUN git clone https://github.com/Neeraj-x0/Millie-MD /root/Neerajx0

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]


FROM node:lts-buster
RUN git clone https://github.com/Neeraj-x0/Millie-MD /Neerajx0/millie
WORKDIR /Neerajx0/millie
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]

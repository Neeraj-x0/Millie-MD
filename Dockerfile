FROM node:lts-buster
RUN git clone https://github.com/Neeraj-x0/Millie-MD /root/Neerajx0
WORKDIR /root/Neerajx0
ENV TZ=Asia/Kolkata
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/
COPY package.json .
RUN npm install
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]

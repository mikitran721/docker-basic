# cau lenh

- de chay docker co san: `docker build -t my_nginx_vietnam .` (dau . la noi luu tru file Dokerfile - dang o thu muc hien thoi)
- khoi chay 1 image: `docker run -d -p 8080:80 --name mynginx-vn`
  - de docker chay khong bi thoat ra dung lenh `docker run -dt --name mynode-app my-node-image`
- cau lenh push image len docker.hub:
  ++ `docker tag my_nginx-vn mikitran721/my_nginx_vn:2399` -> de tao tag truoc, sau do moi dung lenh `push`
- cau lenh `push` len docker.hub `docker push mikitran721/my_nginx_vn:23099`
- de `remove` 1 images tren docker.hub sd cau lenh `docker rmi mikitran721/my_nginx_vn:23099`

# xem noi dung ben trong 1 container

- dung lenh `docker exec -it my-node-app bash` -> de truy cap vao thu muc lam viec cua no
- lenh `ls -la`: liet ke cac file trong thu muc dang o

# cap nhat noi dung 1 container dang chay

tao file `docker-compose.yml` trong thu muc code, noi dung

```javascript
    version: '3'

services:
  my-node-img2:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: my-node-app2
    ports:
      - '4001:4000'
```

- tao file `docker-compose.yml` va chen cac noi dung update zo
- sau khi tao file compose xong, sd cau lenh: `docker-compose up -d` luu y la chay trong cung thu muc code.
- sau khi cap nhat lai noi dung file `DOCKERFILE`, su dung cau lenh `docker-compose build`
  sau cau lenh `build` tren, no se tu dong doi image cu sang ten <none>
- su dung lenh `docker-compose down`: no se tu dong dung&xoa container voi lenh `up` o ben tren.

# chia se va pull/keo ve

- su dung cau lenh `docker pull mikitran721/my_nginx_vn2:23099`
- sau khi pull xong thi tai local co the su dung cau lenh sau de run 1 container voi images moi pull ve kia
  `docker run -d -p 8080:80 --name my_nginx-vn-2 mikitran721/my_nginx_vn2:23099`

# day mot project 'node/express' len docker.hub

- b1: tao du an
- b2: them file `Dockerfile` cung voi cac mo ta

# kien thuc:

- dockerhub: giong nhu githup cua docker
- de push len docker.hub thi can login truoc
-

# gio thuc hanh

`33:00`

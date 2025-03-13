# Sử dụng image Node.js chính thức
FROM node:18-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép file package.json và cài đặt dependencies
COPY package.json ./
RUN npm install

# Sao chép toàn bộ mã nguồn
COPY . .

# Mở port 3000
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "start"]
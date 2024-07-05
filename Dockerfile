# FROM node as frontend
# WORKDIR /frontend
# COPY frontend .
# RUN npm ci
# RUN npm run-script start

# FROM maven AS backend
# WORKDIR /backend
# COPY backend .
# RUN mkdir -p src/main/resources/static
# COPY --from=frontend /frontend/start src/main/resources/static
# RUN mvn clean verify

# FROM openjdk:17-jdk-slim
# COPY --from=backend /backend/target/group_project.jar app.jar
# EXPOSE 8090
# CMD ["sh", "-c", "java -Dserver.port=8080 -jar /app.jar"]

# FROM maven AS build
# WORKDIR /app
# COPY backend /app
# RUN mvn clean package -DskipTests
# RUN ls -la /app/target

# FROM node as frontend
# WORKDIR /frontend
# COPY frontend .
# RUN npm ci
# RUN npm run-script start

# FROM eclipse-temurin:17-jdk-jammy
# WORKDIR /backend
# COPY --from=build /app/target/group_project-0.0.1-SNAPSHOT.jar app.jar
# EXPOSE 8090
# ENTRYPOINT ["java", "-jar", "app.jar"]




# FROM node AS frontend-builder
# WORKDIR /app/frontend
# COPY frontend/package*.json ./
# RUN npm install
# COPY frontend/ ./
# RUN npm run build

# FROM maven AS backend-builder
# WORKDIR /app/backend
# COPY backend/pom.xml ./
# COPY backend/mvnw ./
# COPY backend/.mvn .mvn
# RUN mvn dependency:go-offline
# COPY backend/ ./
# RUN mvn package -DskipTests

# FROM openjdk:17-jdk-slim
# WORKDIR /app

# COPY --from=frontend-builder /app/frontend/build /app/frontend

# COPY --from=backend-builder /app/backend/target/*.jar /app/backend/app.jar

# EXPOSE 3000 8090

# ENV CORS_ALLOWED_ORIGINS=http://10.0.0.14:3000
# ENV CORS_ALLOWED_ORIGINS=http://localhost:3000
# ENV CORS_ALLOWED_ORIGINS=https://cmpt276-groupprojecttest.onrender.com
# ENV CORS_ALLOWED_ORIGINS=http://cmpt276-groupprojecttest.onrender.com

# CMD ["java", "-jar", "/app/backend/app.jar"]



FROM node:16 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package.json front/package-lock.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

FROM maven AS backend-build
WORKDIR /app/backend
COPY backend/pom.xml backend/mvnw backend/.mvn/ ./
COPY backend/src/ ./src/
RUN ./mvnw clean package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /app

COPY --from=backend-build /app/backend/target/*.jar ./backend.jar

COPY --from=frontend-build /app/frontend/build ./src/main/resources/public

EXPOSE 8090

ENTRYPOINT ["java", "-jar", "backend.jar"]
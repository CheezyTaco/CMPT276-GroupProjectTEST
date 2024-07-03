FROM node as frontend
WORKDIR /frontend
COPY frontend .
RUN npm ci
RUN npm run-script start

FROM maven as backend
WORKDIR /backend
COPY backend .
RUN mkdir -p src/main/resources/static
COPY --from=frontend /frontend/build src/main/resources/static
RUN mvn clean verify

FROM openjdk:17-jdk-slim
COPY --from=backend /backend/target/group_project.jar app.jar
EXPOSE 8080
CMD ["sh", "-c", "java -Dserver.port=8080 -jar /app.jar"]
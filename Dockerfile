FROM node as frontend
WORKDIR /frontend
COPY frontend .
RUN npm ci
RUN npm run-script start

# FROM maven AS build
# WORKDIR /app
# COPY backend /app
# RUN mvn clean package -DskipTests
# RUN ls -la /app/target

# FROM eclipse-temurin:17-jdk-jammy
# WORKDIR /backend
# COPY --from=build /app/target/group_project-0.0.1-SNAPSHOT.jar app.jar
# EXPOSE 8090
# ENTRYPOINT ["java", "-jar", "app.jar"]

FROM maven as backend
WORKDIR /app
COPY backend /app
RUN mkdir -p src/main/resources/static
COPY --from=frontend /frontend/build src/main/resources/static
RUN mvn clean verify

FROM eclipse-temurin:17-jdk-jammy
COPY --from=backend /app/target/group_project-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "app.jar"]
# CMD ["sh", "-c", "java -jar app.jar"]
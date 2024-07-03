FROM maven AS build
WORKDIR /app
COPY backend /app
RUN mvn clean package -DskipTests
RUN ls -la /app/target

FROM eclipse-temurin:17-jdk-jammy
WORKDIR /backend
COPY --from=build /app/target/group_project-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
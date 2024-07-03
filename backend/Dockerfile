FROM maven AS build
WORKDIR /app
COPY pom.xml ./
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8090
CMD ["java", "-jar", "app.jar"]
# React Calculator IMC + IRPF 

To Run
`npm install`

To Start
`npm run start`

### Dependencys
Java Apps
1. [Java - RestAPI IRPF](https://github.com/prof-emilio-resende/java-rest-api)
  - Need to change Port to 8090
  Add this on application.properties
  ```
  server.port=8090
  ```
  - Add CrossOrigin on controllers/IrpfController.java
  ```
  @CrossOrigin(origins = {
    "http://localhost:8000", 
    "http://127.0.0.1:8000",
    "http://localhost:3000", 
    "http://127.0.0.1:3000"
  })
  ```
  - run
  `mvn spring-boot:run`
2. [Java - RestAPI IMC](https://github.com/prof-emilio-resende/java-imc-calc-api)
  - run
  `mvn spring-boot:run`
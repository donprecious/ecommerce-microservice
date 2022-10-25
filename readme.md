# Ecommerce microservice application  
## Technology 
- NodeJs
- ExpressJs
- TypeScript
- Mongodb
- RabbitMQ 

## Microservices 
- Product service
- customer service 
- order service 
- paymentgate way 
## Shared Libary 
- demo-ecommerce-shared-libary 
   - message queues
   - reusable utlity methods 

# Build and run with docker compose 
- step 1 
docker-compose -f docker-compose-build.yaml build --parallel

- step 2 
docker-compose up

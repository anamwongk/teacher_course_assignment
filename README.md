# Teacher Course Assignment

## Instructions

- Run `docker-compose up` to start two containers:
```
Postgres database container
Express server container
```
- Express server should be up on http://localhost:3000

## REST API
The REST API to the example app is described below. `/api/v1/`

### Teacher

`POST /teachers`

**Request**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "birthday": "1993/01/01"
}
```
**Response**
```json
{
  "success": true,
  "message": "Created successfully"
}
```

`GET /teachers`

**Response**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "age": 28,
      "createdAt": "2021-03-27T16:07:08.991Z",
      "updatedAt": "2021-03-27T16:07:08.991Z"
    }
  ]
}
```
### Course

`POST /courses`

**Request**
```json
{
  "course_name": "Lorem ipsum dolor sit amet'",
  "course_description": "Lorem ipsum dolor sit amet, consectetur adipiscing...",
  "teacherId": 1
}
```

**Response**
```json
{
  "success": true,
  "message": "Created successfully"
}
```

`GET /courses`

**Response**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "course_name": "Lorem ipsum dolor sit amet'",
      "course_description": "Lorem ipsum dolor sit ame...",
      "createdAt": "2021-03-27T16:07:18.772Z",
      "updatedAt": "2021-03-27T16:07:18.772Z",
      "teacherId": 1,
      "Teacher": {
          "first_name": "John",
          "last_name": "Doe",
          "age": 28
      }
    }
  ]
}
```

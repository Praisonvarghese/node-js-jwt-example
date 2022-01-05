1. http://localhost:3000/login

METHOD:POST

REQUEST
{
    "username" : "Joi"
}


RESPONSE
{
    "accesstoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9pIiwiaWF0IjoxNjQxMzc5NzQ4LCJleHAiOjE2NDEzNzk3NjN9.q494tLnTSzL7wSHxb8b2slKW-8JoqV9Soc8bAo_HBB4",
    "resfreshtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9pIiwiaWF0IjoxNjQxMzc5NzQ4fQ.PEV5KhAmJqi7Vi7lFr7SZpEd2uLYDhXgcfNsZpy7IGY"
}

2. http://localhost:3000/posts

METHOD: GET

HEADER : Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9pIiwiaWF0IjoxNjQxMzc5NzQ4LCJleHAiOjE2NDEzNzk3NjN9.q494tLnTSzL7wSHxb8b2slKW-8JoqV9Soc8bAo_HBB4

RESPONSE
[
    {
        "username": "Joi",
        "tittle": "Post 2"
    }
]

3.http://localhost:3000/refreshtoken 

METHOD: POST

REQUEST 
{
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9pIiwiaWF0IjoxNjQxMzc5NzQ4fQ.PEV5KhAmJqi7Vi7lFr7SZpEd2uLYDhXgcfNsZpy7IGY"
}

RESPONSE
{
    "accesstoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9pIiwiaWF0IjoxNjQxMzc5NzgwLCJleHAiOjE2NDEzNzk3OTV9.mEbA3Xpw_62X3XllL3jtG443b4OUA5jedY1Mdb1BJiA"
}

4.http://localhost:3000/logout

METHOD: DELETE

REQUEST 
{
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9pIiwiaWF0IjoxNjQxMzc5NzQ4fQ.PEV5KhAmJqi7Vi7lFr7SZpEd2uLYDhXgcfNsZpy7IGY"
}

RESPONSE
OK



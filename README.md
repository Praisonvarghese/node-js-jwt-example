1. http://localhost:3000/login

METHOD:POST

REQUEST
{
    "username" : "Joi"
}


RESPONSE
{
    "accesstoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9pIiwiaWF0IjoxNjQxMzc1ODk5fQ.qFCmxXRSW2g1oftZRyv7xmFUSvkKac5BZ6aSymKRFuc"
}

2. http://localhost:3000/posts

METHOD: GET

HEADER : Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9pIiwiaWF0IjoxNjQxMzc1ODk5fQ.qFCmxXRSW2g1oftZRyv7xmFUSvkKac5BZ6aSymKRFuc

RESPONSE
[
    {
        "username": "Joi",
        "tittle": "Post 2"
    }
]


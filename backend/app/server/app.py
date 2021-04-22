from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
# from ..server.auth.jwt_bearer import JWTBearer

from .auth.jwt_bearer import JWTBearer
from .routes.student import router as StudentRouter
from .routes.asset import router as AssetRouter
from .routes.admin import router as AdminRouter


# from starlette.applications import Starlette
# from starlette.middleware import Middleware
# from starlette.requests import Request
# from starlette.responses import JSONResponse

# from starlette_context import context, plugins
# from starlette_context.middleware import RawContextMiddleware

# middleware = [
#     Middleware(
#         RawContextMiddleware,
#         plugins=(
#             plugins.RequestIdPlugin(),
#             plugins.CorrelationIdPlugin()
#         )
#     )
# ]

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",

    "http://18.219.255.26:8080",
    "http://18.219.255.26",
    "http://18.219.255.26.tiangolo.com",
    "https://18.219.255.26.tiangolo.com",
]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# app.add_middleware(CORSMiddleware, allow_origins=['*'])
token_listener = JWTBearer()

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app, sighs."}


app.include_router(AdminRouter, tags=["Administrator"], prefix="/admin")
app.include_router(StudentRouter, tags=["Students"], prefix="/student", dependencies=[Depends(token_listener)])

app.include_router(AssetRouter, tags=["Assets"], prefix="/asset", dependencies=[Depends(token_listener)])

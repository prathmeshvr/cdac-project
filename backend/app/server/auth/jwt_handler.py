import time
from typing import Dict

import jwt
from decouple import config


def token_response(token: str):
    return {
        "access_token": token
    }

JWT_SECRET = 'secret'


def signJWT(user_id: str) -> dict:
    # Set the expiry time.
    payload = {
        'user_id': user_id,
        'expires': time.time() + 240000
    }
    return token_response(jwt.encode(payload, 'secret', algorithm="HS256").decode())


def decodeJWT(token: str) -> dict:
    try:
        decoded_token = jwt.decode(token.encode(),'secret', algorithms=["HS256"])
        return decoded_token if decoded_token['expires'] >= time.time() else None
    except:
        return None

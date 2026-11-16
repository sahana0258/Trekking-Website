from django.shortcuts import render

# Create your views here.
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def login_user(request):

    if request.method == "POST":

        data = json.loads(request.body)

        username = data.get("username")
        password = data.get("password")

        user = authenticate(
            username=username,
            password=password
        )

        if user is not None:
            return JsonResponse({
                "message": "Login successful"
            })

        return JsonResponse({
            "message": "Invalid username or password"
        }, status=401)
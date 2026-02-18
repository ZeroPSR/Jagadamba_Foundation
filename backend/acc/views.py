from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Users


@csrf_exempt
@require_http_methods(["POST"])
def register(request):
    try:
        data = json.loads(request.body)
        user_name = data.get('user_name')
        user_mail = data.get('user_mail')
        user_phone = data.get('user_phone')
        password = data.get('password')
        
        # Check if user_mail already exists
        if Users.objects.filter(user_mail=user_mail).exists():
            return JsonResponse("Use another Email", safe=False)
        
        # Create new user
        Users.objects.create(
            user_name=user_name,
            user_mail=user_mail,
            user_phone=user_phone,
            password=password
        )
        
        return JsonResponse("Registered", safe=False)
    
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@csrf_exempt
@require_http_methods(["POST"])
def login(request):
    try:
        data = json.loads(request.body)
        user_mail = data.get('user_mail')
        password = data.get('password')
        
        # Check if user exists
        try:
            user = Users.objects.get(user_mail=user_mail)
        except Users.DoesNotExist:
            return JsonResponse("User not found.", safe=False)
        
        # Check password
        if user.password != password:
            return JsonResponse("Invalid password.", safe=False)
        
        # Return user info
        return JsonResponse({
            "user_id": user.user_id,
            "user_name": user.user_name
        })
    
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)

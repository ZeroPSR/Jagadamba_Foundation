from django.shortcuts import render, redirect
import requests

BACKEND_URL = "http://127.0.0.1:8001"


def home(request):
    return render(request, "web/h.html")


def register_view(request):
    if request.method == "POST":

        data = {
            "user_name": request.POST.get("user_name"),
            "user_mail": request.POST.get("user_mail"),
            "user_phone": request.POST.get("user_phone"),
            "password": request.POST.get("password"),
        }

        response = requests.post(
            f"{BACKEND_URL}/acc/register/",
            json=data
        )

        if response.status_code == 200:
            return redirect("home")

        return render(request, "web/h.html", {"error": "Registration failed"})

    return redirect("home")


def login_view(request):
    if request.method == "POST":

        data = {
            "user_mail": request.POST.get("user_mail"),
            "password": request.POST.get("password"),
        }

        response = requests.post(
            f"{BACKEND_URL}/acc/login/",
            json=data
        )

        if response.status_code == 200:
            result = response.json()
            
            # Check if login was successful (dict) or failed (string)
            if isinstance(result, dict) and "user_id" in result:
                request.session["user_id"] = result["user_id"]
                request.session["user_name"] = result["user_name"]
                return redirect("home")
            else:
                # result is an error string like "User not found." or "Invalid password."
                return render(request, "web/h.html", {"error": result})

        return render(request, "web/h.html", {"error": "Invalid credentials"})

    return redirect("home")

from django.shortcuts import render, HttpResponse
from datetime import datetime
from home.models import Contact,blogs
from django.contrib import messages

# Create your views here.
def index(request):
    result = blogs.objects.all
    return render(request, 'index.html',{'blogs':result})
    # return HttpResponse("this is homepage")


def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        desc = request.POST.get('desc')
        contact = Contact(name=name, email=email, phone=phone, desc=desc, date = datetime.today())
        contact.save()
        messages.success(request, 'Thanks for your precious Time!')
    return render(request, 'contact.html')


 
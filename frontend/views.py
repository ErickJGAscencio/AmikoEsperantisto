from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def libros(request):
    return render(request, 'libros.html')
from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def materiales(request):
    return render(request, 'materiales.html')

def libros(request):
    return render(request, 'libros.html')
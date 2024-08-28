from django.urls import path
from .views import TaskListCreate, TaskRetrieveUpdateDestroy

urlpatterns = [
    path('todos/', TaskListCreate.as_view()),
    path('todos/<int:pk>/', TaskRetrieveUpdateDestroy.as_view())
]
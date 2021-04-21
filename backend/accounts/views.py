from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import OurUsersSerializers, RegisterSerializer, LoginSerializer


#Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class=RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": OurUsersSerializers(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

#Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class=LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": OurUsersSerializers(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

#Get User API
class UserAPI(generics.RetrieveAPIView):
    permissions=[
        permissions.IsAuthenticated,
    ]

    serializer_class=OurUsersSerializers

    def get_object(self):
        #looks at the token in the request and returns the user associated with that token
        return self.request.user
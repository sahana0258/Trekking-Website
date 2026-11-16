from django.contrib.auth.models import User
from rest_framework import serializers, generics, permissions


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ("username", "password")

    def create(self, validated_data):
        # create_user hashes the password before saving to MySQL
        return User.objects.create_user(
            username=validated_data["username"],
            password=validated_data["password"],
        )


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]
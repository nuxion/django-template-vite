from django.contrib.auth.models import Group
from apps.accounts.models import CustomUser
from rest_framework import serializers

# from django.contrib.auth import get_user_model

# User = get_user_model()


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["url", "username", "email", "groups"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]

from django.db import models

class Proverb(models.Model):
    description = models.CharField('description', blank=True, null=True, max_length=100)
    proverb = models.CharField('proverb', blank=True, null=True, max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
from django.db import models

class Trek(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    difficulty = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name
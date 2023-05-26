from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG_DEV')

ALLOWED_HOSTS = []

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'proverb_game',
        'USER': 'root',
        'PASSWORD': 'toor',
        'HOST': 'database',
        'PORT': '3306',
    }
}

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = 'static/'
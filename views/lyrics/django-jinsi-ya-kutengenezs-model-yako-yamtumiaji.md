---
layout    : post
title     : Django - Jinsi ya kutengeneza Model yako ya watumiaji 
date      : 2022-05-22 07:35:05
tags      : ["django", "python3"]
---





kwenye Django nje ya boksi mtumiaji hua anatambuliwa kwa kutumia **jina la mtumiaji "username"**  kwenye makala haya tutakwenda kuangalia jinsi ambanyo unaweza kubadilisha utambulisho na uthibitishwaji wa mtumiaji na kutumia **barua pepe "email"** badala ya **jina la mtumiaji "username"** 

Makala haya yana elezea hatua kwa hatua jinsi ambavyo unaweza kutengeneza model yako ya Watumiaji kwenye Django ili **barua pepe** iweze kutumika kama chaguo la msingi la **utambulishaji** na **uthibitishwaji** wa mtumiaji badala ya **jina la mtumiaji**.

Jambo lakuzingatia nikwamba hatua ambazo nitazionyesha kwenye makala haya zinahitaji mabadiliko makubwa kwenye **schema** za **hifadhi data**. Kwa mantiki hiyo inashauriwa kufanyika kwenye project mpya. Kama una project ambayo iko kazini na ungependa ufanye mabadiliko, itakubidi uchukue backup ya data zako na utengeneze upya **hifathi data**.

## Malengo
Mwisho wa makala haya utakuwa na uwezo waku:

Elezea utofauti kati ya **AbstractUser** na **AbstractBaseUser**

kuelezea kwa nini utahitaji kuwezesha **User model** yako wakati unaanzisha project mpya ya Django

Anzisha project mpya ya Django kwa kutumia modle yako ya mtumiaji **"custom User model"**

Tumia **barua pepe** kama chaguo la msingi la utambulisho badala ya **jina la mtumiaji** wakati wa uthibitisho

Fanya **majaribio** wakati wa uwendelezaji wa utekelezaji wa model yako ya watumiaji


## AbstractUser vs AbstractBaseUser
Chaguo la msingi la model ya Mtumiaji kwenye Django nikutumia **jina la mtumiaji** ili kwa kipeke iweze kumtambua mtumiaji wakati wa **uthibitisho**.
Kama utahitaji kutumia **barua pepe**, utahitaji kutengeneza Model yako ya mtumiaji kwa mgawanyiko wa **AbstractUser** au **AbstractBaseUser**.

**Chaguzi:**

``AbstractUser``: Tumia uchaguzi huu kama umerithika na **fields** ambazo tayari zipo kwenye modle ya mtumiaji na unahitaji kuondoa field ya **jina la mtumiaji**.

``AbstractBaseUser``: Tumia uchaguzi huu kama unataka kutengeneza modle yako ya mtumiaji kutokea mwazo, hii itakua ni modle mpya kabisa yakwako  kuazia mwazo.

Tuta angalia chaguzi zote mbili kwenye makala haya ``AbstractUser`` pamoja na ``AbstractBaseUser``.

Hatua ziko sawa kwa zote:

1.) **Tengeneza Model yako ya ``mtumiaji na Manager``**

2.) **Sasisha ``settings.py``**

3.) **Binafsisha form ya ``UserCreationForm`` na ``UserChangeForm``**

4.) **Sasisha ``admin``**

Inashauriwa kuweka modle yako ya mtumiaji wakati unaanza na project mypa ya Django. Kwani bila hiyo, unaweza kulazimika kutengeneza modle nyingine 
(kama vile UserProfile) nakuiunganisha na modle ya mtumiaji ya Django kwa kutumia **"OneToOneField"** kama utahitaji kuweka field mpya kwenye modle.

# Maandalizi ya Project

Aza na kutengeneza project mpya ya django pamoja na app ya watumiaji:

{% highlight "shell" %}
mkdir Django-usajili-na-uthibitisho-mfumo && cd Django-usajili-na-uthibitisho-mfumo
python3 -m venv venv
source venv/bin/activate
python3 -m pip install --upgrade pip
pip3 install Django
django-admin startproject watumiaji_django .
python3 manage.py startapp accounts
{% endhighlight %}

Jisikie huru kwa kubadilisha ``virtualenv`` na ``Pip`` kwajili ya ``Poetry`` au ``Pipenv``.

Usi fanye **uhamiaji "migrations"** kwanza. Kumbuka: Nilazima utengeneza modle yako ya watumiaji kabla ya kufanya uhamiaji kwa mara ya kwanza.

Ongeza hii **app mpya** kwenye orotha ya ``INSTALLED_APPS`` kwenye ``settings.py``:
{% highlight "python" %}
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'accounts',
]
{% endhighlight %}
## Majaribio

Tuanze kwanza na mbinu ya majaribio:
{% highlight "shell" %}
nano accounts/tests.py
{% endhighlight %}
Alafu weka
{% highlight "python" %}
from django.contrib.auth import get_user_model
from django.test import TestCase


class UsersManagersTests(TestCase):

    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(email='normal@user.com', password='foo')
        self.assertEqual(user.email, 'normal@user.com')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)
        try:
            # username is None for the AbstractUser option
            # username does not exist for the AbstractBaseUser option
            self.assertIsNone(user.username)
        except AttributeError:
            pass
        with self.assertRaises(TypeError):
            User.objects.create_user()
        with self.assertRaises(TypeError):
            User.objects.create_user(email='')
        with self.assertRaises(ValueError):
            User.objects.create_user(email='', password="foo")

    def test_create_superuser(self):
        User = get_user_model()
        admin_user = User.objects.create_superuser(email='super@user.com', password='foo')
        self.assertEqual(admin_user.email, 'super@user.com')
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)
        try:
            # username is None for the AbstractUser option
            # username does not exist for the AbstractBaseUser option
            self.assertIsNone(admin_user.username)
        except AttributeError:
            pass
        with self.assertRaises(ValueError):
            User.objects.create_superuser(
                email='super@user.com', password='foo', is_superuser=False)
{% endhighlight %}  

ukisubutu kufanya **jaribio/test** kwa sasa lita feli usihamaki

# Model Manager
Kwanza, tuna hitaji kuongeza **Manager** wetu, kwa kufanya **subclassing** kutokea kwa **BaseUserManager**, 

>> nikisema **Subclassing** tafsiri yake nikwamba na fafanua darasa jipya likiwa na mali zile zile za darasa la zamani pamoja na mabadiliko, kwenye kisa hiki inatumia barua pepe kama utambulisho wa kipekee badala ya jina la mtumiaji. 

tengeneza faili la **managers.py** ndani ya directory ya **accounts**:

{% highlight "shell" %} 
nano accounts/managers.py
{% endhighlight %}

Weka

{% highlight "python" %}
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)
        
{% endhighlight %}
# Model ya mtumiaji 

*User Model*

Fanya uamuzi wa njia gani unataka kutumia: **subclassing AbstractUser** au **AbstractBaseUser**

# AbstractUser
``sasisha accounts/models.py:``


{% highlight "python" %}
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager


class User(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email
{% endhighlight %}        
Kilicho fanyika hapo:

Tumetengeneza **darasa** jipya ambalo tumelipa jina la **User** ambalo **linatokea "subclasses"** **AbstractUser**

tume ondoa field ya **mtumiaji "username"**

Tumefanya field ya **email** iwe ina **hitajika na ya kipekee** 

Tuka weka **USERNAME_FIELD** -- ambayo inafafanua utambulisho wa kipekee wa model ya mtumiaji -- kua **barua pepe "email"**

Tuka bainisha kwamba **vitu** vyote kwenye **darasa** vinakuja kutokea kwenye **CustomUserManager**



# AbstractBaseUser
``Sasisha accounts/models.py:``

{% highlight "python" %}
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email
{% endhighlight %}



Kilicho, fanyika hapa:

Tumetengeneza darasa jingine nakulipa jina la **User** kutokea kwenye **AbstractBaseUser**
Tukaongeza fields kwajili ya **email, is_staff, is_active, na date_joined**
tukaweka **USERNAME_FIELD** -- ambayo inafafanua kwamba utambulisho wa kipekee wa **watumiaji "User"** model -- kuwa ni **barua pepe "email"** 
tukaonyesha kwamba vitu vyote kwenye darasa vinakuja kutokea kwenye **CustomUserManager**

# Settings

Ongeza mstari ufutao kwenye faili la **settings.py** ili Django ifahamu kutumia darasa jipya la **User**:

``AUTH_USER_MODEL = 'accounts.User'``

Sasa unaweza kutengeneza na kufanya **uhamiaji "migrations"**, ambao utatengeneza hifadhidata mpya ambayo inatumi **model** yetu ya **watumiaji "User"**, kabla ya kufanya hivyo hebutuangalie nijinsigani **uhamiaji** utaonekana bila kufanya **uhamiaji** kwa kupitisha kibera cha --dry-run:

{% highlight "shell" %}
python3 manage.py makemigrations --dry-run --verbosity 3
{% endhighlight %}

Bilashaka ume weza kuona kitu kama hiki

{% highlight "python" %}
class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
{% endhighlight %}

Sasa unaweza kutengeneza na kuanzisha uhamiaji 

{% highlight "shell" %}
python3 manage.py makemigrations
python3 manage.py migrate
{% endhighlight %}

Unaweza kuitumia hii model ya **mtumiaji "User"** kama kumbukumbu kwa kutumia ```get_user_model()``` au ```settings.AUTH_USER_MODEL```.

Wakati unampotengeneza account ya **mtumiaji mkuu "superuser"**, Utahitajika kuweka ``barua pepe badala ya jina la mtumiaji``:

{% highlight "shell" %}
(env)$ python3 manage.py createsuperuser
Email address: test@test.com
Password:
Password (again):
Superuser created successfully.
{% endhighlight %}

hakikisha **jaribio "test"** linafaulu

{% highlight "shell" %}
(env)$ python manage.py test
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
..
----------------------------------------------------------------------
Ran 2 tests in 0.299s

OK
Destroying test database for alias 'default'...
{% endhighlight %}

# Forms
**Tutoe "subclass"** mafomu ya **UserCreationForm na UserChangeForm** ili ya weze kutumia model yetu ya **User** tuliyo itegeneza wenyewe.

Tengeneza faili jipya kwenye director ya ```accounts``` liite **forms.py**:


{% highlight "python" %}
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import User


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ('email',)


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ('email',)


{% endhighlight %}
# Admin
Mwambie admin atumie haya mafomu kwa kutoa "subclassing" **UserAdmin** kwenye accounts/admin.py:

{% highlight "python" %}
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import User


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ('email', 'is_staff', 'is_active',)
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)


admin.site.register(User, CustomUserAdmin)
{% endhighlight %}
Ili kuweza kuongeza na kubadilisha watumiaji itakubidi uazisha server na uingie kwenye site ya admin.

![admin_add_user](https://i.ibb.co/k8VDd35/2022-04-23-02-51-51-Add-user-Django-site-admin-Brave.png)


## Hitimisho:

Kwenye makala haya, tumeangali jinsi ya kutengeneza **model** yako mwenyewe kwa ajili ya **watumiaji "User"** ili **barua pepe** itumike kama chaguo lamsingi kwajili ya **utambulisho** wa **watumiaji** badala ya **jina la mtumiaji** kutumika kwajili ya **uthibitisho**.

kwenye hadhina repo ya Django-usajili-na-uthibitisho-mfumo utapata vyanzo vyote vya code, kwa ajili ya, **AbstractUser** na **AbstractBaseUser**. 


 



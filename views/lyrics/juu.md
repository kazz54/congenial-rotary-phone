---
layout    : post
title     : Marilyn Manson - Redeemer
date      : 2015-07-25 07:35:05

tags      : ["industrial metal", "90s"]
keywords  : ["OST", "Queen of the Damned"]

author    : marylin
toc       : "toc/2015-07-marylin.njk"

opengraphimage: "/images/adverts/one-page.png"

related_link_ids :
  - 15071535  # Sweet Dreams

excerpt   : 
  I am jaded, hiding from the day
---

Nothing seems exciting, always the same hiding
It's haunting me
<!--more-->

Kwenye **makala** haya tuta kwenda kuandika **webapp** kwa kutumia
**lugha** ya **programing** inayo julikana kama **python** kwa usaidizi wa **mfumo** unao julikana kama **Django**. 

Hatakama hujawahi kuandika **program** yoyoteile bado unaweza 
kufuatilia maelekezo haya na ukafanikiwa kuandika **webapp**, kwa sababu **makala** 
haya nime ya andaa mahususi kwa ajili ya mtu ambaye hajawahi kuandika **program** lakini anataka **kujifuza** basi hii itakuwa nimoja ya sehumu zuri **kuazia**.

Nime chagua framework ya **Django** kwa sababu ina kuja na **Batteries** hivyo kuifanya kua rahisi kuitumia hasa kama nimara yako ya kwanza kukutana na **"porograming"**, na zaidi inatumia **python** moja ya **lugha** za **programing** ambazo ni rahisi kueleweka na kufanya nayo kazi lakini 
kikubwa zaidi inatumika sehemu nyingi sana huku iki jichukulia umaarufu kwenye **AI** na **machine learning** kama unataka kujikita katika eneo hilo basi kufahamu **python** kunakua ni wajibu.

**webapp** tutakayo **iendeleza** hususani kwenye makala haya inakua ni sehemu ya **kuanzia**, ichukulie kama **sahani iliyo chemshaw** kutokea hapo tutaanza kutengeneza vipengele vingi.

**Webapp** tutakayo itengeneza

![django-bootstrap2ed](https://images.ctfassets.net/9heip63yijn8/QYB7FUnMpu419SvQnEgUT/decca3d614aecb2c838fdd43cd41f6e2/django-bootstrap2ed.png)

**code** za **webpp** hii zina [patikana hapa](https://github.com/devduara0/farmers-blog)

**Django** inatumia usanifu wa **MVT** ukifutilia makala haya hadi mwisho siyo tu kwamba utakuwa umetengeneza webapp, 
lakini utakua umejifuza jinsi ya **kufanya installation ya framework ya django**
jinsi ya kuazisha project ya django kuifanyia setting naku install app.
utajifuza Model utajua jinsi ya kuandi model zako na kuuliza set
utaweza kuitawala app yako ya django kama umtumiaji mwenye mamlaka ya utawala
utaweza kuandika muonekano kwa kuulizaset utatengeneza na kuelewa URLs.

Nitakua natumia machine ambayo ina Operating System ya **Ubuntu 18.04** jina la code "**Bionic Beaver**", lakini bado unaweza kufutatilia 
na ukafikia lengo hata kama uko kwenye Operating System tofauti na ya kwangu jambo lakuzingatiya nikwamba **python** iwe imekua installed kwenye hiyo Operating System ambayo unataka/unatumia. 

__Anzaa na kuangalia kama una python.__


```python 
python -V
Python 3.6.9
```


hiyo *"Python 3.6.9"* ndiyo version ya **python** ambayo iko kwenye machine yangu
inamaana nina uwezo wakusoma na kuandika program kwa kutumia lugha ya **python**.


__Andaa mazingira ya kuhifadhi app yako.__

ili kuweka mpangilio mzuri wa mafaili nita tengeneza directory ambapo project yangu itakaa na nitaita **shambablog** na zaidi ya hapo nita tengeneza **virtual eviroment** ambayo nitaita **venv** ndani ya hiyo directory, nahii inamanisha kwamba namega kipande kidogo cha opareting system kwa jili ya hii amplication.

mahali ambapo app yangu itakaa

```shell

mkdir -p projects/shambablog

cd projects/shambablog/
```


ili kuweza kutengeneza au kuanzisha **virtual environment** inatubidi tuwe na kifurushi kwajili ya **virtual environment** 
inategemea unaweza ukawa tayari unacho kifurushi cha **virtual environment** lakini kama huna una install kama hivi

```shell
apt-get install python3-venv
```

na tengeneza **virtual environment**, naita **venv** unaweza ukaita vyoyete vile


```shell
python3 -m venv venv

```

activate **virtual environment**


```shell
source venv/bin/activate
```



kuazia sasa **vifurushi** vyote vya **python** tutakavyo install na 
kuvifanyia kazi vitakua mahususi kwajili ya mazingira/environment hii **venv** 





### Installation Ya Mfumo wa Django

nita install framework ya **Django** version *3.0.10* kwama wakati na andaa makala haya

```python 
pip3 install Django==3.0.10
```

Kama utahitaji kufanya installation ya version mpya zaidi utafanya hivi

```python 
pip3 install Django
```

**Tengeneza project ya Django.**

Nita tumia nyenzo inayo julikana kama *django-admin* kutengeneza hii project ambayo nita ita *habari_zashamba*. 
nyezo hii inafanya kazi kwenye terminal na kazi yake hasa ni kurahisisha kazi za kitawala. 

```python 
django-admin startproject habari_zashamba .
```


Ukiangalia mpangilio wa mafaili yako utakuta kitu kama hiki.

```
shambablog/
│
├── habari_zashamba/
│ ├── __init__.py
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
│
├── venv/
│
└── manage.py
```

Usihamaki kwa wingi wa hayo mafaili na nini yanatakiwa kufanyaa, kilajambo litakua wazi, kwa sasa nataka afugue faili la *settings.py* faili hili ndiyo
linakua na setting za application yako ya **Django**.

```shell
nano habari_zashamba/settings.py
```

hapa nataka ubadilishe iwe kama hivi.


```python 
ALLOWED_HOSTS = ['*']
```
lengo niku weza kuipata application yangu kwenye mtandao wangu wa ndani **LAN**. 

sasa save faili alafu fanya hivi. 

```python 
python3 manage.py runserver 0.0.0.0:3000
```

Nime azisha Web server inayokuja na **Django** kwenye network interface zote kwa kutumia *manage.py* hii niyezo nyingine kwa jili ya kurahisisha utawala, 
nyezo hii hua inapatikana baada yakutengeneza project.

Kwa sasa usihofu kuhusu hilo oyo unalo liona kuhusu **Migrations**, tuta angalia **Migrations** kwa undani mdaa si mrefu.
![django-output](https://images.ctfassets.net/9heip63yijn8/3RzSCW0MpHF2F54YOQNqPn/d4c2945a1fd0b10ebbe52cab2c95eb49/2020-11-21_13_13_12-192.168.1.10_-_PuTTY.png)

Mhimu kwa sasa ni kuazisha kivinjari chako nakwenda http://ip:3000 utaona kitu kama hiki

![p1](https://images.ctfassets.net/9heip63yijn8/7fphNn9DAVR5lNUYDPxx3O/f72d2d3b5fc330647708cb621b8680f3/2020-11-17_17_04_36-Django__the_Web_framework_for_perfectionists_with_deadlines._____Firefox_Developer.png)
Mpaka hapatulipo fikia inamanisha sasa tunaweza kuanza kuandika **Webapp**, nitatumia nyezo ya `manage.py` kwa lengo lakunitengenezea mafaili na kunipangilia directory ambazo nitatumia kwenye hii app. 

Kumbuka tulikua na uwezo wakuandika haya mafaili na hizi directory wenyewe lakini kama nyenzo ya kurahisisha ipo kwanini tusi itumie, 
na ndiyo hicho ninacho kifanya hapa.

```python 
python3 manage.py startapp blog
```

Tumesha fanya mandalizi ya mafaili na directory za app kabla sija ielekeza framework yetu ya **django** juu ya uwepo wa app inayo itwa **blog** 
inatubidi tuongeze maktaba nyingine ya **python** ambayo itatusaidia kwenye usindikaji wa picha maktaba hii ni maarufu kwa jina la `pillow` kuipata maktaba hii fanya hivi.

```python 
pip3 install pillow
```







Sasa tutarudi kwenye faili letu la *settings.py* kwajili ya kuifahamisha **django** uwepo wa app ya **blog** pamoja na setting zingine 
kama vile mdaa na wapi tuna kusudia kuhifadhi mafaili fungua *settings.py* kwa kufanya hivi


```shell
nano habari_zashamba/settings.py
```

Kwenye *INSTALLED_APPS* weka **blog** na hiyo ndiyo jinsi ya kuitambulisha **django** uwepo wa hiyo app ya **blog**

```python 

INSTALLED_APPS = [
'django.contrib.admin',
'django.contrib.auth',
'django.contrib.contenttypes',
'django.contrib.sessions',
'django.contrib.messages',
'django.contrib.staticfiles',
'blog',
]
```


**Django** nnje ya boksi ina tegemea kukuta mafaili ya **html** ndani ya directory ya app 
kwa mantiki hiyo **django** inatarajia kuona *blog/templates* alafu **templates** mfn *index.html* nk, 
mimi nita badilisha huo mtazamo kwa kuitoa *templates directory* nje na kuiweka juu kwa kufanya hivi 

```python 
'DIRS': [os.path.join(BASE_DIR, 'templates')],
```

undoa neno *UTC* badala yake weka


```python 
TIME_ZONE = 'Africa/Dar_es_Salaam'
```

App yetu itakua ina mafaili mbali mbali kamavile *picha*, *css*, *javascript* nk
**django** tayari inakuja ikiwa imewezeshwa kutoa huduma ya haya mafaili pale inapohitajika kama ukiangalia hapo kwenye 
*INSTALLED_APPS* utaona *django.contrib.staticfiles* hiyo ndiyo app inayo tuwezesha tunacho takiwa sisi kufanya 
nikuonyesha tu wapi hayo mafaili kwenye app yetu yanapatika kwa hiyo badili na iwe hivi.

```python 
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'
STATICFILES_DIRS = [
os.path.join(BASE_DIR, 'habari_zashamba/static')
]
```

Mwisho na malizia na setting za *pillow* kwajili ya mafaili ambayo watumiaji wa app 
watakua wame pakia/upload.


```python 
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/' 
```

Kwa sasa unaweza uka save hili faili, alafu tengeneza hizo directory ulizozionyesha

```shell
mkdir habari_zashamba/static
mkdir media
mkdir templates
```

### Django model

Sasa tupo tayari kuandika program kwa ajili ya **kitu (object)**, 
swali ni kwamba **kitu** che nyewe ni nini? na jibu ni **post** / **"makala"** kwenye hii app tunataka watumiaji wa app waweze kuandika na kuchapisha **makala** yao online. 
Sasa hizo post "makala" **(kitu)** zinasifagani? kabla sija jibu hili swali hebu tuangalie mfano wa **kitu** kingine ambacho wewe na mimi tunakijua na **kitu** 
hicho siyo kingine bali ni **kitabu**, *kitabu* kwa haraka haraka kina sifa zifutazo *jarida, kichwa cha habari, jina la kitabu, mtunzi mwaka kiliyo chapisha orotha ya sura mbali mbali nk* 
tukiwa bado tuna twasira ya kitabu hebu tuangalie kwenye **post** ambazo watumiaji wetu watakua wanaandika zitakua zina undwa na nini? *kichwa cha habari, jina la muandishi habari ye nyewe nk*, 
aha kwa hiyo kama vitu kama hivyo ndiyo vinatupatia **kitu** ambacho tunakita **post** hebu tuangalie hivyo **vitu** vya hicho **kitu** **Post** tunawezaje kuviprogram kwa kutumia **python** 
na mtindo wa ku program **kitu** kwa lugha nyingine **oop (object orieted programing)**. Bahatizuri **Django** anakitu ambacho kinaitwa `Model` 
kita tusadia kuprogram **kitu**

*Model* kwenye upande wa **Django** ni **kitu** cha namna ya kipekee kina hifadhiwa kwenye **hifadhidata/database** na **hifadhidata** ni mkusanyiko wa data hapa ndiyo sehemu ambayo utahifathi tarifa za watumiaji, posts nk...

kama ukiangalia kwenye *settings.py* utaona kunatarifa za **hifadhidata**. 
**Django** inkuja ikiwa imesha wezesha na *sqlite3* ambayo kwa mazingira ya maabara na majaribio inatosha lakini kama utahitaji kubadilisha 
**hifadhidata** una weza kufanya hivyo ila mimi kwenye lab hii sitabadili nitaiyacha **sqlite3**. 

Katika hali ya kawaida ili kutumia **meza** na **safu** za **hifadhidata** inabidi ku andike **SQL** command lakini kwa kutumia **Model** 
hatu hitaji kufahamu **SQL** kwani **Django** inatumia **ORM** hii ina tuwezesha sisi kundika **madarasa** kwenye **python** 
ambayo yanaendana na **safu** pamoja na **meza** za kwenye **hifadhidata** ukiwa unatumia **ORM** yale **madarasa** 
unayo yatengeneza yanayo wakilisha **meza** za **hifadhidata** yanajulikana kama **Models** na kwenye **Django** hua yanaishi kwenye faili linalo julikana kama *models.py*




```shell
nano blog/models.py
```

Hapa sasa nitaanza kuonyesha *madarasa* yangu

```python 
from django.conf import settings
from django.db import models
from django.utils import timezone
User = settings.AUTH_USER_MODEL

class Subscriber(models.Model):
	email = models.EmailField(unique=True)
	timestamp = models.DateTimeField(auto_now_add = True)

	def __str__(self):
		return self.email 
```

Nimeaza nakuingiza maktaba mbali mbali ambazo nita zitumia, 
kwakutumia neno *import*


*class Subscriber(models.Model)*: huu mstari una onyesha **model** yetu ni **kitu** 

*class* **"darasa"** ni neno maalumu ambalo lina ashiria kwamba tunatengeneza **kitu**

neno *Subscriber* hili ni jina la **model** yetu tunge weza kuita jinalolote lile lakini inabidi kua makini nakuto tumia tarakimu malumu na kutoacha nafasi.

neno *models.Model* inamanisha kwamba **Subscriber** ni **Django** model kwa hiyo **Django** inafahamu jinsi ya kuhifadhi kwenye **hifadhidata**

Na endelea na kuonyesha fields zinazo tengeneza **model** ya **Subscriber** ikiwa ni *email* pamoja na *timestamp* hizi ndiyo filds zikatazo tengeneza **model** yangu, 

chamsingi ni ku zipatia aina hizi field ambapo kwenye **Email** aina niliyo toa kwenye hiyo **field** ni *EmailField* na neno *unique=True* nikatika hali ya kuhakisha kwamba baruapepe hazijirudii.

fild nyingine ni **timestamp** jina lingeweza kua chochotekile lakini jambo lamsingi ni aina ya **field** ambapo nimesema kua ni *DateTimeField* **"fild ya tarehe"** *(auto_now_add = True)* 
hii inamanisha kila **kitu** cha **Subscriber** kikiwa kimetengenenzwa basi tarehe ya mda kilipo ongenza iwepo.

```shell
class Category(models.Model):
name = models.CharField(max_length=20)

def __str__(self):
return str(self.name) 
```
Kwenye upande wa **model** ya **Category** **"jamii"** kumbuka jina lingeweza kua kitu chochote kile, hapa ni meweka field moja tu ambayo nimeita *name* lakini muhimu zaidi ni aina ya hiyo field ambayo ni *CharField* tuta tumia kutuzia *jina* /*name*. 

```python 
class Post(models.Model):

author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='author')
title = models.CharField(max_length=200)
text = models.TextField()
cover = models.ImageField(upload_to='images/')
created_date = models.DateTimeField(default=timezone.now)
published_date = models.DateTimeField(blank=True, null=True)
categories = models.ManyToManyField('Category', related_name='posts')	
likes = models.ManyToManyField(User, default=None, blank=True, related_name='likes')

def publish(self):
self.published_date = timezone.now()
self.save()

def __str__(self):
return str(self.title)
```
Mpaka hapa tulipofikia, umekwisha pata picha zuri ya **model** na **fields** pamoja na aina mbali mbali ya data ambazo zipo kwenye field. 

kwenye **model** ya *post* **fields** za *author*, *categories* pamoja na ya *likes* ndiyo zinaweza kidogo zikakuchanganya 
kwa sababu aina ya data zilizokuwepo kwenyo hizo **field** nitofauti na field zingine tulizo ziangalia hebu tuangalie moja bada ya nyingine 
tukiaza na field ya **author**

**field** ya *author* ni *ForeignKey* kwasabu ni kiungo na **model** nyingine ambayo ni *User* ambayo ina toka kwenye maktaba za *setting* ambazo tulisha ziingiza hapo awali kwakutumia *import*. 
Na ndiyo mana tume tumia *on_delete=models.CASCADE* ili endapo mtumiaji amefutwa basi na post zake zifute/delete kwa sababu kiungo hakipo.

Kwenye field ya **categories** ambayo aina yake ni *ManyToManyField* kwa jili ya kua kiungo na **modole** ya *Category* tunataka post nyingi kwenye *Category* na *Category* nyingi kwenye *post*.

Na hiyo ya *likes* nayo ni kama ya **categories** hapa utofauti tume 
tumia *User*, kwasababu tunataka "watumiaji" wengi wa weze kupenda *post* nyingi.

Kwa maelekezo hayo basi nirahisi kuangalia **Model** hii ya **Comment** na uka 
elewe kwa urahisi kabisa nini kinaendele. 

```python 
class Comment(models.Model):
post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='comments')
user = models.CharField(max_length=200)
text = models.TextField()
created_date = models.DateTimeField(default=timezone.now)
approved_comment = models.BooleanField(default=False)

def approve(self):
self.approved_comment = True
self.save()

def __str__(self):
return self.text
```
Kwa vile sasa tumesha tengeneza *classes* "*madarasa*" niwakati muafaka
wa kuiamrisha kwa kutumia **Django** **ORM** itutengeneze **hifadhidata**. 
Kama tulivyo ona nnje ya boksi **Django** inakuja na **SQLite** na ndiyo hiyo nitakayo itumia, 
Kumbuka kwamba **Django** **ORM** ina tumia lugha ya **SQL** kwa hiyo **hifadhidata** yoyote ile ambayo inatumia 
**SQL** kama vile PostgreSQL, MySQL nk zinaweza kufanya kazi na **Django**

**Weka model kwenye hifadhidata**

Sasa tunakwenda kuweka hayo **"madarasa"** **classes** kwenye **hifadhidata** kwakutengeneza faili la **"migration"** faili hili ndilo lenye **madarasa** pamoja na sheria zinayo iambia **Django** mabadiliko gani yanatakiwa yafanyike kwenye **hifadhidata** 

ili kulitengeneza hilo faili la **"migration"** hakikisha ukiwa ndani ya directory ya *projects/shambablog* unaandika

```python
python3 manage.py makemigrations
```

```shell
Migrations for 'blog':
blog/migrations/0001_initial.py
- Create model Category
- Create model Subscriber
- Create model Post
- Create model Comment

```

Tumefanikiwa kuandika faili la **maigration** ambalo liko kwenye *blog/migrations/0001_initial.py* ili kuziweka hizo tarifa ambazo ziko kwenye faili la **migration** kwenye **hifadhidata** fanya hivi

```python 
python3 manage.py migrate
```
Sihaba kama unaona kitu kama hiki. 

```python 
Operations to perform:
Apply all migrations: admin, auth, blog, contenttypes, sessions
Running migrations:
Applying contenttypes.0001_initial... OK
Applying auth.0001_initial... OK
Applying admin.0001_initial... OK
Applying admin.0002_logentry_remove_auto_add... OK
Applying admin.0003_logentry_add_action_flag_choices... OK
Applying contenttypes.0002_remove_content_type_name... OK
Applying auth.0002_alter_permission_name_max_length... OK
Applying auth.0003_alter_user_email_max_length... OK
Applying auth.0004_alter_user_username_opts... OK
Applying auth.0005_alter_user_last_login_null... OK
Applying auth.0006_require_contenttypes_0002... OK
Applying auth.0007_alter_validators_add_error_messages... OK
Applying auth.0008_alter_user_username_max_length... OK
Applying auth.0009_alter_user_last_name_max_length... OK
Applying auth.0010_alter_group_name_max_length... OK
Applying auth.0011_update_proxy_permissions... OK
Applying blog.0001_initial... OK
Applying sessions.0001_initial... OK

``` 
Sasa **Model** zetu zipo kwenye **hifadhidata** inamanisha kwamba sasa tunaweza kuanza kuandika **post** "makala". 
Naili kuweza kuandika hizo **post** inabidi kuingia kwenye webapp ya **Django** kama mtumiaji mwenye mamlaka ya **usimamizi** **"admin"**


## Django Admin 
wakati tuna tengeneza project tulitumia *django-admin startproject* hi inatuwezesha sisi kutumia **admin** moja kwa moja. tunacho takiwa kufanya ni kumtengeneza mtumiaji ambaye tuna mpa mamlaka ya **usimamizi**/**"admin"** kwa ku weka command hi kwenye terminal

```python 
python3 manage.py createsuperuser
```

```shell
Username (leave blank to use 'root'): admin
Email address: admin@internal.labnet
Password:
Password (again):
Superuser created successfully.
```
Username hapo unaweza kuweka jina jingine lakini mimi nimeweka **admin** kwasababu ya kiwango 'standard' 

sasa azisha webapp yako 

```python
python3 manage.py runserver 0.0.0.0:3000
```
Nadhani kitu chakwaza ulicho gundua nikwamba sasa hivi lile onyo la **migrations** halipo. Lakini cha msingi kabisa nataka uwende kwenye 
kivinjari chako alafu ufungue http://ip:3000/admin utatakiwa kuweka jina la mtumiaji uliye mtengeneza hapo awali pamoja na nywila. Utakapo ingia utaona kitu kama hiki.

![django-admin1](https://images.ctfassets.net/9heip63yijn8/2oa96DYXmNTHwevpSyp7O8/dba93eb615f5f1a6183831b7390aac87/2020-11-22_21_32_56-Site_administration___Django_site_admin_____Firefox_Developer_Edition.png) 
Ili zile **Models** tulizo zitengeneza tuweze kuzitumia inabidi tuzi orotheshe hapa kwa kuziandikisha kwenye faili hili *blog/admin.py* hebu lifungue tuanze kuziandikisha hizi **Models**. 

```shell
nano blog/admin.py
```

```python 
from django.contrib import admin
from .models import Post,Subscriber,Category

admin.site.register(Post)
admin.site.register(Category)
admin.site.register(Subscriber)
```
Kama ambavyo unaona tume agiza **'import'** **models** tunazo hitaji kutumia, alafu namalizia na kuziandikisha. Uki save faili lako alafu ukirudi kwenye http://ip:3000/admin uka refresh kivinjari chako bila shaka utaona kitu kama hiki
![django-admin2](https://images.ctfassets.net/9heip63yijn8/4une6KKY4qROJGm7oBD2MT/dbc6422eebf25aaf80bfa851b5998ea8/2020-11-18_11_31_14-Site_administration___Django_site_admin_____Firefox_Developer_Edition.png)

Endelea na Kutengeneza **categories** kama ifuatavyo: 
![2020-11-18 11 39 11-Add category Django site admin ](https://images.ctfassets.net/9heip63yijn8/1RjWRIthx1gMTKJzemCMhd/163604f11292c1328c1915e704a49ec1/2020-11-18_11_39_11-Add_category___Django_site_admin_____Firefox_Developer_Edition.png)


Nita tengeneza jumla ya **categories** nne.
![category to change Django site admin](https://images.ctfassets.net/9heip63yijn8/d9yBibli25BtVpUNLUMvt/1a4a81f3026af8be2fff770d0bd8bfdd/2020-11-18_11_40_08-Select_category_to_change___Django_site_admin_____Firefox_Developer_Edition.png)Tengeneza post, usijali kuhusu hiyo field ya **likes** kwa sasa 
![Add post Django site admin](https://images.ctfassets.net/9heip63yijn8/5uRRMcfGIsnFAoGYBuo37F/9760345f172c15fb3b17fc7b94e6d3f7/2020-11-18_14_11_14-Add_post___Django_site_admin_____Firefox_Developer_Edition.png)
Nime tengeneza jumla ya post tano, tatu nime zi publish mbili sija zi publish kwa lengo la kujifunza
![2020-11-18 14 43 34-Select post to change Django site admin](https://images.ctfassets.net/9heip63yijn8/5VQdZ8kWx4pDHNmMIX1wm/492385ec8818268630dc187d022c4170/2020-11-18_14_43_34-Select_post_to_change___Django_site_admin_____Firefox_Developer_Edition.png)

Kuna umhimu wa kuangaliya kwaundani jinsi ambavyo **Django** ina jiunganisha na kuhifadhi data kwenye **hifadhidata** ili kufikia lengo hilo 
basi nilazima nikutambulishe kwenye **Kuulizaset**/**"QuerySet"**

### Kuulizaset ni nini?

**Kuulizaset** hasa kiini, ni orotha ya **vitu** kwenye **Model** husika, **kuulizaset** kuna turuhusu *kusoma*, *kuchuja* na *kupanga* data kwenye **hifadhidata**

Nitaanza na kuanzisha **console** ya **Django** haina utofauti sana na ile ya **python** lakini hii inatupa nyenzo nyingi ambazo ni maksusi kwa **Django** kwenye terminal yako fanya hivi.

```python 
python3 manage.py shell
```

```shell
Python 3.6.9 (default, Oct 8 2020, 12:12:24)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>> 
```
Sasa tunamwingiliano na **console** ya **Django**, kuthibitisha hilo nita agiza maktaba ya *models* **kitu** cha *Post*.

```python 
from blog.models import Post 
```

Nita **ulizaset** kwaku orothesha **post** zote tulizotengeneza 

```python 
Post.objects.all()
<QuerySet [<Post: Ufugaji wa n'gombe wa maziwa>, <Post: Ulimaji wa mboga mboga>, <Post: Ufugaji wa kuku>, <Post: Uwandaji wa shamba la mpunga kwa kutumia trector>, <Post: Matumizi ya dawa za ukulia wa dudu kwenye mashamba ya kahawa>]>
```

ilikutengeneza **post** mpaka sasa hivi nilazima uwe kama mtumiaji mwenye mamlaka ya *usimamizi*, nakuhusu *msimamizi* ndiyo mtumiaji pekee tuliye naye mpaka sasa hivi, mimi nili muita **"admin"** kuthibitisha hilo basi nita 
*soma* orotha ya watumiaji wote tuliyonao kwa kufanya hivi 

```python 
from django.contrib.auth.models import User

User.objects.all()
<QuerySet [<User: admin>]>
```
Ili niweze kumtumia huyu *mtumiaji* itabidi nitengeneze mfano wa *mtumiaji*
```python 
mimi = User.objects.get(username='admin')
```
kuthibitisha kwamba sasa na mamlaka hayo nitatengeneza post moja kama mtumiaji
```python 
Post.objects.create(author=mimi, title='Ulimaji wa zabibu', text='Ulimaji wa kisasa wazabibu mkoani dodoma.')
<Post: Ulimaji wa zabibu>
```

*Tuchuje* post tunazotaka zionekane mathalani tuorotheshe post ambazo kwenye *kichwa cha habari* kuna neno **ufugaji**

```python 
Post.objects.filter(title__contains='ufugaji')
<QuerySet [<Post: Ufugaji wa n'gombe wa maziwa>, <Post: Ufugaji wa kuku>]>
```

Tunaweza **kuulizaset** kwa lengo laku *panga* orotha yetu, mfn tunataka ku ona post zote ambazo zime chapishwa "published" 
lakini zile post za mwisho kuchapishwa ndiyo ziwe zakwanza kuonekana.
 
```python 
from django.utils import timezone
Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
<QuerySet [<Post: Ufugaji wa n'gombe wa maziwa>, <Post: Ulimaji wa mboga mboga>, <Post: Ufugaji wa kuku>]>
```
Ukitaka kutoka kwenye **console** utafanya hivi

```python 
exit()
``` 
Tumeona uwezo na nguvu ya **kuulizaset** **"QuerySet"** tukiwa nahayo maarifa ya kutumia hiyo zana katika mkoba wa nyenzo zetu 
hebu tuone nijinsi gani tunaweza kuandika *kazi* kwenye *mtazamo* **"views"** ambazo zitaenda kuchukua data kutoka kwenye 
**hifadhidata** na kuzionyesha kwenye ukurasa wetu wa **html** 

### Django Views

Kwenye app yetu ya blog tuta tengeneza **mtazamo** **"views"** za aina mbili
tuta kua na *mtazamo* ambao unaorothesha **post** zote ambazo zimechapishwa, 
alfatu tutakua na *mtazamo* ambao una onyesha **post** moja iliyo chapishwa kwa undani.


Wakati ambapo majina ya hii *mitazamo* yanaweza kua kitu chochote kile **mtazamo** 
wangu amboa utakua una onyesha orotha ya post zote zilizo chapishwa nita uita *post_index* 
na ndiyo utakua ukurasa wa mbele wa webbapp yetu

**mtazamo** wa post moja kwa undani nitauita *post_detail*

Tuanze kutengeneza hii *mitazamo* kwaku fungua faili hili

```shell
nano blog/views.py
``` 
Kwaza kabisa nimeanza na kuagiza kifurushi cha *django.shortcuts* ambacho kinakusanya **kazi** za usaidizi na 
**madarsa** ambayo yanajitanua kwenye *MVT*, 
hapa nimechomoa kifurushi ambacho kitatuwezesha **kutoa** html. 
Pamoja na itakayoita **pata()**  au **404** "**hai patikani**" 

```python 
from django.shortcuts import render, get_object_or_404
```
Kwajili ya majira nime agiza maktaba ya *timezone*

```python 
from django.utils import timezone
```
Angalia jinsi ambavyo na agiza **Model** ya **Post** hiyo nukta inamanisha **model** ya **Post** 
inapatikana kwenye directory moja na faili la **mtazamo** *views.py*.

```python 
from .models import Post
```
Na anza kutengeneza **kazi** *def* naipa jina la *post_index* inachukua **ombi** **"request"** alafu ita **rudisha** **"return"** thamani iliyo ipata kwakuita **kazi** nyingine 
**kutoa** **"render"** ambayo hii nayo ina chukua **ombi** **"request"** ita **toa** template ya **html** 
*blog/post_index.html*. Na *{'posts': posts}* kwa sasa chukulia kama ni **kuulizaset** 
nime iweka kwenye *variable*, ili tuweze kuitumia kwenye *template* kwa urahisi.
Kazi yake ni *kuchuja* **post** nipate zile zilizo **chapishwa tu**, 
alafu ni zi orotheshe kwa *kupanga* kutokana na tarehe ya kutangulia kuchapishwa

```python 
def post_index(request):
posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
return render(request, 'blog/post_index.html', {'posts': posts})
``` 
Hapa kwajili ya post kwaundani naendelea **kuulizaset** safari hii nataka **Post** 
pamoja na **funguo ya msingi** **"primary key"** *pk* ambayo ndiyo nimeipitisha kwenye 
**hoja** za **kazi** kwa hiyo hilo ndiyo litakua **ombi** **"request"** ili 
**kurudisha** **"return"** **kazi** ya **kutoa** **"render"** ambayo inachuka **ombi** **"request"** itarudisha *html*
tukiwa tumepitisha kamusi ya muktadha ambayo itakwenda kutumika kwenye template.

```python 
def post_detail(request, pk):
post = get_object_or_404(Post, pk=pk)
return render(request, 'blog/post_detail.html', {'post': post}) 
``` 
Sasa tuna hiyo **mitazamo** yetu **"views"** ili hii **mitazamo** 
iweze kuitwa na hatimaye kuitikia **ombi** inabidi kuifahamishe *URLs.py* uwepo wa **mitazamo**. 


### Django URLs

Anza na kutengeneza faili la *urls.py* ndani ya directory ya app yako hili faili hua halitengenenzwi na *manage.py startapp*

```shell
nano blog/urls.py
``` 
Nitaanza **nakuagiza** **kazi** ya **njia** na **mitazamo** **"views"** yetu kutoka kwenye directory hii ya 
*blog* ambapo faili hili nalo lipo ndiyo maana ya hiyo nukta hapo. 

```python 
from django.urls import path
from . import views
``` 

naonyesha **muundo** **"patterns"** wa **URLs** zangu, 
bilashaka umegundua kwamba **mtazamo** **"views"** wa *post_index* ndiyo mzizi wa *Urls* zangu ndiyo itakuwa ukurasa wetu wa mbele.
Kwenye **mtazamo** **"views"** wa *post_detail* hapa tunataka *url* iwe *post/1*, *post/2*, nk kutegeme na **ufunguo gani wa msingi** **"pk"** ume pitishwa kwenye **URL** 
ndiyo mana tukaweka *<int:pk>* kuijulisha **Django** kwamba thamani **"value"** inayo pita kwenye **URL** ni **nambari** **"integer"** na jina la *variable* yake ni *pk*

```python 
urlpatterns = [
path('', views.post_index, name='post_index'),
path('post/<int:pk>/', views.post_detail, name='post_detail'),

]
``` 

Kwenye framework ya **Django** unapotengeza project kwa kutumia *django-admin startproject* na faili la *urls* hua linatengenezwa 
kama una kumbaka ndiyo mana tuliweza kwenda *http://ip:3000/admin* ukitumia *manage.py startapp* haitengenezi faili la *urls.py* kwenye directory ya app. 

Mimi huwa napendelea kusafisha vitu kidogo, inapendeza kila *app* ikawa na faili lake la *urls* alafu hili faili la **urls** ambalo liko kwenye **project** lika tupia *ndoana* kuli kamatia lile la kwenye **app** na ndiyo hicho ninacho kwenda kukifanya hapa.

Nita anza na kufungua faili la *urls* la kwenye *project*


```shell
nano habari_zashamba/urls.py
```
ili app yetu iweze kuhudumia mafaili ya *picha*, *javascript* na css yaliyo **tuli** **"static"** ni budi tuka **agiza** **vifurushi** vya **settings** pamoja na **static** *lakini* **kama** *tu* tutakua tuna tafuta **utatuzi** **"debug"**. 
Kwenye **urls** naongezea **kifurushi** mhimu sana **ni pamoja na** **"include"** hiki kina saidiana na **kifurushi** cha **njia** **"path"** matokeo yake yanaonekana hapo kwenye **muondo wa url** **"urlpatterns"** tunaposema kilakitu baada ya **domain** kita hudumiwa na faili la **urls** ambalo liko kwenye **app** ya **blog**
```python 
from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```
Sasa hivi tuna **URLs** mbili kwenye **app** yetu
1. **http://ip:3000/:** ukurasa wa mbele **post_index**
2. **http://ip:3000/post/1:** ukurasa wa post moja kwandani **post_detail**

Ukijaribu kuperuzi hizo Url huwezi kuzipata, na hii inasababishwa na kuto kua na html template. Sasa hu nimda muafaka wakuangalia wakuzitengeneza hizo templates.

## Django Templates

**Django** kama framework ina hitaji njia nyepisi ya kukabiliana na kurasa ambazo zina tengenezwa **kwa nguvu** **"dynamically"**, na moja ya njia ambazo zimekua ni nyepesi za kukabiliana na hilo ni kutengeneza **templates**. **Templates** inakua na badhi ya sehemu ambazo zinakua ni **tuli** **"static"** lakini zinapokea **syntax** maalumu ambazo zina elezea yale **yaliyomo** ya **nguvu** **"dynamic"** yata inginzwa je. Unaweza ukaiwezesha project yako ya **django** na **template** engines moja au zaid au hata bila moja, **Django** nnje ya boksi inakuja na **Django template language (DTL)** na hi ndiyo tutakayo tumia kwenye **template** zetu.

Kwenye directory yangu ya **templates** ambayo nili itengeneza hapo awali nita tengeneza directory nyingine ambayo nitaita **blog** ambayo itakuwa na **templates** zote za hii app.
```shell
mkdir templates/blog
```

ndani ya hiyo directory nita tengeneza faili la *base.html*

**base template** zinasadia pale ambapo unataka uwena na tarifa au mpangilio unao funana zaidi ya sehemu moja na hutaki kurudia rudia kuweka tarifa hizo hizo kwenye kila faili, nakama ikitokea kuna mabadiliko basi mabadiliko hayo uta yafanya kwenye faili moja tu badala ya kwenda kwenye kila faili.

```shell
nano templates/blog/base.html
```
Naaza na kuipa app yetu uwezo wa kuyahudumia yale mafaili ambayo ni **tuli** kamavile **picha**, **css** na **javascript**, **yaliyomo** yoyote yale ambayo hayahitaji **ombi** kwenye **muktadha** na yana funana kwa kila **mtumiaji**.


Naendelea na **tag** zagu za kawaida za **html**,
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

na **agiza** **font awesome** pamoja na **css** framework ya *bootstrap* alafu na onyesha faili langu la **mitindo**, zingatia mpangilio vinginevyo **mitindo** yako inaweza ikazidiwa.
```html
<!-- Font Awesome -->
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<!-- Bootstrap -->
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="">
</head>
<body>
```
Natupia tag nyingine hasa ninacho taka **ni pamoja na navbar**, ambayo ipo kwenye directory inaitwa **sehemu** 
```python 
<!-- NavBar -->
  {% include 'sehemu/_navbar.html' %}
```
hapo ndipo tutakapo weka **yaliyomo** na yatatokea kwenye **template** zingine
```html
<div class="container">
    {% block content %}{% endblock %}
</div>
```
Namalizia na kuagiza **javascript**, alafu na funga **tag** ya **html**
kumbuka ku save faili.
```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>
```

**post_index.html**

Sasa tutengeneze **template** kwajili ya ukurasa wetu wambele, kumbuka kwamba ukurasa huu ni **muendelezo** wa **base.html**
```shell
nano templates/blog/post_index.html
```
Na sema **inaendelea** **"extends"** alafu na onyesha kutokea wapi, wala sija sahau kwamba tuna mafaili yaliyo **tuli** **"static"** ambayo tutayahitaji, na fungulia **yaliyomo** **"content"** na weka kichwa
cha habari.




sitaki kuzungumzia habari za *bootstrap* kwa sababu haikua lengo la makala haya. Lakini chakuzingatia ni hicho **kitanzi** hapo kwenye **post**, kama una kumbuka kwenye **template** yetu tuliipa **orotha** ya **posts** kwenye *variable* tuliyo ita *posts* sasa ili kuionyesha hiyo *variable* kwenye **html**, ina tulazimu kwenye **django** tuweka curly brackets mbili na jina la *variable* likiwa ndani, lakini kwa vile hii ni **orotha** nimeipiga **kitanzi** ndani ya hiki **kitanzi** ndiyo napata **post** moja moja. Na chochote kile utakacho weka hapo kati ya *{% for %}* na *{% endfor %}* kitatokea kwenye kila **kitu** kilicho kuwepo kwenye **orotha**

nikitumia nukta alafu nikaweka curly brackets mbili hapa ni kwajili ya sifa zingine za **yaliyomo** kama hapa na taka kichwa cha habari cha post *{{ post.title }}*.

Hali kathalika na weka *<a href=* kiungo kati ya ukurasa huu na ukurasa wa *post_detail*
kwa kutumia tag za **template** ya **Django**  tuna taka kutenge ne zewa  *url* hasa ukizinga tia **Django** anatarajia **URL** kwenye *blog/urls.py* ambayo **inaitwa** **"name"** = *post_detail* ndiyo maana hapo kati sikuacha kuioyesha *post_detail*  namalizia na *pk=post.pk* **funguo yamsingi** nilisha izungumzia wakati tuna tengeneza **muonekano** siyo kazi kujua kwanini nime iweka hapo 
```html
<div class="row">
{% for post in posts %}

   <div class="col-md-4">
        <div class="card mb-2">

            <img class="card-img-top" src="{{ post.cover.url}}" class="img-fluid img-thumbnail" alt="{{ post.title }}">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.text | slice:":40" }}</p>

                <a href="{% url 'post_detail' pk=post.pk %}" 
                   class="btn btn-success">
                    Soma zaidi
                </a>

            </div>
        </div>
    </div>
    {% endfor %}
</div>
{% endblock %}
``` 
**post_detail.html** 

 nahapa sasa na weke *post_detail*

 ```
 nano templates/blog/post_detail.html
```    

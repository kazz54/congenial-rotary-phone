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
**lugha** ya **programing** inayo julikana kama **python** kwa usaidizi wa **mfumo** **"framework"** unao julikana kama **django**. 

Hatakama hujawahi kuandika **program** yoyoteile bado unaweza 
kufuatilia malekezo haya na ukafanikiwa kuandika **webapp**, kwasababu **makala** 
haya nime ya andaa mahususi kwamtu ambaye hajawahi kuandika **program** lakini anataka **kujifuza** basi hii itakuwa nimoja ya sehumu zuri **kuazia**.

Nime chagua framework ya **Django** kwa sababu ina kuja **pamoja na Batteries** hivyo kuifanya kua rahisi kuitumia hasa kama nimara yako ya kwanza kukutana na **programu** **"porograming"**, na zaidi inatumia **python** moja ya **lugha** za **programing** ambazo ni rahisi kueleweka na kufanya nayo kazi lakini kikubwa zaidi inatumika sehemu nyingi sana huku iki jichukulia umaarufu kwenye **AI** na **machine learning** kama unataka kujikita katika eneo hilo basi kufahamu **python** kunakua ni wajibu.

**webapp** tutakayo **iendeleza** hususani kwenye makala haya inakua ni sehemu ya **kuanzia**, ichukulie kama **sahani iliyo chemshaw** kutokea hapo tutaanza kutengeneza  vipengele vingi.

**Webapp** tutakayo itengeneza

![django-bootstrap2ed](//images.ctfassets.net/9heip63yijn8/QYB7FUnMpu419SvQnEgUT/decca3d614aecb2c838fdd43cd41f6e2/django-bootstrap2ed.png)

**code** za **webpp** hii zina [patikana hapa](https://github.com/devduara0/farmers-blog)

Django inatumia usanifu wa mvt ukifutilia makala haya hadi mwisho siyo tu kwamba utakuwa umetengeneza webapp lakini utakua umejifuza jinsi ya kufanya installation ya framework ya django
jinsi ya kuazisha project ya django kuifanyia setting naku install app.
utajifuza Model utajua jinsi ya kuandi model zako na kuuliza set
utaweza kuitawala app yako ya django kama umtumiaji mwenye mamlaka ya utawala
utaweza kuandika muonekano kwa kuulizaset utatengeneza na kuelewa URLs.

Nitakua natumia machine ambayo ina Operating System ya **Ubuntu 18.04** jina la code "**Bionic Beaver**", lakini bado unaweza kufutatilia 
na ukafikia lengo hata kama uko kwenye Operating System tofauti na ya kwangu jambo lakuzingatiya nikwamba **python** iwe imekua installed kwenye hiyo Operating System ambayo unataka/unatumia. 

__Anzaa na kuangalia kama una python.__

{% highlight "shell" %}

    python -V
    Python 3.6.9
{% endhighlight %}

hiyo "**`Python 3.6.9`**" ndiyo version ya **python** ambayo iko kwenye machine yangu
inamaana nina uwezo wakusoma na kuandika program kwa kutumia lugha ya **python**.

__Andaa mazingira ya kuhifadhi app yako.__

ili kuweka mpangilio mzuri wa mafaili nita tengeneza directory ambapo project yangu itakaa na nitaita **shambablog** na zaidi ya hapo nita tengeneza **virtual eviroment** ambayo nitaita **venv** ndani ya hiyo directory, nahii inamanisha kwamba namega kipande kidogo cha opareting system kwa jili ya hii amplication.

mahali ambapo app yangu itakaa
   
    {% highlight "shell" %}
    mkdir -p projects/shambablog

    cd projects/shambablog/
    {% endhighlight %}
ili kuweza kutengeneza au kuanzisha **virtual environment** inatubidi tuwe na kifurushi kwajili ya **virtual environment** inategemea unaweza ukawa tayari unacho kifurushi cha **virtual environment** lakini kama huna una install kama hivi

    apt-get install python3-venv

na tengeneza **virtual environment**, naita **venv** unaweza ukaita vyoyete vile

    python3 -m venv venv

activate **virtual environment**

    source venv/bin/activate

kuazia sasa **vifurushi** **"package"**​ zote za **python** tutakazo install na kuzifanyia kazi zitakua mahususi kwajili ya mazingira/environment hii **venv** 

**instalation ya framework ya Django**

nita install framework ya **Django** version **`3.0.10`** kwama wakati na andaa makala haya

    pip3 install Django==3.0.10

Kama utahitaji kufanya installation ya version mpya zaidi utafanya hivi

    pip3 install Django

**Tengeneza project ya Django.**

Nita tumia nyenzo inayo julikana kama **django-admin** kutengeneza hi project ambayo nita ita **habari_zashamba**. Nyezo hii inafanya kazi kwenye terminal na kazi yake hasa ni kurahisisha kazi za kitawala.  

    django-admin startproject habari_zashamba .

Ukiangalia mpangilio wa mafaili yako utakuta kitu kama hiki.

    shambablog/
    │
    ├── habari_zashamba/
    │   ├── __init__.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    │
    ├── venv/
    │
    └── manage.py

Usihamaki kwa wingi wa hayo mafaili na nini yanatakiwa kufanyaa, kilajambo litakua wazi, kwa sasa nataka afugue faili la **settings.py** faili hili ndiyo
linakua na setting za application yako ya **Django**.

    nano habari_zashamba/settings.py	

hapa nataka ubadilishe iwe kama hivi.

    ALLOWED_HOSTS = ['*']

lengo niku weza kuipata application yangu kwenye mtandao wangu wa ndani **LAN**. 

sasa save faili alafu fanya hivi. 

    python3 manage.py runserver 0.0.0.0:3000

Nime azisha Web server inayokuja na **Django** kwenye network interface zote kwa kutumia **manage.py** hi niyezo nyingine kwa jili ya kurahisisha utawala, nyezo hi hua inapatikana baada yakutengeneza project.

Kwasasa usihofu kuhusu hilo oyo unalo liona kuhusu **Migrations**, tuta angalia **Migrations** kwaundani mda si mrefu.
![django-output](//images.ctfassets.net/9heip63yijn8/3RzSCW0MpHF2F54YOQNqPn/d4c2945a1fd0b10ebbe52cab2c95eb49/2020-11-21_13_13_12-192.168.1.10_-_PuTTY.png)

Mhimu kwa sasa ni kuazisha kivinjari chako nakwenda http://ip:3000 utaona kitu kama hiki

![p1](//images.ctfassets.net/9heip63yijn8/7fphNn9DAVR5lNUYDPxx3O/f72d2d3b5fc330647708cb621b8680f3/2020-11-17_17_04_36-Django__the_Web_framework_for_perfectionists_with_deadlines._____Firefox_Developer.png)
Mpaka hapatulipo fikia inamanisha sasa tunaweza kuanza kuandika **Webapp**, nitatumia nyezo ya **manage.py** kwalengo lakunitengenezea mafaili na kunipangilia directory ambazo nitatumia kwenye hi app. 

Kumbuka tulikua na uwezo wakuandika haya mafaili na hizi directory wenyewe lakini kama nyenzo ya kurahisisha ipo kwanini tusi itumie, na ndiyo hicho ninacho kifanya hapa.

    python3 manage.py startapp blog

Tumesha fanya mandalizi ya mafaili na directory za app kabla sija ielekeza framework yetu ya **django** juu ya uwepo wa app inayo itwa **blog** inatubidi  tuongeze maktaba nyingine ya **python** ambayo itatusaidia kwenye usindikaji wa picha maktaba hi ni maarufu kwa jina la **pillow** kuipata maktaba hi fanya hivi.

    pip3 install pillow

Sasa tutarudi kwenye faili letu la **settings.py** kwajili ya kuifahamisha **django** uwepo wa app ya **blog** pamoja na setting zingine kama vile mdaa na wapi tuna kusudia kuhifadhi mafaili fungua **settings.py** kwa kufanya hivi

    nano habari_zashamba/settings.py

Kwenye **`INSTALLED_APPS`** weka **blog** na hiyo ndiyo jinsi ya kuitambulisha **django** uwepo wa hiyo app ya **blog**

    INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'blog',
    ]

**Django** nnje ya boksi ina tegemea kukuta mafaili ya **html** ndani ya directory ya app kwa mantiki hiyo **django** inatarajia kuona **`blog/templates`** alafu **templates** mfn **`index.html`** nk, mimi nita badilisha huo mtazamo kwa kuitoa **templates** directory nje na kuiweka juu kwa kufanya hivi 

    'DIRS': [os.path.join(BASE_DIR, 'templates')],

 undoa neno **`UTC`** badala yake weka

    TIME_ZONE = 'Africa/Dar_es_Salaam'

App yetu itakua ina mafaili mbali mbali kamavile **picha**, **css**, **javascript** nk
**django** tayari inakuja ikiwa imewezeshwa kutoa huduma ya haya mafaili pale inapohitajika kama ukiangalia hapo kwenye **`INSTALLED_APPS`** utaona **`django.contrib.staticfiles`** hiyo ndiyo app inayo tuwezesha tunacho takiwa sisi kufanya nikuonyesha tu wapi hayo mafaili kwenye app yetu yanapatika kwa hiyo badili na iwe hivi.

    STATIC_ROOT = os.path.join(BASE_DIR, 'static')
    STATIC_URL = '/static/'
    STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'habari_zashamba/static')
    ]

Mwisho na malizia na setting za **pillow** kwajili ya mafaili ambayo watumiaji wa app watakua wame pakia/upload.

    MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
    MEDIA_URL = '/media/'    

Kwa sasa unaweza uka save hili faili, alafu tengeneza hizo directory ulizozionyesha

    mkdir habari_zashamba/static
    mkdir media
    mkdir templates

Sasa tupo tayari kuandika program kwa ajili ya **kitu (object)**, swali ni kwamba **kitu** che nyewe ni nini? na jibu ni **post** kwenye hii app tunataka watumiaji wa app waweze kuandika na kuchapisha makala yao online. Sasa hizo post**(kitu)** zinasifagani? kabla sija jibu hili swali hebu tuangalie mfano wa **kitu** kingine ambacho wewe na mimi tunakijua na **kitu** hicho siyo kingine bali ni **kitabu**, **kitabu** kwa haraka haraka kina sifa zifutazo jarida kichwa cha habari jina la kitabu mtunzi mwaka kiliyo chapisha orotha ya sura mbali mbali nk tukiwa bado tuna twasira ya kitabu hebu tuangalie kwenye **post** ambazo watumiaji wetu watakua wanaandika zitakua zina undwa na nini? kichwa cha habari jina la muandishi habari ye nyewe nk, aha kwa hiyo kama vitu kama hivyo ndiyo vinatupatia **kitu** ambacho tunakita **post** hebu tuangalie hivyo **vitu** vya hicho **kitu** **Post** tunawezaje kuviprogram kwa kutumia **python** na mtindo wa ku program **kitu** kwa lugha nyingine **oop (object orieted programing)**. Bahatizuri **Django** anakitu ambacho kinaitwa **Model** kita tusadia kuprogram **kitu**

**Model** kwenye upande wa **Django** ni **kitu** cha namna ya kipekee kina hifadhiwa kwenye **hifadhidata/database** na **hifadhidata** ni mkusanyiko wa data hapa ndiyo sehemu ambayo utahifathi tarifa za watumiaji, posts nk...

kama ukiangalia kwenye **settings.py** utaona kunatarifa za **hifadhidata**. **Django** inkuja ikiwa imesha wezesha na **sqlite3** ambayo kwa mazingira ya maabara na majaribio inatosha lakini kama utahitaji kubadilisha **hifadhidata** una weza kufanya hivyo ila mimi kwenye lab hii sitabadili nitaiyacha **sqlite3**. 

Katika hali ya kawaida ili kutumia **meza** na **safu** za **hifadhidata** inabidi ku andike **SQL** command lakini kwa kutumia **Model** hatu hitaji kufahamu **SQL** kwani **Django** inatumia **ORM** hii ina tuwezesha sisi kundika **madarasa** kwenye **python** ambayo yanaendana na **safu** pamoja na **meza** za kwenye **hifadhidata** ukiwa unatumia **ORM** yale **madarasa** unayo yatengeneza yanayo wakilisha **meza** za **hifadhidata** yanajulikana kama **Models** na kwenye **Django** hua yanaishi kwenye faili linalo julikana kama **models.py**

## Django model

    nano blog/models.py

Hapa sasa nitaanza kuonyesha **madarasa** yangu

    from django.conf import settings
    from django.db import models
    from django.utils import timezone
    User = settings.AUTH_USER_MODEL

    class Subscriber(models.Model):
    	email = models.EmailField(unique=True)
    	timestamp = models.DateTimeField(auto_now_add = True)

    	def __str__(self):
    		return self.email 

Nimeaza nakuingiza maktaba mbali mbali ambazo nita zitumia, kwakutumia neno **`import`**

**`class Subscriber(models.Model)`**: huu mstari una onyesha **model** yetu ni **kitu** 

**`class`** **"darasa"** ni neno maalumu ambalo lina ashiria kwamba tunatengeneza **kitu**

neno **`Subscriber`** hili ni jina la **model** yetu tunge weza kuita jinalolote lile lakini inabidi kua makini nakuto tumia tarakimu malumu na kutoacha nafasi.

neno **`models.Model`** inamanisha kwamba **Subscriber** ni **Django** model kwa hiyo **Django** inafahamu jinsi ya kuhifadhi kwenye **hifadhidata**

Na endelea na kuonyesha fields zinazo tengeneza **model** ya **Subscriber** ikiwa ni **`email`** pamoja na **`timestamp`** hizi ndiyo filds zikatazo tengeneza **model** yangu, 

chamsingi ni ku zipatia aina hizi field ambapo kwenye **Email** aina niliyo toa kwenye hiyo **field** ni **`EmailField`** na neno **`unique=True`** nikatika hali ya kuhakisha kwamba baruapepe hazijirudii.

fild nyingine ni **timestamp** jina lingeweza kua chochotekile lakini jambo lamsingi ni aina ya **field** ambapo nimesema kua ni **`DateTimeField`** **"fild ya tarehe"** **`(auto_now_add = True)`** hi inamanisha kila kitu cha **Subscriber** kikiwa kimetengenenzwa basi tarehe ya mda kilipo ongenza iwepo.

```shell
   class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return str(self.name) 
```
 Kwenye upande wa **model** ya **Category** **"jamii"** kumbuka jina lingeweza kua kitu chochote kile, hapa ni meweka field moja tu ambayo nimeita **`name`** lakini muhimu zaidi ni aina ya hiyo field ambayo ni **`CharField`** tuta tumia kutuzia **`jina`** /**`name`**.  

```shell
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

kwenye **model** ya post **fields** za *author*, *categories* pamoja na ya *likes* ndiyo zinaweza kidogo zikakuchanganya kwasababu aina ya data zilizokuwepo kwenyo hizo **field** nitofauti na field zingine tulizo ziangalia hebu tuangalie moja bada ya nyingine tukiaza na field ya **author**

**field** ya **`author`** ni **`ForeignKey`** kwasabu ni kiungo na **model** nyingine ambayo ni **`User`** ambayo ina toka kwenye maktaba za **`setting`** ambazo tulisha ziingiza hapo awali kwakutumia **`import`**. 
Na ndiyo mana tume tumia **`on_delete=models.CASCADE`** ili endapo mtumiaji amefutwa basi na post zake zifute/delete kwa sababu kiungo hakipo.

Kwenye field ya **categories** ambayo aina yake ni **`ManyToManyField`** kwa jili ya kua kiungo na **modole** ya **`Category`** tunataka post nyingi kenye Category na **`Category`**nyingi kwenye post.

Na hiyo ya **likes** nayo ni kama ya **categories** hapa utofauti tume 
tumia **`User`**, kwasababu tunataka user wengi wa weze kupenda post nyingi.

Kwa maelekezo hayo basi nirahisi kuangalia **Model** hii ya **Comment** na uka 
elewe kwa urahisi kabisa nini kinaendele. 

  ```shell
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

  Kwa vile sasa tumesha tengeneza **`classes`** **"`madarasa`"** niwakati muafaka
  wa kuiamrisha **Django** **ORM** itutengeneze **hifadhidata**. 
Kama tulivyo ona nnje ya boksi **Django** inakuja na **SQLite** na ndiyo hiyo nitakayo itumia, Kumbuka kwamba **Django**  **ORM** ina tumia lugha ya **SQL** kwa hiyo **hifadhidata** yoyote ile ambayo inatumia **SQL** kama vile PostgreSQL, MySQL nk zinaweza kufanya kazi na **Django**

**Weka model kwenye hifadhidata**

Sasa tunakwenda kuweka hayo **"madarasa"** **classes** kwenye **hifadhidata** kwakutengeneza faili la **"migration"** faili hili ndilo lenye **madarasa** pamoja na sheria zinayo iambia **Django** mabadiliko gani yanatakiwa yafanyike kwenye **hifadhidata** 

ili kulitengeneza hilo faili la **"migration"** hakikisha ukiwa ndani ya directory ya **`projects/shambablog`** unaandika

    python3 manage.py makemigrations

  ```shell
    Migrations for 'blog':
  blog/migrations/0001_initial.py
    - Create model Category
    - Create model Subscriber
    - Create model Post
    - Create model Comment

  ```
Tumefanikiwa kuandika faili la **maigration** ambalo liko kwenye **`blog/migrations/0001_initial.py`** ili kuziweka hizo tarifa ambazo ziko kwenye faili la **migration** kwenye **hifadhidata** fanya hivi

    python3 manage.py migrate

  Sihaba kama unaona kitu kama hiki.  

  ```shell
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
Sasa **Model** zetu zipo kwenye **hifadhidata** inamanisha kwamba sasa tunaweza kuanza kuandika post. Naili kuweza kuandika hizo post inabidi kuingia kwenye webapp ya **Django** kama mtumiaji mwenye mamlaka ya **usimamizi** **"admin"**

## Django Admin 
wakati tuna tengeneza project tulitumia **`django-admin startproject`** hi inatuwezesha sisi kutumia **admin** moja kwa moja. tunacho takiwa kufanya ni kumtengeneza mtumiaji ambaye tuna mpa mamlaka ya **usimamizi**/**"admin"** kwa ku weka command hi kwenye terminal

    python3 manage.py createsuperuser

```shell
Username (leave blank to use 'root'): admin
Email address: admin@internal.labnet
Password:
Password (again):
Superuser created successfully.
```
Username hapo unaweza kuweka jina jingine lakini mimi nimeweka **admin** kwasababu ya kiwango 'standard'  

sasa azisha webapp yako 

    python3 manage.py runserver 0.0.0.0:3000

Nadhani kitu chakwaza ulicho gundua nikwamba sasa hivi lile onyo la **migrations** halipo. Lakini cha msingi kabisa nataka uwende kwenye 
    kivinjari chako alafu ufungue http://ip:3000/admin utatakiwa kuweka jina la mtumiaji uliye mtengeneza hapo awali pamoja na nywila. Utakapo ingia utaona kitu kama hiki.

![django-admin1](//images.ctfassets.net/9heip63yijn8/2oa96DYXmNTHwevpSyp7O8/dba93eb615f5f1a6183831b7390aac87/2020-11-22_21_32_56-Site_administration___Django_site_admin_____Firefox_Developer_Edition.png)    
Ili zile **Models** tulizo zitengeneza tuweze kuzitumia inabidi tuzi orotheshe hapa kwa kuziandikisha kwenye faili hili **`blog/admin.py`** hebu lifungue tuanze kuziandikisha hizi **Models**. 

    nano blog/admin.py

```shell
 from django.contrib import admin
 from .models import Post,Subscriber,Category

 admin.site.register(Post)
 admin.site.register(Category)
 admin.site.register(Subscriber)
```
Kama ambavyo unaona tume agiza **'import'** **models** tunazo hitaji kutumia, alafu namalizia na kuziandikisha. Uki save faili lako alafu ukirudi kwenye http://ip:3000/admin uka refresh kivinjari chako bila shaka utaona kitu kama hiki
![django-admin2](//images.ctfassets.net/9heip63yijn8/4une6KKY4qROJGm7oBD2MT/dbc6422eebf25aaf80bfa851b5998ea8/2020-11-18_11_31_14-Site_administration___Django_site_admin_____Firefox_Developer_Edition.png)

Endelea na Kutengeneza **categories** kama ifuatavyo: 
![2020-11-18 11 39 11-Add category Django site admin ](//images.ctfassets.net/9heip63yijn8/1RjWRIthx1gMTKJzemCMhd/163604f11292c1328c1915e704a49ec1/2020-11-18_11_39_11-Add_category___Django_site_admin_____Firefox_Developer_Edition.png)

Nita tengeneza jumla ya **categories** nne.
![category to change Django site admin](//images.ctfassets.net/9heip63yijn8/d9yBibli25BtVpUNLUMvt/1a4a81f3026af8be2fff770d0bd8bfdd/2020-11-18_11_40_08-Select_category_to_change___Django_site_admin_____Firefox_Developer_Edition.png)Tengeneza post, usijali kuhusu hiyo field ya **likes** kwa sasa 
![Add post Django site admin](//images.ctfassets.net/9heip63yijn8/5uRRMcfGIsnFAoGYBuo37F/9760345f172c15fb3b17fc7b94e6d3f7/2020-11-18_14_11_14-Add_post___Django_site_admin_____Firefox_Developer_Edition.png)
Nime tengeneza jumla ya post tano, tatu nime zi publish mbili sija zi publish kwa lengo la kujifunza
![2020-11-18 14 43 34-Select post to change Django site admin](//images.ctfassets.net/9heip63yijn8/5VQdZ8kWx4pDHNmMIX1wm/492385ec8818268630dc187d022c4170/2020-11-18_14_43_34-Select_post_to_change___Django_site_admin_____Firefox_Developer_Edition.png)

Kuna umhimu wa kuangaliya kwaundani jinsi ambavyo **Django** ina jiunganisha na kuhifadhi data kwenye **hifadhidata** ili kufikia lengo hilo basi nilazima nikutambulishe kwenye **Kuulizaset**/**"QuerySet"**

## **Kuulizaset** ni nini?

**Kuulizaset** hasa kiini, ni orotha ya **vitu** kwenye **Model** husika, **kuulizaset** kuna turuhusu *kusoma*, *kuchuja* na *kupanga* data kwenye **hifadhidata**

Nitaanza na kuanzisha **console** ya **Django** haina utofauti sana na ile ya **python** lakini hi inatupa nyenzo nyingi ambazo ni maksusi kwa **Django** kwenye terminal yako fanya hivi.

    python3 manage.py shell

```shell
  Python 3.6.9 (default, Oct  8 2020, 12:12:24)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>> 
```
Sasa tunamwingiliano na **console** ya **Django**, kuthibitisha hilo nita agiza maktaba ya **models** ya **Post**.

    from blog.models import Post   
Nita **ulizaset** kwaku orothesha **post** zote tulizotengeneza  
```shell
Post.objects.all()
<QuerySet [<Post: Ufugaji wa n'gombe wa maziwa>, <Post: Ulimaji wa mboga mboga>, <Post: Ufugaji wa kuku>, <Post: Uwandaji wa shamba la mpunga kwa kutumia trector>, <Post: Matumizi ya dawa za ukulia wa dudu kwenye mashamba ya kahawa>]>
```

ilikutengeneza **post** mpaka sasa hivi nilazima uwe kama mtumiaji mwenye mamlaka ya **usimamizi**, nakuhusu **msimamizi** ndiyo mtumiaji pekee tuliye naye mpaka sasa hivi, mimi nili muita **"admin"** kuthibitisha hilo basi nita *soma* orotha ya watumiaji wote tuliyonao kwa kufanya hivi 
```shell
from django.contrib.auth.models import User

User.objects.all()
<QuerySet [<User: admin>]>
```
Ili niweze kumtumia huyu mtumiaji itabidi nitengeneze mfano wamtumiaji
 ```
 mimi = User.objects.get(username='admin')
 ```
kuthibitisha kwamba sasa na mamlaka hayo nitatengeneza post moja kama mtumiaji
```
 Post.objects.create(author=mimi, title='Ulimaji wa zabibu', text='Ulimaji wa kisasa wazabibu mkoani dodoma.')
<Post: Ulimaji wa zabibu>
```
*Tuchuje* post tunazotaka zionekane mathalani tuorotheshe post ambazo kwenye kichwa cha habari 'title' kuna neno *ufugaji*
```
Post.objects.filter(title__contains='ufugaji')
<QuerySet [<Post: Ufugaji wa n'gombe wa maziwa>, <Post: Ufugaji wa kuku>]>
```

Tunaweza **kuulizaset** kwa lengo laku *panga* orotha yetu, mfn tunataka ku ona post zote ambazo zime chapishwa 'published' lakini zile post za mwisho kuchapishwa ndiyo ziwe zakwanza kuonekana. 
```
from django.utils import timezone
Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
<QuerySet [<Post: Ufugaji wa n'gombe wa maziwa>, <Post: Ulimaji wa mboga mboga>, <Post: Ufugaji wa kuku>]>
```
Ukitaka kutoka kwenye **console** utafanya hivi
```
exit()
``` 
Tumeona uwezo na nguvu ya **kuulizaset** **"QuerySet"** tukiwa nahayo maarifa ya kutumia hiyo zana  katika mkoba wa nyenzo zetu hebu tuone nijinsi gani tunaweza kuandika *kazi* kwenye **mtazamo** **"views"** ambazo zitaenda kuchukua data kutoka kwenye **hifadhidata** na kuzionyesha kwenye ukurasa wetu wa **html** 

## Django Views

Kwenye app yetu ya blog tuta tengeneza **mtazamo** **"views"** za aina mbili
tuta kua na **mtazamo** ambao unaorothesha post zote ambazo zimechapishwa, alfatu tutakua na **mtazamo** ambao una onyesha post moja iliyo chapishwa kwaundani.

Wakati ambapo majina ya hii **mitazamo** **"views"** yanaweza kua kitu chochote kile **mtazamo** wangu amboa utakua una onyesha orotha ya post zote zilizo chapishwa nita uita **post_index** na ndiyo utakua ukurasa wa mbele wa webbapp yetu

**mtazamo** wa post moja kwa undani hu nitauita **post_detail**

Tuanze kutengeneza hii **mitazamo** kwaku fungua faili hili
``` 
nano blog/views.py
``` 
Kwaza kabisa nimeanza na kuagiza kifurushi cha `django.shortcuts` ambacho kinakusanya **kazi** za usaidizi na **madarsa** ambayo yanajitanua kwenye *MVC*, hapa nimechomoa kifurushi ambacho kitatuwezesha **kutoa** **"render"** html. Pamoja na itakayoita **pata()** **"get()"** au **404** "*hai patikani*" 
```
from django.shortcuts import render, get_object_or_404
```
Kwajili ya majira nime agiza maktaba ya **timezone**
```
from django.utils import timezone
```
Angalia jinsi ambavyo na agiza **Model** ya **Post** hiyo nukta inamanisha **model** ya **Post** inapatikana kwenye directory moja na faili la **mtazamo** `views.py`.
```
from .models import Post
```
Na anza kutengeneza **"kazi"** `def` naipa jina la `post_index` inachukua **ombi** **"request"** alafu ita **rudisha** **"return"** thamani iliyo ipata kwakuita **kazi** nyingine **kutoa** **"render"** ambayo hi nayo ina chukua **ombi** **"request"** ita **toa** template ya **html** `blog/post_index.html`. Na `{'posts': posts}` kwa sasa chukulia kama ni **kuulizaset** nili iweka kwenye `variable` tuta enda kuitumia kwenye template.
Kazi yake ni *kuchuja* **post** nipate zile zilizo chapishwa tu, alafu ni zi orotheshe kwa *kupanga* kutokana na tarehe ya kutangulia kuchapishwa
```
def post_index(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/post_index.html', {'posts': posts})
``` 
Hapa kwajili ya post kwaundani naendelea **kuulizaset** safari hi nataka **Post** pamoja na **funguo ya msingi** **"primary key"** `pk` ambayo ndiyo nimeipitisha kwenye **hoja** za **kazi** kwahiyo hilo ndiyo litakua **ombi** **"request"** ili **kurudisha** **"return"** **kazi** ya **kutoa** **"render"** ambayo inachuka **ombi** **"request"** itarudisha **html** tukiwa tumepitisha kamusi ya muktadha ambayo itakwenda kutumika kwenye template.
```
def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})    
```    
Sasa tuna hiyo **mitazamo** yetu **"views"** ili hi **mitazamo** iweze kuitwa na hatimaye kuitikia **ombi** inabidi kuifahamishe `URLs.py` uwepo wa **mitazamo** **"views"**. Wakati ambapo tunaelekea huko kwenye **URLs** kumbuka kwamba bado hatuja tengeneza directories kwajili ya template zetu za **html** tutafanya hivyo badae    

 ## Django URLs
Anza na kutengeneza faili la **urls.py** ndani ya directory ya app yako hili faili hua halitengenenzwi na `manage.py startapp`
``` 
nano blog/urls.py
``` 
Nitaanza **nakuagiza** **"import"** **kazi** ya **njia** **"path"**, na **mitazamo** **"views"** yetu kutoka kwenye directory hi ya *blog* ambapo faili hili nalo lipo ndiyo maana ya hiyo nukta hapo. 
``` 
from django.urls import path
from . import views
``` 

naonyesha **muundo** **"patterns"**  wa **URLs** zangu, bilashaka umegundua kwamba **mtazamo** **"views"** wa `post_index` ndiyo mzizi wa *Urls* zangu ndiyo itakuwa ukurasa wetu wa mbele.
Kwenye **mtazamo** **"views"** wa `post_detail` hapa tunataka `url` iwe `post/1`, `post/2`, nk kutegeme na **ufunguo gani wa msingi** **"pk"** ume pitishwa kwenye **URL** ndiyo mana tukaweka `<int:pk>` kuijulisha **Django** kwamba thamani **"value"** inayo pita kwenye **URL** ni **nambari** **"integer"** na jina la `variable` yake ni `pk`
```
urlpatterns = [
    path('', views.post_index, name='post_index'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),

]
``` 

Kwenye framework ya **Django** unapotengeza project kwa kutumia `django-admin startproject` na faili la **urls** hua linatengenezwa kama una kumbaka ndiyo mana tuliweza kwenda `http://ip:3000/admin` nandiyo mana ukitumia `manage.py startapp` haitengenezi faili la `urls.py` kwenye directory ya app. 

Mimi huwa napendelea kusafisha vitu kidogo, inapendeza kila *app* ikawa na faili lake la **urls** alafu hili faili la **urls** ambalo liko kwenye **project** lika tupia *ndoana* kuli kamatia lile la kwenye **app** na ndiyo hicho ninacho kwenda kukifanya hapa.

Nita anza na kufungua faili la **urls** lakwenye **project**
```
nano habari_zashamba/urls.py
```
ili app yetu iweze kuhudumia mafaili ya *picha*, *javascript* na css yaliyo **tuli** **"static"** ni budi tuka **agiza** **vifurushi** vya **settings** pamoja na **static** *lakini* **kama** *tu* tutakua tuna tafuta **utatuzi** **"debug"**. 
Kwenye **urls** naongezea **kifurushi** mhimu sana **ni pamoja na** **"include"** hiki kina saidiana na **kifurushi** cha **njia** **"path"** matokeo yake yanaonekana hapo kwenye **muondo wa url** **"urlpatterns"** tunaposema kilakitu baada ya **domain** kita hudumiwa na faili la **urls** ambalo liko kwenye **app** ya **blog**
```
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
```
mkdir templates/blog
```

ndani ya hiyo directory nita tengeneza faili la `base.html`

**base template** zinasadia pale ambapo unataka uwena na tarifa au mpangilio unao funana zaidi ya sehemu moja na hutaki kurudia rudia kuweka tarifa hizo hizo kwenye kila faili, nakama ikitokea kuna mabadiliko basi mabadiliko hayo uta yafanya kwenye faili moja tu badala ya kwenda kwenye kila faili.

```
nano templates/blog/base.html
```
Mara baada ya kufungua app yangu kwa kutumia **kivinjari** hiki nita shikilia kwenye **keyboard** yangu `Ctrl + shift + c` hi itanifungulia sehemu yakuweza kukagua **vipengele** **"elements"** mbali mbali vya app yangu

![mozzila-django](//images.ctfassets.net/9heip63yijn8/2QncJxfxvcSz5qnnIrU7MK/a7e8116a5b8dc0a41d0bd97b3c7f7a06/mozzila-django.png)

baada ya kugundua ni **vipengele** **"elements"** gani na takiwa **kugusa** kwa lengo la kuboresha **muonekana**, nita weka hiyo **mitindo** kwenye faili la **css**
```
nano habari_zashamba/staticss/blog.css
```
```
.card-body {

	background-color: #fff;
}

body {

	background-color: #9eba5b;
}

.h1, h1{

	text-align: center !important;
}
```
Sasa funga safari kwa kutumia **kivinjari** chako na utembelee http://ip:3000 matarajio nikuona kitu kama hiki
![django-bootstrap2ed](//images.ctfassets.net/9heip63yijn8/QYB7FUnMpu419SvQnEgUT/decca3d614aecb2c838fdd43cd41f6e2/django-bootstrap2ed.png)

Na ukifungua **chapisho** kwa lengo la kusoma zaidi utaona kitu kama hiki
![django-bootstrap3](//images.ctfassets.net/9heip63yijn8/656mgE2Mt7CiLzbrP4ELqd/67eda6b7b0910e1970bce5137315b8c2/django-bootstrap3.png)

Tume rizika na muonekano pamoja na utendaji kazi wa **webapp** yetu sasa tunataka ku share **machapisho** yali yopo kwenye **webapp** yetu kwaku iweka kwenye mtandao wa **internet**. 

## Uwekaji wa webapp kwenye internet

**Mambo ya kuzingatia**

1. **Machine** itakayo wa **hudumia** **wateja** wa **webapp** yetu,
tumekua tukitumia **web server** ambayo inakuja na **Django** nima hususi kwajili ya **maabara** na **majaribio**, tunapokwenda kwenye **uzalishaji** lazima tujue ni **machine** gani ita **soma** na kuya **hudumia** ma **faili** yetu ya **python**.

*Ku husu hilo odoa shaka kwani kuna njia nyingi ambazo unaweza kutumia, kwenye makala hanya tuta tumia [pythonanywhere](https://www.pythonanywhere.com/ "pythonanywhere") kwasababu ni moja ya njia rahisini sana hasa kama ndiyo una anza lakini kikubwa zaidi ni bure hasa kwa matumizi ya kawaida nahii inafanya iwe nisehemu zuri kabisa kuanzia.*

2. **jinsi** ambanyo tuta kabiliana na **kudhibiti** **matoleo** mbambali ya **webapp** yetu na jisi **wenzentu** kwenye **timu** wanaweza ku **chaingia** katika  **maendeleo** ya hii **webapp**.

*Kwenye makala haya tuta tumia [Git](https://github.com/ "github") kwa lengo la kudhibiti matoleo ya webapp yetu na kichochezi kingine ni wepesi wake waku tumika kwenye timu licha ya hivyo ni mwanzo mzuri wa CI/CD*

Tunapo zungumzia **git** ni mdaa muafaka wakuangalia kwenye hiyo **opareting system** unayo tumia kama umesha **install** **git** kabla ya **kuendelea**. 

## Hazina ya git
**Git** hua inafuatilia **mabadiliko** ya set ya **mafaili** ambayo yako kwenye **hazina** kwa ufupi huwa tuna ita **repo**, kabla hatuja tengeneza hiyo **repo** ngoja tutengeneze **faili** ambalo lita warahisishia **wasanidi programu** **"developer"** wengine **kufahamu** ya kwamba ili hi **app** iweze kufanya kazi katika mazingira yao wanahitaji kua na **vifurushi** au **maktaba** gani
```
nano requirements.txt
```
Weka
```
Django==3.0.10
Pillow==8.0.1
```
**Anzisha git**
Hakikisha uko ndani ya 
```
/projects/shambablog#
```
alafu fanya hivi kuanzisha git
```
git init
Initialized empty Git repository in /root/projects/shambablog/.git/
```
hakikisha unaweka tarifa zilizo sahihi kama huja fungua [account ya git](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home "gitaccount") inakubidi ufanye hivyo kabla ya kuendlea
```
git config --global user.name "Jina"
git config --global user.email jina@email.com
```
**Giti** itakua **infuatilia mabadili** kwenye hii **directory** kuna **mafaile** na **directories** ambazo **sitaki** **giti** **ifuatilie** kwa hiyo nitatengeneza **faili** ambalo naliita `gitignore` jina muhimu alafu na lificha `.` ndani naweka **mafaili** na **directories** ambazo **sitaki** **zifuatiliwe mabadiliko** yake na `git` 
```
nano .gitignore
```
```
# Python
*.pyc
*~
__pycache__

# Env
venv/

# Database
db.sqlite3
# images
images/

```
Nita angalia hali kujua nini kimebadilika
```
git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        blog/
        habari_zashamba/
        manage.py
        requirements.txt
        templates/

nothing added to commit but untracked files present (use "git add" to track)

```
Nita **ongeza** **mafaili** na **directory** zote ambazo **nataka mabadiliko yake ya fuatiliwe**, **save** **"commit"** na kuweka **maoni** kwa lengo la **kumbukumbu** na kuwa **julisha wengine** nini kinaendelea

```
  git add .
  git commit -m "Farmers Blog app, first commit"
  [master (root-commit) f7dd757] Farmers Blog app, first commit
 23 files changed, 490 insertions(+)
 ```

 **Sukuma code zako github**

 Nenda github kumbuka uta hitaji kuingia na account yako uliyo ifungua hapo awali alafua utatengeneza hazina kwakufanya hivi
![git-repo-creating](//images.ctfassets.net/9heip63yijn8/PDGF0mCIv6TfX442UWysx/f3f9bfe83c756e94f24f258034910430/test.png)

![git-repo-creating](//images.ctfassets.net/9heip63yijn8/tpAn0zUfy6ZP4jdqeRr96/176940052e548291b85065e918965c16/git-repo-creating.jpg)
![git-repository](//images.ctfassets.net/9heip63yijn8/ZmKMIgRAJ9CICLC158axJ/e8062c91b692e48213e0a11c446fadcb/git-repository.png)
Baada ya kutengeneza **hazina github** nita **ziunganisha** **hazina** ya kwenye **computer** na **hazina** ya **github**  alafu nita **sukuma** kwa kufanya hivi.. 

Njia ya zamani.
 ```
  git remote add origin https://github.com/badili/farmers-blog.git
 ```
 Kuanzaia March 15, 2022. GitHub inakuanganisha na kukuthibitisha kwa kutumia SSH.
Angalia kama unaweza kuthibitishwa Github kwa kutumia SSH

```Bash
ssh -T git@github.com
```

```Bash
> The authenticity of host 'hostname (IP ADDRESS)' can't be established.
> RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
> Are you sure you want to continue connecting (yes/no)? # sema yes

Hi Mtumiaji! You've successfully authenticated, but GitHub does not provide shell access.
```

Kama huja pata majibu kama hayo basi jaribu kuangalia hapa Jinsi ya kuwezesha kuanganishwa Github kwa kutumia itfaki ya SSH.

Kama umepata majibu kama hayo hapo juu unaweza kuendelea na kusukuma code kwenye hadhina yako ya Github kwa kufaya hivi:

```Bash
git remote set-url origin git@github.com:jinalako/farmers-blog.git
```
Badilisha jina la mtumiaji na jina la hadhina ziendane na mazingira yako

Sukuma Code

```Bash
git push --set-upstream origin master
```
Njia ya zamani

  ```
  git push -u origin master
  Username for 'https://github.com': badili
Password for 'https://badili0@github.com':
Counting objects: 35, done.
Compressing objects: 100% (31/31), done.
Writing objects: 100% (35/35), 689.64 KiB | 12.54 MiB/s, done.
Total 35 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/badili/farmers-blog.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
 ```
 ## Pythonanywhere
 Elekea **pythonanywhere** na **usajili** account, wakati una sajili account
 kua makini na jina la **mtumiaji** **"username"** utakalo taka kutumia kwa sababu mwisho wasiku app yako itakua inajulikana kama `jinalamtumiaji.pythonanywhere.com`

 ![pythonanywher-signup](//images.ctfassets.net/9heip63yijn8/4QmbwqCocitHmh84oAoRfr/ddd67caaa2e42bdc29740c4844546e06/pythonanywher-signup.jpg)

 ![Plans-and-pricing-Python-Anywhere](//images.ctfassets.net/9heip63yijn8/3tfTjtsV4ihFMdrk6I1lwi/2d19d67eba4a298a9e547e565aaa3d9e/Plans-and-pricing-Python-Anywhere.png)

 Kitu cha kwanza cha kufanya mara baada ya kujisajili niku tengeneza token kwa kufanya hivi, 
  ![pythonanywher-dashboard](//images.ctfassets.net/9heip63yijn8/MrQXTVSdOyiaccoRZP3op/5eea72f633486340879a87e3eb113b5a/pythonanywher-dashboard.jpg)

  ![pythonanywher-token](//images.ctfassets.net/9heip63yijn8/6T2Otcwp5OAd2g7Yra3tyR/0c32bb9a45ef59ba3f587161b9f20b3a/pythonanywher-token.jpg)
  ![pythonanywher-api](//images.ctfassets.net/9heip63yijn8/5OymHMKPMmJsYIg7CkoX30/3831c69def227203ee1bf03258010e49/pythonanywher-api.jpg)

  Ukimaliza bofya kwenye kitufe cha consoles hapo kwenye nav bar,
  alafu chagua bash console kama hivi
  ![pythonanywher-bash](//images.ctfassets.net/9heip63yijn8/6rf8gfQEyiYgAjQWazdYmN/f09743be4d022bba3bc47021b7316906/pythonanywher-bash.jpg)
  Sasa tuna uwezo wa kuweka command zetu kama tulivyo kua tunafanya kwenye machine yetu, tunatakiwa tuichukue ile code ya webapp yetu amboyo iko github
  to fanye configuration kwenye pythonanywhere ili iweze kuhudumia webapp yetu wakati ambopo tunaweza kufanya yote hayo tayari kuna script ambayo itatusaidi tunacho takiwa kufanya niku install hiyo script alafu tuta iazisha
 ```
 $ pip3.6 install --user pythonanywhere
 ```
 hapa sasa ndiyo naiyazisha hiyo script hakikisha unaweka tarifa zilizo sahihi kuhusian na hathina yako ya github 
 ``` 
 $ pa_autoconfigure_django.py --python=3.6  https://github.com/devduara0/farmers-blog.git
 ``` 
 app yetu sasa iko tayari kwa matumi ukienda https://devduara0.pythonanywhere.com bila shaka utaona

 ![pythonanywhere-django-blog](//images.ctfassets.net/9heip63yijn8/5PJrrvV7tQV1VH31TrbioL/c6efdaf79c6241624a0e5ccadf1a1de8/2020-11-30-12h38-49.png)

 Kwa vile hatukuchukua **hifathidata**, inamanisha inabidi kutengeneze **account** ya **mtumiaji** ambayo ina hadhi ya **usimazizi** alafu kwa kutumia hiyo account tuta kwenda kuingiza data.

 Anza naku tengeneza accont ya msimamizi kwa kufanya hivi

 ``` 
 $ python manage.py createsuperuser
 ``` 
sasa nenda https://devduara0.pythonanywhere.com/admin

alafu ukisha ingia uta **tengeneza** na **kuchapisha** post zako kama awali.

![pythonanywher-devduara-admin](//images.ctfassets.net/9heip63yijn8/4WU6IOMjBWYUE9GWvsC6rh/4c71211dbdbe60b378a2b9b0c4b4b80e/2020-11-29-18h17-29.png)

![pythonanywhere-django-admin-post](//images.ctfassets.net/9heip63yijn8/4qIryTgy09VwxV9yyICVwR/462eaf84c4024656b597b961fcc16c91/2020-12-04-00h08-44.png)

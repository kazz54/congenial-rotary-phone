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
**lugha** ya **programing** inayo julikana kama **python** kwa usaidizi wa **mfumo** **"framework"** unao julikana kama **Django**. 

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

{% highlight "python" %}

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


ili kuweza kutengeneza au kuanzisha **virtual environment** inatubidi tuwe na kifurushi kwajili ya **virtual environment** 
inategemea unaweza ukawa tayari unacho kifurushi cha **virtual environment** lakini kama huna una install kama hivi

{% highlight "shell" %}

apt-get install python3-venv

{% endhighlight %}

na tengeneza **virtual environment**, naita **venv** unaweza ukaita vyoyete vile

{% highlight "shell" %}

python3 -m venv venv

{% endhighlight %}

activate **virtual environment**

{% highlight "shell" %}

source venv/bin/activate

{% endhighlight %}


kuazia sasa **vifurushi** vyote vya **python** tutakavyo install na 
kuvifanyia kazi vitakua mahususi kwajili ya mazingira/environment hii **venv** 





### Installation Ya Mfumo wa Django

nita install framework ya **Django** version **`3.0.10`** kwama wakati na andaa makala haya

{% highlight "python" %}

pip3 install Django==3.0.10

{% endhighlight %}

Kama utahitaji kufanya installation ya version mpya zaidi utafanya hivi

{% highlight "python" %}

pip3 install Django

{% endhighlight %}

**Tengeneza project ya Django.**

Nita tumia nyenzo inayo julikana kama `django-admin` kutengeneza hii project ambayo nita ita `habari_zashamba`. 
nyezo hii inafanya kazi kwenye terminal na kazi yake hasa ni kurahisisha kazi za kitawala. 

{% highlight "python" %}

django-admin startproject habari_zashamba .

{% endhighlight %}

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

Usihamaki kwa wingi wa hayo mafaili na nini yanatakiwa kufanyaa, kilajambo litakua wazi, kwa sasa nataka afugue faili la `settings.py` faili hili ndiyo
linakua na setting za application yako ya **Django**.

{% highlight "shell" %}

nano habari_zashamba/settings.py
	
{% endhighlight %}

hapa nataka ubadilishe iwe kama hivi.

{% highlight "python" %}

ALLOWED_HOSTS = ['*']

{% endhighlight %}
lengo niku weza kuipata application yangu kwenye mtandao wangu wa ndani **LAN**. 

sasa save faili alafu fanya hivi. 

{% highlight "python" %}
python3 manage.py runserver 0.0.0.0:3000

{% endhighlight %}

Nime azisha Web server inayokuja na **Django** kwenye network interface zote kwa kutumia `manage.py` hii niyezo nyingine kwa jili ya kurahisisha utawala, 
nyezo hii hua inapatikana baada yakutengeneza project.

Kwa sasa usihofu kuhusu hilo oyo unalo liona kuhusu **Migrations**, tuta angalia **Migrations** kwa undani mdaa si mrefu.
![django-output](https://images.ctfassets.net/9heip63yijn8/3RzSCW0MpHF2F54YOQNqPn/d4c2945a1fd0b10ebbe52cab2c95eb49/2020-11-21_13_13_12-192.168.1.10_-_PuTTY.png)

Mhimu kwa sasa ni kuazisha kivinjari chako nakwenda http://ip:3000 utaona kitu kama hiki

![p1](https://images.ctfassets.net/9heip63yijn8/7fphNn9DAVR5lNUYDPxx3O/f72d2d3b5fc330647708cb621b8680f3/2020-11-17_17_04_36-Django__the_Web_framework_for_perfectionists_with_deadlines._____Firefox_Developer.png)
Mpaka hapatulipo fikia inamanisha sasa tunaweza kuanza kuandika **Webapp**, nitatumia nyezo ya `manage.py` kwa lengo lakunitengenezea mafaili na kunipangilia directory ambazo nitatumia kwenye hii app. 

Kumbuka tulikua na uwezo wakuandika haya mafaili na hizi directory wenyewe lakini kama nyenzo ya kurahisisha ipo kwanini tusi itumie, 
na ndiyo hicho ninacho kifanya hapa.

{% highlight "python" %}
python3 manage.py startapp blog
{% endhighlight %}

Tumesha fanya mandalizi ya mafaili na directory za app kabla sija ielekeza framework yetu ya **django** juu ya uwepo wa app inayo itwa **blog** 
inatubidi tuongeze maktaba nyingine ya **python** ambayo itatusaidia kwenye usindikaji wa picha maktaba hii ni maarufu kwa jina la `pillow` kuipata maktaba hii fanya hivi.

{% highlight "python" %}

pip3 install pillow

{% endhighlight %}






Sasa tutarudi kwenye faili letu la `settings.py` kwajili ya kuifahamisha **django** uwepo wa app ya **blog** pamoja na setting zingine 
kama vile mdaa na wapi tuna kusudia kuhifadhi mafaili fungua `settings.py` kwa kufanya hivi

{% highlight "shell" %}

nano habari_zashamba/settings.py

{% endhighlight %}

Kwenye **`INSTALLED_APPS`** weka **blog** na hiyo ndiyo jinsi ya kuitambulisha **django** uwepo wa hiyo app ya **blog**

{% highlight "python" %}

INSTALLED_APPS = [
'django.contrib.admin',
'django.contrib.auth',
'django.contrib.contenttypes',
'django.contrib.sessions',
'django.contrib.messages',
'django.contrib.staticfiles',
'blog',
]
{% endhighlight %}


**Django** nnje ya boksi ina tegemea kukuta mafaili ya **html** ndani ya directory ya app 
kwa mantiki hiyo **django** inatarajia kuona **`blog/templates`** alafu **templates** mfn **`index.html`** nk, 
mimi nita badilisha huo mtazamo kwa kuitoa `templates directory` nje na kuiweka juu kwa kufanya hivi 

{% highlight "python" %}

'DIRS': [os.path.join(BASE_DIR, 'templates')],
{% endhighlight %}

undoa neno **`UTC`** badala yake weka

{% highlight "python" %}

TIME_ZONE = 'Africa/Dar_es_Salaam'
{% endhighlight %}

App yetu itakua ina mafaili mbali mbali kamavile `picha`, `css`, `javascript` nk
**django** tayari inakuja ikiwa imewezeshwa kutoa huduma ya haya mafaili pale inapohitajika kama ukiangalia hapo kwenye 
**`INSTALLED_APPS`** utaona **`django.contrib.staticfiles`** hiyo ndiyo app inayo tuwezesha tunacho takiwa sisi kufanya 
nikuonyesha tu wapi hayo mafaili kwenye app yetu yanapatika kwa hiyo badili na iwe hivi.

{% highlight "python" %}
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'
STATICFILES_DIRS = [
os.path.join(BASE_DIR, 'habari_zashamba/static')
]
{% endhighlight %}

Mwisho na malizia na setting za `pillow` kwajili ya mafaili ambayo watumiaji wa app 
watakua wame pakia/upload.

{% highlight "python" %}

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/' 
{% endhighlight %}

Kwa sasa unaweza uka save hili faili, alafu tengeneza hizo directory ulizozionyesha

{% highlight "shell" %}
mkdir habari_zashamba/static
mkdir media
mkdir templates
{% endhighlight %}

### Django model

Sasa tupo tayari kuandika program kwa ajili ya **kitu (object)**, 
swali ni kwamba **kitu** che nyewe ni nini? na jibu ni **post** / **"makala"** kwenye hii app tunataka watumiaji wa app waweze kuandika na kuchapisha **makala** yao online. 
Sasa hizo post "makala" **(kitu)** zinasifagani? kabla sija jibu hili swali hebu tuangalie mfano wa **kitu** kingine ambacho wewe na mimi tunakijua na **kitu** 
hicho siyo kingine bali ni **kitabu**, `kitabu` kwa haraka haraka kina sifa zifutazo `jarida, kichwa cha habari, jina la kitabu, mtunzi mwaka kiliyo chapisha orotha ya sura mbali mbali nk` 
tukiwa bado tuna twasira ya kitabu hebu tuangalie kwenye **post** ambazo watumiaji wetu watakua wanaandika zitakua zina undwa na nini? `kichwa cha habari, jina la muandishi habari ye nyewe nk`, 
aha kwa hiyo kama vitu kama hivyo ndiyo vinatupatia **kitu** ambacho tunakita **post** hebu tuangalie hivyo **vitu** vya hicho **kitu** **Post** tunawezaje kuviprogram kwa kutumia **python** 
na mtindo wa ku program **kitu** kwa lugha nyingine **oop (object orieted programing)**. Bahatizuri **Django** anakitu ambacho kinaitwa `Model` 
kita tusadia kuprogram **kitu**

`Model` kwenye upande wa **Django** ni **kitu** cha namna ya kipekee kina hifadhiwa kwenye **hifadhidata/database** na **hifadhidata** ni mkusanyiko wa data hapa ndiyo sehemu ambayo utahifathi tarifa za watumiaji, posts nk...

kama ukiangalia kwenye `settings.py` utaona kunatarifa za **hifadhidata**. 
**Django** inkuja ikiwa imesha wezesha na `sqlite3` ambayo kwa mazingira ya maabara na majaribio inatosha lakini kama utahitaji kubadilisha 
**hifadhidata** una weza kufanya hivyo ila mimi kwenye lab hii sitabadili nitaiyacha **sqlite3**. 

Katika hali ya kawaida ili kutumia **meza** na **safu** za **hifadhidata** inabidi ku andike **SQL** command lakini kwa kutumia **Model** 
hatu hitaji kufahamu **SQL** kwani **Django** inatumia **ORM** hii ina tuwezesha sisi kundika **madarasa** kwenye **python** 
ambayo yanaendana na **safu** pamoja na **meza** za kwenye **hifadhidata** ukiwa unatumia **ORM** yale **madarasa** 
unayo yatengeneza yanayo wakilisha **meza** za **hifadhidata** yanajulikana kama **Models** na kwenye **Django** hua yanaishi kwenye faili linalo julikana kama `models.py`

{% highlight "shell" %}

nano blog/models.py

{% endhighlight %}

Hapa sasa nitaanza kuonyesha `madarasa` yangu

{% highlight "python" %}

from django.conf import settings
from django.db import models
from django.utils import timezone
User = settings.AUTH_USER_MODEL

class Subscriber(models.Model):
	email = models.EmailField(unique=True)
	timestamp = models.DateTimeField(auto_now_add = True)

	def __str__(self):
		return self.email 
{% endhighlight %}

Nimeaza nakuingiza maktaba mbali mbali ambazo nita zitumia, 
kwakutumia neno **`import`**


**`class Subscriber(models.Model)`**: huu mstari una onyesha **model** yetu ni **kitu** 

**`class`** **"darasa"** ni neno maalumu ambalo lina ashiria kwamba tunatengeneza **kitu**

neno **`Subscriber`** hili ni jina la **model** yetu tunge weza kuita jinalolote lile lakini inabidi kua makini nakuto tumia tarakimu malumu na kutoacha nafasi.

neno **`models.Model`** inamanisha kwamba **Subscriber** ni **Django** model kwa hiyo **Django** inafahamu jinsi ya kuhifadhi kwenye **hifadhidata**

Na endelea na kuonyesha fields zinazo tengeneza **model** ya **Subscriber** ikiwa ni **`email`** pamoja na **`timestamp`** hizi ndiyo filds zikatazo tengeneza **model** yangu, 

chamsingi ni ku zipatia aina hizi field ambapo kwenye **Email** aina niliyo toa kwenye hiyo **field** ni **`EmailField`** na neno **`unique=True`** nikatika hali ya kuhakisha kwamba baruapepe hazijirudii.

fild nyingine ni **timestamp** jina lingeweza kua chochotekile lakini jambo lamsingi ni aina ya **field** ambapo nimesema kua ni **`DateTimeField`** **"fild ya tarehe"** **`(auto_now_add = True)`** 
hii inamanisha kila **kitu** cha **Subscriber** kikiwa kimetengenenzwa basi tarehe ya mda kilipo ongenza iwepo.

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

kwenye **model** ya `post` **fields** za `author`, `categories` pamoja na ya `likes` ndiyo zinaweza kidogo zikakuchanganya 
kwa sababu aina ya data zilizokuwepo kwenyo hizo **field** nitofauti na field zingine tulizo ziangalia hebu tuangalie moja bada ya nyingine 
tukiaza na field ya **author**

**field** ya **`author`** ni **`ForeignKey`** kwasabu ni kiungo na **model** nyingine ambayo ni **`User`** ambayo ina toka kwenye maktaba za **`setting`** ambazo tulisha ziingiza hapo awali kwakutumia **`import`**. 
Na ndiyo mana tume tumia **`on_delete=models.CASCADE`** ili endapo mtumiaji amefutwa basi na post zake zifute/delete kwa sababu kiungo hakipo.

Kwenye field ya **categories** ambayo aina yake ni **`ManyToManyField`** kwa jili ya kua kiungo na **modole** ya `Category` tunataka post nyingi kwenye `Category` na **`Category`**nyingi kwenye `post`.

Na hiyo ya `likes` nayo ni kama ya **categories** hapa utofauti tume 
tumia **`User`**, kwasababu tunataka "watumiaji" `user` wengi wa weze kupenda **post** nyingi.

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
Kama tulivyo ona nnje ya boksi **Django** inakuja na **SQLite** na ndiyo hiyo nitakayo itumia, Kumbuka kwamba **Django** **ORM** ina tumia lugha ya **SQL** kwa hiyo **hifadhidata** yoyote ile ambayo inatumia **SQL** kama vile PostgreSQL, MySQL nk zinaweza kufanya kazi na **Django**

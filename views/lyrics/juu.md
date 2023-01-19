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

Nime azisha Web server inayokuja na **Django** kwenye network interface zote kwa kutumia `manage.py` hi niyezo nyingine kwa jili ya kurahisisha utawala, 
nyezo hi hua inapatikana baada yakutengeneza project.

Kwasasa usihofu kuhusu hilo oyo unalo liona kuhusu **Migrations**, tuta angalia **Migrations** kwaundani mda si mrefu.
![django-output](https://images.ctfassets.net/9heip63yijn8/3RzSCW0MpHF2F54YOQNqPn/d4c2945a1fd0b10ebbe52cab2c95eb49/2020-11-21_13_13_12-192.168.1.10_-_PuTTY.png)

Mhimu kwa sasa ni kuazisha kivinjari chako nakwenda http://ip:3000 utaona kitu kama hiki


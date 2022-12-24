---
layout    : post
title     : Marilyn Manson - Jinsi ya kutumia python kuwezesha ssh kwenye vm ya colab
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




Ikiwa umemaliza kuangalia [aina ya data zilizojengwa ndani ya python](https://devduara0.github.io/python-jifunze-sheria-syntax-za-msingi-na-aina-ya-data) pamoja na function za python 



niwakati mzuri sasa wakuangalia matumizi ya python kwa kutatua baathi ya changamoto
kwa  kutumia ujuzi huu tuliyo nao mpaka sasa.

Kama ambavyo tunafahamu kuwa colab ni huduma ya latha flani ya Jupiter notebook "siyo juniper notebook"
kutoka google ambayo inatupatia huduma mbali mbali za komputer ikiwemo GPU za bure na kernel yake inatuwezesha kuandika lugha za Python pamoja na Swift.

Ili kupata wepesi wakufanya shuhuli kathaa za kitawala kwenye hiyo computer yetu tuta tumia itifaki ya internet ambayo itatupatia **shell prompt** ambayo ina ulinzi maarufu kama **SSH  Secure Shell**.

Sababu kubwa iliyo tupelekea kuchagua itifaki hii Kama ambavyo unaweza kubuni ni usalama.

Tukiwa tunaingiliana na computer yetu tunge penda kusafirisha data kati yetu na computer zikiwa **zimefumbwa** "fiche" kwakutumia mbinu za **cryptographic** za kufumba data "fiche" "encrypted" badala ya kuziacha wazi ""unencrypted"  kiasikwamba mtu yoyote kwenye internet anaweza kusoma nini kinaendelea kwa kukamata packets akiwa na kinusa packet  Kama ambavyo ingeweza kutokea kama tungetumia itifaki ya **Telnet**. 

HII itfaki ya **ssh** Ita tupa utaratibu wakufanya **uthibitisho** watumiaji wanao tokea nnje "remote", kuhamisha pembejeo kati ya mteja na muenyeji na kupeleka tena pato kwa mteja.

Wakati ambapo unahamu  yakuanza kuandika code zakusababisha hili tukio liwezekana hebu kwanzwa tujikumbushe kidogo jinsi **ssh** inavyo fanyakazi.

Hii itatusaidia wakati tunaandika code kufanya maamuzi ambayo ni sahihi nakuelewa zaidi kwanini tufanya tunachokifanya wakati tunakifanya.

# SSH  Secure Shell

Kuna mbinu tofauti tofauti zinazotumika kufanya  **Usimbaji fiche** "encryption" 

 **Usimbaji fiche wa ulinganifu** "**Symmetrical encryption**"

 **Usimbaji fiche wa asymmetrical** "**Asymmetrical encryption**"

**Hashing**.

Hayo majina ya hizo mbinu yasikutishe kwa sasa, nita kuelezea kwa haraka ufanyaji kazi wa mbinu zote tatu, hususana  makala haya yatazingatia uwezeshaji wambinu  ya **Hashing** kwenye mazingira yetu ya **colab**

## Symmetric Encryption

Hii ni aina ya encryption ambayo **funguo za siri** zinatumika kwenye encryption na decryption ya ujumbe kati ya  **mteja** na **server**. Kwa usahihi, yoyote mwenye ufunguo anaweza decrypt ujumbe unao hamishwa
 ![Crepe](https://i.ibb.co/PG0xxvL/Pics-Art-08-10-10-41-11.jpg)

Mara nyingi **Symmetrical encryption** inajulikana kama **shared key** au **shared secret encryption**.

Kuna funguo moja tu ambayo hua inatumika, au
wakati mwingine peya ya funguo,  funguo moja inaweza kwa urahisi kabisa kufanya mahesabu kwa kutumia fuguo nyingine.

**Symmetric keys** zinatumika ku encrypt mawasiliano yote wakati wa kipindi chote cha  **SSH**. 

**Mteja** "client" na **mtoa huduma** "server" wote hutoa funguo za siri kupitia njia waliyo kubaliana, 
na matokeo ya funguo hayafunuliwi kwa muhusika watatu. 
Mchakato wakutengeneza symmetric key unabebwa na algorithm zakubadilisha funguo.

Kinacho ifanya hii algorithm yakipekee kwenye ulinzi  nikwamba funguo hazi safiri Kati ya **mtumiaji** na mtoa **huduma**.

Badala yake, computer mbili zina share vipande vya data ambavyo vipo hatharani 
nakuendesha mahesabu ya funguo ya siri kwa kujitegemea.

Hata kama machine nyingine ita nasa data ambazo zimekua
shared na umma haitaweza kufanya mahesabu ya funguo kwa sababu algorithm zakubadilisha funguo hazijulikani

Symmetrical encryption ina aina tofauti zakuweka siri kwenye ujumbe "**ciphers**" ikihusisha, 
**AES (Advanced Encryption Standard), CAST128, Blowfish nk**. 

Kabla ya kuanzisha uhusiano  salama, **mteja** "client" na **mwenyeji**  "host" wanaamua aina gani ya siri iwekwe kwenye **ujumbe** "cipher" , kwa kuchapisha orotha ya **cyphers** zinazo weza kutumika zikiwa kwenye mtiriko, cypher inayo kubalika zaidi kutokea kwa mteja ambayo ipo kwenye orotha ya mwenyeji  itatumika kama pande mbili za cypher.

Mfano, kama machine mbili za Ubuntu 14.04 LTS zinawasiliana kwa kutumia  **SSH**, zitatumia  **aes128-ctr** cipher  kama chaguo la msingi .

Kwenye Ubuntu  12.10, man ssh_config inaonyesha chaguo la msingi  "default" la orotha ya encryption nikama hivi:
```bash
aes128-ctr,aes192-ctr,aes256-ctr,
arcfour256,arcfour128, aes128-cbc,
3des-cbc,blowfish-cbc,cast128-cbc,
aes192-cbc, aes256-cbc,arcfour
```

## Asymmetric Encryption

Tofauti na **Symmetrical encryption**, **Asymmetrical encryption** inatumia funguo mbili zilizo tofauti kwajili ya  **encryption** na **decryption**. 

Hizi **funguo** mbili zinajulikana kama **public key** na **private key**.

Pamoja, zinatengeneza peya ya **public-private key**.

![Crepe](https://i.ibb.co/NKcwqmW/Pics-Art-08-10-10-15-23.jpg)

**Public key** Kama jina linavyo sema hii **nifunguo** ambayo **inasambazwa** nakuwa **shared** kwa pande zote kwa uwazi. 

Wakati ikiwa inahusishwa na **private key** inapokuja kwenye swala la ufanyajikazi,
**private key** haiwezi kufanyiwa **mahesabu** kutokea kwenye **public key**. 

Mausiano ya funguo hizi mbili ni yahali ya juu :

 * Machine ambayo ujumbe wake  umekuwa **ecrypted** na **public key** basi  ujumbe huo utakua **decrypted** na **private key**
ya machine hiyo hiyo.

 * Huu uhusiano wa upande mmoja unamanisha **public key**
haiwezi ku decrypt ujumbe wake yenyewe na wala haiwezi ku decrypt chochote 
kile kilicho kuwa ecrypted na **private key**

 * Lazima **fuguo binafsi** "private key" ibaki kuwa private ili uhusiano uwe na usalama
Hakuna hata muhusika watatu anaye paswa kufahamu hii.

 * Uzito wa mawasiliano yote untegemea kwamba **ufunguo binafsi** "private key"
hau fahamiki kwani ndiyo **funguo pekee** ambayo
Inaweza **ku decrypt** ujumbe ambao ulikuwa **encrypted** na **funguo yake ya uma** "public key"
kwa hiyo washirika wote wenye uwezo wa ku **decrypt** ujumbe ambao ume 
sainiwa na **funguo ya umma** lazima wawe na funguo binafsi inayo endana

 * Tofauti najinsi ambavyo inaweza kuchukuliwa na wengi **Asymmetrical encryption** haitumiki kufanya encryption 
kwenye kipindi kizima cha **ssh** badalayake huwa inatumika wakati **wakubadilishana algorithm za funguo**. 
Kabla yakuanzisha mauhusiano yaliyo salama, 
pande zote zitatengeneza kwa mdaa peya ya **public-private key**, 
naku **share** **funguo zao za faragha** "private keys" naku zalisha **funguo ya siri** "secret key** ambayo wata ishare pamoja.

 * Pale ambapo usalama wa mawasiliano ya **symmetric** umekisha undwa, 
**server** inatumia **funguo za umma** "public key" za **mteja** kutengeneza 
**Changamoto** nakuipeleka kwa **mteja** kwajili ya **uthibitisho**
Kama mteja akifanikiwa ku  decrypt ujumbe, 
tafsiri yake nikwamba anayo **funguo binafsi** "private key"
inayo takiwa kwajili ya uhusiano, Kipindi cha **SSH** kita anza.

## Hashing

"One-way hashing" **Njia moja ya  hashing** ni aina mojawapo ya **cryptography** ambayo inatumika kwenye mauhusiano salama na Shell.

**Njia moja ya hash** inatofautiana na aina hizo mbili tulizo zizungumzia hapo awali za **encryption**
katika haliyakwamba hizi hazihitaji kuwa **decrypted**. 

Zinatengeneza **thami** yakipekee ya urefu ambao hautabadilika kwenye kila **pembejeo** 
nahivyo kuto weka wazi kitu.
Hii inafanya katika hali ya kawaida iwenivigumu 
kugeuza nyuma.
![Crepe](https://i.ibb.co/4FkPwnf/Pics-Art-08-11-10-17-03.jpg)
Ni rahisi kutengeneza **cryptographic hash** kutokea kwenye **pembejeo** iliyo pewa, 
lakini haiwezekani kutengeneza **pembejeo** kutokea kwenye hash. 

Hii inamanisha kama **mteja** "client" anashikilia **pembejeo** zilizo sahihi, 
anaweza kutengeneza **crypto-graphic hash** na kuzilinganisha thamani
ili kuangalia kama zina **pembejeo** zilizo sahihi.

**SSH** inatumia **hashes** kuthibitisha uhalisi wa **ujumbe**. 
Hii inafanyika kwa kutumia **HMACs**, au **Hash-code** kwenye **ujumbe** wa uthibitisho 
Hii inahakikisha command zilizo pokelewa hazija chezewa.

Wakati **symmetrical encryption algorithm** inapo chaguliwa, algorithm ya ujumbe unaofaa kwajili ya uthibitisho nayo huchaguliwa.

Hii inafanya kazi kama jinsi ambavyo **cipher** ina chaguliwa, kama nilivyo elezea kwenye kipande cha **symmetric encryption**.

Kila **ujumbe** uliyo pitishwa nilazima uwe na **MAC**, ambayo ni **mahesabu** yaliyo pigwa kwa kutumia **funguo za symmetric**, 
**mlolongo wa namba za packets**, na **yaliyomo kwenye ujumbe**.
Data za Packet ambazo zimekuwa **symmetrically encrypted** zitatumwa nnje na kumaliza sehemu ya mawasiliano ya packet.

# Jinsi Ambanyo Ssh Infanya Kazi Na Hizi Mbinu za Encryption
Nikwakutumia model ya **mteja** na **mtoa huduma** marufu kama "**client-server model**" 
kuruhusu **uthibitisho** 'authentication" wa mifumo miwili ambayo iko mbali "remote" nakufanya  **encryption** ya data ambazo zinapita baina yaoo.

Katika hali yakawaida nnje ya boksi **ssh** inafanya kazi kwenye bandari ya TCP 22 (ingawaji unaweza kubadilisha). 

Mwenyeji (**server**) inasikiliza kwenye bandari 22 (au bandari yoyote ile ambayo SSH itakuwa imepwe) kwajili ya uhusiano.

Huandaa **uhusiano** uliyo **salama** kwa **kumthibitisha** **mteja** na kufungua mazingira ya **shell** Kama **uthibitishaji uki fanikiwa**.

![Crepe](https://i.ibb.co/0QvHz6z/Pics-Art-08-11-11-45-02.jpg)
Mteja lazima aanzishe uhusiano wa SSH kwa kuanzisha TCP handshake "kushikana mkono na  server", 

kuhakikisha **usalama** wa mauhusiano ya **symmetric**,
**kuthibitisha** kama **kitambulisho** kinacho onyeshwa na **server** kiposawa na rekodi za awali (ambazo kwa kawaida rekodi hizi hua ni faili la hifathi
ya funguo za  RSA), na kuwakilisha **hati** zinazohitajika za **mtumiaji** **kuthibitisha mahusiano**.

Kuna hatua mbili kwenye kuanzisha mauhusiano:

 * Kwanza nilazima mifumo yote ikubaliane na Kiwango cha  encryption  ili kulinda mawasiliano ya badaye, 
 * na pili, mtumiaji lazima ajithibitishe mwenyewe. Kama hati zina mechi, basi mtumiaji atapewa  kipindi..

## Usimbaji fiche kwenye kipindi cha mazungumzo

Mteja ana pojaribu kuunganishwa kwenye server kwa kupitia TCP,  server itawakilisha itifaki za encryption na matoleo husika ambayo yame wezeshwa.

Kama mteja ana peya za itifaki pamoja na matoleo ambayo yana machi, makubaliano yatafikiwa na uhusiano utaanzishwa  na itifaki ya kukubali.

Server pia inatumia funguo za umma za  **asymmetric** ambazo mteja anaweza kutumia
kuthibitisha kukubalika kwa uthibitisho wa mwenyeji.

Mara baada ya hii kuanzishwa, pande zote mbili zita tumia kitu kinacho julikana kama **Diffie-Hellman Key Exchange Algorithm** 
kutengeneza funguo za symmetrical. 

Algorithm hii inaruhusu **mteja** na **server** kufikia kwenye funguo ya encryption ambayo ipo shared 
ambayo itatumika ku **encrypt** kipindi chote cha mawasiliano.

**Na hivi ndiyo algorithm inavyo fanya kazi kwa juu juu**

Wote **mteja** na **server** wata kubaliana kwenye **namba moja kubwa**, bila sababu za msingi.

**Thamani ya namba** hii inajulikana kama **seed value**. 
Kifuatacho, pande zote mbili zitakubaliana juu ya utaratibu wa **encryption** utakao tumika 
kutengeneza **set nyingine ya thamani** kwa kubadilisha **thamani ya mbegu** kwenye **algorithm maalumu**

Utaratibu huu unajulikana kama **encryption generators**,
Unafanya shuhuli kubwa kwenye **mbegu** "seed" 
Mfano wa hiyo  generator ni **AES (Advanced Encryption Standard)**.

Pande zone kilamoja ikiwa ina jitegemea itazalisha **namba kuu** nyingine. 
Hii inatumika Kama **funguo binafsi ya siri** kwa ajili ya mwingiliano. 

Hizi **funguo binafsi** mpya zilizo zalishwa, **namba** wanayo share pamoja na **encryption algorithm**
(**m.f. AES**), inatumika kufanya **mahesabu** ya **funguo ya umma** ambayo **imetawanywa** kwenye computer zingine.

Kila pande itatumia **funguo yake binafsi**.
Hiyo **machine** nyingine **funguo** yake ya  **umma** ambayo iko **shared**,
na kile kiasi kikubwa cha **namba** asili zitatengeneza **funguo** yamwisho ya **kushare**. 
**Funguo** Hii kila **komputer** itajitegemea kwenye kuifanyia **mahesabu** 
lakini zitatengeneza **funguo** za **encryption** zilizo sawa kwa pande zote

Kwa vile sasa pande zote zina funguo ambayo wana share,
wanaweza ku **symmetrically encrypt** kipindi chote cha SSH. 
**Funguo** hiyo hiyo inaweza kutumika ku **decrypt ujumbe** (soma: kipande cha symmetrical encryption).

Sasa kipindi salama cha encryption ya symmetrically ni imara, 
watumiaji lazima wa thibitishwe.

## Uthibitishaji wa watumiaji 

Hatuwa ya mwisho kabla mtumiaji hajaweza kuingia kwenye server 
niku jithibitisha kwa hati zake. 

**Kwenye hili**, watumiaji wengi wa SSH wanatumia **nywila** "password".

**Mtumiaji** ata ombwa kuweka jina la **mtumiaji**, ikifutiwa na **nywila** "password". 
Hizi **hati** kwa usalama zitapita kwenye handaki lilo fichwa **symmetrically** 
kwa hiyo hakuna nafasi yakuweza kukamatwa na muhusika wa tatu.

Ingawaji nywila "passwords" zipo **encrypted**,
bado haishauriwi kutumia "passwords" kwa ajili ya mawasiliano salama.
Na hii ni kwa sababu **bots** zinaweza kwa urahisi ku tumia **nguvu zakinyama**
au ku **default passwords** nakuweza kuifikia **account** yako. 

**Mbadala**, njia inayoshauriwa nikutumia set ya funguo za SSH.

kwenye makala haya tutatumia Nywila ili kuweze kuthibitisha nakuanzisha kipindi salama cha shell
maarufu kama ssh secure Shell

# Zingatia

Nimuhimu sana ukafahamu kwamba kutokana na mazingira
ya kimtandao hatuna budi ila kutumia **Ngrok**.

**Ngrok** inafichua **server mwenyeji** nyuma ya **NATs** na **kuta za moto** 
kwenye **mtandao wa internet** ya umma kwa kupitia **handaki salaama**.

Sita izungumzia ngrok kiundani kwani hasa nikiasi 
chakuipakua na kuiazisha program kwenye machine na uipatie bandari ya huduma ya mtandao, 
kwenye kisa chetu itakua ni ssh.

# Mahitaji kabla ya kuendelea 

Siyo lazima lakini kama ni **mgeni** na **python** kabla huja endelea
Ungeanzia hapa Kwanza ili uweze kuelewa kwa urahisi **code** ambazo tutaziandika

Utahitaji kuwa na account ya ngrok, [kama huna account ya ngrok sajili hapa bure](https://ngrok.com/)
[Ukiwa ndani ya dashboard yako](https://dashboard.ngrok.com/get-started/your-authtoken) nakili ishara yako utaihitaji

Hakikisha kwenye **operating system** yako unayo application 
ya **ssh upande wa mteja** kwenye **Android** unaweza kutumia
[Connectbot](https://play.google.com/store/apps/details?id=org.connectbot&hl=en_GB&gl=US)

Vile vile hakikisha una **faili manager** ambayo **SSHFS** imewezeshwa

**Mfano**

Ili kuweza **kutawala** kwa wepesi **mafaili** yaliyo **hifathiwa** kwenye **server** yetu,
na **yale yaliyo hifathiwa google drive** pamoja na **mafaili** ambayo yapo kwenye **chombo changu cha Android** 
nita tumia [file manager plus](https://play.google.com/store/apps/details?id=com.alphainventor.filemanager),

kama upotayari kuanza mchakato 
Mzima kwa kutumia python endelea kwa kufungua daftari jipya la google colab. 
Alafu uta copy na ku paste code zifuatazo:

```python
# kupata mafaili yaliyo hifathiwa google drive

from google.colab import drive
drive.mount('/content/drive', force_remount=True)
```
![Crepe](https://i.ibb.co/FJRq8sZ/Pics-Art-08-14-10-46-58.jpg)

![Crepe](https://i.ibb.co/Syfws8j/Pics-Art-08-15-08-47-40.jpg)
![Crepe](https://i.ibb.co/ZSxgm86/Pics-Art-08-15-09-19-22.jpg)
![Crepe](https://i.ibb.co/TLvScQ4/Pics-Art-08-15-09-50-56.jpg)
![Crepe](https://i.ibb.co/4gPdcjq/Pics-Art-08-15-10-22-21.jpg)

```python
# nywila ya mtumiaji root kwenye variable
password = "WeKaPas1ngMu"

# pakuwa ngrok

!wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip -O ngrok-stable-linux-amd64.zip
!unzip -u ngrok-stable-linux-amd64.zip

# iweke ngrok kwenye root 
# alafu badili ruhusa kwa kuifanya 
# iwe inaweza kutekelezwa

!cp /content/ngrok /ngrok
!chmod +x /ngrok

# weka ishara yako tokea ngrok

!./ngrok authtoken weKaTokenyako2

# andika configuration za ngrok 
# kwa kuonyesha handaki

 %%writefile /content/ssh.yml
tunnels:
  ssh:
    proto: tcp
    addr: 22

# configuration za ngrok kwajili ya handaki

 %%writefile /content/run_ngrok.sh
#!/bin/sh
set -x
/ngrok start --config ~/.ngrok2/ngrok.yml --config /content/ssh.yml ssh

# sasisha operating system

!apt-get update

# install kifurushi cha server ya ssh

!apt-get install ssh

# weka configuration za shh 
# pamoja na nywila ya root 

! echo root:$password | chpasswd
! mkdir -p /var/run/sshd
! echo "PermitRootLogin yes" >> /etc/ssh/sshd_config
! echo "PasswordAuthentication yes" >> /etc/ssh/sshd_config
! echo "LD_LIBRARY_PATH=/usr/lib64-nvidia" >> /root/.bashrc
! echo "export LD_LIBRARY_PATH" >> /root/.bashrc

# azisha pepo la sshd

!service ssh restart

# chapisha nywila ya mtumiaji root 

 print(f'Root password: {password}')

# tengeneza handaki

get_ipython().system_raw('bash /content/run_ngrok.sh ssh &')

# onyesha uhusiano wa ssh

import requests
import urllib.parse

def get_ngrok_info():
  return requests.get('http://localhost:4040/api/tunnels').json()

def get_ngrok_tunnels():
  for tunnel in get_ngrok_info()['tunnels']:
    name = tunnel['name']
    yield name, tunnel

def get_ngrok_tunnel(name):
  for name1, tunnel in get_ngrok_tunnels():
    if name == name1:
      return tunnel

def get_ngrok_url(name, local=False):
  if local:
    return get_ngrok_tunnel(name)['config']['addr']
  else:
    return get_ngrok_tunnel(name)['public_url']

public_url, public_port = urllib.parse.urlparse(get_ngrok_url('ssh')).netloc.split(':')
print('To SSH into this colab instance, run the following command on your local machine:')
print('ssh root@{} -p {}'.format(public_url, public_port))
```

![Crepe](https://i.ibb.co/CnFdcW0/Pics-Art-08-15-10-57-42.jpg)

---
layout    : post
title     : GitHub - Jinsi yaku ssh kwenye hadhina za git
date      : 2022-05-19 07:35:05
tags      : ["git", "ssh"]
--- 

### Jinsi ya kuunganishwa GitHub kwa kutumia SSH
Unaweza kuunganishwa **GitHub** kwa kutumia itifaki ya **shell** yenye usalama marufu kama **(SSH)** `"Secure Shell Protocol"`, 
hii hutoa channel yenye usalama kwenye mtandao usiokua salama.

<!--more-->
**Zingatia:** *kuanzaia* `March 15, 2022`. [GitHub](https://github.com) imeboresha ulinzi kwa kuacha kuendeleza ulivyokuwa mfumo usiyo bora waulinzi uliokua unatumia
jina la mtumiaji pamoja na password ili kumthibitisha mtumiaji. Funguo za **DSA (ssh-dss)** hazitumiki tena. 
Huwezi kuongeza funguo mpya za **DSA** kwenye **account** yako ya [GitHub.com](https://github.com)
Funguo za`RSA`zilizo tengenenzwa kuanzia `November 2, 2021 na kuendelea` nilazima zitumie **algorithm** zenye saini ya `SHA-2` 
Ili kuweza kuthibitishwa Github.com kwenye makala haya nita kuonyesha jinsi ya kutumia `algorithm` zenye saini ya `SHA-2`

 





**Kuhusu SSH**

kwa kisa hiki tutakumbushana kidogo
kuhusu **itifaki** hii ya **SSH**, unaweza kuanganishwa na kuthibitishwa kwenye **huduma na servers** 
ambazo ziko mbali. 
Kwa kutumia funguo za **SSH**, unaweza kuunganishwa **GitHub** bila kuweka jina lako la mtumiaji au token yako binafsi 
inayo kuwezesha kufikia huduma mbalimbali kila unapotembelea **GitHub**.

Ukiwa unaweka **SSH**, itakubidi utengeneze funguo mpya za **SSH** na uziongeze kwenye `ssh-agent`. 

**Nilazima** uziongeze funguo za **SSH**
kwenye `account` yako ya GitHub kabla ya kuzitumia fuguo kwa `uthibitisho`.

### Angali kama tayari unafunguo za SSH

Nijambo la busara kabla ya kutegeneza fungu za **SSH**, tukaanza na kuangalia kama tunafunguo zozote zile 
za **SSH** kwenye mfumo wetu.

Nilazima uwe na kifurushi cha **ssh-server** ilikuweza kuendelea mbele kuanzia hapa, kama uko kwenye mfumo
unaotumia **Debian** utafanya hivi kwenye terminal yako ili kuweka kifurushi cha **ssh-server** kama huna.
{% highlight "shell" %}
apt install openssh-server 

{% endhighlight %}

Katika hali ya kawaida, ifuatayo ni orotha ya majina ya funguo za **umma** zilizo wezeshwa **GitHub**. 

{% highlight "shell" %}
id_rsa.pub
id_ecdsa.pub
id_ed25519.pub
{% endhighlight %}

Ili kuangalia kama unafunguo zozote zile za **umma "public"** za **SSH** fanya hivi kuziorothesha
{% highlight "shell" %}
ls -al ~/.ssh 
{% endhighlight %}
 
Unaweza kutengeneza funguo mpya za **SSH** au uka sasisha funguo uliyonayo.

Kama huna peya ya funguo zinazokubalika kama za **umma** au **binafsi**, au hutaki kutumia funguo zozote zile katika orotha 
ya funguo ulizonazo, tengeneza funguo mpya za **SSH**.

Kama unaona una peya ya funguo ya **umma** na **binafsi** kweyenye orotha (mfn, `id_rsa.pub na id_rsa`)
ombazo ugependa kutumia ili kuunganishwa GitHub, unaweza ukaiongezea funguo kwenye `ssh-agent`.

Tengeneza funguo mpya za **SSH** nauziongeze kwenye `ssh-agent`

Baada yakuangalia kama unafungo za **SSH**, unaweza ukatengeneza funguo mpya za **SSH** ili kutumia kwajili ya `uthibitisho`, 
alafu uka zioengeza kwenye `ssh-agent`.

### Tengeneza funguo mpya za **SSH** 

{% highlight "shell" %}
ssh-keygen -t ed25519 -C "email.yako@mail.com"
{% endhighlight %}

*Kama unatumia mfumo wa zamani ambo haukubali algorithm za `Ed25519`, unaweza kutumia:*

{% highlight "shell" %}
$ ssh-keygen -t rsa -b 4096 -C "email.yako@mail.com"
{% endhighlight %}
*natumia algorithm za `Ed25519`*

{% highlight "shell" %}
Generating public/private ed25519 key pair.
Enter file in which to save the key (/root/.ssh/id_ed25519): # Bofya enter
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase): # weka neno la siri
Enter same passphrase again: # rudia neno la siri
Your identification has been saved in /root/.ssh/id_ed25519
Your public key has been saved in /root/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:5FzPqheKEVVVVVVVVVVVcfsddsdsdk email.yako@mail.com
The key's randomart image is:
+--[ED25519 256]--+
|       .     ..  |
|      . .   ..   |
|       o... .... |
|      o+o..o+oB .|
|     o @S. +oE.+.|
|    o X O ..B oo |
|     + B o.o +.  |
|      + ... .    |
|       ...       |
+----[SHA256]-----+
{% endhighlight %}



Umekwisha tengeneza funguo zako za **SSH** na email imetumika kama label (alama)
Nisisitize kabla yakuongeza funguo za **SSH** kwenye **ssh-agent** kusimamia funguo zako
angalia kama unafunguo za **SSH** kama huna tengeneza.

### Ongeza funguo zako za SSH kwenye ssh-agent

Kama tunavyo fahamu `ssh-agent` inatumika kushikilia funguo binafsi za **server** ya mbali, 
ambayo inaweza kutumika kufanya **uthibitisho** wa mashine yako.

Azisha `ssh-agent` kwa nyuma ili tuweze kuitumi **terminal** hii kwa mambo mengine.

{% highlight "shell" %}
eval "$(ssh-agent -s)"
Agent pid 676
{% endhighlight %}
Kutegemea na mazingira, unaweza kuhitaji kutumia command tofauti. 
Mfn, umaweza ukawa unahitaji kuifikia kama **root** kwa kuweka `sudo -s -H` kabla yakuanzisha `ssh-agent`,
au unaweza kutumia `exec ssh-agent bash` au `exec ssh-agent zsh` kuanzisha `ssh-agent`.


**Kuongeza funguo zako binafsi za SSH kwenye ssh-agent fanya hivi.** 

{% highlight "shell" %}
ssh-add ~/.ssh/id_ed25519
Enter passphrase for /root/.ssh/id_ed25519:
Identity added: /root/.ssh/id_ed25519 (email.yako@mail.com)
{% endhighlight %}

Kama umetengeneza **funguo** zako najina jingine, 
au unaongeza funguo iliyokwisha kuwepo ambayo inajina tofauti, 
badilisha `id_ed25519` kwenye command na jina la **funguo** yako binafsi.


## Ongeza funguo mpya ya SSH kwenye account yako ya GitHub

Ili kui configure account yako ya GitHub.com kutumia **funguo** yako mpya (au iliyoko) ya **SSH**, 
itakubidi uiongeze hiyo funguo kwenye **account** yako.


**Copy** funguo zako za **umma** za **SSH**.

Kama faili la fungo zako za **umma** za **SSH** lina jina tofauti na code nilizotumia hapa kama mfano, 
badilisha jina kuendana namazigira yako. 
Wakati una **copy** fuguo, hakikisha huongezi **mstari mpya au nafasi**.

{% highlight "shell" %}
cat ~/.ssh/id_ed25519.pub
ssh-ed25519 AAAAC3NzaXVVVscxxxvvvvvvdddsss email.yako@mail.com
{% endhighlight %}

Nenda **Github** 
Kwenye Upade wajuu kona ya kulia, bofya kwenye picha ya **profile** yako, kisha bofya **Settings**.

![github_settings_za_mumiaji](https://i.ibb.co/zxwcHtF/Git-Hub-user-settings.png)


Kwenye **sidebar** section ya **"Access"**, bofya SSH na GPG keys.

![github ssh gpg keys](https://i.ibb.co/W3j7s2s/SSH-and-GPG-keys.png)

Bofya**New SSH key**.

![github ssh](https://i.ibb.co/L5mTw7r/github-SSH-and-GPG-keys.png)

kwenye field ya "Title", weka label au alama inayo eleweka kawaajili ya fuguo zako mpya. 
Paste fuguo zako kwene field ya funguo usisahu kubofya Add SSH key.

![github_add-ssh_keys](https://i.ibb.co/tKLKDzX/Add-new-SSH-keys.png)


Utahitaji kuthibitisha password yako ya GitHub.

## Jaribisha connection yako ya SSH 

Baada ya kuweka **funguo** zako za **SSH** kwenye account yako ya GitHub, ni mdaa wa majaribio.
Wakati tunafanya majaribio ya connection, itatulazimu **kukithibitisha** hiki kitendo kwakutumia 
**neno siri "password"**, ombayo ni **neno siri la SSH** tulilo tengeneza hapo awali.

{% highlight "shell" %}
ssh -T git@github.com
{% endhighlight %}

unaweza ukaona kitu kama hiki:

{% highlight "shell" %}

Enter passphrase for key '/root/.ssh/id_ed25519':
> RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
> Are you sure you want to continue connecting (yes/no)? # sema yes


Hi devduara0! You've successfully authenticated, but GitHub does not provide shell access.
{% endhighlight %}

## ku sukuma project yako Github bada ya ku SSH

kama unapush project kutokea kwenye mashine yako kwenda github utafanya hivi

{% highlight "shell" %}

git remote set-url origin git@github.com:devduara0/friendly-adventure.git
{% endhighlight %}

*Badilisha jina la mtumiaji na jina la hadhina ziendane na mazingira yako*

**sukuma code Github**

{% highlight "shell" %}
git push --set-upstream origin master
{% endhighlight %}


## JINSI YAKU TENGENEZA HADHINA PACHA "CLONE" KWA KUTUMIA SSH
Kutengeneza **hadhina pacha "repository cloning** kwa kutumia **SSH** ni rahisi sana,
hususani kama tayari unafahamu kutengeneza **pacha** kwa kutumia itifaki ya **HTTPS**.
*Lakini kama hufahamu usiwaze...*

 
* 🕷 **Zingatio** *hakikisha unaweza* **kuunganishwa** na kufanyiwa **uthibitisho Github** kwa kutumia itifaki ya **SSH**
 kama nilivyo eleza hapo awali.

**Kama** kuna hazina ambayo iko **Github** tayari alafu unataka upate **pacha** 
wa hiyo hazina ambapo **pacha** huyo atakaa kwenye machine yako lakini badala yakutumia 
**itifaki** ya `HTTPS` au `GitHub CLI` unataka kutumia `SSH`, 
fanya hivi:
 


Nenda kwenye **hazina** yoyote ile ya **Github** ambayo unataka uitolee **pacha** ambaye atakaa kwenye machine yako
**Bofya** kitufe kilicho andikwa **code** alafu **utubofya** kitufe kilicho andikwa **SSH**
![tengeneza-pacha_wa_hazina](https://i.ibb.co/JqRgjzD/Github-clone1.png)



Mara bada ya kubofya kitufe kilicho andikwa **SSH** kama account yako haijawezeshwa na itifaki ya **SSH**  kama nilivyo elezea hapo awali utaona ujumbe kama huu

![img_github](https://i.ibb.co/T4sDwSD/Github-clone2.png) 

Nahapo hutaweza kutumia **SSH** mpaka **funguo** za **SSH** ziwe zimewezeshwa kwenye **account** yako ya **Github** kama nilivyo
kwisha kueleza.

Vinginevyo utaona kitu kama hiki, nahapo utakua salama kuendelea mbele kwa kukopi hiyo adresi ya hadhina

![img_github](https://i.ibb.co/521ww8k/Github-clone3.png)

**Utarudi** kwenye `terminal` yako naku **paste** hiyo adresi kama hivi,

{% highlight "shell" %}
git clone git@github.com:kazz54/artist-db.git
Cloning into 'artist-db'...
Enter passphrase for key '/root/.ssh/id_ed25519': # weka neno siri  
{% endhighlight %}

**Hakikisha** una anza na command `git clone`
ndiyo namna yakuifahamisha **Github** kwamba unatengeneza **hadhina pacha** *jina la mtumiaji*
pamoja na *jina la hadhina* vinategemea hiyo `hadhina` unayo itolea `pacha`, badili kutokana na mazingira yako
bilakusahau kuweka `neno siri`.


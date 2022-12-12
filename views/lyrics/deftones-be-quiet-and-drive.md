---
layout    : post
title     : Deftones - Be Quiet and Drive
date      : 2022-12-18 07:35:05
tags      : ["metal", "90s"]
---
```bash
apt install bind9 bind9utils bind9-doc dnsutils<br />
<br />
```
root@node1:~# nano /etc/bind/named.conf<br />
include "/etc/bind/named.conf.options";<br />
include "/etc/bind/named.conf.local";<br />
# comment out<br />
# include "/etc/bind/named.conf.default-zones";<br />
# add<br />
include "/etc/bind/named.conf.internal-zones";<br />
<br />
root@node1:~# nano /etc/bind/named.conf.internal-zones<br />
<br />
# create new<br />
# define for internal section<br />
view "internal" {<br />
&nbsp; &nbsp; &nbsp; &nbsp; match-clients {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; localhost;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 192.168.100.0/24;<br />
&nbsp; &nbsp; &nbsp; &nbsp; };<br />
&nbsp; &nbsp; &nbsp; &nbsp; # set zone for internal<br />
&nbsp; &nbsp; &nbsp; &nbsp; zone "internal.labnet" {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; type master;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; file "/etc/bind/node1.internal.labnet";<br />

```haskell
-- Layout Hook
commonLayout = renamed [Replace "common"]
    $ avoidStruts 
    $ gaps [(U,5), (D,5)] 
    $ spacing 10
    $ Tall 1 (5/100) (1/3)
```

Just far away and I don't care where\
Just far away I don't care

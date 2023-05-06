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

{% block content %}{% endblock %}

```

#!/bin/bash

ssh_profile="root@agencyboz"
user="agenc4028"
domain="agenciaboz.com.br"
subdomain="bozpay.agenciaboz.com.br"

path="/home/${domain}/${subdomain}"

yarn build
echo 'Uploading build to server'
scp -r dist/* ${ssh_profile}:${path}
ssh ${ssh_profile} "chown -R ${user}:${user} ${path}/*"

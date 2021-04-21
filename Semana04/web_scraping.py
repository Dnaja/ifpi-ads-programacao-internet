# -*- coding: utf-8 -*- #
import requests
import requests_cache
from bs4 import BeautifulSoup

requests_cache.install_cache()

link_procurado = input("Digite o link: ")
response = requests.get(link_procurado)

if response.status_code == 200:
    site = BeautifulSoup(response.text, 'html.parser')

    lista_links = site.find_all('a')

    for i in range(10):
        print('{}: {}'.format(i+1, lista_links[i]))

    opcao_link = int(input('Digite o número do link que deseja acessar: '))
    palavra_chave = input('Digite a palavra chave: ')
    requests_cache.install_cache()
    response = requests.get(lista_links[opcao_link-1]['href'])

    if response.status_code == 200:
        site = BeautifulSoup(response.text, 'html.parser')

        lista_palavra_chave = site.find_all('p')
        for i in range(len(lista_palavra_chave)):
            if palavra_chave in lista_palavra_chave:
                print(lista_palavra_chave[i])
            else:
                print('z')

    else:
        print('Erro ao realizar requisição!')


else:
    print('Erro ao realizar requisição!')

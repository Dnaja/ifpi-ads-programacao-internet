# -*- coding: utf-8 -*- #
import requests
import requests_cache
from bs4 import BeautifulSoup

requests_cache.install_cache()

while True:
    #link_procurado = 'https://www.vivaolinux.com.br/'
    link_procurado = input("Digite o link: ")
    response = requests.get(link_procurado)

    if response.status_code == 200:
        site = BeautifulSoup(response.content, 'html.parser')
        lista_links = site.find_all('a', href = True)

        cont = 1
        for link in lista_links:
            if link['href'] != '#':
                if link['href'][0] == '/':
                    link['href'] = link_procurado + link['href']
                print('{}: {}'.format(cont, link.text))
                cont += 1
                if cont == 10:
                    break


        opcao_link = int(input('Digite o número do link que deseja acessar: '))
        palavra_chave = input('Digite a palavra chave: ')

        response = requests.get(lista_links[opcao_link-1]['href'])

        if response.status_code == 200:
            site = BeautifulSoup(response.content, 'html.parser')
            lista_palavra_chave = site.find_all('p')

            for i in range(len(lista_palavra_chave)):
                if palavra_chave in str(lista_palavra_chave[i]):
                    print(lista_palavra_chave[i].text)

            opcao_voltar = int(input('Deseja repetir o procedimento (1: sim; 2: não): '))
            if opcao_voltar == 2:
                break

        else:
            print('Erro ao realizar requisição!')


else:
    print('Erro ao realizar requisição!')

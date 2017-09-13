# -*- coding: utf-8 -*-
"""
Created on Mon Sep 11 11:43:16 2017

@author: jseigh
"""

import requests
from bs4 import BeautifulSoup
import sys

# goOn = 'Y'
# while goOn.lower() == 'y':
game = sys.argv[1]
# system = ''
url_search = ''
# game = input("Search for a game: ")
# system = input("What system? ")
url = 'http://www.gamestop.com/trade/Browse/N-0Z1z13laj?Ntt='
url_search = url+game

page = requests.get(url_search)

soup = BeautifulSoup(page.text, 'html.parser')

#print(soup.prettify)

for row in soup.find_all('div',attrs={"class" : "basicBox"}):
    for r in row.find_all('span',attrs={"class" : "regularPrice"}):
        gamestop = r.text

print(gamestop)
    # another = input("Search for another game? Y/N: ")
    # goOn = another


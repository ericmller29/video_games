# -*- coding: utf-8 -*-
"""
Created on Mon Sep 11 11:43:16 2017

@author: jseigh
"""

import dryscrape
from bs4 import BeautifulSoup
import sys

# goOn = 'Y'
# while goOn.lower() == 'y':
game = sys.argv[1]
# game = 'NHL 17 - PS4'
# system = ''
url_search = ''
# game = input("Search for a game: ")
# system = input("What system? ")
url = 'https://tradein.bestbuy.com/client/#/catalog/catalog/search-results?q='
url_search = url+game

# page = requests.get(url_search)
session = dryscrape.Session()
session.visit(url_search)
response = session.body()

soup = BeautifulSoup(response, 'html.parser')

# print(soup.prettify)

for row in soup.find_all('h1', attrs={"class" : "value-label ng-scope ng-binding"}):
    for r in row.find_all('span'):
        bestbuy = r.text

print(bestbuy)
    # another = input("Search for another game? Y/N: ")
    # goOn = another


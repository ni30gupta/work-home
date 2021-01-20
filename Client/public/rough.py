import requests

API_KEY = '4t8wDR2gcAMofvmIUcSR8YwJ87r1'


path = 'https://cricapi.com/api/matches?apikey='+API_KEY

data = requests.get(path)

print(data.matches[0])
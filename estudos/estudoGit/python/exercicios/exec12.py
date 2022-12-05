preço = float(input('Qual o valor do produto? R$'))
des = preço - (preço * 5 / 100)# esse entre parentese é o valor do desconto
print('Esse produto de R${:.2f} estar com 5% de desconto e sai por R${:.2f}'.format(preço, des))
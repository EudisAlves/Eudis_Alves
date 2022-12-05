dia = 60
km = 0.15
alu = int(input('Quantos dias ficou com o carro?  '))
rodou = float(input('Quantos km vc rodou? Km'))
d = alu * dia
k = rodou * km
print('Vc vai pagar R${} pelos {} dias e R${:.2f} pelos km{} rodados!'.format(d, alu, k, rodou))

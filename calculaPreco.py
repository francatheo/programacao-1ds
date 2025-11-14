def calcular_preco_final(nome, preco, desconto=0):
    # Exibe o preço inicial
    print(f"Preço inicial de {nome}: R$ {preco:.2f}")
    
    # Calcula o preço final com desconto
    preco_final = preco - (preco * desconto / 100)
    print(f"Preço final de {nome}: R$ {preco_final:.2f}")

# Exemplo de uso
calcular_preco_final("Fone de ouvido", 200, 25)

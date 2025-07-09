#!/bin/bash

# Script para criar repositório no GitHub e fazer deploy do portfólio

echo "🚀 Criando repositório no GitHub..."

# Criar repositório via API do GitHub
curl -u zevictor-design \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d '{
    "name": "portfolio",
    "description": "Meu portfólio pessoal",
    "private": false,
    "auto_init": false
  }'

echo ""
echo "📁 Configurando repositório local..."

# Configurar remote e fazer push
git remote set-url origin https://github.com/zevictor-design/portfolio.git
git add .
git commit -m "Initial commit - Portfolio template"
git push -u origin main

echo ""
echo "✅ Repositório criado e arquivos enviados!"
echo "🌐 URL do repositório: https://github.com/zevictor-design/portfolio"
echo ""
echo "📝 Para ativar GitHub Pages:"
echo "1. Vá para https://github.com/zevictor-design/portfolio/settings/pages"
echo "2. Em 'Source', selecione 'Deploy from a branch'"
echo "3. Em 'Branch', selecione 'main' e clique 'Save'"
echo "4. Aguarde alguns minutos e acesse: https://zevictor-design.github.io/portfolio" 
# 🐾 DESENVOLVIMENTO DE UMA PLATAFORMA QUADRÚPEDE (Robot Dog Mauá)

Repositório de apresentação e portfólio da equipe responsável pelo Trabalho de Conclusão de Curso (TCC) em Engenharia no Instituto Mauá de Tecnologia.

- **Repositório do Robô**: [carloterzaghi/Robot-Dog-Maua](https://github.com/carloterzaghi/Robot-Dog-Maua)
- **Orientadora**: **ANDRESSA CORRENTE MARTINS**
- **Ano**: 2026

---

## 👥 Equipe do Projeto

- **Carlo Terzaghi Tuck Schneider** — Líder Técnico & Software / Firmware (Cinemática Inversa e Controle)
- **Gustavo** — Engenharia de Hardware & Eletrônica (Potência e Sensores)
- **Tamilis** — Modelagem Mecânica & UI / Telemetria (Estrutura 3D e Interface)
- **Kassem** — Algoritmos de Locomoção & Validação / QA (Gait Planning e Estabilidade)

---

## 🦾 Sobre a Plataforma Quadrúpede

O projeto visa desenvolver uma plataforma robótica quadrúpede bio-inspirada para locomoção estável em múltiplos terrenos, englobando:
1. **Cinemática Direta e Inversa (IK)**: Resolução matemática das posições angulares de cada junta.
2. **Gait Planning**: Geração de padrões de marcha e controle dinâmico de equilíbrio.
3. **Hardware Embarcado**: Atuadores servomotores, unidade inercial (IMU) e barramentos de alta velocidade.
4. **Estrutura Mecânica**: Chassi modelado em CAD para distribuição balanceada de massa e rigidez.

---

## 📂 Estrutura do Site Portfólio

```text
├── index.html                 # Página principal com Hero, Equipe e Detalhes do TCC
├── photos/                    # Fotos reais dos integrantes
│   ├── carlo.jpg
│   ├── gustavo.png
│   ├── tamilis.png
│   └── kassem.jpg
├── assets/
│   ├── css/
│   │   └── style.css          # Design system, glassmorphism e responsividade
│   └── js/
│       ├── team-data.js       # Base de dados dos 4 integrantes
│       └── main.js            # Lógica interativa, modais e efeitos
├── LICENSE
└── README.md
```

---

## 🌐 Como Visualizar Localmente

Inicie um servidor HTTP local:

```bash
# Com Python:
python -m http.server 5173

# Ou com Node:
npx serve .
```

Acesse em: `http://localhost:5173`.

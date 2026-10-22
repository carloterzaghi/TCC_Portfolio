# 🐾 MauAU - Plataforma Robótica Quadrúpede

Portfólio web oficial e apresentação da equipe do Trabalho de Conclusão de Curso (TCC) em **Engenharia de Controle e Automação** no **Instituto Mauá de Tecnologia (IMT)** para a **Eureka 2026**.

- **Repositório do Robô**: [carloterzaghi/Robot-Dog-Maua](https://github.com/carloterzaghi/Robot-Dog-Maua)
- **Orientadora**: **Profª. M.ª Andressa Corrente Martins** — [LinkedIn](https://www.linkedin.com/in/andressacorrentemartins)
- **Ano de Conclusão**: 2026

---

## 👥 Integrantes da Equipe

- **Carlo Terzaghi Tuck Schneider** — Líder Técnico & Software / Firmware  
  [LinkedIn](https://www.linkedin.com/in/carlotts) | [GitHub](https://github.com/carloterzaghi)
- **Gustavo Junqueira Gallinari Arruda** — Engenharia de Hardware & Eletrônica  
  [LinkedIn](https://www.linkedin.com/in/gustavo-junqueira-gallinari-arruda-55b337243)
- **Tamilis Lin Wu** — Modelagem Mecânica & UI / Telemetria  
  [LinkedIn](https://www.linkedin.com/in/tamilis-lin-wu-31a751240)
- **Kassem Mahmoud Hamdoun** — Algoritmos de Locomoção & Validação / QA  
  [LinkedIn](https://www.linkedin.com/in/kassem-mahmoud)

---

## 🦾 Sobre a Plataforma MauAU

O projeto investiga os princípios de locomoção bio-inspirada quadrúpede, integrando:
1. **Cinemática Direta e Inversa (IK)**: Cálculo em tempo real dos ângulos articulares das 4 patas.
2. **Gait Planning**: Geração de padrões de marcha e estabilização postural com leitura de IMU.
3. **Hardware Embarcado**: Atuadores servomotores, barramentos de comunicação rápida e gerenciamento de potência.
4. **Estrutura Mecânica CAD**: Modelagem 3D, balanceamento de centro de massa e chassi modular leve.

---

## 📂 Estrutura de Arquivos

```text
├── index.html                 # Página principal com vídeo trailer, equipe e orientadora
├── photos/                    # Fotos reais dos integrantes e logo oficial
│   ├── andressa.jpg
│   ├── carlo.jpg
│   ├── gustavo.png
│   ├── kassem.jpg
│   ├── tamilis.png
│   └── logo_mauau.png
├── videos/                    # Trailer oficial em vídeo do TCC
│   └── trailer.mp4
├── assets/
│   ├── css/
│   │   └── style.css          # Design system com tema MauAU
│   └── js/
│       ├── team-data.js       # Base de dados sincronizada com o LinkedIn
│       └── main.js            # Lógica interativa, modais e eventos
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

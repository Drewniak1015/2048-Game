# Gra 2048

Prosta implementacja popularnej gry puzzle 2048 w Typescript

## Opis

2048 to gra logiczna dla jednego gracza, której celem jest przesuwanie kafelków na siatce w taki sposób, aby je połączyć i stworzyć kafelek o numerze 2048. Gra kończy się, gdy plansza jest pełna i nie ma już dostępnych ruchów.

Ten projekt to prosta implementacja gry w JavaScript (lub React, jeśli dotyczy), oferująca:

- Siatkę o wymiarach 4x4.
- Logikę łączenia i przesuwania kafelków.
- Warunek zwycięstwa (gdy kafelek osiągnie wartość 2048).
- Warunek przegranej (gdy nie ma już dostępnych ruchów).

## Funkcje

- **Łączenie kafelków:** Połącz kafelki o tej samej wartości, aby utworzyć nowy kafelek o sumie obu liczb.
- **Ruchy:** Kafelki można przesuwać w czterech kierunkach: w górę, w dół, w lewo lub w prawo.
- **Śledzenie wyniku:** Bieżący wynik jest wyświetlany i aktualizowany po każdym połączeniu kafelków.
- **Reset gry:** Zresetuj grę po osiągnięciu wygranej lub w przypadku przegranej.
- **Animacje:** Płynne animacje przesuwania kafelków dla lepszego doświadczenia użytkownika.

## Link

Link do gry: [2048](https://Drewniak1015.github.io/2048-Game/)

## Instalacja

1. Sklonuj to repozytorium:
   ```bash
   git clone https://github.com/Drewniak1015/2048.git
2. cd nazwa-projektu
3. npm install
4. npm start

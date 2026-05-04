#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    srand(time(0));
    
    // Randomize positions (0-8)
    int treasure = rand() % 9;
    int trap = rand() % 9;
    while (trap == treasure) trap = rand() % 9; // Ensure trap isn't on the treasure

    int guess;
    bool gameOver = false;

    cout << "--- GRID HUNTER ---\n";
    cout << "Find the [T]reasure. Avoid the [X] Trap.\n";
    cout << "Grid positions:\n0 1 2\n3 4 5\n6 7 8\n\n";

    while (!gameOver) {
        cout << "Choose a square (0-8): ";
        if (!(cin >> guess) || guess < 0 || guess > 8) {
            cout << "Invalid square! Pick 0-8.\n";
            cin.clear();
            cin.ignore(10000, '\n');
            continue;
        }

        if (guess == treasure) {
            cout << "\n[!] GOLD FOUND! You win!\n";
            gameOver = true;
        } else if (guess == trap) {
            cout << "\n[X] BOOM! You hit the trap. Game Over.\n";
            gameOver = true;
        } else {
            // Hot or Cold logic to keep it interesting
            cout << "Empty... but you feel a breeze from ";
            if (guess < treasure) cout << "somewhere ahead.\n\n";
            else cout << "somewhere behind you.\n\n";
        }
    }

    return 0;
}
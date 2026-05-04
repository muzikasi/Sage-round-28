#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    srand(time(0)); 
    int secret = rand() % 20 + 1; 
    int guess = 0;

    cout << "--- GUESS THE NUMBER (1-20) ---\n";

    while (guess != secret) {
        cout << "Enter your guess: ";
        cin >> guess;

        if (guess > secret) {
            cout << "Too high! Try again.\n\n";
        } else if (guess < secret) {
            cout << "Too low! Try again.\n\n";
        } else {
            cout << "CORRECT! You found the secret number: " << secret << endl;
        }
    }

    return 0;
}
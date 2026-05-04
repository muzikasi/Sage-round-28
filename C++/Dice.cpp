#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    // Seed the random number generator
    srand(time(0));

    cout << "--- DICE ROLL BATTLE ---\n";
    cout << "Press Enter to roll the dice...";
    cin.get(); // Waits for the user to press Enter

    // Roll two dice (1-6)
    int playerRoll = (rand() % 6) + 1;
    int computerRoll = (rand() % 6) + 1;

    cout << "\nYou rolled a: [" << playerRoll << "]" << endl;
    cout << "Computer rolled a: [" << computerRoll << "]" << endl;

    // Determine the outcome
    if (playerRoll > computerRoll) {
        cout << "\nVictory! You outrolled the machine.\n";
    } 
    else if (playerRoll < computerRoll) {
        cout << "\nDefeat! The computer wins this round.\n";
    } 
    else {
        cout << "\nIt's a draw! Great minds roll alike.\n";
    }

    return 0;
}
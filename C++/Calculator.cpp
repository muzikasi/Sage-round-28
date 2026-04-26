#include <iostream>
using namespace std;

double sum(double a, double b){ 
   return a + b;
 }
double times(double a, double b){ 
  return a * b; 
  }
double subtraction(double a, double b){ 
   return a - b; 
   }

double div(double a, double b){
    if(b == 0){
        cout << "Error! Division by zero." << endl;
        return 0;
    }
    return a / b;
}

int main(){
    string pick;
    double num1, num2;

    while(true){

        cout << "================ Enter only number to choose! =================" << endl;
        cout << "1.Addition" << endl;
        cout << "2.Multiplication" << endl;
        cout << "3.Subtraction" << endl;
        cout << "4.Division" << endl;
        cout << "0.Exit" << endl;

        cin >> pick;

        if(pick == "0"){
            cout << "Goodbye!" << endl;
            break;
        }

        if(pick == "1" || pick == "2" || pick == "3" || pick == "4"){

            cout << "Enter number 1: ";
            cin >> num1;

            cout << "Enter number 2: ";
            cin >> num2;

            if(pick == "1"){
                cout << "Result: " << sum(num1, num2) << endl;
            }else if(pick == "2"){
                cout << "Result: " << times(num1, num2) << endl;
            }else if(pick == "3"){
                cout << "Result: " << subtraction(num1, num2) << endl;
            }else if(pick == "4"){
                cout << "Result: " << div(num1, num2) << endl;
            }

        }else{
            cout << "Invalid choice! Try again." << endl;
        }
    }

    return 0;
}
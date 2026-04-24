#include <iostream>

using namespace std;

    int sum (int a ,int b , int c){
    	
    	return a+b+c;
	}

int main (){

   int num1, num2, num3;
   
   cout<<"Enter your first number : ";
   cin>>num1;
   
   cout<<"Enter your second number : ";
   cin>>num2;
   
   
   cout<<"Enter your second number : ";
   cin>>num3;
   cout<<"The sum of "<< num1<< " + "<<num2<<" + "<<num3<<" is: "<<sum(num1, num2, num3 );

   
	return 0;
}
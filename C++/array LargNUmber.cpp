#include <iostream>

using namespace std;

int main (){
	
	int numbers [5];
	int largNumber;
	
	
	for(int i=0; i<=4; i++){
		cout<<"Enter " << i+1 <<" numbers: ";
		cin>>numbers[i];
	}
	largNumber = numbers[0];
	for(int i=0; i<=4; i++){
		if(largNumber < numbers[i]){
			largNumber= numbers[i];
		}
	}
	
	cout<<"Largest Number is: "<<largNumber;
	
	return 0;
}
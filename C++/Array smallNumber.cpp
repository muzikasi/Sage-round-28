#include <iostream>

using namespace std;

int main (){
	
	int numbers [5];
	int smallNumber;
	
	
	for(int i=0; i<=4; i++){
		cout<<"Enter " << i+1 <<" numbers: ";
		cin>>numbers[i];
	}
	smallNumber = numbers[0];
	for(int i=0; i<=4; i++){
		if(smallNumber > numbers[i]){
			smallNumber= numbers[i];
		}
	}
	
	cout<<"Smallest Number is: "<<smallNumber;
	
	return 0;
}
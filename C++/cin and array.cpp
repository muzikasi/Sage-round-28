#include <iostream>

using namespace std;

int main (){
	
	int numbers [5];
	
	
	for(int i=0; i<=4; i++){
		cout<<"Enter " << i+1 <<" numbers: ";
		cin>>numbers[i];
	
	}
	
	
		cout<<"================== \n";
	for(int i=0; i<=4; i++){
		
		cout<<numbers[i]<<endl;
	
	}
	
	return 0;
}
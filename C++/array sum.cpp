#include <iostream>

using namespace std;

int main (){
	
	int numbers [5];
	int sum;
	
		for(int i=0; i<=4; i++){
		cout<<"Enter " << i+1 <<" numbers: ";
		cin>>numbers[i];
		sum+=numbers[i];
	}
     cout<<"The 5 array number sum is: "<<sum;
	
	return 0;
}
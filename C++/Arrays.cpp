#include <iostream>

using namespace std;

int main (){
	
	int numbers [5]={1,3,4,34,56};
	
	cout<<numbers[3]<<endl;
	numbers[3] = 100;
	cout<<numbers[3]<<endl;;
	
	for(int i=0; i<=4; i++){
		
		cout<<numbers[i]<<endl;
	
	}
	
	return 0;
}
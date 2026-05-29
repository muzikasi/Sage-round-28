#include <iostream>

using namespace std;

double add (double x, double y){
	return x+y;
}

int main(){
	
	int age = 20;
	
	if(age>18){
		cout<<"adult"<<endl;		
	}else{
		cout<<"Minor"<<endl;
	}
	
	cout<<"9 + 12 = "<<add(9,12)<<endl;
	return 0;
}

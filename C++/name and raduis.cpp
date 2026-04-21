#include <iostream>

using namespace std;

int main (){
	string name;
	
	cout << "Enter Your Name:  ";
	cin>>name;
	
	cout<<"Your Name is: "<< name <<endl;
	
	
	const double pi=3.14;
	double r,total;
	
	cout << "Enter Radius:  ";
	cin>>r;
	
	total= 2*pi*r;
	
	cout<<"Circumference: "<<total;
	
	
	return 0;
	
}